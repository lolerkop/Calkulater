import type { CalculatorCopy } from '../../lib/platform/types';

export const densityCopyEn: CalculatorCopy = {
  name: 'Density converter',
  slug: 'density-converter',
  shortDescription: 'Convert density between kg/m³, g/cm³ and pounds per cubic foot.',
  longDescription:
    'Converts density between kilograms per cubic metre, grams per cubic centimetre, kilograms per litre, tonnes per cubic metre, grams per litre, pounds per cubic foot and per US gallon, and ounces per cubic inch.',
  seoTitle: 'Density converter — kg/m³, g/cm³, lb/ft³',
  seoDescription: 'Convert density between kilograms per cubic metre, grams per cubic centimetre, kilograms per litre and pounds per cubic foot.',
  h1: 'Density converter',
  keywords: ['density converter', 'kg/m3 to g/cm3', 'water density'],
  howToUse: ['Enter the value.', 'Pick the source unit.', 'Pick the target unit.'],
  howItWorks: 'Every unit converts through the kilogram per cubic metre using exact factors.',
  example: 'Water is about 1 g/cm³, that is 1000 kg/m³ or roughly 62.43 pounds per cubic foot.',
  faq: [
    { q: 'Why is 1 g/cm³ equal to 1000 kg/m³?', a: 'A kilogram holds a thousand grams and a cubic metre holds a million cubic centimetres; a million divided by a thousand is a thousand.' },
    { q: 'What is the density of water?', a: 'About 1 g/cm³ at 4 °C. The exact value depends on temperature, so this tool converts units rather than looking up substances.' },
    { q: 'Can density be converted to mass?', a: 'No — that needs a volume. Density is mass per volume, and the converter works with that quantity alone.' },
    { q: 'Which gallon is used?', a: 'The US gallon of 3.785411784 litres. The imperial gallon is larger and is not used here.' },
  ],
};
