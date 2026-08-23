import type { CalculatorCopy } from '../../lib/platform/types';

export const terminalVelocityCopyEn: CalculatorCopy = {
  name: "Terminal velocity calculator",
  slug: "terminal-velocity",
  shortDescription: "Terminal velocity in air with the time and distance needed to reach it.",
  longDescription:
    "Free fall accelerates a body indefinitely only in a vacuum: in air the drag grows as the square of the speed and at some point balances the weight. From then on the speed no longer changes, however long the fall continues. That is why a skydiver belly to earth settles near 190 km/h while a head-down position roughly doubles it — the area changes, not gravity. The area and the drag coefficient are entered by the user because they depend on posture and shape.",
  seoTitle: "Terminal velocity calculator — falling speed in air",
  seoDescription: "Calculate terminal velocity from mass, frontal area and drag coefficient, plus the time and distance to reach it.",
  h1: "Terminal velocity calculator",
  keywords: ["terminal velocity", "air resistance", "drag coefficient", "free fall"],
  howToUse: [
    "The area is measured across the flow: a person belly to earth is about 0.7 m², head down about 0.18 m².",
    "Drag coefficient: a sphere about 0.47, a person belly to earth about 1, a parachute about 1.4.",
    "Air density at sea level is 1.225 kg/m³; it is lower at altitude, and terminal velocity is higher there.",
    "The 95 per cent rows answer the \"when already\" question: terminal velocity itself is only approached asymptotically.",
  ],
  howItWorks: "Balancing weight against drag gives v = √(2mg/(ρ·A·Cd)); the time and distance to 95 per cent come from the hyperbolic-tangent solution.",
  example: "An 80 kg person belly to earth falls at about 42.7 m/s, roughly 154 km/h.",
  faq: [
    { q: "Why does a heavy body fall faster than a light one?", a: "In a vacuum it does not. In air the terminal velocity grows as the square root of mass for the same area, so a feather and a stone of equal size differ radically: for the feather drag balances weight almost at once." },
    { q: "Where do I get the drag coefficient?", a: "From a table by shape: a sphere about 0.47, a cube about 1.05, a person belly to earth about 1, a teardrop about 0.04. It also depends on the Reynolds number, so it is always an estimate." },
    { q: "Why is terminal velocity never reached exactly?", a: "Because the closer you get, the smaller the remaining acceleration: the speed approaches the limit as a hyperbolic tangent. The practical answer is in the 95 per cent rows." },
    { q: "Does terminal velocity change with altitude?", a: "Yes, markedly. High up the air is thin, drag is smaller and the same figure falls faster — which is exactly why record stratospheric jumps reach supersonic speeds." },
  ],
};
