import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';

// Оплата за месяц с учётом сверхурочных часов.
//
//   обычные      = ставка × обычные часы
//   сверхурочные = ставка × коэффициент × сверхурочные часы
//   средняя      = (обычные + сверхурочные) / все часы
//
// Средняя ставка за час стоит рядом не для полноты: именно она показывает,
// сколько на самом деле стоит час при выбранном коэффициенте. Четырнадцать
// часов сверхурочных при коэффициенте полтора поднимают среднюю ставку
// заметно меньше, чем кажется по самому коэффициенту, потому что делится
// он на все отработанные часы, а не только на переработанные.
//
// Коэффициент меньше единицы отклоняется: сверхурочный час не может стоить
// дешевле обычного, и такое значение означает ошибку ввода.
export const compute: CalcFunction = (inputs) => {
  const rate = toNumber(inputs.rate);
  const normalHours = toNumber(inputs.normalHours);
  const overtimeHours = toNumber(inputs.overtimeHours);
  const multiplier = toNumber(inputs.multiplier);

  const fail = (message: string) => ({
    primary: { label: 'Всего к оплате', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(rate > 0)) return fail('Ставка за час должна быть больше нуля');
  if (normalHours < 0 || overtimeHours < 0) return fail('Часы не могут быть отрицательными');
  if (!(multiplier >= 1)) return fail('Коэффициент сверхурочных не может быть меньше единицы');

  const base = rate * normalHours;
  const overtime = rate * multiplier * overtimeHours;
  const hours = normalHours + overtimeHours;
  const money = (value: number) => `${fmtNumber(value, 2)} ₽`;

  return {
    primary: { label: 'Всего к оплате', value: money(base + overtime) },
    secondary: [
      { label: 'Оплата обычных часов', value: money(base) },
      { label: 'Оплата сверхурочных', value: money(overtime), accent: overtime > 0 ? 'green' : undefined },
      { label: 'Средняя ставка за час', value: money(hours > 0 ? (base + overtime) / hours : 0) },
    ],
  };
};
