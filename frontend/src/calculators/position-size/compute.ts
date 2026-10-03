import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { number as toNumber, validOutput } from '../../lib/platform/scalarInputDisplay';
import { formatMeasure } from '../../lib/platform/measurement';

// Размер позиции по допустимому риску.
//
// Объём выводится НЕ из суммы, которую хочется вложить, а из суммы, которую
// допустимо потерять: сколько денег теряется на одной единице до стоп-приказа,
// столько раз риск в них и укладывается. Поэтому стоимость позиции получается
// побочно и вполне может превысить депозит — это признак слишком близкого
// стопа, а не ошибка расчёта, и доля депозита выводится отдельной строкой
// именно затем, чтобы это было видно.
//
// Дробный объём показан основным результатом. Если инструмент требует целых
// единиц, отдельная строка округляет вниз; допустимый шаг лота не проверяется.

const money = (value: number) => `${fmtNumber(value, 2)} ₽`;

export const compute: CalcFunction = (inputs) => {
  const deposit = toNumber(inputs.deposit);
  const riskPct = toNumber(inputs.riskPct);
  const entry = toNumber(inputs.entry);
  const stop = toNumber(inputs.stop);

  const fail = (message: string) => ({
    primary: { label: 'Размер позиции', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (deposit === null || riskPct === null || entry === null || stop === null) return fail('Введите корректные числовые данные');

  if (!(deposit > 0)) return fail('Депозит должен быть больше нуля');
  if (!(riskPct > 0)) return fail('Допустимый риск должен быть больше нуля');
  if (riskPct > 100) return fail('Допустимый риск не может превышать сто процентов');
  if (!(entry > 0)) return fail('Цена входа должна быть больше нуля');
  if (stop < 0) return fail('Цена стопа не может быть отрицательной');

  const riskPerUnit = Math.abs(entry - stop);
  if (!(riskPerUnit > 0)) return fail('Стоп не может совпадать с ценой входа');

  const riskAmount = deposit * (riskPct / 100);
  const quantity = riskAmount / riskPerUnit;
  const positionValue = quantity * entry;
  const share = positionValue / deposit * 100;
  if (![riskAmount, quantity, positionValue, share].every(v => validOutput(v, true)) || !Number.isSafeInteger(Math.floor(quantity))) return fail('Результат вне допустимого диапазона');

  return {
    primary: { label: 'Размер позиции', value: `${formatMeasure(quantity, fmtNumber)} шт` },
    secondary: [
      { label: 'Целых единиц', value: `${fmtNumber(Math.floor(quantity), 0)} шт` },
      { label: 'Сумма риска', value: money(riskAmount) },
      { label: 'Риск на единицу', value: money(riskPerUnit) },
      { label: 'Стоимость позиции', value: money(positionValue) },
      {
        label: 'Доля депозита',
        value: `${fmtNumber(share, 2)}%`,
        accent: (positionValue > deposit ? 'red' : 'neutral') as 'red' | 'neutral',
      },
    ],
  };
};
