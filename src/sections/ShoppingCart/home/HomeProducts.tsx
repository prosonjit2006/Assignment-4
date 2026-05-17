import { useContext, useEffect } from "react";
import ShoppingCartContext from "../../../context/shoppingcart/ShoppingCartContext";
import ProductCard from "../../../components/ProductCard";

const HomeProducts = () => {
  const ProductContext = useContext(ShoppingCartContext);
  if (!ProductContext) {
    throw new Error("Product Context is not provided");
  }
  console.log("product context", ProductContext);

  useEffect(() => {
    ProductContext.fetchProductList();
  }, []);

  return (
    <section className="bg-[#f8f5f2] py-20">
      {/* container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* section header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-orange-500">
            Trending Products
          </p>

          <h2 className="max-w-2xl text-3xl font-black text-neutral-900 sm:text-4xl lg:text-5xl">
            Explore Our Premium Collection
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600">
            Discover carefully curated products crafted for style, comfort, and
            modern living experiences.
          </p>
        </div>

        {/* product grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ProductContext?.state?.products?.slice(0, 4)?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
