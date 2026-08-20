import type { CalculatorCopy } from '../../lib/platform/types';

export const sleepTimeCopyEn: CalculatorCopy = {
  name: 'Sleep time calculator',
  slug: 'sleep-time-calculator',
  shortDescription: 'Wake-up or bedtime based on 90-minute sleep cycles.',
  longDescription:
    'Ninety minutes is the accepted average length of a sleep cycle rather than a measurement of any particular person — real cycles run from roughly 80 to 110 minutes and change through the night. The point of the calculation is not precision but landing the alarm between cycles instead of in the middle of deep sleep, which is why the target is a whole number of cycles rather than a round eight hours. Waking mid-cycle feels wrecked even after a long night, and waking at the end of one feels rested even after a short one. The time to fall asleep is added separately because it is time in bed rather than sleep.',
  seoTitle: 'Sleep time calculator — 90-minute cycles',
  seoDescription:
    'Find the time to wake up or to go to bed from a number of 90-minute sleep cycles, adjusted for how long you take to fall asleep.',
  h1: 'Sleep time calculator',
  keywords: ['sleep cycle calculator', 'when to go to bed', 'wake up time', 'sleep phases'],
  howToUse: [
    'Choose whether you know your bedtime or your alarm.',
    'Enter that time in hours and minutes.',
    'Choose how many cycles you want — five or six suits most adults.',
    'Enter how long you usually take to fall asleep.',
  ],
  howItWorks:
    'Time in bed = cycles × 90 minutes + time to fall asleep. That is added to a bedtime or subtracted from a wake-up time, wrapping around midnight.',
  example: 'Going to bed at 23:00 for five cycles with 15 minutes to fall asleep gives a 06:45 alarm.',
  faq: [
    {
      q: 'Is a sleep cycle really 90 minutes?',
      a: 'On average and roughly. Individual cycles run from about 80 to 110 minutes and lengthen through the night, so treat the result as a target rather than a schedule.',
    },
    {
      q: 'How many cycles should I aim for?',
      a: 'Five or six for most adults, which is seven and a half to nine hours of sleep. Four is a short night that works occasionally, not routinely.',
    },
    {
      q: 'Why add time to fall asleep separately?',
      a: 'Because it is time in bed, not sleep. Setting an alarm without it steals the difference from the last cycle, which is exactly what the calculation exists to avoid.',
    },
    {
      q: 'Why does the result sometimes fall on the next day?',
      a: 'Because the clock wraps around midnight. Going to bed at 23:00 and sleeping nine hours means 08:00 the next morning, not 32:00.',
    },
  ],
};
