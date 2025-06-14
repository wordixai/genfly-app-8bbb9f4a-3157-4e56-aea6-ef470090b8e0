import { Heart, Zap, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pop-art-bg dots-pattern border-t-8 border-black">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand */}
          <div>
            <h3 className="pop-title text-3xl font-bold mb-4">POP SHOP</h3>
            <p className="text-white font-bold bg-black px-4 py-2 rounded-lg inline-block">
              Making fashion FUN! ✨
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-2xl mb-4 text-black">Quick Links</h4>
            <div className="space-y-2">
              {['About Us', 'Contact', 'Shipping', 'Returns'].map((link) => (
                <div key={link}>
                  <button className="handwritten-btn px-4 py-2 text-sm block hover:scale-105 transition-transform">
                    {link}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Social/Newsletter */}
          <div>
            <h4 className="font-bold text-2xl mb-4 text-black">Stay Connected!</h4>
            <div className="space-y-4">
              <div className="flex justify-center md:justify-start space-x-4">
                <button className="p-3 bg-pink-500 rounded-full border-4 border-black hover:bg-pink-400 transition-colors">
                  <Heart className="w-5 h-5" fill="currentColor" />
                </button>
                <button className="p-3 bg-yellow-400 rounded-full border-4 border-black hover:bg-yellow-300 transition-colors">
                  <Star className="w-5 h-5" fill="currentColor" />
                </button>
                <button className="p-3 bg-orange-500 rounded-full border-4 border-black hover:bg-orange-400 transition-colors">
                  <Zap className="w-5 h-5" fill="currentColor" />
                </button>
              </div>
              
              <button className="handwritten-btn px-6 py-3 text-lg w-full md:w-auto">
                Subscribe for Deals!
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t-4 border-black text-center">
          <p className="text-xl font-bold text-black bg-white px-4 py-2 inline-block rounded-full">
            © 2024 POP SHOP - Made with 💖 and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;