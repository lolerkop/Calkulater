import type { CalculatorCopy } from '../../lib/platform/types';

export const forceCopyEn: CalculatorCopy = {
  name: 'Force converter',
  slug: 'force-converter',
  shortDescription: 'Convert force between newtons, kilogram-force and pound-force.',
  longDescription:
    'Converts force between newtons, kilonewtons, millinewtons, kilogram-force, tonne-force, pound-force and dynes. Kilogram-force appears in engineering data sheets, pound-force in US documentation.',
  seoTitle: 'Force converter — newtons, kilogram-force, pound-force',
  seoDescription: 'Convert force between newtons, kilonewtons, kilogram-force, tonne-force, pound-force and dynes.',
  h1: 'Force converter',
  keywords: ['force converter', 'newton to kgf', 'pound-force'],
  howToUse: ['Enter the value.', 'Pick the source unit.', 'Pick the target unit.'],
  howItWorks: 'Every unit converts through the newton using exact defined factors.',
  example: 'One kilogram-force is 9.80665 newtons — the weight of one kilogram under standard gravity.',
  faq: [
    { q: 'How is kilogram-force different from a kilogram?', a: 'A kilogram measures mass; kilogram-force measures force — the weight of one kilogram under standard gravity of 9.80665 m/s².' },
    { q: 'Is the pound-force conversion exact?', a: 'Yes. The pound is defined as 0.45359237 kg and standard gravity as 9.80665 m/s², so one pound-force is exactly 4.4482216152605 N.' },
    { q: 'Where is the dyne used?', a: 'In the CGS system and older physics references: one dyne is a hundred-thousandth of a newton.' },
    { q: 'Can force be converted to mass?', a: 'No — they are different quantities. Kilogram-force is merely named after the mass that produces it under standard gravity.' },
  ],
};
