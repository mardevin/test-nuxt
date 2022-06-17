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
  category: Category;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
}

type Category =
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