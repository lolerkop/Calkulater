import type { CalculatorCopy } from '../../lib/platform/types';

export const inclinedPlaneCopyEn: CalculatorCopy = {
  name: "Inclined plane calculator",
  slug: "inclined-plane",
  shortDescription: "Force along the slope, friction and acceleration.",
  longDescription:
    "Weight on a slope splits in two: one part pulls down along the surface, the other presses into it. The pressing part is what creates friction, so steepness works against the load twice over — it grows the driving component while weakening the holding one. The net force can come out negative: that is not an error but a margin of stability — friction is winning, and its magnitude shows how far the slope is from letting go.",
  seoTitle: "Inclined plane calculator — slope force and friction",
  seoDescription: "Calculate the force along the slope, normal force, friction and acceleration of a body on an inclined plane.",
  h1: "Inclined plane calculator",
  keywords: ["inclined plane", "slope force", "friction coefficient", "ramp angle"],
  howToUse: [
    "The friction coefficient depends on the pair of materials: steel on steel about 0.15, rubber on asphalt about 0.7, ice about 0.03.",
    "Zero degrees is a flat surface, ninety a vertical wall with no contact pressure.",
    "A negative net force means the body stays put: friction outweighs the driving force.",
    "The body is treated as already moving; static friction can be slightly higher than sliding friction.",
  ],
  howItWorks: "Along the slope m · g · sin α, across it m · g · cos α, friction μ · N, acceleration their difference over the mass.",
  example: "A 50 kg crate on a 30° slope with friction 0.2 slides at 3.205 m/s².",
  faq: [
    { q: "Why does mass not affect the acceleration?", a: "Both the driving force and the friction are proportional to mass, so dividing by mass cancels it. A heavy and a light crate slide down the same slope alike — given the same friction coefficient." },
    { q: "At what angle does it start to slide?", a: "When the tangent of the angle exceeds the friction coefficient. At μ = 0.2 that is about 11.3°, at μ = 0.7 about 35°. This is exactly how friction coefficients are measured: tilt until it slips." },
    { q: "What does a negative acceleration mean?", a: "That the body will not move on its own: the holding force beats the driving one. The number shows what acceleration it would take to break the load loose against friction." },
    { q: "Why is friction not zero on the flat?", a: "There the contact pressure is at its maximum and equals the full weight, so friction is largest too. Meanwhile there is no driving component — what remains is pure resistance to being pushed." },
  ],
};
