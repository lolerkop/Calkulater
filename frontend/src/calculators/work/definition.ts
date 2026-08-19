import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { workCopyEn } from './copy.en';
import { workCopyUk } from './copy.uk';
import { workReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "work",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: workCopyEn, uk: workCopyUk },
  referenceCases: workReferenceCases,
  publishedExample: { inputs: { mode: 'W', F: 10, s: 5, angleDeg: 0 }, expected: ["50 Дж"] },
  presentation: {
    id: "work",
    name: "Калькулятор механической работы",
    slug: "work",
    fullPath: "/physics/work/",
    category: "physics",
    icon: "move-right",
    popularity: 43,
    isNew: true,
    shortDescription: "Работа силы на перемещении с учётом угла между ними.",
    longDescription:
      "Считает работу силы: произведение силы на перемещение и на косинус угла между ними. Угол — не формальность: сила, направленная поперёк движения, работы не совершает вовсе, и при 90° результат честно обращается в ноль. Угол вводится в градусах, а не в радианах, и переводится внутри — подстановка градусов прямо в косинус даёт бессмысленное число, и это классическая ошибка.",
    seoTitle: "Калькулятор механической работы — W = F · s · cos θ",
    seoDescription: "Рассчитайте механическую работу силы на перемещении с учётом угла между силой и направлением движения.",
    h1: "Калькулятор механической работы",
    keywords: ["калькулятор работы", "механическая работа", "работа силы", "w = fs cos"],
    fields: [
      {
        name: 'mode', label: 'Что нужно найти', type: 'select', defaultValue: 'W',
        options: [
          { value: 'W', label: 'работу' },
          { value: 's', label: 'перемещение' },
        ],
      },
      { name: 'F', label: 'Сила, Н', type: 'number', defaultValue: 10, min: 0, step: 0.1 },
      { name: 's', label: 'Перемещение, м', type: 'number', defaultValue: 5, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'W' } },
      { name: 'W', label: 'Работа, Дж', type: 'number', defaultValue: 100, min: 0, step: 0.1, showIf: { field: 'mode', equals: 's' } },
      { name: 'angleDeg', label: 'Угол между силой и перемещением, °', type: 'number', defaultValue: 0, min: 0, max: 180, step: 1 },
    ],
    resultLabels: {
      "work": "Работа",
      "force": "Сила",
      "distance": "Перемещение",
      "cos": "Косинус угла",
    },
    howToUse: ["Выберите, что нужно найти: работу или перемещение.", "Введите силу и вторую известную величину.", "Укажите угол в градусах — ноль, если сила направлена вдоль движения."],
    howItWorks: "W = F · s · cos θ, где θ — угол между силой и перемещением; отсюда s = W ÷ (F · cos θ). Угол вводится в градусах и переводится в радианы внутри расчёта.",
    example: "Сила 10 Н на перемещении 5 м вдоль движения совершает работу 50 Дж; под углом 60° — вдвое меньше.",
    faq: [
      { q: "Почему при 90° работа равна нулю?", a: "Потому что сила, перпендикулярная перемещению, не помогает и не мешает движению. Косинус прямого угла равен нулю, и произведение обращается в ноль." },
      { q: "В каких единицах вводится угол?", a: "В градусах. Внутри расчёта он переводится в радианы, потому что тригонометрические функции работают именно с ними." },
      { q: "Что означает угол 180°?", a: "Сила направлена против движения — например, трение. Косинус равен минус единице, и работа отрицательна: энергия отбирается, а не сообщается." },
      { q: "Почему нельзя найти перемещение при прямом угле?", a: "Работа при 90° равна нулю независимо от перемещения, поэтому обратный ход неоднозначен: подошло бы любое расстояние." },
    ],
    relatedCalculatorIds: ["physics-power", "newton-force", "kinetic-energy"],
  },
};
