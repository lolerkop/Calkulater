import type { CalcFunction } from '../../lib/types';
import { fmtMoney, fmtNumber, toNumber } from '../../lib/format';

// Маржинальный доход: сколько остаётся от цены после переменных затрат.
//   маржа на единицу = цена − переменные затраты
//   доля в цене      = маржа / цена × 100
// Переменные затраты выше цены — осмысленный ответ, а не ошибка ввода: так
// выглядит убыточная позиция, и её надо показать, а не отклонить. Ошибкой
// является только неположительная цена, потому что тогда доля не определена.
export const compute: CalcFunction = (inputs) => {
  const price = toNumber(inputs.price);
  const variable = toNumber(inputs.variable);
  const volume = toNumber(inputs.volume);

  if (price <= 0) {
    return {
      primary: { label: 'Маржинальный доход', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Цена должна быть больше нуля', accent: 'red' as const }],
    };
  }

  const margin = price - variable;
  const ratio = (margin / price) * 100;
  const hasVolume = Number.isFinite(volume) && volume > 0;

  return {
    primary: { label: 'Маржинальный доход', value: fmtMoney(margin) },
    secondary: [
      { label: 'Доля в цене', value: `${fmtNumber(ratio, 2)} %`, accent: margin >= 0 ? 'green' : 'red' },
      ...(hasVolume
        ? [{ label: 'Маржинальный доход на объём', value: fmtMoney(margin * volume) }]
        : []),
      { label: 'Переменные затраты', value: fmtMoney(variable) },
      ...(margin < 0
        ? [{ label: 'Внимание', value: 'Переменные затраты выше цены', accent: 'red' as const }]
        : []),
    ],
  };
};
