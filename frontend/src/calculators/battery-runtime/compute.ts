import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber, toNumber } from '../../lib/format';

// Время работы аккумулятора под нагрузкой.
//
// Ампер-часы — не энергия: чтобы получить ватт-часы, ёмкость умножается на
// напряжение. Путаница между ними даёт ответ, отличающийся в десяток раз, и
// поэтому перевод сделан одним явным шагом.
//
// Кривая разряда, эффект Пейкерта и температура не моделируются: расчёт
// линейный и завышает время для свинцовых батарей на большом токе. Об этом
// сказано в оговорке категории, а не спрятано в коэффициент.
const asDuration = (hours: number) => {
  const whole = Math.floor(hours);
  const minutes = Math.round((hours - whole) * 60);
  return `${fmtInt(whole)} ч ${minutes} мин`;
};

export const compute: CalcFunction = (inputs) => {
  const capacity = toNumber(inputs.capacity);
  const voltage = toNumber(inputs.voltage);
  const load = toNumber(inputs.load);
  const dod = toNumber(inputs.dod);
  const efficiency = toNumber(inputs.efficiency);

  const fail = (message: string) => ({
    primary: { label: 'Время работы', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(capacity > 0)) return fail('Ёмкость должна быть больше нуля');
  if (!(voltage > 0)) return fail('Напряжение должно быть больше нуля');
  if (!(load > 0)) return fail('Мощность нагрузки должна быть больше нуля');
  if (!(dod > 0) || dod > 100) return fail('Глубина разряда задаётся в диапазоне от 0 до 100 процентов');
  if (!(efficiency > 0) || efficiency > 100) return fail('КПД задаётся в диапазоне от 0 до 100 процентов');

  const energy = capacity * voltage * (dod / 100) * (efficiency / 100);
  const hours = energy / load;

  return {
    primary: { label: 'Время работы', value: `${fmtNumber(hours, 2)} ч` },
    secondary: [
      { label: 'Часы и минуты', value: asDuration(hours) },
      { label: 'Полезная энергия', value: `${fmtNumber(energy, 1)} Вт·ч` },
      { label: 'Полная энергия батареи', value: `${fmtNumber(capacity * voltage, 1)} Вт·ч` },
    ],
  };
};
