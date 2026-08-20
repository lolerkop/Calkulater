import type { CalculatorCopy } from '../../lib/platform/types';

export const waveCopyEn: CalculatorCopy = {
  name: 'Wavelength and frequency calculator',
  slug: 'wave-frequency-calculator',
  shortDescription: 'Relates wave speed, frequency and wavelength in any direction.',
  longDescription:
    'One relation ties the three quantities together, so any two give the third and there are exactly three modes. The period shown alongside is the same information as frequency expressed in time: frequency is easier to calculate with, while period is easier to picture. The point that catches people out is that wave speed belongs to the medium, not to the source. Sound travels at about 343 m/s in air, near 1,500 in water and three times faster again in steel, so the same note has a wavelength four times longer underwater — and that is a fact about the water, not about the note.',
  seoTitle: 'Wavelength, frequency and wave speed calculator',
  seoDescription:
    'Calculate wavelength, frequency or wave speed from the two quantities you know, together with the period of oscillation.',
  h1: 'Wavelength and frequency calculator',
  keywords: ['wavelength calculator', 'frequency', 'wave speed', 'period of oscillation'],
  howToUse: [
    'Choose which of the three quantities you are looking for.',
    'Enter the two you already know.',
    'Use the speed of the medium, not of the source.',
    'The period is shown alongside as frequency expressed in seconds.',
  ],
  howItWorks:
    'Speed = wavelength × frequency. Rearranging gives wavelength = speed ÷ frequency and frequency = speed ÷ wavelength. Period is one divided by frequency.',
  example: 'At 343 m/s in air, a 440 Hz note has a wavelength of 0.7795 m and a period of 0.002273 s.',
  faq: [
    {
      q: 'What wave speed should I use?',
      a: 'The speed in the medium the wave travels through: roughly 343 m/s for sound in air at room temperature, about 1,500 in water, and 299,792,458 for light in vacuum.',
    },
    {
      q: 'Does a higher note travel faster?',
      a: 'No. Speed is set by the medium, so a higher frequency simply means a shorter wavelength. That is why treble and bass from the same speaker arrive together.',
    },
    {
      q: 'What is the difference between frequency and period?',
      a: 'They are reciprocals of one another. Fifty hertz is a period of 0.02 seconds; the first counts cycles per second, the second measures one cycle.',
    },
    {
      q: 'Does this work for light and radio?',
      a: 'Yes, with the appropriate speed. In vacuum use 299,792,458 m/s; inside glass or cable the speed is lower and the wavelength shortens accordingly.',
    },
  ],
};
