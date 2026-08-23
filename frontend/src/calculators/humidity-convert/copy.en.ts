import type { CalculatorCopy } from '../../lib/platform/types';

export const humidityConvertCopyEn: CalculatorCopy = {
  name: "Absolute humidity calculator",
  slug: "absolute-humidity",
  shortDescription: "How many grams of water are in a cubic metre of air.",
  longDescription:
    "Relative humidity on its own says nothing about the amount of water: 50 % at five degrees and 50 % at thirty differ fourfold in moisture. That is exactly why homes are dry in winter \u2014 outdoor air at 90 % and \u221210 \u00b0C, warmed to +22 \u00b0C, comes out around ten per cent. Absolute humidity answers the question directly, while the mixing ratio in grams per kilogram is what sizing dehumidifiers and ventilation actually needs.",
  seoTitle: "Absolute humidity calculator \u2014 grams of water per cubic metre",
  seoDescription: "Calculate absolute humidity and mixing ratio from temperature and relative humidity.",
  h1: "Absolute humidity calculator",
  keywords: ["absolute humidity", "mixing ratio", "vapour pressure", "air moisture"],
  howToUse: [
    "Take temperature and relative humidity from a hygrometer.",
    "The maximum row shows how much water the air can hold at all at this temperature.",
    "The mixing ratio in grams per kilogram of dry air is what dehumidifier sizing uses.",
    "Pressure has a weak effect and matters mainly for the mixing ratio.",
  ],
  howItWorks: "Saturation pressure by Tetens, absolute humidity = 216.7\u00b7p_vapour/T.",
  example: "At 20 \u00b0C and 50 % humidity a cubic metre holds about 8.65 grams of water.",
  faq: [
    { q: "Why are homes dry in winter?", a: "Cold air physically cannot hold much moisture. Outdoor air at \u221210 \u00b0C and 90 % carries about two grams per cubic metre; warmed to +22 \u00b0C it could hold nineteen, so the same water reads as around ten per cent relative humidity." },
    { q: "Why is absolute humidity more useful than relative?", a: "It does not depend on temperature and states the amount of water directly. Relative humidity is a share of the maximum, so the same percentage at different temperatures means completely different moisture." },
    { q: "What is the mixing ratio?", a: "Grams of water per kilogram of dry air. Unlike absolute humidity it does not change on heating or cooling without condensation, which is why ventilation calculations use it." },
    { q: "How does this relate to dew point?", a: "The dew point is the temperature at which the current vapour pressure becomes saturating. It is another way of stating the same quantity: more water in the air means a higher dew point." },
  ],
};
