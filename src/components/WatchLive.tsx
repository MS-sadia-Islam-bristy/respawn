import React from 'react';
import { useCreator } from '../context/CreatorContext';
import { ExternalLink, Clock, CheckCircle2 } from 'lucide-react';

export const WatchLive: React.FC = () => {
  const { config } = useCreator();

  const platforms = [
    {
      id: 'twitch',
      name: 'Twitch',
      url: config.links.twitch,
      buttonLabel: 'WATCH ON TWITCH',
      badge: 'Interactive Chat & Drops',
      tagline: 'Primary livestream destination for variety gaming, ranked matches, and daily sessions.',
      iconText: 'TW',
      features: ['Channel Points & Emotes', 'Live Chat Community', 'Daily Evening Broadcasts'],
    },
    {
      id: 'kick',
      name: 'Kick',
      url: config.links.kick,
      buttonLabel: 'WATCH ON KICK',
      badge: 'High Bitrate Stream',
      tagline: 'Fast-growing livestream home base with 1080p60 gameplay and unfiltered community banter.',
      iconText: 'KI',
      features: ['Clean Full HD Stream', 'Direct Streamer Interaction', 'Squad & Custom Games'],
    },
    {
      id: 'youtube',
      name: 'YouTube',
      url: config.links.youtube,
      buttonLabel: 'SUBSCRIBE ON YOUTUBE',
      badge: 'VODs, Shorts & Live',
      tagline: 'Full stream replays, game highlights, compilations, and dedicated YouTube Live sessions.',
      iconText: 'YT',
      features: ['Highlight Reels & Clips', 'Community Posts & Polls', 'Road to 1K Subscriber Hub'],
    },
  ];

  return (
    <section id="watch" className="py-20 md:py-28 bg-[#0d0d0d] border-b border-[#222222]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold tracking-[0.2em] text-[#ff7386] uppercase mb-2">
              FIND YOUR PLATFORM
            </div>
            <h2 className="font-['Anton'] text-4xl sm:text-5xl uppercase tracking-tight text-white">
              CATCH THE NEXT DROP
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 max-w-md">
            Follow on your preferred streaming platform so you never miss a live session. Multi-platform broadcasting across Twitch, Kick, and YouTube.
          </p>
        </div>

        {/* 3 Main Streaming Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {platforms.map((platform) => {
            return (
              <div
                key={platform.id}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-gradient-to-b from-[#161616] to-[#111111] border border-[#292929] hover:border-[#F20D2F]/60 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                {/* Top Row: Icon + Badge */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-lg bg-[#1f1f1f] flex items-center justify-center font-['Anton'] text-lg font-bold text-white border border-[#333333] group-hover:border-[#F20D2F]/40 transition-colors">
                      {platform.iconText}
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 px-2 py-0.5 rounded bg-[#1a1a1a] border border-[#2d2d2d]">
                      {platform.badge}
                    </span>
                  </div>

                  <h3 className="font-['Anton'] text-2xl uppercase tracking-wide text-white mb-2 group-hover:text-[#F20D2F] transition-colors">
                    {platform.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                    {platform.tagline}
                  </p>

                  {/* Platform feature checklist */}
                  <div className="space-y-2 mb-8">
                    {platform.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F20D2F] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Link */}
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md bg-[#1f1f1f] group-hover:bg-[#F20D2F] text-white font-bold text-xs tracking-wider uppercase transition-colors"
                >
                  <span>{platform.buttonLabel}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Schedule & Stream Details Banner */}
        <div className="rounded-xl border border-[#2d2d2d] bg-[#141414] p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#F20D2F]/10 border border-[#F20D2F]/30 flex items-center justify-center text-[#F20D2F] shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#ff7386]">
                <span>STREAM SCHEDULE</span>
                <span>·</span>
                <span>{config.schedule.timezone}</span>
              </div>
              <div className="font-['Anton'] text-2xl sm:text-3xl uppercase text-white mt-0.5">
                {config.schedule.primarySlot}
              </div>
              <p className="text-xs text-neutral-400 mt-1">
                {config.schedule.note}
              </p>
            </div>
          </div>

          {/* Quick Schedule Tags */}
          <div className="flex flex-wrap items-center gap-2">
            {config.schedule.days.map((day) => (
              <span
                key={day}
                className="text-xs font-semibold px-3 py-1.5 rounded-md bg-[#1f1f1f] text-neutral-300 border border-[#303030]"
              >
                {day}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
