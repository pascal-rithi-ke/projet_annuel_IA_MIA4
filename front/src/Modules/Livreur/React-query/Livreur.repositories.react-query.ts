import {
  MutationOptions,
  QueryKey,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { ILivreursRepositoriesReactQuery } from "../Port/Livreur.port.repositories.react-query";
import { ILivreurRepositories } from "../Port/Livreur.port.repositories";
import { Livreur } from "../Model/Livreur.model";

export class LivreursRepositoriesReactQuery
  implements ILivreursRepositoriesReactQuery
{
  private readonly livreursApiService: ILivreurRepositories;

  constructor(LivreursApiService: ILivreurRepositories) {
    this.livreursApiService = LivreursApiService;
  }

  useGetAllLivreursQuery(
    queryOptions?: Omit<
      UseQueryOptions<Livreur[], Error, Livreur[], QueryKey>,
      "queryKey" | "queryFn"
    >
  ): UseQueryResult<Livreur[], Error> {
    return useQuery<Livreur[], Error>(
      ["LivreursService.getAll"],
      () => this.livreursApiService.getAll(),
      queryOptions
    );
  }

  useGetIdLivreurQuery(
    id: string,
    queryOptions?: Omit<
      UseQueryOptions<Livreur, Error, Livreur, QueryKey>,
      "queryKey" | "queryFn"
    >
  ): UseQueryResult<Livreur, Error> {
    return useQuery<Livreur, Error>(
      ["UsersService.getById", id],
      () => this.livreursApiService.getId(id),
      queryOptions
    );
  }

  useUpdateLivreurMutation(
    mutationOptions?: MutationOptions<Livreur, Error, Livreur, unknown>
  ): UseMutationResult<Livreur, Error, Livreur, unknown> {
    return useMutation<Livreur, Error, Livreur, unknown>(
      (data) => this.livreursApiService.edit(data),
      mutationOptions
    );
  }

  useDeleteLivreurMutation(
    mutationOptions?: MutationOptions<Livreur, Error, Livreur, unknown>
  ): UseMutationResult<Livreur, Error, Livreur, unknown> {
    return useMutation<Livreur, Error, Livreur, unknown>(
      (data) => this.livreursApiService.delete(data.id),
      mutationOptions
    );
  }
}
