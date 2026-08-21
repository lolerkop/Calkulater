import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Забор: столбы, секции и лаги.
//
// Столбов на один больше числа секций — крайний нужен с обеих сторон, — и ещё
// по одному на каждый проём: калитка и ворота требуют собственных опор, к
// которым крепятся навесы. Без этого забор на бумаге выходит дешевле, чем на
// участке.
//
// Секции округляются вверх, а фактический шаг столбов пересчитывается обратно:
// сорок метров пролётами по 2,5 делятся ровно, а сто метров по 3 — нет, и
// последний пролёт окажется короче. Показать это честнее, чем умолчать.

export const compute: CalcFunction = (inputs) => {
  const length = toNumber(inputs.length);
  const span = toNumber(inputs.span);
  const height = toNumber(inputs.height);
  const rails = toNumber(inputs.rails);
  const gates = toNumber(inputs.gates);
  const fail = (message: string) => ({
    primary: { label: 'Столбов', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(length > 0)) return fail('Длина забора должна быть больше нуля');
  if (!(span > 0)) return fail('Пролёт должен быть больше нуля');
  if (!(height > 0)) return fail('Высота должна быть больше нуля');
  if (!Number.isInteger(rails) || rails < 1 || rails > 5) return fail('Лаг должно быть от одной до пяти');
  if (!Number.isInteger(gates) || gates < 0) return fail('Число проёмов не может быть отрицательным');

  const sections = Math.ceil(length / span);
  const posts = sections + 1 + gates;
  const railMeters = sections * span * rails;
  const measure = (x: number) => formatMeasure(x, fmtNumber);

  return {
    primary: { label: 'Столбов', value: fmtNumber(posts, 0) },
    secondary: [
      { label: 'Секций', value: fmtNumber(sections, 0) },
      { label: 'Метров лаг', value: measure(railMeters) },
      { label: 'Площадь зашивки', value: `${measure(length * height)} м²` },
      { label: 'Пролёт', value: `${measure(span)} м` },
      { label: 'Фактический шаг столбов', value: `${measure(length / sections)} м` },
    ],
  };
};
