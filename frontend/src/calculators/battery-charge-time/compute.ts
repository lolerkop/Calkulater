import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber, toNumber } from '../../lib/format';

// Время зарядки: ёмкость ÷ (ток × КПД).
//
// Оценка идеализированная. Настоящее зарядное устройство снижает ток к концу
// цикла, и последние проценты набираются заметно дольше расчётных; кривая
// заряда здесь не моделируется, и в копирайте это сказано прямо.
const asDuration = (hours: number) => {
  const whole = Math.floor(hours);
  const minutes = Math.round((hours - whole) * 60);
  return minutes === 60 ? `${fmtInt(whole + 1)} ч 0 мин` : `${fmtInt(whole)} ч ${minutes} мин`;
};

export const compute: CalcFunction = (inputs) => {
  const capacity = toNumber(inputs.capacityAh);
  const current = toNumber(inputs.currentA);
  const efficiency = toNumber(inputs.efficiency);
  const fail = (message: string) => ({
    primary: { label: 'Время зарядки', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (!(capacity > 0)) return fail('Ёмкость должна быть больше нуля');
  if (!(current > 0)) return fail('Ток зарядки должен быть больше нуля');
  if (!(efficiency >= 1) || efficiency > 100) return fail('КПД должен быть от 1 до 100 %');

  const hours = capacity / (current * (efficiency / 100));
  return {
    primary: { label: 'Время зарядки', value: asDuration(hours) },
    secondary: [
      { label: 'В часах', value: `${fmtNumber(hours, 2)} ч` },
      { label: 'Передано в батарею', value: `${fmtNumber(capacity, 2)} А·ч` },
      { label: 'Отдано зарядным устройством', value: `${fmtNumber(hours * current, 2)} А·ч` },
    ],
  };
};
