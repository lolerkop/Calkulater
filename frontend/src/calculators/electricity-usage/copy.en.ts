import type { CalculatorCopy } from '../../lib/platform/types';

export const electricityUsageCopyEn: CalculatorCopy = {
  name: 'Electricity usage calculator',
  slug: 'electricity-usage-calculator',
  shortDescription: 'Kilowatt-hours an appliance uses and what that costs.',
  longDescription:
    'Converts an appliance rating into kilowatts once, then multiplies by the hours it runs and the days you are counting. Watts and kilowatt-hours are easy to confuse — one is power, the other is energy accumulated over time — so the conversion happens in one visible step. Add your tariff and the cost follows.',
  seoTitle: 'Electricity usage calculator — kWh and cost',
  seoDescription: 'Work out how many kilowatt-hours an appliance uses over a period and what it costs at your tariff.',
  h1: 'Electricity usage calculator',
  keywords: ['electricity usage calculator', 'kwh calculator', 'appliance running cost'],
  howToUse: ['Enter the appliance power from its label.', 'Enter how many hours a day it runs and over how many days.', 'Add your tariff for the cost.'],
  howItWorks: 'kWh = power in kilowatts × hours per day × days; cost is that figure times the tariff.',
  example: 'A 2000 W heater for 3 hours a day over 30 days uses 2 × 3 × 30 = 180 kWh.',
  faq: [
    { q: 'Where do I find my tariff?', a: 'On your electricity bill, as a price per kilowatt-hour. Multi-rate meters are not modelled, so work out each rate band separately.' },
    { q: 'Is the label power what it actually draws?', a: 'It is the rated maximum. Anything that cycles, such as a fridge or a thermostat-controlled heater, uses less because it does not run continuously.' },
    { q: 'What is the difference between a watt and a kilowatt-hour?', a: 'A watt is a rate of use; a kilowatt-hour is the energy that rate accumulates over time. A 1000 W device running one hour uses exactly 1 kWh.' },
    { q: 'Is the tariff required?', a: 'No. Without it you still get the consumption in kilowatt-hours, just no cost line.' },
  ],
};
