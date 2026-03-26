import { motion } from 'motion/react';
import { Phone, Truck, DollarSign, Clock, Wrench, FileX, Trophy, Star } from 'lucide-react';

export default function Hero() {
  const headlineLines = [
    "STOP LOOKING AT",
    "THAT JUNK CAR",
    "— GET PAID FOR IT"
  ];

  const badges = [
    { icon: Truck, text: "Free Towing" },
    { icon: DollarSign, text: "Cash Paid" },
    { icon: Clock, text: "Same-Day Response" },
    { icon: Wrench, text: "Any Condition" },
    { icon: FileX, text: "No Title? No Problem" },
    { icon: Trophy, text: "5,000+ Cars Bought" }
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-12 overflow-hidden bg-[#FBBF24]">
      {/* Funky Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#111 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
      
      {/* Realistic Junkyard Background - Funky Blend */}
      <div className="absolute inset-0 z-0 mix-blend-overlay opacity-40">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-no-repeat"></div>
      </div>

      {/* Floating Funky Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-10 md:right-32 z-10 text-6xl md:text-8xl drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
      >
        💸
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-40 right-20 md:right-48 z-10 text-6xl md:text-8xl drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
      >
        🚗
      </motion.div>
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-40 left-10 md:left-20 z-10 text-[#EF4444]"
      >
        <Star className="w-16 h-16 fill-current drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-20 flex-1 flex flex-col justify-center items-center text-center">
        <div className="max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20, rotate: -5 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.6 }}
            className="font-display text-white bg-[#EF4444] uppercase tracking-widest text-lg md:text-2xl mb-8 font-bold inline-block px-6 py-2 border-4 border-[#111] shadow-funky-sm transform -rotate-2"
          >
            NORTH TEXAS & SOUTH OKLAHOMA'S #1 BUYER
          </motion.div>

          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-8 text-white text-stroke drop-shadow-[6px_6px_0px_rgba(0,0,0,1)]">
            {headlineLines.map((line, i) => (
              <div key={i} className="overflow-hidden py-2">
                <motion.div
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.2 + (i * 0.15),
                    type: "spring",
                    stiffness: 100
                  }}
                  className={i === 2 ? "text-[#EF4444]" : ""}
                >
                  {line}
                </motion.div>
              </div>
            ))}
          </h1>

          <motion.p 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="font-body text-2xl md:text-3xl text-[#111] max-w-3xl mx-auto mb-10 leading-relaxed font-black bg-white border-4 border-[#111] shadow-funky-sm p-6 rounded-xl transform rotate-1"
          >
            Blown engine. No title. Wrecked. Rusted. Won't start. 
            We buy it ALL — and haul it away FREE.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <a 
              href="#submit" 
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-[#EF4444] text-white font-display text-3xl uppercase tracking-wider border-4 border-[#111] shadow-funky shadow-funky-hover"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get My Free Offer
              </span>
            </a>
            
            <a 
              href="tel:9032676976" 
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#111] font-display text-3xl uppercase tracking-wider border-4 border-[#111] shadow-funky shadow-funky-hover"
            >
              <Phone className="mr-3 h-8 w-8 text-[#EF4444]" />
              (903) 267-6976
            </a>
          </motion.div>
        </div>
      </div>

      {/* Trust Badges - Funky Style */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-0 left-0 w-full bg-white border-t-4 border-[#111] py-4 z-30"
      >
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto pb-2 md:pb-0 hide-scrollbar gap-8 md:gap-12 items-center whitespace-nowrap">
            {badges.map((badge, i) => (
              <div key={i} className="flex items-center gap-3 text-[#111] group cursor-default">
                <div className="bg-[#FBBF24] p-2 border-2 border-[#111] rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform">
                  <badge.icon className="h-6 w-6 text-[#111]" />
                </div>
                <span className="font-display text-xl uppercase tracking-wider">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
