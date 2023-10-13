import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useUser } from "./useUser";

export const useAuth = () => {
  const { currentUser, addUser, removeUser } = useUser();
  const { getItem } = useLocalStorage();

  useEffect(() => {
    const user = getItem("user");
    if (user) {
      addUser(JSON.parse(user));
    }
  }, []);

  const login = (user) => {
    addUser(user);
  };

  const logout = () => {
    removeUser();
  };

  return { currentUser, login, logout };
};
