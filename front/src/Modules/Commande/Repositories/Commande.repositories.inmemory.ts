import { Panier } from "../../Cart/Model/Cart.model";
import { Commande } from "../Model/Commande";
import { ICommandeRepositories } from "../Port/Commande.port.repositories";

export class CommandeInMemoryRepositories implements ICommandeRepositories {
  private ListCommande: Map<string, Commande> = new Map<string, Commande>();

  getAll(): Promise<Commande[]> {
    return new Promise<Commande[]>((resolve) => {
      const ListCommandeArray = Array.from(this.ListCommande.values());

      resolve(ListCommandeArray);
    });
  }

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
  }): Promise<String> {
    return new Promise<String>((resolve) => {
      const commandeItem: Commande = {
        number_commande: window.crypto.getRandomValues(new Uint32Array(1))[0].toString(),
        livreur: "livreur 1",
        paniers: commande.paniers,
        total: commande.paniers.reduce((acc, panier) => acc + panier.price, 0),
      };

      this.ListCommande.set(commandeItem.number_commande, commandeItem);
      resolve("added");
    });
  }

}
