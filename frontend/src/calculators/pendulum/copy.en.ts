import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const pendulumCopyEn: CalculatorCopy = {
  ...{
  "name": "Pendulum period calculator",
  "slug": "pendulum-period",
  "shortDescription": "Period of a simple pendulum from its length.",
  "seoTitle": "Pendulum period calculator — from string length",
  "seoDescription": "Calculate the period and frequency of a simple pendulum from its length and the acceleration of gravity.",
  "h1": "Pendulum period calculator",
  "keywords": [
    "pendulum period",
    "simple pendulum",
    "oscillation frequency",
    "seconds pendulum"
  ]
},
  ...contract.en,
};
