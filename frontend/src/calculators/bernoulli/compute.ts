import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Уравнение Бернулли для двух сечений потока.
//
// Смысл в том, что полный напор сохраняется: разгон потока забирает давление,
// подъём тоже. Поэтому в сужении трубы давление падает, а не растёт, и именно
// это чаще всего удивляет.
//
// Отрицательное давление во втором сечении — не «маленькое число», а признак
// того, что таких скоростей поток при заданном начальном давлении развить не
// может: раньше начнётся кавитация. Это отдельный отказ.
const G = 9.80665;
const KPA = 1000;

export const compute: CalcFunction = (inputs) => {
  const pressure1 = toNumber(inputs.p1);
  const speed1 = toNumber(inputs.v1);
  const height1 = toNumber(inputs.h1);
  const speed2 = toNumber(inputs.v2);
  const height2 = toNumber(inputs.h2);
  const density = toNumber(inputs.rho);
  const fail = (message: string) => ({
    primary: { label: 'Давление во втором сечении', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(density > 0)) return fail('Плотность должна быть больше нуля');
  if (!(speed1 >= 0) || !(speed2 >= 0)) return fail('Скорость не может быть отрицательной');
  if (!(pressure1 >= 0)) return fail('Давление в первом сечении не может быть отрицательным');

  const p1 = pressure1 * KPA;
  const p2 = p1 + 0.5 * density * (speed1 * speed1 - speed2 * speed2) + density * G * (height1 - height2);
  if (p2 < 0) return fail('При таких данных давление во втором сечении отрицательно');

  return {
    primary: { label: 'Давление во втором сечении', value: `${formatMeasure(p2 / KPA, fmtNumber)} кПа` },
    secondary: [
      { label: 'Изменение давления', value: `${formatMeasure((p2 - p1) / KPA, fmtNumber)} кПа` },
      {
        label: 'Динамический напор в первом сечении',
        value: `${formatMeasure((0.5 * density * speed1 * speed1) / KPA, fmtNumber)} кПа`,
      },
      {
        label: 'Динамический напор во втором сечении',
        value: `${formatMeasure((0.5 * density * speed2 * speed2) / KPA, fmtNumber)} кПа`,
      },
      {
        label: 'Полный напор',
        value: `${formatMeasure((p1 + 0.5 * density * speed1 * speed1 + density * G * height1) / KPA, fmtNumber)} кПа`,
      },
    ],
  };
};
