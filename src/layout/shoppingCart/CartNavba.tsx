import { Menu, ShoppingCart, X } from "lucide-react";
import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { cartItems } from "../../services/json/cartItems.json";
import ShoppingCartContext from "../../context/shoppingcart/ShoppingCartContext";

const CartNavbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const ProductContext = useContext(ShoppingCartContext)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-neutral-200/80 bg-white/10 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* logo */}
        <Link to="/shoppingcart" className="flex items-center gap-3">
          <img
            src={logo}
            alt="logo"
            className="h-10 w-10 rounded-full object-cover"
          />

          <h1 className="text-xl font-bold tracking-wide text-neutral-900">
            StyleCart
          </h1>
        </Link>

        {/* DESKTOP NAVLINKS */}
        <div className="hidden items-center gap-3 md:flex">
          {cartItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/shoppingcart"}
              className={({ isActive }) =>
                `
                rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300
                
                ${
                  isActive
                    ? "bg-orange-400 text-black shadow-md"
                    : "text-neutral-700 hover:bg-orange-200 hover:text-black"
                }
                `
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* CART ICON */}
          <button
            onClick={() => navigate("/shoppingcart/cart")}
            className="relative rounded-full p-2 transition hover:bg-orange-100"
          >
            <ShoppingCart className="h-6 w-6 text-orange-800" />

            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-black">
              {ProductContext?.state.cart.length}
            </span>
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full p-2 transition hover:bg-neutral-100 md:hidden"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-neutral-800" />
            ) : (
              <Menu className="h-6 w-6 text-neutral-800" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          overflow-hidden transition-all duration-300 md:hidden
          ${isOpen ? "max-h-80 border-t border-neutral-200" : "max-h-0"}
        `}
      >
        <div className="flex flex-col gap-2 bg-white px-4 py-4">
          {cartItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/shoppingcart"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `
                rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300
                
                ${
                  isActive
                    ? "bg-yellow-400 text-black"
                    : "text-neutral-700 hover:bg-yellow-100"
                }
                `
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CartNavbar;
