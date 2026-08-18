import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения известны из определения приставок СИ и записаны вручную:
//   1 кГц = 1000 Гц · 1 ГГц = 1000 МГц · 1 Гц = 60 об/мин · 1 мГц = 0,001 Гц
export const frequencyReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'гигагерц равен тысяче мегагерц',
    inputs: { value: 1, from: 'ghz', to: 'mhz' },
    expectPrimary: '1 000,00 МГц',
  },
  {
    name: 'частота 2,4 ГГц в мегагерцах',
    inputs: { value: 2.4, from: 'ghz', to: 'mhz' },
    expectPrimary: '2 400,00 МГц',
  },
  {
    name: 'герц равен шестидесяти оборотам в минуту',
    inputs: { value: 1, from: 'hz', to: 'rpm' },
    expectPrimary: '60,0000 об/мин',
  },
  {
    name: 'обратно: 3000 об/мин дают 50 Гц',
    inputs: { value: 3000, from: 'rpm', to: 'hz' },
    expectPrimary: '50,0000 Гц',
  },
  {
    name: 'совпадение единиц не даёт дрейфа',
    inputs: { value: 36.6, from: 'khz', to: 'khz' },
    expectPrimary: '36,6000 кГц',
  },
  {
    name: 'ноль остаётся нулём',
    inputs: { value: 0, from: 'ghz', to: 'hz' },
    expectPrimary: '0 Гц',
  },
];
