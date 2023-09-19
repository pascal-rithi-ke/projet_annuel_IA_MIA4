import { QueryKey, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import { User } from "../Model/User.model";

export interface IUsersRepositoriesReactQuery {
  useGetUserByIdQuery(id: number, queryOptions?: Omit<UseQueryOptions<User, Error, User, QueryKey>, 'queryKey' | 'queryFn'>): UseQueryResult<User, Error>;
}