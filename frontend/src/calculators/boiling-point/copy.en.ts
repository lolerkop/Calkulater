import type { CalculatorCopy } from '../../lib/platform/types';

export const boilingPointCopyEn: CalculatorCopy = {
  name: "Boiling point calculator",
  slug: "boiling-point-altitude",
  shortDescription: "The boiling point of water at a given altitude above sea level.",
  longDescription:
    "Boiling is not \"a hundred degrees\" but the point where vapour pressure matches the surrounding air, so water in the mountains boils cooler. Every thousand metres costs roughly three and a half degrees: water boils at 93 °C in Mexico City and near 80 °C at Everest base camp. The difference is practical rather than theoretical — food in boiling water cooks more slowly the higher you go, because the boiling water itself is colder.",
  seoTitle: "Boiling point calculator — water at altitude",
  seoDescription: "Find the boiling point of water at any altitude above sea level, along with the atmospheric pressure in kilopascals and millimetres of mercury.",
  h1: "Boiling point calculator",
  keywords: ["boiling point", "boiling at altitude", "atmospheric pressure", "vapour pressure"],
  howToUse: [
    "Altitude is measured from sea level: depressions take a negative value, down to −430 m at the Dead Sea.",
    "The calculation follows the international standard atmosphere, that is the average pressure for that altitude.",
    "Real weather shifts the pressure by a few per cent, which moves the boiling point by fractions of a degree.",
    "The 9000 m upper bound is where the linear troposphere model stops describing the atmosphere.",
  ],
  howItWorks: "Pressure from the standard-atmosphere barometric formula, boiling point from the Clausius–Clapeyron relation with a heat of vaporisation of 40,660 J/mol.",
  example: "At 1500 metres water boils at 94.9 °C — nearly five degrees below the familiar figure.",
  faq: [
    { q: "Why does water boil cooler in the mountains?", a: "Boiling starts when the saturated vapour pressure matches the surrounding pressure. High up the air is thin, so the match happens sooner — at a lower temperature. The same thing happens in a vacuum chamber, only more sharply." },
    { q: "Why does food take longer if the water still boils?", a: "Cooking speed is set by the water temperature, not by the fact of boiling. At three kilometres the boiling water is about 90 °C and proteins denature more slowly. A pressure cooker fixes it: raising the pressure raises the boiling point with it." },
    { q: "How accurate is this in real weather?", a: "It gives the standard atmosphere. A depression or an anticyclone shifts the pressure by a few per cent, which is fractions of a degree in boiling point — irrelevant in a kitchen, but for precise work use the measured pressure." },
    { q: "Why is the lower bound −430 metres?", a: "That is the Dead Sea, the lowest exposed land on the planet. The pressure there is above sea level and water boils at about 101.4 °C." },
  ],
};
