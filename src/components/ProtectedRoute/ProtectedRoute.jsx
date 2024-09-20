import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, isAuthenticated, isLoggedInLoading }) => {
  if (isLoggedInLoading) return null;
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
