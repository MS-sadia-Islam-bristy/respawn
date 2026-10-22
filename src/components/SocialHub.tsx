import React, { useState } from 'react';
import { useCreator } from '../context/CreatorContext';
import { ExternalLink, Copy, Check } from 'lucide-react';

export const SocialHub: React.FC = () => {
  const { config, showToast } = useCreator();
  const [copiedHandle, setCopiedHandle] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(config.brand.handle);
    setCopiedHandle(true);
    showToast(`Copied ${config.brand.handle} to clipboard!`);
    setTimeout(() => setCopiedHandle(false), 2000);
  };

  const socials = [
    {
      id: 'discord',
      name: 'Discord',
      handle: 'Respawn Tahmid Server',
      action: 'JOIN THE DISCORD',
      url: config.links.discord,
      desc: 'Official gaming lounge, voice rooms & match lobbies.',
      tag: 'Community',
      color: '#5865F2',
      badgeLetter: 'DC',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      handle: '@respawntahmid',
      action: 'FOLLOW ON INSTAGRAM',
      url: config.links.instagram,
      desc: 'Stories, personal updates, setup shots & reels.',
      tag: 'Lifestyle',
      color: '#E4405F',
      badgeLetter: 'IG',
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      handle: '@respawn_tahmid',
      action: 'FOLLOW ON TIKTOK',
      url: config.links.tiktok,
      desc: 'Short-form clutch clips, funny stream moments & edits.',
      tag: 'Shorts & Clips',
      color: '#00F2FE',
      badgeLetter: 'TT',
    },
    {
      id: 'facebook',
      name: 'Facebook',
      handle: 'Respawn Tahmid',
      action: 'FOLLOW ON FACEBOOK',
      url: config.links.facebook,
      desc: 'Live announcements, community posts & video uploads.',
      tag: 'Updates',
      color: '#1877F2',
      badgeLetter: 'FB',
    },
    {
      id: 'twitch',
      name: 'Twitch',
      handle: 'respawntahmid',
      action: 'FOLLOW ON TWITCH',
      url: config.links.twitch,
      desc: 'Daily competitive VALORANT streaming with live chat.',
      tag: 'Live Stream',
      color: '#9146FF',
      badgeLetter: 'TW',
    },
    {
      id: 'kick',
      name: 'Kick',
      handle: 'respawntahmid',
      action: 'FOLLOW ON KICK',
      url: config.links.kick,
      desc: 'Clean 1080p60 gameplay broadcasts & community interaction.',
      tag: 'Live Stream',
      color: '#53FC18',
      badgeLetter: 'KI',
    },
  ];

  return (
    <section id="socials" className="py-20 md:py-28 bg-[#090909] border-b border-[#222222]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Header with Quick Handle Copy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold tracking-[0.2em] text-[#ff7386] uppercase mb-2">
              STAY IN THE LOOP
            </div>
            <h2 className="font-['Anton'] text-4xl sm:text-5xl uppercase tracking-tight text-white">
              FOLLOW THE RESPAWN
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-neutral-400">Search tag:</span>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-[#161616] hover:bg-[#202020] border border-[#303030] text-neutral-200 text-xs font-mono font-semibold transition-colors group"
              title="Copy handle to clipboard"
            >
              <span>{config.brand.handle}</span>
              {copiedHandle ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
              )}
            </button>
          </div>
        </div>

        {/* 6 Social Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between p-6 rounded-xl bg-[#131313] hover:bg-[#181214] border border-[#262626] hover:border-[#812637] transition-all duration-200 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center font-['Anton'] text-sm font-bold text-white shadow-sm"
                    style={{ backgroundColor: `${item.color}22`, color: item.color, border: `1px solid ${item.color}44` }}
                  >
                    {item.badgeLetter}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 px-2 py-0.5 rounded bg-[#1c1c1c] border border-[#2b2b2b]">
                    {item.tag}
                  </span>
                </div>

                <div className="font-['Anton'] text-xl uppercase tracking-wide text-white group-hover:text-[#ff6a7e] transition-colors mb-1">
                  {item.name}
                </div>

                <div className="text-xs font-mono text-[#ff8b9c] mb-3">
                  {item.handle}
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Action CTA */}
              <div className="pt-4 border-t border-[#222222] flex items-center justify-between text-xs font-bold tracking-wider text-neutral-300 group-hover:text-white transition-colors">
                <span>{item.action}</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#F20D2F] group-hover:translate-x-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
