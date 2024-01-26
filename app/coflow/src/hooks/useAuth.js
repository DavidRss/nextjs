import { useApp } from "../services/app.context";

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
