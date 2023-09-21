enum RecetteType {
  PLAT,
  DESSERT,
}

export interface Cart {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
  available: boolean;
  type: RecetteType;
}