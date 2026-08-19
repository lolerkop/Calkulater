// Категория «Физика».
//
// Всё, что о ней знает платформа, лежит здесь и в соседнем localization.ts.
// Общие файлы её не перечисляют: манифест собирается генератором.

import type { CategoryDefinition } from '../types';
import { copy, faq } from './localization';

export const definition: CategoryDefinition = {
  id: "physics",
  order: 14,
  icon: "atom",
  searchAliases: "физика сила энергия работа мощность масса ускорение импульс давление плотность ньютон джоуль ватт кинетическая потенциальная механика си",
  copy,
  faq,
  guidance: {
    useCases: [
      "Когда в задаче известны две величины из трёх и нужно найти третью.",
      "Когда нужно перевести условие задачи в единицы СИ и не потерять множитель.",
      "Когда требуется оценить энергию движущегося тела или поднятого груза.",
      "Когда нужно связать работу и время, чтобы получить мощность.",
    ],
    checklist: [
      "Переведите все величины в единицы СИ до подстановки в формулу.",
      "Проверьте, что масса задана в килограммах, а не в граммах или тоннах.",
      "Убедитесь, что скорость и расстояние относятся к одному и тому же участку движения.",
      "Для потенциальной энергии отсчитывайте высоту от того уровня, который считаете нулевым.",
    ],
    mistakes: [
      "Подставлять граммы вместо килограммов и получать результат в тысячу раз меньше.",
      "Путать массу и вес: вес — это сила, и измеряется он в ньютонах.",
      "Забывать квадрат у скорости в кинетической энергии.",
      "Считать работу по полной силе, когда сила направлена под углом к перемещению.",
    ],
  },
  editorial: {
    ru: "Расчёты идеализированы: трение, сопротивление среды и потери не учитываются, тела считаются точечными. Стандартное ускорение свободного падения принято равным 9,80665 м/с².",
    en: "The calculations are idealised: friction, drag and losses are ignored and bodies are treated as point masses. The standard acceleration of free fall is taken as 9.80665 m/s².",
    es: "The calculations are idealised: friction, drag and losses are ignored and bodies are treated as point masses. The standard acceleration of free fall is taken as 9.80665 m/s².",
    de: "The calculations are idealised: friction, drag and losses are ignored and bodies are treated as point masses. The standard acceleration of free fall is taken as 9.80665 m/s².",
    fr: "The calculations are idealised: friction, drag and losses are ignored and bodies are treated as point masses. The standard acceleration of free fall is taken as 9.80665 m/s².",
    it: "The calculations are idealised: friction, drag and losses are ignored and bodies are treated as point masses. The standard acceleration of free fall is taken as 9.80665 m/s².",
    pt: "The calculations are idealised: friction, drag and losses are ignored and bodies are treated as point masses. The standard acceleration of free fall is taken as 9.80665 m/s².",
    nl: "The calculations are idealised: friction, drag and losses are ignored and bodies are treated as point masses. The standard acceleration of free fall is taken as 9.80665 m/s².",
    pl: "The calculations are idealised: friction, drag and losses are ignored and bodies are treated as point masses. The standard acceleration of free fall is taken as 9.80665 m/s².",
    cs: "The calculations are idealised: friction, drag and losses are ignored and bodies are treated as point masses. The standard acceleration of free fall is taken as 9.80665 m/s².",
    sk: "The calculations are idealised: friction, drag and losses are ignored and bodies are treated as point masses. The standard acceleration of free fall is taken as 9.80665 m/s².",
    hu: "The calculations are idealised: friction, drag and losses are ignored and bodies are treated as point masses. The standard acceleration of free fall is taken as 9.80665 m/s².",
    ro: "The calculations are idealised: friction, drag and losses are ignored and bodies are treated as point masses. The standard acceleration of free fall is taken as 9.80665 m/s².",
    tr: "The calculations are idealised: friction, drag and losses are ignored and bodies are treated as point masses. The standard acceleration of free fall is taken as 9.80665 m/s².",
    uk: "Розрахунки ідеалізовані: тертя, опір середовища та втрати не враховуються, тіла вважаються точковими. Стандартне прискорення вільного падіння взято рівним 9,80665 м/с².",
    id: "The calculations are idealised: friction, drag and losses are ignored and bodies are treated as point masses. The standard acceleration of free fall is taken as 9.80665 m/s².",
    vi: "The calculations are idealised: friction, drag and losses are ignored and bodies are treated as point masses. The standard acceleration of free fall is taken as 9.80665 m/s².",
  },
};
