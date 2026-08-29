// Скорость, расстояние и время: три режима на одну связь.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { speedDistanceTimeCopyEn } from './copy.en';
import { speedDistanceTimeCopyUk } from './copy.uk';
import { speedDistanceTimeCopyDe } from './copy.de';
import { speedDistanceTimeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "speed-distance-time",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: speedDistanceTimeCopyEn, uk: speedDistanceTimeCopyUk, de: speedDistanceTimeCopyDe },
  referenceCases: speedDistanceTimeReferenceCases,
  publishedExample: { inputs: { mode: 'speed', distance: 420, time: 5 }, expected: ["84,00 км/ч"] },
  presentation: {
    id: "speed-distance-time",
    name: "Калькулятор скорости, расстояния и времени",
    slug: "speed-distance-time",
    fullPath: "/automotive/speed-distance-time/",
    category: "automotive",
    icon: "car",
    popularity: 36,
    isNew: false,
    shortDescription: "Найти скорость, расстояние или время по двум другим.",
    longDescription:
      "Решает треугольник в нужную сторону и рядом показывает время в пути, разбитое на часы и минуты. Скорость средняя: остановки и разгон не моделируются, поэтому результат отвечает, сколько занимает ровная поездка, а не что показывает спидометр в конкретный момент.",
    seoTitle: "Калькулятор скорости, расстояния и времени — найти любую",
    seoDescription:
      "Рассчитайте скорость, расстояние или время в пути по двум известным величинам с разбивкой времени на часы и минуты.",
    h1: "Калькулятор скорости, расстояния и времени",
    keywords: ["скорость расстояние время", "время в пути", "средняя скорость"],
    fields: [
      {
        name: 'mode', label: 'Что находим', type: 'select', defaultValue: 'speed',
        options: [
          { value: 'speed', label: 'скорость' },
          { value: 'distance', label: 'расстояние' },
          { value: 'time', label: 'время' },
        ],
      },
      { name: 'distance', label: 'Расстояние, км', type: 'number', defaultValue: 420, min: 0, step: 10 },
      { name: 'time', label: 'Время, часов', type: 'number', defaultValue: 5, min: 0, step: 0.5 },
      { name: 'speed', label: 'Скорость, км/ч', type: 'number', defaultValue: 84, min: 0, step: 5 },
    ],
    resultLabels: { result: "Результат", travel: "Время в пути", speed: "Скорость", distance: "Расстояние" },
    howToUse: ["Выберите величину, которую нужно найти.", "Введите две известные.", "Прочитайте результат и время в пути."],
    howItWorks: "Скорость = расстояние ÷ время, расстояние = скорость × время, время = расстояние ÷ скорость.",
    example: "420 км, пройденные за 5 часов, дают среднюю скорость 84 км/ч.",
    faq: [
      { q: "Скорость средняя или мгновенная?", a: "Средняя. Она отвечает, насколько быстро поездка прошла в целом, включая всё, что делал трафик по пути." },
      { q: "Включать ли остановки во время?", a: "Это ваш выбор, и он меняет смысл. С остановками получится средняя за всю поездку, без них — средняя в движении." },
      { q: "Можно ли считать в милях?", a: "Напрямую нет, расчёт ведётся в километрах. Переведите значения конвертером, если исходные данные в милях." },
      { q: "Почему нулевая скорость не годится для расчёта времени?", a: "Деление на неё не имеет значения: стоя на месте, расстояние не преодолевается никогда, и ответа на вопрос не существует." },
    ],
    relatedCalculatorIds: ["trip-cost", "fuel-consumption", "convert-speed"],
  },
};
