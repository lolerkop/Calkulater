import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber, toNumber, toStr } from '../../lib/format';

// Скорость, расстояние и время: находим недостающую величину.
//
// Средняя скорость, без ускорений и остановок. Делитель выбранного режима
// проверяется строго: при нулевой скорости время не определено, а деление
// вернуло бы Infinity — число, похожее на ответ.
//
// Перевод километров в мили или метры в секунду здесь не делается: это работа
// существующего конвертера скорости, и дублировать её незачем.
const asDuration = (hours: number) => {
  const whole = Math.floor(hours);
  const minutes = Math.round((hours - whole) * 60);
  return `${fmtInt(whole)} ч ${minutes} мин`;
};

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'speed');
  const distance = toNumber(inputs.distance);
  const time = toNumber(inputs.time);
  const speed = toNumber(inputs.speed);

  const fail = (message: string) => ({
    primary: { label: 'Результат', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (distance < 0 || time < 0 || speed < 0) return fail('Значения не могут быть отрицательными');

  let s = distance;
  let t = time;
  let v = speed;
  let primary: { label: string; value: string };

  if (mode === 'speed') {
    if (!(time > 0)) return fail('Время должно быть больше нуля');
    v = distance / time;
    primary = { label: 'Скорость', value: `${fmtNumber(v, 2)} км/ч` };
  } else if (mode === 'distance') {
    s = speed * time;
    primary = { label: 'Расстояние', value: `${fmtNumber(s, 2)} км` };
  } else {
    if (!(speed > 0)) return fail('Скорость должна быть больше нуля');
    t = distance / speed;
    primary = { label: 'Время', value: `${fmtNumber(t, 4)} ч` };
  }

  return {
    primary,
    secondary: [
      { label: 'Время в пути', value: asDuration(t) },
      { label: 'Скорость', value: `${fmtNumber(v, 2)} км/ч` },
      { label: 'Расстояние', value: `${fmtNumber(s, 2)} км` },
      { label: 'Минут на километр', value: v > 0 ? fmtNumber(60 / v, 2) : '—' },
    ],
  };
};
