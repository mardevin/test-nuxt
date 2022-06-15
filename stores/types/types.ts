export type StoreState = {
  products: Product[];
  cart: CartItem[];
  error: string;
}

export type Product = {
  id: number;
  title: string;
  image: string;
  description: string;
  category: string;
  price: number;
  rating: Rating;
}

type Rating = {
  rate: number;
  count: number;
}

type CartItem = {
  product: Product;
  numberOfItems: number;
}