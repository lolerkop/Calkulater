import type { CalculatorCopy } from '../../lib/platform/types';

export const wheelOffsetCopyEn: CalculatorCopy = {
  name: "Wheel offset calculator",
  slug: "wheel-offset",
  shortDescription: "Offset ET, backspacing and how far the wheel moves.",
  longDescription:
    "Offset ET is the distance from the mounting face to the centre of the rim, and it can be negative: on deep-dish wheels the face sits inboard. The practical question is nearly always the same \u2014 how far will the wheel move in or out with a different offset. The sign is counter-intuitive: a SMALLER offset pushes the wheel OUTWARDS \u2014 so the direction is spelled out in words, not just as a number.",
  seoTitle: "Wheel offset calculator \u2014 ET, backspacing and wheel shift",
  seoDescription: "Calculate backspacing from rim width and ET, and see how far the wheel moves when the offset changes.",
  h1: "Wheel offset calculator",
  keywords: ["wheel offset", "et offset", "backspacing", "wheel shift"],
  howToUse: [
    "Rim width in inches from the marking \u2014 7J means 7 inches.",
    "The ET figure is stamped on the wheel and can be negative.",
    "Backspacing accounts for the flanges: the full rim is an inch wider than the marked width.",
    "Moving the wheel outwards loads the hub bearing and may foul the arch.",
  ],
  howItWorks: "Backspacing = width/2 + ET + 12.7 mm; shift = old ET \u2212 new ET.",
  example: "A 7-inch rim at ET 35 gives 136.6 mm backspacing; swapping to ET 45 pulls the wheel 10 mm inwards.",
  faq: [
    { q: "Why does a smaller offset push the wheel out?", a: "Offset is measured from the mounting face, the surface that clamps to the hub. That face stays put, so reducing the offset moves the rim centre further from the hub \u2014 outwards." },
    { q: "How much can the offset change?", a: "Manufacturers usually allow a few millimetres. A noticeable outward move increases the scrub radius, loads the bearing and can foul the arch over suspension travel." },
    { q: "How does ET differ from backspacing?", a: "ET is measured from the rim centre, backspacing from the inner edge. The first is stamped on European wheels, the second appears in American tables; half the rim width connects them." },
    { q: "Do spacers help?", a: "A spacer lowers the effective offset and pushes the wheel out, so it solves only one of the two problems. It also shortens the stud engagement and calls for longer bolts \u2014 without them the fixing becomes unsafe." },
  ],
};
