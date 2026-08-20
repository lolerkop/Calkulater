import type { CalculatorCopy } from '../../lib/platform/types';

export const petAgeCopyEn: CalculatorCopy = {
  name: 'Pet age calculator',
  slug: 'pet-age-calculator',
  shortDescription: 'Age of a cat or dog in human years from a veterinary table.',
  longDescription:
    'The old rule of multiplying by seven is wrong, and it is wrong worst at the start. A pet covers roughly fifteen human years in its first year and adds about nine more in its second; only after that does the yearly increment settle down. Size then takes over: large dogs age faster than small ones, and the gap opens in the later years rather than the puppy ones, which is why a seven-year-old retriever and a seven-year-old terrier are not at the same stage of life. The table behind this calculator follows that shape instead of a single multiplier.',
  seoTitle: 'Pet age calculator — cat and dog years',
  seoDescription:
    'Convert the age of a cat or dog into human years using a non-linear veterinary table with a separate rate for large breeds.',
  h1: 'Pet age calculator',
  keywords: ['pet age calculator', 'cat years', 'dog years', 'human years'],
  howToUse: [
    'Choose the species and, for dogs, the size group.',
    'Enter the pet’s age in years.',
    'Fractional years are accepted for animals under two.',
    'Read the yearly increment to project further ahead.',
  ],
  howItWorks:
    'The first year counts as fifteen human years and the second adds nine more. Every year after that adds a fixed amount that depends on species and size.',
  example: 'A seven-year-old cat is about 44 in human years: 15 + 9 + five further years at four each.',
  faq: [
    {
      q: 'Why is multiplying by seven wrong?',
      a: 'It underestimates the first two years badly and overestimates the later ones. A one-year-old dog is closer to a fifteen-year-old human than to a seven-year-old — it is already near adulthood.',
    },
    {
      q: 'Why do large dogs age faster?',
      a: 'Bigger breeds have shorter lifespans, and the difference shows up in the yearly increment rather than in puppyhood. A large dog gains about seven human years annually against four for a small one.',
    },
    {
      q: 'Where do medium dogs fit?',
      a: 'Between the two groups. Choosing the small-dog table for a medium breed of twelve to twenty kilograms is usually the closer of the two options.',
    },
    {
      q: 'How exact is this conversion?',
      a: 'It is a convention, not a measurement. Breed, health and care move the real picture considerably, and the number is best used as a rough stage of life rather than a fact.',
    },
  ],
};
