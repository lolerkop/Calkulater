import type { CalculatorCopy } from '../../lib/platform/types';

export const roastTimeCopyEn: CalculatorCopy = {
  name: "Roasting time calculator",
  slug: "roasting-time",
  shortDescription: "How long a joint needs in the oven from its weight and a per-kilo rate.",
  longDescription:
    "Works out roasting time from the weight of the joint: a fixed part plus a rate of minutes per kilogram, and then the resting time separately. The fixed part is not decoration — it covers the oven coming up to heat and the crust forming, a stage that barely depends on the size of the joint, and without it a small piece would come out with a proportionally short time. Resting is shown on its own line deliberately: you take the meat out after the first stage and serve after the second, and adding them into one figure would confuse two different moments.",
  seoTitle: "Roasting time calculator — minutes from weight and rate",
  seoDescription: "Calculate roasting time for meat or poultry: the fixed part, minutes per kilogram and the resting time after the oven.",
  h1: "Roasting time calculator",
  keywords: ["roasting time calculator", "how long to roast a turkey", "minutes per kilo roast", "oven time calculator"],
  howToUse: [
    "Weigh the joint together with any stuffing.",
    "Set the minutes per kilogram from your recipe: poultry is usually 40, beef 25–35.",
    "Give the fixed part, which covers heating through and the crust.",
    "Set the resting time, normally between a tenth and a fifth of the cooking time.",
  ],
  howItWorks: "Cooking time = fixed part + rate per kilogram × weight. Resting = cooking time × resting share ÷ 100, counted separately from the cooking.",
  example: "A 5 kg turkey at 40 min/kg with a 20 min fixed part roasts for 3 h 40 min and rests a further 44 minutes.",
  faq: [
    { q: "Why is there a fixed part?", a: "It covers the oven coming to heat, the crust and the opening stage, which barely depends on size. Without it a small piece would get a proportionally short time." },
    { q: "Why is resting shown separately?", a: "Because they are different moments: you take the meat out after cooking and serve after resting. During the rest the juices redistribute and the cut stops running." },
    { q: "Does this replace a thermometer?", a: "No. Time is an estimate from weight, while doneness is a temperature at the centre. Thickness and shape change the result more than weight does." },
    { q: "How is this different from a cooking-loss calculator?", a: "That converts the weight of the food between raw and cooked. This works out time, and weight is only the input." },
  ],
};
