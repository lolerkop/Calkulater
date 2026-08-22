import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Стандартные единицы алкоголя.
//
//   чистый спирт по объёму = V · ABV/100
//   масса спирта = объём · 0,789 г/мл      (плотность этанола при 20 °C)
//   единиц = масса / норма единицы
//
// Норма единицы задаётся посетителем, потому что она РАЗНАЯ в разных странах:
// 10 г в Великобритании и Австралии, 14 г в США, 12 г во Франции. Подставлять
// одну за все значило бы выдавать местную договорённость за физику.
//
// Это счёт выпитого, а не оценка опьянения: концентрация в крови зависит от
// массы тела, пола, скорости питья и содержимого желудка, и ни одна из этих
// величин сюда не входит. Страница говорит это прямо.
const ETHANOL_DENSITY = 0.789;

export const compute: CalcFunction = (inputs) => {
  const volume = toNumber(inputs.volume_ml);
  const abv = toNumber(inputs.abv);
  const standard = toNumber(inputs.standard_g);
  const fail = (message: string) => ({
    primary: { label: 'Стандартных единиц', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(volume > 0)) return fail('Объём должен быть больше нуля');
  if (!(abv >= 0) || abv > 100) return fail('Крепость должна быть от 0 до 100 %');
  if (!(standard > 0)) return fail('Норма единицы должна быть больше нуля');

  const pureMl = (volume * abv) / 100;
  const grams = pureMl * ETHANOL_DENSITY;
  const m = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;

  return {
    primary: { label: 'Стандартных единиц', value: fmtNumber(grams / standard, 2) },
    secondary: [
      { label: 'Чистого спирта по массе', value: m(grams, 'г') },
      { label: 'Чистого спирта по объёму', value: m(pureMl, 'мл') },
      { label: 'Норма единицы', value: m(standard, 'г') },
      { label: 'Крепость', value: `${formatMeasure(abv, fmtNumber)} %` },
    ],
  };
};
