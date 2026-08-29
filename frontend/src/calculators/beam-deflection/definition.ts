import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { beamDeflectionCopyEn } from './copy.en';
import { beamDeflectionCopyUk } from './copy.uk';
import { beamDeflectionCopyDe } from './copy.de';
import { beamDeflectionReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "beam-deflection",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: beamDeflectionCopyEn, uk: beamDeflectionCopyUk, de: beamDeflectionCopyDe },
  referenceCases: beamDeflectionReferenceCases,
  publishedExample: { inputs: { scheme: "uniform", load: 2, span: 3, e: 10, inertia: 1000 }, expected: ["21,094 мм"] },
  presentation: {
    id: "beam-deflection",
    name: "Калькулятор прогиба балки",
    slug: "progib-balki",
    fullPath: "/building/progib-balki/",
    category: "building",
    icon: "wall",
    popularity: 34,
    isNew: false,
    shortDescription: "Прогиб балки на двух опорах при равномерной или сосредоточенной нагрузке.",
    longDescription:
      "Балка чаще подводит не разрушением, а прогибом: перекрытие держит нагрузку, но пружинит под шагами и трещит по отделке. Прогиб растёт как четвёртая степень пролёта при равномерной нагрузке, поэтому лишние полметра пролёта стоят дороже любой прибавки к сечению. Обратите внимание на единицу нагрузки: при равномерной это килоньютоны НА МЕТР, при сосредоточенной — одна сила в килоньютонах.",
    seoTitle: "Калькулятор прогиба балки — равномерная и сосредоточенная нагрузка",
    seoDescription: "Рассчитайте прогиб балки на двух опорах по нагрузке, пролёту, модулю упругости и моменту инерции сечения.",
    h1: "Калькулятор прогиба балки",
    keywords: ["прогиб балки", "жёсткость перекрытия", "момент инерции сечения", "относительный прогиб"],
    fields: [
      {
        name: 'scheme', label: 'Схема нагружения', type: 'select', defaultValue: 'uniform',
        options: [
          { value: 'uniform', label: 'равномерная, кН/м' },
          { value: 'point', label: 'сосредоточенная в середине, кН' },
        ],
      },
      { name: 'load', label: 'Нагрузка', type: 'number', defaultValue: 2, min: 0, step: 0.1 },
      { name: 'span', label: 'Пролёт, м', type: 'number', defaultValue: 3, min: 0, step: 0.1 },
      { name: 'e', label: 'Модуль упругости, ГПа', type: 'number', defaultValue: 10, min: 0, step: 1 },
      { name: 'inertia', label: 'Момент инерции сечения, см⁴', type: 'number', defaultValue: 1000, min: 0, step: 10 },
    ],
    resultLabels: {
      "deflection": "Прогиб", "relative": "Относительный прогиб", "ei": "Жёсткость EI",
      "span": "Пролёт", "limit": "Предел 1/250",
    },
    howToUse: [
      "Единица нагрузки зависит от схемы: равномерная задаётся в килоньютонах на метр, сосредоточенная — в килоньютонах.",
      "Модуль упругости: хвойная древесина около 10 ГПа, сталь 210, алюминий 70.",
      "Момент инерции берут из сортамента или считают для прямоугольника как b·h³/12 в сантиметрах.",
      "Строка «Предел 1/250» показывает распространённый ориентир по пролёту — сравнивайте с ним прогиб.",
    ],
    howItWorks: "Равномерная 5wL⁴/(384EI), сосредоточенная FL³/(48EI); жёсткость EI из ГПа и см⁴.",
    example: "Деревянная балка с моментом инерции 1000 см⁴ на пролёте 3 м под 2 кН/м прогибается на 21,09 мм.",
    faq: [
      { q: "Почему прогиб так резко растёт с пролётом?", a: "При равномерной нагрузке он пропорционален четвёртой степени пролёта. Увеличить пролёт с трёх метров до четырёх — значит утроить прогиб, и никакая разумная прибавка к высоте сечения этого не компенсирует." },
      { q: "Что даёт увеличение высоты сечения?", a: "Момент инерции растёт как куб высоты: доска 50×200 жёстче доски 50×150 в 2,37 раза. Поэтому балки ставят на ребро, а не плашмя — то же сечение работает во много раз лучше." },
      { q: "Что означает 1/250?", a: "Это относительный прогиб: пролёт, делённый на прогиб. Чем больше знаменатель, тем жёстче конструкция. 1/250 — распространённый ориентир для перекрытий, для чистовых потолков обычно требуют жёстче." },
      { q: "Учитывается ли собственный вес балки?", a: "Нет, его нужно добавить к равномерной нагрузке самому. Для деревянной балки это обычно доли килоньютона на метр и на фоне полезной нагрузки заметно не всегда." },
    ],
    relatedCalculatorIds: ["beam-stress", "board-volume", "metal-weight"],
  },
};
