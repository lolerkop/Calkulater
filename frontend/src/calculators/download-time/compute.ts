import type { CalcFunction } from '../../lib/types';
import { fmtDuration, fmtNumber, toNumber, toStr } from '../../lib/format';

// Время загрузки файла.
//
// Две системы единиц встречаются в одной задаче, и путаница между ними —
// главный источник неверных ответов. Размер файла измеряется в байтах, причём
// приставка может быть десятичной (КБ = 1000 байт) или двоичной (КиБ = 1024),
// а скорость канала — в битах в секунду с десятичной приставкой. Обе шкалы
// объявлены явными таблицами, а перевод байт в биты сделан один раз:
// bits = байты × 8. Никаких скрытых поправок на накладные расходы протокола
// здесь нет — расчёт теоретический, и запас пользователь закладывает сам.
const BYTES: Record<string, number> = {
  kb: 1e3, mb: 1e6, gb: 1e9, tb: 1e12,
  kib: 1024, mib: 1024 ** 2, gib: 1024 ** 3, tib: 1024 ** 4,
};
const BITS_PER_SECOND: Record<string, number> = {
  kbit: 1e3, mbit: 1e6, gbit: 1e9,
  mbyte: 8e6, // МБ/с — байты, поэтому восемь мегабит
};

export const compute: CalcFunction = (inputs) => {
  const size = toNumber(inputs.size);
  const sizeUnit = toStr(inputs.sizeUnit, 'gb');
  const speed = toNumber(inputs.speed);
  const speedUnit = toStr(inputs.speedUnit, 'mbit');

  const fail = (message: string) => ({
    primary: { label: 'Время загрузки', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(size > 0)) return fail('Размер файла должен быть больше нуля');
  if (!(speed > 0)) return fail('Скорость должна быть больше нуля');

  const bytes = size * (BYTES[sizeUnit] ?? 1e9);
  const bitsPerSecond = speed * (BITS_PER_SECOND[speedUnit] ?? 1e6);
  const seconds = (bytes * 8) / bitsPerSecond;

  const headline = seconds < 1
    ? `${fmtNumber(seconds * 1000, 2)} мс`
    : seconds < 60
      ? `${fmtNumber(seconds, 2)} с`
      : fmtDuration(seconds);

  return {
    primary: { label: 'Время загрузки', value: headline },
    secondary: [
      { label: 'Всего секунд', value: fmtNumber(seconds, 2) },
      { label: 'Размер файла', value: `${fmtNumber(bytes / 1e6, 2)} МБ (${fmtNumber(bytes / 1024 ** 2, 2)} МиБ)` },
      { label: 'Скорость канала', value: `${fmtNumber(bitsPerSecond / 1e6, 2)} Мбит/с = ${fmtNumber(bitsPerSecond / 8e6, 2)} МБ/с` },
    ],
  };
};
