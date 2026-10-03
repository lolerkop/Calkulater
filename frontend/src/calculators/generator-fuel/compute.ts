import { number as toNumber, optionalNumber, validOutput } from '../../lib/platform/scalarInputDisplay';
import type { CalcFunction } from '../../lib/types';
import { fmtNumber, preserveNonZero } from '../../lib/format';

// Расход топлива генератора: литры = нагрузка × удельный расход × часы.
//
// Удельный расход 0,3 л/(кВт·ч) — видимое редактируемое допущение.
// Для своего генератора берут данные или замер при своей нагрузке;
// режим холостого хода этой линейной формулой не определяется.

const litres = (value: number): string => `${fmtNumber(preserveNonZero(value, 2), 2)} л`;

export const compute: CalcFunction = (inputs) => {
  const load = toNumber(inputs.load);
  const sfc = toNumber(inputs.sfc);
  const hours = toNumber(inputs.hours);
  const price = optionalNumber(inputs.price);
  const fail = (message: string) => ({
    primary: { label: 'Расход топлива', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (load === null || sfc === null || hours === null || price === null) return fail('Введите корректные числовые данные');
  if (price < 0) return fail('Цена топлива не может быть отрицательной');

  if (!(load > 0)) return fail('Нагрузка должна быть больше нуля');
  if (!(sfc > 0)) return fail('Удельный расход должен быть больше нуля');
  if (!(hours > 0)) return fail('Время работы должно быть больше нуля');

  const perHour = load * sfc;
  const total = perHour * hours;
  const cost = total * price;
  if (!validOutput(perHour, true) || !validOutput(total, true) || (!validOutput(cost) || (price > 0 && cost === 0))) return fail('Результат вне допустимого диапазона');
  const secondary = [{ label: 'Расход в час', value: `${fmtNumber(preserveNonZero(perHour, 2), 2)} л/ч` }];
  // Необязательная сумма: строка стоимости появляется только вместе с ценой.
  if (price > 0) secondary.push({ label: 'Стоимость топлива', value: `${fmtNumber(preserveNonZero(cost, 2), 2)} ₽` });

  return { primary: { label: 'Расход топлива', value: litres(total) }, secondary };
};
