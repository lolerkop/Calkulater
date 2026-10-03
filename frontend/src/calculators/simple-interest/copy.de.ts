import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const simpleInterestCopyDe: CalculatorCopy = {
  name: "Rechner für einfache Zinsen",
  slug: "einfache-zinsen-rechner",
  shortDescription: "Zinsen allein auf den Anfangsbetrag, in beide Richtungen.",
  seoTitle: "Einfache Zinsen berechnen — Zinsen und nötiger Satz",
  seoDescription: "Berechne einfache Zinsen auf den Anfangsbetrag, den Endbetrag und den Zinssatz, der einen bestimmten Zinsertrag ergibt.",
  h1: "Rechner für einfache Zinsen",
  keywords: ["einfache Zinsen berechnen","Zinsen ohne Zinseszins","Zinssatz berechnen","lineare Verzinsung"],
  ...contractContent.de,
};
