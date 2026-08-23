import type { CalculatorCopy } from '../../lib/platform/types';

export const bernoulliCopyEn: CalculatorCopy = {
  name: "Bernoulli equation calculator",
  slug: "bernoulli-equation",
  shortDescription: "Pressure at the second section of a flow from speeds and heights, with the total head.",
  longDescription:
    "Bernoulli's equation states something simple: the total head of a flow is conserved, and a fluid can only be accelerated at the expense of pressure or height. From that follows a conclusion many find surprising — in a constriction the pressure falls rather than rises. The carburettor, the Venturi flow meter and the lift of a wing all rest on it. The calculation is ideal: it ignores viscosity and friction losses, and for a long pipeline those must be added separately.",
  seoTitle: "Bernoulli equation calculator — pressure in a flow",
  seoDescription: "Compute the pressure at the second section of a flow from Bernoulli's equation: speeds, heights, density and total head.",
  h1: "Bernoulli equation calculator",
  keywords: ["Bernoulli equation", "total head", "dynamic head", "flow pressure"],
  howToUse: [
    "Heights are measured from any common datum: only their difference matters, so either section may be called zero.",
    "Water is 1000 kg/m³, air 1.225, petrol about 750.",
    "The two speeds are tied by continuity: halving the area doubles the speed.",
    "Viscosity is not included: for a long pipe the friction losses must be added on top.",
  ],
  howItWorks: "p₂ = p₁ + ½ρ(v₁² − v₂²) + ρg(h₁ − h₂); the total head sums the static, dynamic and elevation terms.",
  example: "Accelerating water from 2 to 6 m/s at 300 kPa drops the pressure to 284 kPa.",
  faq: [
    { q: "Why does pressure drop in a constriction?", a: "Because the flow is faster there while the total head is conserved: the extra dynamic term can only come out of the static pressure. It contradicts the everyday intuition about squeezing, but any manometer on a Venturi tube confirms it." },
    { q: "Is friction included?", a: "No. Bernoulli's equation is ideal: in a real pipe part of the head goes into friction and local resistances, and over long runs that loss dominates. It is computed separately." },
    { q: "What does a negative pressure in the answer mean?", a: "That the flow cannot reach those speeds from the given initial pressure: cavitation would set in first, the fluid boiling as the pressure falls below its vapour pressure. That is why the calculation refuses." },
    { q: "Does the equation work for gases?", a: "At low speeds yes, treating the gas as incompressible — roughly up to a third of the speed of sound. Beyond that compressible flow equations are needed." },
  ],
};
