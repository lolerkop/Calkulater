import type { CalculatorCopy } from '../../lib/platform/types';

export const headphonePowerCopyEn: CalculatorCopy = {
  name: "Headphone power calculator",
  slug: "headphone-power",
  shortDescription: "Loudness from sensitivity and applied power.",
  longDescription:
    "Sensitivity in decibels per milliwatt is the loudness at one milliwatt, and from there every doubling of power adds exactly three decibels. Hence the surprising conclusion: to sound twice as loud you need roughly ten times the power. Voltage and current are shown separately because that is what an amplifier actually limits — high-impedance headphones run out of voltage, low-impedance ones run out of current, and power alone does not say which.",
  seoTitle: "Headphone power calculator — loudness and voltage",
  seoDescription: "Calculate headphone sound pressure level from sensitivity, impedance and applied power, with voltage and current.",
  h1: "Headphone power calculator",
  keywords: ["headphone power", "headphone sensitivity", "headphone impedance", "headphone amplifier"],
  howToUse: [
    "Take sensitivity from the datasheet. If it is quoted in dB/V, convert it: dB/mW and dB/V are not interchangeable.",
    "Impedance is from the datasheet too; on dynamic headphones it varies with frequency, so the nominal value is used here.",
    "Compare the resulting voltage and current with your amplifier's limits — those, not power, are usually what run out.",
    "Prolonged listening above 85 dB harms hearing; 110 dB is only safe for seconds.",
  ],
  howItWorks: "SPL = sensitivity + 10·log₁₀(P); U = √(P·R), I = √(P/R).",
  example: "100 dB/mW headphones at 32 Ω on 10 mW give 110 dB, 0.566 V and 17.68 mA.",
  faq: [
    { q: "Why does twice the power give only +3 dB?", a: "The decibel is logarithmic: the gain is 10·log₁₀ of the power ratio, and log₁₀2 ≈ 0.3. Subjectively \"twice as loud\" corresponds to roughly +10 dB, which is ten times the power." },
    { q: "Which matters more, impedance or sensitivity?", a: "Sensitivity sets the loudness; impedance sets what the amplifier must supply to reach it. High-impedance headphones want voltage, low-impedance ones want current; at equal sensitivity they are equally loud on the same power." },
    { q: "Do I need a separate amplifier?", a: "Compare the resulting voltage and current with your source's rating. If comfortable listening needs more than it delivers, the sound will be quiet or distorted — then an amplifier helps, otherwise it does not." },
    { q: "Why are dB/mW and dB/V different?", a: "They are two ways of stating the same property. The conversion depends on impedance: about 15 dB at 32 Ω, about 5 dB at 300 Ω. Substituting one for the other puts you an order of magnitude out on power." },
  ],
};
