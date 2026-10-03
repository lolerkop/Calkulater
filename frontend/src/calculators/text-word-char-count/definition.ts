import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { textWordCharCountCopyEn } from './copy.en';
import { textWordCharCountCopyUk } from './copy.uk';
import { textWordCharCountCopyDe } from './copy.de';
import { textWordCharCountCopyEs } from './copy.es';
import { textWordCharCountReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "text-word-char-count",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: textWordCharCountCopyEn, uk: textWordCharCountCopyUk, de: textWordCharCountCopyDe, es: textWordCharCountCopyEs },
  referenceCases: textWordCharCountReferenceCases,
  publishedExample: {
    inputs: { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.' },
    expected: ["15"],
  },
  presentation: {
  id: "text-word-char-count",
  name: "Счётчик слов и символов",
  slug: "text-word-char-count",
  fullPath: "/computers/text-word-char-count/",
  category: "computers",
  icon: "monitor",
  popularity: 43,
  isNew: false,
  shortDescription: "Слова, символы с пробелами и без, предложения и абзацы одним расчётом.",
  seoTitle: "Счётчик слов и символов в тексте онлайн",
  seoDescription: "Посчитайте слова, символы с пробелами и без пробелов, предложения и абзацы в тексте, а также среднюю длину слова.",
  h1: "Счётчик слов и символов",
  keywords: ["счётчик слов", "количество символов", "сколько знаков в тексте", "подсчёт символов с пробелами"],
  fields: [
      {
        name: 'text', label: 'Текст', type: 'textarea',
        // Умолчание поля не имеет пути локализации, поэтому текст здесь
        // намеренно нейтральный: русская фраза утекла бы в английские данные.
        defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
      },
    ],
  resultLabels: {
      "words": "Слов",
      "chars": "Символов с пробелами",
      "charsNoSpaces": "Символов без пробелов",
      "sentences": "Предложений",
      "paragraphs": "Абзацев",
      "avgWord": "Средняя длина слова",
      "wordsPerSentence": "Слов в предложении",
    },
  relatedCalculatorIds: ["text-reading-time", "files-on-disk", "ppi-dpi"],
  ...contractContent.ru
},
};
