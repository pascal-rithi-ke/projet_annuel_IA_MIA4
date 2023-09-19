import { User } from "../Model/User.model";
import { IUsersRepositories } from "../Port/User.port.repositories";

export class UsersInMemoryRepositories implements IUsersRepositories {
  getById(id: number): Promise<User> {
    var user = FakeUserData.find((u) => u.id === id);

    if (!user) {
      throw new Error('Unable to find user');
    }
    return new Promise<User>((resolve) => {
      resolve(user || {} as User);
    });
  }
}
const FakeUserData = [
  {
    id: 1,
    email: 'george.bluth@reqres.in',
    first_name: 'George',
    last_name: 'Bluth',
    avatar: 'https://reqres.in/img/faces/1-image.jpg',
  },
  {
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://reqres.in/img/faces/2-image.jpg',
  },
  {
    id: 3,
    email: 'emma.wong@reqres.in',
    first_name: 'Emma',
    last_name: 'Wong',
    avatar: 'https://reqres.in/img/faces/3-image.jpg',
  },
]