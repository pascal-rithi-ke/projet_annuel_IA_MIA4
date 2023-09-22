import { Livreur } from "../Model/Livreur.model";
import { ILivreurRepositories } from "../Port/Livreur.port.repositories";

export class LivreursInMemoryRepositories implements ILivreurRepositories {
  getAll(): Promise<Livreur[]> {
    return new Promise<Livreur[]>((resolve) => {
      resolve(FakeLivreurData);
    });
  }
  getId(id: string): Promise<Livreur> {
    return new Promise<Livreur>((resolve) => {
      const Livreur = FakeLivreurData.find((Livreur) => Livreur.id === id);

      if (!Livreur) {
        throw new Error("Livreur introuvable");
      }
      resolve(Livreur);
    });
  }
  edit(Livreur: Livreur): Promise<Livreur> {
    return new Promise<Livreur>((resolve) => {
      const LivreurToEdit = FakeLivreurData.find((r) => r.id === Livreur.id);

      if (LivreurToEdit) {
        LivreurToEdit.name = Livreur.name;
        LivreurToEdit.surname = Livreur.surname;
        LivreurToEdit.status = Livreur.status;
        LivreurToEdit.position = Livreur.position;

        resolve(LivreurToEdit);
      }
    });
  }
  delete(LivreurId: string): Promise<Livreur> {
    return new Promise<Livreur>((resolve) => {
      const LivreurToDelete = FakeLivreurData.find((r) => r.id === LivreurId);

      if (LivreurToDelete) {
        FakeLivreurData.splice(FakeLivreurData.indexOf(LivreurToDelete), 1);

        resolve(LivreurToDelete);
      }
    });
  }
}

const FakeLivreurData: Livreur[] = [
  {
    id: "1",
    name: "Jean",
    surname: "Dupont",
    status: "Disponible",
    position: "Paris",
  },
  {
    id: "2",
    name: "Jean Pierre",
    surname: "Marie",
    status: "Indisponible",
    position: "Japon",
  },
  {
    id: "3",
    name: "Alain",
    surname: "Fournier",
    status: "Indisponible",
    position: "Lyon",
  },
  {
    id: "4",
    name: "François",
    surname: "Cousin",
    status: "Disponible",
    position: "Montévrain",
  },
];
