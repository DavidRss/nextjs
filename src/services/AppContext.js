import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { projectService, userService } from "./FirebaseService";
import { PROJECT_ID } from "../constants/constants";

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

  const saveUser = (user) => {
    setCurrentUser(user);
    setItem("user", JSON.stringify(user));
  };

  const removeUser = () => {
    setCurrentUser(null);
    removeItem("user");
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

  const loadUser = async (userId) => {
    try {
      const docSnap = await userService.getUser(userId);
      if (docSnap.exists()) {
        const user = docSnap.data();
        saveUser(user);
      }
    } catch (err) {
      console.log("===== loadUser error: ", err);
    }

    setLoadingUser(false);
  };

  useEffect(() => {
    const userString = getItem("user");
    if (userString) {
      const user = JSON.parse(userString);

      loadUser(user.id);
    } else {
      setLoadingUser(false);
    }

    loadProject();

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  return useContext(AppContext);
};
