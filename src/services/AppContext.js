import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { projectService } from "./FirebaseService";
import { PROJECT_ID } from "../constants/constants";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [pageLoading, setPageLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const [loadedProject, setLoadedProject] = useState(false);
  const [project, setProject] = useState(null);

  const [notifyMessage, showNotifyMessage] = useState(null);

  const { getItem, setItem, removeItem } = useLocalStorage();

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
          console.log("===== getProject data: ", docSnap.data());
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

  useEffect(() => {
    const user = getItem("user");
    console.log("===== AppProvider: ", user);
    if (user) {
      saveUser(JSON.parse(user));
    }
    setPageLoading(false);

    loadProject();
  }, []);

  return (
    <AppContext.Provider
      value={{
        pageLoading,
        loading,
        setLoading,
        currentUser,
        saveUser,
        removeUser,
        loadedProject,
        project,
        notifyMessage,
        showNotifyMessage
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  return useContext(AppContext);
};
