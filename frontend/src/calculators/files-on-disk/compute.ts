import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber as ordinaryNumber } from '../../lib/format';

// Сколько файлов заданного размера поместится на носитель.
//
// Десятичные и двоичные приставки разведены явными таблицами: производитель
// пишет на коробке терабайт как 10¹² байт, а система показывает тебибайты, и
// именно отсюда берётся «пропавшее» место. Скрывать это в коэффициенте нельзя,
// поэтому единица выбирается отдельно для носителя и для файла.
//
// Файловая система и размер кластера не моделируются — служебный резерв задаёт
// сам посетитель отдельным полем.
const BYTES: Record<string, number> = {
  mb: 1e6, gb: 1e9, tb: 1e12,
  mib: 1024 ** 2, gib: 1024 ** 3, tib: 1024 ** 4,
  kb: 1e3, kib: 1024,
};

import { read, INPUT, RANGE } from '../../lib/platform/measurementScalar';

import { decimal, mul, sub, quotient, finite } from './numeric';

const fmtNumber = (value: number, digits = 2): string => value !== 0 && Math.abs(value) < 0.5 * 10 ** -digits ? value.toExponential(3).replace('.', ',') : ordinaryNumber(value, digits);

export const compute: CalcFunction = (inputs) => {
  const capacity = read(inputs.capacity);
  const capacityUnit = (typeof inputs.capacityUnit === 'string' ? inputs.capacityUnit : inputs.capacityUnit === undefined ? 'gb' : '');
  const fileSize = read(inputs.fileSize);
  const fileUnit = (typeof inputs.fileUnit === 'string' ? inputs.fileUnit : inputs.fileUnit === undefined ? 'mb' : '');
  const reserved = inputs.reserved === undefined ? 0 : read(inputs.reserved);

  const fail = (message: string) => ({
    primary: { label: 'Поместится файлов', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (![capacity, fileSize, reserved].every(Number.isFinite)) return fail(INPUT);
  if (!['mb','gb','tb','mib','gib','tib'].includes(capacityUnit) || !['kb','mb','gb','kib','mib','gib'].includes(fileUnit)) return fail('Выберите единицы из списка');
  if (!(capacity > 0)) return fail('Ёмкость должна быть больше нуля');
  if (!(fileSize > 0)) return fail('Размер файла должен быть больше нуля');
  if (reserved < 0 || reserved >= 100) return fail('Резерв задаётся в диапазоне от 0 до 100 процентов');

  const capacityExact = mul(decimal(capacity), decimal(BYTES[capacityUnit]));
  const fileExact = mul(decimal(fileSize), decimal(BYTES[fileUnit]));
  const reserveFraction = quotient(decimal(reserved), decimal(100));
  const usableExact = mul(capacityExact, sub(decimal(1), reserveFraction));
  const fileRatio = quotient(usableExact, fileExact);
  const countBig = fileRatio.n / fileRatio.d;
  if (countBig > BigInt(Number.MAX_SAFE_INTEGER)) return fail('Число файлов превышает диапазон безопасных целых');
  const count = Number(countBig), exact = finite(fileRatio);
  const usable = finite(quotient(usableExact, decimal(1e9)));
  const remainder = sub(usableExact, mul(fileExact, decimal(count)));
  const leftover = finite(quotient(remainder, decimal(BYTES[capacityUnit])));
  const reserveGb = finite(quotient(mul(capacityExact, reserveFraction), decimal(1e9)));
  if (![exact, usable, leftover, reserveGb].every(Number.isFinite) || usable <= 0 || (remainder.n > 0n && leftover === 0) || (reserved > 0 && reserveGb === 0)) return fail(RANGE);

  const secondary = [
    { label: 'Точное частное', value: fmtNumber(exact, 4) },
    { label: 'Останется свободно', value: `${fmtNumber(leftover, 4)} ${(typeof inputs.capacityUnit === 'string' ? inputs.capacityUnit : inputs.capacityUnit === undefined ? 'gb' : '').toUpperCase()}` },
    { label: 'Доступно под файлы', value: `${fmtNumber(usable, 2)} ГБ` },
  ];

  // Резерв задан — показываем, сколько места он забрал. Без него строки нет.
  if (reserved > 0) {
    secondary.push({
      label: 'Отдано под резерв',
      value: `${fmtNumber(reserveGb, 2)} ГБ`,
    });
  }

  return {
    primary: { label: 'Поместится файлов', value: fmtInt(count) },
    secondary,
  };
};
