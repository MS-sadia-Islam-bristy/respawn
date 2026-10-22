import React from 'react';
import { useCreator } from '../context/CreatorContext';
import { ExternalLink, Target, Radio } from 'lucide-react';

export const RoadTo1K: React.FC = () => {
  const { config } = useCreator();

  if (!config.roadTo1K.enabled) {
    return null;
  }

  const goal = config.roadTo1K.goal;

  const milestones = [
    { target: '250 Subs', label: 'Early Believers Squad' },
    { target: '500 Subs', label: 'Custom Community Games' },
    { target: '750 Subs', label: 'Special Stream Marathon' },
    { target: '1,000 Subs', label: 'Road to 1K Celebration' },
  ];

  return (
    <section
      id="road-to-1k"
      className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-b from-[#17080a] via-[#0f0b0c] to-[#090909] border-b border-[#3b1c23]"
    >
      {/* Background oversized 1K watermark accent */}
      <div
        className="absolute right-4 top-1/2 -translate-y-1/2 font-['Anton'] text-[140px] sm:text-[220px] lg:text-[280px] text-[#F20D2F]/[0.06] select-none pointer-events-none leading-none z-0"
        aria-hidden="true"
      >
        1K
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#ff7386] uppercase mb-2">
              <Target className="w-4 h-4 text-[#F20D2F]" />
              <span>THE COMMUNITY CHALLENGE</span>
            </div>

            <h2 className="font-['Anton'] text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white mb-4">
              ROAD TO <span className="text-[#F20D2F]">1,000.</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              {config.roadTo1K.description} Every follow, subscribe, and stream view brings the channel closer to unlocking partner perks, variety tournaments, and community celebrations.
            </p>
          </div>

          {/* Action Area: Non-editable public subscribe CTA */}
          <div className="flex flex-col items-start lg:items-end gap-3 shrink-0">
            <a
              href={config.links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#F20D2F] hover:bg-[#d90b29] text-white font-black text-sm tracking-wider uppercase px-8 py-4 rounded-md transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-xl shadow-[#F20D2F]/30"
            >
              <span>SUBSCRIBE ON YOUTUBE</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <span className="text-xs text-neutral-500 font-mono">
              Live updates direct from YouTube
            </span>
          </div>
        </div>

        {/* Live Automatic Subscriber Counter Box */}
        <div className="p-6 sm:p-8 rounded-xl bg-[#141414]/90 border border-[#302528] backdrop-blur-sm shadow-2xl">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#252525]">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#ff7386] mb-1">
                <span className="w-2 h-2 rounded-full bg-[#F20D2F] animate-pulse" />
                <span>REAL-TIME SUBSCRIBER COUNTER</span>
              </div>
              <div className="font-['Anton'] text-2xl sm:text-3xl uppercase tracking-wide text-white">
                LIVE YOUTUBE COMMUNITY
              </div>
              <p className="text-xs text-neutral-400 mt-1">
                Target Milestone: <strong className="text-white font-mono">{goal.toLocaleString()} Subscribers</strong>
              </p>
            </div>

            {/* Livecounts.io Counter Embed */}
            <div className="flex items-center justify-center bg-[#0a0a0a] border border-[#2d2528] rounded-xl p-3 shadow-inner">
              <iframe
                src={config.roadTo1K.liveSubscriberEmbedUrl}
                title="Respawn Tahmid YouTube Live Subscriber Counter"
                className="w-[280px] sm:w-[320px] h-[80px] border-0 rounded-lg overflow-hidden bg-transparent"
                scrolling="no"
              />
            </div>
          </div>

          {/* Milestones Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            {milestones.map((ms) => (
              <div key={ms.target} className="space-y-1 p-3 rounded-lg bg-[#181818]/80 border border-[#262626]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#F20D2F]" />
                  <span className="font-mono text-xs font-bold text-white">
                    {ms.target}
                  </span>
                </div>
                <p className="text-[11px] text-neutral-400">
                  {ms.label}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
