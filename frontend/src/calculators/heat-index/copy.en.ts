import type { CalculatorCopy } from '../../lib/platform/types';

export const heatIndexCopyEn: CalculatorCopy = {
  name: "Heat index calculator",
  slug: "heat-index",
  shortDescription: "How hot the air feels once humidity is taken into account.",
  longDescription:
    "Works out the heat index — the temperature a person actually feels at a given humidity. Damp air stops sweat evaporating, and the body loses its main way of shedding heat: at 32 °C and 70% humidity the sensation matches forty degrees of dry air. The calculation uses the full nine-term regression published by the US National Weather Service and applies from 26.7 °C upward; below that the formula stops describing sensation, so the page refuses rather than extrapolating.",
  seoTitle: "Heat index calculator — apparent temperature and humidity",
  seoDescription: "Calculate the heat index: how hot the air feels once relative humidity is included, using the US National Weather Service regression.",
  h1: "Heat index calculator",
  keywords: ["heat index calculator", "apparent temperature calculator", "feels like temperature", "humidity heat calculator"],
  howToUse: [
    "Enter the air temperature measured in the shade.",
    "Give the relative humidity as a percentage.",
    "Compare the added figure with the thermometer: that gap is humidity's contribution.",
    "Mind the range: below 26.7 °C the heat index is not defined.",
  ],
  howItWorks: "The temperature is converted to Fahrenheit, fed into a nine-term regression in temperature and humidity, and the result is converted back to Celsius.",
  example: "At 32 °C and 70% humidity the air feels like 40.409 °C — 8.409 degrees above the thermometer.",
  faq: [
    { q: "Why does humidity change the sensation so much?", a: "Because the body cools by evaporating sweat. In damp air the sweat evaporates poorly, heat loss drops, and the same temperature becomes far harder to bear." },
    { q: "Why does it refuse below 26.7 °C?", a: "Because the regression was fitted on data from 80 °F upward. Below that it returns numbers that no longer describe sensation, and showing them would pass extrapolation off as measurement." },
    { q: "How does the heat index differ from wind chill?", a: "They cover opposite conditions. The heat index describes heat with humidity; wind chill describes cold with wind." },
    { q: "Where should the temperature be measured?", a: "In the shade, away from heated surfaces. In direct sun the sensation is several degrees higher again, and the regression does not account for that." },
  ],
};
