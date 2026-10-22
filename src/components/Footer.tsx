import React from 'react';
import { useCreator } from '../context/CreatorContext';
import { ChevronUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { config } = useCreator();
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070707] border-t border-[#1f1f1f] py-12">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-[#1b1b1b]">
          {/* Brand Info */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-3 font-['Anton'] text-2xl tracking-wider text-white uppercase"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden border border-[#F20D2F] bg-black shrink-0">
                <img
                  src={config.brand.avatarUrl}
                  alt="Respawn Tahmid"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span>RESPAWN <span className="text-[#F20D2F]">TAHMID</span></span>
            </a>
            <p className="text-xs font-mono text-neutral-400 mt-2 tracking-wide">
              {config.brand.tagline}
            </p>
          </div>

          {/* Quick Links & Back to Top */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-bold tracking-wider text-neutral-400">
            <a href="#home" className="hover:text-white transition-colors">HOME</a>
            <a href="#watch" className="hover:text-white transition-colors">WATCH</a>
            <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
            <a href="#socials" className="hover:text-white transition-colors">SOCIALS</a>
            <a href="#road-to-1k" className="hover:text-white transition-colors">ROAD TO 1K</a>
            
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-white hover:text-[#ff7386] transition-colors ml-auto sm:ml-4 py-1"
            >
              <span>BACK TO TOP</span>
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Smallprint */}
        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <p>
            © {currentYear} Respawn Tahmid. Built for the community.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>VARIETY GAMING · LIVESTREAMS</span>
            <span>·</span>
            <span>TWITCH · KICK · YOUTUBE</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
