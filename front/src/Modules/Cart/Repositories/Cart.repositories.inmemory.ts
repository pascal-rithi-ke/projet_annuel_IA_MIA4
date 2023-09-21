import { Cart } from "../Model/Cart.model";
import { ICartRepositories } from "../Port/Cart.port.repositories";

export class CartInMemoryRepositories implements ICartRepositories {
  private cartMap: Map<string, Cart> = new Map<string, Cart>();
  private recetteMap: Map<string, Cart> = new Map<string, Cart>();

  constructor() {
    this.initializeFakeData();
  }

  private initializeFakeData() {
    for (const recette of FakeRecetteData) {
      this.recetteMap.set(recette.id, { ...recette });
    }
  }

  getAll(): Promise<Cart[]> {
    return new Promise<Cart[]>((resolve) => {
      const cartArray = Array.from(this.cartMap.values());
      resolve(cartArray);
    });
  }

  addToCart(id: string, quantity: number): Promise<Cart> {
    return new Promise<Cart>((resolve) => {
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
      resolve({ ...cartItem });
    });
  }

  removeFromCart(id: string): Promise<Cart> {
    return new Promise<Cart>((resolve) => {
      const cartItem = this.cartMap.get(id);

      if (!cartItem) {
        throw new Error("Cart item introuvable");
      }

      this.cartMap.delete(id);

      resolve({ ...cartItem });
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