import {
  MutationOptions,
  QueryKey,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { Cart } from "../Model/Cart.model";

export interface ICartRepositoriesReactQuery {
  useGetAllCartsQuery(
    queryOptions?: Omit<
      UseQueryOptions<Cart, Error, Cart, QueryKey>,
      "queryKey" | "queryFn"
    >
  ): UseQueryResult<Cart, Error>;

  useAddToCartsMutation(
    mutationOptions?: MutationOptions<String, Error, { id: string, quantity: number }, unknown>
  ): UseMutationResult<String, Error, { id: string, quantity: number }, unknown>;

  useRemoveFromCartsMutation(
    mutationOptions?: MutationOptions<String, Error, { id: string }, unknown>
  ): UseMutationResult<String, Error, { id: string }, unknown>;

}