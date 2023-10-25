import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { projectService, userService } from "./FirebaseService";
import { PROJECT_ID, STORAE_KEY } from "../constants/constants";
import { shopifyService } from "./ShopifyService";
import { getCurrentTimestamp, getDailyPoints } from "../utils/utils";

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
      const productList = await shopifyService.getProductList();
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

  useEffect(() => {
    const userString = getItem(STORAE_KEY.USER);
    if (userString) {
      const user = JSON.parse(userString);

      loadUser(user.id);
    } else {
      setLoadingUser(false);
    }

    loadProject();

    loadProducts();

    loadCheckout();

    return () => {};
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
