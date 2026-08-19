import type { CalculatorCopy } from '../../lib/platform/types';

export const physicsTorqueCopyEn: CalculatorCopy = {
  name: 'Torque calculator',
  slug: 'torque-calculator',
  shortDescription: 'Torque from the force, the lever arm and the angle between them.',
  longDescription:
    'Works out torque as τ = F·r·sin θ. This computes a physical quantity rather than converting units — the torque unit converter is a separate page that only rescales a number you already have. The angle between the force and the lever matters a great deal: at a right angle the torque is at its maximum, and at zero the force pulls along the lever and does not turn it at all. That zero is exact here, not a leftover from the sine.',
  seoTitle: 'Torque calculator — τ = F·r·sin θ',
  seoDescription: 'Calculate torque from the magnitude of the force, the length of the lever arm and the angle between them.',
  h1: 'Torque calculator',
  keywords: ['torque calculator', 'torque formula', 'moment of force', 'lever arm'],
  howToUse: ['Enter the force in newtons.', 'Give the lever length in metres.', 'Set the angle between the force and the lever.'],
  howItWorks:
    'τ = F · r · sin θ, with the angle converted to radians explicitly. The product r·sin θ is the moment arm — the distance from the axis to the line of action — and the torque is the force multiplied by it.',
  example: 'A force of 50 N on a 0.3 m lever at a right angle gives 15 N·m; at 30° it is half that, 7.5 N·m.',
  faq: [
    { q: 'How is this different from the torque converter?', a: 'The converter changes an already known torque between newton-metres and other units. Here the torque is computed from force, lever and angle — a different job.' },
    { q: 'Why is the torque zero at a zero angle?', a: 'Because the force acts along the lever and only pulls it, without turning it. The sine of zero is zero, and here that zero is exact rather than a residue of binary arithmetic.' },
    { q: 'What is the moment arm?', a: 'The distance from the axis of rotation to the line of action of the force, that is r·sin θ. The torque is the force multiplied by it and grows with it.' },
    { q: 'At what angle is the torque greatest?', a: 'At 90 degrees: the sine is one and the whole force works on turning. That is exactly why a wrench is held perpendicular.' },
  ],
};
