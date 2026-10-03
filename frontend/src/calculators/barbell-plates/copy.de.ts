import type { CalculatorCopy } from '../../lib/platform/types';

export const barbellPlatesCopyDe: CalculatorCopy = {
  "name": "Rechner für die Hantelbeladung",
  "slug": "hantelscheiben-rechner",
  "shortDescription": "Welche Scheiben je Seite aufzulegen sind, um ein Zielgewicht zu erreichen.",
  "seoTitle": "Hantelscheiben berechnen: was je Seite aufzulegen ist",
  "seoDescription": "Ermittle, welche Scheiben du je Seite auf die Stange legst, um dein Zielgewicht zu erreichen — mit den Scheiben, die du tatsächlich hast.",
  "h1": "Rechner für die Hantelbeladung",
  "keywords": [
    "Hantelscheiben berechnen",
    "welche Scheiben auflegen",
    "Langhantel beladen",
    "Scheibenrechner"
  ],
  "longDescription": "Symmetrische Scheiben auswählen: zunächst die größte erreichbare Last bis zum Ziel, dann die kleinste Scheibenzahl dafür. Jeder Nennwert ist unbegrenzt als Paar verfügbar; reale Stückzahlen werden nicht erfasst. Passende Paare und Platz auf der Stange prüfen.",
  "howToUse": [
    "Gesamtziel mit Stange und Stangenmasse einschließlich berücksichtigter Verschlüsse eingeben.",
    "Positive Nennwerte mit Leerzeichen oder Semikolon trennen; 2,5 ist ein Nennwert.",
    "Tatsächliche Last und gesamten Fehlbetrag vergleichen.",
    "Paare prüfen; Eingaben bis 1000 kg mit drei Nachkommastellen sind unterstützt."
  ],
  "howItWorks": "Je Seite: (Ziel−Stange)/2. Dynamische Programmierung in ganzen Gramm sucht erreichbare Summen, die nächste unterhalb des Ziels und die geringste Scheibenzahl dafür. Produktgrenzen: 32 Nennwerte, Ziel/Stange 0–1000 kg, Scheiben 0,001–1000 kg mit 0,001 kg Präzision, keine Sportvorschrift.",
  "example": "100 kg mit 20-kg-Stange → 40 kg je Seite: 25+15. Ziel 32 kg, Stange 20 kg, Scheiben 4 und 3 kg → 6 kg je Seite: 3+3 ist exakt; ein gieriger Start mit 4 wäre falsch.",
  "faq": [
    {
      "q": "Warum werden Scheiben absteigend angezeigt?",
      "a": "Das ist die Anzeigeordnung. Eine vollständige Suche bestimmt die geringste Zahl, nicht stets die größte Scheibe zuerst."
    },
    {
      "q": "Was passiert bei unerreichbarer Zielmasse?",
      "a": "Die größte erreichbare Last unterhalb des Ziels und der gesamte Fehlbetrag werden angezeigt, ohne Aufrunden über das Ziel."
    },
    {
      "q": "Sind die Scheibeneinträge je Seite oder insgesamt?",
      "a": "Jeden Nennwert einmal eintragen. Die Modellmenge ist unbegrenzt; ausreichend passende Paare separat prüfen."
    },
    {
      "q": "Wie berücksichtige ich eine andere Stange?",
      "a": "Ihre tatsächliche Masse eingeben. IWF-Männerstangen wiegen 20 kg, Frauenstangen 15 kg; nicht jede Studiostange folgt dieser Vorgabe."
    },
    {
      "q": "Wie berücksichtige ich Verschlüsse?",
      "a": "Beide zusammen zur Stange addieren. Zwei IWF-Verschlüsse mit je 2,5 kg ergeben 5 kg; andere können abweichen."
    }
  ],
  "disclaimer": "Nennwertsuche mit unbegrenzten Paaren, ohne Prüfung von Bestand, Stangenplatz oder sicherer Trainingslast."
};
