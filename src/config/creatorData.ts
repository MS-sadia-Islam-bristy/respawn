import { CreatorConfig } from '../types';

export const INITIAL_CREATOR_CONFIG: CreatorConfig = {
  brand: {
    displayName: 'Respawn Tahmid',
    handle: '@RespawnTahmid',
    tagline: 'I die. I respawn. I come back harder.',
    supportingLine: 'The game never stops—and neither do I.',
    description: "A gaming creator and daily livestreamer who plays a variety of games. VALORANT is one part of the channel, alongside current releases, competitive titles, and community gameplay.",
    varietyNote: "Variety Gaming · Daily Streams · Multi-Platform",
    featuredGames: ['VALORANT', 'Competitive FPS', 'Story & Action', 'Community Customs', 'New Releases'],
    avatarUrl: '/assets/aistudio/Respawn_Tahmid__Gaming_Streamer_Avatar_4d1494db.png',
    bannerUrl: '/assets/aistudio/Respawn_Tahmid_Gaming_Banner__1__e1c59e84.png',
    personality: ['authentic', 'competitive', 'confident', 'community-driven', 'energetic', 'slightly rebellious'],
  },
  links: {
    // Official YouTube Channel linked via Tahmid's channel ID UC8V_JaR_Dm42QlAC3x3djBw
    youtube: 'https://www.youtube.com/channel/UC8V_JaR_Dm42QlAC3x3djBw',
    twitch: 'https://www.twitch.tv/respawntahmid',
    kick: 'https://kick.com/respawntahmid',
    discord: 'https://discord.gg/PPDx7RvpaK',
    instagram: 'https://www.instagram.com/respawntahmid/',
    tiktok: 'https://www.tiktok.com/@respawn_tahmid?is_from_webapp=1&sender_device=pc',
    facebook: 'https://www.facebook.com/RespawnTahmid',
  },
  roadTo1K: {
    enabled: true,
    goal: 1000,
    title: 'ROAD TO 1K',
    description: 'The goal is 1,000 subscribers. Be part of the journey, catch daily variety livestreams, and help build the Respawn community across YouTube, Kick, and Twitch.',
    // Live automatic subscriber counter from Livecounts.io
    liveSubscriberEmbedUrl: 'https://livecounts.io/embed/youtube-live-subscriber-counter/UC8V_JaR_Dm42QlAC3x3djBw',
  },
  schedule: {
    timezone: 'BST (GMT+6)',
    primarySlot: '8:00 PM – Late',
    days: ['Daily Streams', 'Variety Gameplay', 'Ranked Sessions & Community Games'],
    note: 'Daily live broadcasts. Follow on Twitch & Kick with notifications turned ON.',
  },
};
