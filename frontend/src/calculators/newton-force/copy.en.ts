import type { CalculatorCopy } from '../../lib/platform/types';

export const newtonForceCopyEn: CalculatorCopy = {
  "name": "Newton's second law calculator",
  "slug": "newtons-second-law-calculator",
  "shortDescription": "Force, mass or acceleration from F = m · a.",
  "seoTitle": "Newton's second law calculator — F = ma",
  "seoDescription": "Calculate force, mass or acceleration with Newton's second law F = m · a in SI units.",
  "h1": "Newton's second law calculator",
  "keywords": [
    "newton's second law calculator",
    "force calculator",
    "f = ma calculator",
    "mass from force"
  ],
  "longDescription": "Relates the magnitude of net external force, positive constant mass and acceleration magnitude using F = ma. Enter the resultant force after accounting for directions, rather than adding the magnitudes of opposing forces. This page does not solve directions. The additional weight row is mg at conventional standard gravity, 9.80665 m/s²; it is not a measurement of local gravity or an accelerating lift’s scale reading.",
  "howToUse": [
    "Choose force, mass or acceleration.",
    "Use kg, N and m/s²; resolve directions before entering the resultant magnitude.",
    "When finding mass, both supplied magnitudes must be positive; F = a = 0 does not determine mass.",
    "Zero acceleration is valid when finding force, and zero net force is valid when finding acceleration of a positive mass."
  ],
  "howItWorks": "For constant mass in an inertial frame: F = ma, m = F/a and a = F/m. F and a here are non-negative magnitudes of consistently directed vectors. Reference weight W = mgₙ uses gₙ = 9.80665 m/s²; it is not the net force when other forces balance gravity.",
  "example": "A 10 kg mass accelerating at 2 m/s² has net force 20 N and reference weight 98.0665 N. A 30 N pull opposed by 10 N friction gives a resultant input of 20 N, not 40 N.",
  "faq": [
    {
      "q": "How does force differ from weight?",
      "a": "Force is a general quantity. F here is the net-force magnitude; the reference weight row is mgₙ. At rest, a support can balance weight, giving F = 0 despite non-zero mgₙ."
    },
    {
      "q": "Why is zero acceleration rejected when solving for mass?",
      "a": "If F = a = 0, any positive mass fits. F > 0 with a = 0 contradicts this finite constant-mass model; division by zero cannot determine mass."
    },
    {
      "q": "Can acceleration be zero when solving for force?",
      "a": "Yes: for m > 0 it gives F = 0. But F = 0 with non-zero a cannot yield a positive mass in the inverse mode."
    },
    {
      "q": "Is friction taken into account?",
      "a": "Not automatically. Include friction, thrust and other external forces in their vector sum before entering the resultant magnitude."
    },
    {
      "q": "Is standard gravity the exact gravity at my location?",
      "a": "No. 9.80665 m/s² is a conventional standard. Local gravity varies, and support-force readings also depend on the frame’s acceleration."
    }
  ],
  "disclaimer": "Classical constant positive-mass model using resultant magnitudes; individual forces and their directions are not inferred."
};
