import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Rechner für Epoxidharz",
  "slug": "epoxidharz-rechner",
  "shortDescription": "Wie viel Harz und Härter ein Guss braucht.",
  "seoTitle": "Epoxidharz berechnen — wie viel für einen Guss",
  "seoDescription": "Berechne, wie viel Epoxidharz und Härter ein Guss aus seinen Maßen und der Schichtdicke braucht.",
  "h1": "Rechner für Epoxidharz",
  "keywords": [
    "Epoxidharz berechnen",
    "Harz und Härter",
    "Mischungsverhältnis Epoxid",
    "Epoxidharz Menge"
  ]
};

export const epoxyVolumeCopyDe: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.de,
};
