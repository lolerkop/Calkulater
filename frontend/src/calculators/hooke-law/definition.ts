import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { hookeLawCopyEn } from './copy.en';
import { hookeLawCopyUk } from './copy.uk';
import { hookeLawReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "hooke-law",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: hookeLawCopyEn, uk: hookeLawCopyUk },
  referenceCases: hookeLawReferenceCases,
  publishedExample: { inputs: { mode: 'force', k: 200, x: 0.05, f: 10 }, expected: ["10 Н"] },
  presentation: {
    id: "hooke-law",
    name: "Калькулятор закона Гука",
    slug: "zakon-guka",
    fullPath: "/physics/zakon-guka/",
    category: "physics",
    icon: "move-right",
    popularity: 33,
    isNew: false,
    shortDescription: "Сила пружины, её удлинение или жёсткость и запасённая энергия.",
    longDescription:
      "Решает закон Гука в нужную сторону: какую силу даст известная пружина при заданном сжатии, насколько её сожмёт известная сила и какой жёсткости пружина нужна под готовую пару. Рядом с ответом стоит энергия, запасённая в пружине, — величина, которую по одной силе не увидеть: при вдвое большем сжатии сила растёт вдвое, а энергия вчетверо. Закон линеен только до предела упругости: за ним пружина не возвращается в исходную длину, и формула перестаёт описывать происходящее.",
    seoTitle: "Калькулятор закона Гука — сила, удлинение, жёсткость пружины",
    seoDescription: "Рассчитайте силу пружины, её удлинение или жёсткость по закону Гука F = k·x, а также запасённую энергию.",
    h1: "Калькулятор закона Гука",
    keywords: ["закон гука", "жёсткость пружины", "сила упругости", "энергия пружины"],
    fields: [
      {
        name: 'mode', label: 'Что найти', type: 'select', defaultValue: 'force',
        options: [
          { value: 'force', label: 'силу упругости' },
          { value: 'extension', label: 'удлинение' },
          { value: 'stiffness', label: 'жёсткость' },
        ],
      },
      { name: 'k', label: 'Жёсткость, Н/м', type: 'number', defaultValue: 200, min: 0, step: 10 },
      { name: 'x', label: 'Удлинение или сжатие, м', type: 'number', defaultValue: 0.05, signed: true, step: 0.01 },
      { name: 'f', label: 'Сила, Н', type: 'number', defaultValue: 10, signed: true, step: 1 },
    ],
    resultLabels: {
      "force": "Сила",
      "extension": "Удлинение",
      "stiffness": "Жёсткость",
      "energy": "Энергия пружины",
    },
    howToUse: [
      "Выберите, какую из трёх величин ищете.",
      "Введите две остальные: решаемая станет только для чтения.",
      "Удлинение задавайте в метрах: 5 см — это 0,05.",
      "Сжатие и растяжение считаются одинаково, знак только показывает направление.",
    ],
    howItWorks: "Сила упругости пропорциональна деформации: F = k·x. Энергия равна половине произведения силы на деформацию, то есть k·x² ÷ 2.",
    example: "Пружина жёсткостью 200 Н/м, сжатая на 5 см, толкает с силой 10 Н и запасает 0,25 Дж.",
    faq: [
      { q: "Чем это отличается от второго закона Ньютона?", a: "Там сила связана с массой тела и его ускорением. Здесь — с деформацией упругого элемента. Общая у них только буква F." },
      { q: "Почему энергия растёт быстрее силы?", a: "Потому что сила линейна по деформации, а энергия квадратична. Вдвое большее сжатие даёт вдвое большую силу и вчетверо большую энергию." },
      { q: "До каких деформаций закон верен?", a: "До предела упругости материала. За ним пружина не возвращается в исходную длину, зависимость перестаёт быть линейной, и расчёт этого не улавливает." },
      { q: "Что означает отрицательный знак?", a: "Только направление. Сжатие и растяжение описываются одной формулой, и величина силы от знака не зависит." },
    ],
    relatedCalculatorIds: ["potential-energy", "newton-force", "kinetic-energy"],
  },
};
