import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const boilingPointCopyUk: CalculatorCopy = {
 ...{
  "name": "Калькулятор температури кипіння води",
  "slug": "temperatura-kypinnya",
  "shortDescription": "Температура кипіння води на заданій висоті над рівнем моря.",
  "seoTitle": "Калькулятор температури кипіння води на висоті",
  "seoDescription": "Наближена температура кипіння чистої води для висот −430…9000 м за моделлю тиску й сталою теплотою пароутворення.",
  "h1": "Калькулятор температури кипіння води",
  "keywords": [
    "температура кипіння",
    "кипіння на висоті",
    "атмосферний тиск",
    "тиск насиченої пари"
  ]
},
 ...contract.uk,
};
