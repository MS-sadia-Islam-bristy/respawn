export interface SocialLink {
  id: string;
  name: string;
  url: string;
  action: string;
  handle: string;
  description: string;
  badgeLetter: string;
  tag: string;
  color: string;
}

export interface StreamingPlatform {
  id: string;
  name: string;
  url: string;
  buttonLabel: string;
  badge: string;
  tagline: string;
  iconText: string;
  features: string[];
}

export interface CreatorConfig {
  brand: {
    displayName: string;
    handle: string;
    tagline: string;
    supportingLine: string;
    description: string;
    varietyNote: string;
    featuredGames: string[];
    avatarUrl: string;
    bannerUrl: string;
    personality: string[];
  };
  links: {
    youtube: string;
    twitch: string;
    kick: string;
    discord: string;
    instagram: string;
    tiktok: string;
    facebook: string;
  };
  roadTo1K: {
    enabled: boolean;
    goal: number;
    title: string;
    description: string;
    liveSubscriberEmbedUrl: string;
  };
  schedule: {
    timezone: string;
    primarySlot: string;
    days: string[];
    note: string;
  };
}
