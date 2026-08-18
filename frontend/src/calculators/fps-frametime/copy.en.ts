import type { CalculatorCopy } from '../../lib/platform/types';

export const fpsFrametimeCopyEn: CalculatorCopy = {
  name: 'FPS to frame time calculator',
  slug: 'fps-frame-time-calculator',
  shortDescription: 'Convert between frames per second and milliseconds per frame.',
  longDescription:
    'Frame rate and frame time are reciprocals: a thousand milliseconds divided by the frame rate gives the time each frame occupies. Both directions use that one relationship, and a reference row shows the common rates side by side so a target is easy to place.',
  seoTitle: 'FPS to frame time calculator — milliseconds per frame',
  seoDescription: 'Convert frames per second to frame time in milliseconds and back, with the common refresh rates for comparison.',
  h1: 'FPS to frame time calculator',
  keywords: ['fps to frame time', 'frame time calculator', 'milliseconds per frame'],
  howToUse: ['Choose which direction you need.', 'Enter the known value.', 'Read the converted value and the comparison row.'],
  howItWorks: 'frame time in ms = 1000 ÷ frame rate, and frame rate = 1000 ÷ frame time.',
  example: '60 FPS means each frame lasts 1000 ÷ 60 = 16.667 milliseconds.',
  faq: [
    { q: 'Why is 60 FPS not exactly 16 ms?', a: 'A thousand does not divide evenly by sixty. The exact figure is 16.667 ms, and rounding it to 16 would drift by a frame every few seconds.' },
    { q: 'Does a higher frame rate always mean lower frame time?', a: 'Yes, they are strict reciprocals, so one falls exactly as the other rises.' },
    { q: 'Is this the same as 1% low frame times?', a: 'No. This is the average relationship between rate and time; percentile statistics need a full frame log.' },
    { q: 'Why is zero rejected?', a: 'Dividing by zero has no value. A frame rate of zero means no picture, and a frame time of zero means no frame at all.' },
  ],
};
