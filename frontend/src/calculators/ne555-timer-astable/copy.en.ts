import type { CalculatorCopy } from '../../lib/platform/types';

export const timer555CopyEn: CalculatorCopy = {
  name: "NE555 astable timer calculator",
  slug: "ne555-astable-timer",
  shortDescription: "Frequency, period and duty cycle of an NE555 multivibrator from two resistors and a capacitor.",
  longDescription:
    "The NE555 in astable mode is the most durable chip in hobby electronics: blinkers, oscillators, PWM. The capacitor charges through both resistors but discharges through the second one alone, so the high time is always longer than the low time and the duty cycle of the classic circuit never drops below fifty per cent. That is a property of the circuit rather than a limit of the calculation, and knowing it matters more than the frequency itself.",
  seoTitle: "NE555 calculator — frequency, period and duty cycle",
  seoDescription: "Calculate the frequency, period, high and low times and duty cycle of an NE555 astable multivibrator.",
  h1: "NE555 astable timer calculator",
  keywords: ["NE555", "astable multivibrator", "duty cycle", "pulse generator"],
  howToUse: [
    "R1 sits between the supply and pin 7, R2 between pins 7 and 6, and the capacitor runs from pin 6 to ground.",
    "A duty cycle below fifty per cent is impossible in the classic circuit: it needs a discharge diode across R2.",
    "To lower the frequency, increase the capacitor: resistors above a megohm make the circuit sensitive to leakage.",
    "The real frequency will drift from the calculated one by the component tolerance — electrolytics reach twenty per cent.",
  ],
  howItWorks: "High time ln2·(R1+R2)·C, low time ln2·R2·C; frequency is the inverse of their sum, duty cycle the high share.",
  example: "R1 10 kΩ, R2 47 kΩ and 100 nF give 136 Hz at about 55 per cent duty cycle.",
  faq: [
    { q: "Why does the duty cycle never fall below fifty per cent?", a: "Because the capacitor charges through R1 and R2 but discharges through R2 alone. The charging time is always longer, and exactly fifty per cent is only approached in the limit where R1 is far smaller than R2." },
    { q: "How do I get a duty cycle below half?", a: "Put a diode across R2 with its cathode toward pin 7: charging then bypasses R2 through R1 only. The circuit is no longer the classic one and this formula no longer describes it." },
    { q: "Why does ln2 appear in the formula?", a: "The NE555 thresholds are one third and two thirds of the supply. The exponential charge takes exactly RC·ln2 to travel between them, and the supply voltage cancels out: the frequency does not depend on it." },
    { q: "Why does the real frequency differ?", a: "Component tolerance. Resistors are usually within 1–5 per cent, but electrolytic capacitors reach 20, and the capacitor is what usually sets the error." },
  ],
};
