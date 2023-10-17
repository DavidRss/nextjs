import { useApp } from "../services/AppContext";

export const useAuth = () => {
  const { currentUser, saveUser, removeUser } = useApp();

  const login = (user) => {
    saveUser(user);
  };

  const logout = () => {
    removeUser();
  };

  return { currentUser, login, logout };
};
