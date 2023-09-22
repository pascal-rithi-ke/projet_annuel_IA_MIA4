import { MutationOptions, QueryKey, UseMutationResult, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import { Commande } from "../Model/Commande";
import { Panier } from "../../Cart/Model/Cart.model";



export interface ICommandeRepositoriesReactQuery {
  useGetAllCommandeQuery(
    queryOptions?: Omit<
      UseQueryOptions<Commande[], Error, Commande[], QueryKey>,
      "queryKey" | "queryFn"
    >
  ): UseQueryResult<Commande[], Error>;

  useAddCommandeMutation(
    mutationOptions?: MutationOptions<String, Error, {
      email: string;
      first_name: string;
      last_name: string;
      address: string;
      phone: string;
      card_number: string;
      card_name: string;
      card_expiration: string;
      cvc: string;
      paniers: Panier[];
    }, unknown>
  ): UseMutationResult<String, Error, String, unknown>;

}