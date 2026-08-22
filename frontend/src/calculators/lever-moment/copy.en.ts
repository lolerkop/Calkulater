import type { CalculatorCopy } from '../../lib/platform/types';

export const leverMomentCopyEn: CalculatorCopy = {
  name: "Lever and mechanical advantage calculator",
  slug: "lever-mechanical-advantage",
  shortDescription: "Lever balance: the force on the second arm and the advantage gained.",
  longDescription:
    "Works out the balance of a lever: what force is needed on the other side of the fulcrum and by how much the lever multiplies it. It differs meaningfully from a torque calculator — that one gives the moment of ONE force through its arm and angle, whereas here two forces on two arms are tied together. The advantage is not free: the long arm travels proportionally further. A lever creates no work, it only redistributes it between force and distance, and expecting otherwise is the commonest misconception about it.",
  seoTitle: "Lever calculator — force on the arm and mechanical advantage",
  seoDescription: "Calculate lever balance: the force on the second arm or the arm length from F₁·d₁ = F₂·d₂, plus the mechanical advantage.",
  h1: "Lever and mechanical advantage calculator",
  keywords: ["lever calculator", "mechanical advantage calculator", "law of the lever", "fulcrum calculator"],
  howToUse: [
    "Choose what you are after: the force on the second arm or its length.",
    "Enter the force and arm on the first side of the fulcrum.",
    "Fill in the known quantity on the second side.",
    "Arms are measured from the fulcrum to the point where the force acts, not to the end of the bar.",
  ],
  howItWorks: "A lever balances when the moments are equal: F₁·d₁ = F₂·d₂. The mechanical advantage is the ratio of the arms.",
  example: "A 100 N force on a 2 m arm is balanced by 400 N on a 0.5 m arm — a fourfold advantage.",
  faq: [
    { q: "How is this different from torque?", a: "Torque is the moment of a single force on its own arm, angle included. Here the balance of two forces on two arms is worked out, along with the ratio between them." },
    { q: "Does a lever create energy?", a: "No. Whatever you gain in force you lose in distance. The work is the same; only its distribution changes." },
    { q: "Where are the arms measured from?", a: "From the fulcrum to the point of application, perpendicular to the line of action. The bar beyond that point plays no part." },
    { q: "What if both forces are on the same side?", a: "Then it is a sum of moments rather than a two-arm balance. This page covers the classic layout with the fulcrum between the forces." },
  ],
};
