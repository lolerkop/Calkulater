import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';

// Расход топлива генератора: литры = нагрузка × удельный расход × часы.
//
// Удельный расход 0,3 л на киловатт-час — редактируемое допущение для дизельного
// генератора под нагрузкой около трёх четвертей номинала, а не норма для всех
// машин: у бензиновых он заметно выше, а на малой нагрузке хуже у любых.
// Значение видно и меняется, а не спрятано в справочнике.

const litres = (value: number): string => `${fmtNumber(value, 2)} л`;

export const compute: CalcFunction = (inputs) => {
  const load = toNumber(inputs.load);
  const sfc = toNumber(inputs.sfc);
  const hours = toNumber(inputs.hours);
  const price = toNumber(inputs.price);
  const fail = (message: string) => ({
    primary: { label: 'Расход топлива', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(load > 0)) return fail('Нагрузка должна быть больше нуля');
  if (!(sfc > 0)) return fail('Удельный расход должен быть больше нуля');
  if (!(hours > 0)) return fail('Время работы должно быть больше нуля');

  const perHour = load * sfc;
  const secondary = [{ label: 'Расход в час', value: `${fmtNumber(perHour, 2)} л/ч` }];
  // Необязательная сумма: строка стоимости появляется только вместе с ценой.
  if (price > 0) secondary.push({ label: 'Стоимость топлива', value: `${fmtNumber(perHour * hours * price, 2)} ₽` });

  return { primary: { label: 'Расход топлива', value: litres(perHour * hours) }, secondary };
};
