import type { CalculatorCopy } from '../../lib/platform/types';

export const kineticEnergyCopyEn: CalculatorCopy = {
  name: "Kinetic energy calculator",
  slug: "kinetic-energy-calculator",
  shortDescription: "Kinetic energy, speed or mass from E = ½mv².",
  longDescription:
    "Computes the energy of a moving body and solves the formula backwards too: energy and mass give the speed, energy and speed give the mass. Speed enters squared, and that is the thing worth remembering — a body moving twice as fast carries four times the energy. It is why braking distance grows far faster than speed does.",
  seoTitle: "Kinetic energy calculator — E = ½mv²",
  seoDescription: "Calculate kinetic energy, speed or mass from E = ½mv² in SI units.",
  h1: "Kinetic energy calculator",
  keywords: ["kinetic energy calculator", "energy of motion", "speed from kinetic energy"],
  howToUse: ["Choose the quantity you need.", "Enter the other two in SI units.", "Read the result."],
  howItWorks: "E = ½ · m · v², so v = √(2E ÷ m) and m = 2E ÷ v².",
  example: "A 2 kg body moving at 3 m/s carries 9 J of kinetic energy.",
  faq: [
    { q: "Why is speed squared?", a: "Because energy accumulates as the body speeds up, and each additional metre per second costs more than the last. A body moving twice as fast carries four times the energy." },
    { q: "What happens at zero speed?", a: "The energy is zero: a body at rest has no kinetic energy. That is a valid result, not an error." },
    { q: "Why can I not find the mass at zero speed?", a: "Mass is 2E ÷ v². At zero speed the denominator vanishes, so nothing can be concluded about the mass." },
    { q: "Is rotation included?", a: "No. Only the energy of translational motion is computed; rotational energy follows a different formula involving the moment of inertia." },
  ],
};
