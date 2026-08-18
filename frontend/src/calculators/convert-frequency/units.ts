// Единицы частоты. База — герц. Оборот в минуту включён: это та же величина,
// записанная через минуту, и в паспортах двигателей встречается чаще герц.

import type { ConversionUnits } from '../../lib/platform/conversion';

export type FrequencyUnit = 'hz' | 'khz' | 'mhz' | 'ghz' | 'mhz_milli' | 'rpm';

export const frequencyUnits: ConversionUnits<FrequencyUnit> = {
  hz: { symbol: 'Гц', factor: 1 },
  khz: { symbol: 'кГц', factor: 1000 },
  mhz: { symbol: 'МГц', factor: 1e6 },
  ghz: { symbol: 'ГГц', factor: 1e9 },
  mhz_milli: { symbol: 'мГц', factor: 0.001 },
  rpm: { symbol: 'об/мин', factor: 1 / 60 },
};

export const frequencyNames: Record<FrequencyUnit, string> = { hz: 'Герц', khz: 'Килогерц', mhz: 'Мегагерц', ghz: 'Гигагерц', mhz_milli: 'Миллигерц', rpm: 'Оборот в минуту' };
