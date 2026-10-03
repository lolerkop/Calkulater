import type { CalculatorCopy } from '../../lib/platform/types';

export const convertFuelEconomyCopyEn: CalculatorCopy = {
  "name": "Fuel economy converter",
  "slug": "fuel-economy-converter",
  "shortDescription": "Convert fuel economy between L/100 km, km/L and miles per gallon.",
  "longDescription": "Converts L/100 km, km/L and US or UK mpg. Consumption per distance and distance per fuel are inversely related: doubling L/100 km halves mpg. The relationship between km/L and mpg is proportional. The gallons differ, so their mpg values are shown separately.",
  "seoTitle": "Fuel economy converter: L/100 km, km/L and mpg",
  "seoDescription": "Convert fuel economy between litres per 100 km, kilometres per litre and miles per gallon in both US and UK measure.",
  "h1": "Fuel economy converter",
  "keywords": [
    "fuel economy converter",
    "l/100km to mpg",
    "mpg to litres",
    "fuel consumption converter"
  ],
  "howToUse": [
    "Enter the consumption figure.",
    "Choose the unit it is given in.",
    "Choose the unit you want.",
    "The other three are shown alongside for comparison."
  ],
  "howItWorks": "Every unit is routed through L/100 km. Kilometres per litre are inversely related: 100 ÷ value. Miles per gallon convert as 100 × gallon volume ÷ (value × 1.609344). A US gallon is 3.785411784 L and an imperial gallon 4.54609 L.",
  "example": "A consumption of 8 L/100 km is 12.5 km/L, 29.402 mpg (US) and 35.31 mpg (UK).",
  "faq": [
    {
      "q": "Why can't I just multiply by a factor?",
      "a": "Because the relationship is inverse rather than proportional. Litres per hundred kilometres rise as miles per gallon fall, so the conversion goes through a division and no constant multiplier between them exists."
    },
    {
      "q": "How do US and UK mpg differ?",
      "a": "For the same actual consumption, UK mpg is about 20.1% higher numerically than US mpg because the gallon is larger. The same number, such as 30 mpg, describes different consumption in the two systems; select the stated gallon."
    },
    {
      "q": "Which unit is used where?",
      "a": "Litres per 100 km are standard in continental Europe, kilometres per litre in parts of Asia and Latin America, and miles per gallon in the US and the UK."
    },
    {
      "q": "Is a lower number better or worse?",
      "a": "It depends on the unit, and that is the usual source of confusion. For litres per 100 km lower is better; for kilometres per litre and miles per gallon higher is better."
    },
    {
      "q": "Does the same saving in L/100 km save the same amount of fuel?",
      "a": "Yes, over the same distance. Both 10→9 and 6→5 L/100 km save 1 L per 100 km, or 10 L over 1000 km. The corresponding changes in mpg differ because the relationship is inverse; payback also needs cost and distance information."
    }
  ],
  "disclaimer": "Converts units for the entered value. It does not predict actual consumption or payback; displayed numbers are rounded."
};
