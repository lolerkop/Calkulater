import type { CalculatorCopy } from '../../lib/platform/types';

export const newtonForceCopyEn: CalculatorCopy = {
  name: "Newton's second law calculator",
  slug: "newtons-second-law-calculator",
  shortDescription: "Force, mass or acceleration from F = m · a.",
  longDescription:
    "Solves Newton’s second law in any direction: mass and acceleration give force, force and acceleration give mass, force and mass give acceleration. The divisor of the chosen mode is checked first — with zero acceleration the mass is undetermined, and the division would return infinity dressed as an answer. Weight appears here as a special case: it is simply the force gravity exerts on a body.",
  seoTitle: "Newton's second law calculator — F = ma",
  seoDescription: "Calculate force, mass or acceleration with Newton's second law F = m · a in SI units.",
  h1: "Newton's second law calculator",
  keywords: ["newton's second law calculator", "force calculator", "f = ma calculator", "mass from force"],
  howToUse: ["Choose which quantity you need.", "Enter the other two in SI units.", "Read the result and the related quantities."],
  howItWorks: "F = m · a, so m = F ÷ a and a = F ÷ m. Weight at the Earth’s surface is m · 9.80665.",
  example: "A mass of 10 kg accelerating at 2 m/s² needs a force of 20 N.",
  faq: [
    { q: "How does force differ from weight?", a: "Weight is the force of gravity on a body: m · g. Mass is measured in kilograms and does not change; weight is measured in newtons and depends on the pull." },
    { q: "Why is zero acceleration rejected when solving for mass?", a: "Mass is force divided by acceleration. With zero acceleration the division has no value, so nothing can be concluded about the mass." },
    { q: "Can acceleration be zero when solving for force?", a: "Yes. A body moving uniformly needs no net force — that is a real state, not an input error." },
    { q: "Is friction taken into account?", a: "No. F = m · a relates mass to the NET force; to allow for friction, subtract it from the applied force yourself." },
  ],
};
