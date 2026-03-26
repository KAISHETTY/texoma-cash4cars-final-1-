import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "I had a 2006 Dodge Ram sitting dead in my driveway for two years. Called Ruben on Monday, had cash in hand by Wednesday. Zero hassle.",
      name: "Marcus T.",
      city: "Sherman TX",
      initials: "MT"
    },
    {
      quote: "He gave me $400 for a car I thought was worth nothing. The tow truck showed up right on time and Ruben was super professional.",
      name: "Sandra K.",
      city: "Denison TX",
      initials: "SK"
    },
    {
      quote: "I was nervous about selling without a title but Ruben handled everything. Would recommend to anyone in the Sherman area trying to get rid of an old car.",
      name: "Jaime R.",
      city: "Durant OK",
      initials: "JR"
    },
    {
      quote: "Easiest $350 I ever made. Called in the morning, car was gone by afternoon.",
      name: "DeShawn M.",
      city: "Ardmore OK",
      initials: "DM"
    },
    {
      quote: "Ruben came all the way out to Madill with no complaints. Super fair price and he had cash ready. No games, no lowballing.",
      name: "Tammy W.",
      city: "Madill OK",
      initials: "TW"
    },
    {
      quote: "I didn't think anyone would buy my flood-damaged SUV but he took it same day. Honestly shocked at how smooth it went.",
      name: "Carlos V.",
      city: "Gainesville TX",
      initials: "CV"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 bg-[#FBBF24] relative overflow-hidden border-y-4 border-[#111]">
      {/* Funky Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#111 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-6xl md:text-8xl text-white mb-4 tracking-wider text-stroke drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] transform -rotate-1">
            WHAT REAL CUSTOMERS <span className="text-[#EF4444]">ARE SAYING</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative min-h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100, rotate: 5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              exit={{ opacity: 0, x: -100, rotate: -5 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 md:p-12 bg-white border-4 border-[#111] rounded-2xl shadow-funky transform rotate-1"
            >
              <div className="flex gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5, type: "spring" }}
                  >
                    <Star className="w-8 h-8 fill-[#FBBF24] text-[#111] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]" />
                  </motion.div>
                ))}
              </div>

              <p className="font-body text-2xl md:text-3xl text-[#111] italic mb-8 leading-relaxed font-black">
                "{testimonials[currentIndex].quote}"
              </p>

              <div className="flex items-center gap-4 bg-[#FDF2F2] border-4 border-[#111] px-6 py-3 rounded-full shadow-funky-sm transform -rotate-2">
                <div className="w-14 h-14 rounded-full bg-[#22D3EE] border-4 border-[#111] flex items-center justify-center font-display text-3xl text-[#111] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  {testimonials[currentIndex].initials}
                </div>
                <div className="text-left">
                  <p className="font-display text-3xl text-[#111] tracking-wide leading-none">{testimonials[currentIndex].name}</p>
                  <p className="font-mono text-sm text-[#EF4444] uppercase tracking-widest font-bold">{testimonials[currentIndex].city}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-16">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-4 h-4 rounded-full border-2 border-[#111] transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
                i === currentIndex ? "bg-[#EF4444] w-12" : "bg-white hover:bg-[#22D3EE]"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
