import { Recette } from "../Model/Recette.model";
import { IRecetteRepositories } from "../Port/Recette.port.repositories";

export class RecettesInMemoryRepositories implements IRecetteRepositories {
  getAll(): Promise<Recette[]> {
    return new Promise<Recette[]>((resolve) => {
      resolve(FakeRecetteData);
    });
  }
  getId(id: string): Promise<Recette> {
    return new Promise<Recette>((resolve) => {
      const recette = FakeRecetteData.find((recette) => recette.id === id);

      if (!recette) {
        throw new Error("Recette introuvable");
      }
      resolve(recette);
    }
    );
  }
  edit(recette: Recette): Promise<Recette> {
    return new Promise<Recette>((resolve) => {
      const recetteToEdit = FakeRecetteData.find((r) => r.id === recette.id);

      if (recetteToEdit) {
        recetteToEdit.name = recette.name;
        recetteToEdit.description = recette.description;
        recetteToEdit.image = recette.image;
        recetteToEdit.price = recette.price;
        recetteToEdit.quantity = recette.quantity;
        recetteToEdit.available = recette.available;
        recetteToEdit.type = recette.type;

        resolve(recetteToEdit);
      }
    });
  }
  add(recette: Recette): Promise<Recette> {
    return new Promise<Recette>((resolve) => {
      FakeRecetteData.push(recette);

      resolve(recette);
    });
  }
  delete(recetteId: string): Promise<Recette> {
    return new Promise<Recette>((resolve) => {
      const recetteToDelete = FakeRecetteData.find((r) => r.id === recetteId);

      if (recetteToDelete) {
        FakeRecetteData.splice(FakeRecetteData.indexOf(recetteToDelete), 1);

        resolve(recetteToDelete);
      }
    });
  }
}

const FakeRecetteData: Recette[] = [
  {
    id: "1",
    name: "Tonkotsu ramen - bouillon de porc",
    description: "Ramen avec un riche bouillon de porc, mijoter 26h, avec 2 tranches de porc braisé, persil plat, poireau ciselé, potiron japonais et tranches de bambou marinées",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/177e22f14d05b72ed296c7d3bb9c3de7/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    price: 13.5,
    quantity: 1,
    available: true,
    type: 0,
  },
  {
    id: "2",
    name: "Yaki udon boeuf - nouilles épaisses sautées au wok",
    description: "Nouilles de riz sautées au wok, bœuf émincé, oignons, choux chinois, poivrons et sauce secrète.",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/13f4215bf32bb839b98ce446e3182e70/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    price: 15,
    quantity: 6,
    available: true,
    type: 0,
  },
  {
    id: "3",
    name: "Cheesecake Yuzu",
    description: "Un délicieux cheesecake au Yuzu (agrume typiquement japonais",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/5cb68fc3c7d73229f48d3183465901c3/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    price: 40,
    quantity: 3,
    available: false,
    type: 1,
  },
  {
    id: "4",
    name: "Mochi glacé au Yuzu (vegan et sans gluten)",
    description: "Une délicieuse boule de glace au Yuzu (un agrume typique du Japon), recouverte d'une légère pâte de riz. Idéal pour terminer un repas sur une touche sucrée.",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/b50edc4ea7240495ae4999d0b4bb6ae3/5954bcb006b10dbfd0bc160f6370faf3.jpeg",
    price: 3,
    quantity: 0,
    available: false,
    type: 1,
  },
];
