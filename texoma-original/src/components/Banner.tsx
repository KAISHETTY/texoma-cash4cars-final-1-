import { useState } from 'react';
import { X } from 'lucide-react';

export default function Banner() {
  const [isVisible, setIsVisible] = useState(true);
  const SHOW_BANNER = true;

  if (!SHOW_BANNER || !isVisible) return null;

  return (
    <div className="sticky top-0 z-50 bg-[#EF4444] text-white px-4 py-2 flex justify-between items-center font-body font-medium text-sm md:text-base shadow-md">
      <div className="flex-1 text-center">
        Spring Cleanout — We're Buying Extra Vehicles This Month!
      </div>
      <button 
        onClick={() => setIsVisible(false)}
        className="p-1 hover:bg-black/10 rounded-full transition-colors"
        aria-label="Close banner"
      >
        <X size={18} />
      </button>
    </div>
  );
}
