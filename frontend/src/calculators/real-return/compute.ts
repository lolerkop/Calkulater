import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';

// Реальная доходность с поправкой на инфляцию.
//
// Точная величина берётся из уравнения Фишера, а не из разности ставок:
// при 12 % и 7 % разность даёт 5 %, а честный ответ — 4,67 %. Расхождение
// растёт вместе с инфляцией, и на двузначной оно перестаёт быть мелочью.
// Обе величины показаны рядом именно поэтому.
//
// Отрицательная реальная доходность — нормальный результат, а не ошибка:
// так выглядит вклад, отстающий от инфляции.
export const compute: CalcFunction = (inputs) => {
  const nominal = toNumber(inputs.nominal);
  const inflation = toNumber(inputs.inflation);
  const amount = toNumber(inputs.amount);
  const years = Math.round(toNumber(inputs.years));

  if (inflation <= -100) {
    return {
      primary: { label: 'Реальная доходность', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Инфляция должна быть больше минус ста процентов', accent: 'red' as const }],
    };
  }

  const real = ((1 + nominal / 100) / (1 + inflation / 100) - 1) * 100;
  const rough = nominal - inflation;

  const secondary = [
    { label: 'Грубая оценка разностью', value: `${fmtNumber(rough, 2)}%` },
    { label: 'Расхождение с разностью', value: `${fmtNumber(Math.abs(rough - real), 2)} п.п.` },
    { label: 'Номинальная ставка', value: `${fmtNumber(nominal, 2)}%` },
    { label: 'Инфляция', value: `${fmtNumber(inflation, 2)}%` },
  ];

  if (amount > 0 && years > 0) {
    const grown = amount * (1 + real / 100) ** years;
    secondary.push({ label: `Покупательная способность через ${years}`, value: `${fmtNumber(grown, 2)} ₽` });
    secondary.push({ label: 'Номинальная сумма', value: `${fmtNumber(amount * (1 + nominal / 100) ** years, 2)} ₽` });
  }

  return {
    primary: { label: 'Реальная доходность', value: `${fmtNumber(real, 2)}%` },
    secondary,
  };
};
