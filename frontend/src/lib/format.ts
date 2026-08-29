// Утилиты форматирования чисел и валют в локали ru-RU.

/**
 * Ненулевое значение не имеет права выглядеть нулём.
 *
 * Фиксированное число знаков после запятой врёт на малых величинах: 0,001 Ом
 * при двух знаках печаталось «0,00 Ом», а 0,01 ₽ при нуле знаков — «0 ₽».
 * Поэтому запрошенная точность остаётся основной, но если при ней ненулевое
 * значение схлопывается в нули, точность расширяется до двух значащих цифр.
 *
 * Расширение идёт значащими цифрами, а не «побольше знаков везде»: 0,001
 * печатается как «0,001», а не «0,0010», обычные числа не обрастают хвостами,
 * и экспоненциальная запись не появляется — Intl её в этом режиме не даёт.
 *
 * Спасение имеет нижнюю границу. Ниже 10⁻⁷ величина в этом продукте — почти
 * всегда остаток двоичной арифметики, а не данные: разность двух почти равных
 * температур даёт 1,8·10⁻¹⁵ °C, а не измерение. Показывать такой хвост хуже,
 * чем ноль, поэтому ниже границы работает прежнее округление. Самый мелкий
 * класс, который продукт обязан показывать честно, — 0,000001, и запас до
 * границы у него десятикратный.
 */
const SIGNIFICANT_DIGITS_ON_RESCUE = 2;
const RESCUE_FLOOR = 1e-7;

function collapsesToZero(n: number, fractionDigits: number): boolean {
  const abs = Math.abs(n);
  return n !== 0 && abs >= RESCUE_FLOOR && abs < 0.5 * 10 ** -fractionDigits;
}

function withSignificantDigits(n: number): string {
  return new Intl.NumberFormat('ru-RU', {
    maximumSignificantDigits: SIGNIFICANT_DIGITS_ON_RESCUE,
  }).format(n);
}

export function fmtNumber(n: number, fractionDigits = 2): string {
  if (!isFinite(n)) return '—';
  if (collapsesToZero(n, fractionDigits)) return withSignificantDigits(n);
  return new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(n);
}

/**
 * Предварительное округление, не обнуляющее ненулевое значение.
 *
 * Калькуляторы округляют значение до печати, чтобы задать привычный разряд.
 * На малых величинах это округление съедало число целиком, и форматтер получал
 * уже настоящий ноль — спасать было нечего. Здесь округление сохраняется, но
 * отменяется ровно в том случае, когда оно превращает ненулевое в ноль.
 */
export function preserveNonZero(value: number, fractionDigits: number): number {
  if (!isFinite(value)) return value;
  const rounded = Number(value.toFixed(fractionDigits));
  return rounded === 0 && value !== 0 ? value : rounded;
}

export function fmtInt(n: number): string {
  if (!isFinite(n)) return '—';
  return new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 0 }).format(Math.round(n));
}

/**
 * Деньги от единицы и выше печатаются целыми. Это НАМЕРЕННО, и вот чем это
 * подтверждено — проверено отдельно, потому что со стороны выглядит потерей.
 *
 * В продукте две денежные традиции, и обе последовательны:
 *   — эта функция, 105 мест, преимущественно наследственные финансовые
 *     калькуляторы: целые единицы. Тридцать один опубликованный пример на
 *     страницах написан руками именно так — «11 634 ₽», «1 294 929 ₽», —
 *     и ни одного с копейками;
 *   — собственный помощник `fmtNumber(value, 2)`, 81 место, калькуляторы V2:
 *     копейки. Одиннадцать опубликованных примеров написаны так — «260,00 ₽»,
 *     «5 039 148,29 ₽», — и ни одного целого.
 *
 * То есть авторы новых калькуляторов, которым были нужны копейки, обошли эту
 * функцию стороной, а не переписали её. Менять её задним числом означало бы
 * переписать текст трёх десятков опубликованных страниц.
 *
 * Меняется здесь ровно одно и по другой причине: сумма МЕНЬШЕ денежной единицы
 * не округляется ни до нуля, ни до целой единицы. 0,50 ₽ печаталось как «1 ₽» —
 * вдвое больше настоящего, а 0,01 ₽ как «0 ₽» — исчезало совсем. Это не выбор
 * разрядности, а потеря величины, и её не оправдывает никакая традиция.
 */
export function fmtMoney(n: number, currency = '₽'): string {
  const digits = isFinite(n) && n !== 0 && Math.abs(n) < 1 ? 2 : 0;
  return `${fmtNumber(n, digits)} ${currency}`.trim();
}

export function fmtPct(n: number, fractionDigits = 2): string {
  return `${fmtNumber(n, fractionDigits)}%`;
}

export type NumberLocale = 'ru' | 'uk' | 'en' | string;

