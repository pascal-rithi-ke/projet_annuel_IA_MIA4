import { User } from "../Model/User.model";
import { IUsersRepositories } from "../Port/User.port.repositories";

interface UserResponse {
  data: {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string,
  }
}
export class UsersRepositories implements IUsersRepositories {
  async getById(id: number): Promise<User> {
    var response = await fetch(`https://reqres.in/api/users/${id}`);

    const responseContent = await response.json() as UserResponse;

    if (!response.ok) {
      throw new Error(`Failed to update user profile. ${responseContent}`);
    }

    return {
      id: responseContent.data.id,
      email: responseContent.data.email,
      first_name: responseContent.data.first_name,
      last_name: responseContent.data.last_name,
      avatar: responseContent.data.avatar,
    }
  }
}