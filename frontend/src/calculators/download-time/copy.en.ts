import type { CalculatorCopy } from '../../lib/platform/types';

export const downloadTimeCopyEn: CalculatorCopy = {
  name: 'Download time calculator',
  slug: 'download-time-calculator',
  shortDescription: 'How long a file takes on your connection, bits and bytes kept apart.',
  longDescription:
    'Converts a file size to bits, divides by your link speed and shows the time. Decimal prefixes such as MB and binary prefixes such as MiB are separate options rather than a hidden assumption, and so are bit-per-second and byte-per-second speeds. The figure is theoretical: no protocol overhead is folded in behind your back.',
  seoTitle: 'Download time calculator — file size and connection speed',
  seoDescription: 'Calculate how long a download takes from file size and connection speed, with decimal and binary units kept separate.',
  h1: 'Download time calculator',
  keywords: ['download time calculator', 'file transfer time', 'mbps download speed'],
  howToUse: ['Enter the file size and pick its unit.', 'Enter your connection speed and its unit.', 'Read the time the transfer would take.'],
  howItWorks: 'Bits = bytes × 8, and time = bits ÷ link speed in bits per second.',
  example: 'A 1 GB file on a 100 Mbit/s link takes 8 000 000 000 ÷ 100 000 000 = 80 seconds.',
  faq: [
    { q: 'Why is my real download slower?', a: 'The figure is the theoretical minimum. Protocol overhead, server limits and shared capacity all reduce real throughput.' },
    { q: 'What is the difference between MB and MiB?', a: 'A megabyte is a million bytes; a mebibyte is 1 048 576. The gap is about five percent and grows with file size.' },
    { q: 'Why divide by bits and not bytes?', a: 'Link speeds are quoted in bits per second while files are measured in bytes, so one side has to be converted. Multiplying bytes by eight does it.' },
    { q: 'Can I enter speed in megabytes per second?', a: 'Yes, MB/s is one of the speed units and is converted to bits internally.' },
  ],
};
