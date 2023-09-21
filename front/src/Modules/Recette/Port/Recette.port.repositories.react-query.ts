import {
  MutationOptions,
  QueryKey,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { Recette } from "../Model/Recette.model";

export interface IRecettesRepositoriesReactQuery {
  useGetAllRecettesQuery(
    queryOptions?: Omit<
      UseQueryOptions<Recette[], Error, Recette[], QueryKey>,
      "queryKey" | "queryFn"
    >
  ): UseQueryResult<Recette[], Error>;

  useUpdateRecetteMutation(
    mutationOptions?: MutationOptions<Recette, Error, Recette, unknown>
  ): UseMutationResult<Recette, Error, Recette, unknown>;

  useDeleteRecetteMutation(
    mutationOptions?: MutationOptions<Recette, Error, Recette, unknown>
  ): UseMutationResult<Recette, Error, Recette, unknown>;
}
