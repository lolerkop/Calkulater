import type { CalcFunction } from '../../lib/types';
import { add, ABOVE, BELOW, exact, INPUT, integer, magnitude, measure, MODE, mode, negative, nonzeroFinite, RANGE, ratio, read, shown, times, type Dyadic } from '../stats-descriptive/statisticsNumeric';

export const compute: CalcFunction = (inputs) => {
  const fail = (message: string) => ({ primary: { label: 'Вероятность', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  const selected = mode(inputs.mode, 'single', ['single', 'complement', 'independentBoth', 'independentEither']);
  if (!selected) return fail(MODE);
  let numerator: Dyadic, opposite: Dyadic, denominator: Dyadic;
  if (selected === 'single' || selected === 'complement') {
    const favourable = integer(selected === 'single' ? inputs.favourable : inputs.favourable2);
    const total = integer(selected === 'single' ? inputs.total : inputs.total2);
    if (![favourable, total].every(Number.isFinite)) return fail('Исходы должны быть целыми');
    if (!(total > 0)) return fail('Всего исходов должно быть больше нуля');
    if (favourable < 0) return fail('Благоприятных исходов не может быть меньше нуля');
    if (favourable > total) return fail('Благоприятных исходов не может быть больше общего числа');
    numerator = exact(selected === 'single' ? favourable : total - favourable);
    opposite = exact(selected === 'single' ? total - favourable : favourable); denominator = exact(total);
  } else {
    const first = read(selected === 'independentBoth' ? inputs.p1 : inputs.p3), second = read(selected === 'independentBoth' ? inputs.p2 : inputs.p4);
    if (![first, second].every(Number.isFinite)) return fail(INPUT);
    if (first < 0 || first > 1 || second < 0 || second > 1) return fail('Вероятность должна быть от 0 до 1');
    const intersection = times(exact(first), exact(second)), complement = times(add(exact(1), negative(exact(first))), add(exact(1), negative(exact(second))));
    numerator = selected === 'independentBoth' ? intersection : add(exact(first), exact(second), negative(intersection));
    opposite = selected === 'independentBoth' ? add(exact(1), negative(intersection)) : complement;
    denominator = exact(1);
  }
  const p = ratio(numerator, denominator);
  if (!nonzeroFinite(p, numerator)) return fail(RANGE);
  const oddsValue = shown(opposite, numerator, measure);
  const odds = !numerator.coefficient || !opposite.coefficient ? '—' : oddsValue === ABOVE || oddsValue === BELOW ? oddsValue : `${oddsValue} к 1`;
  return { primary: { label: 'Вероятность', value: measure(p) }, secondary: [
    { label: 'В процентах', value: `${shown(times(numerator, exact(100)), denominator, measure)}%` },
    { label: 'Противоположное событие', value: shown(opposite, denominator, measure) }, { label: 'Шансы', value: odds },
  ] };
};
