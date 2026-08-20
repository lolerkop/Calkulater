import type { CalculatorCopy } from '../../lib/platform/types';

export const raidCopyEn: CalculatorCopy = {
  name: "RAID calculator",
  slug: "raid-calculator",
  shortDescription: "Usable capacity of a RAID array, its failure tolerance and the efficiency of each level.",
  longDescription:
    "Shows how much of the capacity you bought stays available and how much goes to redundancy. That price is exactly what separates the levels: RAID 0 spends nothing and survives no failure at all, RAID 5 gives up one disk to parity, RAID 6 gives up two, and a mirror gives up half the array. The failure count shown for RAID 10 is the guaranteed one — the array can survive half its disks if the failures land in different mirrors, but a lucky distribution is not something to plan around. A level with too few disks is rejected rather than quietly padded up to its minimum.",
  seoTitle: "RAID calculator: usable array capacity",
  seoDescription: "Calculate the usable capacity of RAID 0, 1, 5, 6 and 10, the disk failures tolerated and the efficiency of each level.",
  h1: "RAID calculator",
  keywords: ["raid calculator", "raid capacity", "raid 5", "raid 6", "raid 10"],
  howToUse: [
    "Choose the array level.",
    "Enter the number of disks — RAID 10 needs an even count.",
    "Enter the size of a single disk in terabytes.",
    "Disks are assumed identical: an array levels down to its smallest one.",
  ],
  howItWorks:
    "RAID 0 gives n×S, RAID 1 gives the size of one disk, RAID 5 gives (n−1)×S, RAID 6 gives (n−2)×S, and RAID 10 gives half the combined capacity. Efficiency is the usable share of the raw capacity.",
  example: "RAID 5 built from six 4 TB disks gives 20 TB usable out of 24 TB raw, or 83.33%.",
  faq: [
    { q: "Which level suits a home storage box?", a: "Usually RAID 5 with three to six disks and RAID 6 from eight upward: as disks grow in number and size, the chance of a second failure during a rebuild stops being negligible." },
    { q: "What happens with disks of different sizes?", a: "The array levels down to the smallest one: an 8 TB disk paired with a 4 TB disk contributes only 4 TB. That is why the calculation assumes identical disks." },
    { q: "Why does RAID 10 show only one tolerated failure?", a: "That is the guaranteed figure. The array can survive half its disks if the failures land in different mirrors, but two failures inside one mirror destroy it at any size — a lucky distribution cannot be promised." },
    { q: "Does RAID replace a backup?", a: "No. RAID protects against a disk failing, not against a deleted file, ransomware, fire or theft — all of which hit the whole array equally. A backup is a separate requirement." },
    { q: "Why does the manufacturer promise more terabytes than the system shows?", a: "Manufacturers count a terabyte as 10¹² bytes while the system displays tebibytes of 2⁴⁰ bytes. The gap is about 9% and has nothing to do with the array level." },
  ],
};
