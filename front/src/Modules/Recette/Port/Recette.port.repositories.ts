import { Recette } from "../Model/Recette.model";

export interface IRecetteRepositories {
  getAll(): Promise<Recette[]>;
  edit(recette: Recette): Promise<Recette>;
  delete(recetteId: string): Promise<Recette>;
}
