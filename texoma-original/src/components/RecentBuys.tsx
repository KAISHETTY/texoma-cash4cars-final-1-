export default function RecentBuys() {
  const buys = [
    "2008 Ford F-150 · Sherman, TX",
    "2003 Honda Accord · Denison, TX",
    "2011 Chevy Tahoe · Durant, OK",
    "1999 Toyota Camry · Ardmore, OK",
    "2006 Dodge Ram · McKinney, TX",
    "2004 GMC Sierra · Gainesville, TX",
    "2009 Chevy Impala · Ada, OK",
    "2001 Ford Explorer · Madill, OK",
    "2007 Nissan Altima · Denison, TX",
    "2005 Chevy Silverado · Durant, OK",
    "2010 Dodge Charger · Sherman, TX",
    "2002 Ford Mustang · Ardmore, OK"
  ];

  return (
    <section className="py-12 bg-[#EF4444] overflow-hidden border-b-4 border-[#111] relative">
      {/* Funky Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#111 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>

      <div className="container mx-auto px-4 mb-8 relative z-10">
        <h2 className="font-display text-4xl md:text-5xl text-white tracking-widest text-center uppercase text-stroke drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] transform -rotate-1">
          VEHICLES WE'VE RECENTLY PURCHASED
        </h2>
      </div>

      <div className="relative flex overflow-x-hidden group z-10 bg-[#FBBF24] border-y-4 border-[#111] py-2 transform rotate-1">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FBBF24] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FBBF24] to-transparent z-10 pointer-events-none"></div>

        <div className="animate-ticker flex whitespace-nowrap py-4">
          {[...buys, ...buys, ...buys].map((buy, i) => (
            <div 
              key={i} 
              className="flex items-center gap-3 mx-4 px-6 py-3 bg-white border-4 border-[#111] shadow-funky-sm hover:bg-[#22D3EE] transition-colors cursor-default transform -rotate-2 hover:rotate-0"
            >
              <div className="relative flex h-4 w-4 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EF4444] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-[#EF4444] border-2 border-[#111]"></span>
              </div>
              <span className="font-display text-xl text-[#111] uppercase tracking-wider">
                {buy}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
