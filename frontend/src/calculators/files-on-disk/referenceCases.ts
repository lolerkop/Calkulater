import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную: n = ⌊ёмкость_байт ÷ размер_файла_байт⌋.
//   1000 ГБ = 1e12 байт ÷ 4 МБ = 4e6 → 250 000
//   64 ГиБ = 68 719 476 736 ÷ 25 МиБ = 26 214 400 → 2621,44 → 2621
export const filesOnDiskReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'терабайт по десятичной шкале вмещает 250 000 файлов по 4 МБ',
    inputs: { capacity: 1000, capacityUnit: 'gb', fileSize: 4, fileUnit: 'mb' },
    expectPrimary: '250 000',
  },
  {
    name: 'двоичная шкала: 64 ГиБ по 25 МиБ — 2621 файл',
    inputs: { capacity: 64, capacityUnit: 'gib', fileSize: 25, fileUnit: 'mib' },
    expectPrimary: '2 621',
    expectSecondary: [{ label: 'Точное частное', value: '2 621,4400' }],
  },
  {
    name: 'граница: файл ровно в размер носителя',
    inputs: { capacity: 1, capacityUnit: 'mb', fileSize: 1, fileUnit: 'mb' },
    expectPrimary: '1',
  },
  {
    name: 'граница: файл больше носителя — ноль, а не ошибка',
    inputs: { capacity: 1, capacityUnit: 'mb', fileSize: 2, fileUnit: 'mb' },
    expectPrimary: '0',
    expectSecondary: [{ label: 'Точное частное', value: '0,5000' }],
  },
  {
    name: 'служебный резерв уменьшает доступное место',
    inputs: { capacity: 1000, capacityUnit: 'gb', fileSize: 4, fileUnit: 'mb', reserved: 10 },
    expectPrimary: '225 000',
  },
  {
    name: 'недопустимо: нулевой размер файла',
    inputs: { capacity: 1, capacityUnit: 'gb', fileSize: 0, fileUnit: 'mb' },
    expectPrimary: '—',
  },
];
