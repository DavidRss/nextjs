import { Navigate, useLocation } from "react-router-dom";
import { useApp } from "../services/app.context";
import Spinner from "../components/spinner/Spinner";

const AuthRoute = ({ children }) => {
  const { loadingUser, currentUser } = useApp();
  const location = useLocation();

  if (loadingUser) {
    return <Spinner />;
  }

  if (currentUser) {
    const pathname = window.location.pathname;
    if (pathname === "/signin" || pathname === "/signup") {
      return <Navigate to="/" replace state={{ from: location }} />;
    }
  }

  // if (!currentUser) {
  // return <Navigate to="/signin" replace state={{ from: location }} />;
  // }

  return children;
};

export default AuthRoute;
