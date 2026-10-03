// Единицы скорости передачи данных. База — бит в секунду. Байт равен восьми
// битам, поэтому байтовые единицы получают множитель 8: приравнивать биты к
// байтам молча значило бы ошибаться ровно в восемь раз.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { unitOptions } from '../../lib/platform/conversion';
import { compute } from './compute';
import { dataRateNames, dataRateUnits } from './units';
import { dataRateCopyEn } from './copy.en';
import { dataRateCopyUk } from './copy.uk';
import { dataRateCopyDe } from './copy.de';
import { convertDataRateCopyEs } from './copy.es';
import { dataRateReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'convert-data-rate',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: dataRateCopyEn, uk: dataRateCopyUk, de: dataRateCopyDe, es: convertDataRateCopyEs },
  referenceCases: dataRateReferenceCases,
  publishedExample: { inputs: { value: 100, from: 'mbits', to: 'mbytes' }, expected: ['12,5000 МБ/с'] },
  presentation: {
    id: 'convert-data-rate',
    name: 'Конвертер скорости передачи данных',
    slug: 'convert-data-rate',
    fullPath: '/converters/convert-data-rate/',
    category: 'converters',
    icon: 'arrow-left-right',
    popularity: 50,
    isNew: false,
    shortDescription: 'Перевод скорости между Мбит/с и МБ/с — биты и байты не равны.',
    longDescription:
      "Переводит скорость передачи данных между битами и байтами в секунду с десятичными приставками, а также в МиБ/с с двоичной приставкой. Соотношение Мбит/с и МБ/с равно восьми; оно само по себе не определяет фактическую скорость загрузки.",
    seoTitle: 'Конвертер скорости передачи — Мбит/с в МБ/с',
    seoDescription:
      'Перевод скорости передачи данных между битами и байтами в секунду, мегабитами, мегабайтами и мебибайтами.',
    h1: 'Конвертер скорости передачи данных',
    keywords: ['Мбит в МБ', 'скорость интернета', 'конвертер скорости передачи'],
    fields: [
      { name: 'value', label: 'Скорость', type: 'number', defaultValue: 100, min: 0 },
      { name: 'from', label: 'Из единицы', type: 'select', defaultValue: 'mbits', options: unitOptions(dataRateUnits, dataRateNames) },
      { name: 'to', label: 'В единицу', type: 'select', defaultValue: 'mbytes', options: unitOptions(dataRateUnits, dataRateNames) },
    ],
    resultLabels: { result: 'Результат' },
    disclaimer: "Результат — округлённый перевод единиц. Проверьте введённое значение и выбранные единицы.",
    howToUse: ['Введите значение.', 'Выберите исходную единицу.', 'Выберите целевую единицу.'],
    howItWorks: "Все единицы приводятся к биту в секунду; байт считается равным восьми битам.",
    example: "100 Мбит/с = 12,5 МБ/с как перевод единиц. Фактическая передача файла зависит от протокола, сервера и соединения.",
    faq: [
      {
        "q": "Почему скорость 100 Мбит/с даёт всего 12,5 МБ/с?",
        "a": "В байте восемь бит. Провайдеры указывают биты, файловые менеджеры — байты, отсюда разница ровно в восемь раз."
      },
      {
        "q": "Чем МиБ/с отличается от МБ/с?",
        "a": "Мебибайт равен 1024² байт, мегабайт — 10⁶ байт. Мебибайт примерно на 4,9 % больше."
      },
      {
        "q": "Учитываются ли служебные данные?",
        "a": "Нет: конвертер только переводит единицы. Полезная скорость передачи может отличаться из-за служебных данных и условий соединения."
      },
      {
        "q": "Как перевести скорость в объём?",
        "a": "Умножить на время. Для самих объёмов есть конвертер объёма данных."
      }
    ],
    relatedCalculatorIds: ['convert-digital', 'convert-time', 'convert-frequency'],
  },
};
