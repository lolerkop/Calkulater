import type { CalculatorCopy } from '../../lib/platform/types';

export const luggageLinearCopyEn: CalculatorCopy = {
  name: "Luggage linear inches calculator",
  slug: "luggage-linear-inches",
  shortDescription: "The sum of a suitcase's three sides against the airline limit.",
  longDescription:
    "Airlines set the allowance as a sum of sides rather than three separate limits, so a 78×50×30 case clears the same 158 centimetres as a 55×50×53 one, however different they look. The practical lesson follows: trim the longest side, since all three count equally towards the sum. The inches row is there for American carriers, who print the same allowance as 62 linear inches.",
  seoTitle: "Luggage linear inches calculator — sum of three sides",
  seoDescription: "Check whether a suitcase meets the airline allowance: the sum of three sides in centimetres and inches, with the margin left.",
  h1: "Luggage linear inches calculator",
  keywords: ["linear inches luggage", "sum of three sides", "suitcase allowance", "62 linear inches"],
  howToUse: [
    "Measure to the outermost points: wheels, handles and bulging pockets all count.",
    "Typical allowances: 158 cm for checked baggage, 115 cm for cabin bags.",
    "A negative margin means you are over — excess baggage is charged separately.",
    "Box volume has nothing to do with the allowance and is there for comparing cases with each other.",
  ],
  howItWorks: "Sum = length + width + height; margin = limit − sum.",
  example: "A 55×40×23 cm case gives 118 cm against a 158 limit — 40 centimetres to spare.",
  faq: [
    { q: "Why a sum rather than each side?", a: "It suits the carrier: one number bounds both the volume and how the bag stows in the hold. So a narrow, long case can fail while a bulkier but evenly shaped one passes." },
    { q: "Do wheels and the handle count?", a: "Yes, the measurement runs to the outermost points. That is why a case listed as \"55 cm\" often measures 58–60 with a tape, and why people get caught at check-in." },
    { q: "What are 62 linear inches?", a: "The same 158-centimetre allowance written in inches: that is how American carriers print it. The inches row gives a number you can compare directly with their table." },
    { q: "What to do when over?", a: "Repacking is cheapest — trim the longest side, though all three count equally, so losing 5 cm off the length or the height helps the same. Otherwise the bag goes through as excess baggage." },
  ],
};
