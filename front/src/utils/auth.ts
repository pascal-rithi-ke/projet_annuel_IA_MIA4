import { getToken } from "../Modules/Auth/Repositories/user.localstore";

export const isAuthentified = (): boolean => getToken()?.token !== undefined;