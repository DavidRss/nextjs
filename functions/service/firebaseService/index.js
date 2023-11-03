const admin = require("firebase-admin");
const { FBCollections } = require("../../constants");

const firestore = admin.firestore();

exports.getUsers = async function () {
  try {
    const querySnapshot = await firestore.collection(FBCollections.USERS).get();
    const users = [];
    querySnapshot.forEach((doc) => {
      users.push(doc.data());
    });
    return users;
  } catch (err) {
    console.log("===== getUsers error: ", err);
  }
  return [];
};

exports.getUserById = async function (userId) {
  try {
    const doc = await firestore
      .collection(FBCollections.USERS)
      .doc(userId)
      .get();

    if (doc.exists) {
      return doc.data();
    }
  } catch (err) {
    console.log("===== getUserById error: ", err);
  }

  return null;
};

exports.getUserByReferralCode = async function (referralCode) {
  try {
    const res = await firestore
      .collection(FBCollections.USERS)
      .where("referralCode", "==", referralCode)
      .get();
    console.log("===== res: ", res);
    if (!res.empty) {
      return res.docs[0].data();
    }
  } catch (err) {
    console.log("===== getUserByReferralCode error: ", err);
  }
  return null;
};

exports.updateUser = async function (userId, params) {
  console.log("===== udpateUser: ", params);
  try {
    await firestore.collection(FBCollections.USERS).doc(userId).update(params);
    return true;
  } catch (err) {
    console.log("===== updateUser error: ", err);
  }
  return false;
};

exports.getProject = async function (projectId) {
  try {
    const doc = await firestore
      .collection(FBCollections.PROJECTS)
      .doc(projectId)
      .get();
    if (doc.exists) {
      return doc.data();
    }
  } catch (err) {
    console.log("===== getProject error: ", err);
    return null;
  }
};

exports.updateProject = async function (projectId, params) {
  try {
    await firestore
      .collection(FBCollections.PROJECTS)
      .doc(projectId)
      .update(params);
    return true;
  } catch (err) {
    console.log("===== updateProject error: ", err);
  }
  return false;
};

exports.addRewardsIntoProject = async function (projectId, rewards) {
  try {
    await firestore
      .collection(FBCollections.PROJECTS)
      .doc(projectId)
      .collection(FBCollections.REWARDS)
      .add(rewards);

    return true;
  } catch (err) {
    console.log("===== updateProject error: ", err);
  }

  return false;
};

exports.participateUser = async function (projectId, user, donations, points) {
  try {
    const params = {
      id: user.id,
      username: user.username,
      country: "Frence",
      donations,
      points,
      createdAt: Date.now(),
    };
    await firestore
      .collection(FBCollections.PROJECTS)
      .doc(projectId)
      .collection(FBCollections.PARTICIPANTS)
      .doc(user.id)
      .add(params);

    return true;
  } catch (err) {
    console.log("===== participateUser error: ", err);
  }

  return false;
};
