import type { CalculatorCopy } from '../../lib/platform/types';

export const resistorNetworkCopyEn: CalculatorCopy = {
  name: "Resistor network calculator",
  slug: "resistor-network-calculator",
  shortDescription: "Total resistance of a circuit in series and in parallel.",
  longDescription:
    "Works out the resistance of a circuit built from several resistors for both ways of connecting them. In series the resistances add; in parallel the reciprocals add. The smallest and largest values are shown next to the total for a reason: a parallel circuit always comes out below its smallest resistor and a series circuit above its largest one, so those two rows let you sanity-check the answer without redoing the arithmetic. A zero-ohm resistor is rejected — in a parallel circuit it would short it out, and the formula would return zero instead of a warning.",
  seoTitle: "Series and parallel resistor calculator",
  seoDescription: "Calculate the total resistance of a resistor network connected in series or in parallel.",
  h1: "Resistor network calculator",
  keywords: ["resistor calculator", "parallel resistance", "series resistance", "total resistance"],
  howToUse: [
    "Enter the resistor values in ohms.",
    "Separate them with spaces, semicolons or line breaks.",
    "Choose how they are connected.",
    "For kilohms and megohms enter 4700 and 1000000.",
  ],
  howItWorks:
    "In series R = R₁ + R₂ + … In parallel 1/R = 1/R₁ + 1/R₂ + … Hence the check: a parallel circuit is always weaker than its smallest value and a series circuit stronger than its largest.",
  example: "Three resistors of 100, 220 and 330 ohms in series come to 650 ohms.",
  faq: [
    { q: "Which units should the values use?", a: "Ohms. Convert kilohms and megohms first: 4.7 kΩ is 4700 and 1 MΩ is 1000000. Mixing units in one list will not work." },
    { q: "Why is a parallel circuit weaker than its smallest resistor?", a: "Because every added resistor is another path for the current. The more paths there are, the easier the current flows, so the total drops below any single one of them." },
    { q: "How do I handle a mixed circuit?", a: "In stages. Collapse the parallel groups first, note the values you get, then add them in series — a network of any complexity comes apart in steps like these." },
    { q: "Why is zero resistance rejected?", a: "A zero-ohm resistor in a parallel circuit is a short, and the formula would honestly return zero. A plausible zero on screen is worse than stopping the calculation." },
    { q: "Do parallel resistors have to be identical?", a: "No, but identical ones have a handy property: n equal resistors in parallel give exactly R/n. Two 470-ohm resistors make 235 ohms." },
  ],
};
