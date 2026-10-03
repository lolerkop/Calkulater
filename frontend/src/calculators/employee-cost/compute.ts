import type { CalcFunction } from '../../lib/types';
import { number as readNumber, validOutput } from '../../lib/platform/scalarInputDisplay';
import { displayMoney } from '../../lib/platform/financeDisplay';
import { fmtNumber } from '../../lib/format';
import { formatStatistic } from '../../lib/platform/measurement';

export const compute: CalcFunction = (inputs) => {
  const gross = readNumber(inputs.gross);
  const taxPct = readNumber(inputs.taxPct);
  const overhead = readNumber(inputs.overhead);

  const fail = (message: string) => ({
    primary: { label: 'Полная стоимость сотрудника', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (gross === null || taxPct === null || overhead === null) return fail('Введите корректные числовые данные');

  if (!(gross > 0)) return fail('Оклад должен быть больше нуля');
  if (taxPct < 0 || taxPct > 200) return fail('Ставка взносов должна быть от нуля до двухсот процентов');
  if (overhead < 0) return fail('Накладные расходы не могут быть отрицательными');

  const tax = gross * (taxPct / 100);
  const total = gross + tax + overhead;
  const multiple = total / gross;
  if (![tax, total, multiple].every(value => validOutput(value)) || (taxPct > 0 && tax === 0)) return fail('Результат вне допустимого диапазона');
  const money = displayMoney;

  return {
    primary: { label: 'Полная стоимость сотрудника', value: money(total) },
    secondary: [
      { label: 'Взносы', value: money(tax) },
      { label: 'Оклад', value: money(gross) },
      { label: 'Накладные', value: money(overhead) },
      { label: 'Множитель к окладу', value: formatStatistic(multiple, fmtNumber) },
    ],
  };
};
