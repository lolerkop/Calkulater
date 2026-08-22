import type { CalculatorCopy } from '../../lib/platform/types';

export const dopplerCopyEn: CalculatorCopy = {
  name: "Doppler effect calculator",
  slug: "doppler-effect",
  shortDescription: "The heard frequency when the source or the listener moves.",
  longDescription:
    "An approaching siren sounds higher than a standing one, and the tone drops as it passes — that is the Doppler effect. Here the sign is stated outright rather than hidden in prose: a positive speed means moving towards, a negative one means away. So a single calculation covers both cases and there is no picking between two textbook formulas. Wave speed is its own field: 343 m/s for sound in air, 1500 in water, 5000 in steel.",
  seoTitle: "Doppler effect calculator — frequency shift",
  seoDescription: "Calculate the heard frequency when a sound source or the listener moves, with the shift in hertz and per cent.",
  h1: "Doppler effect calculator",
  keywords: ["doppler effect", "frequency shift", "siren frequency", "speed of sound"],
  howToUse: [
    "Speed towards is positive, away is negative. One field replaces the choice between approaching and receding.",
    "Wave speed depends on the medium: air 343 m/s, water about 1500, steel about 5000.",
    "Observer motion and source motion enter the formula differently, so the fields are separate.",
    "The source speed cannot reach the wave speed — beyond that boundary a shock wave begins.",
  ],
  howItWorks: "f′ = f · (c + v_obs) / (c − v_src).",
  example: "A 440 Hz siren approaching at 20 m/s is heard as 467.24 Hz.",
  faq: [
    { q: "Why does the tone drop exactly at the pass?", a: "While the car approaches, each next wave leaves from closer to you, so they arrive more often. After it passes, the opposite. The sign of the speed flips at the moment the source is level with you." },
    { q: "Why do source and observer get different formulas?", a: "Observer motion changes the rate at which they meet the waves and sits in the numerator. Source motion changes the wavelength in the medium itself and sits in the denominator. At low speeds the difference is invisible; at high speeds it matters." },
    { q: "What happens at the wave speed?", a: "The denominator goes to zero and the formula stops describing anything. Physically the waves cannot get away from the source and pile into a shock front — the calculation rejects such inputs." },
    { q: "Does this work for light?", a: "Only roughly. Light needs the relativistic version, where there is no preferred medium and both speeds enter alike. For sound and other waves in a medium this formula is exact." },
  ],
};
