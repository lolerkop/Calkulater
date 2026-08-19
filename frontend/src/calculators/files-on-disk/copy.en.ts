import type { CalculatorCopy } from '../../lib/platform/types';

export const filesOnDiskCopyEn: CalculatorCopy = {
  name: "Files on disk calculator",
  slug: "files-on-disk-calculator",
  shortDescription: "How many files of a given size fit on a drive.",
  longDescription:
    "Divides the drive capacity by the file size and rounds down, because a partial file does not fit. Decimal and binary prefixes are separate options rather than an assumption: a manufacturer writes a terabyte as ten to the twelfth, the system shows tebibytes, and that difference is exactly where the missing space appears to go.",
  seoTitle: "Files on disk calculator — how many files fit on a drive",
  seoDescription: "Work out how many files of a given size fit on a drive, with decimal and binary units kept apart and an optional reserve.",
  h1: "Files on disk calculator",
  keywords: ["files on disk calculator", "how many photos fit", "storage capacity calculator"],
  howToUse: ["Enter the drive capacity and pick its unit.", "Enter the file size and pick its unit.", "Add a reserve if some space is spoken for."],
  howItWorks: "Usable space is capacity minus the reserve; the count is that divided by the file size, rounded down.",
  example: "A 1000 GB drive holds 250 000 files of 4 MB each.",
  faq: [
    { q: "Why does my drive show less than the label?", a: "The label counts a terabyte as ten to the twelfth bytes; the system counts tebibytes of 1024⁴. The gap is about nine percent and is not lost space." },
    { q: "Is filesystem overhead subtracted?", a: "Not automatically. Cluster size and metadata vary by filesystem, so the reserve field lets you account for them explicitly." },
    { q: "What if the file is bigger than the drive?", a: "The answer is zero, which is a correct result rather than an error." },
    { q: "Are files assumed to be identical?", a: "Yes. The calculation answers how many files of one given size fit, not how a mixed collection would pack." },
  ],
};
