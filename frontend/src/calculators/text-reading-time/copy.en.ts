import type { CalculatorCopy } from '../../lib/platform/types';

export const textReadingTimeCopyEn: CalculatorCopy = {
  name: "Reading time calculator",
  slug: "reading-time-calculator",
  shortDescription: "How many minutes a text takes to read silently, and how long the same text takes aloud.",
  longDescription:
    "Estimates duration from the size of a text: paste the text itself, or enter a word count if the text is not to hand. Speech is markedly slower than silent reading — around 130 words a minute against 200 — which is why a talk built on a text that reads in five minutes runs to almost eight. Both speeds are editable assumptions rather than standards: they differ by person and by text, and presenting an average as fact would be wrong.",
  seoTitle: "Reading time calculator for text and speeches",
  seoDescription: "Find out how long a text takes to read silently and how long it takes read aloud, from a word count or from the text itself.",
  h1: "Reading time calculator",
  keywords: ["reading time calculator", "speech time calculator", "how long to read", "words to minutes"],
  howToUse: [
    "Choose what you have: a word count or the text itself.",
    "Paste the text or enter the number of words.",
    "Adjust the reading speed to your own if needed.",
    "Change the speaking speed if you are preparing a talk and know your pace.",
  ],
  howItWorks:
    "The word count is divided by the reading speed and multiplied by sixty to give seconds, rounded to a whole. Time aloud follows the same path at the speaking speed, which is usually about a third lower.",
  example: "A 1200-word text reads silently in exactly 6 minutes and runs to 9 minutes 14 seconds aloud.",
  faq: [
    { q: "How is this different from a reading speed calculator?", a: "That one measures your speed from what you read in a known time. This works the other way: the speed is known and the duration is estimated." },
    { q: "What reading speed should I use?", a: "An adult reading in their own language usually manages 180–250 words a minute; dense technical text is markedly slower. The value is editable because it is an estimate, not a standard." },
    { q: "Why is speech slower than reading?", a: "Speaking needs breath and pauses. An average speaking pace is around 130 words a minute, and a talk with pauses is slower still." },
    { q: "How are words counted in pasted text?", a: "A word is a run of letters or digits; a hyphen or apostrophe inside a word does not split it, and punctuation is not counted." },
    { q: "Are images and formulas included?", a: "No, only the text is counted. Formulas and tables usually slow reading down more than ordinary prose." },
  ],
};
