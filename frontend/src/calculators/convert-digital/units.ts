// Единицы цифровых данных. База — байт.
//
// Здесь важна не арифметика, а то, что систем две и они не совпадают.
// Десятичные приставки СИ идут степенями тысячи, двоичные приставки IEC —
// степенями 1024. Гигабайт и гибибайт различаются примерно на 7 %, и именно
// поэтому диск «на 1 ТБ» показывается системой как 931 ГиБ.
//
// Смешивать их нельзя: MB — это не MiB.

import type { ConversionUnits } from '../../lib/platform/conversion';

export type DigitalUnit = 'bit' | 'B' | 'kB' | 'MB' | 'GB' | 'TB' | 'KiB' | 'MiB' | 'GiB' | 'TiB';

export const digitalUnits: ConversionUnits<DigitalUnit> = {
  bit: { symbol: 'бит', factor: 1 / 8 },
  B: { symbol: 'Б', factor: 1 },
  kB: { symbol: 'кБ', factor: 1e3 },
  MB: { symbol: 'МБ', factor: 1e6 },
  GB: { symbol: 'ГБ', factor: 1e9 },
  TB: { symbol: 'ТБ', factor: 1e12 },
  KiB: { symbol: 'КиБ', factor: 1024 },
  MiB: { symbol: 'МиБ', factor: 1024 ** 2 },
  GiB: { symbol: 'ГиБ', factor: 1024 ** 3 },
  TiB: { symbol: 'ТиБ', factor: 1024 ** 4 },
};

export const digitalNames: Record<DigitalUnit, string> = {
  bit: 'Бит', B: 'Байт', kB: 'Килобайт', MB: 'Мегабайт', GB: 'Гигабайт', TB: 'Терабайт',
  KiB: 'Кибибайт', MiB: 'Мебибайт', GiB: 'Гибибайт', TiB: 'Тебибайт',
};
