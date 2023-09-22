import { Panier } from "../../Cart/Model/Cart.model";
import { Commande } from "../Model/Commande";

export interface ICommandeRepositories {
  getAll(): Promise<Commande[]>;
  addCommande(commande: {
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
  }): Promise<String>;
}