import type { CalculatorCopy } from '../../lib/platform/types';

export const leverMomentCopyEn: CalculatorCopy = {
  "name": "Lever and mechanical advantage calculator",
  "slug": "lever-mechanical-advantage",
  "shortDescription": "Lever balance: the force on the second arm and the advantage gained.",
  "seoTitle": "Lever calculator — force on the arm and mechanical advantage",
  "seoDescription": "Calculate lever balance: the force on the second arm or the arm length from F₁·d₁ = F₂·d₂, plus the mechanical advantage.",
  "h1": "Lever and mechanical advantage calculator",
  "keywords": [
    "lever calculator",
    "mechanical advantage calculator",
    "law of the lever",
    "fulcrum calculator"
  ],
  "longDescription": "Solves the balance of two opposing torques on an ideal massless lever. d₁ and d₂ are positive perpendicular distances from the pivot to the force lines, not necessarily distances along the bar. F₁ is the input force and F₂ the output; geometric advantage d₁/d₂ can exceed or fall below one. The pivot supplies force balance, but its reaction is not calculated here.",
  "howToUse": [
    "Choose output force F₂ or arm d₂; the computed field does not require input.",
    "Enter non-negative F₁ in N and a positive perpendicular arm d₁ in m.",
    "For F₂, enter d₂ > 0; for d₂, enter F₂ > 0 and F₁ > 0.",
    "Check that the forces produce opposing torques; lever weight, pivot friction and additional torques are excluded."
  ],
  "howItWorks": "For opposing torques, F₁d₁ = F₂d₂. Thus F₂ = F₁d₁/d₂ or d₂ = F₁d₁/F₂. For non-zero forces, ideal geometric advantage F₂/F₁ = d₁/d₂. When both forces are zero, the displayed ratio describes only geometry, not 0/0.",
  "example": "F₁ = 100 N, d₁ = 2 m and d₂ = 0.5 m give F₂ = 400 N, torque 200 N·m and advantage 4. The reverse mode with 400 N gives d₂ = 0.5 m. F₁ = 0 with positive specified arms gives F₂ = 0; it cannot balance a non-zero F₂ at a positive arm.",
  "faq": [
    {
      "q": "How is lever balance different from one force’s torque?",
      "a": "One torque uses its force and arm. This tool equates the magnitudes of two opposing torques; the pivot must also provide force equilibrium."
    },
    {
      "q": "Does a lever create energy?",
      "a": "An ideal lossless lever trades force for displacement: more output force comes with less output displacement. Real friction and deformation reduce transmitted work."
    },
    {
      "q": "Where and how are the arms measured?",
      "a": "Perpendicularly from the pivot to each force’s line of action. With an angled force the arm is shorter than the application-point distance; do not multiply a known perpendicular arm by sine again."
    },
    {
      "q": "What if both forces act on the same side of the pivot?",
      "a": "They can balance if their directions produce opposing torques, as in a second-class lever. Being on one side does not by itself determine torque sign."
    },
    {
      "q": "Are the lever’s weight and zero-force cases included?",
      "a": "Lever weight is excluded; its torque and any extra forces need a full equilibrium model. With F₁ = 0 and non-zero F₂, the inverse formula yields a zero arm, outside the positive-arm model."
    }
  ],
  "disclaimer": "Ideal massless lever with two opposing torques and positive arms; friction, pivot reaction, strength and additional loads are not calculated."
};
