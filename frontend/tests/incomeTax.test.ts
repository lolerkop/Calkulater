import { describe, it, expect } from 'vitest';
import { calcIncomeTax } from '../src/lib/calculators/incomeTax';
import { calculators } from '../src/data/calculators';

// Хелпер: нормализация любых пробелов (Intl использует NBSP / NNBSP)
const norm = (s: string) => s.replace(/\s+/g, ' ');

// НДФЛ 2025: прогрессивная шкала
// 13% до 2,4 млн / 15% до 5 млн / 18% до 20 млн / 20% до 50 млн / 22% свыше

describe('incomeTax: прогрессивная шкала (годовой расчёт)', () => {
  it('доход 1 000 000 ₽ облагается по 13% (нижняя ставка)', () => {
    const r = calcIncomeTax({
      amount: 1_000_000,
      period: 'year',
      mode: 'progressive',
      direction: 'gross',
    });
    // 1_000_000 * 13% = 130 000
    expect(norm(r.primary.value)).toContain('130 000');
    const eff = r.secondary.find((s) => s.label === 'Эффективная ставка');
    expect(eff?.value).toMatch(/13[.,]00%/);
  });

  it('доход 5 000 000 ₽ применяет две ступени (13% и 15%)', () => {
    const r = calcIncomeTax({
      amount: 5_000_000,
      period: 'year',
      mode: 'progressive',
      direction: 'gross',
    });
    // 2_400_000 * 13% + 2_600_000 * 15% = 312 000 + 390 000 = 702 000
    expect(norm(r.primary.value)).toContain('702 000');
  });

  it('доход 60 000 000 ₽ задействует все 5 ступеней', () => {
    const r = calcIncomeTax({
      amount: 60_000_000,
      period: 'year',
      mode: 'progressive',
      direction: 'gross',
    });
    // 312_000 + 390_000 + 2_700_000 + 6_000_000 + 2_200_000 = 11_602_000
    expect(norm(r.primary.value)).toContain('11 602 000');
  });
});

describe('incomeTax: фиксированная ставка', () => {
  it('фиксированная 13% от месячного дохода 100 000 = 13 000', () => {
    const r = calcIncomeTax({
      amount: 100_000,
      period: 'month',
      mode: 'fixed',
      rate: 13,
      direction: 'gross',
    });
    expect(norm(r.primary.value)).toContain('13 000');
    const net = r.secondary.find((s) => s.label === 'На руки (после налога)');
    expect(norm(net?.value || '')).toContain('87 000');
  });

  it('обратный расчёт: на руки 87 000 при 13% → начислено 100 000', () => {
    const r = calcIncomeTax({
      amount: 87_000,
      period: 'month',
      mode: 'fixed',
      rate: 13,
      direction: 'net',
    });
    const gross = r.secondary.find((s) => s.label === 'Начислено (до налога)');
    expect(norm(gross?.value || '')).toContain('100 000');
  });

  it('ставка нерезидента 30% от 50 000 = 15 000', () => {
    const r = calcIncomeTax({
      amount: 50_000,
      period: 'month',
      mode: 'fixed',
      rate: 30,
      direction: 'gross',
    });
    expect(norm(r.primary.value)).toContain('15 000');
  });

  it('обратный расчёт учитывает вычет', () => {
    const r = calcIncomeTax({
      amount: 90_000,
      period: 'month',
      mode: 'fixed',
      rate: 13,
      direction: 'net',
      deductions: 10_000,
    });
    const gross = r.secondary.find((s) => s.label === 'Начислено (до налога)');
    expect(norm(gross?.value || '')).toContain('101 954');
  });
});

describe('incomeTax: расчёт с начала года', () => {
  it('обратный расчёт использует текущую ступень прогрессивной шкалы', () => {
    const r = calcIncomeTax({
      amount: 85_000,
      period: 'month',
      mode: 'progressive',
      direction: 'net',
      incomeBeforePeriod: 3_000_000,
    });
    const gross = r.secondary.find((s) => s.label === 'Начислено (до налога)');
    expect(norm(gross?.value || '')).toContain('100 000');
    expect(norm(r.primary.value)).toContain('15 000');
  });
});

describe('incomeTax: ошибки ввода', () => {
  it('нулевая сумма возвращает прочерк', () => {
    const r = calcIncomeTax({ amount: 0 });
    expect(r.primary.value).toBe('—');
  });
});

// Содержимое страницы описывает поведение калькулятора, а не отдельную
// налоговую норму: поле «Налоговые вычеты за период» реально уменьшает базу,
// поэтому FAQ не должен утверждать обратное. Ответ FAQ уходит и в FAQPage
// JSON-LD, так что расхождение видно не только читателю.
describe('incomeTax: контент о вычетах соответствует поведению', () => {
  const definition = calculators.find((item) => item.id === 'income-tax-calculator')!;
  const deductionsAnswer = definition.faq.find((item) => /вычет/i.test(item.q))?.a ?? '';

  it('поле вычетов объявлено в калькуляторе', () => {
    const field = definition.fields.find((item) => item.name === 'deductions');
    expect(field, 'поле deductions').toBeDefined();
    expect(field!.label).toContain('вычет');
  });

  it('вычет уменьшает налог в прогрессивном режиме', () => {
    const base = { amount: 100_000, period: 'month', mode: 'progressive', direction: 'gross' };
    const without = calcIncomeTax(base);
    const with20k = calcIncomeTax({ ...base, deductions: 20_000 });
    expect(norm(without.primary.value)).toContain('13 000');
    expect(norm(with20k.primary.value)).toContain('10 400');
  });

  it('вычет уменьшает налог в режиме фиксированной ставки', () => {
    const base = { amount: 100_000, period: 'month', mode: 'fixed', rate: 13, direction: 'gross' };
    expect(norm(calcIncomeTax(base).primary.value)).toContain('13 000');
    expect(norm(calcIncomeTax({ ...base, deductions: 20_000 }).primary.value)).toContain('10 400');
  });

  it('учтённый вычет показывается отдельной строкой результата', () => {
    const r = calcIncomeTax({ amount: 100_000, period: 'month', mode: 'progressive', direction: 'gross', deductions: 20_000 });
    const row = r.secondary.find((s) => s.label === 'Учтённые вычеты');
    expect(row, 'строка «Учтённые вычеты»').toBeDefined();
    expect(norm(row!.value)).toContain('20 000');
  });

  it('FAQ не отрицает учёт вычетов', () => {
    expect(deductionsAnswer, 'ответ FAQ про вычеты').not.toBe('');
    expect(deductionsAnswer).not.toMatch(/^Нет[,.]/);
    expect(deductionsAnswer, 'FAQ должен ссылаться на поле ввода').toMatch(/Налоговые вычеты за период/);
  });
});
