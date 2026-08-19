import type { CalculatorCopy } from '../../lib/platform/types';

export const potentialEnergyCopyEn: CalculatorCopy = {
  name: "Potential energy calculator",
  slug: "potential-energy-calculator",
  shortDescription: "Potential energy, height or mass from E = mgh.",
  longDescription:
    "Computes the energy of a raised load and solves the formula backwards: energy and mass give the height, energy and height give the mass. The acceleration of free fall is the standard 9.80665 m/s² rather than a rounded 9.8 — at a mass of several tonnes the difference already runs to hundreds of joules. Height is measured from whichever level you treat as zero; potential energy is only defined up to that choice.",
  seoTitle: "Potential energy calculator — E = mgh",
  seoDescription: "Calculate potential energy, height or mass from E = mgh with the standard g = 9.80665 m/s².",
  h1: "Potential energy calculator",
  keywords: ["potential energy calculator", "gravitational potential energy", "mgh calculator"],
  howToUse: ["Choose the quantity you need.", "Enter the other two in SI units.", "Read the result."],
  howItWorks: "E = m · g · h with g = 9.80665 m/s²; hence h = E ÷ (m · g) and m = E ÷ (g · h).",
  example: "A 5 kg load raised by 10 m stores 490.333 J of potential energy.",
  faq: [
    { q: "Which level is the height measured from?", a: "From whichever you treat as zero: the floor, the ground, sea level. Potential energy is defined only up to that choice, so what matters is the difference in height." },
    { q: "Why is g 9.80665 and not 9.8?", a: "That is the standard value, fixed by definition. Rounding shifts the third digit of the result, and at a large mass the gap runs to hundreds of joules." },
    { q: "What happens at zero height?", a: "The energy is zero: a load at the reference level stores nothing. That is a valid result." },
    { q: "Does the formula hold at great heights?", a: "For everyday problems, yes. Hundreds of kilometres up the acceleration of free fall drops noticeably and mgh stops being accurate." },
  ],
};
