import type { CalcFunction } from '../../lib/types';
import { fmtInt, toNumber } from '../../lib/format';

// Число прописью.
//
// Строка собирается по триадам: миллиарды, миллионы, тысячи, остаток. Внутри
// триады порядок слов — сотни, десятки, единицы, — и он совпадает в русском,
// английском и украинском, поэтому выпущенная пословная подстановка переводит
// готовую строку без пересборки: карта значений калькулятора несёт все
// числительные, а платформа подставляет их одним проходом от длинных ключей к
// коротким, так что «двадцать» не перехватывается «два».
//
// Согласование рода живёт в тысячах: «одна тысяча», «две тысячи». Форма
// масштабного слова выбирается по последним двум цифрам триады, как и требует
// русская грамматика; в переводе все три формы сходятся в одно слово, и это
// нормально — многие языки числительные не склоняют.
const ONES = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять',
  'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать',
  'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
const TENS = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят',
  'восемьдесят', 'девяносто'];
const HUNDREDS = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот',
  'восемьсот', 'девятьсот'];
const SCALES: [number, [string, string, string], boolean][] = [
  [1_000_000_000, ['миллиард', 'миллиарда', 'миллиардов'], false],
  [1_000_000, ['миллион', 'миллиона', 'миллионов'], false],
  [1_000, ['тысяча', 'тысячи', 'тысяч'], true],
];
const RUBLES: [string, string, string] = ['рубль', 'рубля', 'рублей'];
const KOPECKS: [string, string, string] = ['копейка', 'копейки', 'копеек'];
const LIMIT = 999_999_999_999;

const plural = (value: number, forms: [string, string, string]): string => {
  const hundred = Math.abs(value) % 100;
  if (hundred >= 11 && hundred <= 14) return forms[2];
  const unit = hundred % 10;
  if (unit === 1) return forms[0];
  if (unit >= 2 && unit <= 4) return forms[1];
  return forms[2];
};

const triad = (value: number, female: boolean): string => {
  const parts: string[] = [];
  let rest = value;
  if (rest >= 100) { parts.push(HUNDREDS[Math.floor(rest / 100)]); rest %= 100; }
  if (rest >= 20) { parts.push(TENS[Math.floor(rest / 10)]); rest %= 10; }
  if (rest > 0) {
    let word = ONES[rest];
    if (female && rest === 1) word = 'одна';
    if (female && rest === 2) word = 'две';
    parts.push(word);
  }
  return parts.join(' ');
};

const spell = (value: number): string => {
  if (value === 0) return 'ноль';
  const parts: string[] = [];
  if (value < 0) parts.push('минус');
  let rest = Math.abs(value);
  for (const [base, forms, female] of SCALES) {
    const count = Math.floor(rest / base);
    if (count > 0) {
      parts.push(triad(count, female));
      parts.push(plural(count, forms));
      rest %= base;
    }
  }
  if (rest > 0) parts.push(triad(rest, false));
  return parts.filter(Boolean).join(' ');
};

export const compute: CalcFunction = (inputs) => {
  const value = toNumber(inputs.value);
  const fail = (message: string) => ({
    primary: { label: 'Прописью', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!Number.isInteger(value)) return fail('Число должно быть целым');
  if (Math.abs(value) > LIMIT) return fail('Число не может быть больше 999 999 999 999 по модулю');

  const whole = Math.abs(value);
  const digits = String(whole).length;
  const money = `${spell(value)} ${plural(whole, RUBLES)} 00 ${plural(0, KOPECKS)}`;

  return {
    primary: { label: 'Прописью', value: spell(value) },
    secondary: [
      { label: 'Сумма прописью', value: money },
      { label: 'Цифрами', value: fmtInt(value) },
      { label: 'Триад в записи', value: fmtInt(Math.ceil(digits / 3)) },
      { label: 'Знаков в числе', value: fmtInt(digits) },
    ],
  };
};
