import type { CalculatorDef, CategoryId } from './types';
import { categorySearchAliases } from '../categories/aliases.generated';

export type SearchableCalculator = Pick<
  CalculatorDef,
  'id' | 'name' | 'shortDescription' | 'fullPath' | 'keywords' | 'category' | 'popularity' | 'isNew'
> & {
  categoryName?: string;
};

// Псевдонимы категорий выводятся из модулей категорий: девятая категория
// принесёт свои слова сама, и правка этого файла не потребуется.
//
// Импортируется лёгкий манифест, а не полный: поиск исполняется в браузере, и
// через общий манифест туда уехали бы копирайт, вопросы, подсказки и оговорки
// всех категорий на семнадцати локалях — замыкание маршрута выросло бы с 88,9
// до 109 КиБ. Это поймал бюджет производительности.
export const categoryAliases: Record<CategoryId, string> = categorySearchAliases;

export const queryAliases: Record<string, string[]> = {
  зарплата: ['ндфл', 'налог', 'доход'],
  налог: ['ндфл', 'ндс'],
  налоги: ['ндфл', 'ндс'],
  доллар: ['usd', 'валюта'],
  доллары: ['usd', 'валюта'],
  евро: ['eur', 'валюта'],
  лей: ['mdl', 'валюта'],
  леи: ['mdl', 'валюта'],
  похудение: ['калории', 'имт', 'bmi'],
  вес: ['имт', 'bmi', 'калории'],
  ремонт: ['плитка', 'обои', 'краска', 'ламинат'],
  стройка: ['плитка', 'обои', 'краска', 'ламинат'],
  деньрождения: ['возраст'],
  др: ['возраст'],
  новый: ['новый'],
  новые: ['новый'],
  свежее: ['новый'],
  // Испанские слова, которых нет в названиях: за ними стоят настоящие
  // калькуляторы, а не набор ключей ради ключей.
  gasolina: ['combustible'],
  luz: ['facturas', 'electricidad'],
  recibo: ['facturas'],
  adelgazar: ['imc'],
  nota: ['media'],
};

// Немецкие умляуты и эстцет разворачиваются в тот вид, которым их набирают без
// немецкой раскладки: ä → ae, ö → oe, ü → ue, ß → ss. Приведение одно и то же и
// для запроса, и для текста калькулятора, поэтому «Waehrung» находит
// «Währungsrechner», а «Währung» продолжает находить его же. До этого немецкая
// подборка на «Waehrung» отвечала «Найдено: 0».
const GERMAN_FOLDING: Array<[RegExp, string]> = [
  [/ä/g, 'ae'],
  [/ö/g, 'oe'],
  [/ü/g, 'ue'],
  [/ß/g, 'ss'],
];

// Испанские ударения снимаются: их набирают редко, а без них «prestamo» должен
// находить «préstamo» и «interes» — «interés». Приведение одно и то же для
// запроса и для текста калькулятора, поэтому написание с ударением продолжает
// находить то же самое.
//
// «Ñ» НЕ сворачивается, и это не упущение: «año» и «ano» — разные слова, и
// склеивание их дало бы поиск, который отвечает не на то, о чём спросили.
// Немецкое правило выше не трогается: «ü» уже разворачивается в «ue», что для
// испанского «pingüino» тоже работает — приведение симметрично.
const SPANISH_FOLDING: Array<[RegExp, string]> = [
  [/á/g, 'a'],
  [/é/g, 'e'],
  [/í/g, 'i'],
  [/ó/g, 'o'],
  [/ú/g, 'u'],
];

export function normalizeSearchText(value: string): string {
  let text = value.toLowerCase().replace(/ё/g, 'е');
  for (const [pattern, replacement] of GERMAN_FOLDING) text = text.replace(pattern, replacement);
  for (const [pattern, replacement] of SPANISH_FOLDING) text = text.replace(pattern, replacement);
  return text.replace(/\s+/g, ' ').trim();
}

// Стог для поиска. Собирается одним местом, потому что путей два: разметочный
// в подборке и полный индекс. Пока правило диерезиса жило только в одном из
// них, «Würfel» находился одним путём и не находился другим.
export function searchHaystack(raw: string): string {
  const normalized = normalizeSearchText(raw);
  // Диерезис читается двумя языками по-разному: немецкое «ü» набирают как «ue»,
  // испанское — просто как «u». Одно правило обслужить оба не может, поэтому
  // стог несёт оба написания, а немецкое приведение остаётся нетронутым.
  if (!raw.includes('ü')) return normalized;
  return `${normalized} ${normalizeSearchText(raw.replace(/ü/g, 'u'))}`;
}

export function queryNeedles(query: string): string[] {
  const normalized = normalizeSearchText(query);
  if (!normalized) return [];

  const compact = normalized.replace(/\s+/g, '');
  const aliases = queryAliases[normalized] ?? queryAliases[compact] ?? [];
  const needles = [normalized, compact, ...aliases.map(normalizeSearchText)];

  return Array.from(new Set(needles.filter(Boolean)));
}

export function calculatorSearchText(calculator: SearchableCalculator): string {
  const raw = [
    calculator.name,
    calculator.shortDescription,
    calculator.category,
    calculator.categoryName ?? '',
    calculator.isNew ? 'новый новые свежее' : '',
    categoryAliases[calculator.category],
    ...(calculator.keywords ?? []),
  ].join(' ');
  return searchHaystack(raw);
}

export function matchesCalculatorSearch(calculator: SearchableCalculator, query: string): boolean {
  const needles = queryNeedles(query);
  if (needles.length === 0) return true;

  const hay = calculatorSearchText(calculator);
  return needles.some((needle) => hay.includes(needle));
}
