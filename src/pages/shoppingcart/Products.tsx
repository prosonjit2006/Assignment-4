import { useContext, useEffect } from "react";
import ShoppingCartContext from "../../context/shoppingcart/ShoppingCartContext";
import ProductCard from "../../components/ProductCard";

const Products = () => {
  const ProductContext = useContext(ShoppingCartContext);
  if (!ProductContext) {
    throw new Error("Product Context is not provided");
  }
  // console.log("product context", ProductContext);
  console.log("response in cart", ProductContext.state.cart);

  useEffect(() => {
    ProductContext.fetchProductList();
  }, []);

  if (ProductContext.state.isLoading) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-[#f8f5f2]">
        <h1 className="text-2xl font-bold text-orange-500">
          Loading Products...
        </h1>
      </section>
    );
  }

  if (ProductContext.state.isError) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-[#f8f5f2]">
        <h1 className="text-2xl font-bold text-red-500">
          {ProductContext.state.isError}
        </h1>
      </section>
    );
  }

  return (
    <section className="bg-[#f8f5f2] py-20">
      {/* container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* header */}
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

        {/* products grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ProductContext?.state?.products?.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
