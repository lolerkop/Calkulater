import type { CalculatorCopy } from '../../lib/platform/types';

export const workCopyEn: CalculatorCopy = {
  "name": "Work calculator",
  "slug": "work-physics-calculator",
  "shortDescription": "Work done by a force over a distance, including the angle between them.",
  "seoTitle": "Work calculator — W = F · s · cos θ",
  "seoDescription": "Calculate the mechanical work done by a force over a displacement, including the angle between them.",
  "h1": "Work calculator",
  "keywords": [
    "work calculator",
    "mechanical work",
    "work done by a force",
    "w = fs cos theta"
  ],
  "longDescription": "Finds the work of one constant force from its magnitude, displacement magnitude and the angle between their vectors, or solves for displacement magnitude. Work is signed, including in the inverse mode. Displacement here connects initial and final positions; it is not the length of a winding path. A variable force requires a sum of small contributions or an integral, which this form does not calculate.",
  "howToUse": [
    "Choose work or displacement magnitude.",
    "Enter non-negative force in N and displacement magnitude in m; known work in J may be negative.",
    "Use an angle from 0 to 180 degrees between force and the displacement vector.",
    "For the inverse mode, force must be positive, the angle must differ from 90°, and non-zero work must have the cosine’s sign."
  ],
  "howItWorks": "W = F s cos θ for a force constant in magnitude and direction. F ≥ 0, s ≥ 0 and θ is in degrees. For non-zero F and s, work is positive below 90°, zero at 90° and negative above 90°. s = W/(F cos θ) is valid only with a non-zero denominator and a non-negative result.",
  "example": "10 N over 5 m gives 50 J at 0°, 25 J at 60° and −50 J at 180°. In reverse, −50 J, 10 N and 180° give 5 m. At 90°, work is 0 for every displacement, so its magnitude cannot be recovered.",
  "faq": [
    {
      "q": "Why is the work zero at 90°?",
      "a": "Force and displacement are perpendicular, so their dot product is zero. Only exactly 90° is set to zero; a nearby angle gives small signed work."
    },
    {
      "q": "Do I enter the work angle in degrees or radians?",
      "a": "Use degrees from 0 to 180. The calculation converts the angle internally."
    },
    {
      "q": "What do 180° and negative work mean?",
      "a": "The force opposes displacement, giving W = −Fs. This is the work of the selected force; kinetic-energy change depends on the total work of all forces."
    },
    {
      "q": "Why can I not find displacement at a right angle?",
      "a": "With W = 0, any displacement fits; non-zero work is inconsistent. Zero force likewise cannot determine displacement from work."
    },
    {
      "q": "Does a force holding a stationary load do work?",
      "a": "With no displacement, its mechanical work on the load is zero. This does not imply zero physiological energy expenditure and is not a power calculation."
    }
  ],
  "disclaimer": "Work of one constant force; displacement differs from path length, and total work of all forces or physiological expenditure is not calculated."
};
