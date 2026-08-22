import type { CalculatorCopy } from '../../lib/platform/types';

export const resistorColorCopyEn: CalculatorCopy = {
  name: "Resistor colour code calculator",
  slug: "resistor-color-code",
  shortDescription: "Resistor value from its four colour bands, with the tolerance range.",
  longDescription:
    "Reads a resistor value off the body: the first two bands are digits, the third is the multiplier, the fourth is the tolerance. Beyond the value itself the page shows the range a real resistor has to fall into — the marking promises a band, not an exact number, and at ±10% a measured resistance one tenth away from the nominal is normal rather than faulty. Silver and gold multiplier bands give fractions of an ohm; those parts usually work as current-sense shunts.",
  seoTitle: "Resistor colour code calculator — value from the bands",
  seoDescription: "Decode a resistor from its colour bands: two digits, a multiplier and a tolerance. Shows the limits of the tolerance range in ohms.",
  h1: "Resistor colour code calculator",
  keywords: ["resistor colour code calculator", "resistor color bands", "4 band resistor calculator", "resistor value from colours"],
  howToUse: [
    "Turn the resistor so the lone tolerance band is on the right.",
    "Pick the colours of the first two bands — those are the digits.",
    "Pick the colour of the third band — the multiplier.",
    "Pick the colour of the fourth band — the tolerance.",
  ],
  howItWorks: "Value = (first digit × 10 + second digit) × 10 to the power of the multiplier. The tolerance limits are the value multiplied by 1 ± tolerance ÷ 100.",
  example: "Yellow, violet, red and gold give 4.7 kOhm ±5%, that is from 4.465 to 4.935 kOhm.",
  faq: [
    { q: "Which end do I read from?", a: "From the side where the bands sit together without a gap. The tolerance band stands slightly apart and is almost always gold or silver — keep it on the right." },
    { q: "Why does the measured resistance differ from the nominal?", a: "Because the marking promises a range, not an exact number. At ±5% a 4.7 kOhm resistor legitimately measures anywhere from 4.465 to 4.935 kOhm." },
    { q: "What do silver and gold multiplier bands mean?", a: "Multipliers of 0.01 and 0.1 respectively. Such resistors are fractions of an ohm and normally serve as current-sense shunts." },
    { q: "What about five bands?", a: "A five-band resistor has three digits instead of two, and the multiplier and tolerance shift one position along. This page decodes the four-band marking, which is the common one." },
  ],
};
