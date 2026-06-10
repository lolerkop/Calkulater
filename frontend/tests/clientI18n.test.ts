import { describe, expect, it } from 'vitest';
import { localizedResultLabel, localizedResultText } from '../src/lib/clientI18n';

describe('calculator result localization', () => {
  it('uses Ukrainian result labels instead of the English fallback', () => {
    expect(localizedResultLabel('Ежемесячный платеж', 'uk')).toBe('Щомісячний платіж');
    expect(localizedResultLabel('Количество упаковок', 'uk')).toBe('Кількість упаковок');
  });

  it('keeps Ukrainian measurement units natural', () => {
    expect(localizedResultText('100 кг', 'uk')).toBe('100 кг');
    expect(localizedResultText('12 шт.', 'uk')).toBe('12 шт.');
    expect(localizedResultText('5:00/км', 'uk')).toBe('5:00/км');
  });

  it('localizes English units without changing letters inside words', () => {
    expect(localizedResultText('100 кг', 'en')).toBe('100 kg');
    expect(localizedResultText('5:00/км', 'en')).toBe('5:00/km');
    expect(localizedResultText('Молдавский лей', 'en')).toBe('Moldovan leu');
  });

  it('localizes common validation messages', () => {
    expect(localizedResultText('Введите положительные значения', 'en')).toBe('Enter positive values');
    expect(localizedResultText('Выберите начало и конец', 'uk')).toBe('Оберіть початкову та кінцеву дати');
  });

  it('localizes complete age phrases without leaving Russian suffixes', () => {
    expect(localizedResultText('36 лет, 5 месяцев, 9 дней', 'en')).toBe('36 years, 5 months, 9 days');
    expect(localizedResultText('36 лет, 5 месяцев, 9 дней', 'uk')).toBe('36 років, 5 місяців, 9 днів');
  });

  it('localizes standalone meter units and compound-interest table labels', () => {
    expect(localizedResultText('18,00 м', 'en')).toBe('18,00 m');
    expect(localizedResultLabel('Динамика по годам', 'en')).toBe('Year-by-year growth');
    expect(localizedResultLabel('Год', 'en')).toBe('Year');
    expect(localizedResultLabel('Капитал', 'en')).toBe('Balance');
  });
});
