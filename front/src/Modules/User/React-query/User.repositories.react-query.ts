import { QueryKey, UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query";
import { IUsersRepositoriesReactQuery } from "../Port/User.port.repositories.react-query";
import { IUsersRepositories } from "../Port/User.port.repositories";
import { User } from "../Model/User.model";

export class UsersRepositoriesReactQuery implements IUsersRepositoriesReactQuery {
  private readonly usersApiService: IUsersRepositories

  constructor(UsersApiService: IUsersRepositories) {
    this.usersApiService = UsersApiService
  }

  useGetUserByIdQuery(
    id: number,
    queryOptions?: Omit<UseQueryOptions<User, Error, User, QueryKey>, 'queryKey' | 'queryFn'>
  ): UseQueryResult<User, Error> {
    return useQuery<User, Error>(['UsersService.getById', id], () => this.usersApiService.getById(id), queryOptions);
  }
};