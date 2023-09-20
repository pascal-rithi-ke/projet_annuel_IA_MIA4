import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "../../Modules/Auth/Repositories/user.localstore";

export const ProtectedPublicRoute = ({
  children,
}: any) => {

  const token = getToken()

  if (token) {
    return <Navigate to={"/"} replace />;
  }

  return children ? children : <Outlet />;
};