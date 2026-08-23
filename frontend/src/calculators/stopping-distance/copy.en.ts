import type { CalculatorCopy } from '../../lib/platform/types';

export const stoppingDistanceCopyEn: CalculatorCopy = {
  name: "Stopping distance calculator",
  slug: "stopping-distance",
  shortDescription: "Total stopping distance: reaction plus braking.",
  longDescription:
    "Stopping distance is made of two unequal parts. The reaction distance grows linearly with speed, the braking distance QUADRATICALLY: twice the speed means four times the braking. That is why \"only a little over\" on a motorway costs more than it seems: from 100 to 120 km/h the braking distance grows by nearly half. The gradient is signed \u2014 a descent subtracts from the grip, a climb adds to it.",
  seoTitle: "Stopping distance calculator \u2014 reaction, grip, gradient",
  seoDescription: "Calculate total stopping distance from speed, reaction time, friction coefficient and road gradient.",
  h1: "Stopping distance calculator",
  keywords: ["stopping distance", "braking distance", "friction coefficient", "driver reaction time"],
  howToUse: [
    "Friction coefficient: dry asphalt about 0.7, wet 0.4, snow 0.2, ice 0.1.",
    "Reaction time is about a second for an alert driver, noticeably more when tired or distracted.",
    "Gradient in per cent: a descent is negative, a climb positive.",
    "This is emergency braking in a straight line. Skidding, ABS and uneven surfaces are not modelled.",
  ],
  howItWorks: "Reaction distance = v\u00b7t; braking = v\u00b2/(2g(\u03bc + gradient)); stopping distance is the sum.",
  example: "At 90 km/h on dry asphalt with a one-second reaction the distance is 70.52 m.",
  faq: [
    { q: "Why does braking distance grow quadratically?", a: "Because the brakes dissipate kinetic energy, which goes as the square of speed. Double the speed and there is four times the energy, so at the same grip the distance is four times as long." },
    { q: "How dangerous is speeding?", a: "From 100 to 120 km/h the braking distance grows about 1.44 times. Where the car at 100 has already stopped, at 120 it is still travelling at around 66 km/h \u2014 quite enough for a severe impact." },
    { q: "How does gradient matter?", a: "A descent reduces the effective grip, a climb increases it. On a ten per cent descent at 0.7 grip the braking distance grows by about fifteen per cent; with poor grip a descent can make stopping impossible altogether." },
    { q: "Does ABS shorten the distance?", a: "Not always. ABS preserves steering and stops the wheels locking, but on dry asphalt the distance comes out about the same, and on loose snow or gravel it can even be longer." },
  ],
};
