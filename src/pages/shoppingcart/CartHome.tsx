import HomeProducts from "../../sections/ShoppingCart/home/HomeProducts";
import ShoppingCartHero from "../../sections/ShoppingCart/home/ShoppingCartHero";

const CartHome = () => {
  return (
    <main className="h-screen, w-full,">
      <ShoppingCartHero />
      <HomeProducts />
    </main>
  );
};

export default CartHome;
