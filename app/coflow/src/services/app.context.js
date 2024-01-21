import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { projectService, userService } from "./firebase.service";
import { PROJECT_ID, STORAE_KEY } from "../constants/constants";
import { shopifyService } from "./shopify.service";
import {
  getCurrentTimestamp,
  getDailyPoints,
  isAvailableProduct,
} from "../utils/utils";

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
  const [numberOfParticipant, setNumberOfParticipant] = useState(0);

  const [loadingProducts, setLoadingProducts] = useState(false);
  const [products, setProducts] = useState([]);
  const [donationProduct, setDonationProduct] = useState(null);

  const [checkout, setCheckout] = useState(null);

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

    setTimeout(() => {
      setLoadingUser(false);
    }, 500);
  };

  const loadProject = () => {
    projectService
      .getProject(PROJECT_ID)
      .then((docSnap) => {
        if (docSnap.exists()) {
          setProject(docSnap.data());
          console.log("===== project: ", docSnap.data());
          setLoadedProject(true);
        } else {
          console.log("===== No such document =====");
        }
      })
      .catch((err) => {
        console.log("===== getProject error: ", err);
      });
  };

  const loadNumberOfParticipant = async () => {
    const totalCnt = await projectService.getParticipantTotalCount(PROJECT_ID);
    setNumberOfParticipant(totalCnt);
  };

  const loadProducts = async () => {
    try {
      setLoadingProducts(true);
      const res = await shopifyService.getProductList();
      let productList = [];
      for (const item of res) {
        if (item.productType === "Donation") {
          setDonationProduct(item);
        } else {
          if (isAvailableProduct(item)) {
            productList.push(item);
          }
        }
      }
      productList = productList.sort((a, b) => {
        return a.variants[0].price.amount - b.variants[0].price.amount;
      });
      setProducts(productList);
      setLoadingProducts(false);
    } catch (err) {
      setLoadingProducts(false);
      console.log("===== fetch products all error: ", err);
    }
  };

  useEffect(() => {
    const userString = getItem(STORAE_KEY.USER);
    console.log("===== userString: ", typeof userString);
    if (userString) {
      const user = JSON.parse(userString);

      loadUser(user.id);
    } else {
      setLoadingUser(false);
    }

    loadProject();

    loadNumberOfParticipant();

    loadProducts();
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
        numberOfParticipant,
        isParticipated,
        isShowLoginDialog,
        showLoginDialog,
        loadingProducts,
        products,
        donationProduct,
        checkout,
        saveCheckout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  return useContext(AppContext);
};
