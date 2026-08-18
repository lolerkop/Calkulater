import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены из определений, а не прогоном движка:
//   фут-кандела = 1 люмен на квадратный фут = 1 / 0,09290304 лк = 10,763910416709722
//   (квадратный фут равен 0,3048² = 0,09290304 м² точно)
//   фот = 1 люмен на квадратный сантиметр = 10 000 лк · нокс = 0,001 лк
export const illuminanceReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'фут-кандела в люксах: 10,7639',
    inputs: { value: 1, from: 'fc', to: 'lx' },
    expectPrimary: '10,7639 лк',
  },
  {
    name: 'офисные 500 люксов в фут-канделах',
    inputs: { value: 500, from: 'lx', to: 'fc' },
    expectPrimary: '46,4515 фк',
  },
  {
    name: 'фот равен десяти тысячам люксов',
    inputs: { value: 1, from: 'ph', to: 'lx' },
    expectPrimary: '10 000,00 лк',
  },
  {
    name: 'обратно: килолюкс в фут-канделах',
    inputs: { value: 1, from: 'klx', to: 'fc' },
    expectPrimary: '92,9030 фк',
  },
  {
    name: 'совпадение единиц не даёт дрейфа',
    inputs: { value: 36.6, from: 'lx', to: 'lx' },
    expectPrimary: '36,6000 лк',
  },
  {
    name: 'ноль остаётся нулём',
    inputs: { value: 0, from: 'lx', to: 'ph' },
    expectPrimary: '0 фот',
  },
];
