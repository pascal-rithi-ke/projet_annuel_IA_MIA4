import { Navigate, Outlet } from "react-router-dom";

export const ProtectedPublicRoute = ({
  children,
}: any) => {

  const token = {
    role: 'user'
  }

  if (token) {
    return <Navigate to={"/"} replace />;
  }

  return children ? children : <Outlet />;
};