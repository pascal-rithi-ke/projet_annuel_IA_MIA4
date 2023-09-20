import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "../../Modules/Auth/Repositories/user.localstore";

export const ProtectedRoute = ({
  authRole,
  redirectPath = '/',
  children,
}: any) => {

  const token = getToken()
  // decode token 


  if (!token) {
    return <Navigate to={"/login"} replace />;
  }

  if (token.role !== authRole) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};