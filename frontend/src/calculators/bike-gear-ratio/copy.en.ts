import type { CalculatorCopy } from '../../lib/platform/types';

export const bikeGearRatioCopyEn: CalculatorCopy = {
  "name": "Bike gear ratio calculator",
  "slug": "bike-gear-ratio-calculator",
  "shortDescription": "Bicycle gear ratio and the distance covered per pedal revolution.",
  "seoTitle": "Bike gear ratio calculator — ratio and development",
  "seoDescription": "Calculate a bicycle gear ratio from the tooth counts and the development per pedal revolution.",
  "h1": "Bike gear ratio calculator",
  "keywords": [
    "bike gear ratio calculator",
    "bicycle gear ratio",
    "gear development",
    "chainring sprocket ratio"
  ],
  "longDescription": "The front-to-rear tooth ratio describes the chain transmission. With direct drive it equals wheel turns per pedal revolution; an internally geared hub needs an additional ratio that this form does not include. Enter wheel circumference in metres to obtain development, the distance per pedal revolution.",
  "howToUse": [
    "Enter positive whole tooth counts for both sprockets.",
    "For development, enter measured wheel rollout in metres, for example 2.10.",
    "Blank circumference or zero leaves the ratio alone; negative or nonnumeric values are rejected.",
    "Check that the drivetrain does not add an internal gear stage."
  ],
  "howItWorks": "R = front teeth / rear teeth. Development L = R×C, with wheel circumference C in metres. For direct drive at cadence n rpm, speed in km/h = L×n×0.06; cadence is not entered in this form.",
  "example": "50/25 = 2.00. With C=2.10 m, development is 4.20 m. At 90 pedal revolutions per minute, 4.20×90×0.06 = 22.68 km/h, ignoring slip and additional gearing.",
  "faq": [
    {
      "q": "What does a bicycle tooth ratio mean?",
      "a": "R=2 gives two wheel turns per pedal revolution only with direct drive and no additional internal ratio."
    },
    {
      "q": "Why compare gear development?",
      "a": "It accounts for wheel size: equal ratios can produce different distances per pedal revolution."
    },
    {
      "q": "How do I measure circumference for development?",
      "a": "At working pressure and load, mark the tyre and measure one complete rollout. Divide millimetres by 1000 for metres."
    },
    {
      "q": "Why must sprocket teeth be whole numbers?",
      "a": "They count discrete teeth. Fractional and nonnumeric counts are rejected."
    },
    {
      "q": "Which gear is appropriate for a climb?",
      "a": "Lower development requires more pedal revolutions for the same distance. The suitable value depends on slope, load and rider."
    },
    {
      "q": "How does cadence convert to speed?",
      "a": "Cadence is pedal revolutions per minute. 4 m development × 90 rpm = 360 m/min = 21.6 km/h; no universal required cadence is prescribed."
    },
    {
      "q": "Does gear count determine a useful range?",
      "a": "No. Combination count does not describe extreme ratios, duplicate steps or internal gearing; compare actual developments."
    }
  ],
  "disclaimer": "Direct chain-drive model. Internal hubs, reduction gears, slip and motion resistance are excluded; this does not check component compatibility."
};
