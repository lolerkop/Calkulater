import type { CalculatorCopy } from '../../lib/platform/types';

export const inclinedPlaneCopyEn: CalculatorCopy = {
  name: "Inclined plane calculator",
  slug: "inclined-plane",
  shortDescription: "Force along the slope, friction and acceleration.",
  seoTitle: "Inclined plane calculator — slope force and friction",
  seoDescription: "Calculate the force along the slope, normal force, friction and acceleration of a body on an inclined plane.",
  h1: "Inclined plane calculator",
  keywords: ["inclined plane", "slope force", "friction coefficient", "ramp angle"],
  longDescription: "Find the forces on a body already sliding down a straight ramp. The weight is split into components parallel and normal to the surface, then sliding friction is subtracted. Downhill is positive: positive acceleration means speeding up, negative means slowing until it stops. A stationary body needs a separate static-friction model; this tool does not decide when sliding begins.",
  howToUse: ["Enter mass in kilograms and the angle to the horizontal in degrees, not a percent gradient.", "Use the kinetic friction coefficient for the actual surfaces; 0.2 is a sample input, not a universal material value.", "Read signs with downhill positive. Negative acceleration applies while motion remains downhill; the model changes at rest."],
  howItWorks: "With g = 9.80665 m/s²: F∥ = mg sin α, N = mg cos α, Ff = μN, Fnet = F∥ − Ff, a = Fnet/m. μ has no unit. The model assumes downhill sliding, constant μ, no applied pull, rolling or air drag. At 90°, N = 0 is a limiting case.",
  example: "50 kg, 30°, μ = 0.2: F∥ = 245.17 N, N = 424.64 N, friction = 84.928 N, net force = 160.24 N, a = 3.205 m/s². On a horizontal surface with the same mass and μ, a = −1.961 m/s²: a moving body slows; this is not a stability margin.",
  faq: [{"q": "Why does mass cancel from acceleration?", "a": "Both forces contain m, giving a = g(sin α − μ cos α). With the same surfaces, extra mass increases the forces but not this acceleration."}, {"q": "Will a crate begin to slide from rest?", "a": "This tool cannot establish that. Starting requires mg sin α > μs mg cos α using static μs. The entered coefficient describes sliding, and static friction need not equal μN."}, {"q": "Can I use it for uphill motion or rolling?", "a": "No. During uphill motion friction reverses and both forces act downhill; rolling also needs rotational dynamics."}, {"q": "How do I turn a percent gradient into the angle input?", "a": "For a rise Δh over horizontal run L, gradient p = 100Δh/L and angle α = arctan(p/100). A 100% gradient means 45°, not 90°. Enter the converted angle in degrees."}],
  disclaimer: "A downhill-sliding model, not a load-securing or structural-stability calculation. Surface condition changes friction.",
};
