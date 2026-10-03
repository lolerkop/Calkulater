import type { CalculatorCopy } from '../../lib/platform/types';

export const geometricProgressionCopyDe: CalculatorCopy = {
  "name": "Rechner für die geometrische Folge",
  "slug": "geometrische-folge",
  "shortDescription": "Das n-te Glied, die Summe der Reihe und die Glieder selbst.",
  "seoTitle": "Geometrische Folge berechnen: n-tes Glied und Summe",
  "seoDescription": "Berechne das n-te Glied und die endliche Summe einer geometrischen Folge sowie die unendliche Summe für |r| < 1. Vorschau von zwanzig Gliedern.",
  "h1": "Rechner für die geometrische Folge",
  "keywords": [
    "geometrische Folge berechnen",
    "n-tes Glied",
    "Summe geometrische Reihe",
    "Quotient der Folge"
  ],
  "longDescription": "Berechnet das n-te Glied und die Summe der ersten n Glieder einer Folge, in der jedes Glied mit r multipliziert wird. Diese Seite akzeptiert endliche a₁, endliche r ungleich null und ganzzahlige n von 1 bis 50. a₁ darf negativ oder null sein; ein negatives r wechselt die Vorzeichen von Gliedern ungleich null. Die Tabelle zeigt zwanzig Glieder. Für |r| < 1 erscheint zusätzlich die unendliche Summe. Binäre Zwischenglieder und die endliche Summe bleiben bis zur abschließenden Rundung exakt.",
  "howItWorks": "aₙ = a₁rⁿ⁻¹. Für r ≠ 1 gilt Sₙ = a₁(1−rⁿ)/(1−r), für r = 1 gilt Sₙ = na₁. Diese Umsetzung addiert exakte binäre Zwischenglieder und vermeidet so das Subtrahieren fast gleicher Potenzen bei r nahe 1. Für |r| < 1 gilt S∞ = a₁/(1−r).",
  "example": "Beginnend bei 2 mit dem Quotienten 3 ist das zehnte Glied 39 366, und die Reihe summiert sich auf 59 048.",
  "howToUse": [
    "Trage das erste Glied ein — es darf negativ sein.",
    "Trage den Quotienten ein: 2 verdoppelt jeden Schritt, 0,5 halbiert ihn.",
    "Trage ein, wie viele Glieder du brauchst, bis zu fünfzig.",
    "Die Tabelle führt die ersten zwanzig Glieder auf."
  ],
  "faq": [
    {
      "q": "Warum wird ein Quotient von null abgewiesen?",
      "a": "Das ist eine Beschränkung dieser Seite. Die rekursive Folge a₁, 0, 0, … bei r = 0 ist mathematisch sinnvoll; dieser Rechner behält jedoch seine Eingaberegel r ungleich null bei."
    },
    {
      "q": "Wann besteht die unendliche Summe?",
      "a": "Für ein erstes Glied ungleich null konvergiert die Reihe bei |r| < 1 mit S∞ = a₁/(1−r). Die Seite zeigt die Zeile nur unter dieser Bedingung. Bei a₁ = 0 besteht die Folge auch für andere r aus Nullen, erhält aber keine zusätzliche Summenzeile."
    },
    {
      "q": "Darf der Quotient negativ sein?",
      "a": "Ja. Bei a₁ ungleich null wechseln die Vorzeichen, und dieselben Summenformeln gelten. Bei a₁ = 0 bleiben alle Glieder null."
    },
    {
      "q": "Warum fünfzig Glieder und nicht mehr?",
      "a": "1 bis 50 ist eine Seitengrenze, keine Grenze der mathematischen Formel. Zudem müssen |aₙ| und |Sₙ| unter 10¹⁵ liegen. Diese Grenzen beschränken Rechenaufwand und Ausgabe."
    },
    {
      "q": "Ist eine Folge dasselbe wie Zinseszins?",
      "a": "Bei einem konstanten Zinssatz je Periode gilt r = 1 + Zinssatz; ohne weitere Zahlungen wächst der Betrag geometrisch. Die Perioden müssen übereinstimmen. Finanzrechner berücksichtigen Einzahlungen, Zinsperioden und Geldrundung gesondert."
    }
  ],
  "disclaimer": "Die Grenze 10¹⁵ gilt für den Betrag des n-ten Glieds und der endlichen Summe, nicht für die zusätzliche unendliche Summe. Alle angezeigten Werte müssen endlich sein, ohne einen Wert ungleich null auf null zu runden. Dezimaleingaben und Anzeige sind gerundet."
};
