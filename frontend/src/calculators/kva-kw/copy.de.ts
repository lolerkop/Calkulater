import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const kvaKwCopyDe: CalculatorCopy = {
  ...{
  "name": "Rechner kVA in kW",
  "slug": "kva-in-kw",
  "shortDescription": "Scheinleistung in Wirkleistung über den Leistungsfaktor.",
  "seoTitle": "kVA in kW umrechnen — über den Leistungsfaktor",
  "seoDescription": "Rechne kVA in kW um und zurück über den Leistungsfaktor, mit dem Blindanteil: was ein Generator oder eine USV tatsächlich liefert.",
  "h1": "Rechner kVA in kW",
  "keywords": [
    "kVA in kW",
    "Leistungsfaktor berechnen",
    "kW in kVA",
    "Generator Nennleistung"
  ]
},
  ...contractContent.de,
};
