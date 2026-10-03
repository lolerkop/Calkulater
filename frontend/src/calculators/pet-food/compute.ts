import { number as toNumber, validOutput } from '../../lib/platform/scalarInputDisplay';
import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// AAHA-style initial energy estimate; individual feeding requirements must be assessed separately.
export const compute: CalcFunction = (inputs) => {
  const weight = toNumber(inputs.weight);
  const factor = toNumber(inputs.factor);
  const kcalPer100 = toNumber(inputs.kcalPer100);

  const fail = (message: string) => ({
    primary: { label: 'Норма корма в сутки', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (weight === null || factor === null || kcalPer100 === null) return fail('Введите корректные числовые данные');
  if (!(weight > 0)) return fail('Масса питомца должна быть больше нуля');
  if (!(factor > 0)) return fail('Множитель потребности должен быть больше нуля');
  if (!(kcalPer100 > 0)) return fail('Калорийность корма должна быть больше нуля');

  const rer = 70 * Math.pow(weight, 0.75);
  const mer = rer * factor;
  const food = (mer / kcalPer100) * 100;
  if (![rer, mer, food].every(v => validOutput(v, true))) return fail('Результат вне допустимого диапазона');
  const q = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;

  return {
    note: 'Это энергетическая оценка, а не назначение рациона. Вид, состояние тела, болезни, лакомства и индивидуальная потребность не определяются по этим трём входам.',
    primary: { label: 'Норма корма в сутки', value: q(food, 'г') },
    secondary: [
      { label: 'Потребность в энергии', value: q(mer, 'ккал') },
      { label: 'Обмен покоя (RER)', value: q(rer, 'ккал') },
      { label: 'Масса питомца', value: q(weight, 'кг') },
    ],
  };
};
