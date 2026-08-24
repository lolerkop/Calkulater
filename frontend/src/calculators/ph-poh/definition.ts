// pH и pOH: pH = −lg[H⁺], сумма 14 при 25 °C.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { phPohCopyEn } from './copy.en';
import { phPohCopyUk } from './copy.uk';
import { phPohReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'ph-poh',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: phPohCopyEn, uk: phPohCopyUk },
  referenceCases: phPohReferenceCases,
  publishedExample: { inputs: { mode: 'fromH', h: 0.0001 }, expected: ['4,00'] },
  presentation: {
    id: 'ph-poh',
    name: 'Калькулятор pH и pOH',
    slug: 'ph-poh',
    fullPath: '/chemistry/ph-poh/',
    category: 'chemistry',
    icon: 'flask',
    popularity: 45,
    isNew: false,
    shortDescription: 'pH по концентрации ионов водорода и обратно, с pOH и характером среды.',
    longDescription:
      'Переводит концентрацию ионов водорода в pH и обратно, попутно давая pOH и характер среды. Сумма pH и pOH равна четырнадцати не всегда, а при 25 °C: это ионное произведение воды, и при другой температуре оно другое, поэтому оговорка стоит прямо на странице, а не прячется в мелком шрифте. Логарифм определён только для положительной концентрации, поэтому нуль отклоняется, а не превращается в бесконечность.',
    seoTitle: 'Калькулятор pH и pOH — кислотность раствора',
    seoDescription: 'Рассчитайте pH по концентрации ионов водорода или концентрацию по pH, вместе с pOH и характером среды.',
    h1: 'Калькулятор pH и pOH',
    keywords: ['калькулятор ph', 'ph и poh', 'кислотность раствора', 'концентрация ионов водорода'],
    fields: [
      {
        name: 'mode', label: 'Что известно', type: 'select', defaultValue: 'fromH',
        options: [
          { value: 'fromH', label: 'концентрация H⁺' },
          { value: 'fromPh', label: 'pH' },
        ],
      },
      // Значение по умолчанию намеренно не с тремя знаками после точки: общий
      // разборщик чисел читает такую запись как разделитель разрядов.
      { name: 'h', label: 'Концентрация H⁺, моль/л', type: 'number', defaultValue: 0.0001, min: 0, step: 0.0001, showIf: { field: 'mode', equals: 'fromH' } },
      { name: 'ph', label: 'pH', type: 'number', defaultValue: 8.4, min: 0, max: 14, step: 0.1, showIf: { field: 'mode', equals: 'fromPh' } },
    ],
    resultLabels: { ph: 'pH', poh: 'pOH', h: 'Концентрация H⁺', medium: 'Среда' },
    howToUse: ['Выберите, что известно — концентрация или pH.', 'Введите значение.', 'Прочитайте вторую величину, pOH и характер среды.'],
    howItWorks:
      'pH = −lg[H⁺], то есть десятичный логарифм концентрации со сменой знака. Обратный переход даёт [H⁺] = 10^−pH. При 25 °C ионное произведение воды равно 10⁻¹⁴, поэтому pH + pOH = 14.',
    example: 'Концентрация ионов водорода 10⁻³ моль/л соответствует pH = 3 и pOH = 11 — среда кислая.',
    faq: [
      { q: 'Всегда ли pH и pOH дают в сумме 14?', a: 'Нет, только при 25 °C. Сумма равна показателю ионного произведения воды, а оно зависит от температуры: при 60 °C сумма уже около 13,0.' },
      { q: 'Что означает pH = 7?', a: 'Что концентрации ионов водорода и гидроксид-ионов равны — среда нейтральная. Это верно опять же при 25 °C.' },
      { q: 'Почему нельзя ввести нулевую концентрацию?', a: 'Логарифм нуля не определён. Раствор без единого иона водорода физически невозможен, поэтому вместо бесконечности калькулятор сообщает об ошибке.' },
      { q: 'Можно ли получить pH вне диапазона 0–14?', a: 'В очень концентрированных растворах формально да, но шкала при этом перестаёт быть осмысленной, и обычные приближения не работают. Здесь диапазон ограничен намеренно.' },
    ],
    relatedCalculatorIds: ['solution-concentration', 'dilution', 'molarity'],
  },
};
