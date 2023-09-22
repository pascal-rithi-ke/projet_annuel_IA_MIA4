import {
  MutationOptions,
  QueryKey,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { Customer } from "../Model/Customer.model";

export interface ICustomerRepositoriesReactQuery {
  useGetAllCustomersQuery(
    queryOptions?: Omit<
      UseQueryOptions<Customer[], Error, Customer[], QueryKey>,
      "queryKey" | "queryFn"
    >
  ): UseQueryResult<Customer[], Error>;
  useGetIdCustomerQuery(
    id: string,
    queryOptions?: Omit<
      UseQueryOptions<Customer, Error, Customer, QueryKey>,
      "queryKey" | "queryFn"
    >
  ): UseQueryResult<Customer, Error>;

  useUpdateCustomerMutation(
    mutationOptions?: MutationOptions<Customer, Error, Customer, unknown>
  ): UseMutationResult<Customer, Error, Customer, unknown>;

  useDeleteCustomerMutation(
    mutationOptions?: MutationOptions<Customer, Error, Customer, unknown>
  ): UseMutationResult<Customer, Error, Customer, unknown>;
}
