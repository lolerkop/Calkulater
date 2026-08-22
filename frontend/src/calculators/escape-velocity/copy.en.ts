import type { CalculatorCopy } from '../../lib/platform/types';

export const escapeVelocityCopyEn: CalculatorCopy = {
  name: "Escape velocity calculator",
  slug: "escape-velocity",
  shortDescription: "The speed needed to leave a planet, from its mass and radius.",
  longDescription:
    "Escape velocity is the speed at which a thrown object never comes back. It depends only on the mass and radius of the attracting body and not at all on the mass of the projectile: a stone and a ship leave Earth at the same speed. Alongside it comes orbital velocity, the speed for a circular orbit skimming the surface, which is smaller by exactly the square root of two. Mass is entered in units of 10²⁴ kg and radius in kilometres, so the numbers stay ordinary decimals and survive a shared link.",
  seoTitle: "Escape velocity calculator — from mass and radius",
  seoDescription: "Calculate escape and orbital velocity for any celestial body from its mass and radius, with the surface gravity.",
  h1: "Escape velocity calculator",
  keywords: ["escape velocity calculator", "orbital velocity", "planet gravity", "escape speed"],
  howToUse: [
    "Mass goes in units of 10²⁴ kilograms: Earth is 5.972, the Moon 0.07346, Mars 0.64171.",
    "Radius is the mean radius in kilometres: Earth 6371, Moon 1737, Mars 3390.",
    "Orbital velocity is smaller than escape velocity by exactly √2 — you can see it in the rows.",
    "Surface gravity is a sanity check: for Earth it comes out near 9.82.",
  ],
  howItWorks: "Escape = √(2GM/r), orbital = √(GM/r), with G = 6.6743·10⁻¹¹.",
  example: "For Earth the escape velocity is 11,186 m/s — that is 40,270 km/h.",
  faq: [
    { q: "Does escape speed depend on the rocket's mass?", a: "No. Only the mass of the attracting body enters the formula. A stone and a ship leave Earth at the same speed; what differs is how much fuel it takes to reach it." },
    { q: "Why is mass entered in units of 10²⁴ kg?", a: "Earth's mass in kilograms is 5.972·10²⁴, and the browser writes such numbers in exponent form, which the input field does not accept. In units of 10²⁴ the value stays an ordinary decimal and survives a shared link and a form reset." },
    { q: "How does orbital velocity differ from escape velocity?", a: "Orbital velocity puts you in a circular orbit skimming the surface; escape velocity lets you leave altogether. Escape is larger by exactly the square root of two, for any body." },
    { q: "Is the atmosphere accounted for?", a: "No. This is pure gravity. A real rocket needs margin for air resistance and for the fact that it does not accelerate instantly at the surface." },
  ],
};
