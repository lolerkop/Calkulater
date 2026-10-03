import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Trockenbaurechner",
  "slug": "trockenbau-rechner",
  "shortDescription": "Platten, Profile und Schrauben für eine Wand oder Decke aus Gipskarton.",
  "seoTitle": "Trockenbau berechnen: Platten, Profile und Schrauben",
  "seoDescription": "Ermittle, wie viele Gipskartonplatten, Meter Profil und Schrauben eine Wand oder Decke braucht, samt Lagen und Zuschlag.",
  "h1": "Trockenbaurechner",
  "keywords": [
    "Trockenbau berechnen",
    "Gipskartonplatten Menge",
    "Profile berechnen",
    "Rigips berechnen"
  ]
};

export const drywallCopyDe: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.de,
};
