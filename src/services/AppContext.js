import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import {
  FBCollections,
  firestore,
  projectService,
  userService,
} from "./FirebaseService";
import { PROJECT_ID, STORAE_KEY } from "../constants/constants";
import { shopifyService } from "./ShopifyService";
import { getCurrentTimestamp, getDailyPoints } from "../utils/utils";
import { doc, onSnapshot } from "firebase/firestore";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [notifyMessage, showNotifyMessage] = useState(null);

  const { getItem, setItem, removeItem } = useLocalStorage();

  const [loadingUser, setLoadingUser] = useState(true);
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const [loadedProject, setLoadedProject] = useState(false);
  const [project, setProject] = useState(null);

  const [isShowLoginDialog, showLoginDialog] = useState(false);

  const [isParticipated, setIsParticipated] = useState(false);

  const [loadingProducts, setLoadingProducts] = useState(false);
  const [products, setProducts] = useState([]);
  const [donationProduct, setDonationProduct] = useState(null);

  const [checkout, setCheckout] = useState(null);

  const [unsubscribeUsser, setUnsubscribeUser] = useState(null);

  const saveUser = (user) => {
    setCurrentUser(user);
    setItem(STORAE_KEY.USER, JSON.stringify(user));
  };

  const removeUser = () => {
    setCurrentUser(null);
    removeItem(STORAE_KEY.USER);
  };

  const saveCheckout = (value) => {
    setCheckout(value);
    setItem(STORAE_KEY.CHECKOUT, JSON.stringify(value));
  };

  const loadUser = async (userId) => {
    try {
      const docSnap = await userService.getUser(userId);
      if (docSnap.exists()) {
        const user = docSnap.data();

        user.points = user.points + getDailyPoints(user.visited);
        user.visited = getCurrentTimestamp();
        userService.updateUser(userId, user);

        saveUser(user);
      }
    } catch (err) {
      console.log("===== loadUser error: ", err);
    }

    setLoadingUser(false);
  };

  const loadProject = () => {
    projectService
      .getProject(PROJECT_ID)
      .then((docSnap) => {
        if (docSnap.exists()) {
          setProject(docSnap.data());
          setLoadedProject(true);
        } else {
          console.log("===== No such document =====");
        }
      })
      .catch((err) => {
        console.log("===== getProject error: ", err);
      });
  };

  const loadProducts = async () => {
    try {
      setLoadingProducts(true);
      const res = await shopifyService.getProductList();
      let productList = [];
      for (const item of res) {
        if (item.productType === "") {
          productList.push(item);
        } else if (item.productType === "Donation") {
          setDonationProduct(item);
        }
      }
      setProducts(productList);
      setLoadingProducts(false);
    } catch (err) {
      setLoadingProducts(false);
      console.log("===== fetch products all error: ", err);
    }
  };

  const loadCheckout = () => {
    const checkoutString = getItem(STORAE_KEY.CHECKOUT);
    if (checkoutString) {
      setCheckout(JSON.parse(checkoutString));
    }
  };

  const subscribeUser = (userId) => {
    console.log("===== subscribeUser: ", userId);
    const unsubscribe = onSnapshot(
      doc(firestore, FBCollections.USERS, userId),
      (snapshot) => {
        console.log("===== updated user =====");
        const source = snapshot.metadata.hasPendingWrites ? "Local" : "Server";
        console.log(source, " data: ", snapshot.data());
      }
    );
    console.log("===== unsubscribe: ", unsubscribe);
    setUnsubscribeUser(unsubscribe);
  };

  useEffect(() => {
    const userString = getItem(STORAE_KEY.USER);
    if (userString) {
      const user = JSON.parse(userString);

      loadUser(user.id);

      subscribeUser(user.id);
    } else {
      setLoadingUser(false);
    }

    loadProject();

    loadProducts();

    loadCheckout();

    return () => {
      if (unsubscribeUsser) {
        console.log("===== unsubscribeUser =====");
        unsubscribeUsser();
      }
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        loadingUser,
        loading,
        setLoading,
        currentUser,
        saveUser,
        removeUser,
        loadedProject,
        project,
        notifyMessage,
        showNotifyMessage,
        isParticipated,
        isShowLoginDialog,
        showLoginDialog,
        loadingProducts,
        products,
        donationProduct,
        checkout,
        saveCheckout,
        subscribeUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  return useContext(AppContext);
};
