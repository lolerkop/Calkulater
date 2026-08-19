import type { CalculatorCopy } from '../../lib/platform/types';

export const generatorFuelCopyEn: CalculatorCopy = {
  name: 'Generator fuel calculator',
  slug: 'generator-fuel-calculator',
  shortDescription: 'How much fuel a generator burns over a shift, and what it costs.',
  longDescription:
    'Works out generator fuel use from the load, the specific consumption and the running time. Specific consumption stays a field: 0.3 litres per kilowatt-hour is a typical diesel machine at around three quarters of its rating, but petrol units are noticeably thirstier and every machine is worse at low load. It is an assumption, not a norm, and it is visible. The fuel price is optional: without it only the volume is reported, with it the cost of the shift is added.',
  seoTitle: 'Generator fuel consumption calculator',
  seoDescription: 'Calculate generator fuel consumption from the load, the specific consumption and the running time, together with the cost.',
  h1: 'Generator fuel calculator',
  keywords: ['generator fuel calculator', 'generator fuel consumption', 'how much fuel a generator uses'],
  howToUse: ['Enter the actual load in kilowatts, not the generator rating.', 'Give the specific consumption from the machine data sheet.', 'Set the running time and, if you need it, the fuel price.'],
  howItWorks:
    'Fuel = load × specific consumption × time. Specific consumption is how many litres the machine burns per kilowatt-hour produced; it depends on the engine type and on how heavily the generator is loaded.',
  example: 'A generator under a 5 kW load at 0.3 L/kWh burns 12 litres over eight hours — at 60 per litre that is 720.',
  faq: [
    { q: 'Where does the specific consumption come from?', a: 'From the generator data sheet: makers quote it per kilowatt-hour, or give consumption at 50, 75 and 100 % load. The default is a typical diesel and is worth replacing with your own.' },
    { q: 'Do I enter the load or the rated power?', a: 'The actual load. A generator running at half power burns less fuel per hour but more per kilowatt-hour, so the specific consumption should match your own regime too.' },
    { q: 'Why is low load inefficient?', a: 'The engine spends part of the fuel simply keeping its revolutions. At a quarter load the specific consumption can be one and a half to two times the rated figure.' },
    { q: 'Are warm-up and idling included?', a: 'No. Only the loaded time you entered is counted; add idling separately or increase the time.' },
  ],
};
