import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const digitalCopyEn: CalculatorCopy = {
  "name": "Digital storage converter",
  "slug": "digital-storage-converter",
  "shortDescription": "Convert bytes between decimal and binary units.",
  "longDescription": "Converts data size between decimal units (kB, MB, GB, TB) and binary units (KiB, MiB, GiB, TiB). A gigabyte is 1,000,000,000 bytes; a gibibyte is 1,073,741,824. One terabyte is about 931.32 GiB; software may display either system.",
  "seoTitle": "Digital storage converter — GB, GiB, MB, MiB",
  "seoDescription": "Convert digital storage between bytes, kilobytes, megabytes, gigabytes and their binary counterparts.",
  "h1": "Digital storage converter",
  "keywords": [
    "storage converter",
    "gb to gib",
    "mb to mib"
  ],
  "howToUse": [
    "Enter the size.",
    "Pick the source unit.",
    "Pick the target unit."
  ],
  "howItWorks": "Decimal prefixes step by powers of 1000, binary prefixes by powers of 1024.",
  "example": "1 TB is 931.32 GiB, which is why drive capacities look smaller in the operating system.",
  "faq": [
    {
      "q": "Is a megabyte the same as a mebibyte?",
      "a": "No. A megabyte is 1,000,000 bytes and a mebibyte is 1,048,576. The gap grows with each prefix step."
    },
    {
      "q": "Why does my 1 TB drive show 931 GB?",
      "a": "The manufacturer counts decimal terabytes while the operating system reports binary gibibytes but often labels them GB. The value is the same, the units are not."
    },
    {
      "q": "Which system should I use?",
      "a": "Storage and network vendors use decimal units. Operating systems and memory sizes are usually binary. Match whichever your source uses."
    },
    {
      "q": "Where do bits fit in?",
      "a": "One byte is eight bits. Network speeds are usually quoted in bits per second, storage in bytes."
    }
  ],
  "disclaimer": "The result is a rounded unit conversion. Check the entered value and selected units."
};
