import type { ProductType } from "../interface/shoppingcart.interface";

export type ShoppingCartActionType =
  | { type: "START_FETCHING" }
  | { type: "SUCCESS_FETCHING"; payload: ProductType[] }
  | { type: "FAILED_FETCHING"; payload: string | null }
  | { type: "SUCCESS_ADD_TO_CART"; payload: ProductType }
  | { type: "FAILED_ADD_TO_CART"; payload: string | null }
  | { type: "INCREASE_QUANTITY"; payload: number }
  | { type: "DECREASE_QUANTITY"; payload: number }
  | { type: "REMOVE_PRODUCT"; payload: number };
