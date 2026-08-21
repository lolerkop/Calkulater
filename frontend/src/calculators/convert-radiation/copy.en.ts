import type { CalculatorCopy } from '../../lib/platform/types';

export const convertRadiationCopyEn: CalculatorCopy = {
  name: "Radiation dose converter",
  slug: "radiation-converter",
  shortDescription: "Sieverts, millisieverts, microsieverts and rem, converted both ways.",
  longDescription:
    "Deliberately limited to one physical quantity: equivalent dose. Absorbed dose in grays and activity in becquerels are different quantities, and putting them into one flat unit list would offer a conversion that does not exist — the sievert and the gray coincide numerically only when the quality factor is one, and the becquerel does not convert into a dose at all. Within equivalent dose the arithmetic is exact by definition: one rem is precisely 0.01 Sv, so nothing here is an approximation.",
  seoTitle: "Radiation dose converter: sievert, millisievert, rem",
  seoDescription: "Convert between sieverts, millisieverts, microsieverts, nanosieverts, rem and millirem.",
  h1: "Radiation dose converter",
  keywords: ["sievert to rem", "radiation dose converter", "mSv to µSv", "millirem conversion"],
  howToUse: [
    "Enter the value you have.",
    "Choose the unit it is in.",
    "Choose the unit you want.",
    "The ratio line shows the factor, if you want to reuse it.",
  ],
  howItWorks:
    "Each unit has an exact factor to the sievert: milli is a thousandth, micro a millionth, nano a billionth, and one rem is 0.01 Sv. The result is the value times the source factor divided by the target factor.",
  example: "1 mSv is 1,000 µSv, and 250 mrem is 2.5 mSv: a rem is exactly a hundredth of a sievert.",
  faq: [
    { q: "Why is the gray not in the list?", a: "Because it measures a different thing — energy absorbed, not biological effect. They coincide numerically only for a quality factor of one, and pretending otherwise would hide the physics." },
    { q: "What about becquerels?", a: "Activity is how much a source decays, not how much dose you receive. Converting between them needs distance, time, shielding and the isotope — that is not a unit conversion." },
    { q: "Is the rem conversion exact?", a: "Yes, by definition: 1 rem = 0.01 Sv. Nothing here is rounded except the display." },
    { q: "Which unit will I see in practice?", a: "Millisieverts for annual exposure and medical procedures, microsieverts for single measurements and flights. Rem still appears in older and American sources." },
    { q: "Is a sievert a lot?", a: "One sievert is a very large dose. Everyday numbers live in millisieverts and microsieverts — natural background is a few millisieverts a year." },
  ],
};
