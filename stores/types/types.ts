export type StoreState = {
  user: User;
  products: Product[];
  cart: CartItem[];
  error: string;
}

export type User = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  image: string;
  token: string;
}

export type Product = {
  id: number;
  title: string;
  thumbnail: string;
  images: string;
  description: string;
  category: Category;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
}

export type Category =
  "smartphones"|
  "laptops"|
  "fragrances"|
  "skincare"|
  "groceries"|
  "home-decoration"|
  "furniture"|
  "tops"|
  "womens-dresses"|
  "womens-shoes"|
  "mens-shirts"|
  "mens-shoes"|
  "mens-watches"|
  "womens-watches"|
  "womens-bags"|
  "womens-jewellery"|
  "sunglasses"|
  "automotive"|
  "motorcycle"|
  "lighting" ;

type CartItem = {
  product: Product;
  numberOfItems: number;
}

export type LoginCredentials = {
  username: string;
  password: string;
}

type Gender = 'male' | 'female' | 'other';