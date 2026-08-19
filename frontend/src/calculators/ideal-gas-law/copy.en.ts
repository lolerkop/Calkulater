import type { CalculatorCopy } from '../../lib/platform/types';

export const idealGasLawCopyEn: CalculatorCopy = {
  name: 'Ideal gas law calculator',
  slug: 'ideal-gas-law-calculator',
  shortDescription: 'PV = nRT: the pressure or the volume of a gas from the rest.',
  longDescription:
    'Solves the ideal gas law for pressure or for volume. The gas constant 8.314462618 is only valid in base units — pascals, cubic metres, moles and kelvin — so every unit you choose is converted to the base before substitution and the answer is converted back afterwards. This is exactly where the usual mistake happens: litres with kilopascals in the same formula give a numerically plausible and wrong result. Temperatures below absolute zero are rejected, and zero Celsius is 273.15 K rather than zero.',
  seoTitle: 'Ideal gas law calculator — PV = nRT',
  seoDescription: 'Calculate the pressure or volume of an ideal gas from PV = nRT with a choice of pressure, volume and temperature units.',
  h1: 'Ideal gas law calculator',
  keywords: ['ideal gas law calculator', 'pv nrt', 'gas constant', 'gas equation'],
  howToUse: ['Choose whether to find the pressure or the volume.', 'Enter the amount of substance and the temperature, picking its unit.', 'Enter the remaining quantity in whichever units suit and read the answer.'],
  howItWorks:
    'PV = nRT with R = 8.314462618 J/(mol·K). That constant holds in pascals, cubic metres, moles and kelvin, so the chosen units are converted to the base ones before substitution and the result is converted back afterwards. Degrees Celsius become kelvin by adding 273.15.',
  example: 'Two moles of gas at 300 K in 0.05 m³ exert a pressure of 99,773.55 Pa — a little below atmospheric.',
  faq: [
    { q: 'Why must units be selected rather than typed freely?', a: 'Because the gas constant is tied to its units. In pascals and cubic metres it is 8.314463; putting litres and kilopascals into the same formula yields a plausible, wrong number.' },
    { q: 'Must the temperature be in kelvin?', a: 'The equation needs absolute temperature, yes. If Celsius is more convenient, pick it — the 273.15 conversion is applied for you.' },
    { q: 'What happens at zero absolute temperature?', a: 'The pressure goes to zero, which is a legitimate limiting case. A temperature below absolute zero is rejected: no such state exists.' },
    { q: 'How well does this model real gases?', a: 'Well at moderate pressures and temperatures far from condensation. Near liquefaction and at high pressures corrections are needed that the ideal gas law does not include.' },
  ],
};
