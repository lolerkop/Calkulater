import type { CalculatorCopy } from '../../lib/platform/types';

export const workCopyEn: CalculatorCopy = {
  name: "Work calculator",
  slug: "work-physics-calculator",
  shortDescription: "Work done by a force over a distance, including the angle between them.",
  longDescription:
    "Computes the work done by a force: force times displacement times the cosine of the angle between them. The angle is not a formality — a force acting across the motion does no work at all, and at 90° the result honestly falls to zero. The angle is entered in degrees, not radians, and converted internally; feeding degrees straight into a cosine yields a meaningless number, and that is the classic mistake.",
  seoTitle: "Work calculator — W = F · s · cos θ",
  seoDescription: "Calculate the mechanical work done by a force over a displacement, including the angle between them.",
  h1: "Work calculator",
  keywords: ["work calculator", "mechanical work", "work done by a force", "w = fs cos theta"],
  howToUse: ["Choose what you need: the work or the displacement.", "Enter the force and the other known value.", "Give the angle in degrees — zero if the force acts along the motion."],
  howItWorks: "W = F · s · cos θ where θ is the angle between force and displacement; hence s = W ÷ (F · cos θ). The angle is entered in degrees and converted to radians internally.",
  example: "A force of 10 N over 5 m along the motion does 50 J of work; at 60° it does half as much.",
  faq: [
    { q: "Why is the work zero at 90°?", a: "Because a force perpendicular to the displacement neither helps nor hinders the motion. The cosine of a right angle is zero, so the product vanishes." },
    { q: "Do I enter the angle in degrees or radians?", a: "In degrees. The calculation converts to radians internally, because trigonometric functions work in radians — feeding degrees straight into a cosine is the classic slip." },
    { q: "What does an angle of 180° mean?", a: "The force opposes the motion — friction, for example. The cosine is minus one and the work is negative: energy is taken away rather than supplied." },
    { q: "Why can I not find the displacement at a right angle?", a: "At 90° the work is zero whatever the displacement, so the reverse step is ambiguous — any distance would fit." },
  ],
};
