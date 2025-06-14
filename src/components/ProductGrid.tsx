import ProductCard from './ProductCard';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Pop Art T-Shirt",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
      category: "Fashion"
    },
    {
      id: 2,
      name: "Retro Sunglasses",
      price: "$45.99",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop",
      category: "Accessories"
    },
    {
      id: 3,
      name: "Comic Print Jacket",
      price: "$89.99",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
      category: "Fashion"
    },
    {
      id: 4,
      name: "Pop Art Canvas",
      price: "$199.99",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      category: "Art"
    },
    {
      id: 5,
      name: "Neon Sneakers",
      price: "$129.99",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
      category: "Fashion"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-100 to-pink-100 dots-pattern">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="pop-title text-5xl lg:text-7xl font-bold mb-4">
            HOT PRODUCTS!
          </h2>
          <p className="text-2xl font-bold text-black bg-yellow-400 inline-block px-6 py-2 rounded-full border-4 border-black transform -rotate-2">
            Trending Now! 🔥
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="handwritten-btn px-12 py-4 text-2xl">
            View All Products! 
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;