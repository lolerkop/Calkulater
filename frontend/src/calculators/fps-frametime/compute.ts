import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';

// FPS и время кадра — обратные величины: ms = 1000 / fps.
//
// Оба режима считаются одной формулой, потому что она симметрична. Ноль
// отвергается в обе стороны: ни кадров за секунду не бывает нулём при
// работающей картинке, ни кадр не длится нуль миллисекунд, а деление вернуло
// бы Infinity. Никаких датасетов бенчмарков и рекомендаций по мониторам —
// только детерминированный перевод.
const display = (v: number, digits: number) => v > 0 && Math.abs(v) < 0.5 * 10 ** -digits ? v.toExponential(3).replace('.', ',') : fmtNumber(v, digits);
const REFERENCE = [30, 60, 120, 144, 240];

import { read, INPUT, MODE, RANGE } from '../../lib/platform/measurementScalar';



export const compute: CalcFunction = (inputs) => {
  const mode = (typeof inputs.mode === 'string' ? inputs.mode : inputs.mode === undefined ? 'fps' : '');


  const fail = (message: string) => ({
    primary: { label: 'Результат', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (mode !== 'fps' && mode !== 'ms') return fail(MODE);
  const toFrameTime = mode === 'fps';
  const source = read(toFrameTime ? inputs.fps : inputs.frameTime);
  if (!Number.isFinite(source)) return fail(INPUT);
  if (!(source > 0)) {
    return fail(toFrameTime ? 'Частота кадров должна быть больше нуля' : 'Время кадра должно быть больше нуля');
  }

  const fps = toFrameTime ? source : 1000 / source;
  const frameTime = toFrameTime ? 1000 / source : source;
  if (![fps, frameTime, fps * 60].every(v => Number.isFinite(v) && v > 0)) return fail(RANGE);

  return {
    primary: {
      label: toFrameTime ? 'Время кадра' : 'Частота кадров',
      value: toFrameTime ? `${display(frameTime, 3)} мс` : `${display(fps, 2)} FPS`,
    },
    secondary: [
      { label: 'Частота кадров', value: `${display(fps, 2)} FPS` },
      { label: 'Время кадра', value: `${display(frameTime, 3)} мс` },
      { label: 'Кадров за минуту', value: display(fps * 60, 0) },
      {
        label: 'Для сравнения, мс',
        value: REFERENCE.map((value) => `${value} FPS → ${fmtNumber(1000 / value, 2)}`).join('; '),
      },
    ],
  };
};
