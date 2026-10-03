import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const dataRateCopyEn: CalculatorCopy = {
  "name": "Data rate converter",
  "slug": "data-rate-converter",
  "shortDescription": "Convert data rate between Mbit/s and MB/s — bits are not bytes.",
  "longDescription": "Converts data rate between bits and bytes per second with decimal prefixes, and to MiB/s with a binary prefix. The Mbit/s-to-MB/s ratio is eight; this alone does not determine actual download speed.",
  "seoTitle": "Data rate converter — Mbit/s to MB/s",
  "seoDescription": "Convert data rate between bits and bytes per second, megabits, megabytes and mebibytes.",
  "h1": "Data rate converter",
  "keywords": [
    "mbit to mb",
    "internet speed",
    "data rate converter"
  ],
  "howToUse": [
    "Enter the value.",
    "Pick the source unit.",
    "Pick the target unit."
  ],
  "howItWorks": "Every unit converts through the bit per second; a byte counts as eight bits.",
  "example": "100 Mbit/s = 12.5 MB/s as a unit conversion. Actual file transfer depends on the protocol, server and connection.",
  "faq": [
    {
      "q": "Why does 100 Mbit/s give only 12.5 MB/s?",
      "a": "A byte holds eight bits. Providers quote bits and file managers show bytes, so the ratio is exactly eight."
    },
    {
      "q": "How does MiB/s differ from MB/s?",
      "a": "A mebibyte is 1024² bytes, a megabyte is 10⁶ bytes — about 4.9% larger."
    },
    {
      "q": "Is protocol overhead included?",
      "a": "No: this tool only converts units. Useful throughput can differ because of overhead and connection conditions."
    },
    {
      "q": "How do I get a volume from a rate?",
      "a": "Multiply by time. There is a separate digital storage converter for volumes."
    }
  ],
  "disclaimer": "The result is a rounded unit conversion. Check the entered value and selected units."
};
