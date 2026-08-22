import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Закон Гука: F = k·x, энергия сжатой пружины E = k·x²/2.
//
// Решается в три стороны, потому что задача в жизни приходит с разных концов:
// какую силу даст известная пружина, насколько её сожмёт известная сила и какой
// жёсткости пружина нужна под заданную пару.
//
// Отличие от второго закона Ньютона: там сила связана с массой и ускорением
// тела, здесь — с деформацией упругого элемента. Общего в них только буква F.
//
// Область применимости названа прямо: закон линеен лишь до предела упругости.
// За ним пружина не возвращается в исходную длину, и формула перестаёт
// описывать происходящее — расчёт этого не знает и знать не может.
const MODE_LABEL: Record<string, string> = {
  force: 'Сила',
  extension: 'Удлинение',
  stiffness: 'Жёсткость',
};
const MODE_UNIT: Record<string, string> = { force: 'Н', extension: 'м', stiffness: 'Н/м' };

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'force');
  const k = toNumber(inputs.k);
  const x = toNumber(inputs.x);
  const f = toNumber(inputs.f);
  const label = MODE_LABEL[mode] ?? MODE_LABEL.force;
  const fail = (message: string) => ({
    primary: { label, value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  const q = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;

  let value: number;
  let energy: number;
  if (mode === 'extension') {
    if (!(k > 0)) return fail('Жёсткость должна быть больше нуля');
    value = f / k;
    energy = (f * f) / (2 * k);
  } else if (mode === 'stiffness') {
    if (x === 0) return fail('Удлинение не может быть нулевым: делить на него нечего');
    value = f / x;
    // Сила и деформация — стороны одного события, и знак у них общий: пружину
    // тянут — она тянет назад. Разошедшиеся знаки дают отрицательную жёсткость
    // и отрицательную запасённую энергию, а таких величин не бывает. Это не
    // край диапазона, а несогласованная пара, и отвечать на неё числом нельзя.
    if (!(value > 0)) return fail('Сила и деформация должны быть направлены в одну сторону');
    energy = (f * x) / 2;
  } else {
    if (!(k > 0)) return fail('Жёсткость должна быть больше нуля');
    value = k * x;
    energy = (k * x * x) / 2;
  }

  return {
    primary: { label, value: q(value, MODE_UNIT[mode] ?? 'Н') },
    secondary: [
      { label: 'Энергия пружины', value: q(energy, 'Дж') },
      { label: 'Жёсткость', value: q(mode === 'stiffness' ? value : k, 'Н/м') },
      { label: 'Удлинение', value: q(mode === 'extension' ? value : x, 'м') },
      { label: 'Сила', value: q(mode === 'force' ? value : f, 'Н') },
    ],
  };
};
