import type { CalculatorCopy } from '../../lib/platform/types';

export const passwordEntropyCopyEn: CalculatorCopy = {
  name: "Password entropy calculator",
  slug: "password-entropy",
  shortDescription: "Password entropy in bits and the time to brute-force it.",
  longDescription:
    "A password's strength comes not from looking complicated but from the size of the space it has to be searched in: its length and its alphabet. Adding one character to a twelve-character alphanumeric password multiplies the search by 62; swapping lowercase for mixed case with digits multiplies it by orders of magnitude. The number of combinations passes 10²¹ quickly, so it and the search time are shown in exponent form.",
  seoTitle: "Password entropy calculator — bits and brute-force time",
  seoDescription: "Calculate password entropy in bits, the number of combinations and the average brute-force time from length and character set.",
  h1: "Password entropy calculator",
  keywords: ["password entropy", "password strength", "brute force time", "entropy bits"],
  howToUse: [
    "Count the actual length: spaces and punctuation are characters too.",
    "Pick the character set by what you actually used, not by what the signup form allows.",
    "The guess rate depends on how the password is stored: fast hashes allow tens of billions of guesses per second, slow ones only thousands.",
    "This estimates full brute force. A password built from dictionary words falls far faster than its entropy suggests.",
  ],
  howItWorks: "H = L · log₂(N), combinations N^L, average search is half the space.",
  example: "Twelve characters from letters and digits give 71.45 bits and about 3.2·10²¹ combinations.",
  faq: [
    { q: "How many bits are enough?", a: "Below 60 bits a password falls to brute force on ordinary hardware within a workable time. 70–80 bits covers most needs; above 100 bits brute force stops being the threat at all — leaks and reuse become the real risk." },
    { q: "Why is the average search half?", a: "Brute force walks the space in order, and on average the password sits in the middle. It is the standard estimate: it does not change the order of magnitude but is more honest than counting the full space." },
    { q: "Which matters more, length or alphabet?", a: "Length. It sits in the exponent while the alphabet sits in the base. Twenty lowercase letters beat twelve characters with every symbol available: 94 bits against 78." },
    { q: "Does this cover passphrases?", a: "For a set of random words, use the dictionary size as the alphabet and the number of words as the length. A phrase taken from real text has almost no entropy — it is guessed by quotation, not by character." },
  ],
};
