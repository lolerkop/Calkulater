// Перевод между Unix-временем и датой UTC. Только UTC, без часовых поясов.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { unixTimestampCopyEn } from './copy.en';
import { unixTimestampCopyUk } from './copy.uk';
import { unixTimestampCopyDe } from './copy.de';
import { unixTimestampReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "unix-timestamp",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: unixTimestampCopyEn, uk: unixTimestampCopyUk, de: unixTimestampCopyDe },
  referenceCases: unixTimestampReferenceCases,
  publishedExample: { inputs: { mode: 'toDate', timestamp: 1700000000 }, expected: ["2023-11-14 22:13:20 UTC"] },
  presentation: {
    id: "unix-timestamp",
    name: "Конвертер Unix-времени",
    slug: "unix-timestamp",
    fullPath: "/computers/unix-timestamp/",
    category: "computers",
    icon: "monitor",
    popularity: 30,
    isNew: false,
    shortDescription: "Перевод между Unix-временем и датой UTC в обе стороны.",
    longDescription:
      "Считает секунды от первого января 1970 года и обратно, всегда в UTC. Часовой пояс браузера сюда не попадает намеренно: одно и то же число обязано давать одну и ту же дату у всех, иначе ссылка с результатом показывала бы каждому своё. Отрицательные значения — обычные даты до эпохи.",
    seoTitle: "Конвертер Unix-времени — секунды эпохи в дату UTC",
    seoDescription:
      "Переведите Unix-время в дату UTC и обратно, с миллисекундами и днём недели, независимо от вашего часового пояса.",
    h1: "Конвертер Unix-времени",
    keywords: ["unix время конвертер", "epoch time", "timestamp в дату"],
    fields: [
      {
        name: 'mode', label: 'Направление', type: 'select', defaultValue: 'toDate',
        options: [
          { value: 'toDate', label: 'timestamp → дата' },
          { value: 'toTimestamp', label: 'дата → timestamp' },
        ],
      },
      { name: 'timestamp', label: 'Unix-время, секунды', type: 'number', defaultValue: 1700000000, step: 1, signed: true, showIf: { field: 'mode', equals: 'toDate' } },
      { name: 'date', label: 'Дата (UTC)', type: 'date', defaultValue: '2000-01-01', showIf: { field: 'mode', equals: 'toTimestamp' } },
      { name: 'hour', label: 'Час', type: 'number', defaultValue: 0, min: 0, max: 23, step: 1, showIf: { field: 'mode', equals: 'toTimestamp' } },
      { name: 'minute', label: 'Минута', type: 'number', defaultValue: 0, min: 0, max: 59, step: 1, showIf: { field: 'mode', equals: 'toTimestamp' } },
      { name: 'second', label: 'Секунда', type: 'number', defaultValue: 0, min: 0, max: 59, step: 1, showIf: { field: 'mode', equals: 'toTimestamp' } },
    ],
    resultLabels: { result: "Результат", seconds: "Unix-время, секунды", iso: "Дата в ISO 8601", weekday: "День недели" },
    howToUse: ["Выберите нужное направление перевода.", "Введите отметку времени либо дату и время в UTC.", "Прочитайте результат и день недели."],
    howItWorks: "Отметка времени — это число секунд с 1970-01-01T00:00:00Z; обратный перевод прибавляет эти секунды к эпохе.",
    example: "1 700 000 000 соответствует 2023-11-14 22:13:20 UTC, вторнику.",
    faq: [
      { q: "Почему только UTC?", a: "Чтобы одна и та же отметка всегда показывала одну и ту же дату. Применение часового пояса читателя означало бы, что общий результат значит разное на разных машинах." },
      { q: "Учитываются ли секунды координации?", a: "Нет, как не учитывает их и само Unix-время: каждые сутки считаются ровно 86 400 секундами, так задано стандартом." },
      { q: "Может ли отметка быть отрицательной?", a: "Да. Отрицательные значения — это даты до 1970 года, и переводятся они точно так же." },
      { q: "Секунды или миллисекунды?", a: "На вход подаются секунды — обычное соглашение Unix. Системам, которые считают в миллисекундах, значение нужно умножить на тысячу." },
    ],
    relatedCalculatorIds: ["download-time", "files-on-disk", "day-of-week"],
  },
};
