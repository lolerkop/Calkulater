import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Однофазная сеть: связь напряжения, тока, коэффициента мощности и трёх мощностей.
//
//   P = U · I · cos φ      активная, Вт   — то, что реально совершает работу
//   S = U · I              полная,   ВА   — то, на что рассчитан кабель и автомат
//   Q = √(S² − P²)         реактивная, вар — то, что ходит туда-обратно
//
// Режим «найти ток» — прямое обращение первой формулы: I = P / (U · cos φ).
// Он нужен потому, что практическая задача чаще обратная: мощность прибора
// известна с шильдика, а выбрать нужно сечение провода и номинал автомата,
// то есть именно ток.
//
// Коэффициент мощности больше единицы физически невозможен, и его ввод
// отклоняется: иначе подкоренное выражение стало бы отрицательным.
export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'P');
  const voltage = toNumber(inputs.voltage);
  const powerFactor = toNumber(inputs.powerFactor);
  const currentInput = toNumber(inputs.current);
  const powerInput = toNumber(inputs.power);

  const primaryLabel = mode === 'current' ? 'Ток' : 'Активная мощность';
  const fail = (message: string) => ({
    primary: { label: primaryLabel, value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(voltage > 0)) return fail('Напряжение должно быть больше нуля');
  if (!(powerFactor > 0 && powerFactor <= 1)) return fail('Коэффициент мощности должен быть больше нуля и не больше единицы');

  let active: number;
  let current: number;
  if (mode === 'current') {
    if (!(powerInput > 0)) return fail('Активная мощность должна быть больше нуля');
    active = powerInput;
    current = active / (voltage * powerFactor);
  } else {
    if (!(currentInput > 0)) return fail('Ток должен быть больше нуля');
    current = currentInput;
    active = voltage * current * powerFactor;
  }

  const apparent = voltage * current;
  const reactive = Math.sqrt(Math.max(0, apparent * apparent - active * active));
  const q = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;

  const rows = [
    { label: 'Полная мощность', value: q(apparent, 'ВА') },
    { label: 'Реактивная мощность', value: q(reactive, 'вар') },
  ];

  return mode === 'current'
    ? {
        primary: { label: 'Ток', value: q(current, 'А') },
        secondary: [{ label: 'Активная мощность', value: q(active, 'Вт') }, ...rows],
      }
    : {
        primary: { label: 'Активная мощность', value: q(active, 'Вт') },
        secondary: [...rows, { label: 'Ток', value: q(current, 'А') }],
      };
};
