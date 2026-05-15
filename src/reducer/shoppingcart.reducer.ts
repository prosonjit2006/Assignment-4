import type { ShoppingCartInitialDataType } from "../typescript/interface/shoppingcart.interface";
import type { ShoppingCartActionType } from "./../typescript/types/shoppingcart.type";

export const shoppingcartInitialData: ShoppingCartInitialDataType = {
  isLoading: false,
  isError: null,
  products: [],
};

export const shoppingcartReducer = (
  state= shoppingcartInitialData,
  action: ShoppingCartActionType,
): ShoppingCartInitialDataType => {
  switch (action.type) {
    case "START_FETCHING":
      return { ...state, isLoading: true, isError: null };
    case "SUCCESS_FETCHING":
      return {
        ...state,
        isLoading: false,
        isError: null,
        products: action.payload,
      };
    case "FAILED_FETCHING":
      return { ...state, isLoading: false, isError: action.payload };
    default: 
        return state
  }
};
