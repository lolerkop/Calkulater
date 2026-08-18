import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';

// FPS и время кадра — обратные величины: ms = 1000 / fps.
//
// Оба режима считаются одной формулой, потому что она симметрична. Ноль
// отвергается в обе стороны: ни кадров за секунду не бывает нулём при
// работающей картинке, ни кадр не длится нуль миллисекунд, а деление вернуло
// бы Infinity. Никаких датасетов бенчмарков и рекомендаций по мониторам —
// только детерминированный перевод.
const REFERENCE = [30, 60, 120, 144, 240];

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'fps');
  const fpsIn = toNumber(inputs.fps);
  const msIn = toNumber(inputs.frameTime);

  const fail = (message: string) => ({
    primary: { label: 'Результат', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  const toFrameTime = mode === 'fps';
  const source = toFrameTime ? fpsIn : msIn;
  if (!(source > 0)) {
    return fail(toFrameTime ? 'Частота кадров должна быть больше нуля' : 'Время кадра должно быть больше нуля');
  }

  const fps = toFrameTime ? fpsIn : 1000 / msIn;
  const frameTime = toFrameTime ? 1000 / fpsIn : msIn;

  return {
    primary: {
      label: toFrameTime ? 'Время кадра' : 'Частота кадров',
      value: toFrameTime ? `${fmtNumber(frameTime, 3)} мс` : `${fmtNumber(fps, 2)} FPS`,
    },
    secondary: [
      { label: 'Частота кадров', value: `${fmtNumber(fps, 2)} FPS` },
      { label: 'Время кадра', value: `${fmtNumber(frameTime, 3)} мс` },
      { label: 'Кадров за минуту', value: fmtNumber(fps * 60, 0) },
      {
        label: 'Для сравнения, мс',
        value: REFERENCE.map((value) => `${value} FPS → ${fmtNumber(1000 / value, 2)}`).join('; '),
      },
    ],
  };
};
