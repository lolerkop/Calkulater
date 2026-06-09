import type { CalculatorDef, CategoryId } from './types';

export type SearchableCalculator = Pick<
  CalculatorDef,
  'id' | 'name' | 'shortDescription' | 'fullPath' | 'keywords' | 'category' | 'popularity' | 'isNew'
> & {
  categoryName?: string;
};

export const categoryAliases: Record<CategoryId, string> = {
  finance:
    'финансы деньги кредит ипотека вклад депозит налог ндфл ндс проценты скидка зарплата покупка',
  currency:
    'валюты курс обмен доллар евро лей mdl usd eur конвертер перевод',
  sport:
    'спорт тело здоровье вес похудение питание калории бжу имт bmi бег темп тренировка сила',
  building:
    'ремонт строительство материалы плитка обои краска ламинат квартира комната стены пол',
  'date-time':
    'даты время возраст день рождения рабочие дни календарь срок отпуск дедлайн',
};

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
