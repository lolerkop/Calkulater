import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { coordinateConvertCopyEn } from './copy.en';
import { coordinateConvertCopyUk } from './copy.uk';
import { coordinateConvertCopyDe } from './copy.de';
import { coordinateConvertReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "coordinate-convert",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: coordinateConvertCopyEn, uk: coordinateConvertCopyUk, de: coordinateConvertCopyDe },
  referenceCases: coordinateConvertReferenceCases,
  publishedExample: { inputs: { mode: 'toDecimal', deg: 55, minutes: 45, seconds: 30, decimal: 0, hemisphere: 'N' }, expected: ["55,7583°"] },
  presentation: {
    id: "coordinate-convert",
    name: "Конвертер координат — градусы, минуты, секунды",
    slug: "koordinaty-gradusy-minuty-sekundy",
    fullPath: "/converters/koordinaty-gradusy-minuty-sekundy/",
    category: "converters",
    icon: "globe",
    popularity: 33,
    isNew: false,
    shortDescription: "Перевод координат между градусами-минутами-секундами и десятичными.",
    longDescription:
      "Переводит географическую координату из записи «градусы, минуты, секунды» в десятичные градусы и обратно. Карты и навигаторы показывают координату по-разному: бумажные карты и авиационные данные держат минуты и секунды, а карты в браузере и файлы GPX — десятичные градусы со знаком. Знак в этой паре несёт полушарие: в записи ГМС минус не пишут, вместо него ставят букву, поэтому направление здесь отдельное поле, а не часть числа.",
    seoTitle: "Конвертер координат — градусы минуты секунды в десятичные",
    seoDescription: "Переведите географические координаты из градусов, минут и секунд в десятичные градусы и обратно, с учётом полушария.",
    h1: "Конвертер координат — градусы, минуты, секунды",
    keywords: ["перевод координат", "градусы минуты секунды в десятичные", "конвертер координат gps", "десятичные градусы"],
    fields: [
      {
        name: 'mode', label: 'Направление перевода', type: 'select', defaultValue: 'toDecimal',
        options: [
          { value: 'toDecimal', label: 'ГМС → десятичные' },
          { value: 'toDms', label: 'десятичные → ГМС' },
        ],
      },
      { name: 'deg', label: 'Градусы', type: 'number', defaultValue: 55, min: 0, max: 180, step: 1, showIf: { field: 'mode', equals: 'toDecimal' } },
      { name: 'minutes', label: 'Минуты', type: 'number', defaultValue: 45, min: 0, max: 59, step: 1, showIf: { field: 'mode', equals: 'toDecimal' } },
      { name: 'seconds', label: 'Секунды', type: 'number', defaultValue: 30, min: 0, max: 59, step: 0.01, showIf: { field: 'mode', equals: 'toDecimal' } },
      {
        name: 'hemisphere', label: 'Полушарие', type: 'select', defaultValue: 'N',
        options: [
          { value: 'N', label: 'северное или восточное' },
          { value: 'S', label: 'южное или западное' },
        ],
        showIf: { field: 'mode', equals: 'toDecimal' },
      },
      { name: 'decimal', label: 'Десятичные градусы', type: 'number', defaultValue: -37.6173, signed: true, step: 0.0001, showIf: { field: 'mode', equals: 'toDms' } },
    ],
    resultLabels: {
      "decimal": "Десятичные градусы",
      "dms": "Градусы, минуты, секунды",
      "hemisphere": "Полушарие",
      "dm": "Только градусы и минуты",
    },
    howToUse: [
      "Выберите направление перевода.",
      "Для перевода из ГМС введите градусы, минуты и секунды и укажите полушарие.",
      "Для обратного перевода введите десятичные градусы со знаком: минус означает юг или запад.",
      "Проверьте область: широта не превышает 90°, долгота — 180°.",
    ],
    howItWorks: "Десятичные градусы = градусы + минуты ÷ 60 + секунды ÷ 3600. Обратно: целая часть даёт градусы, дробная умножается на 60 для минут, остаток снова на 60 для секунд.",
    example: "55°45′30″ северной широты — это 55,7583 десятичных градуса.",
    faq: [
      { q: "Почему полушарие вынесено отдельным полем?", a: "Потому что в записи ГМС минус не пишут: направление обозначают буквой. Знак появляется только в десятичной записи, и смешивать эти две системы в одном поле значило бы приглашать ошибку." },
      { q: "Сколько знаков после запятой достаточно?", a: "Четыре знака — это около одиннадцати метров по широте. Для адреса или точки на карте этого хватает; для геодезии нужны шесть и более." },
      { q: "Почему секунды показаны дробными?", a: "Потому что округление секунды до целой сдвигает точку примерно на тридцать метров. Дробная часть здесь не педантизм, а точность." },
      { q: "Широта или долгота?", a: "Формула одна и та же. Различается только область: широта не выходит за 90°, долгота — за 180°." },
    ],
    relatedCalculatorIds: ["convert-angle", "convert-length", "convert-time"],
  },
};
