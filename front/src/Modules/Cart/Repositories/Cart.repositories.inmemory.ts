import { Recette } from "../../Recette/Model/Recette.model";
import { FakeRecetteData } from "../../Recette/Repositories/Recette.repositories.inmemory";
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
