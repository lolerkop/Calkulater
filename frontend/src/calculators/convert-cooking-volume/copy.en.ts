import type { CalculatorCopy } from '../../lib/platform/types';

export const cookingVolumeCopyEn: CalculatorCopy = {
  name: 'Cooking volume converter',
  slug: 'cooking-volume-converter',
  shortDescription: 'Convert cups, spoons and millilitres — metric and US measures differ.',
  longDescription:
    'Converts cooking volume between millilitres, litres, teaspoons, tablespoons, cups and fluid ounces. A US cup is 236.59 ml and a metric cup is 250 ml, so every measure is named explicitly.',
  seoTitle: 'Cooking volume converter — cups, spoons, millilitres',
  seoDescription: 'Convert cooking volume between cups, tablespoons, teaspoons, millilitres and fluid ounces.',
  h1: 'Cooking volume converter',
  keywords: ['cup to ml', 'tablespoon ml', 'cooking measures'],
  howToUse: ['Enter the value.', 'Pick the source unit.', 'Pick the target unit.'],
  howItWorks: 'Every measure converts through the millilitre using exact factors.',
  example: 'A US cup is 236.59 ml and a metric cup is 250 ml — a recipe copied without noticing is off by five percent.',
  faq: [
    { q: 'Which cup does a recipe mean?', a: 'It depends on the source: the US cup is 236.59 ml, the metric cup is 250 ml. Both are named explicitly here so the choice is yours.' },
    { q: 'Can a cup of flour be converted to grams?', a: 'No — that needs the density of the specific ingredient, and this converter works with volume only.' },
    { q: 'How many teaspoons are in a tablespoon?', a: 'Three, in both the metric and the US system.' },
    { q: 'What is a fluid ounce?', a: 'The US fluid ounce is exactly 29.5735295625 ml; the imperial one differs and is not used here.' },
  ],
};
