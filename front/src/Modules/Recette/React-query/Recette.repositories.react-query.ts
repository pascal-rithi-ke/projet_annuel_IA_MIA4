import {
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from "@tanstack/react-query";
import { IRecettesRepositoriesReactQuery } from "../Port/Recette.port.repositories.react-query";
import { IRecetteRepositories } from "../Port/Recette.port.repositories";
import { Recette } from "../Model/Recette.model";

export class RecettesRepositoriesReactQuery
  implements IRecettesRepositoriesReactQuery
{
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
}
