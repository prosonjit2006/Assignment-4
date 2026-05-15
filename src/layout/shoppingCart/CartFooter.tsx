import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

const CartFooter = () => {
  return (
    <footer className="border-t border-neutral-200 bg-[#f8f5f2]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* BRAND SECTION */}
        <div>
          <Link to="/shoppingcart" className="flex items-center gap-3">
            <img
              src={logo}
              alt="logo"
              className="h-11 w-11 rounded-full object-cover"
            />

            <h2 className="text-2xl font-black text-neutral-900">StyleCart</h2>
          </Link>

          <p className="mt-5 max-w-sm text-sm leading-7 text-neutral-600">
            Discover modern fashion collections crafted for comfort, elegance,
            and everyday confidence.
          </p>

          {/* SOCIAL ICONS */}
          <div className="mt-6 flex items-center gap-4">
            <button className="rounded-full bg-white p-3 text-neutral-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 hover:text-white">
              <FaFacebook className="h-5 w-5" />
            </button>

            <button className="rounded-full bg-white p-3 text-neutral-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 hover:text-white">
              <BsInstagram className="h-5 w-5" />
            </button>

            <button className="rounded-full bg-white p-3 text-neutral-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 hover:text-white">
              <BsTwitter className="h-5 w-5" />
            </button>

            <button className="rounded-full bg-white p-3 text-neutral-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500 hover:text-white">
              <LiaLinkedin className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-bold text-neutral-900">Quick Links</h3>

          <div className="mt-5 flex flex-col gap-3">
            <Link
              to="/shoppingcart"
              className="text-sm text-neutral-600 transition hover:text-orange-500"
            >
              Home
            </Link>

            <Link
              to="/shoppingcart/products"
              className="text-sm text-neutral-600 transition hover:text-orange-500"
            >
              Products
            </Link>

            <Link
              to="/shoppingcart/cart"
              className="text-sm text-neutral-600 transition hover:text-orange-500"
            >
              Cart
            </Link>
          </div>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-lg font-bold text-neutral-900">Support</h3>

          <div className="mt-5 flex flex-col gap-3">
            <button className="w-fit text-sm text-neutral-600 transition hover:text-orange-500">
              Help Center
            </button>

            <button className="w-fit text-sm text-neutral-600 transition hover:text-orange-500">
              Privacy Policy
            </button>

            <button className="w-fit text-sm text-neutral-600 transition hover:text-orange-500">
              Terms & Conditions
            </button>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-lg font-bold text-neutral-900">Stay Updated</h3>

          <p className="mt-5 text-sm leading-7 text-neutral-600">
            Subscribe for new arrivals, exclusive offers, and fashion updates.
          </p>

          {/* INPUT */}
          <div className="mt-5 flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm outline-none transition focus:border-orange-400"
            />

            <button className="rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center sm:px-6 md:flex-row lg:px-8">
          <p className="text-sm text-neutral-500">
            © 2026{" "}
            <a href="/shoppingcart" className="hover:text-orange-600">
              StyleCart
            </a>
            . All rights reserved.
          </p>

          <p className="text-sm text-neutral-500">
            Designed with modern ecommerce aesthetics.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default CartFooter;
