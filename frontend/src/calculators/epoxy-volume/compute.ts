import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Эпоксидная смола на заливку: объём слоя переводится в массу по плотности и
// делится на смолу и отвердитель по пропорции набора.
//
// Пропорция задаётся полем и означает частей смолы на ОДНУ часть отвердителя:
// у разных наборов это 2:1, 3:1, 4:1 и даже 100:47, и перепутать их нельзя —
// избыток отвердителя не ускоряет отверждение, а оставляет смолу липкой навсегда.
//
// Толщина в миллиметрах, стороны в сантиметрах — так их и меряют на столешнице;
// перевод спрятан в расчёт, чтобы не считать в уме.
const MM_IN_CM = 10;
const G_IN_KG = 1000;
const CM3_IN_L = 1000;
const CM2_IN_M2 = 10000;

export const compute: CalcFunction = (inputs) => {
  const length = toNumber(inputs.length);
  const width = toNumber(inputs.width);
  const thickness = toNumber(inputs.thickness);
  const density = toNumber(inputs.density);
  const ratio = toNumber(inputs.ratio);
  const fail = (message: string) => ({
    primary: { label: 'Всего смеси', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(length > 0)) return fail('Длина заливки должна быть больше нуля');
  if (!(width > 0)) return fail('Ширина заливки должна быть больше нуля');
  if (!(thickness > 0)) return fail('Толщина слоя должна быть больше нуля');
  if (!(density > 0)) return fail('Плотность смеси должна быть больше нуля');
  if (!(ratio > 0)) return fail('Пропорция набора должна быть больше нуля');

  const volume = (length * width * thickness) / MM_IN_CM;
  const mass = (volume * density) / G_IN_KG;

  return {
    primary: { label: 'Всего смеси', value: `${formatMeasure(mass, fmtNumber)} кг` },
    secondary: [
      { label: 'Смолы', value: `${formatMeasure((mass * ratio) / (ratio + 1), fmtNumber)} кг` },
      { label: 'Отвердителя', value: `${formatMeasure(mass / (ratio + 1), fmtNumber)} кг` },
      { label: 'Объём заливки', value: `${formatMeasure(volume / CM3_IN_L, fmtNumber)} л` },
      { label: 'Площадь заливки', value: `${formatMeasure((length * width) / CM2_IN_M2, fmtNumber)} м²` },
    ],
  };
};
