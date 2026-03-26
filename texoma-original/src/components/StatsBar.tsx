import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

function Counter({ end, suffix = "", prefix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        // easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeProgress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsBar() {
  const stats = [
    { end: 5000, suffix: "+", label: "Vehicles Purchased" },
    { prefix: "$", end: 2.8, suffix: "M+", label: "Cash Paid Out", isFloat: true },
    { end: 48, suffix: " Hours", label: "Average Pickup" },
    { end: 100, suffix: "%", label: "Free Towing" }
  ];

  return (
    <section className="bg-[#EF4444] border-y border-[#EF4444] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/20">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center px-4"
            >
              <div className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-2 tracking-tight">
                {stat.isFloat ? (
                  <span className="font-display">
                    {stat.prefix}2.8{stat.suffix}
                  </span>
                ) : (
                  <Counter end={stat.end} prefix={stat.prefix} suffix={stat.suffix} />
                )}
              </div>
              <div className="font-mono text-xs md:text-sm text-white/80 uppercase tracking-widest font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
