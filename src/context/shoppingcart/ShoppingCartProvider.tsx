import { useReducer, type ReactNode } from "react"
import { shoppingcartInitialData, shoppingcartReducer } from "../../reducer/shoppingcart.reducer";
import type { ProductPayload } from "../../typescript/interface/shoppingcart.interface";


const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {

    const [products, dispatchProducts] = useReducer(shoppingcartReducer, shoppingcartInitialData);

    const addToCart = async(data: ProductPayload) => {
        dispatchProducts({type: 'START_FETCHING'})
        console.log('response in addtoCart', data)
        // try block
    }

    const add = async(id: number) => {

    }

    const remove = async(id: number) => {

    }

    const deleteProduct = async(id: number) => {

    }


  return (
    <ShoppingCartProvider value={{
        products,
        addToCart,
        add,
        remove,
        deleteProduct
    }}>
        {children}
    </ShoppingCartProvider>
  )
};

export default ShoppingCartProvider