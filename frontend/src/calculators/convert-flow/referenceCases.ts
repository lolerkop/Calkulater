import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Объёмный расход, а не массовый: величина одна и та же во всех единицах.
// Значения выведены из определений, а не прогоном движка:
//   1 м³/ч = 1000 л / 60 мин = 16,6667 л/мин
//   1 ft³/мин = 0,3048³ м³ за минуту = 1,699011 м³/ч
//   1 гал США = 3,785411784 л (точно)
export const flowReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'кубометр в час равен 16,6667 литра в минуту',
    inputs: { value: 1, from: 'm3h', to: 'lmin' },
    expectPrimary: '16,6667 л/мин',
  },
  {
    name: 'литр в секунду — это 3,6 кубометра в час',
    inputs: { value: 1, from: 'ls', to: 'm3h' },
    expectPrimary: '3,6000 м³/ч',
  },
  {
    name: 'кубический фут в минуту в кубометрах в час',
    inputs: { value: 1, from: 'ft3min', to: 'm3h' },
    expectPrimary: '1,6990 м³/ч',
  },
  {
    name: 'обратно: 16,6667 л/мин дают кубометр в час',
    inputs: { value: 1000 / 60, from: 'lmin', to: 'm3h' },
    expectPrimary: '1,0000 м³/ч',
  },
  {
    name: 'совпадение единиц не даёт дрейфа',
    inputs: { value: 36.6, from: 'ls', to: 'ls' },
    expectPrimary: '36,6000 л/с',
  },
  {
    name: 'ноль остаётся нулём',
    inputs: { value: 0, from: 'm3h', to: 'galmin' },
    expectPrimary: '0 гал/мин',
  },
];
