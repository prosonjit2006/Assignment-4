import type { ProductType } from "../interface/shoppingcart.interface";

export type ShoppingCartActionType =
  | { type: "START_FETCHING" }
  | { type: "SUCCESS_FETCHING"; payload: ProductType[]  }
  | { type: "FAILED_FETCHING"; payload: string | null };
