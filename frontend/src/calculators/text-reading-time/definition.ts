import { contextualField } from './contextualField';
import { validate } from './validate';
import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { textReadingTimeCopyEn } from './copy.en';
import { textReadingTimeCopyUk } from './copy.uk';
import { textReadingTimeCopyDe } from './copy.de';
import { textReadingTimeCopyEs } from './copy.es';
import { textReadingTimeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "text-reading-time",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  validate,
  copy: { en: textReadingTimeCopyEn, uk: textReadingTimeCopyUk, de: textReadingTimeCopyDe, es: textReadingTimeCopyEs },
  referenceCases: textReadingTimeReferenceCases,
  publishedExample: { inputs: { mode: 'words', text: '', words: 1200, wpm: 200, speechWpm: 130 }, expected: ["6 мин 0 с"] },
  presentation: {
  id: "text-reading-time",
  name: "Калькулятор времени чтения текста",
  slug: "text-reading-time",
  fullPath: "/education/text-reading-time/",
  category: "education",
  icon: "graduation-cap",
  popularity: 40,
  isNew: false,
  shortDescription: "Сколько минут займёт чтение про себя и сколько — то же вслух.",
  seoTitle: "Калькулятор времени чтения текста и выступления",
  seoDescription: "Узнайте, сколько минут занимает чтение текста про себя и сколько — чтение вслух, по числу слов или по вставленному тексту.",
  h1: "Калькулятор времени чтения текста",
  keywords: ["время чтения текста", "время выступления", "сколько читать текст", "длительность доклада"],
  fields: [
      {
        name: 'mode', label: 'Что известно', type: 'select', defaultValue: 'words',
        options: [
          { value: 'words', label: 'число слов' },
          { value: 'text', label: 'сам текст' },
        ],
      },
      { name: 'words', label: 'Число слов', type: 'number', defaultValue: 1200, min: 0, step: 50, showIf: { field: 'mode', equals: 'words' } },
      { name: 'text', label: 'Текст', type: 'textarea', defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.', showIf: { field: 'mode', equals: 'text' } },
      { name: 'wpm', label: 'Скорость чтения про себя', type: 'number', unit: 'слов/мин', defaultValue: 200, min: 0, step: 10 },
      { name: 'speechWpm', label: 'Скорость речи вслух', type: 'number', unit: 'слов/мин', defaultValue: 130, min: 0, step: 10 },
    ],
  resultLabels: {
      "read": "Время чтения",
      "speech": "Время вслух",
      "readMinutes": "Чтение в минутах",
      "speechMinutes": "Речь в минутах",
      "words": "Слов",
    },
  relatedCalculatorIds: ["reading-speed", "text-word-char-count", "final-grade"],
  ...contractContent.ru
},
};
