import type { CalculatorCopy } from '../../lib/platform/types';

export const accelerationCopyEn: CalculatorCopy = {
  "name": "Acceleration calculator",
  "slug": "acceleration-calculator",
  "shortDescription": "Acceleration from a change in velocity over time, or final velocity from acceleration.",
  "seoTitle": "Acceleration calculator — speed, time and distance",
  "seoDescription": "Calculate acceleration from signed initial and final velocities and time, or final velocity from acceleration, with signed displacement and distance travelled.",
  "h1": "Acceleration calculator",
  "keywords": [
    "acceleration calculator",
    "uniform acceleration",
    "final speed",
    "distance travelled"
  ],
  "longDescription": "Find average acceleration from a change in velocity, or final velocity under constant acceleration along one line. Velocities are signed components on the same chosen axis. Two different results are shown: signed displacement and non-negative distance travelled. After a reversal they differ, so returning to the starting point does not imply that no motion occurred.",
  "howToUse": [
    "Choose acceleration or final velocity and enter a positive time interval in seconds.",
    "Use velocities in m/s on one fixed axis; divide km/h by 3.6 before entering them.",
    "When finding final velocity, enter signed acceleration and keep the axis direction unchanged.",
    "Use the distance and displacement results only if acceleration stays constant throughout the interval."
  ],
  "howItWorks": "a = (v − v₀)/t. For constant a, v = v₀ + at and Δx = (v₀ + v)t/2. Distance is L = ∫|v₀ + aτ|dτ. Without reversal, L = |Δx|; when the endpoint velocities have opposite signs, L = t(v₀² + v²)/(2(|v₀| + |v|)). This includes the stop and reversal inside the interval.",
  "example": "From 0 to 27.8 m/s in 8.4 s: a = 3.3095… → 3.31 m/s² and both distance and displacement are 116.76 m. From +10 to −10 m/s in 4 s: a = −5 m/s², displacement is 0 m, but distance is 20 m.",
  "faq": [
    {
      "q": "Can acceleration be negative?",
      "a": "Yes. Its sign indicates an axis direction. If v < 0 and a < 0, speed increases; slowing down requires velocity and acceleration to point in opposite directions."
    },
    {
      "q": "How do I convert km/h to m/s?",
      "a": "Divide by 3.6: 100 km/h = 27.777… m/s. The example uses the rounded 27.8 m/s, so it is not an exact calculation to 100 km/h."
    },
    {
      "q": "Why are displacement and distance different after a reversal?",
      "a": "Signed displacement allows oppositely directed segments to cancel. Distance adds their lengths: for +10 to −10 m/s in 4 s, the two segments are 10 m each."
    },
    {
      "q": "Does this work if acceleration is not constant?",
      "a": "(v − v₀)/t still gives average acceleration, but the final-velocity, distance and displacement model assumes velocity changes linearly. Arbitrary motion cannot be reconstructed from endpoint velocities alone."
    },
    {
      "q": "What do I enter for a start from rest, and is drag included?",
      "a": "Enter 0 for initial velocity. Forces, air resistance and velocity-dependent acceleration are not modelled; provide measured endpoint velocities or an assumed constant acceleration."
    }
  ],
  "disclaimer": "One-dimensional constant-acceleration model; endpoint velocities give average acceleration but do not determine the actual distance for arbitrary acceleration."
};
