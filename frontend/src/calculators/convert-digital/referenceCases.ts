import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения вычислены из определений приставок, а не прогоном движка:
//   1 КиБ = 1024 Б (2^10)
//   1 кБ = 1000 Б (10^3)
//   1 ГиБ = 1073741824 Б (2^30)
//   1 ГБ = 10^9 / 2^30 = 0,9313225746154785 гибибайта
//   1 ТБ = 10^12 Б, и в гибибайтах это 10^12 / 2^30 = 931,3225746154785
//   1 байт = 8 бит
export const digitalReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'двоичная приставка: 1 КиБ = 1024 Б',
    inputs: { value: 1, from: 'KiB', to: 'B' },
    expectPrimary: '1 024,00 Б',
  },
  {
    name: 'десятичная приставка: 1 кБ = 1000 Б',
    inputs: { value: 1, from: 'kB', to: 'B' },
    expectPrimary: '1 000,00 Б',
  },
  {
    name: 'системы не совпадают: 1 ГБ меньше гибибайта',
    inputs: { value: 1, from: 'GB', to: 'GiB' },
    expectPrimary: '0,931323 ГиБ',
  },
  {
    name: 'диск на 1 ТБ показывается как 931,32 ГиБ',
    inputs: { value: 1, from: 'TB', to: 'GiB' },
    expectPrimary: '931,3226 ГиБ',
  },
  {
    name: 'байт равен восьми битам',
    inputs: { value: 1, from: 'B', to: 'bit' },
    expectPrimary: '8,0000 бит',
  },
  {
    name: 'обратно: 8 бит дают один байт',
    inputs: { value: 8, from: 'bit', to: 'B' },
    expectPrimary: '1,0000 Б',
  },
  {
    name: 'очень крупное значение: 1 ТиБ в байтах',
    inputs: { value: 1, from: 'TiB', to: 'B' },
    expectPrimary: '1 099 511 627 776,00 Б',
  },
];
