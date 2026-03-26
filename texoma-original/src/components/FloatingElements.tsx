import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function FloatingElements() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showStickyCTA && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-24 z-50 pointer-events-auto"
          >
            <a 
              href="#submit"
              className="group relative flex items-center justify-center px-6 py-3 bg-[#EF4444] text-white font-bold text-sm md:text-base uppercase tracking-wider rounded-full shadow-2xl hover:scale-105 transition-transform"
            >
              <div className="absolute inset-0 rounded-full border border-[#EF4444] animate-ping opacity-50"></div>
              <span className="relative z-10 flex items-center gap-2">
                Get My Offer <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <a 
        href="sms:19032676976"
        className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-[#7C3AED] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group pointer-events-auto"
        aria-label="Send SMS"
      >
        <div className="absolute inset-0 rounded-full border-2 border-[#7C3AED] animate-ping opacity-50"></div>
        <MessageCircle className="w-8 h-8 text-white relative z-10" />
      </a>

      <a 
        href="https://wa.me/19032676976" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group pointer-events-auto"
        aria-label="Chat on WhatsApp"
      >
        <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-50"></div>
        <MessageCircle className="w-8 h-8 text-white relative z-10" />
      </a>
    </>
  );
}
