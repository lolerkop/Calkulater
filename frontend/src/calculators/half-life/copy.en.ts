import type { CalculatorCopy } from '../../lib/platform/types';

export const halfLifeCopyEn: CalculatorCopy = {
  name: "Half-life calculator",
  slug: "half-life",
  shortDescription: "Remaining amount from a half-life, or the time to reach a given remainder.",
  longDescription:
    "A half-life is not a shelf life but the time in which exactly half of whatever is present disappears, and it works on any stretch: two half-lives leave a quarter, three leave an eighth. Zero is never reached, so the question is put the other way round — how long until a particular remainder. Both modes here are two sides of one equation. The mean lifetime is printed separately: it, and not the half-life, is what appears in the activity formula.",
  seoTitle: "Half-life calculator — remaining amount and time",
  seoDescription: "Work out how much substance remains after a given time, or how long to wait for the remainder you need.",
  h1: "Half-life calculator",
  keywords: ["half-life", "radioactive decay", "remaining amount", "mean lifetime"],
  howToUse: [
    "The \"remaining after time\" mode answers how much is left; \"time to remainder\" answers how long to wait.",
    "Any time unit works as long as it is the same one: a half-life in years means the elapsed time is in years.",
    "Carbon-14 has a half-life of 5730 years, iodine-131 about 8 days, caesium-137 about 30 years.",
    "The mean lifetime is 1.44 times the half-life; the activity formula uses the mean lifetime.",
  ],
  howItWorks: "N = N₀·(1/2)^(t/T); the inverse mode gives t = T·ln(N₀/N)/ln2; mean lifetime τ = T/ln2.",
  example: "Two half-lives of carbon-14 take 100 g down to 25 g.",
  faq: [
    { q: "Why does the substance never disappear entirely?", a: "Each period removes half of what is left, and half of something is always more than nothing. In practice one thousandth remains after ten periods and that is neglected, but mathematically zero is never reached." },
    { q: "How does mean lifetime differ from half-life?", a: "The mean lifetime is the half-life divided by the natural logarithm of two, about 1.44 times longer. It is easy to confuse the two, and the activity formula uses the mean lifetime." },
    { q: "Can I use other units?", a: "Yes — any time unit will do as long as the half-life and the elapsed time share it. The field labels say years, but the arithmetic does not depend on that." },
    { q: "Why can the remainder not exceed the initial amount?", a: "Because decay only removes material. Such a pair of numbers means a typo, and a negative time in the answer would be worse than a refusal." },
  ],
};
