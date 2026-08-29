// Штукатурка: сухая смесь по площади стены и толщине слоя.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { plasterCopyEn } from './copy.en';
import { plasterCopyUk } from './copy.uk';
import { plasterCopyDe } from './copy.de';
import { plasterReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'plaster',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: plasterCopyEn, uk: plasterCopyUk, de: plasterCopyDe },
  referenceCases: plasterReferenceCases,
  publishedExample: { inputs: { mode: 'area', area: 20, thickness: 10, consumption: 8.5, bagWeight: 30 }, expected: ['1 700,00 кг'] },
  presentation: {
    id: 'plaster',
    name: 'Калькулятор штукатурки',
    slug: 'plaster',
    fullPath: '/building/plaster/',
    category: 'building',
    icon: 'wall',
    popularity: 51,
    isNew: false,
    shortDescription: 'Сколько сухой смеси нужно на стену при заданной толщине слоя.',
    longDescription:
      'Считает массу сухой смеси и число мешков по площади стены и толщине слоя. Расход остаётся полем, которое видно и можно изменить: у гипсовых, цементных и известковых составов он разный, и производитель пишет свой на мешке. Значение по умолчанию 8,5 кг на квадратный метр при слое в миллиметр — типичная гипсовая смесь, и это допущение, а не норма. Мешки округляются вверх, потому что дробный мешок не продаётся.',
    seoTitle: 'Калькулятор штукатурки — расход смеси на стену',
    seoDescription: 'Рассчитайте массу штукатурной смеси и число мешков по площади стены, толщине слоя и расходу.',
    h1: 'Калькулятор штукатурки',
    keywords: ['калькулятор штукатурки', 'расход штукатурки', 'штукатурка на м2', 'сколько мешков штукатурки'],
    fields: [
      {
        name: 'mode', label: 'Как задать площадь', type: 'select', defaultValue: 'area',
        options: [
          { value: 'area', label: 'площадью' },
          { value: 'dimensions', label: 'длиной и высотой' },
        ],
      },
      { name: 'area', label: 'Площадь стены, м²', type: 'number', defaultValue: 20, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'area' } },
      { name: 'length', label: 'Длина стены, м', type: 'number', defaultValue: 5, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'dimensions' } },
      { name: 'height', label: 'Высота стены, м', type: 'number', defaultValue: 2.7, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'dimensions' } },
      { name: 'thickness', label: 'Толщина слоя, мм', type: 'number', defaultValue: 10, min: 0, max: 100, step: 1 },
      { name: 'consumption', label: 'Расход смеси, кг/м² на 1 мм', type: 'number', defaultValue: 8.5, min: 0, step: 0.1 },
      { name: 'bagWeight', label: 'Вес мешка, кг', type: 'number', defaultValue: 30, min: 0, step: 1 },
    ],
    resultLabels: { mass: 'Масса сухой смеси', bags: 'Мешков', perSquare: 'Расход на м²', area: 'Площадь' },
    howToUse: [
      'Задайте площадь стены или её длину и высоту.',
      'Укажите толщину слоя и расход, взятый с мешка.',
      'Прочитайте массу смеси и число мешков.',
    ],
    howItWorks:
      'Масса = площадь × толщина слоя в миллиметрах × расход на квадратный метр при слое в один миллиметр. Число мешков — масса, делённая на вес мешка и округлённая вверх.',
    example: 'Стена в 20 м² при слое 10 мм и расходе 8,5 требует 1 700 кг смеси — это 57 мешков по 30 кг.',
    faq: [
      { q: 'Откуда брать расход смеси?', a: 'С упаковки: производитель указывает его в килограммах на квадратный метр при слое в один миллиметр. Значение по умолчанию — типичная гипсовая смесь, и его стоит заменить своим.' },
      { q: 'Чем это отличается от калькулятора стяжки?', a: 'Стяжка выравнивает пол и считается по объёму слоя на площади пола. Штукатурка ложится на стену, и её расход задаётся на миллиметр толщины.' },
      { q: 'Какую толщину слоя брать?', a: 'Ту, которая нужна, чтобы вывести стену в плоскость. Для ровных стен это 5–10 мм, для заметных перепадов больше; смотрите по маякам, а не по среднему значению.' },
      { q: 'Учитываются ли откосы и проёмы?', a: 'Нет. Вычтите площадь проёмов и добавьте площадь откосов сами — их геометрия у каждого помещения своя.' },
    ],
    relatedCalculatorIds: ['screed-calculator', 'paint-calculator', 'wallpaper-calculator'],
  },
};
