import {
  QueryKey,
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
}
