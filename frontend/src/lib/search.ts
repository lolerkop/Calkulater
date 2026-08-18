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

export function normalizeSearchText(value: string): string {
  return value.toLowerCase().replace(/ё/g, 'е').replace(/\s+/g, ' ').trim();
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
