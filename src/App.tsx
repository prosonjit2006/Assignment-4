import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes";
import ShoppingCartProvider from "./context/shoppingcart/ShoppingCartProvider";
import { Toaster } from "sonner";
import { WizardFormProvider } from "./context/wizardform/WizardFormProvider";

const App = () => {
  return (
    <>
      <ShoppingCartProvider>
        <WizardFormProvider>
          <Toaster richColors position="top-right" closeButton />
          <RouterProvider router={Routes} />
        </WizardFormProvider>
      </ShoppingCartProvider>
    </>
  );
};

export default App;
