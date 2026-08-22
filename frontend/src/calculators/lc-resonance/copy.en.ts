import type { CalculatorCopy } from '../../lib/platform/types';

export const lcResonanceCopyEn: CalculatorCopy = {
  name: "LC resonant frequency calculator",
  slug: "lc-resonant-frequency",
  shortDescription: "Tank circuit frequency from inductance and capacitance.",
  longDescription:
    "Only the product of inductance and capacitance enters the formula, so 100 µH with 100 nF and 10 µH with 1000 nF ring at the same frequency. What tells such pairs apart is the characteristic impedance √(L/C): it sets the current that will flow in the loop and the voltage that will build across it — hence its own row. The units are the ones printed on the parts: microhenries and nanofarads, not henries and farads.",
  seoTitle: "LC resonant frequency calculator",
  seoDescription: "Calculate the resonant frequency of a tank circuit from inductance in microhenries and capacitance in nanofarads.",
  h1: "LC resonant frequency calculator",
  keywords: ["resonant frequency", "lc circuit", "tank circuit", "thomson formula"],
  howToUse: [
    "Inductance in microhenries, capacitance in nanofarads — as the parts are marked.",
    "Convert picofarads to nanofarads by dividing by 1000: 470 pF is 0.47 nF.",
    "Only the L·C product moves the frequency: quadruple one and quarter the other and it stays put.",
    "The characteristic impedance shows what current a given voltage across the circuit will drive.",
  ],
  howItWorks: "f = 1 / (2π√(L · C)) — Thomson's formula; characteristic impedance √(L/C).",
  example: "100 µH with 100 nF gives 50.329 kHz at a characteristic impedance of 31.623 Ω.",
  faq: [
    { q: "Why do different pairs give one frequency?", a: "Because the formula takes the L·C product, not the values themselves. The pairs 100 µH + 100 nF and 10 µH + 1000 nF share a product, so the frequency matches — what differs is the characteristic impedance." },
    { q: "What is the characteristic impedance for?", a: "It ties current to voltage in the circuit. A low impedance means large currents at small voltages, which suits power output stages; a high one is the reverse, which suits receiving circuits." },
    { q: "Is wire resistance accounted for?", a: "No, this is an ideal circuit. Real losses lower the Q factor and shift the frequency slightly down, but for tuning work that is normally neglected." },
    { q: "Does a series circuit differ from a parallel one?", a: "Their resonant frequency is the same. The behaviour differs: at resonance a series circuit shows minimum impedance, a parallel one maximum." },
  ],
};
