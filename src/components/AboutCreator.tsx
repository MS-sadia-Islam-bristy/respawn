import React from 'react';
import { useCreator } from '../context/CreatorContext';
import { Target, Gamepad2, Users, MessageSquare } from 'lucide-react';

export const AboutCreator: React.FC = () => {
  const { config } = useCreator();

  const brandPillars = [
    {
      title: 'DAILY LIVESTREAMS',
      description: 'Consistent daily gaming broadcasts, competitive matches, and engaging chat banter across platforms.',
      icon: Target,
    },
    {
      title: 'VARIETY GAMING',
      description: "VALORANT is one part of the channel, but there's always room for new releases, story games, and multiplayer titles.",
      icon: Gamepad2,
    },
    {
      title: 'COMMUNITY DRIVEN',
      description: 'An open, inclusive hub for gamers, custom matches, Discord voice hangouts, and mutual growth.',
      icon: Users,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#101010] border-b border-[#222222] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Grid: Portrait & Quote Card + Narrative Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Portrait & Quote (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Themed Quote Card */}
            <div className="p-8 sm:p-10 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#121212] border-l-4 border-l-[#F20D2F] border-t border-r border-b border-[#2c2c2c] shadow-xl relative">
              <span className="text-4xl text-[#F20D2F] font-serif leading-none opacity-40 absolute top-4 left-4">“</span>
              <blockquote className="font-['Anton'] text-3xl sm:text-4xl uppercase tracking-wide text-white leading-tight pl-2">
                THE GAME NEVER STOPS.<br />
                <span className="text-[#F20D2F]">NEITHER DO I.</span>
              </blockquote>
              <div className="mt-4 pt-4 border-t border-[#262626] flex items-center justify-between text-xs text-neutral-400 font-mono">
                <span>RESPAWN MINDSET</span>
                <span>// EST. DAILY</span>
              </div>
            </div>

            {/* Streamer Avatar Showcase Tile */}
            <div className="p-6 rounded-xl bg-[#161616] border border-[#2b2b2b] flex items-center gap-5">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#F20D2F] shrink-0 bg-black shadow-lg">
                <img
                  src={config.brand.avatarUrl}
                  alt="Tahmid Official Portrait"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="font-['Anton'] text-xl uppercase tracking-wider text-white">
                  TAHMID
                </h4>
                <p className="text-xs text-[#ff7386] font-mono mb-2">
                  {config.brand.handle}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#222222] text-neutral-300 border border-[#333333]">
                    VARIETY CREATOR
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#222222] text-neutral-300 border border-[#333333]">
                    STREAMER
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Tag Cloud (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="text-xs font-bold tracking-[0.2em] text-[#ff7386] uppercase mb-2">
              THE PLAYER BEHIND THE RESPAWN
            </div>
            
            <h2 className="font-['Anton'] text-4xl sm:text-5xl uppercase tracking-tight text-white mb-6">
              WHAT’S UP, I’M TAHMID.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              <p>
                I’m <strong className="text-white font-semibold">Respawn Tahmid</strong>. I stream gaming every day and play a <strong className="text-white font-semibold">variety of games</strong>.
              </p>
              <p>
                <span className="text-white font-medium">VALORANT</span> is one part of the channel, but there's always room for other games, new releases, and different kinds of gameplay. Whether you're here for the games, the live chat, or the community, welcome in.
              </p>
            </div>

            {/* Tag Row (Variety gaming titles and themes) */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {['VARIETY GAMING', 'VALORANT', 'NEW RELEASES', 'DAILY STREAMS', 'LIVE COMMUNITY', 'ROAD TO 1K'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono font-bold px-3 py-1.5 rounded bg-[#1c1c1c] text-neutral-300 border border-[#333333]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Quick Community Discord Invite Banner */}
            <div className="mt-8 p-4 rounded-lg bg-[#181818] border border-[#2b2b2b] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-[#F20D2F]" />
                <span className="text-xs sm:text-sm text-neutral-300 font-medium">
                  Want to hang out off-stream? Join the official Discord server.
                </span>
              </div>
              <a
                href={config.links.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-wider text-white hover:text-[#ff7386] underline whitespace-nowrap"
              >
                JOIN DISCORD ↗
              </a>
            </div>
          </div>

        </div>

        {/* 3 Pillars Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-[#222222]">
          {brandPillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 rounded-lg bg-[#141414] border border-[#262626] hover:border-[#383838] transition-colors"
              >
                <div className="w-10 h-10 rounded-md bg-[#F20D2F]/10 border border-[#F20D2F]/30 flex items-center justify-center text-[#F20D2F] mb-4">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="font-['Anton'] text-xl uppercase tracking-wide text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
