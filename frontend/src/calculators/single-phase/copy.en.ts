import type { CalculatorCopy } from '../../lib/platform/types';

export const singlePhaseCopyEn: CalculatorCopy = {
  name: 'Single-phase power calculator',
  slug: 'single-phase-power-calculator',
  shortDescription: 'Active, apparent and reactive power of a single-phase circuit, or current from power.',
  longDescription:
    'A single-phase circuit has three powers, and confusing them is what burns cable. Active power in watts is the part that does work and the part the meter bills. Apparent power in volt-amperes is the product of voltage and current, and it is what the wiring and the breaker actually have to carry. Reactive power in var is the difference between the two: energy that travels to the load and back without doing anything useful. A motor with a power factor of 0.7 draws far more current than its wattage suggests, which is exactly the case where sizing by watts alone goes wrong.',
  seoTitle: 'Single-phase power calculator — active, apparent, reactive',
  seoDescription:
    'Calculate the active, apparent and reactive power of a single-phase circuit from voltage, current and power factor, or find the current from power.',
  h1: 'Single-phase power calculator',
  keywords: ['single phase power calculator', 'current from power', 'power factor', 'apparent power'],
  howToUse: [
    'Choose whether you know the current or the active power.',
    'Enter the supply voltage.',
    'Enter the current, or the rated power if you are sizing the circuit.',
    'Enter the power factor — resistive loads are 1, motors are usually 0.7 to 0.9.',
  ],
  howItWorks:
    'Active power P = U × I × cos φ, apparent power S = U × I, and reactive power Q is the square root of S² − P². Finding current inverts the first formula: I = P ÷ (U × cos φ).',
  example: 'At 230 V and 6.5 A with a power factor of 0.95 the active power is 1,420.25 W and the apparent power is 1,495 VA.',
  faq: [
    {
      q: 'Which power should I size the cable for?',
      a: 'Apparent power, or the current directly. Cable and breakers are heated by the current that flows, not by the part of it that does useful work.',
    },
    {
      q: 'What power factor should I use if it is not on the label?',
      a: 'Heaters, kettles and incandescent lamps are essentially 1. Motors, pumps and compressors typically sit between 0.7 and 0.9, and switch-mode supplies vary widely — the nameplate is worth checking.',
    },
    {
      q: 'Why can the power factor not exceed one?',
      a: 'It is the ratio of active to apparent power, and active power can never exceed apparent. A value above one would make the reactive term the square root of a negative number.',
    },
    {
      q: 'Does reactive power appear on a domestic bill?',
      a: 'Household meters normally bill active energy only. Industrial tariffs often charge for reactive power or for a poor power factor, which is why correction capacitors pay for themselves there.',
    },
  ],
};
