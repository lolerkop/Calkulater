import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const windPowerCopyUk: CalculatorCopy = {
 ...{
  "name": "Калькулятор потужності вітрового потоку",
  "slug": "potuzhnist-vitru",
  "shortDescription": "Потужність вітрового потоку та знімана потужність вітроколеса з межею Бетца.",
  "seoTitle": "Калькулятор потужності вітрового потоку та вітрогенератора",
  "seoDescription": "Миттєва механічна потужність ротора, точна межа Бетца 16/27 та енергія за 24 години сталих умов.",
  "h1": "Калькулятор потужності вітрового потоку",
  "keywords": [
    "потужність вітру",
    "вітрогенератор",
    "межа Бетца",
    "оміта площа"
  ]
},
 ...contract.uk,
};
