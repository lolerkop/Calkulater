import type { CalculatorCopy } from '../../lib/platform/types';

export const petFoodCopyEn: CalculatorCopy = {
  name: 'Pet food calculator',
  slug: 'pet-food-calculator',
  shortDescription: 'Daily food ration from body weight, requirement multiplier and food energy.',
  longDescription:
    'Energy requirement does not scale with body weight in a straight line. It follows weight to the power of three quarters, which is why a four-kilogram cat does not eat a quarter of what a sixteen-kilogram dog eats — it eats closer to a third. Feeding by a linear rule therefore overfeeds small animals and underfeeds large ones, consistently and in the same direction every time. This calculator starts from the resting requirement, applies a multiplier for age, activity and neutering, and converts the result into grams using the energy density printed on the packet.',
  seoTitle: 'Pet food calculator — daily ration in grams',
  seoDescription:
    'Calculate the daily food ration for a cat or dog from body weight, an energy requirement multiplier and the food energy per 100 grams.',
  h1: 'Pet food calculator',
  keywords: ['pet food calculator', 'how much to feed a dog', 'pet energy requirement', 'RER'],
  howToUse: [
    'Enter the pet’s current body weight in kilograms.',
    'Choose a multiplier: 1.0 for resting, 1.2–1.4 for a neutered adult, 1.6–1.8 for an active animal.',
    'Enter the food energy per 100 g from the packaging.',
    'Split the daily ration across the number of meals you feed.',
  ],
  howItWorks:
    'Resting requirement RER = 70 × weight^0.75 kcal per day. Multiplying by the factor gives the daily need, which is converted to grams using the food energy.',
  example: 'A 22 kg dog at a 1.6 multiplier on 350 kcal/100 g food needs about 325 g a day.',
  faq: [
    {
      q: 'Why the power of 0.75 rather than plain weight?',
      a: 'Because metabolic rate grows more slowly than body mass. It is an established relationship across mammals, and ignoring it is what makes linear feeding charts wrong at both ends of the size range.',
    },
    {
      q: 'Which multiplier should I use?',
      a: 'Around 1.0 for a resting or overweight animal, 1.2–1.4 for a neutered adult, 1.6–1.8 for an active one, and higher for growth, pregnancy or working dogs. It is the least certain input here.',
    },
    {
      q: 'Should I feed the target weight or the current one?',
      a: 'For weight loss, calculate from the target weight rather than the current one. Feeding for the weight you have keeps the weight you have.',
    },
    {
      q: 'Does wet food change the calculation?',
      a: 'Only through the energy density, which is much lower for wet food — often 70–100 kcal per 100 g against 350–400 for dry. The gram figure comes out several times larger for the same energy.',
    },
  ],
};
