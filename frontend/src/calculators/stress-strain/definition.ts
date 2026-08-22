import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { stressStrainCopyEn } from './copy.en';
import { stressStrainCopyUk } from './copy.uk';
import { stressStrainReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "stress-strain",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: stressStrainCopyEn, uk: stressStrainCopyUk },
  referenceCases: stressStrainReferenceCases,
  publishedExample: { inputs: { mode: 'stress', force: 10000, area: 100, length: 1000, delta: 0.5, e: 200000 }, expected: ["100 МПа"] },
  presentation: {
    id: "stress-strain",
    name: "Калькулятор напряжения и модуля Юнга",
    slug: "napryazhenie-i-deformaciya",
    fullPath: "/physics/napryazhenie-i-deformaciya/",
    category: "physics",
    icon: "arrow-left-right",
    popularity: 30,
    isNew: true,
    shortDescription: "Напряжение, относительная деформация и модуль Юнга при растяжении.",
    longDescription:
      "Считает растяжение в трёх направлениях: какое напряжение даёт нагрузка на сечение, какой модуль у материала по замеренному удлинению и насколько вытянется образец из материала с известным модулем. Ньютон на квадратный миллиметр — это ровно мегапаскаль, поэтому переводного множителя в расчёте нет. Отличие от закона Гука для пружины важно: жёсткость пружины — свойство конкретной детали и зависит от её геометрии, а модуль Юнга — свойство самого материала, одинаковое для любого образца из него.",
    seoTitle: "Калькулятор напряжения и модуля Юнга — растяжение образца",
    seoDescription: "Рассчитайте напряжение, относительную деформацию и модуль Юнга при растяжении по силе, сечению, длине и удлинению образца.",
    h1: "Калькулятор напряжения и модуля Юнга",
    keywords: ["модуль Юнга", "напряжение растяжения", "относительная деформация", "расчёт удлинения"],
    fields: [
      {
        name: 'mode', label: 'Что найти', type: 'select', defaultValue: 'stress',
        options: [
          { value: 'stress', label: 'напряжение' },
          { value: 'modulus', label: 'модуль Юнга' },
          { value: 'elongation', label: 'удлинение' },
        ],
      },
      { name: 'force', label: 'Сила растяжения, Н', type: 'number', defaultValue: 10000, min: 0, step: 100 },
      { name: 'area', label: 'Площадь сечения, мм²', type: 'number', defaultValue: 100, min: 0, step: 1 },
      { name: 'length', label: 'Исходная длина, мм', type: 'number', defaultValue: 1000, min: 0, step: 10 },
      { name: 'delta', label: 'Удлинение, мм', type: 'number', defaultValue: 0.5, min: 0, step: 0.1 },
      { name: 'e', label: 'Модуль Юнга, МПа', type: 'number', defaultValue: 200000, min: 0, step: 1000 },
    ],
    resultLabels: {
      "stress": "Напряжение",
      "strain": "Относительная деформация",
      "modulus": "Модуль Юнга",
      "elongation": "Удлинение",
      "area": "Площадь сечения",
    },
    howToUse: [
      "Выберите, что нужно найти: напряжение, модуль или удлинение.",
      "Введите силу в ньютонах и площадь сечения в квадратных миллиметрах.",
      "Для модуля и удлинения задайте исходную длину образца.",
      "Помните про предел текучести: за ним деформация перестаёт быть упругой и расчёт теряет смысл.",
    ],
    howItWorks: "Напряжение = сила ÷ сечение; деформация = удлинение ÷ длина; модуль = напряжение ÷ деформация.",
    example: "10 кН на сечении 100 мм² дают 100 МПа, а удлинение 0,5 мм на метре — модуль 200 ГПа, как у стали.",
    faq: [
      { q: "Чем модуль Юнга отличается от жёсткости пружины?", a: "Жёсткость — свойство конкретной детали: та же сталь в тонкой и толстой пружине даёт разные значения. Модуль Юнга — свойство материала, одинаковое для любого образца из него независимо от размеров." },
      { q: "Почему ньютоны на мм² сразу дают мегапаскали?", a: "Потому что паскаль — это ньютон на квадратный метр, а квадратный миллиметр в миллион раз меньше. Единицы совпадают ровно, и переводить ничего не нужно." },
      { q: "До какой нагрузки расчёт верен?", a: "До предела текучести материала. За ним деформация перестаёт быть упругой, образец не возвращается к исходной длине, и модуль, посчитанный по такому замеру, не описывает ничего. Предел у каждого материала свой, и расчёт его не знает." },
      { q: "Годится ли это для сжатия?", a: "Для многих металлов модуль при сжатии практически тот же, и формулы совпадают. Но бетон, чугун и композиты ведут себя по-разному на растяжение и на сжатие, и переносить результат на них нельзя." },
    ],
    relatedCalculatorIds: ["hooke-law", "metal-weight", "physics-power"],
  },
};
