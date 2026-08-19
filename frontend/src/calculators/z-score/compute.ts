import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';

// Z-оценка: на сколько стандартных отклонений значение отстоит от среднего.
//
// Значение, среднее и само отклонение от среднего могут быть отрицательными,
// поэтому поля объявлены signed, а нулевая сигма отклоняется: делить не на что,
// и «бесконечно далеко от среднего» — это не число, а отсутствие разброса.

const statNumber = (value: number): string => {
  const text = fmtNumber(Number(value.toFixed(4)), 4);
  return text.includes(',') ? text.replace(/0+$/, '').replace(/,$/, '') : text;
};

export const compute: CalcFunction = (inputs) => {
  const x = toNumber(inputs.x);
  const mean = toNumber(inputs.mean);
  const sd = toNumber(inputs.sd);

  if (!(sd > 0)) {
    return {
      primary: { label: 'Z-оценка', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Стандартное отклонение должно быть больше нуля', accent: 'red' as const }],
    };
  }

  const deviation = x - mean;
  const position = deviation > 0 ? 'выше среднего' : deviation < 0 ? 'ниже среднего' : 'равно среднему';

  return {
    primary: { label: 'Z-оценка', value: statNumber(deviation / sd) },
    secondary: [
      { label: 'Отклонение', value: statNumber(deviation) },
      { label: 'Положение', value: position },
    ],
  };
};
