import type { CalculatorCopy } from '../../lib/platform/types';

export const waterIntakeCopyEn: CalculatorCopy = {
  "name": "Fluid estimate calculator",
  "slug": "water-intake-calculator",
  "shortDescription": "Educational fluid estimate from explicit weight, activity and heat assumptions, not a drinking requirement.",
  "longDescription": "Shows an educational scenario with three adopted coefficients: 33 mL/kg body weight, 350 mL per 30 activity minutes and a 10% increase of the whole total in heat. Primary validation of this exact combination has not been established, so the output is a model estimate rather than a daily drinking requirement. For context, EFSA describes adequate total water from food and beverages: 2 L for adult women and 2.5 L for men at moderate temperature and activity. These population references are neither this calculator’s equation nor a personal prescription.",
  "seoTitle": "Fluid estimate calculator — weight, activity and heat",
  "seoDescription": "Educational fluid estimate from explicit weight, activity and heat assumptions, not a drinking requirement.",
  "h1": "Fluid estimate calculator",
  "keywords": [
    "water intake calculator",
    "how much water to drink",
    "daily hydration",
    "water per day"
  ],
  "howToUse": [
    "Enter kilograms and nonnegative activity minutes.",
    "Select heat to see the fixed model multiplier.",
    "Read weight, activity and heat contributions separately.",
    "Do not convert litres or glasses into compulsory plain water; consider food and personal restrictions."
  ],
  "howItWorks": "B =0.033 m L; A =0.35 t/30 L; Q =(B+A)×k, k=1 without heat or 1.1 with heat. Heat increment =(B+A)×0.1. Glasses =Q/0.25. All three coefficients are assumptions; this model does not measure sweating or calculate electrolyte replacement.",
  "example": "72 kg, 45 min: B=2.376 L, A=0.525 L, total 2.901 L and 11.604 glass equivalents. With heat: 2.901×1.1=3.191 L (3.1911 unrounded), increment 0.2901 L. Zero activity leaves only the weight contribution.",
  "faq": [
    {
      "q": "Do tea and coffee count towards total water intake?",
      "a": "Yes, beverages and food moisture contribute to total water. That fact does not validate the 33/350/1.1 coefficients or prescribe how much of a particular drink to consume."
    },
    {
      "q": "Why does heat multiply the whole model total?",
      "a": "It is the scenario’s adopted rule, not a measured physiological relationship. 10% applies to weight plus activity contributions; actual losses depend on conditions and individual factors."
    },
    {
      "q": "Should I drink more than the calculated fluid amount?",
      "a": "The calculator sets no minimum or maximum and does not suggest forced drinking. If you have prescribed fluid restrictions, follow individual instructions rather than this model."
    },
    {
      "q": "How well supported is 33 mL water per kilogram?",
      "a": "Here it is a starting assumption with no confirmed universal accuracy. Personal requirement cannot be inferred from weight alone; age, diet, health and activity matter too."
    },
    {
      "q": "How should I read the displayed number of glasses?",
      "a": "It only converts litres to 250 mL portions. 11.604 glasses equal 2.901 L arithmetically, not a requirement to drink that much plain water in addition to food and beverages."
    }
  ],
  "disclaimer": "Educational scenario, not a drinking requirement or treatment advice. Childhood, pregnancy, lactation and fluid restrictions require separate assessment; the model does not account for them."
};
