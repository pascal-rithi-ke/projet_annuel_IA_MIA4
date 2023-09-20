import { Recette } from "../Model/Recette.model";

export interface IRecetteRepositories {
  getAll(): Promise<Recette[]>;
}
