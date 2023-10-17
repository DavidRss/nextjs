import { Navigate, useLocation } from "react-router-dom";
import { useApp } from "../services/AppContext";

const AuthRoute = ({ children }) => {
  const { currentUser, isLoading } = useApp();
  const location = useLocation();

  if (isLoading) {
    return <></>;
  }

  console.log("===== AuthRoute: ", currentUser);

  if (!currentUser) {
    return <Navigate to="/signin" replace state={{ from: location }} />;
  }

  return children;
};

export default AuthRoute;
