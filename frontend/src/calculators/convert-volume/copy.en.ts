import type { CalculatorCopy } from '../../lib/platform/types';

export const volumeCopyEn: CalculatorCopy = {
  name: 'Volume converter',
  slug: 'volume-converter',
  shortDescription: 'Convert volume between litres, cubic metres and gallons.',
  longDescription:
    'Converts volume between millilitres, litres, cubic centimetres, metres and feet, plus US and imperial gallons. The US and UK gallons differ by about 20%, so the list keeps them separate.',
  seoTitle: 'Volume converter — litres, cubic metres, gallons',
  seoDescription: 'Convert volume between litres, millilitres, cubic metres, cubic feet and US or imperial gallons.',
  h1: 'Volume converter',
  keywords: ['volume converter', 'litres to gallons', 'cubic metres'],
  howToUse: ['Enter the value.', 'Pick the source unit.', 'Pick the target unit.'],
  howItWorks: 'Every unit has an exact factor to the cubic metre.',
  example: 'A US gallon is 3.785 litres and an imperial gallon is 4.546 litres.',
  faq: [
    { q: 'How do US and imperial gallons differ?', a: 'They are historically different measures: 3.785 litres versus 4.546. The 20% gap is easy to miss in a recipe or a manual.' },
    { q: 'Is a litre the same as a cubic decimetre?', a: 'Yes, exactly. The litre is defined as a cubic decimetre, or 0.001 m³.' },
    { q: 'Is a millilitre the same as a cubic centimetre?', a: 'Yes, exactly. Both equal 10⁻⁶ m³.' },
    { q: 'Are cooking measures included?', a: 'Cups and spoons are not: their volume varies by country. Those need a dedicated cooking converter.' },
  ],
};
