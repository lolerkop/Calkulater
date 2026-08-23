import type { CalculatorCopy } from '../../lib/platform/types';

export const relativityDilationCopyEn: CalculatorCopy = {
  name: "Time dilation calculator",
  slug: "time-dilation",
  shortDescription: "Lorentz factor, time dilation and length contraction.",
  longDescription:
    "At everyday speeds the effect is imperceptible: even at orbital velocity the Lorentz factor differs from one in the ninth decimal. It becomes noticeable near the speed of light and grows unevenly \u2014 between 0.99c and 0.999c it triples. That is why the speed is entered as a FRACTION of the speed of light rather than in metres per second: in metres that difference disappears among the digits.",
  seoTitle: "Time dilation calculator \u2014 Lorentz factor",
  seoDescription: "Calculate the Lorentz factor, time dilation and length contraction from a fraction of the speed of light.",
  h1: "Time dilation calculator",
  keywords: ["time dilation", "lorentz factor", "length contraction", "special relativity"],
  howToUse: [
    "Speed is a fraction of light speed: 0.5 is half, 0.99 is ninety-nine per cent.",
    "Proper time is what the moving observer\u2019s clock reads.",
    "Length contraction is shown as a share: 50 % means the body is half as long to a stationary observer.",
    "One is not allowed: no massive body can be accelerated to the speed of light.",
  ],
  howItWorks: "\u03b3 = 1/\u221a(1 \u2212 \u03b2\u00b2); dilated time = proper time \u00d7 \u03b3.",
  example: "At half the speed of light one second on the moving clock stretches to 1.155 s.",
  faq: [
    { q: "Why is nothing visible at everyday speeds?", a: "The factor departs from one by \u03b2\u00b2/2. For an airliner that is 10\u207b\u00b9\u00b2, a nanosecond over years of flight. GPS satellites are the rare case where the correction must be applied: there it accumulates to tens of microseconds a day." },
    { q: "What is proper time?", a: "Time on a clock travelling with the object. It is the \"real\" time for the object itself; a stationary observer sees it dilated \u2014 and vice versa, which is what produces the twin paradox." },
    { q: "Why can the speed of light not be reached?", a: "At one the expression under the root goes to zero and the factor to infinity. Physically that means accelerating a massive body would take infinite energy." },
    { q: "Does length really contract?", a: "Yes, but only along the direction of motion and only from the stationary observer\u2019s point of view. For the moving body nothing changes \u2014 it is the surrounding world that contracts." },
  ],
};
