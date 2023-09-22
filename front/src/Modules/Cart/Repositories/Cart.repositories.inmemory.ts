import { Recette } from "../../Recette/Model/Recette.model";
import { Cart, Panier } from "../Model/Cart.model";
import { ICartRepositories } from "../Port/Cart.port.repositories";

export class CartInMemoryRepositories implements ICartRepositories {
  private cartMap: Map<string, Panier> = new Map<string, Panier>();
  private recetteMap: Map<string, Recette> = new Map<string, Recette>();

  constructor() {
    this.initializeFakeData();
  }

  private initializeFakeData() {
    for (const recette of FakeRecetteData) {
      this.recetteMap.set(recette.id, { ...recette });
    }
  }

  getAll(): Promise<Cart> {
    return new Promise<Cart>((resolve) => {
      const cartArray = Array.from(this.cartMap.values());

      const total = cartArray.reduce((acc, item) => acc + item.price, 0);
      const livraison = total > 19.99 ? 0 : 5;
      const soustotal = total + livraison;

      const cart: Cart = {
        paniers: cartArray,
        total,
        livraison,
        soustotal,
      };
      resolve(cart);
    });
  }

  addToCart(id: string, quantity: number): Promise<String> {
    return new Promise<String>((resolve) => {
      const recette = this.recetteMap.get(id);

      if (!recette) {
        throw new Error("Recette introuvable");
      }

      let cartItem = this.cartMap.get(id);

      if (cartItem) {
        cartItem.quantity = quantity;
        cartItem.price = recette.price * quantity;
      } else {
        cartItem = { ...recette, quantity, price: recette.price * quantity };
        this.cartMap.set(id, cartItem);
      }
      resolve("added");
    });
  }

  removeFromCart(id: string): Promise<String> {
    return new Promise<String>((resolve) => {
      const cartItem = this.cartMap.get(id);

      if (!cartItem) {
        throw new Error("Cart item introuvable");
      }

      this.cartMap.delete(id);

      resolve("removed");
    });
  }

  updateQuantity(id: string, quantity: number): Promise<string> {
    return new Promise<string>((resolve) => {
      const cartItem = this.cartMap.get(id);

      if (cartItem) {
        cartItem.quantity = quantity;
        resolve("updated");
      } else {
        resolve("not found");
      }
    });
  }
}
const FakeRecetteData = [
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
]