// Единицы частоты. База — герц. Оборот в минуту включён: это та же величина,
// записанная через минуту, и в паспортах двигателей встречается чаще герц.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { unitOptions } from '../../lib/platform/conversion';
import { compute } from './compute';
import { frequencyNames, frequencyUnits } from './units';
import { frequencyCopyEn } from './copy.en';
import { frequencyCopyUk } from './copy.uk';
import { frequencyReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'convert-frequency',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: frequencyCopyEn, uk: frequencyCopyUk },
  referenceCases: frequencyReferenceCases,
  publishedExample: { inputs: { value: 2.4, from: 'ghz', to: 'mhz' }, expected: ['2 400,00 МГц'] },
  presentation: {
    id: 'convert-frequency',
    name: 'Конвертер частоты',
    slug: 'convert-frequency',
    fullPath: '/converters/convert-frequency/',
    category: 'converters',
    icon: 'arrow-left-right',
    popularity: 49,
    isNew: false,
    shortDescription: 'Перевод частоты между герцами, килогерцами, мегагерцами и оборотами в минуту.',
    longDescription:
      'Переводит частоту между герцами, килогерцами, мегагерцами, гигагерцами, миллигерцами и оборотами в минуту. Гигагерцы стоят в характеристиках процессоров и Wi-Fi, обороты в минуту — в паспортах двигателей и насосов.',
    seoTitle: 'Конвертер частоты — Гц, кГц, МГц, ГГц, об/мин',
    seoDescription:
      'Перевод частоты между герцами, килогерцами, мегагерцами, гигагерцами и оборотами в минуту.',
    h1: 'Конвертер частоты',
    keywords: ['конвертер частоты', 'ГГц в МГц', 'обороты в минуту'],
    fields: [
      { name: 'value', label: 'Частота', type: 'number', defaultValue: 2.4, min: 0 },
      { name: 'from', label: 'Из единицы', type: 'select', defaultValue: 'ghz', options: unitOptions(frequencyUnits, frequencyNames) },
      { name: 'to', label: 'В единицу', type: 'select', defaultValue: 'mhz', options: unitOptions(frequencyUnits, frequencyNames) },
    ],
    resultLabels: { result: 'Результат' },
    howToUse: ['Введите значение.', 'Выберите исходную единицу.', 'Выберите целевую единицу.'],
    howItWorks: 'Все единицы приводятся к герцу через точные множители приставок СИ.',
    example: 'Wi-Fi на 2,4 ГГц — это 2400 МГц, а двигатель на 3000 об/мин вращается с частотой 50 Гц.',
    faq: [
      { q: 'Как связаны герцы и обороты в минуту?', a: 'Один герц — это один оборот в секунду, то есть шестьдесят оборотов в минуту.' },
      { q: 'Почему процессор измеряют в гигагерцах?', a: 'Гигагерц — миллиард тактов в секунду; так удобнее записывать частоты современных чипов.' },
      { q: 'Чем мГц отличается от МГц?', a: 'Строчная «м» — милли, то есть тысячная герца; прописная «М» — мега, миллион герц. Разница в миллиард раз.' },
      { q: 'Можно ли перевести частоту в период?', a: 'Период — величина, обратная частоте. Обратные преобразования конвертер не выполняет; разделите единицу на частоту сами.' },
    ],
    relatedCalculatorIds: ['convert-time', 'convert-data-rate', 'convert-angle'],
  },
};
