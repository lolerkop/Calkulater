import { choice } from '../../lib/platform/financeWave14Input';
import { number as toNumber, validOutput } from '../../lib/platform/scalarInputDisplay';
import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Illustrative piecewise age scale; coefficients are calculator-owned, not a validated veterinary chart.
const SPECIES: Record<string, { first: number; second: number; perYear: number }> = {
  cat: { first: 15, second: 9, perYear: 4 },
  'dog-small': { first: 15, second: 9, perYear: 4 },
  'dog-large': { first: 15, second: 9, perYear: 7 },
};

export const compute: CalcFunction = (inputs) => {
  const years = toNumber(inputs.years);
  const kind = choice(inputs.species, ['cat', 'dog-small', 'dog-large'] as const, 'cat');
  const species = kind === null ? null : SPECIES[kind];

  const fail = (message: string) => ({
    primary: { label: 'Возраст в человеческих годах', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!species) return fail('Выберите вид питомца из списка');
  if (years === null) return fail('Введите корректные числовые данные');
  if (!(years > 0)) return fail('Возраст должен быть больше нуля');

  const human = years <= 1
    ? species.first * years
    : years <= 2
      ? species.first + species.second * (years - 1)
      : species.first + species.second + species.perYear * (years - 2);
  if (!validOutput(human, true)) return fail('Результат вне допустимого диапазона');
  const num = (value: number) => formatMeasure(value, fmtNumber);

  return {
    note: 'Условная шкала 15/9/4 или 15/9/7, а не измерение здоровья, биологического возраста или срока жизни. Прибавка в последней строке относится к годам после второго.',
    primary: { label: 'Возраст в человеческих годах', value: num(human) },
    secondary: [
      { label: 'Возраст питомца, лет', value: num(years) },
      { label: 'Прибавка за каждый следующий год', value: num(species.perYear) },
    ],
  };
};
