import { Navigate, Outlet } from "react-router-dom";

export const ProtectedPublicRoute = ({
  children,
}: any) => {

  // const token = {
  //   role: 'user'
  // }
  const token = null

  if (token) {
    return <Navigate to={"/"} replace />;
  }

  return children ? children : <Outlet />;
};