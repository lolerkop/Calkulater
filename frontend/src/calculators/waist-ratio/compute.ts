import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatStatistic } from '../../lib/platform/measurement';

// Отношение талии к росту и к бёдрам.
//
// Оба отношения безразмерны, поэтому единицы не важны — важно лишь, чтобы обхваты
// и рост были измерены одинаково. Категория даётся по WHtR, а не по WHR: первое
// сравнимо между людьми разного роста, второе сильнее зависит от телосложения.
//
// Граница «половина роста» — самая известная и самая простая: талия меньше
// половины роста. Она и стоит на переходе между здоровым и повышенным.

export const compute: CalcFunction = (inputs) => {
  const waist = toNumber(inputs.waist);
  const hip = toNumber(inputs.hip);
  const height = toNumber(inputs.height);
  const fail = (message: string) => ({
    primary: { label: 'Отношение талии к росту', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(waist > 0) || !(hip > 0) || !(height > 0)) return fail('Обхваты и рост должны быть больше нуля');

  const whtr = waist / height;
  const whr = waist / hip;
  const band = whtr < 0.4 ? 'ниже обычного'
    : whtr < 0.5 ? 'здоровый'
      : whtr < 0.6 ? 'повышенный' : 'высокий';
  const stat = (x: number) => formatStatistic(x, fmtNumber);
  const measure = (x: number) => fmtNumber(x, 0);

  return {
    primary: { label: 'Отношение талии к росту', value: stat(whtr) },
    secondary: [
      { label: 'Отношение талии к бёдрам', value: stat(whr) },
      { label: 'Категория', value: band },
      { label: 'Обхват талии', value: `${measure(waist)} см` },
      { label: 'Обхват бёдер', value: `${measure(hip)} см` },
      { label: 'Рост', value: `${measure(height)} см` },
    ],
    note: 'Категория даётся по отношению талии к росту: оно сравнимо между людьми разного роста. Простое правило — талия меньше половины роста.',
  };
};
