// Категория «Математика».
//
// Всё, что о ней знает платформа, лежит здесь и в соседнем localization.ts.
// Общие файлы её не перечисляют: манифест собирается генератором.

import type { CategoryDefinition } from '../types';
import { copy, faq } from './localization';

export const definition: CategoryDefinition = {
  id: "math",
  order: 5,
  icon: "calculator",
  searchAliases: "математика число остаток делитель множитель уравнение корень пропорция логарифм римские",
  copy,
  faq,
  guidance: {
    useCases: [
      "Когда нужен точный ответ, а не приближение: остаток, множители, корни.",
      "Для проверки решения, сделанного вручную.",
      "Когда важно увидеть промежуточные величины — дискриминант, частное, число делителей.",
    ],
    checklist: [
      "When an exact answer is needed rather than an approximation: remainder, factors, roots.",
      "To check a solution worked out by hand.",
      "When the intermediate figures matter — discriminant, quotient, number of divisors.",
    ],
    mistakes: [
      "Коли потрібна точна відповідь, а не наближення: остача, множники, корені.",
      "Для перевірки розв’язання, зробленого вручну.",
      "Коли важливо побачити проміжні величини — дискримінант, частку, кількість дільників.",
    ],
  },
  editorial: {
    ru: "Расчёт выполняется по определениям соответствующих операций. Для очень больших чисел возможна потеря младших разрядов из-за обычной числовой точности браузера.",
    en: "Calculations follow the definitions of the operations involved. Very large numbers may lose their least significant digits to ordinary browser numeric precision.",
    uk: "Розрахунок виконується за визначеннями відповідних операцій. Для дуже великих чисел можлива втрата молодших розрядів через звичайну числову точність браузера.",
  },
};
