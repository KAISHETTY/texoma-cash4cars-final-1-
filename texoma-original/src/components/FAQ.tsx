import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: "Do you buy cars without a title?",
      a: "Yes, in most cases we can. Give Ruben a call at (903) 267-6976 and he'll let you know what's needed based on your situation."
    },
    {
      q: "Is the towing actually free?",
      a: "100% free. Always. We come to you, hook it up, and haul it away at zero cost to you — no hidden fees, ever."
    },
    {
      q: "What condition does my vehicle need to be in?",
      a: "Any condition. Running, not running, wrecked, flooded, burned, missing parts — we've seen it all and we'll make you an offer."
    },
    {
      q: "How long does it take to get an offer?",
      a: "Ruben personally reviews every submission and typically responds within 2 hours during business hours. Submit the form or call directly."
    },
    {
      q: "How do I get paid — cash or check?",
      a: "Cash or check on the spot at pickup. No waiting, no checks in the mail, no apps. Money in your hand when we take the car."
    },
    {
      q: "What areas do you serve?",
      a: "We cover North Texas and South Oklahoma — Sherman, Denison, McKinney, Gainesville, Ardmore, Durant, Ada, Sulphur, Madill, Atoka, Tishomingo, and everywhere in between."
    },
    {
      q: "Can I sell a car that's not registered?",
      a: "Yes. Registration status doesn't affect whether we buy it. As long as you can show proof of ownership, we're good to go."
    },
    {
      q: "Do you buy motorcycles and vans too?",
      a: "Absolutely — cars, trucks, SUVs, vans, motorcycles, and most other vehicles. When in doubt, just ask."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#FDF2F2] relative border-y border-gray-200">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-7xl text-[#4B5563] mb-4 tracking-tight">
            GOT QUESTIONS? <span className="text-[#EF4444]">WE'VE GOT ANSWERS.</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`bg-white border ${openIndex === i ? 'border-l-4 border-l-[#EF4444] border-gray-200' : 'border-gray-200'} rounded-lg overflow-hidden transition-all duration-300 shadow-sm`}
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none group"
              >
                <h3 className="font-display text-2xl md:text-3xl text-[#4B5563] group-hover:text-[#EF4444] transition-colors pr-8">
                  {faq.q}
                </h3>
                <ChevronDown 
                  className={`w-6 h-6 text-[#4B5563]/50 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-[#EF4444]' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 border-t border-gray-100 mt-2">
                      <p className="font-body text-[#4B5563]/80 text-lg leading-relaxed font-medium">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