/**
 * Разбор числа, введённого посетителем.
 *
 * Грамматика описана целиком в phase14/parser-grammar.md и здесь повторена
 * решениями, а не примерами. Смысл всей конструкции один: НИКОГДА не превращать
 * десятичную дробь в число в тысячу раз больше. Прежний разбор считал точку
 * перед ровно тремя цифрами разделителем разрядов, и «2.500» на боевом
 * калькуляторе квадрата давало ответ для 2500, а собственное String(18.015)
 * платформы при восстановлении из ссылки становилось 18 015.
 *
 * Отклонённый ввод — видимая ошибка, которую посетитель поправит. Молча
 * умноженный — неверный ответ, который выглядит верным. Поэтому в спорных
 * случаях разбор строже, а не догадливее.
 *
 * Локали: у ru и uk дробный разделитель — запятая, точка принимается как
 * запасной дробный, разряды только пробелом. У en дробный — точка, разряды —
 * запятая. Точечные разряды в ru никогда не были контрактом: Intl для ru-RU
 * группирует неразрывным пробелом и точку не выводит.
 */
export function parseLocalizedNumber(value: string | number, locale: NumberLocale = 'ru'): number | null {
  if (typeof value === 'number') return Number.isFinite(value) ? value : null;

  // Все виды пробелов — один и тот же разделитель разрядов.
  const spaced = value.trim().replace(/[\s\u00a0\u202f\u2009]+/g, ' ');
  const negative = spaced.startsWith('-');
  const body = /^[+-]/.test(spaced) ? spaced.slice(1) : spaced;
  if (!/^[\d., ]+$/.test(body) || !/\d/.test(body)) return null;

  // Пробел разделяет только разряды и обязан образовывать целые тройки:
  // «1 23» — это опечатка, а не число, и достраивать её до 123 нельзя.
  let compact = body;
  if (body.includes(' ')) {
    const firstSeparator = body.search(/[.,]/);
    const integer = firstSeparator === -1 ? body : body.slice(0, firstSeparator);
    const fraction = firstSeparator === -1 ? '' : body.slice(firstSeparator);
    if (fraction.includes(' ')) return null;
    if (!/^\d{1,3}( \d{3})+$/.test(integer)) return null;
    compact = integer.split(' ').join('') + fraction;
  }

  const dots = (compact.match(/\./g) ?? []).length;
  const commas = (compact.match(/,/g) ?? []).length;
  const groupSeparator = locale === 'en' ? ',' : null;
  const groupsValid = (text: string, separator: string): boolean =>
    new RegExp(`^\\d{1,3}(\\${separator}\\d{3})*$`).test(text);

  let normalized: string;
  if (dots > 0 && commas > 0) {
    // Оба разделителя сразу — случай однозначный: дробным может быть только
    // последний, второй обязан образовывать разряды.
    const decimal = compact.lastIndexOf(',') > compact.lastIndexOf('.') ? ',' : '.';
    const group = decimal === ',' ? '.' : ',';
    const parts = compact.split(decimal);
    if (parts.length !== 2 || !/^\d+$/.test(parts[1]) || !groupsValid(parts[0], group)) return null;
    normalized = parts[0].split(group).join('') + '.' + parts[1];
  } else if (dots + commas === 0) {
    if (!/^\d+$/.test(compact)) return null;
    normalized = compact;
  } else {
    const separator = dots > 0 ? '.' : ',';
    const count = dots > 0 ? dots : commas;
    if (count >= 2) {
      // Два одинаковых разделителя дробью быть не могут — значит разряды.
      if (!new RegExp(`^\\d{1,3}(\\${separator}\\d{3})+$`).test(compact)) return null;
      normalized = compact.split(separator).join('');
    } else {
      const parts = compact.split(separator);
      if (!/^\d+$/.test(parts[0]) || !/^\d+$/.test(parts[1])) return null;
      // Ровно один разделитель — единственное место, где решает локаль.
      // Разрядным он считается только там, где он разрядный по локали, и только
      // при целой тройке справа. Ведущий нуль тройку отменяет: «0,001» никто не
      // пишет как тысячу, и прочитать это как 1 значило бы ошибиться в тысячу раз.
      const grouped = groupSeparator !== null
        && separator === groupSeparator
        && /^\d{1,3}$/.test(parts[0])
        && /^\d{3}$/.test(parts[1])
        && !parts[0].startsWith('0');
      normalized = grouped ? parts[0] + parts[1] : `${parts[0]}.${parts[1]}`;
    }
  }

  if (!/^\d+(?:\.\d+)?$/.test(normalized)) return null;
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? (negative ? -parsed : parsed) : null;
}

export function toNumber(v: string | number | boolean | undefined, fallback = 0): number {
  if (typeof v === 'number') return v;
  if (typeof v === 'boolean') return v ? 1 : 0;
  if (!v) return fallback;
  return parseLocalizedNumber(String(v)) ?? fallback;
}

export function toStr(v: string | number | boolean | undefined, fallback = ''): string {
  if (v === undefined || v === null) return fallback;
  return String(v);
}

// Само правило живёт в lib/plural, чтобы клиентский слой локализации мог взять
// его, не притаскивая в общий чанк Intl-обёртки этого модуля. Реэкспорт
// оставлен ради раннеров, которые берут форматирование и склонение вместе.
export { pluralRu } from './plural';

export function fmtDuration(totalSeconds: number): string {
  if (!isFinite(totalSeconds) || totalSeconds < 0) return '—';
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = Math.round(totalSeconds % 60);
  const pad = (x: number) => String(x).padStart(2, '0');
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)}`;
}
