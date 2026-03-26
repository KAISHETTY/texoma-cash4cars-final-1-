import { motion } from 'motion/react';

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "TELL US ABOUT YOUR RIDE",
      desc: "Fill out our 90-second form. Year, make, model, condition. That's it. No inspection needed, no mechanic visit, no pressure.",
      img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "02",
      title: "WE MAKE YOU AN OFFER",
      desc: "Ruben reviews your info and photos and calls or texts you back — usually within a couple of hours — with a real cash number.",
      img: "https://i.imgur.com/hPniGDV.jpg"
    },
    {
      num: "03",
      title: "WE PICK UP, YOU GET PAID",
      desc: "We schedule a FREE pickup at your convenience. We hand you cash or a check on the spot and tow it away. Done.",
      img: "https://i.imgur.com/ybmWiAF.jpg"
    }
  ];

  return (
    <section className="py-24 bg-[#22D3EE] relative overflow-hidden border-y-4 border-[#111]" id="how-it-works">
      {/* Funky Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#111 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-6xl md:text-8xl text-white mb-6 tracking-wider text-stroke drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] transform -rotate-1">
            THREE STEPS TO <span className="text-[#FBBF24]">CASH IN YOUR POCKET</span>
          </h2>
          <p className="font-body text-2xl text-[#111] max-w-2xl mx-auto font-black bg-white inline-block px-6 py-2 border-4 border-[#111] shadow-funky-sm transform rotate-1">
            The fastest way to empty your driveway and fill your wallet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className={`relative bg-white border-4 border-[#111] rounded-xl overflow-hidden shadow-funky shadow-funky-hover group ${i % 2 === 0 ? 'transform -rotate-1' : 'transform rotate-1'}`}
            >
              <div className="h-56 overflow-hidden relative border-b-4 border-[#111]">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${step.img})` }}></div>
                <div className="absolute inset-0 bg-[#EF4444]/20 group-hover:bg-transparent transition-colors mix-blend-multiply"></div>
                
                <div className="absolute -top-4 -left-4 bg-[#FBBF24] text-[#111] font-display text-6xl px-6 py-4 rounded-full border-4 border-[#111] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-12 group-hover:rotate-0 transition-transform z-10">
                  {step.num}
                </div>
              </div>

              <div className="p-8 relative z-10 bg-white">
                <h3 className="font-display text-4xl text-[#111] mb-4 tracking-wide group-hover:text-[#EF4444] transition-colors leading-none">
                  {step.title}
                </h3>
                <p className="font-body text-[#111] leading-relaxed text-xl font-bold">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
