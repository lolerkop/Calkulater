import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';

export const gravitationalForceCopyUk: CalculatorCopy = {
  ...{
  "name": "Калькулятор гравітаційної сили",
  "slug": "gravitatsiyna-syla",
  "shortDescription": "Сила тяжіння між двома тілами за законом всесвітнього тяжіння.",
  "seoTitle": "Калькулятор гравітаційної сили між двома тілами",
  "seoDescription": "Розрахунок сили всесвітнього тяжіння між двома масами на заданій відстані разом із прискоренням першого тіла.",
  "h1": "Калькулятор гравітаційної сили",
  "keywords": [
    "гравітаційна сила",
    "закон всесвітнього тяжіння",
    "стала G",
    "притягання тіл"
  ]
},
  ...contract.uk,
};
