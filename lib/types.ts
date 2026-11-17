export type Region = "京北" | "京西" | "京郊" | "环京";
export type TravelStyle = "山水" | "长城" | "古镇" | "亲子" | "轻徒步";

export interface Destination {
  slug: string;
  name: string;
  englishName: string;
  region: Region;
  district: string;
  styles: TravelStyle[];
  tagline: string;
  summary: string;
  description: string[];
  distance: string;
  driveTime: string;
  suggestedTime: string;
  bestSeason: string;
  difficulty: "轻松" | "适中" | "进阶";
  highlights: string[];
  tips: string[];
  image: string;
  imageAlt: string;
  imageCredit: string;
  imageSource: string;
  featured?: boolean;
}

export interface Trip {
  slug: string;
  title: string;
  subtitle: string;
  days: string;
  style: TravelStyle;
  audience: string;
  budget: string;
  destinationSlugs: string[];
  image: string;
  imageAlt: string;
  highlights: string[];
  itinerary: Array<{
    time: string;
    title: string;
    description: string;
  }>;
  note: string;
}

export interface Guide {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  image: string;
  imageAlt: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
  }>;
}
