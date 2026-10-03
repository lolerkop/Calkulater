import type { CalculatorCopy } from '../../lib/platform/types';

export const potentialEnergyCopyEn: CalculatorCopy = {
  name: "Potential energy calculator",
  slug: "potential-energy-calculator",
  shortDescription: "Potential energy, height or mass from E = mgh.",
  seoTitle: "Potential energy calculator — E = mgh",
  seoDescription: "Calculate potential energy, height or mass from E = mgh with the standard g = 9.80665 m/s².",
  h1: "Potential energy calculator",
  keywords: ["potential energy calculator", "gravitational potential energy", "mgh calculator"],
  longDescription: "Estimate the energy change when lifting a load above a chosen zero level, or solve back for height or mass. E = mgh here assumes constant Earth gravity; it is not an orbital, spring or electric-field energy model. Compare two positions using their vertical height difference. Stored energy is not guaranteed useful output: losses and efficiency are not included.",
  howToUse: ["Choose energy, height or mass; each mode needs the other two quantities.", "Enter kg, m and J. For a lift, use vertical height difference, not stair or ramp length.", "This interface accepts nonnegative heights and energies relative to your zero level. Solving for mass requires positive height."],
  howItWorks: "E = m · 9.80665 · h; h = E/(m · 9.80665); m = E/(9.80665 · h). g is standard gravity, not a measured local value. This constant-g model is for height changes small compared with Earth’s radius; direct energy calculation requires positive mass.",
  example: "5 kg × 9.80665 m/s² × 10 m = 490.3325 J, displayed as 490.33 J. Conversely, 490.3325 J and 5 kg give 10 m. An energy of 98.0665 J at 2 m gives 5 kg. Use unrounded energy for inverse checks.",
  faq: [{"q": "Must height be above sea level?", "a": "Only if sea level is your chosen zero. For a load moved from a floor to a shelf, use the difference between their heights."}, {"q": "What does zero energy mean?", "a": "With positive mass at zero height, E = 0 relative to that reference. It does not mean the body has no other energy."}, {"q": "Can I estimate hoist power?", "a": "E is the ideal lifting work. Divide by elapsed time for average useful power; input power also depends on losses, which are not modelled here."}, {"q": "Can standard gravity be replaced by a local value?", "a": "This interface fixes g at 9.80665 m/s². Local gravity varies with location and altitude, so the calculation is not a geodetic measurement. If a problem specifies a different g, use E = mgh with that value separately."}],
  disclaimer: "E = mgh with constant standard gravity. Negative reference heights, local gravity and efficiency are not inputs.",
};
