import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Экспоненциальный распад: N = N₀·(1/2)^(t/T).
//
// Два режима — это две стороны одного уравнения: «сколько останется через
// время t» и «сколько ждать до заданного остатка». Второй режим отказывает,
// когда остаток больше исходного количества: это не отрицательное время, а
// невозможная постановка.
//
// Среднее время жизни τ = T/ln2 печатается отдельной строкой: именно оно, а не
// период полураспада, входит в формулу активности, и путать их — классическая
// ошибка.
const LN2 = Math.LN2;

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'remaining');
  const initial = toNumber(inputs.n0);
  const half = toNumber(inputs.half);
  const time = toNumber(inputs.t);
  const left = toNumber(inputs.left);
  const fail = (message: string) => ({
    primary: { label: 'Остаток', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (mode !== 'remaining' && mode !== 'time') return fail('Выберите режим расчёта из списка');
  if (!(half > 0)) return fail('Период полураспада должен быть больше нуля');
  if (!(initial > 0)) return fail('Исходное количество должно быть больше нуля');

  const meanLife = half / LN2;

  if (mode === 'remaining') {
    if (!(time >= 0)) return fail('Время не может быть отрицательным');
    const remaining = initial * Math.pow(0.5, time / half);
    return {
      primary: { label: 'Остаток', value: `${formatMeasure(remaining, fmtNumber)} г` },
      secondary: [
        { label: 'Распалось', value: `${formatMeasure(initial - remaining, fmtNumber)} г` },
        { label: 'Осталось доли', value: `${formatMeasure((remaining / initial) * 100, fmtNumber)} %` },
        { label: 'Периодов полураспада прошло', value: formatMeasure(time / half, fmtNumber) },
        { label: 'Среднее время жизни', value: `${formatMeasure(meanLife, fmtNumber)} лет` },
      ],
    };
  }

  if (!(left > 0)) return fail('Остаток должен быть больше нуля');
  if (left > initial) return fail('Остаток не может превышать исходное количество');
  const waited = (half * Math.log(initial / left)) / LN2;
  return {
    primary: { label: 'Время', value: `${formatMeasure(waited, fmtNumber)} лет` },
    secondary: [
      { label: 'Периодов полураспада', value: formatMeasure(waited / half, fmtNumber) },
      { label: 'Осталось доли', value: `${formatMeasure((left / initial) * 100, fmtNumber)} %` },
      { label: 'Распалось', value: `${formatMeasure(initial - left, fmtNumber)} г` },
      { label: 'Среднее время жизни', value: `${formatMeasure(meanLife, fmtNumber)} лет` },
    ],
  };
};
