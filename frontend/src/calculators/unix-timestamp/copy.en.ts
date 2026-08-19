import type { CalculatorCopy } from '../../lib/platform/types';

export const unixTimestampCopyEn: CalculatorCopy = {
  name: "Unix timestamp converter",
  slug: "unix-timestamp-converter",
  shortDescription: "Convert between Unix time and a UTC date, both directions.",
  longDescription:
    "Counts seconds from the first of January 1970 and back again, always in UTC. The browser timezone deliberately does not enter: the same number has to give the same date for everyone, otherwise a shared link would show something different to each reader. Negative values are ordinary dates before the epoch.",
  seoTitle: "Unix timestamp converter — epoch seconds to UTC date",
  seoDescription: "Convert a Unix timestamp to a UTC date and back, with milliseconds and the day of the week, independent of your timezone.",
  h1: "Unix timestamp converter",
  keywords: ["unix timestamp converter", "epoch time", "timestamp to date"],
  howToUse: ["Choose which direction you need.", "Enter the timestamp, or the date and time in UTC.", "Read the converted value and the day of the week."],
  howItWorks: "A timestamp is the number of seconds since 1970-01-01T00:00:00Z; converting back adds those seconds to the epoch.",
  example: "1 700 000 000 corresponds to 2023-11-14 22:13:20 UTC, a Tuesday.",
  faq: [
    { q: "Why UTC only?", a: "So the same timestamp always shows the same date. Applying the reader timezone would make a shared result mean different things on different machines." },
    { q: "Are leap seconds handled?", a: "No, and neither is Unix time itself: every day is treated as exactly 86 400 seconds, which is what the standard specifies." },
    { q: "Can a timestamp be negative?", a: "Yes. Negative values are dates before 1970, and they convert exactly the same way." },
    { q: "Seconds or milliseconds?", a: "The input is in seconds, the usual Unix convention. Systems that count in milliseconds need the value multiplied by a thousand." },
  ],
};
