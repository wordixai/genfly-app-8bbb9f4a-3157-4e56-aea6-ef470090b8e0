import { Sparkles, Star, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pop-art-bg dots-pattern min-h-screen flex items-center relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 floating">
        <Star className="w-12 h-12 text-yellow-400" fill="currentColor" />
      </div>
      <div className="absolute top-40 right-32 floating animation-delay-1000">
        <Sparkles className="w-16 h-16 text-pink-500" fill="currentColor" />
      </div>
      <div className="absolute bottom-32 left-32 floating animation-delay-500">
        <Zap className="w-10 h-10 text-orange-500" fill="currentColor" />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="pop-title text-6xl lg:text-8xl font-bold leading-tight">
                RETRO
                <br />
                POP ART
                <br />
                STYLE!
              </h2>
              <p className="text-2xl font-bold text-white bg-black px-4 py-2 inline-block transform -rotate-2 border-4 border-white">
                Fashion that POPS! 💥
              </p>
            </div>

            <div className="space-y-4">
              <button className="handwritten-btn px-8 py-4 text-2xl mr-4">
                Shop Now!
              </button>
              <button className="bg-white text-black border-4 border-black px-8 py-4 text-2xl font-bold rounded-3xl hover:bg-yellow-400 transition-colors">
                Browse Art
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              {['50% OFF', 'FREE SHIP', 'NEW DROPS'].map((badge) => (
                <div key={badge} className="bg-yellow-400 text-black font-bold px-4 py-2 rounded-full border-4 border-black transform rotate-3 hover:rotate-6 transition-transform">
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Image/Illustration Area */}
          <div className="relative">
            <div className="comic-frame p-8 bg-white floating">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=600&fit=crop"
                alt="Pop Art Fashion"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            
            {/* Speech Bubble */}
            <div className="absolute -top-4 -right-4 bg-white border-4 border-black rounded-3xl p-4 transform rotate-12">
              <p className="font-bold text-lg">WOW! Amazing Style!</p>
              <div className="absolute -bottom-2 left-8 w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-black"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;