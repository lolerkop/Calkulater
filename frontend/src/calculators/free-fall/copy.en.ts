import type { CalculatorCopy } from '../../lib/platform/types';

export const freeFallCopyEn: CalculatorCopy = {
  name: "Free fall calculator",
  slug: "free-fall",
  shortDescription: "Impact speed and fall time from a height or from a duration.",
  longDescription:
    "Solves a fall from either end: from the height, how long it takes and how fast the body meets the ground; from the time, how far it travels. Gravity is a field because it is 1.62 on the Moon and 3.72 on Mars while the formula stays the same. Air resistance is not included, and that is stated plainly: for a stone from ten metres the difference is small, for a sheet of paper the calculation is simply wrong, and a skydiver reaches terminal velocity and stops accelerating.",
  seoTitle: "Free fall calculator — speed and time",
  seoDescription: "Calculate impact speed and free-fall time from a height or a duration, with gravitational acceleration as a field.",
  h1: "Free fall calculator",
  keywords: ["free fall calculator", "impact speed", "fall time calculator", "falling object speed"],
  howToUse: [
    "Choose what you know: the height or the fall time.",
    "Leave gravity at Earth's 9.80665, or set 1.62 for the Moon and 3.72 for Mars.",
    "Impact speed is the headline answer in both modes: the mode changes what is known, not what is asked.",
    "Remember the air: for light or fluttering objects this overstates the speed.",
  ],
  howItWorks: "h = g·t²/2, hence t = √(2h/g), and the impact speed is v = g·t.",
  example: "A fall from twenty metres takes 2.02 seconds and lands at 19.8 m/s — that is 71 km/h.",
  faq: [
    { q: "Does falling speed depend on mass?", a: "Without air, no: a feather and a stone fall alike, and mass does not appear in the formula. With air the difference is enormous, but that is no longer free fall." },
    { q: "Why does height grow as the square of time?", a: "Because the speed builds up evenly and the distance covered is the area under the speed graph. In two seconds a body falls four times as far as in one." },
    { q: "Can this model a parachute jump?", a: "Only the first seconds. After that air resistance balances the weight, the speed levels off near 55 m/s and stops growing, while the calculation would keep increasing it." },
    { q: "Where does 9.80665 come from?", a: "It is the conventional standard value used for calculations. Real gravity ranges from 9.78 at the equator to 9.83 at the poles and drops slightly with altitude." },
  ],
};
