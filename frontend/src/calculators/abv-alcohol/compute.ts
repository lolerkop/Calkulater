import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure, formatStatistic } from '../../lib/platform/measurement';

// Крепость по плотности: ABV = (начальная − конечная) · коэффициент.
//
// Дрожжи превращают сахар в спирт, и плотность падает: сахар тяжелее воды,
// спирт легче. Разность плотностей и есть мера того, сколько сахара сброжено,
// а коэффициент переводит её в проценты спирта по объёму.
//
// Коэффициент вынесен в поле: 131,25 — самая распространённая величина, но
// у разных методик встречаются значения от 129 до 135, и подставлять их молча
// значило бы прятать выбор.
//
// Начальная плотность обязана быть больше единицы: сусло плотнее воды, иначе
// сбраживать нечего и степень сбраживания не определена.
export const compute: CalcFunction = (inputs) => {
  const og = toNumber(inputs.og);
  const fg = toNumber(inputs.fg);
  const factor = toNumber(inputs.factor);
  const fail = (message: string) => ({
    primary: { label: 'Крепость', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(og > 1)) return fail('Начальная плотность должна быть больше единицы');
  if (!(fg > 0)) return fail('Конечная плотность должна быть больше нуля');
  if (fg > og) return fail('Конечная плотность не может быть выше начальной');

  const drop = og - fg;

  return {
    primary: { label: 'Крепость', value: `${formatStatistic(drop * factor, fmtNumber)} %` },
    secondary: [
      { label: 'Степень сбраживания', value: `${formatStatistic((drop / (og - 1)) * 100, fmtNumber)} %` },
      { label: 'Падение плотности', value: formatMeasure(drop, fmtNumber) },
      { label: 'Начальная плотность', value: formatMeasure(og, fmtNumber) },
      { label: 'Конечная плотность', value: formatMeasure(fg, fmtNumber) },
    ],
  };
};
