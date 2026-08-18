import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';

// Абсолютная и относительная разница между двумя значениями.
//
// Это не тот же расчёт, что процентное изменение. Знаменатель здесь — модуль
// исходного значения, а не само значение. Разница видна на отрицательной базе:
// от −50 до 50 относительная разница равна +200 %, потому что величина выросла;
// формула процентного изменения дала бы −200 %, так как делила бы на −50.
// При нулевой базе относительная разница не определена: делить не на что.
const show = (value: number) => (Number.isInteger(value) ? String(value) : fmtNumber(value, 4));

export const compute: CalcFunction = (inputs) => {
  const from = toNumber(inputs.from);
  const to = toNumber(inputs.to);

  const absolute = to - from;
  const relative = from === 0 ? null : (absolute / Math.abs(from)) * 100;

  return {
    primary: { label: 'Абсолютная разница', value: show(absolute) },
    secondary: [
      relative === null
        ? { label: 'Относительная разница', value: 'Не определена при нулевой базе', accent: 'neutral' as const }
        : { label: 'Относительная разница', value: `${fmtNumber(relative, 2)} %`, accent: relative >= 0 ? 'green' : 'red' },
      { label: 'Было', value: show(from) },
      { label: 'Стало', value: show(to) },
      { label: 'Направление', value: absolute > 0 ? 'Рост' : absolute < 0 ? 'Снижение' : 'Без изменений' },
    ],
  };
};
