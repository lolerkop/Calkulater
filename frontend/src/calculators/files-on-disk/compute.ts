import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber, toNumber, toStr } from '../../lib/format';

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

export const compute: CalcFunction = (inputs) => {
  const capacity = toNumber(inputs.capacity);
  const capacityUnit = toStr(inputs.capacityUnit, 'gb');
  const fileSize = toNumber(inputs.fileSize);
  const fileUnit = toStr(inputs.fileUnit, 'mb');
  const reserved = toNumber(inputs.reserved);

  const fail = (message: string) => ({
    primary: { label: 'Поместится файлов', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(capacity > 0)) return fail('Ёмкость должна быть больше нуля');
  if (!(fileSize > 0)) return fail('Размер файла должен быть больше нуля');
  if (reserved < 0 || reserved >= 100) return fail('Резерв задаётся в диапазоне от 0 до 100 процентов');

  const capacityBytes = capacity * (BYTES[capacityUnit] ?? 1e9);
  const fileBytes = fileSize * (BYTES[fileUnit] ?? 1e6);
  const usable = capacityBytes * (1 - reserved / 100);
  const exact = usable / fileBytes;
  const count = Math.floor(exact);
  const leftover = usable - count * fileBytes;

  const secondary = [
    { label: 'Точное частное', value: fmtNumber(exact, 4) },
    { label: 'Останется свободно', value: `${fmtNumber(leftover / (BYTES[capacityUnit] ?? 1e9), 4)} ${toStr(inputs.capacityUnit, 'gb').toUpperCase()}` },
    { label: 'Доступно под файлы', value: `${fmtNumber(usable / 1e9, 2)} ГБ` },
  ];

  // Резерв задан — показываем, сколько места он забрал. Без него строки нет.
  if (reserved > 0) {
    secondary.push({
      label: 'Отдано под резерв',
      value: `${fmtNumber((capacityBytes - usable) / 1e9, 2)} ГБ`,
    });
  }

  return {
    primary: { label: 'Поместится файлов', value: fmtInt(count) },
    secondary,
  };
};
