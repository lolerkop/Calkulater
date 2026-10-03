import type { CalculatorCopy } from '../../lib/platform/types';

export const convertCookingWeightCopyEn: CalculatorCopy = {
  "name": "Cooking weight converter",
  "slug": "cooking-weight-converter",
  "shortDescription": "Cups, spoons and millilitres into grams — and back — for a chosen product.",
  "longDescription": "Converts selected kitchen volume to approximate mass and back using an assigned product density. The density is displayed; it is not a measurement of your portion. This calculator uses a 240 mL cup. Check the actual measuring vessel and the convention in the recipe.",
  "seoTitle": "Cooking weight converter: cups and spoons to grams",
  "seoDescription": "Convert cups, tablespoons and millilitres into grams for flour, sugar, honey and other products, and back again.",
  "h1": "Cooking weight converter",
  "keywords": [
    "cups to grams",
    "cooking weight converter",
    "tablespoon to grams",
    "volume to weight cooking"
  ],
  "howToUse": [
    "Choose the product — density is what makes volume into weight.",
    "Choose the unit you are measuring in.",
    "Enter the amount.",
    "Switch the direction if you have grams and need volume."
  ],
  "howItWorks": "The amount is turned into millilitres by the unit factor and multiplied by the density of the product. In the other direction grams are divided by the density and then converted back into the chosen unit.",
  "example": "At the assumed flour density of 0.53 g/mL, one 240 mL cup gives an estimate of 127.2 g.",
  "faq": [
    {
      "q": "How should I read the water, flour and honey masses?",
      "a": "They are estimates using model densities: a 240 mL cup gives 240 g water at 1 g/mL, 127.2 g flour at 0.53 g/mL, and 340.8 g honey at 1.42 g/mL. Actual portion mass may differ."
    },
    {
      "q": "How exact are the densities?",
      "a": "These are fixed approximate values, not a check of the particular ingredient. Composition, moisture and how the vessel is filled affect portion mass; weighing determines it more accurately."
    },
    {
      "q": "Which cup is used?",
      "a": "The selected cup is 240 mL, a convention used for example in FDA nutrition labeling. It differs from a 250 mL metric cup and a customary US cup of about 236.59 mL; the word cup alone does not specify its volume."
    },
    {
      "q": "Can I convert grams back into cups?",
      "a": "Yes, switch the direction. The same density is used, so converting there and back returns the original number."
    },
    {
      "q": "Why not just use a scale?",
      "a": "Do, if you have one. This is for recipes written in cups when you have grams, or the other way round."
    }
  ],
  "disclaimer": "Approximate conversion with fixed densities. The selected cup is 240 mL; weigh the ingredient for an accurate mass."
};
