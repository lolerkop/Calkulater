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

export function normalizeSearchText(value: string): string {
  let text = value.toLowerCase().replace(/ё/g, 'е');
  for (const [pattern, replacement] of GERMAN_FOLDING) text = text.replace(pattern, replacement);
  return text.replace(/\s+/g, ' ').trim();
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
  return normalizeSearchText(
    [
      calculator.name,
      calculator.shortDescription,
      calculator.category,
      calculator.categoryName ?? '',
      calculator.isNew ? 'новый новые свежее' : '',
      categoryAliases[calculator.category],
      ...(calculator.keywords ?? []),
    ].join(' '),
  );
}

export function matchesCalculatorSearch(calculator: SearchableCalculator, query: string): boolean {
  const needles = queryNeedles(query);
  if (needles.length === 0) return true;

  const hay = calculatorSearchText(calculator);
  return needles.some((needle) => hay.includes(needle));
}
