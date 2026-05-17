import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useContext } from "react";
import ShoppingCartContext from "../../context/shoppingcart/ShoppingCartContext";

const Cart = () => {
  const ProductContext = useContext(ShoppingCartContext);

  console.log("response in cart", ProductContext?.state.cart);

  const subtotal =
    ProductContext?.state.cart.reduce(
      (acc, item) => acc + item.price * (item.quantity ?? 1),
      0,
    ) || 0;

  const shipping = subtotal > 100 ? 0 : 10;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <section className="min-h-screen bg-[#f8f5f2] py-20">
      {/* CONTAINER */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-14 text-center">
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-orange-100 p-4 text-orange-500">
              <ShoppingBag className="h-8 w-8" />
            </div>
          </div>

          <h1 className="text-3xl font-black text-neutral-900 sm:text-4xl lg:text-5xl">
            Your Shopping Cart
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-neutral-600">
            Review your selected products before proceeding to checkout.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[2fr_1fr]">
          {/* LEFT SIDE */}
          <div className="max-h-[580px] space-y-6 overflow-y-auto pr-2">

            {ProductContext?.state?.cart?.length ?? 0 ? (
              // real products 
              ProductContext?.state?.cart?.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col gap-6 rounded-[28px] bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-xl sm:flex-row"
                >
                  {/* IMAGE */}
                  <div className="overflow-hidden rounded-3xl">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-[220px] w-full object-cover sm:w-[220px]"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h2 className="text-2xl font-black text-neutral-900">
                        {product.title}
                      </h2>

                      <p className="mt-3 text-sm leading-7 text-neutral-600">
                        {product.description}
                      </p>

                      <h3 className="mt-5 text-3xl font-black text-orange-500">
                        ${product.price}
                      </h3>
                    </div>

                    {/* ACTIONS */}
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-5">
                      {/* QUANTITY */}
                      <div className="flex items-center rounded-full border border-neutral-200 bg-neutral-50 p-2">
                        <button
                          onClick={() => ProductContext.decriseQnt(product.id)}
                          className="rounded-full p-2 transition hover:bg-orange-100 hover:text-orange-500"
                        >
                          <Minus className="h-5 w-5" />
                        </button>

                        <span className="min-w-[40px] text-center text-lg font-bold text-neutral-900">
                          {product.quantity}
                        </span>

                        <button
                          onClick={() => ProductContext.incriseQnt(product.id)}
                          className="rounded-full p-2 transition hover:bg-orange-100 hover:text-orange-500"
                        >
                          <Plus className="h-5 w-5" />
                        </button>
                      </div>

                      {/* DELETE BUTTON */}
                      <button
                        onClick={() => ProductContext.deleteProduct(product.id)}
                        className="flex items-center gap-2 rounded-full bg-red-50 px-5 py-3 text-sm font-semibold text-red-500 transition-all duration-300 hover:bg-red-500 hover:text-white"
                      >
                        <Trash2 className="h-4 w-4" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              // demo products
              <div className="flex flex-col gap-6 rounded-[28px] bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-xl sm:flex-row">
                {/* IMAGE */}
                <div className="overflow-hidden rounded-3xl">
                  <img
                    // src={demoimg}
                    alt="demo img"
                    className="h-[220px] w-full object-cover sm:w-[220px]"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-black text-neutral-900">
                      Demo Product
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-neutral-600">
                      Product description
                    </p>

                    <h3 className="mt-5 text-3xl font-black text-orange-500">
                      $00
                    </h3>
                  </div>

                  {/* ACTIONS */}
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-5">
                    {/* QUANTITY */}
                    <div className="flex items-center rounded-full border border-neutral-200 bg-neutral-50 p-2">
                      <button
                        // onClick={() => ProductContext.decriseQnt(product.id)}
                        className="rounded-full p-2 transition hover:bg-orange-100 hover:text-orange-500"
                      >
                        <Minus className="h-5 w-5" />
                      </button>

                      <span className="min-w-[40px] text-center text-lg font-bold text-neutral-900">
                        0
                      </span>

                      <button
                        // onClick={() => ProductContext.incriseQnt(product.id)}
                        className="rounded-full p-2 transition hover:bg-orange-100 hover:text-orange-500"
                      >
                        <Plus className="h-5 w-5" />
                      </button>
                    </div>

                    {/* DELETE BUTTON */}
                    <button
                      // onClick={() => ProductContext.deleteProduct(product.id)}
                      className="flex items-center gap-2 rounded-full bg-red-50 px-5 py-3 text-sm font-semibold text-red-500 transition-all duration-300 hover:bg-red-500 hover:text-white"
                    >
                      <Trash2 className="h-4 w-4" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="h-fit rounded-[32px] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-black text-neutral-900">
              Order Summary
            </h2>

            <div className="mt-8 space-y-5">
              {/* PRODUCTS */}
              <div className="flex items-center justify-between">
                <span className="text-neutral-600">Products</span>

                <span className="font-bold text-neutral-900">
                  {ProductContext?.state.cart.length}
                </span>
              </div>

              {/* SUBTOTAL */}
              <div className="flex items-center justify-between">
                <span className="text-neutral-600">Subtotal</span>

                <span className="font-bold text-neutral-900">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              {/* SHIPPING */}
              <div className="flex items-center justify-between">
                <span className="text-neutral-600">Shipping</span>

                <span
                  className={`font-bold ${
                    shipping === 0 ? "text-green-500" : "text-neutral-900"
                  }`}
                >
                  {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                </span>
              </div>

              {/* TAX */}
              <div className="flex items-center justify-between">
                <span className="text-neutral-600">Tax (10%)</span>

                <span className="font-bold text-neutral-900">
                  ${tax.toFixed(2)}
                </span>
              </div>

              {/* TOTAL */}
              <div className="border-t border-dashed border-neutral-200 pt-5">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-neutral-900">
                    Total
                  </span>

                  <span className="text-3xl font-black text-orange-500">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* CHECKOUT BUTTON */}
            <button className="mt-8 w-full rounded-full bg-orange-500 px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-xl">
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
