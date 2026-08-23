import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Формула тонкой линзы 1/f = 1/d₀ + 1/dᵢ в реальной оптической договорённости:
// расстояние до изображения положительно, когда изображение действительное и
// строится с другой стороны линзы, и отрицательно, когда оно мнимое и лежит с
// той же стороны, что и предмет.
//
// Именно знак ответа несёт смысл, который посетитель ищет: предмет ближе
// фокуса даёт лупу (мнимое прямое увеличенное), дальше фокуса — проектор
// (действительное перевёрнутое). Поэтому строка «Тип изображения» выводится
// текстом, а не оставляется читателю знака.
//
// Предмет ровно в фокусе — не «почти бесконечность», а отсутствие изображения:
// лучи выходят параллельным пучком. Это отдельный отказ, а не большое число.
const CM_IN_M = 100;

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'image');
  const focal = toNumber(inputs.f);
  const objectDistance = toNumber(inputs.do);
  const imageDistance = toNumber(inputs.di);
  const fail = (message: string) => ({
    primary: { label: 'Расстояние до изображения', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (mode !== 'image' && mode !== 'focal') return fail('Выберите режим расчёта из списка');
  if (!(objectDistance > 0)) return fail('Расстояние до предмета должно быть больше нуля');

  if (mode === 'image') {
    if (focal === 0) return fail('Фокусное расстояние не может быть нулевым');
    if (objectDistance === focal) return fail('Предмет в фокусе — изображения нет');
    const di = 1 / (1 / focal - 1 / objectDistance);
    const magnification = -di / objectDistance;
    return {
      primary: { label: 'Расстояние до изображения', value: `${formatMeasure(di, fmtNumber)} см` },
      secondary: [
        { label: 'Увеличение', value: formatMeasure(magnification, fmtNumber) },
        {
          label: 'Тип изображения',
          value: di > 0 ? 'действительное перевёрнутое' : 'мнимое прямое',
        },
        { label: 'Фокусное расстояние', value: `${formatMeasure(focal, fmtNumber)} см` },
        { label: 'Расстояние до предмета', value: `${formatMeasure(objectDistance, fmtNumber)} см` },
      ],
    };
  }

  if (imageDistance === 0) return fail('Расстояние до изображения не может быть нулевым');
  if (objectDistance + imageDistance === 0) return fail('Такая пара расстояний фокуса не задаёт');
  const f = 1 / (1 / objectDistance + 1 / imageDistance);
  const magnification = -imageDistance / objectDistance;
  return {
    primary: { label: 'Фокусное расстояние', value: `${formatMeasure(f, fmtNumber)} см` },
    secondary: [
      { label: 'Увеличение', value: formatMeasure(magnification, fmtNumber) },
      { label: 'Оптическая сила', value: `${formatMeasure(CM_IN_M / f, fmtNumber)} дптр` },
      { label: 'Расстояние до предмета', value: `${formatMeasure(objectDistance, fmtNumber)} см` },
      { label: 'Расстояние до изображения', value: `${formatMeasure(imageDistance, fmtNumber)} см` },
    ],
  };
};
