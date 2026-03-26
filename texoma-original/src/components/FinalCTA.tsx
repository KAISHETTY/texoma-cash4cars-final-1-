import { motion } from 'motion/react';
import { Phone, ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-[#EF4444] relative overflow-hidden">
      <div className="absolute inset-0 bg-black/5"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-display text-6xl md:text-8xl lg:text-9xl text-white mb-8 leading-[0.85] tracking-tight">
            STOP LETTING IT SIT. START GETTING PAID.
          </h2>
          
          <p className="font-body text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
            That car in your driveway is costing you space, stress, and headaches. 
            Whether you're in North Texas or South Oklahoma — Ruben crosses the Red River 
            to come to you. Cash in hand, towed away free.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#submit" 
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-[#EF4444] font-bold text-xl uppercase tracking-wider overflow-hidden rounded-sm transition-all hover:scale-105 shadow-2xl"
            >
              <span className="relative z-10 flex items-center gap-2">
                GET MY FREE OFFER NOW <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-black/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </a>
            
            <a 
              href="tel:9032676976" 
              className="inline-flex items-center justify-center px-8 py-5 border-2 border-white text-white font-bold text-xl uppercase tracking-wider rounded-sm transition-all hover:bg-white hover:text-[#EF4444]"
            >
              <Phone className="mr-2 h-6 w-6" />
              Or call Ruben directly: (903) 267-6976
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
