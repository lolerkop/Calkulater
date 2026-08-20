import type { CalculatorCopy } from '../../lib/platform/types';

export const batterySeriesParallelCopyEn: CalculatorCopy = {
  name: 'Battery series and parallel calculator',
  slug: 'battery-series-parallel-calculator',
  shortDescription: 'Pack voltage, capacity and energy from the wiring arrangement.',
  longDescription:
    'Series wiring adds voltages, parallel wiring adds capacities, and getting them the wrong way round is expensive. The same twelve cells wired 4S3P give 14.8 V at 10.2 Ah, while 3S4P give 11.1 V at 13.6 Ah — identical stored energy, but only one of them will run a device expecting 12 V. The arrangement has to reconcile with the cell count: series times parallel must equal the total. A mismatch means an error in the plan rather than an unusual pack, and quietly recalculating it would hide exactly the mistake worth catching before anything is soldered.',
  seoTitle: 'Battery series and parallel wiring calculator',
  seoDescription:
    'Calculate pack voltage, capacity and energy from the cell voltage and capacity and a series-parallel wiring arrangement.',
  h1: 'Battery series and parallel calculator',
  keywords: ['battery pack calculator', 'series and parallel', 'pack voltage', 'battery capacity'],
  howToUse: [
    'Enter the total number of cells you have.',
    'Enter the voltage and capacity of one cell.',
    'Enter how many cells sit in series and how many strings run in parallel.',
    'The two arrangement numbers must multiply to the total.',
  ],
  howItWorks:
    'Pack voltage = cell voltage × cells in series. Pack capacity = cell capacity × parallel strings. Energy is voltage times capacity.',
  example: 'Twelve 3.7 V 3.4 Ah cells as 4S3P give 14.8 V, 10.2 Ah and 150.96 Wh.',
  faq: [
    {
      q: 'Which arrangement should I choose?',
      a: 'Match the voltage your device needs first, then use the remaining cells in parallel for capacity. Voltage is a hard requirement; capacity only changes how long it runs.',
    },
    {
      q: 'Why is the energy the same either way?',
      a: 'Because energy is voltage times capacity, and the arrangement moves the same total between the two factors. What changes is whether the pack fits the device.',
    },
    {
      q: 'Can I mix cells of different capacity?',
      a: 'Not safely. In series the weakest cell limits the whole string and can be driven into reversal; in parallel a mismatched cell takes uneven current. Use matched cells.',
    },
    {
      q: 'Does this account for a BMS or wiring losses?',
      a: 'No. Real packs lose some voltage under load through internal resistance and connections, and a protection board adds its own cut-offs. Treat these figures as nominal.',
    },
  ],
};
