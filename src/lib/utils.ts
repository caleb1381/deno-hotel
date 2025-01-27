import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import {
  Wifi,
  HandPlatter,
  Clock10,
  Coffee,
  Anvil,
  UtilityPole,
  ShieldPlus,
  Landmark,
  Utensils,
  Wine,
  Binoculars,
  Cctv,
} from "lucide-react";

const additionals = [
  {
    text: "Complimentary WiFi throughout the property",
    icon: Wifi,
  },
  {
    text: "Daily housekeeping service",
    icon: HandPlatter,
  },
  {
    text: "24 hour front desk assistance",
    icon: Clock10,
  },
  {
    text: "In room coffee and tea making facilities",
    icon: Coffee,
  },
  {
    text: "Iron and ironing board available upon request",
    icon: Anvil,
  },
  {
    text: "24hrs electricity (power grid, power plant, solar)",
    icon: UtilityPole,
  },
  {
    text: "24hrs Armed security ",
    icon: ShieldPlus,
  },
  {
    text: "70 seating capacity Hall with Complimentary projector and public address system with flip chart.",
    icon: Landmark,
  },
  {
    text: "Cosy restaurant",
    icon: Utensils,
  },
  {
    text: "Bush bar",
    icon: Wine,
  },
  {
    text: "Green garden",
    icon: Binoculars,
  },
  {
    text: "Crystal clear CCTV camera with nite mode.",
    icon: Cctv,
  },
];

// [
//   "Complimentary WiFi throughout the property",
//   "Daily housekeeping service",
//   "24 hour front desk assistance",
//   "In room coffee and tea making facilities",
//   "Iron and ironing board available upon request",
//   "24hrs electricity (power grid, power plant, solar)",
//   "24hrs Armed security ",
//   "70 seating capacity Hall with Complimentary projector and public address system with flip chart.",
//   "Cosy restaurant",
//   "Bush bar",
//   "Green Garden",
//   "Crystal clear CCTV camera with nite mode.",
// ],
