import type { ShoppingCartInitialDataType } from "../typescript/interface/shoppingcart.interface";
import type { ShoppingCartActionType } from "./../typescript/types/shoppingcart.type";

export const shoppingcartInitialData: ShoppingCartInitialDataType = {
  isLoading: false,
  isError: null,
  products: [],
  cart: [],
};

export const shoppingcartReducer = (
  state = shoppingcartInitialData,
  action: ShoppingCartActionType,
): ShoppingCartInitialDataType => {
  switch (action.type) {
    case "START_FETCHING":
      return {
        ...state,
        isLoading: true,
        isError: null,
      };

    case "SUCCESS_FETCHING":
      return {
        ...state,
        isLoading: false,
        isError: null,
        products: action.payload,
      };

    case "FAILED_FETCHING":
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };

    case "SUCCESS_ADD_TO_CART": {
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload.id,
      );

      // PRODUCT ALREADY EXISTS
      if (existingProduct) {
        return {
          ...state,

          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item,
          ),
        };
      }

      // NEW PRODUCT
      return {
        ...state,

        cart: [
          ...state.cart,

          {
            ...action.payload,
            quantity: 1,
          },
        ],
      };
    }

    case "FAILED_ADD_TO_CART":
      return { ...state, isError: action.payload };

    case "INCREASE_QUANTITY":
      return {
        ...state,

        cart: state.cart.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity < 10 ? item.quantity + 1 : 10,
              }
            : item,
        ),
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,

        cart: state.cart.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity > 1 ? item.quantity - 1 : 1,
              }
            : item,
        ),
      };

    case "REMOVE_PRODUCT":
      return {
        ...state,

        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};
