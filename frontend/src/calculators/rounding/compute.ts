import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure, formatStatistic } from '../../lib/platform/measurement';

// Округление числа до заданного числа знаков тремя способами.
//
//   к ближайшему — половина уходит ОТ НУЛЯ (2,5 → 3, −2,5 → −3);
//   вниз         — к меньшему по числовой оси (пол);
//   вверх        — к большему по числовой оси (потолок).
//
// «Вниз» и «вверх» здесь именно floor и ceiling, а не отбрасывание модуля:
// у отрицательных чисел разница принципиальна, и −2,4 вниз даёт −2,5 при
// одном знаке, а вовсе не −2,4.
//
// Исходное значение показывается с большей точностью, чем результат: страница
// про округление обязана показывать «до» и «после» РАЗНЫМИ, иначе она не
// показывает ничего. Разница выводится отдельной строкой — это и есть та
// величина, которую округление отбросило.
export const compute: CalcFunction = (inputs) => {
  const value = toNumber(inputs.value);
  const digits = Math.floor(toNumber(inputs.digits));
  const mode = toStr(inputs.mode, 'half');

  const fail = (message: string) => ({
    primary: { label: 'Округлённое значение', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (digits < 0) return fail('Число знаков не может быть отрицательным');
  if (digits > 10) return fail('Больше десяти знаков не поддерживается');

  const step = Math.pow(10, digits);
  const scaled = value * step;
  const rounded = mode === 'down'
    ? Math.floor(scaled) / step
    : mode === 'up'
      ? Math.ceil(scaled) / step
      : (Math.sign(scaled) * Math.round(Math.abs(scaled))) / step;

  return {
    primary: { label: 'Округлённое значение', value: formatMeasure(rounded, fmtNumber) },
    secondary: [
      { label: 'Исходное значение', value: formatStatistic(value, fmtNumber) },
      { label: 'Разница', value: formatMeasure(rounded - value, fmtNumber) },
      { label: 'Знаков', value: fmtNumber(digits, 0) },
    ],
  };
};
