import type { CalculatorCopy } from '../../lib/platform/types';

export const orbitalPeriodCopyEn: CalculatorCopy = {
  name: "Orbital period calculator",
  slug: "orbital-period",
  shortDescription: "Orbital period from the central body mass and the orbit radius.",
  longDescription:
    "Works out how long one circular orbit takes. The difference from centripetal force matters: that one takes the period from a GIVEN speed, while here the speed is derived from the mass of the central body, so the question is different — how long a lap takes at this altitude, not at this speed. Mass is entered in units of 10²⁴ kg and radius in kilometres, because Earth's mass in kilograms is written in exponent form that the input field does not accept.",
  seoTitle: "Orbital period calculator — satellite and geostationary orbit",
  seoDescription: "Calculate the orbital period and orbital speed of a circular orbit from the central body mass and the orbit radius.",
  h1: "Orbital period calculator",
  keywords: ["orbital period calculator", "orbital speed", "geostationary orbit", "kepler third law"],
  howToUse: [
    "Central body mass in units of 10²⁴ kg: Earth is 5.972, the Sun 1,989,100.",
    "The orbit radius is measured from the CENTRE of the body, not the surface: 400 km above Earth is 6771 km.",
    "Geostationary orbit lands at 42,164 km and gives exactly one sidereal day.",
    "Laps per day is handy to check against a satellite pass schedule.",
  ],
  howItWorks: "T = 2π√(r³/GM) with G = 6.6743·10⁻¹¹, and the orbital speed is v = √(GM/r).",
  example: "A 6771 km orbit around Earth takes 5545 seconds — about an hour and a half.",
  faq: [
    { q: "Why is the radius measured from the centre?", a: "Because gravity depends on the distance to the centre of mass. A satellite 400 km up sits at a radius of 6371 + 400 = 6771 km, and substituting the altitude alone would be wrong by a factor of several." },
    { q: "How does this differ from centripetal force?", a: "That one takes the period from a given speed. Here the speed is derived from the central mass, so knowing what you orbit and at what radius is enough." },
    { q: "Why is geostationary orbit at 42,164 km?", a: "Because at that radius the period matches the sidereal day — 23 hours 56 minutes. Only there does a satellite hang above one point of the equator." },
    { q: "Does the satellite mass matter?", a: "No, and that is not a simplification: it does not appear in the formula at all. A heavy and a light satellite on the same orbit share the same period." },
  ],
};
