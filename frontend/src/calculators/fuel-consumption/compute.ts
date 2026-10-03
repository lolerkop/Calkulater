import type { CalcFunction } from '../../lib/types';
import { finite, INPUT, mode, MODE, positive, quotient, RANGE, read, scalar } from '../engine-displacement/automotiveNumeric';
export const compute: CalcFunction = inputs => {
  const selected = mode(inputs.mode, 'measure', ['measure', 'kml', 'need']);
  const fail = (message: string) => ({ primary: { label: 'Расход', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (!selected) return fail(MODE);
  const distance = read(inputs.distance), amount = read(selected === 'need' ? inputs.consumption : inputs.litres);
  if (!finite(distance, amount)) return fail(INPUT);
  if (!(distance > 0)) return fail('Пробег должен быть больше нуля');
  if (!(amount > 0)) return fail(selected === 'need' ? 'Расход должен быть больше нуля' : 'Количество литров должно быть больше нуля');
  if (selected === 'need') {
    const needed = quotient([distance, amount], [100]), kml = quotient([100], [amount]);
    if (!positive(needed, kml)) return fail(RANGE);
    return { primary: { label: 'Нужно топлива', value: `${scalar(needed)} л` }, secondary: [
      { label: 'Расход', value: `${scalar(amount)} л/100 км` }, { label: 'Пробег', value: `${scalar(distance, 0)} км` }, { label: 'Километров на литр', value: `${scalar(kml)} км/л` },
    ] };
  }
  const perHundred = quotient([amount, 100], [distance]), kml = quotient([distance], [amount]), perThousand = quotient([amount, 1000], [distance]);
  if (!positive(perHundred, kml, perThousand)) return fail(RANGE);
  return { primary: { label: 'Расход', value: selected === 'kml' ? `${scalar(kml)} км/л` : `${scalar(perHundred)} л/100 км` }, secondary: [
    { label: 'Литров на 100 км', value: `${scalar(perHundred)} л/100 км` }, { label: 'Километров на литр', value: `${scalar(kml)} км/л` }, { label: 'Расход на 1000 км', value: `${scalar(perThousand)} л` },
  ] };
};
