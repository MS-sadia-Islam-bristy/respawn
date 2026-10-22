import React from 'react';
import { useCreator } from '../context/CreatorContext';
import { ExternalLink, Gamepad2, Play } from 'lucide-react';

export const Hero: React.FC = () => {
  const { config } = useCreator();

  return (
    <section id="home" className="relative overflow-hidden pt-12 pb-20 md:py-24 border-b border-[#222222]">
      {/* Background Gritty Glow & Mesh */}
      <div className="absolute inset-0 pointer-events-none gaming-grid-bg opacity-30" />
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-[#F20D2F]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#F20D2F]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Typographic Punch & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed clean metadata kicker (Variety Gaming brand rule) */}
            <div className="flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] text-[#ff7386] uppercase mb-4">
              <span className="w-2 h-2 bg-[#F20D2F] rotate-45 shrink-0" aria-hidden="true" />
              <span>VARIETY GAMING CREATOR</span>
              <span className="text-neutral-600" aria-hidden="true">/</span>
              <span>DAILY LIVESTREAMS</span>
              <span className="text-neutral-600" aria-hidden="true">/</span>
              <span>MULTI-PLATFORM</span>
            </div>

            {/* Giant Display Headline */}
            <h1 className="font-['Anton'] text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.92] uppercase text-white mb-6">
              I DIE. I RESPAWN.<br />
              <span className="text-[#F20D2F] drop-shadow-[0_2px_16px_rgba(242,13,47,0.3)]">
                I COME BACK HARDER.
              </span>
            </h1>

            {/* Lead description (Variety gaming focused) */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-xl font-normal leading-relaxed mb-8">
              Welcome to <span className="text-white font-semibold">Respawn Tahmid</span>. Daily variety gaming livestreams, competitive gameplay, live chat, and a community that keeps coming back.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={config.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#F20D2F] hover:bg-[#d90b29] text-white font-black text-xs sm:text-sm tracking-wider uppercase px-7 py-3.5 rounded-md transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-[#F20D2F]/25"
              >
                <span>SUBSCRIBE ON YOUTUBE</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={config.links.twitch}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#171717] hover:bg-[#202020] text-neutral-200 hover:text-white border border-[#3b3b3b] hover:border-[#F20D2F]/60 font-bold text-xs sm:text-sm tracking-wider uppercase px-6 py-3.5 rounded-md transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>FOLLOW ON TWITCH</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Authentic bottom context strip */}
            <div className="mt-8 pt-6 border-t border-[#222222] flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <Gamepad2 className="w-4 h-4 text-[#F20D2F]" />
                <span className="text-neutral-300 font-medium">Focus: Variety Gaming & New Releases</span>
              </div>
              <span className="text-neutral-700 hidden sm:inline">|</span>
              <div>
                <span className="text-neutral-300 font-medium">Broadcasts: Daily Streaming</span>
              </div>
              <span className="text-neutral-700 hidden sm:inline">|</span>
              <div>
                <span className="text-neutral-300 font-medium">Community: Open Discord</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Frame featuring Banner & Avatar Badge (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              
              {/* Outer Gaming Frame Container */}
              <div className="relative rounded-xl overflow-hidden border border-[#3a2026] bg-[#141414] shadow-2xl shadow-black group">
                
                {/* Visual Banner Preview */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0d0d0d]">
                  <img
                    src={config.brand.bannerUrl}
                    alt="Respawn Tahmid Official Gaming Banner"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Cinematic gradient scrims */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-black/20 to-transparent opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F20D2F]/10 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Lower Card Bar with Streamer Identity & Floating Badge */}
                <div className="p-5 sm:p-6 bg-gradient-to-b from-[#181818] to-[#121212] border-t border-[#292929] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {/* Streamer Avatar with red border */}
                    <div className="relative -mt-10 sm:-mt-12 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[#F20D2F] shadow-lg shadow-black bg-black shrink-0">
                      <img
                        src={config.brand.avatarUrl}
                        alt="Respawn Tahmid Streamer Avatar"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <div className="font-['Anton'] text-xl sm:text-2xl text-white tracking-wide uppercase leading-tight">
                        {config.brand.displayName}
                      </div>
                      <div className="text-xs text-[#ff7386] font-semibold tracking-wider">
                        {config.brand.handle}
                      </div>
                    </div>
                  </div>

                  <a
                    href="#watch"
                    className="p-2.5 rounded-full bg-[#242424] hover:bg-[#F20D2F] text-white transition-colors shrink-0"
                    title="View Streaming Channels"
                    aria-label="View Streaming Channels"
                  >
                    <Play className="w-4 h-4 fill-current" />
                  </a>
                </div>

                {/* Subtitle bottom ribbon */}
                <div className="px-5 py-2.5 bg-[#0d0d0d] border-t border-[#1f1f1f] text-[11px] font-mono tracking-wider text-neutral-400 flex items-center justify-between">
                  <span>THE GAME NEVER STOPS</span>
                  <span className="text-[#F20D2F] font-bold">/// NEITHER DO I</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
