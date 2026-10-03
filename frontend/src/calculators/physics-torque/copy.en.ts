import type { CalculatorCopy } from '../../lib/platform/types';

export const physicsTorqueCopyEn: CalculatorCopy = {
  "name": "Torque calculator",
  "slug": "torque-calculator",
  "shortDescription": "Torque magnitude from force, application-point distance and angle.",
  "seoTitle": "Torque calculator — τ = F·r·sin θ",
  "seoDescription": "Calculate τ = Fr sin θ and the effective moment arm, with r measured to the force’s application point and angle between r and force.",
  "h1": "Torque calculator",
  "keywords": [
    "torque calculator",
    "torque formula",
    "moment of force",
    "lever arm"
  ],
  "longDescription": "Finds the magnitude of one force’s torque about a chosen reference point: τ = Fr sin θ. r is the distance to the force’s application point; the actual moment arm d is the perpendicular distance to its line of action. They coincide only at 90°. These inputs do not determine clockwise or counterclockwise direction; adding torques requires their individual signs.",
  "howToUse": [
    "Enter a non-negative force magnitude in N.",
    "Enter r in metres, measured to the force’s application point, rather than an already known perpendicular moment arm.",
    "Use 0–180° between the r vector and the force.",
    "Read torque in N·m and effective arm d = r sin θ in m; if d is already known, enter r = d and 90°."
  ],
  "howItWorks": "The magnitude of r × F is Fr sin θ. The effective moment arm is d = r sin θ, so τ = Fd. At fixed F and r, torque is greatest at 90°. Exactly 0° and 180° give zero arm and torque; nearby angles retain their small non-zero values.",
  "example": "50 N, r = 0.3 m and 90° give d = 0.3 m and τ = 15 N·m. At 30°, d = 0.15 m and τ = 7.5 N·m. At 180°, torque is 0, not −15 N·m: this page displays magnitude.",
  "faq": [
    {
      "q": "How is this different from the torque converter?",
      "a": "A converter changes the units of known torque. This tool uses force and geometry to calculate it; N·m denotes torque and does not by itself establish work done in J."
    },
    {
      "q": "Why is torque zero at both 0° and 180°?",
      "a": "The force’s line of action passes through the reference point, giving zero perpendicular moment arm. Exact endpoint angles do not retain a numerical sine residue."
    },
    {
      "q": "What is the moment arm, and how does it differ from r?",
      "a": "d is the shortest distance to the force’s line of action; r reaches its application point. d = r sin θ, so at 30° it is half of r."
    },
    {
      "q": "At what angle is torque magnitude greatest?",
      "a": "At 90° for fixed F and r. Increasing distance or force increases torque; this form does not assess tool strength."
    },
    {
      "q": "Can this result determine the direction of rotation?",
      "a": "No. Magnitude does not specify the spatial orientation of r × F. Assign consistent signs on the chosen axis before summing torques instead of adding all magnitudes."
    }
  ],
  "disclaimer": "Magnitude of one force’s torque about a chosen point; direction, net torque and mechanism strength are not calculated."
};
