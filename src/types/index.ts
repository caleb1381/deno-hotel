import { CSSProperties } from "react";

export interface StyleObject {
  marginBottom?: string | number | boolean;
  paddingInline?: string;
  paddingBlock?: string | number;
  transition?: string;
  padding?: string;
  display?: string;
  gap?: string;
  justifyContent?: string;
  alignItems?: string;
  background?: string;
  color?: string;
  fontSize?: string;
  border?: string;
  boxSizing?: string;
  opacity?: string | number;
  borderTop?: string | number;
}

export interface Styles {
  container: CSSProperties;
  box: CSSProperties;
  question: CSSProperties; // "question" seems to have a typo in the original code
  answer: CSSProperties;
}

export type Questions = {
  question: {
    q: string;
    a: string;
  };
};

interface GalleryImageTag {
  value: string;
  title: string;
}

export interface Image {
  src: string;
  original: string;
  width: number;
  height: number;
  tags?: GalleryImageTag[]; // Optional since some images might not have tags
  caption: string;
  customOverlay: JSX.Element; // TypeScript type for React elements
}

export interface RoomImage {
  original: string;
  thumbnail: string;
  originalClass?: string;
}

type RoomFeature = {
  text: string;
  icon: React.ComponentType; // Using React.ComponentType to represent the Lucide icon component
};

export interface Room {
  id: string;
  name: string;
  desc: string;
  price: number;
  guests: number;
  rooms: number;
  sittingRoom?: number;
  toilets?: number;
  imgUrl: RoomImage[];
  features: Map<string, string>;
  additionals: RoomFeature[];
}
