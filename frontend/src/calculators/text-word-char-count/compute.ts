import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toStr } from '../../lib/format';
import { formatStatistic } from '../../lib/platform/measurement';

// Счётчик слов, символов, предложений и абзацев.
//
// Все спорные места решены явно, потому что «слово» и «предложение» — не
// свойства строки, а соглашения, и разные счётчики дают разные числа:
//
// СЛОВО начинается с буквы или цифры и может содержать дефис и апостроф
// внутри: «из-за» и «don't» — по одному слову, а не по два. Знаки препинания
// в слово не входят.
//
// ПРЕДЛОЖЕНИЕ — непустой кусок между точками, восклицательными и
// вопросительными знаками и многоточиями. Текст без завершающего знака всё
// равно считается одним предложением: иначе счётчик показывал бы ноль там,
// где предложение очевидно есть.
//
// АБЗАЦ — непустая строка. Пустые строки между абзацами не считаются, поэтому
// двойной перенос не удваивает счёт.
//
// Символы считаются в кодовых точках: русская буква весит столько же, сколько
// латинская.

const WORD = /[0-9A-Za-zА-Яа-яЁёІіЇїЄєҐґ][0-9A-Za-zА-Яа-яЁёІіЇїЄєҐґ'\-]*/g;
const stat = (value: number) => formatStatistic(value, fmtNumber);

export const compute: CalcFunction = (inputs) => {
  const text = toStr(inputs.text, '');

  if (!text.trim()) {
    return {
      primary: { label: 'Слов', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Введите текст', accent: 'red' as const }],
    };
  }

  const words = text.match(WORD) ?? [];
  const charsWithSpaces = [...text].length;
  const charsWithoutSpaces = [...text.replace(/\s/g, '')].length;
  const sentences = text.split(/[.!?…]+/).filter((part) => part.trim().length > 0);
  const paragraphs = text.split('\n').filter((line) => line.trim().length > 0);

  return {
    primary: { label: 'Слов', value: fmtNumber(words.length, 0) },
    secondary: [
      { label: 'Символов с пробелами', value: fmtNumber(charsWithSpaces, 0) },
      { label: 'Символов без пробелов', value: fmtNumber(charsWithoutSpaces, 0) },
      { label: 'Предложений', value: fmtNumber(sentences.length, 0) },
      { label: 'Абзацев', value: fmtNumber(paragraphs.length, 0) },
      { label: 'Средняя длина слова', value: stat(charsWithoutSpaces / words.length) },
      { label: 'Слов в предложении', value: stat(words.length / sentences.length) },
    ],
  };
};
