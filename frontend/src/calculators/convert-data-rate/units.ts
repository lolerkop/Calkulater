// Единицы скорости передачи данных. База — бит в секунду. Байт равен восьми
// битам, поэтому байтовые единицы получают множитель 8: приравнивать биты к
// байтам молча значило бы ошибаться ровно в восемь раз.

import type { ConversionUnits } from '../../lib/platform/conversion';

export type DataRateUnit = 'bits' | 'kbits' | 'mbits' | 'gbits' | 'bytes' | 'kbytes' | 'mbytes' | 'mibs';

export const dataRateUnits: ConversionUnits<DataRateUnit> = {
  bits: { symbol: 'бит/с', factor: 1 },
  kbits: { symbol: 'кбит/с', factor: 1000 },
  mbits: { symbol: 'Мбит/с', factor: 1e6 },
  gbits: { symbol: 'Гбит/с', factor: 1e9 },
  bytes: { symbol: 'Б/с', factor: 8 },
  kbytes: { symbol: 'кБ/с', factor: 8000 },
  mbytes: { symbol: 'МБ/с', factor: 8e6 },
  mibs: { symbol: 'МиБ/с', factor: 8 * 1024 ** 2 },
};

export const dataRateNames: Record<DataRateUnit, string> = { bits: 'Бит в секунду', kbits: 'Килобит в секунду', mbits: 'Мегабит в секунду', gbits: 'Гигабит в секунду', bytes: 'Байт в секунду', kbytes: 'Килобайт в секунду', mbytes: 'Мегабайт в секунду', mibs: 'Мебибайт в секунду' };
