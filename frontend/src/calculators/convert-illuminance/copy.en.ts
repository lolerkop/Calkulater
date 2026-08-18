import type { CalculatorCopy } from '../../lib/platform/types';

export const illuminanceCopyEn: CalculatorCopy = {
  name: 'Illuminance converter',
  slug: 'illuminance-converter',
  shortDescription: 'Convert illuminance between lux, foot-candles and phots.',
  longDescription:
    'Converts illuminance between lux, kilolux, millilux, foot-candles, phots and nox. Lux appears in workplace lighting standards, foot-candles in US lighting documentation.',
  seoTitle: 'Illuminance converter — lux, foot-candles, phots',
  seoDescription: 'Convert illuminance between lux, kilolux, foot-candles, phots and nox.',
  h1: 'Illuminance converter',
  keywords: ['illuminance converter', 'lux to foot-candles', 'lighting level'],
  howToUse: ['Enter the value.', 'Pick the source unit.', 'Pick the target unit.'],
  howItWorks: 'Every unit converts through the lux using exact area factors.',
  example: 'A workplace lighting level of 500 lux is about 46.45 foot-candles.',
  faq: [
    { q: 'How does illuminance differ from luminous flux?', a: 'Luminous flux is measured in lumens and describes the whole lamp; illuminance is the flux falling on a square metre of surface.' },
    { q: 'What is a foot-candle?', a: 'One lumen per square foot. Since the foot is exactly defined, a foot-candle is 10.7639 lux.' },
    { q: 'Where is the phot used?', a: 'In the CGS system: one lumen per square centimetre, that is ten thousand lux.' },
    { q: 'Can lux be converted to watts?', a: 'No — they are different quantities, and the relation depends on the spectrum of the source.' },
  ],
};
