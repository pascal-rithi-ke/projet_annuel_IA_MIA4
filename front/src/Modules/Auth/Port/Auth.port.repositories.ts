import { Auth } from "../Model/Auth";

export interface IAuthRepositories {
  signIn(email: string, password: string): Promise<Auth>;
  signUp(email: string, password: string): Promise<any>;
}