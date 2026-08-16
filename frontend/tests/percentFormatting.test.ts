import { describe, expect, it } from 'vitest';
import { calculators } from '../src/data/calculators';
import { runners } from '../src/lib/runners';
import { buildInitialValues } from '../src/lib/shareLink';
import { localizeResult } from '../src/components/islands/calculator/resultLocalization';
import type { CalcResult } from '../src/lib/types';

// Проценты должны использовать тот же десятичный разделитель, что и остальные
// числа результата: запятую в ru/uk и точку в en. Раньше часть калькуляторов
// собирала их через toFixed и всегда получала точку.
function resultOf(id: string, overrides: Record<string, unknown> = {}): CalcResult {
  const calculator = calculators.find((item) => item.id === id)!;
  return runners[id]({ ...buildInitialValues(calculator.fields), ...overrides } as never);
}

const valueOf = (r: CalcResult, label: string) =>
  r.secondary.find((row) => row.label === label)?.value ?? '';

describe('percent formatting follows the locale', () => {
  it('uses a comma in RU', () => {
    expect(valueOf(resultOf('deposit-calculator'), 'Эффективная годовая ставка')).toBe('12,68%');
    expect(valueOf(resultOf('income-tax-calculator'), 'Эффективная ставка')).toBe('13,00%');
    expect(valueOf(resultOf('mortgage-calculator'), 'Первоначальный взнос')).toContain('(20,0%)');
    expect(valueOf(resultOf('discount-calculator'), 'Процент скидки')).toBe('20,00%');
  });

  it('uses a dot in EN', () => {
    const en = localizeResult(resultOf('deposit-calculator'), 'en');
    expect(valueOf(en, 'Effective annual rate')).toBe('12.68%');
  });

  it('uses a comma in UK, like the rest of the Ukrainian output', () => {
    const uk = localizeResult(resultOf('deposit-calculator'), 'uk');
    expect(valueOf(uk, 'Ефективна річна ставка')).toBe('12,68%');
  });

  it('leaves no percent value with a dot decimal in RU output', () => {
    const offenders: string[] = [];
    for (const calculator of calculators) {
      const run = runners[calculator.id];
      if (!run) continue;
      let raw: CalcResult;
      try { raw = run(buildInitialValues(calculator.fields) as never); } catch { continue; }
      for (const row of raw.secondary) {
        if (/\d+\.\d+\s*%/.test(row.value)) offenders.push(`${calculator.id}: ${row.label} = ${row.value}`);
      }
    }
    expect(offenders).toEqual([]);
  });
});
