import type { CalculatorCopy } from '../../lib/platform/types';

export const aspectRatioCopyEn: CalculatorCopy = {
  name: 'Aspect ratio calculator',
  slug: 'aspect-ratio-calculator',
  shortDescription: 'Reduce a resolution to its ratio, or find the missing side.',
  longDescription:
    'Divides width and height by their greatest common divisor to give the exact ratio, and works the other way too: give a ratio and one side and the other follows. The nearest common ratio is shown alongside, because an exact reduction and the number printed on the box are not always the same thing.',
  seoTitle: 'Aspect ratio calculator — resolution to ratio and back',
  seoDescription: 'Reduce a screen resolution to its aspect ratio or find the missing width or height for a given ratio.',
  h1: 'Aspect ratio calculator',
  keywords: ['aspect ratio calculator', 'resolution ratio', '16:9 calculator'],
  howToUse: ['Choose whether you have a resolution or a ratio.', 'Enter the known values.', 'Read the exact ratio or the missing side.'],
  howItWorks: 'The ratio is width and height divided by their greatest common divisor; a missing side is the known one times the opposite ratio part divided by its own.',
  example: '1920 and 1080 share a divisor of 120, which reduces the pair to 16:9.',
  faq: [
    { q: 'Why does 2560×1080 give 64:27?', a: 'That is the exact reduction by the greatest common divisor. The familiar 21:9 is a marketing round number, shown here as the nearest common ratio.' },
    { q: 'What if the missing side is not a whole number?', a: 'The rounded pixel value is shown as the answer and the exact figure appears beside it, so you can see how far the rounding went.' },
    { q: 'Are non-square pixels supported?', a: 'No. The calculator assumes square pixels, which is the case for every modern display format.' },
    { q: 'Can I use it for images rather than screens?', a: 'Yes, the arithmetic is the same for any pair of pixel dimensions.' },
  ],
};
