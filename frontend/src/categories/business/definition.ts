// Категория «Бизнес и маркетинг».
//
// Всё, что о ней знает платформа, лежит здесь и в соседнем localization.ts.
// Общие файлы её не перечисляют: манифест собирается генератором.

import type { CategoryDefinition } from '../types';
import { copy, faq } from './localization';

export const definition: CategoryDefinition = {
  id: "business",
  order: 6,
  icon: "trending-up",
  searchAliases: "бизнес маркетинг метрика маржа margin cac roi roas выручка заказ клиент возврат реклама",
  copy,
  faq,
  guidance: {
    useCases: [
      "Когда нужно понять, зарабатывает направление или тратит.",
      "Для сравнения периодов по одному и тому же правилу расчёта.",
      "Перед решением о рекламном бюджете или цене.",
    ],
    checklist: [
      "When you need to tell whether a line of work earns or spends.",
      "To compare periods under one and the same rule.",
      "Before deciding on an advertising budget or a price.",
    ],
    mistakes: [
      "Коли треба зрозуміти, заробляє напрям чи витрачає.",
      "Для порівняння періодів за одним і тим самим правилом розрахунку.",
      "Перед рішенням про рекламний бюджет або ціну.",
    ],
  },
  editorial: {
    ru: "Показатель считается по введённым суммам и не учитывает налоги, сезонность и структуру затрат, если вы не заложили их в исходные данные.",
    en: "The figure is derived from the amounts you enter and does not account for taxes, seasonality or cost structure unless you include them in the inputs.",
    uk: "Показник рахується за введеними сумами і не враховує податки, сезонність та структуру витрат, якщо ви не заклали їх у вихідні дані.",
  },
};
