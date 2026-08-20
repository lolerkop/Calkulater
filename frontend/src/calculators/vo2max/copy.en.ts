import type { CalculatorCopy } from '../../lib/platform/types';

export const vo2maxCopyEn: CalculatorCopy = {
  name: 'VO2 max calculator',
  slug: 'vo2-max-calculator',
  shortDescription: 'Estimate of maximal oxygen uptake from the Cooper test or from heart rate.',
  longDescription:
    'Maximal oxygen uptake is the ceiling on how much oxygen the body can use during hard effort, and it is the single best laboratory number for aerobic fitness. Both methods here are estimates rather than measurements: a real figure comes from analysing expired air on a treadmill. The Cooper test rests on a distance actually covered and is therefore sensitive to pacing, surface and weather. The heart-rate formula needs no running at all but leans entirely on resting pulse, which moves with sleep, caffeine and nerves more than it moves with fitness. The two are shown separately because they have different inputs and different reliability.',
  seoTitle: 'VO2 max calculator — Cooper test and heart rate',
  seoDescription:
    'Estimate maximal oxygen uptake from the distance covered in a 12-minute Cooper test or from the ratio of maximum to resting heart rate.',
  h1: 'VO2 max calculator',
  keywords: ['vo2 max calculator', 'cooper test', 'maximal oxygen uptake', 'aerobic fitness'],
  howToUse: [
    'Choose the method you have data for.',
    'For the Cooper test, enter the metres covered in exactly 12 minutes.',
    'For the heart-rate method, enter resting and maximum pulse in beats per minute.',
    'Measure resting pulse in the morning, before getting out of bed.',
  ],
  howItWorks:
    'Cooper: VO₂max = (distance − 504.9) ÷ 44.73. Heart rate: VO₂max = 15.3 × maximum pulse ÷ resting pulse.',
  example: 'Covering 2,600 m in 12 minutes gives an estimate of 46.839 ml/kg/min.',
  faq: [
    {
      q: 'Which method is more reliable?',
      a: 'The Cooper test, provided the effort was genuinely maximal and evenly paced. The heart-rate formula is convenient but depends on a resting pulse that varies day to day.',
    },
    {
      q: 'What is a good VO2 max?',
      a: 'It depends heavily on age and sex. Untrained adults typically sit in the 30s, recreational runners in the 40s and 50s, and elite endurance athletes above 70.',
    },
    {
      q: 'How do I find my maximum heart rate?',
      a: 'A measured maximum from a hard effort is best. The common estimate of 220 minus age is a rough population average and can be off by more than ten beats for an individual.',
    },
    {
      q: 'Can I compare these two estimates with each other?',
      a: 'Not usefully. They rest on different assumptions and routinely disagree by several units; comparing your own figure over time within one method is far more informative.',
    },
  ],
};
