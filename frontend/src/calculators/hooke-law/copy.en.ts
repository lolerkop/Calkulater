import type { CalculatorCopy } from '../../lib/platform/types';

export const hookeLawCopyEn: CalculatorCopy = {
  name: "Hooke's law calculator",
  slug: "hookes-law",
  shortDescription: "Spring force, extension or rate, plus the energy stored.",
  longDescription:
    "Solves Hooke's law whichever way you need it: the force a known spring gives at a chosen compression, how far a known force compresses it, and what rate a spring must have for a given pair. Beside the answer sits the stored energy, which the force alone never shows: double the compression and the force doubles while the energy quadruples. The law is linear only up to the elastic limit — beyond it the spring does not return to its original length and the formula stops describing what happens.",
  seoTitle: "Hooke's law calculator — spring force, extension and rate",
  seoDescription: "Calculate the spring force, extension or spring rate from Hooke's law F = k·x, along with the energy stored in the spring.",
  h1: "Hooke's law calculator",
  keywords: ["hooke's law calculator", "spring constant calculator", "spring force calculator", "spring energy calculator"],
  howToUse: [
    "Choose which of the three quantities you are after.",
    "Enter the other two — the one being solved turns read-only.",
    "Give the extension in metres: 5 cm is 0.05.",
    "Compression and extension work the same way; the sign only shows direction.",
  ],
  howItWorks: "The elastic force is proportional to the deformation: F = k·x. The stored energy is half the product of force and deformation, that is k·x² ÷ 2.",
  example: "A 200 N/m spring compressed by 5 cm pushes with 10 N and stores 0.25 J.",
  faq: [
    { q: "How is this different from Newton's second law?", a: "There the force relates to a body's mass and acceleration. Here it relates to the deformation of an elastic element. Only the letter F is shared." },
    { q: "Why does the energy grow faster than the force?", a: "Because force is linear in deformation while energy is quadratic. Twice the compression gives twice the force and four times the energy." },
    { q: "How far does the law hold?", a: "Up to the elastic limit of the material. Beyond it the spring no longer returns to its original length, the relation stops being linear, and this calculation cannot detect that." },
    { q: "What does a negative sign mean?", a: "Direction only. Compression and extension follow one formula, and the magnitude of the force does not depend on the sign." },
  ],
};
