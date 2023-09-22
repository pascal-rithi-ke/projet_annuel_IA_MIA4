import {
  MutationOptions,
  QueryKey,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { Livreur } from "../Model/Livreur.model";

export interface ILivreursRepositoriesReactQuery {
  useGetAllLivreursQuery(
    queryOptions?: Omit<
      UseQueryOptions<Livreur[], Error, Livreur[], QueryKey>,
      "queryKey" | "queryFn"
    >
  ): UseQueryResult<Livreur[], Error>;
  useGetIdLivreurQuery(
    id: string,
    queryOptions?: Omit<
      UseQueryOptions<Livreur, Error, Livreur, QueryKey>,
      "queryKey" | "queryFn"
    >
  ): UseQueryResult<Livreur, Error>;

  useUpdateLivreurMutation(
    mutationOptions?: MutationOptions<Livreur, Error, Livreur, unknown>
  ): UseMutationResult<Livreur, Error, Livreur, unknown>;

  useDeleteLivreurMutation(
    mutationOptions?: MutationOptions<Livreur, Error, Livreur, unknown>
  ): UseMutationResult<Livreur, Error, Livreur, unknown>;
}
