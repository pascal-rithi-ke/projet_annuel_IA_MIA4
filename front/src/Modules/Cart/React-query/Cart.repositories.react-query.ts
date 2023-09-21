import { MutationOptions, QueryKey, UseMutationResult, UseQueryOptions, UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import { ICartRepositoriesReactQuery } from "../Port/Cart.port.repositories.react-query";
import { Cart } from "../Model/Cart.model";
import { ICartRepositories } from "../Port/Cart.port.repositories";



export class CartRepositoriesReactQuery implements ICartRepositoriesReactQuery {

  private readonly cartApiService: ICartRepositories;

  constructor(CartApiService: ICartRepositories) {
    this.cartApiService = CartApiService;
  }

  useGetAllCartsQuery(
    queryOptions?: Omit<UseQueryOptions<Cart, Error, Cart, QueryKey>, "queryKey" | "queryFn"> | undefined
  ): UseQueryResult<Cart, Error> {
    return useQuery<Cart, Error>(["CartService.getAll"], () => this.cartApiService.getAll(), queryOptions);
  }

  useAddToCartsMutation(
    mutationOptions?: MutationOptions<String, Error, { id: string, quantity: number }, unknown>
  ): UseMutationResult<String, Error, { id: string, quantity: number }, unknown> {

    return useMutation<String, Error, { id: string, quantity: number }, unknown>(
      (data) => this.cartApiService.addToCart(data.id, data.quantity), mutationOptions
    );
  }
  useRemoveFromCartsMutation(
    mutationOptions?: MutationOptions<String, Error, { id: string }, unknown>
  ): UseMutationResult<String, Error, { id: string }, unknown> {

    return useMutation<String, Error, { id: string }, unknown>(
      (data) => this.cartApiService.removeFromCart(data.id), mutationOptions
    );
  }
}