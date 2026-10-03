import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const orbitalPeriodCopyEn: CalculatorCopy = {
  ...{
  "name": "Orbital period calculator",
  "slug": "orbital-period",
  "shortDescription": "Orbital period from the central body mass and the orbit radius.",
  "seoTitle": "Orbital period calculator — satellite and geostationary orbit",
  "seoDescription": "Calculate the orbital period and orbital speed of a circular orbit from the central body mass and the orbit radius.",
  "h1": "Orbital period calculator",
  "keywords": [
    "orbital period calculator",
    "orbital speed",
    "geostationary orbit",
    "kepler third law"
  ]
},
  ...contract.en,
};
