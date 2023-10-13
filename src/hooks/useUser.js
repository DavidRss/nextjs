import { useContext } from "react";
import { AppContext } from "../services/AppContext";
import { useLocalStorage } from "./useLocalStorage";

export const useUser = () => {
  const { currentUser, setCurrentUser } = useContext(AppContext);
  const { setItem, removeItem } = useLocalStorage();

  const addUser = (user) => {
    setCurrentUser(user);
    setItem("user", JSON.stringify(user));
  };

  const removeUser = () => {
    setCurrentUser(null);
    removeItem("user");
  };

  return { currentUser, addUser, removeUser };
};
