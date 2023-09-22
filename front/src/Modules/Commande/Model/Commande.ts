import { Panier } from "../../Cart/Model/Cart.model";

export interface Commande {
  number_commande: string;
  livreur: string;
  paniers: Panier[]
  total: number;
}