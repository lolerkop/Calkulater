import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Мощность ветрового потока и то, что из неё можно снять.
//
// Скорость входит в КУБЕ: удвоение ветра даёт восьмикратный рост мощности.
// Отсюда практический вывод, который важнее любой цифры — площадка решает
// больше, чем размер колеса, и ветряк на слабом ветру не спасает никакой
// диаметр.
//
// Предел Бетца 16/27 ≈ 0,593 — не свойство конструкции, а следствие сохранения
// массы и импульса: полностью остановить поток нельзя, иначе за колесом воздуху
// некуда деваться. Поэтому коэффициент использования выше него отклоняется.
const BETZ = 0.593;
const KW = 1000;
const HOURS = 24;

export const compute: CalcFunction = (inputs) => {
  const diameter = toNumber(inputs.d);
  const speed = toNumber(inputs.v);
  const cp = toNumber(inputs.cp);
  const density = toNumber(inputs.rho);
  const fail = (message: string) => ({
    primary: { label: 'Снимаемая мощность', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(diameter > 0)) return fail('Диаметр должен быть больше нуля');
  if (!(speed >= 0)) return fail('Скорость ветра не может быть отрицательной');
  if (!(density > 0)) return fail('Плотность воздуха должна быть больше нуля');
  if (!(cp > 0 && cp <= BETZ)) return fail('Коэффициент использования не может превышать предел Бетца 0,593');

  const area = (Math.PI * diameter * diameter) / 4;
  const flow = 0.5 * density * area * Math.pow(speed, 3);
  const useful = flow * cp;

  return {
    primary: { label: 'Снимаемая мощность', value: `${formatMeasure(useful / KW, fmtNumber)} кВт` },
    secondary: [
      { label: 'Мощность потока', value: `${formatMeasure(flow / KW, fmtNumber)} кВт` },
      { label: 'Ометаемая площадь', value: `${formatMeasure(area, fmtNumber)} м²` },
      { label: 'Предел Бетца', value: `${formatMeasure((flow * BETZ) / KW, fmtNumber)} кВт` },
      { label: 'Выработка за сутки', value: `${formatMeasure((useful / KW) * HOURS, fmtNumber)} кВт·ч` },
    ],
  };
};
