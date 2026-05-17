import { useReducer, type ReactNode } from "react";
import {
  shoppingcartInitialData,
  shoppingcartReducer,
} from "../../reducer/shoppingcart.reducer";
import type { ProductPayload } from "../../typescript/interface/shoppingcart.interface";
import ShoppingCartContext from "./ShoppingCartContext";
import { getErrorMessage } from "../../services/helper/global.helper";
import { fetchProductListfns } from "../../api/function/shoppingcart.function";
import { toast } from "sonner";

const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatchProductsData] = useReducer(
    shoppingcartReducer,
    shoppingcartInitialData,
  );

  const fetchProductList = async () => {
    dispatchProductsData({ type: "START_FETCHING" });
    try {
      const res = await fetchProductListfns();
      dispatchProductsData({ type: "SUCCESS_FETCHING", payload: res });
      // console.log('rse', res)
      return res;
    } catch (error) {
      const err = getErrorMessage(error);
      dispatchProductsData({ type: "FAILED_FETCHING", payload: err });
      return err;
    }
  };

  const addToCart = (data: ProductPayload) => {
    dispatchProductsData({
      type: "SUCCESS_ADD_TO_CART",
      payload: data,
    });

    toast.success("Product added in cart");
  };

  const incriseQnt = (id: number) => {
    dispatchProductsData({
      type: "INCREASE_QUANTITY",
      payload: id,
    });

    // toast.success("Product quantity increased");
  };

  const decriseQnt = (id: number) => {
    dispatchProductsData({
      type: "DECREASE_QUANTITY",
      payload: id,
    });

    // toast.success("Product quantity decreased");
  };

  const deleteProduct = (id: number) => {
    dispatchProductsData({
      type: "REMOVE_PRODUCT",
      payload: id,
    });

    toast.success("Product removed from cart");
  };

  return (
    <ShoppingCartContext
      value={{
        state,
        fetchProductList,
        addToCart,
        incriseQnt,
        decriseQnt,
        deleteProduct,
      }}
    >
      {children}
    </ShoppingCartContext>
  );
};

export default ShoppingCartProvider;
