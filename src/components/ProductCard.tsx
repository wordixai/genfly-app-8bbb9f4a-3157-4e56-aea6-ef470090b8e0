import { ShoppingCart, Heart, Zap } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="comic-frame bg-white p-6 explosion-effect">
      <div className="retro-card p-4">
        {/* Product Image */}
        <div className="relative overflow-hidden rounded-lg mb-4 border-4 border-black">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2">
            <span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded-full border-2 border-black text-sm transform rotate-12">
              HOT!
            </span>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold bg-pink-500 text-white px-3 py-1 rounded-full border-2 border-black">
              {product.category}
            </span>
            <button className="p-2 bg-orange-400 rounded-full border-2 border-black hover:bg-orange-300 transition-colors">
              <Heart className="w-4 h-4" />
            </button>
          </div>

          <h3 className="font-bold text-lg text-black">{product.name}</h3>
          
          <div className="flex items-center justify-between">
            <span className="pop-title text-2xl font-bold">{product.price}</span>
            <Zap className="w-5 h-5 text-yellow-500" />
          </div>

          <button className="handwritten-btn w-full py-3 px-4 text-lg flex items-center justify-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Add to Cart!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;