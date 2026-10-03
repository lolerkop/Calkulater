import type { CalculatorCopy } from '../../lib/platform/types';

export const kineticEnergyCopyEn: CalculatorCopy = {
  name: "Kinetic energy calculator",
  slug: "kinetic-energy-calculator",
  shortDescription: "Kinetic energy, speed or mass from E = ½mv².",
  seoTitle: "Kinetic energy calculator — E = ½mv²",
  seoDescription: "Calculate kinetic energy, speed or mass from E = ½mv² in SI units.",
  h1: "Kinetic energy calculator",
  keywords: ["kinetic energy calculator", "energy of motion", "speed from kinetic energy"],
  longDescription: "Find translational kinetic energy, speed from energy, or mass from energy and speed. Compare speeds in the same reference frame: kinetic energy depends on motion relative to an observer. The ½mv² formula is classical; rotation, collision deformation and relativistic effects are excluded. Energy alone does not determine braking distance.",
  howToUse: ["Choose the unknown and enter the other two quantities in kg, m/s and J.", "Enter speed magnitude. Convert km/h to m/s by dividing by 3.6: 36 km/h = 10 m/s.", "Zero speed is valid for energy. It cannot determine mass: this inverse formula would require division by zero."],
  howItWorks: "E = m v²/2; v = √(2E/m); m = 2E/v². Direct calculation requires positive mass; speed and energy are nonnegative. The inverse returns speed magnitude, not direction. Doubling speed at fixed mass quadruples energy.",
  example: "2 kg at 3 m/s gives E = 2 × 3²/2 = 9 J. At 6 m/s the same body has 36 J. Conversely, E = 100 J and m = 8 kg give √25 = 5 m/s; E = 50 J and v = 10 m/s give m = 1 kg.",
  faq: [{"q": "Can speed be negative?", "a": "The input is speed magnitude. Opposite velocities +v and −v have the same energy because the formula squares the value."}, {"q": "Is this the total energy of a wheel?", "a": "No. Its translational part is mv²/2; rotational energy adds Iω²/2. Moment of inertia is not an input here."}, {"q": "Can I obtain braking distance or impact force?", "a": "No. Braking distance needs braking forces and conditions; average impact force needs a stopping distance or time and a collision model."}, {"q": "How should energy given in kilojoules be entered?", "a": "The field uses joules: 1 kJ = 1000 J. For 1 kJ and a mass of 80 kg, enter 1000 and 80: v = √(2000/80) = 5 m/s. Entering 1 instead of 1000 changes the calculation, not just the label."}],
  disclaimer: "Classical translational kinetic energy. Speeds comparable to the speed of light require a relativistic calculation.",
};
