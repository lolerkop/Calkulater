import type { CalculatorCopy } from '../../lib/platform/types';

export const ledResistorCopyEn: CalculatorCopy = {
  name: 'LED resistor calculator',
  slug: 'led-resistor-calculator',
  shortDescription: 'Series resistor for an LED, with the power it will dissipate.',
  longDescription:
    'Works out the series resistor that drops the difference between your supply and the LED forward voltage, then shows how much power the resistor and the LED each dissipate. The forward voltage is checked against the supply before anything is calculated, because a resistor cannot drop a difference that is not there.',
  seoTitle: 'LED resistor calculator — series resistor and power',
  seoDescription: 'Calculate the series resistor for an LED from supply voltage, forward voltage and current, with resistor power dissipation.',
  h1: 'LED resistor calculator',
  keywords: ['led resistor calculator', 'led series resistor', 'current limiting resistor'],
  howToUse: [
    'Enter the supply voltage of your circuit.',
    'Enter the LED forward voltage from its datasheet.',
    'Enter the forward current in milliamps or amps.',
  ],
  howItWorks: 'R = (supply voltage − forward voltage) ÷ current; the resistor dissipates that voltage drop times the same current.',
  example: 'A 2 V LED at 20 mA on a 5 V supply needs (5 − 2) ÷ 0.02 = 150 ohm.',
  faq: [
    { q: 'Why must the forward voltage be below the supply?', a: 'The resistor exists to drop the difference. With no difference there is nothing to drop and no operating point to set.' },
    { q: 'Which resistor should I actually buy?', a: 'Take the next standard value at or above the computed one, and check its power rating against the figure shown here.' },
    { q: 'Does the current unit matter?', a: 'Only for entry. Milliamps and amps give the same answer once converted, and the calculator converts for you.' },
    { q: 'Is the LED power the same as the resistor power?', a: 'No. Both carry the same current, but each dissipates its own voltage times that current, so the two figures differ.' },
  ],
};
