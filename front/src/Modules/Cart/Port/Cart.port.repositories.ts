import { Cart } from "../Model/Cart.model";

export interface ICartRepositories {
  getAll(): Promise<Cart[]>;
  addToCart(id: string, quantity: number): Promise<Cart>;
  removeFromCart(id: string): Promise<Cart>;
  updateQuantity(id: string, quantity: number): Promise<String>;
}
