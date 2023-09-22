import {
  MutationOptions,
  QueryKey,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { ICustomersRepositoriesReactQuery } from "../Port/Customer.port.repositories.react-query";
import { ICustomerRepositories } from "../Port/Customer.port.repositories";
import { Customer } from "../Model/Customer.model";

export class CustomerRepositoriesReactQuery
  implements ICustomersRepositoriesReactQuery
{
  private readonly customerApiService: ICustomerRepositories;

  constructor(CustomerApiService: ICustomerRepositories) {
    this.customerApiService = CustomerApiService;
  }

  useGetAllCustomersQuery(
    queryOptions?: Omit<
      UseQueryOptions<Customer[], Error, Customer[], QueryKey>,
      "queryKey" | "queryFn"
    >
  ): UseQueryResult<Customer[], Error> {
    return useQuery<Customer[], Error>(
      ["CustomerService.getAll"],
      () => this.customerApiService.getAll(),
      queryOptions
    );
  }

  useGetIdCustomerQuery(
    id: string,
    queryOptions?: Omit<
      UseQueryOptions<Customer, Error, Customer, QueryKey>,
      "queryKey" | "queryFn"
    >
  ): UseQueryResult<Customer, Error> {
    return useQuery<Customer, Error>(
      ["CustomerService.getById", id],
      () => this.customerApiService.getId(id),
      queryOptions
    );
  }

  useUpdateCustomerMutation(
    mutationOptions?: MutationOptions<Customer, Error, Customer, unknown>
  ): UseMutationResult<Customer, Error, Customer, unknown> {
    return useMutation<Customer, Error, Customer, unknown>(
      (data) => this.customerApiService.edit(data),
      mutationOptions
    );
  }

  useDeleteCustomerMutation(
    mutationOptions?: MutationOptions<Customer, Error, Customer, unknown>
  ): UseMutationResult<Customer, Error, Customer, unknown> {
    return useMutation<Customer, Error, Customer, unknown>(
      (data) => this.customerApiService.delete(data.id),
      mutationOptions
    );
  }
}
