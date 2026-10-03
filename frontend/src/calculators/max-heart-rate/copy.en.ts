import type { CalculatorCopy } from '../../lib/platform/types';

export const maxHeartRateCopyEn: CalculatorCopy = {
  "name": "Maximum heart rate calculator",
  "slug": "maximum-heart-rate-calculator",
  "shortDescription": "Age-based pulse estimates and percentages of maximum or reserve, with formula population limits.",
  "longDescription": "Shows an age-based maximum-heart-rate estimate and arithmetic percentage ranges. Tanaka is a regression for healthy adults; Gulati describes mean peak rate in asymptomatic women. Neither is a measured heart limit. With a resting rate, percentages apply to the reserve; without one, to estimated maximum. The intervals do not establish individual aerobic thresholds, fat burning or safe exercise intensity. Ages 18–120 are the interface domain, not evidence of equal accuracy throughout that range.",
  "seoTitle": "Maximum heart rate estimate — three age formulas",
  "seoDescription": "Age-based pulse estimates and percentages of maximum or reserve, with formula population limits.",
  "h1": "Maximum heart rate calculator",
  "keywords": [
    "maximum heart rate calculator",
    "heart rate zones",
    "karvonen formula",
    "heart rate reserve"
  ],
  "howToUse": [
    "Enter a whole adult age and select a formula with the relevant studied population.",
    "Enter a measured resting rate for reserve calculation; blank or 0 means not supplied.",
    "Check the column: percentages of maximum and reserve give different boundaries.",
    "Use the numbers to compare models and arrange a personal exercise plan separately."
  ],
  "howItWorks": "HRmax: 220−age; Tanaka 208−0.7×age; Gulati 206−0.88×age. With resting R: boundary = R+p(HRmax−R), with p from 0.5 to 1. Without R: boundary =pHRmax. Only displayed boundaries are rounded to whole beats/min.",
  "example": "Age 35: 220−35=185 bpm. Rest 60 gives reserve 125; 70–80%: 60+0.7×125=147.5→148 and 60+0.8×125=160. Without rest, 70–80% of maximum gives 130–148. At 60, the conventional estimate is 160 and Tanaka 166 bpm.",
  "faq": [
    {
      "q": "How accurate is maximum heart rate estimated from age?",
      "a": "It is a population estimate. An individual maximum may differ; this calculator provides no guaranteed error interval. Matching a predicted rate does not establish a diagnosis."
    },
    {
      "q": "What does choosing Tanaka or Gulati mean?",
      "a": "Tanaka 208−0.7×age was studied in healthy adults. Gulati 206−0.88×age describes mean peak rate in asymptomatic women. Compared with Tanaka, 220−age is lower after 40 and higher before 40."
    },
    {
      "q": "Why enter resting pulse for percentage ranges?",
      "a": "It changes the percentage basis. With maximum 185 and rest 60,70% reserve gives 147.5, whereas 70% maximum is 129.5. These are distinct calculations, without an automatic fitness judgement."
    },
    {
      "q": "How should I prepare a resting rate for this calculation?",
      "a": "Measure under calm comparable conditions in beats/min. Sleep, stress and medication can alter it. Rest must be below the estimated maximum; malformed text is not treated as zero."
    },
    {
      "q": "Can I exercise up to the table’s highest number?",
      "a": "The table neither prescribes exercise nor assesses safety. Illness and medicines affecting pulse require individual advice. Do not try to reach the estimated maximum to check the calculator."
    }
  ],
  "disclaimer": "Adult age-based estimates, not a measured heart limit or exercise prescription. Fixed percentages do not locate individual physiological thresholds."
};
