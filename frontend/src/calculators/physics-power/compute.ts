import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Механическая мощность: P = W ÷ t.
//
// Величина та же, что и в электрике, и единица та же — ватт, но выводится она
// здесь из механической работы. Мощность цепи считается через напряжение и ток
// на своей странице, и смешивать эти два входа не нужно.
//
// Метрическая лошадиная сила — 735,49875 Вт, а не механическая 745,7.
const WATTS_PER_PS = 735.49875;

// Физические величины охватывают более широкий диапазон, чем размеры фигур,
// поэтому у краёв диапазона включается показательная запись.
const qty = (value: number): string => {
  const abs = Math.abs(value);
  if (abs > 0 && (abs < 1e-4 || abs >= 1e12)) {
    const [mantissa, exponent] = value.toExponential(3).split('e');
    return `${mantissa.replace('.', ',')}·10^${Number(exponent)}`;
  }
  return formatMeasure(value, fmtNumber);
};

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'P');
  const fail = (message: string) => ({
    primary: { label: 'Мощность', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  let work = 0;
  let time = 0;
  let power = 0;
  let primaryLabel = 'Мощность';
  if (mode === 'P') {
    work = toNumber(inputs.W);
    time = toNumber(inputs.t);
    if (work < 0) return fail('Работа не может быть отрицательной');
    if (!(time > 0)) return fail('Время должно быть больше нуля');
    power = work / time;
  } else if (mode === 't') {
    work = toNumber(inputs.W2);
    power = toNumber(inputs.P);
    if (work < 0) return fail('Работа не может быть отрицательной');
    if (!(power > 0)) return fail('Мощность должна быть больше нуля, иначе время не определено');
    time = work / power;
    primaryLabel = 'Время';
  } else {
    power = toNumber(inputs.P2);
    time = toNumber(inputs.t2);
    if (power < 0) return fail('Мощность не может быть отрицательной');
    if (!(time > 0)) return fail('Время должно быть больше нуля');
    work = power * time;
    primaryLabel = 'Работа';
  }

  const primaryValue = mode === 'P' ? `${qty(power)} Вт` : mode === 't' ? `${qty(time)} с` : `${qty(work)} Дж`;
  return {
    primary: { label: primaryLabel, value: primaryValue },
    secondary: [
      { label: 'Мощность', value: `${qty(power)} Вт` },
      { label: 'Работа', value: `${qty(work)} Дж` },
      { label: 'Время', value: `${qty(time)} с` },
      { label: 'В метрических лошадиных силах', value: `${qty(power / WATTS_PER_PS)} л.с.` },
    ],
  };
};
