import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { textReadingTimeCopyEn } from './copy.en';
import { textReadingTimeCopyUk } from './copy.uk';
import { textReadingTimeCopyDe } from './copy.de';
import { textReadingTimeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "text-reading-time",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: textReadingTimeCopyEn, uk: textReadingTimeCopyUk, de: textReadingTimeCopyDe },
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
    longDescription:
      "Оценивает длительность по объёму текста: можно вставить сам текст, а можно ввести число слов, если текста под рукой нет. Речь заметно медленнее чтения про себя — около 130 слов в минуту против 200, — и именно поэтому доклад по тексту, который читается за пять минут, звучит почти восемь. Обе скорости здесь редактируемые допущения, а не нормативы: у конкретного человека и конкретного текста они другие, и подставлять среднее как факт было бы неверно.",
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
      { name: 'wpm', label: 'Скорость чтения про себя, слов/мин', type: 'number', defaultValue: 200, min: 0, step: 10 },
      { name: 'speechWpm', label: 'Скорость речи вслух, слов/мин', type: 'number', defaultValue: 130, min: 0, step: 10 },
    ],
    resultLabels: {
      "read": "Время чтения",
      "speech": "Время вслух",
      "readMinutes": "Чтение в минутах",
      "speechMinutes": "Речь в минутах",
      "words": "Слов",
    },
    howToUse: [
      "Выберите, что у вас есть: готовое число слов или сам текст.",
      "Вставьте текст или введите число слов.",
      "При необходимости поправьте скорость чтения под себя.",
      "Скорость речи меняйте, если готовите выступление и знаете свой темп.",
    ],
    howItWorks:
      "Число слов делится на скорость чтения и умножается на шестьдесят, давая секунды; они округляются до целого. Время вслух считается так же, но по скорости речи, которая обычно в полтора раза ниже.",
    example: "Текст на 1200 слов читается про себя за 6 минут ровно, а вслух звучит 9 минут 14 секунд.",
    faq: [
      { q: "Чем это отличается от калькулятора скорости чтения?", a: "Там по прочитанному за известное время измеряют вашу скорость. Здесь наоборот: скорость известна, а оценивается длительность." },
      { q: "Какую скорость чтения ставить?", a: "Для взрослого на родном языке обычно 180–250 слов в минуту, для сложного технического текста — заметно меньше. Значение редактируется, потому что это оценка, а не норматив." },
      { q: "Почему речь медленнее чтения?", a: "Произнесение требует дыхания и пауз. Средний темп речи около 130 слов в минуту, у выступлений с паузами — ещё ниже." },
      { q: "Как считаются слова во вставленном тексте?", a: "Словом считается последовательность букв или цифр; дефис и апостроф внутри слова его не разрывают, а знаки препинания в счёт не идут." },
      { q: "Учитываются ли иллюстрации и формулы?", a: "Нет, считается только текст. Формулы и таблицы обычно замедляют чтение сильнее обычной прозы." },
    ],
    relatedCalculatorIds: ["reading-speed", "text-word-char-count", "final-grade"],
  },
};
