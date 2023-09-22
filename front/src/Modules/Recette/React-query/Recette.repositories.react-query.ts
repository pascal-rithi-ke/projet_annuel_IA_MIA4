import {
  MutationOptions,
  QueryKey,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { IRecettesRepositoriesReactQuery } from "../Port/Recette.port.repositories.react-query";
import { IRecetteRepositories } from "../Port/Recette.port.repositories";
import { Recette } from "../Model/Recette.model";

export class RecettesRepositoriesReactQuery
  implements IRecettesRepositoriesReactQuery {
  private readonly recettesApiService: IRecetteRepositories;

  constructor(RecettesApiService: IRecetteRepositories) {
    this.recettesApiService = RecettesApiService;
  }

  useGetAllRecettesQuery(
    queryOptions?: Omit<
      UseQueryOptions<Recette[], Error, Recette[], QueryKey>,
      "queryKey" | "queryFn"
    >
  ): UseQueryResult<Recette[], Error> {
    return useQuery<Recette[], Error>(
      ["RecettesService.getAll"],
      () => this.recettesApiService.getAll(),
      queryOptions
    );
  }

  useGetIdRecetteQuery(
    id: string,
    queryOptions?: Omit<UseQueryOptions<Recette, Error, Recette, QueryKey>, 'queryKey' | 'queryFn'>
  ): UseQueryResult<Recette, Error> {

    return useQuery<Recette, Error>(['UsersService.getById', id], () => this.recettesApiService.getId(id), queryOptions);
  }

  useUpdateRecetteMutation(
    mutationOptions?: MutationOptions<Recette, Error, Recette, unknown>
  ): UseMutationResult<Recette, Error, Recette, unknown> {
    return useMutation<Recette, Error, Recette, unknown>(
      (data) => this.recettesApiService.edit(data),
      mutationOptions
    );
  }

  useDeleteRecetteMutation(
    mutationOptions?: MutationOptions<Recette, Error, Recette, unknown>
  ): UseMutationResult<Recette, Error, Recette, unknown> {
    return useMutation<Recette, Error, Recette, unknown>(
      (data) => this.recettesApiService.delete(data.id),
      mutationOptions
    );
  }

  useAddRecetteMutation(mutationOptions?: MutationOptions<Recette, Error, Recette, unknown> | undefined): UseMutationResult<Recette, Error, Recette, unknown> {
    return useMutation<Recette, Error, Recette, unknown>(
      (data) => this.recettesApiService.add(data),
      mutationOptions
    );
  }
}
