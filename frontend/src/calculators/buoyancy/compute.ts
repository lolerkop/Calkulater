import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Закон Архимеда: F = ρ · g · V.
//
// Выталкивающая сила зависит от объёма вытесненной жидкости и её плотности —
// и вовсе не от того, что внутри тела. Пустая бочка и полная бочка одного
// размера получают одинаковую выталкивающую силу; различает их только вес.
// Поэтому равнодействующая, а не сама сила, отвечает на вопрос «всплывёт ли».
//
// Сравнение вытесненной массы с массой тела — то же самое неравенство, но
// нагляднее: тело всплывает ровно тогда, когда вытесняет больше собственной
// массы. Порога здесь нет и не нужно: при равенстве разность выходит РОВНО
// нулевой, потому что обе стороны умножаются на одно и то же g.
const G = 9.80665;

export const compute: CalcFunction = (inputs) => {
  const volume = toNumber(inputs.volume);
  const rhoFluid = toNumber(inputs.rhoFluid);
  const mass = toNumber(inputs.mass);
  const fail = (message: string) => ({
    primary: { label: 'Выталкивающая сила', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(volume > 0)) return fail('Объём тела должен быть больше нуля');
  if (!(rhoFluid > 0)) return fail('Плотность жидкости должна быть больше нуля');
  if (!(mass >= 0)) return fail('Масса не может быть отрицательной');

  const force = rhoFluid * G * volume;
  const weight = mass * G;
  const net = force - weight;
  const displaced = rhoFluid * volume;
  const behaviour = net > 0 ? 'всплывает' : net < 0 ? 'тонет' : 'нейтральная плавучесть';
  const m = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;

  return {
    primary: { label: 'Выталкивающая сила', value: m(force, 'Н') },
    secondary: [
      { label: 'Вес тела', value: m(weight, 'Н') },
      { label: 'Равнодействующая', value: m(net, 'Н') },
      { label: 'Вытесненная масса', value: m(displaced, 'кг') },
      { label: 'Поведение в жидкости', value: behaviour },
    ],
  };
};
