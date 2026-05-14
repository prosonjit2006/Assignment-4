import { Link, NavLink } from "react-router-dom";
import { navItems } from "../services/json/navbaritems.json";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide text-gray-800">
          Assignment 4
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-4">
          {navItems.map((item) => {
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/shoppingcart"}
                className={({ isActive }) =>
                  `rounded-xl px-5 py-2 text-sm font-semibold transition-all duration-300
                  
                  ${
                    isActive
                      ? "bg-black text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-300"
                  }
                  `
                }
              >
                {item.name}
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
