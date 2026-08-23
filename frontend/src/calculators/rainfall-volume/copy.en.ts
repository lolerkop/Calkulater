import type { CalculatorCopy } from '../../lib/platform/types';

export const rainfallVolumeCopyEn: CalculatorCopy = {
  name: "Rainwater harvesting calculator",
  slug: "rainwater-harvesting",
  shortDescription: "How much water a roof collects from a given amount of rain.",
  longDescription:
    "The arithmetic here is unusually convenient: a square metre under one millimetre of rain gives exactly one litre. So a six-by-ten roof collects more than a tonne of water from an ordinary twenty-five millimetre downpour — a figure that usually surprises. Some water is lost wetting the roof and evaporating, and the runoff coefficient sets that share: about nine tenths for metal and tile, noticeably less for rough surfaces.",
  seoTitle: "Rainwater harvesting calculator — water from a roof",
  seoDescription: "Work out how many litres a roof of a given area collects from rainfall, allowing for the runoff coefficient and the number of barrels.",
  h1: "Rainwater harvesting calculator",
  keywords: ["rainwater harvesting", "water from a roof", "runoff coefficient", "water barrel"],
  howToUse: [
    "Use the area in plan — the roof's footprint on the ground, not the slope area: rain falls vertically.",
    "Take the rainfall depth in millimetres from a forecast or report: 25 mm is a good heavy shower.",
    "Runoff coefficient: about 0.9 for metal and tile, 0.8 for slate, 0.7 for rough surfaces.",
    "Barrels are rounded up: half a barrel cannot be installed.",
  ],
  howItWorks: "Volume = area × depth × runoff coefficient; a square metre under a millimetre of rain gives exactly one litre.",
  example: "A 60 m² roof under 25 mm of rain with a coefficient of 0.9 collects 1350 litres.",
  faq: [
    { q: "Why the area in plan rather than the slope?", a: "Rain falls vertically, so what matters is the roof's footprint. A steep gable has a larger surface area but catches exactly as much water as its projection." },
    { q: "What is the runoff coefficient?", a: "The share of fallen water that reaches the collection point. Some stays on the roof, wetting it and evaporating. A smooth metal roof loses about a tenth; rough surfaces lose noticeably more." },
    { q: "How much does ordinary rain give?", a: "Light rain is 2–5 mm, moderate 5–15, heavy 15–30, a downpour more than 30. From a sixty-square-metre roof a heavy shower gives over a tonne." },
    { q: "Is the water drinkable?", a: "Not untreated: dust, droppings and roof particles wash off. It is fine straight away for watering and utility use, but drinking calls for filtration and disinfection." },
  ],
};
