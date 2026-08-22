import type { CalculatorCopy } from '../../lib/platform/types';

export const windChillCopyEn: CalculatorCopy = {
  name: "Wind chill calculator",
  slug: "wind-chill",
  shortDescription: "How much colder frost feels in wind — by the meteorological services' formula.",
  longDescription:
    "Works out the wind chill from the 2001 Canadian–American formula adopted by both countries' weather services. Wind does not cool the air: the thermometer reads the same. It strips away the warmed boundary layer at the skin so the body loses heat faster — the sensation changes, the physical quantity does not. The formula has a domain: above 10 °C and below 4.8 km/h it returns numbers nobody feels, so outside that domain the calculator declines rather than offering a plausible figure.",
  seoTitle: "Wind chill calculator — how cold it really feels",
  seoDescription: "Calculate how much colder it feels in wind using the Canadian and US weather service formula, with the feels-like temperature and the difference from the thermometer.",
  h1: "Wind chill calculator",
  keywords: ["wind chill calculator", "feels like temperature", "wind chill formula", "how cold does it feel"],
  howToUse: [
    "Enter the air temperature — 10 °C or below, or the formula does not apply.",
    "Enter the wind speed in kilometres per hour, 4.8 or above.",
    "Forecasts give wind at 10 metres; at ground level it is weaker.",
    "Read the difference from the thermometer — that is the wind's whole contribution.",
  ],
  howItWorks: "13.12 + 0.6215·t − 11.37·v^0.16 + 0.3965·t·v^0.16, with t in °C and v in km/h.",
  example: "At −10 °C with a 20 km/h wind it feels like −17.86 °C: the wind adds nearly eight degrees.",
  faq: [
    { q: "Does wind actually lower the temperature?", a: "No. The thermometer reads the same at any wind speed. Wind strips the warmed layer of air from the skin so the body loses heat faster — what changes is the rate of heat loss, not the air temperature." },
    { q: "Why does it decline at +15 °C?", a: "Because the formula was derived and validated for cold only: 10 °C or below with wind of 4.8 km/h or more. Outside that domain it yields plausible but wrong numbers, and offering them would be worse than declining." },
    { q: "Will a car freeze harder in wind?", a: "No. Wind chill applies only to a body that generates its own heat. An inanimate object cools to the air temperature; wind only shortens the journey there." },
    { q: "Why do some services quote a different number?", a: "Before 2001 the older Siple and Passel formula was used, and it gave markedly lower values. Countries switched at different times, so old tables disagree with this calculation." },
  ],
};
