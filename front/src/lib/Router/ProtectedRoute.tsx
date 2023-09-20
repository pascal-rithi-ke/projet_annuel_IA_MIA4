import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "../../Modules/Auth/Repositories/user.localstore";
import { getJWTObject } from "../../utils/getJwtObject";

export const ProtectedRoute = ({
  authRole,
  redirectPath = '/',
  children,
}: any) => {

  const token = getToken();

  const tokenData = getJWTObject(token?.token || "");

  if (!token) {
    return <Navigate to={"/login"} replace />;
  }

  if (tokenData.role !== authRole) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};