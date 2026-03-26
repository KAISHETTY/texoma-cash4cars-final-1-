import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export default function MapSection() {
  const areas = [
    "Sherman, TX", "Denison, TX", "McKinney, TX", "Gainesville, TX",
    "Ardmore, OK", "Durant, OK", "Ada, OK", "Sulphur, OK",
    "Atoka, OK", "Tishomingo, OK", "Madill, OK", "And all surrounding areas"
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-7xl text-[#4B5563] mb-4 tracking-tight">
            WE COME TO YOU — <span className="text-[#EF4444]">SERVING NORTH TEXAS & SOUTH OKLAHOMA</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="inline-flex items-center gap-3 bg-[#EF4444]/10 border border-[#EF4444]/30 px-6 py-3 rounded-full">
              <div className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EF4444] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#EF4444]"></span>
              </div>
              <span className="font-mono text-sm text-[#EF4444] uppercase tracking-wider font-bold">We're Local</span>
            </div>

            <h3 className="font-display text-4xl text-[#4B5563]">
              We cover both sides of the Red River.
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {areas.map((area, i) => (
                <div key={i} className="flex items-center gap-2 text-[#4B5563]/80">
                  <MapPin className="w-4 h-4 text-[#EF4444] shrink-0" />
                  <span className="font-body text-lg font-medium">{area}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#FDF2F2] border border-[#EF4444]/30 p-6 rounded-xl mt-8">
              <p className="font-body text-xl text-[#EF4444] font-bold">
                Within 100 miles of Sherman, TX — we're coming to you.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-gray-200 shadow-xl relative group"
          >
            <div className="absolute inset-0 bg-[#EF4444]/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10"></div>
            <iframe 
              src="https://maps.google.com/maps?q=Sherman,TX&z=8&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(50%) contrast(1.1)' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full object-cover"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
