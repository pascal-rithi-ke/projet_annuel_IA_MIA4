import { removeToken } from "../Repositories/user.localstore";


export const Logout = () => {

  const logoutSubmit = () => {
    removeToken();
    window.location.href = "/login";
  }

  return {
    logoutSubmit
  }
}