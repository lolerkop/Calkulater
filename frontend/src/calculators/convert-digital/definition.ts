// Конвертер данных — третий сентинел: две несовпадающие системы приставок
// в одном наборе единиц.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { unitOptions } from '../../lib/platform/conversion';
import { compute } from './compute';
import { digitalNames, digitalUnits } from './units';
import { digitalCopyEn } from './copy.en';
import { digitalCopyUk } from './copy.uk';
import { digitalCopyDe } from './copy.de';
import { convertDigitalCopyEs } from './copy.es';
import { digitalReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'convert-digital',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: digitalCopyEn, uk: digitalCopyUk, de: digitalCopyDe, es: convertDigitalCopyEs },
  referenceCases: digitalReferenceCases,
  publishedExample: { inputs: { value: 1, from: 'TB', to: 'GiB' }, expected: ['931,3226 ГиБ'] },
  presentation: {
    id: 'convert-digital',
    name: 'Конвертер объёма данных',
    slug: 'convert-digital',
    fullPath: '/converters/convert-digital/',
    category: 'converters',
    icon: 'arrow-left-right',
    popularity: 58,
    isNew: false,
    shortDescription: 'Перевод байтов между десятичными и двоичными единицами.',
    longDescription:
      "Переводит объём данных между десятичными единицами (кБ, МБ, ГБ, ТБ) и двоичными (КиБ, МиБ, ГиБ, ТиБ). Гигабайт — 1 000 000 000 байт, гибибайт — 1 073 741 824. Один терабайт составляет примерно 931,32 ГиБ; программа может показывать любую из этих систем.",
    seoTitle: 'Конвертер объёма данных — ГБ, ГиБ, МБ, МиБ',
    seoDescription:
      'Перевод объёма данных между байтами, килобайтами, мегабайтами, гигабайтами и двоичными единицами.',
    h1: 'Конвертер объёма данных',
    keywords: ['конвертер данных', 'гб в гиб', 'мб в миб'],
    fields: [
      { name: 'value', label: 'Объём', type: 'number', defaultValue: 1, min: 0 },
      { name: 'from', label: 'Из единицы', type: 'select', defaultValue: 'GB', options: unitOptions(digitalUnits, digitalNames) },
      { name: 'to', label: 'В единицу', type: 'select', defaultValue: 'GiB', options: unitOptions(digitalUnits, digitalNames) },
    ],
    resultLabels: { result: 'Результат' },
    disclaimer: "Результат — округлённый перевод единиц. Проверьте введённое значение и выбранные единицы.",
    howToUse: ['Введите объём.', 'Выберите исходную единицу.', 'Выберите целевую единицу.'],
    howItWorks: "Десятичные приставки идут степенями 1000, двоичные — степенями 1024.",
    example: "1 ТБ — это 931,32 ГиБ, поэтому объём диска в системе выглядит меньше.",
    faq: [
      {
        "q": "Мегабайт и мебибайт — одно и то же?",
        "a": "Нет. Мегабайт — это 1 000 000 байт, мебибайт — 1 048 576. С каждой следующей приставкой разрыв растёт."
      },
      {
        "q": "Почему диск на 1 ТБ показывает 931 ГБ?",
        "a": "Производитель считает десятичные терабайты, а система показывает двоичные гибибайты, но часто подписывает их как ГБ. Объём тот же, единицы разные."
      },
      {
        "q": "Какую систему выбрать?",
        "a": "Берите единицы, прямо указанные в источнике. кБ, МБ, ГБ и ТБ — десятичные; КиБ, МиБ, ГиБ и ТиБ — двоичные. Одной подписи «размер диска» или названия системы недостаточно."
      },
      {
        "q": "Как сюда относятся биты?",
        "a": "В байте восемь бит. Скорость сети обычно указывают в битах в секунду, а объём — в байтах."
      }
    ],
    relatedCalculatorIds: ['convert-length', 'convert-time', 'convert-energy'],
  },
};
