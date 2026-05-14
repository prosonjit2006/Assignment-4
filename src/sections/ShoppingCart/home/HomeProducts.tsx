import { Heart, ShoppingCart, Star } from "lucide-react";

const dummyProducts = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    description:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects.",
    category: "beauty",
    price: 9.99,
    rating: 2.56,
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
  },

  {
    id: 2,
    title: "Velvet Matte Lipstick",
    description:
      "Premium matte lipstick with long-lasting smooth finish and rich pigmentation.",
    category: "beauty",
    price: 14.99,
    rating: 4.8,
    thumbnail:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    title: "Luxury Skin Serum",
    description:
      "Hydrating facial serum crafted for glowing and healthy skin care routines.",
    category: "skincare",
    price: 24.99,
    rating: 4.7,
    thumbnail:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 4,
    title: "Modern Perfume Collection",
    description:
      "Elegant fragrance collection designed for modern and confident lifestyles.",
    category: "fragrance",
    price: 39.99,
    rating: 4.9,
    thumbnail:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1200&auto=format&fit=crop",
  },
];

const HomeProducts = () => {
  return (
    <section className="bg-[#f8f5f2] py-20">
      {/* CONTAINER */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
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

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {dummyProducts.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-[28px] bg-white shadow-sm transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative overflow-hidden">
                {/* LOVE BUTTON */}
                <button className="absolute right-4 top-4 z-20 rounded-full bg-white/90 p-3 shadow-md backdrop-blur-md transition hover:bg-orange-500 hover:text-white">
                  <Heart className="h-5 w-5" />
                </button>

                {/* PRODUCT IMAGE */}
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-110 overflow-hidden"
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
                <h3 className="line-clamp-1 text-xl font-bold text-neutral-900">
                  {product.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-neutral-600">
                  {product.description}
                </p>

                {/* PRICE + BUTTON */}
                <div className="mt-6 flex items-center justify-between">
                  <h4 className="text-2xl font-black text-orange-500">
                    ${product.price}
                  </h4>

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

export default HomeProducts;
