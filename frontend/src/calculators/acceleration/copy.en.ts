import type { CalculatorCopy } from '../../lib/platform/types';

export const accelerationCopyEn: CalculatorCopy = {
  name: 'Acceleration calculator',
  slug: 'acceleration-calculator',
  shortDescription: 'Acceleration from a change of speed over time, or final speed from acceleration.',
  longDescription:
    'Uniform acceleration ties four quantities together — initial speed, final speed, time and the acceleration itself — and knowing any three gives the fourth. This calculator handles the two directions people actually need: finding the acceleration from a measured change of speed, and finding the speed reached after accelerating for a given time. The distance shown alongside comes from the average speed rather than from the acceleration, which is the same thing algebraically but does not lose precision in the mode where the acceleration was itself the result of a division.',
  seoTitle: 'Acceleration calculator — speed, time and distance',
  seoDescription:
    'Calculate acceleration from initial speed, final speed and time, or the final speed from acceleration, along with distance and change of speed.',
  h1: 'Acceleration calculator',
  keywords: ['acceleration calculator', 'uniform acceleration', 'final speed', 'distance travelled'],
  howToUse: [
    'Choose whether you are looking for acceleration or final speed.',
    'Enter the initial speed in metres per second.',
    'Enter the final speed, or the acceleration if you are looking for the speed.',
    'Enter the time over which the change happened.',
  ],
  howItWorks:
    'Acceleration a = (v − v₀) ÷ t, and the inverse gives v = v₀ + a × t. Distance uses the average speed: s = (v₀ + v) ÷ 2 × t.',
  example: 'Going from a standstill to 27.8 m/s in 8.4 seconds is 3.31 m/s², covering 116.76 metres.',
  faq: [
    {
      q: 'Can the acceleration come out negative?',
      a: 'Yes, and that is braking. A negative result means the final speed is below the initial one; there is nothing wrong with the input.',
    },
    {
      q: 'How do I convert km/h to m/s?',
      a: 'Divide by 3.6. One hundred kilometres per hour is 27.78 m/s, which is why the standard 0–100 test uses that figure.',
    },
    {
      q: 'Why is distance calculated from the average speed?',
      a: 'Under uniform acceleration the average of the initial and final speeds is the true average over the whole interval, so multiplying it by time gives the exact distance.',
    },
    {
      q: 'Does this work if the acceleration is not uniform?',
      a: 'The acceleration it returns is the average over the interval, which is correct as a summary. The distance, however, assumes a uniform change and will be off if the real profile was uneven.',
    },
  ],
};
