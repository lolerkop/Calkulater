import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure, formatQuantity } from '../../lib/platform/measurement';

// Период обращения по круговой орбите: T = 2π√(r³/GM).
//
// Отличие от центростремительной силы важно и названо прямо: та берёт период
// из ЗАДАННОЙ скорости, T = 2πr/v. Здесь скорость не задаётся — она выводится
// из массы центрального тела, и вопрос звучит иначе: «сколько длится виток на
// такой высоте», а не «сколько длится виток при такой скорости».
//
// Единицы полей масштабированы по той же причине, что у второй космической:
// масса Земли в килограммах равна 5,972·10²⁴, а такие числа браузер записывает
// показательной формой, которую поле не принимает.
const G = 6.6743e-11;
const MASS_UNIT = 1e24;
const KM = 1000;
const DAY_SECONDS = 86400;

export const compute: CalcFunction = (inputs) => {
  const mass24 = toNumber(inputs.mass24);
  const radiusKm = toNumber(inputs.radiusKm);
  const fail = (message: string) => ({
    primary: { label: 'Период обращения', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(mass24 > 0)) return fail('Масса центрального тела должна быть больше нуля');
  if (!(radiusKm > 0)) return fail('Радиус орбиты должен быть больше нуля');

  const mass = mass24 * MASS_UNIT;
  const radius = radiusKm * KM;
  const period = 2 * Math.PI * Math.sqrt(radius ** 3 / (G * mass));
  const speed = Math.sqrt((G * mass) / radius);

  const q = (value: number, unit: string) => `${formatQuantity(value, fmtNumber)} ${unit}`;
  return {
    primary: { label: 'Период обращения', value: q(period, 'с') },
    secondary: [
      { label: 'В часах', value: `${formatMeasure(period / 3600, fmtNumber)} ч` },
      { label: 'Орбитальная скорость', value: q(speed, 'м/с') },
      { label: 'Оборотов в сутки', value: formatMeasure(DAY_SECONDS / period, fmtNumber) },
      { label: 'Радиус орбиты', value: `${formatMeasure(radiusKm, fmtNumber)} км` },
    ],
  };
};
