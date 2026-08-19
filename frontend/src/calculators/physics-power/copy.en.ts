import type { CalculatorCopy } from '../../lib/platform/types';

export const physicsPowerCopyEn: CalculatorCopy = {
  name: "Mechanical power calculator",
  slug: "mechanical-power-calculator",
  shortDescription: "Power, work or time from P = W ÷ t.",
  longDescription:
    "Ties work to time: power says how quickly work is done, not how much of it. The same work can take a second or an hour — the work is identical, the power differs by a factor of 3600. This is the mechanical sense: the work of a force, not electrical power, which has Ohm’s law and a page of its own.",
  seoTitle: "Mechanical power calculator — P = W ÷ t",
  seoDescription: "Calculate mechanical power, work or time from P = W ÷ t in SI units.",
  h1: "Mechanical power calculator",
  keywords: ["mechanical power calculator", "power from work and time", "p = w/t calculator"],
  howToUse: ["Choose the quantity you need.", "Enter the other two in SI units.", "Read the result — the power is also shown in horsepower."],
  howItWorks: "P = W ÷ t, so t = W ÷ P and W = P · t. One metric horsepower equals 735.49875 W.",
  example: "Work of 1000 J done in 10 s corresponds to a power of 100 W.",
  faq: [
    { q: "How does power differ from work?", a: "Work is how much was done; power is how quickly. The same work can be done slowly at low power or fast at high power." },
    { q: "Is this the same power as in electricity?", a: "The same quantity and the same unit — the watt. Here it comes from mechanical work; for a circuit, power is computed from voltage and current on a separate page." },
    { q: "Why is zero time rejected?", a: "Power is work divided by time. In zero time no work is done, and the division has no value." },
    { q: "Why is the power also shown in horsepower?", a: "For intuition: watts are how appliances are rated, while engine output is usually quoted in horsepower. The metric one is used — 735.49875 W, not the mechanical 745.7." },
  ],
};
