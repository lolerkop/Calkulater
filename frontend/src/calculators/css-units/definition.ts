import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { cssUnitsCopyEn } from './copy.en';
import { cssUnitsCopyUk } from './copy.uk';
import { cssUnitsReferenceCases } from './referenceCases';

const UNITS = [
  { value: 'px', label: 'px' },
  { value: 'rem', label: 'rem' },
  { value: 'em', label: 'em' },
  { value: 'pt', label: 'pt' },
  { value: 'pc', label: 'pc' },
  { value: 'in', label: 'in' },
  { value: 'cm', label: 'cm' },
  { value: 'mm', label: 'mm' },
];

export const definition: CalculatorDefinitionV2 = {
  id: 'css-units',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: cssUnitsCopyEn, uk: cssUnitsCopyUk },
  referenceCases: cssUnitsReferenceCases,
  publishedExample: {
    inputs: { value: 24, fromUnit: 'px', toUnit: 'rem', rootSize: 16, parentSize: 16 },
    expected: ['1,5'],
  },
  presentation: {
    id: 'css-units',
    name: 'Конвертер единиц CSS',
    slug: 'css-units',
    fullPath: '/computers/css-units/',
    category: 'computers',
    icon: 'type',
    popularity: 22,
    isNew: true,
    shortDescription: 'Перевод px, rem, em, pt и остальных единиц вёрстки.',
    longDescription:
      'Всё проходит через пиксель CSS — единицу отсчёта, а не физическую величину: дюйм здесь всегда ровно 96 пикселей, на каком бы экране он ни оказался. Абсолютные единицы — pt, pc, in, cm, mm — жёстко кратны этому пикселю и не меняются никогда. Относительные зависят от контекста, и в этом вся разница между ними: rem одинаков всюду, потому что следует корневому размеру шрифта, а em следует за родителем и потому во вложенных элементах умножается сам на себя — именно так список третьего уровня вложенности получает нечитаемо мелкий текст.',
    seoTitle: 'Конвертер единиц CSS: px, rem, em, pt',
    seoDescription:
      'Переведите единицы CSS между px, rem, em, pt, pc, in, cm и mm с учётом корневого размера шрифта и размера родительского элемента.',
    h1: 'Конвертер единиц CSS',
    keywords: ['единицы css', 'px в rem', 'em и rem', 'конвертер pt'],
    fields: [
      { name: 'value', label: 'Значение', type: 'number', defaultValue: 24, signed: true, step: 1 },
      { name: 'fromUnit', label: 'Из единицы', type: 'select', defaultValue: 'px', options: UNITS },
      { name: 'toUnit', label: 'В единицу', type: 'select', defaultValue: 'rem', options: UNITS },
      { name: 'rootSize', label: 'Корневой размер шрифта, px', type: 'number', defaultValue: 16, min: 0, step: 1 },
      { name: 'parentSize', label: 'Размер шрифта родителя, px', type: 'number', defaultValue: 16, min: 0, step: 1 },
    ],
    resultLabels: {
      converted: 'Результат перевода',
      px: 'В пикселях',
      rem: 'В rem',
      em: 'В em',
      pt: 'В пунктах',
    },
    howToUse: [
      'Введите значение, которое нужно перевести.',
      'Выберите единицу, в которой оно записано, и нужную единицу.',
      'Укажите корневой размер шрифта — 16 px, если страница его не меняет.',
      'Размер шрифта родителя нужен, только если вы работаете с em.',
    ],
    howItWorks:
      'Значение сначала переводится в пиксели CSS: rem берёт корневой размер, em — размер родителя, а pt, pc, in, cm и mm кратны пикселю жёстко. Затем результат делится на целевую единицу.',
    example: 'При корневом размере 16 px значение 24 px — это 1,5 rem и 18 pt.',
    faq: [
      {
        q: 'Чем rem отличается от em?',
        a: 'rem отсчитывается от корневого размера шрифта и потому одинаков по всей странице. em отсчитывается от родителя и во вложенных элементах накапливается: 0,9 em на третьем уровне даёт 0,73 от базового размера.',
      },
      {
        q: 'Сантиметр в CSS — это настоящий сантиметр?',
        a: 'На экране нет. Он определён как 96/2,54 пикселя CSS и совпадает с физическим только в печати или на дисплее, чья плотность случайно совпала с эталонной.',
      },
      {
        q: 'Что использовать для размеров шрифта — px или rem?',
        a: 'rem уважает настройку размера шрифта в браузере читателя, а px её перекрывает. С точки зрения доступности это обычно и решает вопрос в пользу rem.',
      },
      {
        q: 'Зачем менять корневой размер шрифта в расчёте?',
        a: 'Потому что страницы иногда его меняют. Если в вашем CSS стоит html { font-size: 62.5% }, корень равен 10 px, и все переводы в rem сдвигаются соответственно.',
      },
    ],
    relatedCalculatorIds: ['modular-scale', 'ppi-dpi', 'aspect-ratio'],
  },
};
