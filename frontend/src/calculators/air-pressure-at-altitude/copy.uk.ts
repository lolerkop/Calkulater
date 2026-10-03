import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const airPressureAtAltitudeCopyUk: CalculatorCopy = {
 ...{
  "name": "Калькулятор атмосферного тиску на висоті",
  "slug": "tysk-na-vysoti",
  "shortDescription": "Атмосферний тиск, температура та густина повітря на заданій висоті.",
  "seoTitle": "Калькулятор атмосферного тиску на висоті",
  "seoDescription": "Модель тиску, температури й густини для висот від −430 до 11 000 м із заданим температурним градієнтом.",
  "h1": "Калькулятор атмосферного тиску на висоті",
  "keywords": [
    "атмосферний тиск",
    "тиск на висоті",
    "стандартна атмосфера",
    "густина повітря"
  ]
},
 ...contract.uk,
};
