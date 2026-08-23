import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Потери воды из подтекающего крана.
//
// Смысл расчёта — в масштабе: одна капля кажется ничем, но десять капель в
// минуту дают почти триста литров в год, а сплошная струйка в секунду — больше
// кубометра. Именно поэтому строка про кубометры за год стоит рядом с деньгами:
// счётчик считает кубометры, а не капли.
//
// Объём капли — вход, а не константа: он зависит от крана и от того, срывается
// капля или течёт. Умолчание 0,05 мл — обычная капля с бытового смесителя.
const MIN_IN_DAY = 60 * 24;
const DAYS_IN_MONTH = 30;
const DAYS_IN_YEAR = 365;
const ML_IN_L = 1000;
const L_IN_M3 = 1000;

export const compute: CalcFunction = (inputs) => {
  const drops = toNumber(inputs.drops);
  const price = toNumber(inputs.price);
  const dropMl = toNumber(inputs.dropMl);
  const fail = (message: string) => ({
    primary: { label: 'Утекает за сутки', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(drops > 0)) return fail('Число капель в минуту должно быть больше нуля');
  if (!(dropMl > 0)) return fail('Объём капли должен быть больше нуля');
  if (!(price >= 0)) return fail('Цена воды не может быть отрицательной');

  const perDay = (drops * MIN_IN_DAY * dropMl) / ML_IN_L;
  const perYear = perDay * DAYS_IN_YEAR;

  return {
    primary: { label: 'Утекает за сутки', value: `${formatMeasure(perDay, fmtNumber)} л` },
    secondary: [
      { label: 'За месяц', value: `${formatMeasure(perDay * DAYS_IN_MONTH, fmtNumber)} л` },
      { label: 'За год', value: `${formatMeasure(perYear, fmtNumber)} л` },
      { label: 'В кубометрах за год', value: `${formatMeasure(perYear / L_IN_M3, fmtNumber)} м³` },
      { label: 'Стоимость за год', value: `${formatMeasure((perYear / L_IN_M3) * price, fmtNumber)} ₽` },
    ],
  };
};
