export type StoreState = {
  products: Product[];
  cart: CartItem[];
  error: string;
}

export type Product = {
  id: number;
  title: string;
  thumbnail: string;
  images: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
}

type Rating = {
  rate: number;
  count: number;
}

type CartItem = {
  product: Product;
  numberOfItems: number;
}