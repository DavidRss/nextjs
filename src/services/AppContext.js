import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { projectService } from "./FirebaseService";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  const [loadedProject, setLoadedProject] = useState(false);
  const [project, setProject] = useState(null);

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
      .getProject("wGJO9iMDd6cQdtjw2D8s")
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
    setIsLoading(false);

    loadProject();
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        currentUser,
        saveUser,
        removeUser,
        loadedProject,
        project,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  return useContext(AppContext);
};
