import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Длина открытой ремённой передачи:
// L = 2C + π(D₁+D₂)/2 + (D₂−D₁)²/(4C).
//
// Первое слагаемое — две прямые ветви, второе — половины окружностей обоих
// шкивов, третье — поправка на то, что при разных диаметрах ветви идут не
// параллельно. При равных шкивах поправка обращается в нуль, и формула
// вырождается в «два расстояния плюс одна окружность».
//
// Оси не могут быть ближе суммы радиусов: там шкивы пересекаются, арксинус
// выходит за область определения, и передачи попросту не существует.
const M_IN_MM = 1000;
const HALF_TURN = 180;

export const compute: CalcFunction = (inputs) => {
  const center = toNumber(inputs.center);
  const d1 = toNumber(inputs.d1);
  const d2 = toNumber(inputs.d2);
  const fail = (message: string) => ({
    primary: { label: 'Длина ремня', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(center > 0)) return fail('Межосевое расстояние должно быть больше нуля');
  if (!(d1 > 0)) return fail('Диаметр малого шкива должен быть больше нуля');
  if (!(d2 > 0)) return fail('Диаметр большого шкива должен быть больше нуля');
  if (2 * center <= d1 + d2) return fail('Шкивы пересекаются: оси не могут быть ближе суммы радиусов');

  const small = Math.min(d1, d2);
  const large = Math.max(d1, d2);
  const length = 2 * center + (Math.PI * (small + large)) / 2 + Math.pow(large - small, 2) / (4 * center);
  const wrap = HALF_TURN - 2 * ((Math.asin((large - small) / (2 * center)) * HALF_TURN) / Math.PI);

  return {
    primary: { label: 'Длина ремня', value: `${formatMeasure(length, fmtNumber)} мм` },
    secondary: [
      { label: 'В метрах', value: `${formatMeasure(length / M_IN_MM, fmtNumber)} м` },
      { label: 'Угол обхвата малого шкива', value: `${formatMeasure(wrap, fmtNumber)} °` },
      { label: 'Передаточное отношение', value: formatMeasure(large / small, fmtNumber) },
      { label: 'Межосевое расстояние', value: `${formatMeasure(center, fmtNumber)} мм` },
    ],
  };
};
