import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const hydrostaticPressureCopyDe: CalculatorCopy = {
  ...{
  "name": "Rechner für den hydrostatischen Druck",
  "slug": "hydrostatischer-druck",
  "shortDescription": "Druck einer Flüssigkeitssäule aus Dichte und Tiefe.",
  "seoTitle": "Hydrostatischen Druck berechnen — p = ρgh",
  "seoDescription": "Berechne den hydrostatischen Druck einer Flüssigkeitssäule aus Dichte und Tiefe, mit oder ohne Luftdruck.",
  "h1": "Rechner für den hydrostatischen Druck",
  "keywords": [
    "hydrostatischer Druck",
    "Wassersäule Druck",
    "Druck in der Tiefe",
    "Schweredruck"
  ]
},
  ...contract.de,
};
