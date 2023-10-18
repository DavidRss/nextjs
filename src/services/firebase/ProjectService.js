import {
  collection,
  doc,
  getCountFromServer,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  setDoc,
  startAfter,
  updateDoc,
} from "firebase/firestore";
import { FBCollections } from "../FirebaseService";
import { DEFAULT_USER_COUNTRY } from "../../constants/constants";

export default class ProjectService {
  constructor(firestore) {
    this.firestore = firestore;
  }

  getProject = (projectId) => {
    return getDoc(doc(this.firestore, FBCollections.PROJECTS, projectId));
  };

  saveProject = (projectId, params) => {
    return setDoc(
      doc(this.firestore, FBCollections.PROJECTS, projectId),
      params
    );
  };

  updateProject = (projectId, params) => {
    return updateDoc(
      doc(this.firestore, FBCollections.PROJECTS, projectId),
      params
    );
  };

  participateUser = (projectId, user, donation) => {
    const params = {
      id: user.id,
      username: user.username,
      country: user?.country ? user.country : DEFAULT_USER_COUNTRY,
      donations: donation,
      points: user?.points ? user.points : 0,
    };

    console.log("===== participateUser: ", params);

    return setDoc(
      doc(
        this.firestore,
        FBCollections.PROJECTS,
        projectId,
        FBCollections.PARTICIPANTS,
        user.id
      ),
      params
    );
  };

  getParticipantTotalCount = async (projectId) => {
    const totalCountRef = collection(
      this.firestore,
      FBCollections.PROJECTS,
      projectId,
      FBCollections.PARTICIPANTS
    );
    const totalCountSnapshot = await getCountFromServer(totalCountRef);
    return totalCountSnapshot.data().count;
  };

  getParticipants = async (projectId, pageSize, lastVisible) => {
    let refQuery = null;
    if (lastVisible) {
      refQuery = query(
        collection(
          this.firestore,
          FBCollections.PROJECTS,
          projectId,
          FBCollections.PARTICIPANTS
        ),
        orderBy("donations", "desc"),
        startAfter(lastVisible),
        limit(pageSize)
      );
    } else {
      refQuery = query(
        collection(
          this.firestore,
          FBCollections.PROJECTS,
          projectId,
          FBCollections.PARTICIPANTS
        ),
        orderBy("donations", "desc"),
        limit(pageSize)
      );
    }
    const querySnapshot = await getDocs(refQuery);
    const resultArray = [];
    let lastVisibleItem = null;
    if (querySnapshot.docs.length > 0) {
      lastVisibleItem = querySnapshot.docs[querySnapshot.docs.length - 1];
      querySnapshot.forEach((doc) => {
        resultArray.push(doc.data());
      });
    }
    return { resultArray, lastVisibleItem };
  };
}
