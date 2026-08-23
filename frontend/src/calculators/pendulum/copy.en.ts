import type { CalculatorCopy } from '../../lib/platform/types';

export const pendulumCopyEn: CalculatorCopy = {
  name: "Pendulum period calculator",
  slug: "pendulum-period",
  shortDescription: "Period of a simple pendulum from its length.",
  longDescription:
    "There is no mass in the formula \u2014 the first thing that surprises people: a heavy and a light bob on the same string swing with the same period. There is g, though, which is why the pendulum served as the first precise instrument for measuring it. The period grows as the square root of length: doubling it takes four times the string \u2014 hence a seconds pendulum is about 25 centimetres, not the metre people expect.",
  seoTitle: "Pendulum period calculator \u2014 from string length",
  seoDescription: "Calculate the period and frequency of a simple pendulum from its length and the acceleration of gravity.",
  h1: "Pendulum period calculator",
  keywords: ["pendulum period", "simple pendulum", "oscillation frequency", "seconds pendulum"],
  howToUse: [
    "Length runs to the centre of mass of the bob, not to the point of suspension.",
    "Gravity is adjustable: 1.62 on the Moon, 3.72 m/s\u00b2 on Mars.",
    "The formula is for small swings: beyond roughly 15\u00b0 the period grows noticeably.",
    "The mass of the bob does not affect the period \u2014 it is not in the formula.",
  ],
  howItWorks: "T = 2\u03c0\u221a(L/g); frequency = 1/T.",
  example: "A one-metre string swings with a period of 2.006 s \u2014 nearly two seconds, not one.",
  faq: [
    { q: "Why does mass not affect the period?", a: "A heavier bob is pulled harder but is exactly that much harder to accelerate. Mass enters both the force and the inertia, so it cancels \u2014 just as it does in free fall." },
    { q: "How long is a seconds pendulum?", a: "About 24.8 centimetres at Earth gravity. A one-metre string takes nearly two seconds: the period follows the square root of length, so a quarter of the length is twice as fast." },
    { q: "Why only small swings?", a: "The formula replaces the sine of the angle with the angle itself, an approximation valid only near zero. At a 30\u00b0 swing the period is already about 1.7 % longer, at 90\u00b0 some 18 %." },
    { q: "How was g measured with a pendulum?", a: "By measuring length and period and solving the formula. The method reached a fraction of a per cent and revealed that gravity is weaker at the equator than at the poles." },
  ],
};
