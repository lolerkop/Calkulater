import type { CalculatorCopy } from '../../lib/platform/types';

export const rcFilterCopyEn: CalculatorCopy = {
  name: "RC circuit calculator",
  slug: "rc-filter-cutoff",
  shortDescription: "Cutoff frequency and time constant of a resistor with a capacitor.",
  longDescription:
    "Works out the cutoff frequency and the time constant of a first-order RC stage. The same circuit is both a filter and a delay: it is read as the frequency where the signal drops by 3 dB, and as the time the capacitor takes to charge to 63% of the supply. Both rest on the single product R·C, so they are calculated together and move together: 10 kΩ with 100 nF and 1 kΩ with 1000 nF give exactly the same answer. The roll-off past cutoff is 20 dB per decade; two-pole and active filters, with their Q factor, are outside what this formula describes.",
  seoTitle: "RC circuit calculator — cutoff frequency and time constant",
  seoDescription: "Calculate an RC filter's cutoff frequency and time constant from resistance and capacitance, with the capacitor's settling time.",
  h1: "RC circuit calculator",
  keywords: ["rc filter calculator", "cutoff frequency calculator", "rc time constant", "low pass filter calculator"],
  howToUse: [
    "Enter the resistance in ohms: 10 kΩ is 10000.",
    "Enter the capacitance in nanofarads as marked: 0.1 µF is 100 nF.",
    "The cutoff frequency is where the signal has dropped by 3 dB.",
    "The time constant matters when the circuit is used as a delay rather than a filter.",
  ],
  howItWorks: "τ = R · C, cutoff = 1 / (2π · τ). Capacitance is converted from nanofarads to farads.",
  example: "10 kΩ with 100 nF gives a cutoff at 159.15 Hz and a 1 ms time constant.",
  faq: [
    { q: "Why do different R and C pairs give the same frequency?", a: "Because only the product R·C enters the formula. 10 kΩ with 100 nF and 1 kΩ with 1000 nF are the same product, hence the same cutoff frequency and the same time constant." },
    { q: "How does cutoff differ from the edge of the passband?", a: "Cutoff is not a wall. The signal is already down 3 dB there — half the power — and falls a further 20 dB per decade beyond it. The passband ends gradually." },
    { q: "What does the settling time show?", a: "In one time constant the capacitor reaches 63% of the voltage; in five it reaches about 99%. Five τ is the figure taken as practical settling time." },
    { q: "Does this work for a second-order filter?", a: "No. The formula describes a single RC stage rolling off at 20 dB per decade. Two-pole and active filters introduce a Q factor that a plain RC circuit does not have at all." },
  ],
};
