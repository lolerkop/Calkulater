// Категория «Электроника».
//
// Всё, что о ней знает платформа, лежит здесь и в соседнем localization.ts.
// Общие файлы её не перечисляют: манифест собирается генератором.

import type { CategoryDefinition } from '../types';
import { copy, faq } from './localization';

export const definition: CategoryDefinition = {
  id: "electronics",
  order: 8,
  icon: "zap",
  searchAliases: "электроника электрика ток напряжение сопротивление ом резистор светодиод led мощность ватт аккумулятор батарея инвертор схема",
  copy,
  faq,
  guidance: {
    useCases: [
      "Когда собираете схему на макетной плате и нужно подобрать гасящий резистор.",
      "Когда известны две величины из трёх и требуется найти третью по закону Ома.",
      "Когда нужно оценить, сколько проработает устройство от конкретного аккумулятора.",
      "Когда подбираете инвертор и хотите понять ток, который он потянет из батареи.",
    ],
    checklist: [
      "Убедитесь, что напряжение питания указано именно то, что придёт на схему.",
      "Проверьте единицу тока: миллиамперы и амперы различаются в тысячу раз.",
      "Сверьте прямое напряжение светодиода с его даташитом, а не с цветом корпуса.",
      "Для аккумулятора отдельно проверьте напряжение и ёмкость — их часто путают местами.",
    ],
    mistakes: [
      "Брать ток светодиода наугад вместо значения из документации на компонент.",
      "Считать мощность резистора по напряжению питания, а не по падению на нём самом.",
      "Забывать про КПД преобразования и планировать работу по полной ёмкости батареи.",
      "Путать ёмкость в ампер-часах с запасённой энергией в ватт-часах.",
    ],
  },
  editorial: {
    ru: "Расчёты идеализированы: сопротивление считается постоянным, а температурные и частотные эффекты не учитываются. Перед сборкой сверьтесь с документацией на компоненты.",
    en: "The calculations are idealised: resistance is treated as constant and temperature or frequency effects are ignored. Check the component datasheets before building.",
    es: "The calculations are idealised: resistance is treated as constant and temperature or frequency effects are ignored. Check the component datasheets before building.",
    de: "The calculations are idealised: resistance is treated as constant and temperature or frequency effects are ignored. Check the component datasheets before building.",
    fr: "The calculations are idealised: resistance is treated as constant and temperature or frequency effects are ignored. Check the component datasheets before building.",
    it: "The calculations are idealised: resistance is treated as constant and temperature or frequency effects are ignored. Check the component datasheets before building.",
    pt: "The calculations are idealised: resistance is treated as constant and temperature or frequency effects are ignored. Check the component datasheets before building.",
    nl: "The calculations are idealised: resistance is treated as constant and temperature or frequency effects are ignored. Check the component datasheets before building.",
    pl: "The calculations are idealised: resistance is treated as constant and temperature or frequency effects are ignored. Check the component datasheets before building.",
    cs: "The calculations are idealised: resistance is treated as constant and temperature or frequency effects are ignored. Check the component datasheets before building.",
    sk: "The calculations are idealised: resistance is treated as constant and temperature or frequency effects are ignored. Check the component datasheets before building.",
    hu: "The calculations are idealised: resistance is treated as constant and temperature or frequency effects are ignored. Check the component datasheets before building.",
    ro: "The calculations are idealised: resistance is treated as constant and temperature or frequency effects are ignored. Check the component datasheets before building.",
    tr: "The calculations are idealised: resistance is treated as constant and temperature or frequency effects are ignored. Check the component datasheets before building.",
    uk: "Розрахунки ідеалізовані: опір вважається сталим, а температурні та частотні ефекти не враховуються. Перед складанням звіртеся з документацією на компоненти.",
    id: "The calculations are idealised: resistance is treated as constant and temperature or frequency effects are ignored. Check the component datasheets before building.",
    vi: "The calculations are idealised: resistance is treated as constant and temperature or frequency effects are ignored. Check the component datasheets before building.",
  },
};
