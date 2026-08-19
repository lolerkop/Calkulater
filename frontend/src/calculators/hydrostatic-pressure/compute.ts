import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatQuantity } from '../../lib/platform/measurement';

// Гидростатическое давление: p = ρgh, при необходимости плюс давление сверху.
//
// g = 9,80665 — то же стандартное значение, что и в остальной физике проекта.
//
// Различие избыточного и абсолютного давления здесь не косметическое: без
// внешнего давления результат — избыточное (манометрическое) давление столба,
// с ним — абсолютное. Выводится явно, потому что перепутать их означает
// ошибиться ровно на атмосферу.

const G = 9.80665;
const qty = (value: number): string => formatQuantity(value, fmtNumber);

export const compute: CalcFunction = (inputs) => {
  const density = toNumber(inputs.density);
  const depth = toNumber(inputs.depth);
  const p0 = toNumber(inputs.p0);
  const fail = (message: string) => ({
    primary: { label: 'Давление', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(density > 0)) return fail('Плотность должна быть больше нуля');
  if (!(depth >= 0)) return fail('Глубина не может быть отрицательной');
  if (p0 < 0) return fail('Внешнее давление не может быть отрицательным');

  const column = density * G * depth;
  const total = column + p0;
  const secondary = [
    { label: 'В барах', value: `${qty(total / 1e5)} бар` },
    { label: 'Тип давления', value: p0 > 0 ? 'абсолютное' : 'избыточное' },
  ];
  // Необязательная сумма: пока внешнего давления нет, разделять столб и полное
  // давление незачем — это одно и то же число.
  if (p0 > 0) secondary.push({ label: 'Давление столба', value: `${qty(column)} Па` });

  return { primary: { label: 'Давление', value: `${qty(total)} Па` }, secondary };
};
