import axios from "axios";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useEffect, useState } from "react";

interface ProductType {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  thumbnail: string;
}
interface ProductsResponse {
  products: ProductType[];
}

const Products = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await axios.get<ProductsResponse>(
        "https://dummyjson.com/products",
      );

      setProducts(response.data.products);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.message);
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-[#f8f5f2]">
        <h1 className="text-2xl font-bold text-orange-500">
          Loading Products...
        </h1>
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-[#f8f5f2]">
        <h1 className="text-2xl font-bold text-red-500">{error}</h1>
      </section>
    );
  }

  return (
    <section className="bg-[#f8f5f2] py-20">
      {/* CONTAINER */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-orange-500">
            All Products
          </p>

          <h1 className="text-3xl font-black text-neutral-900 sm:text-4xl lg:text-5xl">
            Explore Our Collection
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-neutral-600">
            Browse premium products with modern designs, curated styles, and
            high quality collections.
          </p>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-[28px] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                {/* LOVE BUTTON */}
                <button className="absolute right-4 top-4 z-20 rounded-full bg-white/90 p-3 shadow-md backdrop-blur-md transition hover:bg-orange-500 hover:text-white">
                  <Heart className="h-5 w-5" />
                </button>

                {/* PRODUCT IMAGE */}
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* CATEGORY */}
                <div className="absolute left-4 top-4 rounded-full bg-orange-500 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  {product.category}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                {/* RATING */}
                <div className="mb-3 flex items-center gap-2">
                  <Star className="h-4 w-4 fill-orange-400 text-orange-400" />

                  <span className="text-sm font-semibold text-neutral-700">
                    {product.rating}
                  </span>
                </div>

                {/* TITLE */}
                <h2 className="line-clamp-1 text-xl font-bold text-neutral-900">
                  {product.title}
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-neutral-600">
                  {product.description}
                </p>

                {/* PRICE + BUTTON */}
                <div className="mt-6 flex items-center justify-between">
                  <h3 className="text-2xl font-black text-orange-500">
                    ${product.price}
                  </h3>

                  <button className="flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg">
                    <ShoppingCart className="h-4 w-4" />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
