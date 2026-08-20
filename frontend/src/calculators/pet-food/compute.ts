import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Суточная норма корма по энергетической потребности животного.
//
//   RER = 70 × масса^0,75          обмен покоя, ккал в сутки
//   MER = RER × множитель          с поправкой на возраст, активность, стерилизацию
//   норма = MER / калорийность × 100   граммов корма в сутки
//
// Степень 0,75, а не единица, — это не приближение, а установленная зависимость:
// потребность растёт медленнее массы, поэтому кошка вчетверо легче собаки ест
// вовсе не вчетверо меньше. Линейный пересчёт систематически перекармливает
// мелких животных и недокармливает крупных.
export const compute: CalcFunction = (inputs) => {
  const weight = toNumber(inputs.weight);
  const factor = toNumber(inputs.factor);
  const kcalPer100 = toNumber(inputs.kcalPer100);

  const fail = (message: string) => ({
    primary: { label: 'Норма корма в сутки', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(weight > 0)) return fail('Масса питомца должна быть больше нуля');
  if (!(factor > 0)) return fail('Множитель потребности должен быть больше нуля');
  if (!(kcalPer100 > 0)) return fail('Калорийность корма должна быть больше нуля');

  const rer = 70 * Math.pow(weight, 0.75);
  const mer = rer * factor;
  const q = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;

  return {
    primary: { label: 'Норма корма в сутки', value: q((mer / kcalPer100) * 100, 'г') },
    secondary: [
      { label: 'Потребность в энергии', value: q(mer, 'ккал') },
      { label: 'Обмен покоя (RER)', value: q(rer, 'ккал') },
      { label: 'Масса питомца', value: q(weight, 'кг') },
    ],
  };
};
