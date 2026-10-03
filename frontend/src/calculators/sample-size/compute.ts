import type { CalcFunction } from '../../lib/types';
import { add, ceiling, exact, exactInt, fraction, INPUT, integer, measure, MODE, mode, negative, read, shown, stat, times } from '../stats-descriptive/statisticsNumeric';

// Historical critical values retained. Ceiling is exact for their binary64
// values, without a tolerance that can silently remove a required respondent.
const Z: Record<string, number> = { '90': 1.6448536269514722, '95': 1.959963984540054, '99': 2.5758293035489004 };
export const compute: CalcFunction = (inputs) => {
  const fail = (message: string) => ({ primary: { label: 'Размер выборки', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  const confidence = mode(inputs.confidence, '95', ['90', '95', '99']);
  if (!confidence) return fail('Выберите доверительную вероятность из списка');
  const margin = read(inputs.margin), proportion = read(inputs.proportion), population = integer(inputs.population);
  if (![margin, proportion].every(Number.isFinite)) return fail(INPUT);
  if (!(margin > 0)) return fail('Предельная ошибка должна быть больше нуля');
  if (!(proportion >= 0 && proportion <= 100)) return fail('Ожидаемая доля задаётся от 0 до 100 процентов');
  if (!Number.isFinite(population)) return fail('Объём совокупности должен быть целым неотрицательным числом');
  if (population < 0) return fail('Объём совокупности не может быть отрицательным');
  const z = Z[confidence];
  const top = times(exact(z), exact(z), exact(proportion), add(exact(100), negative(exact(proportion))));
  const bottom = times(exact(margin), exact(margin));
  const uncorrected = ceiling(top, bottom);
  const n = !top.coefficient ? 0n : population > 0
    ? ceiling(times(exact(population), top), add(times(exact(population - 1), bottom), top))
    : uncorrected;
  return { primary: { label: 'Размер выборки', value: `${exactInt(n)} чел` }, secondary: [
    { label: 'Без поправки на совокупность', value: `${exactInt(uncorrected)} чел` },
    { label: 'Критическое значение z', value: measure(z) }, { label: 'Предельная ошибка', value: `${stat(margin)} %` },
    { label: 'Доля от совокупности', value: population > 0 ? `${shown({ coefficient: 100n * n, exponent: 0 }, exact(population))} %` : '—' },
  ] };
};
