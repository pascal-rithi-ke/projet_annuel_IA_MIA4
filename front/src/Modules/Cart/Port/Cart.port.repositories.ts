import { Cart } from "../Model/Cart.model";

export interface ICartRepositories {
  getAll(): Promise<Cart>;
  addToCart(id: string, quantity: number): Promise<String>;
  removeFromCart(id: string): Promise<String>;
  updateQuantity(id: string, quantity: number): Promise<String>;
}
