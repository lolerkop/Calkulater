import { contractContent } from './contractContent';
import type { CalculatorCopy } from '../../lib/platform/types';

export const readingSpeedCopyEn: CalculatorCopy = {
  name: 'Reading speed calculator',
  slug: 'reading-speed-calculator',
  shortDescription: 'Words per minute from a timed passage, plus time for a whole book.',
  seoTitle: 'Reading speed calculator — words per minute',
  seoDescription: 'Measure your reading speed in words per minute and estimate how long a book of a given length would take.',
  h1: 'Reading speed calculator',
  keywords: ['reading speed calculator', 'words per minute', 'wpm reading test'],
  ...contractContent.en
};
