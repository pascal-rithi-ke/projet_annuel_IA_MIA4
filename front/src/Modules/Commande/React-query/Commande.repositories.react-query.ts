
import { MutationOptions, QueryKey, UseMutationResult, UseQueryOptions, UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import { ICommandeRepositoriesReactQuery } from "../Port/Commande.port.repositories.react-query";
import { ICommandeRepositories } from "../Port/Commande.port.repositories";
import { Commande } from "../Model/Commande";
import { Panier } from "../../Cart/Model/Cart.model";




export class CommandeRepositoriesReactQuery implements ICommandeRepositoriesReactQuery {

  private readonly commandeApiService: ICommandeRepositories;

  constructor(CommandeApiService: ICommandeRepositories) {
    this.commandeApiService = CommandeApiService;
  }

  useGetAllCommandeQuery(
    queryOptions?: Omit<UseQueryOptions<Commande[], Error, Commande[], QueryKey>, "queryKey" | "queryFn"> | undefined
  ): UseQueryResult<Commande[], Error> {
    return useQuery<Commande[], Error>(["CommandeService.getAll"], () => this.commandeApiService.getAll(), queryOptions);
  }

  useAddCommandeMutation(
    mutationOptions?: MutationOptions<String, Error, { email: string; first_name: string; last_name: string; address: string; phone: string; card_number: string; card_name: string; card_expiration: string; cvc: string; paniers: Panier[]; }, unknown> | undefined
  ): UseMutationResult<String, Error, String, unknown> {

    return useMutation<String, Error, { email: string; first_name: string; last_name: string; address: string; phone: string; card_number: string; card_name: string; card_expiration: string; cvc: string; paniers: Panier[]; }, unknown>(
      (data) => this.commandeApiService.addCommande(data), mutationOptions
    ) as unknown as UseMutationResult<String, Error, String, unknown>;
  }


}