enum RecetteType {
  PLAT,
  DESSERT,
}

export interface Panier {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
  available: boolean;
  type: RecetteType;
}
export interface Cart {
  paniers: Panier[];
  total: number;
  soustotal: number;
  livraison: number;
}