import type { CalculatorCopy } from '../../lib/platform/types';

export const ohmsLawCopyEn: CalculatorCopy = {
  name: "Ohm's law calculator",
  slug: 'ohms-law-calculator',
  shortDescription: 'Voltage, current, resistance and power from any known pair.',
  longDescription:
    "Solves Ohm's law in whichever direction you need: give any two of voltage, current and resistance and the third follows, together with the power dissipated. The divisor of the chosen mode is checked first, because dividing by a zero current or a zero resistance would return infinity dressed up as an answer.",
  seoTitle: "Ohm's law calculator — voltage, current, resistance, power",
  seoDescription: "Calculate voltage, current, resistance or power with Ohm's law from any two known values.",
  h1: "Ohm's law calculator",
  keywords: ["ohm's law calculator", 'voltage current resistance', 'electrical power calculator'],
  howToUse: ['Choose which pair of values you know.', 'Enter those two values.', 'Read the missing value and the power.'],
  howItWorks: 'U = I × R, so I = U ÷ R and R = U ÷ I; power is P = U × I.',
  example: '12 V across a load drawing 2 A means 6 ohm of resistance and 24 W of power.',
  faq: [
    { q: 'Why is zero current rejected?', a: 'Resistance is voltage divided by current. With no current flowing the division has no value, so nothing can be concluded about the resistance.' },
    { q: 'Is zero voltage allowed?', a: 'Yes. A circuit with no voltage across it carries no current and dissipates no power — that is a real state, not an input error.' },
    { q: 'Does this work for alternating current?', a: 'Only for purely resistive loads. Reactance and power factor are not modelled here.' },
    { q: 'Which power formula is used?', a: 'P = U × I, applied after the missing value is found, so it agrees with all three modes.' },
  ],
};
