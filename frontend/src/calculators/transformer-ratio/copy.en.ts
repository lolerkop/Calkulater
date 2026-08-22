import type { CalculatorCopy } from '../../lib/platform/types';

export const transformerRatioCopyEn: CalculatorCopy = {
  name: "Transformer turns ratio calculator",
  slug: "transformer-turns-ratio",
  shortDescription: "Turns, voltages and currents of an ideal transformer.",
  longDescription:
    "The word ideal is a condition, not decoration: power is taken as fully conserved, so whatever factor raises the voltage lowers the current by the same factor. A real transformer heats up and its secondary voltage sags under load; by how much depends on the core, the wire and the duty, and the calculation cannot know that. The difference from single-phase power matters: that one ties voltage, current and power factor of one winding, while here two windings are tied through the turns ratio.",
  seoTitle: "Transformer turns ratio calculator — turns, voltage, current",
  seoDescription: "Calculate the secondary voltage and current of an ideal transformer from the turns, or find the winding ratio you need.",
  h1: "Transformer turns ratio calculator",
  keywords: ["transformer turns ratio", "secondary voltage calculator", "ideal transformer", "winding ratio"],
  howToUse: [
    "Choose what you know: the turns of both windings, or the secondary voltage you need.",
    "Primary voltage and current are entered in both modes — they give the power.",
    "A ratio below one means a step-down transformer, above one a step-up.",
    "Round the turns ratio you get upwards: fractional turns do not exist.",
  ],
  howItWorks: "U₂ = U₁ · n₂/n₁, and the current moves the opposite way: I₂ = I₁ · n₁/n₂. Power is taken as conserved.",
  example: "Windings of 500 and 100 turns step 220 V down to 44 V, and a 2 A primary current becomes 10 A.",
  faq: [
    { q: "Why does the current rise when the voltage drops?", a: "Because power is conserved in an ideal transformer: voltage times current is the same on both sides. Drop the voltage fivefold and you make five times the current available." },
    { q: "How far is this from a real transformer?", a: "A real one has copper and iron losses, so the secondary voltage sags under load and the output power is below the input. On small transformers the gap reaches ten percent or so." },
    { q: "Can the turns come out fractional?", a: "No. The calculation gives an exact ratio, but winding happens in whole turns, so the result is rounded — usually upwards, so the voltage does not fall short." },
    { q: "Does this apply to an autotransformer?", a: "The turns ratio works the same way, but an autotransformer does not isolate the windings galvanically, and the safety questions there are entirely different." },
  ],
};
