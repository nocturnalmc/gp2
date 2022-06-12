import { Navigate } from "react-router-dom";
import { useGlobalAdminAppContext } from "../context/adminAppContext";

function AdminProtectedRoute({ children }) {
  const { token } = useGlobalAdminAppContext();
  // const { admin } = token;

  if (!token) {
    return <Navigate to="/" />;
  }
  return children;
}

export default AdminProtectedRoute;
