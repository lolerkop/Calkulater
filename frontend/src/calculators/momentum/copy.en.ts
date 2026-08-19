import type { CalculatorCopy } from '../../lib/platform/types';

export const momentumCopyEn: CalculatorCopy = {
  name: "Momentum calculator",
  slug: "momentum-calculator",
  shortDescription: "Momentum, mass or speed from p = m · v.",
  longDescription:
    "Computes momentum — mass times speed — and solves the formula backwards. Momentum answers a question energy does not: how hard a body is to stop. It is the quantity conserved in collisions. Unlike kinetic energy, speed enters to the first power rather than squared.",
  seoTitle: "Momentum calculator — p = m · v",
  seoDescription: "Calculate the momentum of a body, its mass or its speed from p = m · v in SI units.",
  h1: "Momentum calculator",
  keywords: ["momentum calculator", "linear momentum", "p = mv calculator"],
  howToUse: ["Choose the quantity you need.", "Enter the other two in SI units.", "Read the momentum and the related quantities."],
  howItWorks: "p = m · v, so v = p ÷ m and m = p ÷ v. Kinetic energy is shown alongside as p · v ÷ 2 — it grows faster than momentum does.",
  example: "A 3 kg body moving at 4 m/s has a momentum of 12 kg·m/s.",
  faq: [
    { q: "How does momentum differ from kinetic energy?", a: "Speed enters momentum to the first power and energy to the second. A body moving twice as fast has twice the momentum but four times the energy." },
    { q: "Why does momentum matter in collisions?", a: "Because it is conserved: the total momentum before an impact equals the total after. Energy, by contrast, can partly turn into heat and deformation." },
    { q: "What does zero speed mean?", a: "The momentum is zero: a body at rest has none. That is a valid result, not an error." },
    { q: "Is direction taken into account?", a: "No, the magnitude is computed. Momentum is a vector, and when analysing collisions the signs of the directions are assigned separately." },
  ],
};
