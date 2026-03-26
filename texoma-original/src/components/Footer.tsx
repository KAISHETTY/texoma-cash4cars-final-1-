import { Phone, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#4B5563] border-t border-gray-200 pt-20 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-texture opacity-50 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-16">
          <div className="space-y-6">
            <h3 className="font-display text-4xl text-white tracking-wider">
              TEXOMA <span className="text-[#EF4444]">CASH 4 CARS</span>
            </h3>
            <p className="font-body text-white/80 text-lg leading-relaxed font-medium">
              Turning clunkers into cash — North Texas & South Oklahoma.
            </p>
            <div className="space-y-4">
              <a href="tel:9032676976" className="flex items-center gap-3 text-white/90 hover:text-[#EF4444] transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#EF4444]/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-mono text-sm uppercase tracking-widest font-bold">(903) 267-6976</span>
              </a>
              <a href="mailto:rubenlopezceo@gmail.com" className="flex items-center gap-3 text-white/90 hover:text-[#EF4444] transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#EF4444]/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-mono text-sm uppercase tracking-widest font-bold">rubenlopezceo@gmail.com</span>
              </a>
              <a href="https://wa.me/19032676976" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/90 hover:text-[#EF4444] transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#EF4444]/20 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="font-mono text-sm uppercase tracking-widest font-bold">WhatsApp Us</span>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-mono text-sm text-[#EF4444] uppercase tracking-widest font-bold">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="font-body text-white/80 hover:text-white transition-colors font-medium">Home</a></li>
              <li><a href="#how-it-works" className="font-body text-white/80 hover:text-white transition-colors font-medium">How It Works</a></li>
              <li><a href="#submit" className="font-body text-white/80 hover:text-white transition-colors font-medium">Submit My Car</a></li>
              <li><a href="#faq" className="font-body text-white/80 hover:text-white transition-colors font-medium">FAQ</a></li>
              <li><a href="#contact" className="font-body text-white/80 hover:text-white transition-colors font-medium">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-mono text-sm text-[#EF4444] uppercase tracking-widest font-bold">Service Areas</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              <span className="font-body text-white/80 text-sm font-medium">Sherman, TX</span>
              <span className="font-body text-white/80 text-sm font-medium">Denison, TX</span>
              <span className="font-body text-white/80 text-sm font-medium">McKinney, TX</span>
              <span className="font-body text-white/80 text-sm font-medium">Gainesville, TX</span>
              <span className="font-body text-white/80 text-sm font-medium">Ardmore, OK</span>
              <span className="font-body text-white/80 text-sm font-medium">Durant, OK</span>
              <span className="font-body text-white/80 text-sm font-medium">Ada, OK</span>
              <span className="font-body text-white/80 text-sm font-medium">Madill, OK</span>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#EF4444]/20 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#EF4444]/20 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-white/60 uppercase tracking-widest font-bold">
            © 2025 All Rights Reserved · rubenlopezceo@gmail.com
          </p>
          <p className="font-mono text-xs text-white/60 uppercase tracking-widest font-bold">
            Texoma Cash 4 Cars
          </p>
        </div>
      </div>
    </footer>
  );
}
