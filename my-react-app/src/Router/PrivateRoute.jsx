import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
export default PrivateRoute;
