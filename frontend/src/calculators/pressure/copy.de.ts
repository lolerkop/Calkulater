import type { CalculatorCopy } from '../../lib/platform/types';

export const pressureCopyDe: CalculatorCopy = {
  "name": "Druckrechner",
  "slug": "druck-berechnen",
  "shortDescription": "Druck, Kraft oder Fläche aus p = F ÷ A.",
  "seoTitle": "Druck berechnen — p = F ÷ A",
  "seoDescription": "Berechne mechanischen Druck, Kraft oder Auflagefläche aus p = F ÷ A in Pascal.",
  "h1": "Druckrechner",
  "keywords": [
    "Druck berechnen",
    "Kraft je Fläche",
    "Auflagedruck",
    "Druck Formel"
  ],
  "longDescription": "Bestimmt den mittleren Druck aus der normalen Kraftkomponente und der Kontaktfläche oder löst nach Kraft und Fläche. Die Druckverteilung wird nicht berechnet: An Rändern können örtliche Werte vom Mittel abweichen. Die Atmosphärenzeile rechnet mit 1 atm = 101 325 Pa nur Einheiten um, sie addiert keinen Umgebungsdruck. Ein zulässiger Bodendruck muss vorgegeben werden; Festigkeit und Setzung werden nicht geprüft.",
  "howToUse": [
    "Wähle Druck, Kraft oder Fläche.",
    "Verwende die Normalkraft in N und die Fläche in m²; zerlege eine schräge Kraft vorher.",
    "Für die Flächensuche müssen Kraft und Druck positiv sein; das Nullpaar bestimmt keine Fläche.",
    "Multipliziere cm² mit 0,0001 für m²: 1 cm² = 0,0001 m²."
  ],
  "howItWorks": "p = Fₙ/A ist der mittlere Normaldruck; Fₙ = pA und A = Fₙ/p. Die Fläche ist positiv. Null Normalkraft ergibt null Druck, null Druck bei bekannter Fläche null Kraft. Die Suche einer positiven Fläche verlangt Fₙ > 0 und p > 0. Der Wert in atm ist p/101325.",
  "example": "1000 N auf 2 m² ergeben 500 Pa. Auf 1 cm² beziehungsweise 0,0001 m² ergeben dieselben 1000 N dagegen 10 000 000 Pa = 10 MPa. Bei 2000 N und 100 000 Pa beträgt die Fläche 0,02 m².",
  "faq": [
    {
      "q": "Warum senkt eine breitere Auflage den mittleren Druck?",
      "a": "Bei gleicher Normalkraft halbiert die doppelte Fläche F/A. Örtliche Spitzen und Änderungen der Bodeneigenschaften werden dadurch nicht beschrieben."
    },
    {
      "q": "Ist das Überdruck oder absoluter Druck?",
      "a": "Die Form berechnet Fₙ/A ohne einen Bezugsdruck festzulegen. Zum Umrechnen von Überdruck in absoluten Druck ist der tatsächliche Umgebungsdruck nötig, nicht zwingend 101 325 Pa."
    },
    {
      "q": "Wie nutze ich die Rückrechnung einer Auflagefläche?",
      "a": "Gib Kraft und einen separat begründeten zulässigen mittleren Druck ein. A = F/p liefert die Modellfläche, keinen Fundamentnachweis; ungleichmäßige Lasten, Stabilität und Setzung fehlen."
    },
    {
      "q": "Ist das dieselbe Druckeinheit wie bei Reifen oder Rohren?",
      "a": "Ja: Pa ist N/m². Ein Messgerät kann Absolut-, Über- oder Differenzdruck anzeigen; kläre vor dem Vergleich seinen Bezug."
    },
    {
      "q": "Warum darf die Kraft null sein, die Fläche aber nicht?",
      "a": "Null Kraft auf positiver Fläche ergibt null mittleren Druck. Null Fläche erzeugt einen Nenner von null; F = p = 0 bestimmt keine positive Fläche."
    }
  ],
  "disclaimer": "Nichtnegativer mittlerer Normaldruck; örtliche Spannungen, Fundamentfestigkeit und automatische Bezugsdruckumrechnung werden nicht berechnet."
};
