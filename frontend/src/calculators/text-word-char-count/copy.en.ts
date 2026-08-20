import type { CalculatorCopy } from '../../lib/platform/types';

export const textWordCharCountCopyEn: CalculatorCopy = {
  name: "Word and character counter",
  slug: "word-and-character-counter",
  shortDescription: "Words, characters with and without spaces, sentences and paragraphs in one pass.",
  longDescription:
    "Measures the size of a text and states the rules it counts by, because «word» and «sentence» are conventions rather than properties of a string, and different counters return different numbers. A word here starts with a letter or digit, and a hyphen or apostrophe inside does not split it: «don't» and «up-to-date» each count once. A sentence is a non-empty run between full stops, exclamation and question marks, and text without a closing mark still counts as one sentence. A paragraph is a non-empty line, so a double line break does not double the count.",
  seoTitle: "Word and character counter for text online",
  seoDescription: "Count words, characters with and without spaces, sentences and paragraphs in a text, plus the average word length.",
  h1: "Word and character counter",
  keywords: ["word counter", "character count", "how many characters in text", "count characters with spaces"],
  howToUse: [
    "Paste or type text into the field — line breaks are preserved.",
    "Use the count with spaces when a post or advert has a limit.",
    "Use the count without spaces when work is paid per character.",
    "Average word length and words per sentence help judge readability.",
  ],
  howItWorks:
    "A word is a run of letters or digits; a hyphen or apostrophe inside does not split it. A sentence is a non-empty run between full stops, exclamation and question marks. A paragraph is a non-empty line.",
  example: "The line «The quick brown fox jumps over the lazy dog. All done!» is 11 words and 54 characters.",
  faq: [
    { q: "Do spaces count as characters?", a: "Both figures are shown. Social and advert limits usually count spaces, while per-character copywriting rates usually do not." },
    { q: "How is a hyphenated word counted?", a: "As one: «up-to-date», «someone's» and «don't» are not split. Punctuation is not part of a word." },
    { q: "What if the text has no full stop at the end?", a: "It still counts as one sentence. Otherwise the counter would report zero where a sentence plainly exists." },
    { q: "Why is a blank line between paragraphs not counted?", a: "A paragraph is a non-empty line, so a double line break between paragraphs does not double the count." },
    { q: "Are Cyrillic and Latin counted the same way?", a: "Yes — characters are counted in code points, so a Cyrillic letter weighs exactly as much as a Latin one." },
  ],
};
