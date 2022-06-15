export type StoreState = {
  products: Product[];
  cartItems: number;
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