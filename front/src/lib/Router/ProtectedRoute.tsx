import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({
  authRole,
  redirectPath = '/',
  children,
}: any) => {

  const token = {
    role: 'user'
  }

  if (!token) {
    return <Navigate to={"/login"} replace />;
  }

  if (token.role !== authRole) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};