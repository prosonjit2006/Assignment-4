import { Outlet } from "react-router-dom";
import CartNavbar from "./CartNavba";
import CartFooter from "./CartFooter";

const CartWrapper = () => {
  return (
    <>
      <CartNavbar />
      <Outlet />
      <CartFooter />
    </>
  );
};

export default CartWrapper;
