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
    name: "Recette 1",
    description: "Description 1",
    image:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    price: 10,
    quantity: 1,
    available: true,
    type: 0,
  },
  {
    id: "2",
    name: "Recette 2",
    description: "Description 2",
    image:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    price: 15,
    quantity: 6,
    available: true,
    type: 1,
  },
  {
    id: "3",
    name: "Recette 3",
    description: "Description 3",
    image:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    price: 40,
    quantity: 5,
    available: false,
    type: 1,
  },
  {
    id: "4",
    name: "Recette 4",
    description: "Description 4",
    image:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    price: 70,
    quantity: 0,
    available: false,
    type: 0,
  },
];
