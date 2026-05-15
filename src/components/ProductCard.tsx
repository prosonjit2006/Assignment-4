import { Heart, ShoppingCart, Star } from "lucide-react";
import { useContext } from "react";

import ShoppingCartContext from "../context/shoppingcart/ShoppingCartContext";

import type { ProductPayload } from "../typescript/interface/shoppingcart.interface";

interface ProductCardProps {
  product: ProductPayload;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const ProductContext = useContext(ShoppingCartContext);
  //   console.log('res', ProductContext)

  return (
    <div className="group overflow-hidden rounded-[28px] bg-white shadow-sm transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl">
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <button className="absolute right-4 top-4 z-20 rounded-full bg-white/90 p-3 shadow-md backdrop-blur-md transition hover:bg-orange-500 hover:text-white">
          <Heart className="h-5 w-5" />
        </button>

        <img
          src={product?.thumbnail}
          alt={product?.title}
          className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute left-4 top-4 rounded-full bg-orange-500 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          {product?.category}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <div className="mb-3 flex items-center gap-2">
          <Star className="h-4 w-4 fill-orange-400 text-orange-400" />

          <span className="text-sm font-semibold text-neutral-700">
            {product?.rating}
          </span>
        </div>

        <h3 className="line-clamp-1 text-xl font-bold text-neutral-900">
          {product?.title}
        </h3>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-neutral-600">
          {product?.description}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <h4 className="text-2xl font-black text-orange-500">
            ${product?.price}
          </h4>

          <button
            onClick={() => ProductContext?.addToCart(product)}
            className="flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg"
          >
            <ShoppingCart className="h-4 w-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
