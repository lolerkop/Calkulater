import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const lightingCopyEn: CalculatorCopy = {
  ...{
  "name": "Room lighting calculator",
  "slug": "room-lighting",
  "shortDescription": "How many lumens a room needs and how many lamps that comes to.",
  "seoTitle": "Room lighting calculator: lumens and number of lamps",
  "seoDescription": "Work out how many lumens a room needs for a chosen illuminance and how many lamps of a given output that takes.",
  "h1": "Room lighting calculator",
  "keywords": [
    "lighting calculator",
    "lumens per room",
    "how many lamps",
    "illuminance calculator"
  ]
},
  ...contractContent.en,
};
