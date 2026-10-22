import React, { useState } from 'react';
import { useCreator } from '../context/CreatorContext';
import { Menu, X, ExternalLink } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { config } = useCreator();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'WATCH LIVE', href: '#watch' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SOCIALS', href: '#socials' },
    { label: 'ROAD TO 1K', href: '#road-to-1k' },
  ];

  return (
    <>
      {/* Top red brand bar accent */}
      <div className="h-[3px] bg-gradient-to-r from-[#5c0612] via-[#F20D2F] to-[#5c0612] w-full" />

      <header className="sticky top-0 z-40 bg-[#090909]/90 backdrop-blur-md border-b border-[#252525]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-[74px] flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark with Circular Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group shrink-0 focus-visible:outline-2 focus-visible:outline-[#F20D2F]"
            aria-label="Respawn Tahmid Home"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#F20D2F]/50 group-hover:border-[#F20D2F] transition-colors shrink-0 bg-[#151515]">
              <img
                src={config.brand.avatarUrl}
                alt="Respawn Tahmid Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-['Anton'] text-2xl tracking-wider text-white uppercase group-hover:text-gray-100 transition-colors whitespace-nowrap">
              RESPAWN <span className="text-[#F20D2F]">TAHMID</span>
            </span>
          </a>

          {/* Zone 2: Navigation Links (single-line, clean text with hover line) */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-bold tracking-widest text-neutral-300 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#F20D2F] after:absolute after:bottom-0 after:left-0 after:transition-all whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Subscribe Action (Clean public button, no owner edit buttons) */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={config.links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F20D2F] hover:bg-[#d90b29] text-white text-xs font-black tracking-wider uppercase px-4 sm:px-5 py-2.5 rounded-md transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-[#F20D2F]/20 whitespace-nowrap"
            >
              <span>SUBSCRIBE</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-300 hover:text-white border border-[#303030] rounded-md"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0e0e0e] border-b border-[#2a2a2a] px-5 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 text-sm font-bold tracking-wider text-neutral-300 hover:text-[#F20D2F] border-b border-[#1c1c1c] last:border-0"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <a
                href={config.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-[#F20D2F] text-white py-2.5 rounded text-xs font-extrabold tracking-wider uppercase text-center"
              >
                <span>SUBSCRIBE ON YOUTUBE</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
