import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';

// Время загрузки файла.
//
// Две системы единиц встречаются в одной задаче, и путаница между ними —
// главный источник неверных ответов. Размер файла измеряется в байтах, причём
// приставка может быть десятичной (КБ = 1000 байт) или двоичной (КиБ = 1024),
// а скорость канала — в битах в секунду с десятичной приставкой. Обе шкалы
// объявлены явными таблицами, а перевод байт в биты сделан один раз:
// bits = байты × 8. Никаких скрытых поправок на накладные расходы протокола
// здесь нет — расчёт теоретический, и запас пользователь закладывает сам.
const display = (v: number) => v > 0 && v < 0.005 ? v.toExponential(3).replace('.', ',') : fmtNumber(v, 2);
const duration = (v: number) => {
  if (v > Number.MAX_SAFE_INTEGER) return `${display(v)} с`;
  const total = Math.round(v), h = Math.floor(total / 3600), m = Math.floor(total % 3600 / 60), sec = total % 60;
  return h ? `${h}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}` : `${m}:${String(sec).padStart(2, '0')}`;
};
const BYTES: Record<string, number> = {
  kb: 1e3, mb: 1e6, gb: 1e9, tb: 1e12,
  kib: 1024, mib: 1024 ** 2, gib: 1024 ** 3, tib: 1024 ** 4,
};
const BITS_PER_SECOND: Record<string, number> = {
  kbit: 1e3, mbit: 1e6, gbit: 1e9,
  mbyte: 8e6, // МБ/с — байты, поэтому восемь мегабит
};

import { read, INPUT, RANGE } from '../../lib/platform/measurementScalar';

import { exact, times, ratio as divide } from '../../lib/platform/geometryNumericInput';

export const compute: CalcFunction = (inputs) => {
  const size = read(inputs.size);
  const sizeUnit = (typeof inputs.sizeUnit === 'string' ? inputs.sizeUnit : inputs.sizeUnit === undefined ? 'gb' : '');
  const speed = read(inputs.speed);
  const speedUnit = (typeof inputs.speedUnit === 'string' ? inputs.speedUnit : inputs.speedUnit === undefined ? 'mbit' : '');

  const fail = (message: string) => ({
    primary: { label: 'Время загрузки', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (![size, speed].every(Number.isFinite)) return fail(INPUT);
  if (!Object.hasOwn(BYTES, sizeUnit) || !Object.hasOwn(BITS_PER_SECOND, speedUnit)) return fail('Выберите единицы из списка');
  if (!(size > 0)) return fail('Размер файла должен быть больше нуля');
  if (!(speed > 0)) return fail('Скорость должна быть больше нуля');

  const bytesExact = times(exact(size), exact(BYTES[sizeUnit]));
  const speedExact = times(exact(speed), exact(BITS_PER_SECOND[speedUnit]));
  const seconds = divide(times(bytesExact, exact(8)), speedExact);
  const mb = divide(bytesExact, exact(1e6)), mib = divide(bytesExact, exact(1024 ** 2));
  const mbit = divide(speedExact, exact(1e6)), mbyte = divide(speedExact, exact(8e6));
  if (![seconds, mb, mib, mbit, mbyte].every(v => Number.isFinite(v) && v > 0)) return fail(RANGE);

  const headline = seconds < 1
    ? `${display(seconds * 1000)} мс`
    : seconds < 60
      ? `${display(seconds)} с`
      : duration(seconds);

  return {
    primary: { label: 'Время загрузки', value: headline },
    secondary: [
      { label: 'Всего секунд', value: display(seconds) },
      { label: 'Размер файла', value: `${display(mb)} МБ (${display(mib)} МиБ)` },
      { label: 'Скорость канала', value: `${display(mbit)} Мбит/с = ${display(mbyte)} МБ/с` },
    ],
  };
};
