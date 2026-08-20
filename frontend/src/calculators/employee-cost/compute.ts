import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatStatistic } from '../../lib/platform/measurement';

// Полная стоимость сотрудника для бизнеса.
//
//   взносы = оклад × ставка / 100
//   итого  = оклад + взносы + накладные
//
// Оклад — это то, что видит сотрудник; бизнес платит заметно больше. Взносы
// начисляются СВЕРХУ оклада, а не удерживаются из него, поэтому ставка 30 %
// добавляет треть, а не отнимает. Накладные — рабочее место, техника,
// программы, обучение — обычно не привязаны к окладу и потому вводятся суммой.
//
// Множитель к окладу стоит рядом ради одного числа, которое стоит помнить:
// при 30 % взносов и 25 000 накладных сотрудник с окладом 180 000 обходится
// в 1,44 оклада, и планировать наём по одному окладу значит ошибиться
// почти на половину.
export const compute: CalcFunction = (inputs) => {
  const gross = toNumber(inputs.gross);
  const taxPct = toNumber(inputs.taxPct);
  const overhead = toNumber(inputs.overhead);

  const fail = (message: string) => ({
    primary: { label: 'Полная стоимость сотрудника', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(gross > 0)) return fail('Оклад должен быть больше нуля');
  if (taxPct < 0) return fail('Ставка взносов не может быть отрицательной');
  if (overhead < 0) return fail('Накладные расходы не могут быть отрицательными');

  const tax = (gross * taxPct) / 100;
  const total = gross + tax + overhead;
  const money = (value: number) => `${fmtNumber(value, 2)} ₽`;

  return {
    primary: { label: 'Полная стоимость сотрудника', value: money(total) },
    secondary: [
      { label: 'Взносы', value: money(tax) },
      { label: 'Оклад', value: money(gross) },
      { label: 'Накладные', value: money(overhead) },
      { label: 'Множитель к окладу', value: formatStatistic(total / gross, fmtNumber) },
    ],
  };
};
