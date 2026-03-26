import { motion } from 'motion/react';

export default function VehicleTypes() {
  const types = [
    { img: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=500&q=80", label: "Sedans" },
    { img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=500&q=80", label: "SUVs" },
    { img: "https://i.imgur.com/LxWJg0T.jpg", label: "Trucks" },
    { img: "https://i.imgur.com/Uangj4j.jpg", label: "Vans" },
    { img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=500&q=80", label: "Motorcycles" },
    { img: "https://i.imgur.com/fMPER4G.jpg", label: "Wrecked/Salvage" },
    { img: "https://i.imgur.com/A9yeRZ9.jpg", label: "Utility Trailers" }
  ];

  return (
    <section className="py-24 bg-[#FDF2F2] relative overflow-hidden border-y-4 border-[#111]">
      {/* Funky Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#111 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-6xl md:text-8xl text-[#111] mb-4 tracking-wider text-stroke-sm drop-shadow-[4px_4px_0px_rgba(239,68,68,1)] transform rotate-1">
            NO MATTER WHAT YOU'RE DRIVING — <span className="text-[#EF4444] drop-shadow-[4px_4px_0px_rgba(17,17,17,1)]">OR NOT DRIVING</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {types.map((type, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
              className={`relative h-72 rounded-xl overflow-hidden group border-4 border-[#111] shadow-funky bg-[#111] ${i % 2 === 0 ? 'transform -rotate-1' : 'transform rotate-1'}`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-125"
                style={{ backgroundImage: `url(${type.img})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col items-center justify-end h-full">
                <h3 className="font-display text-4xl text-white tracking-wider group-hover:text-[#FBBF24] transition-colors text-stroke drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                  {type.label}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
