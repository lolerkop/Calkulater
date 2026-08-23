import type { CalculatorCopy } from '../../lib/platform/types';

export const waterHeatingCopyEn: CalculatorCopy = {
  name: "Water heating time calculator",
  slug: "water-heating-time",
  shortDescription: "How long it takes to heat water at a given power.",
  longDescription:
    "Water is the most heat-hungry substance in the house: heating a hundred litres by fifty degrees takes almost six kilowatt-hours, and a two-kilowatt element will spend over three hours doing it. Hence the practical rule that heating on demand what could be heated in advance nearly always costs more in power. Efficiency is a field \u2014 a resistive element runs about 99 %, a tank with shell losses lower, a gas heater noticeably lower.",
  seoTitle: "Water heating time calculator \u2014 tank, element, kettle",
  seoDescription: "Calculate water heating time from volume, start and target temperature, heater power and efficiency.",
  h1: "Water heating time calculator",
  keywords: ["water heating time", "tank heater power", "heating water", "kilowatt hours to heat"],
  howToUse: [
    "A litre of water counts as a kilogram: at household temperatures the difference is under four per cent.",
    "Set efficiency by heater type: a resistive element about 99 %, a tank with losses lower.",
    "Cooling during heating is not modelled: acceptable for a well-insulated tank, not for an open vessel.",
    "The energy row gives consumption in kilowatt-hours \u2014 use it to cost the run.",
  ],
  howItWorks: "Q = m\u00b7c\u00b7\u0394T with c = 4186 J/(kg\u00b7K); time = Q / (power \u00d7 efficiency).",
  example: "A hundred litres from 10 to 60 degrees at 2 kW and 95 % takes 3.06 hours.",
  faq: [
    { q: "Why is heating water so energy-hungry?", a: "Water has an unusually high specific heat \u2014 4186 joules per kilogram and degree, four times air and ten times steel. That is exactly why it works as a heat carrier, and exactly why heating it is expensive." },
    { q: "What does twice the power buy?", a: "Exactly half the time: the energy is the same, only the rate changes. Consumption in kilowatt-hours stays put, while the peak load on the wiring doubles." },
    { q: "Should cooling be accounted for?", a: "For an insulated tank the losses during heating are usually neglected. For an open vessel or a long heat-up they matter, and the real time will exceed the calculation." },
    { q: "Why is a gas heater less efficient?", a: "Part of the heat leaves with the flue gases. An ordinary heater manages 80\u201385 %; a condensing one does better because it also recovers the latent heat of the water vapour." },
  ],
};
