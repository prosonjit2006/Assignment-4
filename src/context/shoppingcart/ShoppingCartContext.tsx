import { createContext } from "react"
import type { productContexttype } from "../../typescript/interface/shoppingcart.interface"


const ShoppingCartContext = createContext< productContexttype | null>(null)

export default ShoppingCartContext