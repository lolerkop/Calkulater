import type { CalcFunction } from '../../lib/types';
import { add, exact, evaluated, finite, INPUT, integer, INTEGER, negative, positive, RANGE, read, scalar, times, type Dyadic } from '../engine-displacement/automotiveNumeric';
export const compute: CalcFunction = inputs => {
  const price = read(inputs.price), years = integer(inputs.years), ratePct = read(inputs.ratePct), firstYearPct = read(inputs.firstYearPct);
  const fail = (message: string) => ({ primary: { label: 'Стоимость через срок', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (!finite(price, ratePct, firstYearPct)) return fail(INPUT);
  if (!(price > 0)) return fail('Цена покупки должна быть больше нуля');
  if (!Number.isSafeInteger(years) || years < 0 || years > 30) return fail(INTEGER);
  if (!(ratePct >= 0 && ratePct < 100)) return fail('Годовая ставка должна быть от 0 включительно до 100 % исключительно');
  if (!(firstYearPct >= 0 && firstYearPct < 100)) return fail('Потеря за первый год должна быть от 0 включительно до 100 % исключительно');
  // Whole years 0..30 match the public field contract. The complete recurrence
  // is rounded once, so a small positive rate cannot silently become no loss.
  const denominator: Dyadic = { coefficient: 100n ** BigInt(years), exponent: 0 };
  let valueExact = exact(price);
  if (years >= 1) valueExact = times(valueExact, add(exact(100), negative(exact(firstYearPct))));
  const laterFactor = add(exact(100), negative(exact(ratePct)));
  for (let year = 1; year < years; year++) valueExact = times(valueExact, laterFactor);
  const lossExact = add(times(exact(price), denominator), negative(valueExact));
  const value = evaluated(valueExact, denominator), lost = evaluated(lossExact, denominator);
  const lostPct = evaluated(times(lossExact, exact(100)), times(denominator, exact(price)));
  if (!positive(value) || !finite(lost, lostPct)) return fail(RANGE);
  const money = (amount: number) => `${scalar(amount)} ₽`;
  return { primary: { label: 'Стоимость через срок', value: money(value) }, secondary: [
    { label: 'Потеряно в деньгах', value: money(lost), accent: 'red' }, { label: 'Потеряно, доля', value: `${scalar(lostPct)}%` }, { label: 'Цена покупки', value: money(price) },
  ] };
};
