import type { CalculatorCopy } from '../../lib/platform/types';

export const pressureCopyEn: CalculatorCopy = {
  name: 'Pressure converter',
  slug: 'pressure-converter',
  shortDescription: 'Convert pressure between pascals, bars, atmospheres and psi.',
  longDescription:
    'Converts pressure between pascals, bars, atmospheres, psi and millimetres of mercury. Four systems meet in one list: gauges and tyres use bar or psi, weather reports use hectopascals, and medicine uses millimetres of mercury.',
  seoTitle: 'Pressure converter — bar, atmospheres, psi, pascals',
  seoDescription: 'Convert pressure between pascals, kilopascals, bars, atmospheres, psi and millimetres of mercury.',
  h1: 'Pressure converter',
  keywords: ['pressure converter', 'bar to psi', 'atmospheres'],
  howToUse: ['Enter the value.', 'Pick the source unit.', 'Pick the target unit.'],
  howItWorks: 'Every unit converts through the pascal using exact factors.',
  example: 'One bar is 100,000 Pa and about 14.5 psi.',
  faq: [
    { q: 'Are bar and atmosphere the same?', a: 'Almost: a bar is 100,000 Pa and an atmosphere is 101,325 Pa, about 1.3% apart.' },
    { q: 'What pressure should tyres have?', a: 'Usually 2–2.5 bar, roughly 29–36 psi. The exact figure is on the door pillar or in the manual.' },
    { q: 'Why does medicine use millimetres of mercury?', a: 'A historical unit from the mercury manometer: 1 mmHg is exactly 133.322387415 Pa. Standard atmosphere is 760 torr, which comes to 759.9999 conventional millimetres — the torr and the mmHg are defined slightly differently.' },
    { q: 'What is a hectopascal in weather reports?', a: 'It is 100 Pa, exactly one millibar. The two units are numerically identical.' },
  ],
};
