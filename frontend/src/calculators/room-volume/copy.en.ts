import type { CalculatorCopy } from '../../lib/platform/types';

export const roomVolumeCopyEn: CalculatorCopy = {
  name: 'Room volume calculator',
  slug: 'room-volume-calculator',
  shortDescription: 'Volume of a room from its dimensions or floor area.',
  longDescription:
    'Calculates room volume either from length, width and height or from a known floor area and height. With dimensions it also reports the perimeter and wall area, which is what paint and wallpaper estimates start from.',
  seoTitle: 'Room volume calculator — cubic metres from dimensions',
  seoDescription: 'Calculate room volume in cubic metres from dimensions or floor area, plus perimeter and wall area.',
  h1: 'Room volume calculator',
  keywords: ['room volume', 'cubic metres', 'wall area'],
  howToUse: ['Choose how you are measuring.', 'Enter the dimensions or the floor area.', 'Enter the ceiling height.'],
  howItWorks: 'Volume = floor area × height. With dimensions, wall area = 2 × (length + width) × height.',
  example: 'A room 5 × 4 m with a 2.7 m ceiling holds 54 m³.',
  faq: [
    { q: 'Why does the area mode not show wall area?', a: 'Walls depend on the perimeter, and many different room shapes share one floor area. Without length and width there is nothing to compute it from.' },
    { q: 'Are doors and windows subtracted?', a: 'No. This is the gross figure; openings are handled by the paint and wallpaper calculators.' },
    { q: 'What is room volume used for?', a: 'Ventilation and heating sizing mostly, where the air being moved or warmed is what matters.' },
    { q: 'Does ceiling shape matter?', a: 'The calculator assumes a flat ceiling. Sloped or vaulted ceilings need the average height instead.' },
  ],
};
