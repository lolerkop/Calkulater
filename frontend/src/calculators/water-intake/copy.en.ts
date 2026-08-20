import type { CalculatorCopy } from '../../lib/platform/types';

export const waterIntakeCopyEn: CalculatorCopy = {
  name: 'Water intake calculator',
  slug: 'water-intake-calculator',
  shortDescription: 'Daily water intake from body weight, activity minutes and hot weather.',
  longDescription:
    'The figure starts from body weight at roughly 33 ml per kilogram, adds about 350 ml for every half hour of activity, and lifts the whole total by a tenth in hot weather. The multiplier applies to everything rather than to the activity part alone, because heat increases background losses through skin and breathing, not just sweat during exercise. These are accepted rules of thumb rather than measurements of a particular body: diet, health and climate move the real requirement more than weight does. The glasses figure sits alongside because nobody drinks in litres, and eleven glasses is a number you can still hold in your head by evening.',
  seoTitle: 'Water intake calculator — daily litres',
  seoDescription:
    'Calculate a daily water intake from body weight, minutes of activity and a hot-weather adjustment, with the total also shown in 250 ml glasses.',
  h1: 'Water intake calculator',
  keywords: ['water intake calculator', 'how much water to drink', 'daily hydration', 'water per day'],
  howToUse: [
    'Enter your body weight in kilograms.',
    'Enter how many minutes of activity you expect in the day.',
    'Tick hot weather when the day is hot or the room is warm.',
    'Spread the total across the day rather than drinking it in one go.',
  ],
  howItWorks:
    'Baseline = weight × 0.033 litres. Activity adds minutes ÷ 30 × 0.35 litres. Hot weather multiplies the whole total by 1.1.',
  example: 'At 72 kg with 45 minutes of activity the total is 2.901 litres, about 11.6 glasses.',
  faq: [
    {
      q: 'Does tea and coffee count towards the total?',
      a: 'Yes. The old idea that caffeine dehydrates you does not survive normal intake; the fluid in tea, coffee and food all counts, which is why the figure is intake rather than plain water.',
    },
    {
      q: 'Why multiply the whole total in hot weather rather than just the activity part?',
      a: 'Because heat raises losses through skin and breathing whether you exercise or not. Applying the multiplier only to activity would understate a hot day spent sitting still.',
    },
    {
      q: 'Is more water always better?',
      a: 'No. Drinking far beyond thirst dilutes blood sodium and in extreme cases is dangerous. This figure is a target to spread across a day, not a minimum to force.',
    },
    {
      q: 'How exact is 33 ml per kilogram?',
      a: 'It is a convention, and a fairly rough one. Kidney health, medication, altitude and diet shift the real requirement well outside what any weight-based rule can capture.',
    },
  ],
};
