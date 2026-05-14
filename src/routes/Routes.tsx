import { createBrowserRouter } from "react-router-dom";
import Wrapper from "../layout/Wrapper";
import Notfound from "../pages/Notfound";
import WizardForm from "../pages/wizardform/WizardForm";
import CartWrapper from "../layout/shoppingCart/CartWrapper";
import CartHome from "../pages/shoppingcart/CartHome";
import Products from "../pages/shoppingcart/Products";
import Cart from "../pages/shoppingcart/Cart";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
  },

  {
    path: "/shoppingcart",
    element: <CartWrapper />,
    children: [
      {
        path: "/shoppingcart",
        element: <CartHome />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },

  {
    path: "/form",
    element: <WizardForm />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);

export default Routes;
