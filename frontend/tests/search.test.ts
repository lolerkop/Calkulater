import { describe, expect, it } from 'vitest';
import { calculators } from '../src/data/calculators';
import { categories } from '../src/data/categories';
import {
  matchesCalculatorSearch,
  normalizeSearchText,
  queryNeedles,
  type SearchableCalculator,
} from '../src/lib/search';

const searchableCalculators: SearchableCalculator[] = calculators.map((calculator) => {
  const category = categories.find((item) => item.id === calculator.category);

  return {
    id: calculator.id,
    name: calculator.name,
    shortDescription: calculator.shortDescription,
    fullPath: calculator.fullPath,
    keywords: calculator.keywords,
    category: calculator.category,
    categoryName: category?.name,
    popularity: calculator.popularity,
    isNew: calculator.isNew,
  };
});

function matchingNames(query: string): string[] {
  return searchableCalculators
    .filter((calculator) => matchesCalculatorSearch(calculator, query))
    .map((calculator) => calculator.name);
}

describe('calculator search helpers', () => {
  it('normalizes case, spaces, and letter ё', () => {
    expect(normalizeSearchText('  День   Рождения  ')).toBe('день рождения');
    expect(normalizeSearchText('Всё о процентах')).toBe('все о процентах');
    // Немецкие умляуты сворачиваются так, как их набирают без немецкой
    // раскладки. Приведение одно и то же для запроса и для текста, поэтому
    // «Waehrung» и «Währung» встречаются в одной точке.
    expect(normalizeSearchText('Währungsrechner')).toBe('waehrungsrechner');
    expect(normalizeSearchText('Waehrungsrechner')).toBe('waehrungsrechner');
    expect(normalizeSearchText('Größe')).toBe('groesse');
    expect(normalizeSearchText('Grösse')).toBe('groesse');
    expect(normalizeSearchText('Öl Übersicht Ärger')).toBe('oel uebersicht aerger');
  });

  it('expands common user aliases', () => {
    expect(queryNeedles('зарплата')).toEqual(expect.arrayContaining(['ндфл', 'налог']));
    expect(queryNeedles('ремонт')).toEqual(
      expect.arrayContaining(['плитка', 'обои', 'краска', 'ламинат']),
    );
    expect(queryNeedles('похудение')).toEqual(expect.arrayContaining(['калории', 'имт', 'bmi']));
    expect(queryNeedles('новые')).toEqual(expect.arrayContaining(['новый']));
  });

  it('finds new finance calculators by natural queries', () => {
    expect(matchingNames('зарплата').join(' ')).toContain('НДФЛ');
    expect(matchingNames('налог').join(' ')).toContain('НДС');
    expect(matchingNames('скидка').join(' ')).toContain('скид');
    expect(matchingNames('проценты').join(' ')).toContain('процент');
  });

  it('finds calculators through category aliases', () => {
    expect(matchingNames('ремонт').length).toBeGreaterThanOrEqual(4);
    expect(matchingNames('похудение').join(' ')).toMatch(/ИМТ|калор/i);
    expect(matchingNames('доллар').join(' ')).toMatch(/валют|USD|EUR/i);
  });

  it('finds calculators marked as new', () => {
    // Проверяем контракт, а не список имён: набор помеченных новыми меняется
    // с каждой волной выпуска, и вписанные сюда названия устаревают молча.
    // Запрос «новые» обязан возвращать ровно тех, у кого стоит признак.
    const найденные = searchableCalculators.filter(
      (calculator) => matchesCalculatorSearch(calculator, 'новые'),
    );
    const помеченные = searchableCalculators.filter((calculator) => calculator.isNew);

    expect(помеченные.length).toBeGreaterThan(0);
    // Именно включение, а не равенство: тот же запрос законно ловит и текстовые
    // совпадения — «новый клиент» у CAC, «силиконовый» у герметика. Важно, что
    // ни один помеченный калькулятор из выдачи не выпадает.
    const идентификаторы = new Set(найденные.map((calculator) => calculator.id));
    expect(помеченные.filter((calculator) => !идентификаторы.has(calculator.id))).toEqual([]);
  });
});
