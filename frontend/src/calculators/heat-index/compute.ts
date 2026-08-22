import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Индекс жары: полная девятичленная регрессия Национальной метеослужбы США.
//
// Регрессия построена в градусах Фаренгейта, поэтому температура переводится
// туда, считается, и результат возвращается обратно. Пересчёт коэффициентов в
// Цельсий здесь был бы не упрощением, а другой моделью: члены с произведениями
// t²·φ² не переносятся линейной заменой шкалы.
//
// Область применимости — от 80 °F (26,7 °C). Ниже неё регрессия даёт значения,
// которые уже не описывают ощущение, поэтому расчёт отказывается, а не
// экстраполирует. Отличие от ветрового охлаждения — та величина работает в
// противоположной области, при холоде и ветре.
const C = [-42.379, 2.04901523, 10.14333127, -0.22475541, -0.00683783,
  -0.05481717, 0.00122874, 0.00085282, -0.00000199];

export const compute: CalcFunction = (inputs) => {
  const t = toNumber(inputs.t);
  const rh = toNumber(inputs.rh);
  const fail = (message: string) => ({
    primary: { label: 'Ощущается как', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(rh >= 0) || rh > 100) return fail('Влажность должна быть от 0 до 100 %');
  if (!(t >= 20) || t > 60) return fail('Температура должна быть от 20 до 60 °C');
  const tf = (t * 9) / 5 + 32;
  if (tf < 80) return fail('Индекс жары применим от 26,7 °C — ниже он ничего не описывает');

  const hi = C[0] + C[1] * tf + C[2] * rh + C[3] * tf * rh + C[4] * tf * tf
    + C[5] * rh * rh + C[6] * tf * tf * rh + C[7] * tf * rh * rh + C[8] * tf * tf * rh * rh;
  const hiC = ((hi - 32) * 5) / 9;
  const q = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;
  const delta = hiC - t;

  return {
    primary: { label: 'Ощущается как', value: q(hiC, '°C') },
    secondary: [
      { label: 'Прибавка к термометру', value: q(delta, '°C') },
      { label: 'В градусах Фаренгейта', value: q(hi, '°F') },
      { label: 'Термометр по Фаренгейту', value: q(tf, '°F') },
      {
        label: 'Опасность',
        value: hiC >= 54 ? 'крайняя' : hiC >= 41 ? 'высокая' : hiC >= 32 ? 'умеренная' : 'низкая',
        accent: hiC >= 41 ? 'red' as const : 'neutral' as const,
      },
    ],
  };
};
