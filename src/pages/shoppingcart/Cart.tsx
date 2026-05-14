import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";

const cartProducts = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    description: "Volumizing and lengthening mascara for dramatic lashes.",
    price: 9.99,
    quantity: 2,
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
  },

  {
    id: 2,
    title: "Luxury Skin Serum",
    description: "Premium skincare serum for glowing and healthy skin.",
    price: 24.99,
    quantity: 1,
    thumbnail:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    title: "Modern Perfume Collection",
    description: "Elegant fragrance collection with modern aesthetics.",
    price: 39.99,
    quantity: 3,
    thumbnail:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1200&auto=format&fit=crop",
  },
];

const Cart = () => {
  const subtotal = cartProducts.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

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
          <div className="space-y-6">
            {cartProducts.map((product) => (
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
                      <button className="rounded-full p-2 transition hover:bg-orange-100 hover:text-orange-500">
                        <Minus className="h-5 w-5" />
                      </button>

                      <span className="min-w-[40px] text-center text-lg font-bold text-neutral-900">
                        {product.quantity}
                      </span>

                      <button className="rounded-full p-2 transition hover:bg-orange-100 hover:text-orange-500">
                        <Plus className="h-5 w-5" />
                      </button>
                    </div>

                    {/* DELETE BUTTON */}
                    <button className="flex items-center gap-2 rounded-full bg-red-50 px-5 py-3 text-sm font-semibold text-red-500 transition-all duration-300 hover:bg-red-500 hover:text-white">
                      <Trash2 className="h-4 w-4" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="h-fit rounded-[32px] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-black text-neutral-900">
              Order Summary
            </h2>

            <div className="mt-8 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-neutral-600">Products</span>

                <span className="font-bold text-neutral-900">
                  {cartProducts.length}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-neutral-600">Shipping</span>

                <span className="font-bold text-green-500">Free</span>
              </div>

              <div className="border-t border-dashed border-neutral-200 pt-5">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-neutral-900">
                    Total
                  </span>

                  <span className="text-3xl font-black text-orange-500">
                    ${subtotal.toFixed(2)}
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
