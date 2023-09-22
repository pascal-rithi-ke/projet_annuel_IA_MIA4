import { Navigate, Outlet } from "react-router-dom";
import { isAuthentified } from "../../utils/auth";

export const ProtectedPublicRoute = ({
  children,
}: any) => {

  if (isAuthentified()) {
    return <Navigate to={"/"} replace />;
  }

  return children ? children : <Outlet />;
};