import { useNavigate } from "react-router-dom";
import { removeToken } from "../Repositories/user.localstore";


export const Logout = () => {
  const navigate = useNavigate();
  const logoutSubmit = () => {
    removeToken();
    navigate("/login");
  }

  return {
    logoutSubmit
  }
}