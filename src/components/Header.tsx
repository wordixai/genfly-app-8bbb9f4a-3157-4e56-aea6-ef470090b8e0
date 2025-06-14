import { ShoppingCart, Menu, Heart } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50">
      <div className="pop-art-bg dots-pattern">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="floating">
              <h1 className="pop-title text-4xl font-bold">
                POP SHOP
              </h1>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {['Home', 'Fashion', 'Art', 'Accessories'].map((item) => (
                <button
                  key={item}
                  className="handwritten-btn px-6 py-2 text-lg hover:scale-110 transition-transform"
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button className="floating p-3 bg-yellow-400 rounded-full border-4 border-black hover:bg-yellow-300 transition-colors">
                <Heart className="w-6 h-6" />
              </button>
              <button className="floating p-3 bg-pink-500 rounded-full border-4 border-black hover:bg-pink-400 transition-colors animation-delay-200">
                <ShoppingCart className="w-6 h-6" />
              </button>
              <button 
                className="md:hidden p-3 bg-orange-500 rounded-full border-4 border-black"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-2">
              {['Home', 'Fashion', 'Art', 'Accessories'].map((item) => (
                <button
                  key={item}
                  className="handwritten-btn block w-full text-left px-6 py-3 text-lg"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;