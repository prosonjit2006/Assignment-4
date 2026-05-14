import { ArrowRight, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "../../../../public/hero.png";

const ShoppingCartHero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/45" />

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
        {/* LEFT CONTENT */}
        <div className="max-w-2xl">
          {/* TAG */}
          <div className="mb-5 flex w-fit items-center gap-2 rounded-full border border-orange-300/30 bg-orange-400/20 px-4 py-2 text-sm font-semibold text-orange-200 backdrop-blur-md">
            <ShoppingBag className="h-4 w-4" />
            New Fashion Collection
          </div>

          {/* HEADING */}
          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
            Discover Your
            <span className="block text-orange-400">Perfect Style</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 max-w-xl text-base leading-7 text-neutral-200 sm:text-lg">
            Elevate your wardrobe with premium fashion pieces, timeless
            accessories, and trend-driven collections crafted for modern
            lifestyles.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => navigate("/shoppingcart/cart")}
              className="flex items-center justify-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-2xl"
            >
              Go To Cart
              <ArrowRight className="h-5 w-5" />
            </button>

            <button
              onClick={() => navigate("/shoppingcart/products")}
              className="flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black"
            >
              Explore Products
            </button>
          </div>

          {/* STATS */}
          <div className="mt-12 flex flex-wrap gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white">500+</h2>

              <p className="text-sm text-neutral-300">Premium Products</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">10K+</h2>

              <p className="text-sm text-neutral-300">Happy Customers</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">4.9</h2>

              <p className="text-sm text-neutral-300">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCartHero;
