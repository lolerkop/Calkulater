import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const paybackPeriodCopyDe: CalculatorCopy = {
  name: "Rechner für die Amortisationsdauer",
  slug: "amortisationsdauer-rechner",
  shortDescription: "Wie lange eine Investition braucht, um sich zu bezahlen.",
  seoTitle: "Amortisationsdauer berechnen — einfach und abgezinst",
  seoDescription: "Berechne die Amortisationsdauer einer Investition aus dem jährlichen Zahlungsstrom, mit Abzinsung zu einem gegebenen Satz.",
  h1: "Rechner für die Amortisationsdauer",
  keywords: ["Amortisationsdauer berechnen","Amortisationsrechnung","abgezinste Amortisation","Payback"],
  ...contractContent.de,
};
