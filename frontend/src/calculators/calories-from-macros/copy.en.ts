import type { CalculatorCopy } from '../../lib/platform/types';

export const caloriesCopyEn: CalculatorCopy = {
  name: 'Calories from macros calculator',
  slug: 'calories-from-macros-calculator',
  shortDescription: 'Calories contributed by protein, fat and carbohydrates.',
  longDescription:
    'Converts grams of protein, fat and carbohydrates into calories using the Atwater factors, and shows what share each macronutrient contributes to the total.',
  seoTitle: 'Calories from macros calculator — protein, fat and carbs',
  seoDescription: 'Convert grams of protein, fat and carbohydrates into calories and see each share of the total.',
  h1: 'Calories from macros calculator',
  keywords: ['calories from macros', 'macronutrient calories', 'atwater factors'],
  howToUse: ['Enter grams of protein.', 'Enter grams of fat.', 'Enter grams of carbohydrates.'],
  howItWorks: 'Calories = 4 × protein + 9 × fat + 4 × carbohydrates.',
  example: '100 g protein, 50 g fat and 200 g carbs give 1,650 kcal.',
  faq: [
    { q: 'Why is fat 9 and not 4?', a: 'Fat is more energy-dense per gram than protein or carbohydrate. The Atwater factors reflect the energy the body actually extracts.' },
    { q: 'Does this include fibre or alcohol?', a: 'No. The calculator covers the three main macronutrients only; fibre and alcohol use different factors.' },
    { q: 'Are the factors exact?', a: 'They are conventional averages. Real absorption varies by food and by person, so treat the result as a working estimate.' },
    { q: 'Why do the shares matter?', a: 'Two diets with the same calories can differ sharply in composition, and the split is usually what a plan actually targets.' },
  ],
};
