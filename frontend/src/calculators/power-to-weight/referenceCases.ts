import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную при метрической л.с. = 735,49875 Вт:
//   150 PS = 110 324,8125 Вт = 110,3248 кВт; 110,3248 ÷ 1,4 т = 78,8034 кВт/т
//   150 ÷ 1,4 = 107,1428 л.с./т; 1400 ÷ 150 = 9,3333 кг/л.с.
//   450 PS = 330,9744 кВт; ÷ 1,65 т = 200,5906 кВт/т
export const powerToWeightReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: '150 л.с. при 1400 кг — 78,80 кВт/т',
    inputs: { power: 150, powerUnit: 'ps', mass: 1400 },
    expectPrimary: '78,80 кВт/т',
    expectSecondary: [
      { label: 'Лошадиных сил на тонну', value: '107,14 л.с./т' },
      { label: 'Килограммов на силу', value: '9,33 кг/л.с.' },
    ],
  },
  {
    name: '450 л.с. при 1650 кг — 200,59 кВт/т',
    inputs: { power: 450, powerUnit: 'ps', mass: 1650 },
    expectPrimary: '200,59 кВт/т',
    expectSecondary: [{ label: 'Килограммов на силу', value: '3,67 кг/л.с.' }],
  },
  {
    name: 'ввод в киловаттах: 110,3248 кВт при 1400 кг — тот же результат',
    inputs: { power: 110.3248125, powerUnit: 'kw', mass: 1400 },
    expectPrimary: '78,80 кВт/т',
  },
  {
    name: 'нагрузка увеличивает массу: 150 л.с., 1400 кг и 200 кг груза',
    inputs: { power: 150, powerUnit: 'ps', mass: 1400, payload: 200 },
    expectPrimary: '68,95 кВт/т',
  },
  {
    name: 'граница: 1 л.с. на 1000 кг — ровно 1 л.с. на тонну',
    inputs: { power: 1, powerUnit: 'ps', mass: 1000 },
    expectPrimary: '0,74 кВт/т',
    expectSecondary: [{ label: 'Лошадиных сил на тонну', value: '1,00 л.с./т' }],
  },
  {
    name: 'недопустимо: нулевая масса',
    inputs: { power: 150, powerUnit: 'ps', mass: 0 },
    expectPrimary: '—',
  },
  {
    name: 'недопустимо: нулевая мощность',
    inputs: { power: 0, powerUnit: 'ps', mass: 1400 },
    expectPrimary: '—',
  },
];
