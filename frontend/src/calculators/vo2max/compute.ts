import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Оценка максимального потребления кислорода (МПК, VO₂max).
//
//   тест Купера:  МПК = (дистанция за 12 минут − 504,9) / 44,73
//   по пульсу:    МПК = 15,3 × пульс_макс / пульс_покоя
//
// Оба способа — оценки, а не измерение: настоящий МПК определяют в лаборатории
// по составу выдыхаемого воздуха. Тест Купера опирается на реально пройденную
// дистанцию и потому чувствителен к темпу и покрытию; пульсовая формула не
// требует бегать вовсе, но целиком держится на пульсе покоя, который меняется
// от сна, кофеина и волнения сильнее, чем сама тренированность.
//
// Показывать оба ответа одновременно нельзя: у них разные входы и разная
// надёжность, и соседство создало бы ложное впечатление сходимости.
export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'cooper');
  const distance = toNumber(inputs.distance);
  const hrRest = toNumber(inputs.hrRest);
  const hrMax = toNumber(inputs.hrMax);

  const fail = (message: string) => ({
    primary: { label: 'МПК (VO₂max)', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  let value: number;
  const rows = [{ label: 'Метод', value: mode === 'hr' ? 'по пульсу' : 'тест Купера' }];
  if (mode === 'hr') {
    if (!(hrRest > 0)) return fail('Пульс покоя должен быть больше нуля');
    if (!(hrMax > hrRest)) return fail('Максимальный пульс должен быть больше пульса покоя');
    value = (15.3 * hrMax) / hrRest;
    rows.push({ label: 'Пульс покоя', value: fmtNumber(hrRest, 0) });
    rows.push({ label: 'Максимальный пульс', value: fmtNumber(hrMax, 0) });
  } else {
    if (!(distance > 0)) return fail('Дистанция должна быть больше нуля');
    value = (distance - 504.9) / 44.73;
    rows.push({ label: 'Дистанция за 12 минут', value: `${formatMeasure(distance, fmtNumber)} м` });
  }

  return {
    primary: { label: 'МПК (VO₂max)', value: `${formatMeasure(value, fmtNumber)} мл/кг/мин` },
    secondary: rows,
  };
};
