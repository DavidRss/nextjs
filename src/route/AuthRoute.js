import { Navigate, useLocation } from "react-router-dom";
import { useApp } from "../services/AppContext";
import Spinner from "../components/spinner/Spinner";

const AuthRoute = ({ children }) => {
  const { currentUser, pageLoading } = useApp();
  const location = useLocation();

  if (pageLoading) {
    return <Spinner />;
  }

  if (!currentUser) {
    return <Navigate to="/signin" replace state={{ from: location }} />;
  }

  return children;
};

export default AuthRoute;
