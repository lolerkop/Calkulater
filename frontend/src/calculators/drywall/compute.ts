import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Гипсокартон: листы, профиль и саморезы.
//
// Запас берётся от площади ВСЕХ слоёв, а не от одного: обрезки появляются в
// каждом слое, и однослойный запас на двухслойной обшивке кончится на середине.
// Листы округляются вверх — половину листа в магазине не продадут.
//
// Профиль считается как стойки с заданным шагом плюс горизонтальные связи
// примерно через метр: это привычная практика, а не норматив, и потому число
// приблизительное. Саморезы — шестьдесят на лист на слой, обычная плотность
// крепежа для стены.

export const compute: CalcFunction = (inputs) => {
  const area = toNumber(inputs.area);
  const sheetLength = toNumber(inputs.sheetLength);
  const sheetWidth = toNumber(inputs.sheetWidth);
  const layers = toNumber(inputs.layers);
  const profileStep = toNumber(inputs.profileStep);
  const waste = toNumber(inputs.waste);
  const fail = (message: string) => ({
    primary: { label: 'Листов', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(area > 0)) return fail('Площадь должна быть больше нуля');
  if (!(sheetLength > 0) || !(sheetWidth > 0)) return fail('Размеры листа должны быть больше нуля');
  if (!Number.isInteger(layers) || layers < 1 || layers > 3) return fail('Слоёв должно быть от одного до трёх');
  if (!(profileStep > 0)) return fail('Шаг профиля должен быть больше нуля');
  if (waste < 0 || waste > 50) return fail('Запас должен быть от 0 до 50 %');

  const sheetArea = sheetLength * sheetWidth;
  const withWaste = area * layers * (1 + waste / 100);
  const sheets = Math.ceil(withWaste / sheetArea);
  const profile = area / profileStep + area / 3;
  const measure = (x: number) => formatMeasure(x, fmtNumber);

  return {
    primary: { label: 'Листов', value: fmtNumber(sheets, 0) },
    secondary: [
      { label: 'Площадь', value: `${measure(area)} м²` },
      { label: 'С запасом', value: `${measure(withWaste)} м²` },
      { label: 'Площадь листа', value: `${measure(sheetArea)} м²` },
      { label: 'Метров профиля', value: measure(profile) },
      { label: 'Саморезов', value: fmtNumber(Math.ceil(sheets * 60 * layers), 0) },
    ],
  };
};
