import type { CalculatorCopy } from '../../lib/platform/types';

export const stepsDistanceCaloriesCopyEn: CalculatorCopy = {
  "name": "Steps to distance and calories calculator",
  "slug": "steps-to-distance",
  "shortDescription": "Distance from step count and measured length or height; energy from an explicit editable coefficient.",
  "longDescription": "Converts counted steps to distance using the length of one step. Without a measurement it uses an adopted 0.415×height assumption, not a universally validated relation. The measured-step mode lets you calibrate distance for your walk. Energy is calculated separately from an editable kcal/kg/km coefficient, initially 0.53. Its definition determines whether energy is gross or additional: without time and the coefficient’s provenance, this tool cannot subtract resting expenditure.",
  "seoTitle": "Steps to distance and calories — stride length and weight",
  "seoDescription": "Distance from step count and measured length or height; energy from an explicit editable coefficient.",
  "h1": "Steps to distance and calories",
  "keywords": [
    "steps to km",
    "steps to calories",
    "pedometer distance calculator",
    "stride length calculator"
  ],
  "howToUse": [
    "Enter a whole step count; zero gives zero distance and energy.",
    "Measure, for example, 20 steps and divide centimetres travelled by 20.",
    "Enter one counted step length, not a full two-step gait stride.",
    "Enter weight and a coefficient with a known definition; 0.53 is a starting assumption."
  ],
  "howItWorks": "Height mode: L =0.415 H; measured mode: L is supplied, both lengths in cm. D =N×L/100000 km. E =c×m×D kcal, c in kcal/kg/km and m in kg. Steps per kilometre =100000/L. Step counter, length and coefficient introduce separate uncertainty.",
  "example": "20 steps over 14 m give 70 cm/step. 10000 steps then mean 7 km; at 70 kg and c=0.53, 0.53×70×7=259.7 kcal before rounding, or 260 kcal in the result. Height 175 cm gives 72.625 cm per step, 7.263 km and 269 kcal.",
  "faq": [
    {
      "q": "How reliable is the 0.415×height step estimate?",
      "a": "It is an adopted starting approximation with no claimed universal error. Pace, shoes, leg length and movement conditions change step length. A comparable personal measurement is usually more useful."
    },
    {
      "q": "How do I measure one step for a step counter?",
      "a": "Walk a known distance at normal pace and divide by counted individual steps. 14 m over 20 steps gives 70 cm. A gait stride from one foot to the same foot includes two steps."
    },
    {
      "q": "Why can I change the step calorie coefficient?",
      "a": "Pace, slope and carried load affect energy. 0.53 here is an assumption, not a proven standard for every walk. Use a coefficient with clear units and conditions."
    },
    {
      "q": "Do step calories include resting expenditure?",
      "a": "That depends on the coefficient you enter. A gross coefficient gives gross energy; an additional coefficient gives additional energy. Without time the calculator cannot verify this or measure a dietary deficit."
    },
    {
      "q": "How does step calculation differ from MET?",
      "a": "This method starts with distance from step count. The MET tool uses activity and duration. Different models need not agree; keep assumptions consistent when comparing walks."
    }
  ],
  "disclaimer": "Distance and energy estimate under supplied assumptions, not personal metabolism measurement. The height relation is an adult approximation and does not account for child gait or movement impairment."
};
