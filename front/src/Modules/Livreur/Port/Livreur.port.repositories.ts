import { Livreur } from "../Model/Livreur.model";

export interface ILivreurRepositories {
  getAll(): Promise<Livreur[]>;
  getId(id: string): Promise<Livreur>;
  edit(livreur: Livreur): Promise<Livreur>;
  delete(livreurId: string): Promise<Livreur>;
}
