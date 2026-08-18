import type { CalculatorCopy } from '../../lib/platform/types';

export const flowCopyEn: CalculatorCopy = {
  name: 'Flow rate converter',
  slug: 'flow-rate-converter',
  shortDescription: 'Convert volumetric flow between m³/h, litres per minute and CFM.',
  longDescription:
    'Converts volumetric flow between cubic metres per second and per hour, litres per second, minute and hour, cubic feet per minute and US gallons per minute.',
  seoTitle: 'Flow rate converter — m³/h, L/min, CFM, GPM',
  seoDescription: 'Convert volumetric flow between cubic metres per hour, litres per minute, cubic feet per minute and gallons per minute.',
  h1: 'Flow rate converter',
  keywords: ['flow converter', 'm3/h to l/min', 'CFM'],
  howToUse: ['Enter the value.', 'Pick the source unit.', 'Pick the target unit.'],
  howItWorks: 'Every unit converts through the cubic metre per second using exact factors.',
  example: 'One cubic metre per hour is 16.67 litres per minute.',
  faq: [
    { q: 'Is this volumetric or mass flow?', a: 'Volumetric: it works with volume per unit of time and needs no substance density.' },
    { q: 'What are CFM and GPM?', a: 'CFM is cubic feet per minute, used for ventilation; GPM is US gallons per minute, used for pumps.' },
    { q: 'How do I get mass flow?', a: 'Multiply volumetric flow by the density of the substance. There is a separate density converter.' },
    { q: 'Which gallon does GPM mean?', a: 'The US gallon of 3.785411784 litres. The imperial gallon is larger; pump ratings use the US one.' },
  ],
};
