import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Возраст питомца в человеческих годах по ветеринарной таблице.
//
// Пересчёт нелинеен, и правило «умножить на семь» неверно именно в самом
// начале: за первый год животное проходит путь примерно до пятнадцати
// человеческих лет, за второй добавляет ещё около девяти, и только потом
// прибавка становится постоянной. У крупных собак эта постоянная прибавка
// заметно больше — они стареют быстрее мелких, и разница видна как раз
// в поздних годах, а не в щенячьих.
//
// Таблица маленькая и принадлежит калькулятору: общего загрузчика наборов
// данных здесь нет и не требуется.
const SPECIES: Record<string, { first: number; second: number; perYear: number }> = {
  cat: { first: 15, second: 9, perYear: 4 },
  'dog-small': { first: 15, second: 9, perYear: 4 },
  'dog-large': { first: 15, second: 9, perYear: 7 },
};

export const compute: CalcFunction = (inputs) => {
  const years = toNumber(inputs.years);
  const species = SPECIES[toStr(inputs.species, 'cat')];

  const fail = (message: string) => ({
    primary: { label: 'Возраст в человеческих годах', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!species) return fail('Выберите вид питомца из списка');
  if (!(years > 0)) return fail('Возраст должен быть больше нуля');

  const human = years <= 1
    ? species.first * years
    : years <= 2
      ? species.first + species.second * (years - 1)
      : species.first + species.second + species.perYear * (years - 2);
  const num = (value: number) => formatMeasure(value, fmtNumber);

  return {
    primary: { label: 'Возраст в человеческих годах', value: num(human) },
    secondary: [
      { label: 'Возраст питомца, лет', value: num(years) },
      { label: 'Прибавка за каждый следующий год', value: num(species.perYear) },
    ],
  };
};
