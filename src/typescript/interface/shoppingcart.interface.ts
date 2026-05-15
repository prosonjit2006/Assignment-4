export interface ProductType {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  thumbnail: string;
}

export interface CartProductType {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  thumbnail: string;
  quantity: number;
}

export interface ShoppingCartInitialDataType {
  isLoading: boolean;
  isError: string | null;
  products: ProductType[];
  cart: CartProductType[]
}

export interface ProductPayload {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  thumbnail: string
}

export interface productContexttype {
  state: ShoppingCartInitialDataType;
  fetchProductList: ()=> Promise<any>
  addToCart: (data: ProductPayload) => void
  incriseQnt: (id: number) => void
  decriseQnt: (id: number) => void
  deleteProduct: (id: number) => void
}
