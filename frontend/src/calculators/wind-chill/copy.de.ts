import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const windChillCopyDe: CalculatorCopy = {
 ...{
  "name": "Rechner für den Windchill",
  "slug": "windchill-rechner",
  "shortDescription": "Wie viel kälter sich Frost im Wind anfühlt — nach der Formel der Wetterdienste.",
  "seoTitle": "Windchill berechnen — wie kalt es wirklich wirkt",
  "seoDescription": "Berechne mit der Formel des kanadischen und amerikanischen Wetterdienstes, wie viel kälter es sich im Wind anfühlt, mit gefühlter Temperatur und Abstand zum Thermometer.",
  "h1": "Rechner für den Windchill",
  "keywords": [
    "Windchill berechnen",
    "gefühlte Kälte",
    "Wind und Kälte",
    "gefuehlte Temperatur Wind"
  ]
},
 ...contract.de,
};
