import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';

// Какой балл нужен на экзамене, чтобы выйти на желаемую итоговую.
//
// Текущая оценка трактуется как взвешенная доля (1 − вес) итоговой: это
// допущение, и оно названо на странице, а не спрятано в формулу.
//
// Результат выше ста процентов — не ошибка ввода, а ответ: цель недостижима
// одним экзаменом. Показать в этом случае прочерк значило бы скрыть самое
// полезное — насколько велик разрыв.
export const compute: CalcFunction = (inputs) => {
  const current = toNumber(inputs.current);
  const target = toNumber(inputs.target);
  const weight = toNumber(inputs.weight);

  const fail = (message: string) => ({
    primary: { label: 'Нужный балл', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (current < 0 || current > 100) return fail('Текущая оценка задаётся в диапазоне от 0 до 100');
  if (target < 0 || target > 100) return fail('Желаемая оценка задаётся в диапазоне от 0 до 100');
  if (!(weight > 0) || weight > 100) return fail('Вес экзамена задаётся в диапазоне от 0 до 100 процентов');

  const w = weight / 100;
  const needed = (target - current * (1 - w)) / w;

  const secondary: { label: string; value: string; accent?: 'red' }[] = [
    { label: 'Вклад текущей оценки', value: `${fmtNumber(current * (1 - w), 2)}%` },
    { label: 'Вес экзамена', value: `${fmtNumber(weight, 2)}%` },
  ];

  if (needed > 100) {
    secondary.push({
      label: 'Цель недостижима',
      value: 'Одним экзаменом эту итоговую уже не набрать: нужен балл выше максимального',
      accent: 'red' as const,
    });
  } else if (needed <= 0) {
    secondary.push({ label: 'Цель уже достигнута', value: 'Итоговая выйдет не ниже желаемой при любом результате экзамена' });
  }

  return {
    primary: { label: 'Нужный балл', value: `${fmtNumber(needed, 2)}%` },
    secondary,
  };
};
