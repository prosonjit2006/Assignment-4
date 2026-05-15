export interface ProductType {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
}

export interface ShoppingCartInitialDataType {
  isLoading: boolean;
  isError: string | null;
  products: ProductType[];
}

export interface ProductPayload {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
}

export interface productContexttype {
  products: ShoppingCartInitialDataType;
  addToCart: (data: ProductPayload) => Promise<any>;
  add: (id: number) => Promise<any>;
  remove: (id: number) => Promise<any>;
  deleteProduct: (id: number) => Promise<any>;
}
