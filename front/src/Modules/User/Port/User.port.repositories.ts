import { User } from "../Model/User.model";

export interface IUsersRepositories {
  getById(id: number): Promise<User>;
}