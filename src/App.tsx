import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes";
import ShoppingCartProvider from "./context/shoppingcart/ShoppingCartProvider";
import { Toaster } from "sonner";

const App = () => {
  return (
    <>
      <ShoppingCartProvider>
        <Toaster richColors position="top-right" closeButton />
        <RouterProvider router={Routes} />
      </ShoppingCartProvider>
    </>
  );
};

export default App;
