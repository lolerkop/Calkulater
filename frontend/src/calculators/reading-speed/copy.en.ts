import type { CalculatorCopy } from '../../lib/platform/types';

export const readingSpeedCopyEn: CalculatorCopy = {
  name: 'Reading speed calculator',
  slug: 'reading-speed-calculator',
  shortDescription: 'Words per minute from a timed passage, plus time for a whole book.',
  longDescription:
    'Divides the words you read by the minutes it took and gives the speed in words per minute, along with the hourly figure. Add the length of a book and the calculator estimates how long it would take at that pace. Speed is all this measures — comprehension is a different question and is not scored here.',
  seoTitle: 'Reading speed calculator — words per minute',
  seoDescription: 'Measure your reading speed in words per minute and estimate how long a book of a given length would take.',
  h1: 'Reading speed calculator',
  keywords: ['reading speed calculator', 'words per minute', 'wpm reading test'],
  howToUse: ['Read a passage and note how many words it had.', 'Enter the time it took in minutes.', 'Optionally add a book length for an estimate.'],
  howItWorks: 'speed = words ÷ minutes; time for a book is its length divided by that speed.',
  example: '3000 words in 12 minutes is 250 words per minute.',
  faq: [
    { q: 'Does this measure comprehension?', a: 'No. It measures pace only. Reading faster with less understanding will still show as a higher number here.' },
    { q: 'What is a typical adult reading speed?', a: 'Most adults read prose somewhere between 200 and 300 words per minute, but the figure varies with the material and with familiarity.' },
    { q: 'Why is the character count approximate?', a: 'It assumes an average word length, which differs by language and text, so treat it as a rough conversion rather than a measurement.' },
    { q: 'Do I have to enter a book length?', a: 'No, that field is optional. Without it you simply get the speed.' },
  ],
};
