import type { CalculatorCopy } from '../../lib/platform/types';

export const centripetalForceCopyEn: CalculatorCopy = {
  name: 'Centripetal force calculator',
  slug: 'centripetal-force-calculator',
  shortDescription: 'Centripetal force, acceleration, angular velocity and period of revolution.',
  longDescription:
    'Anything moving along a circle is being pulled towards the centre, and the force required grows with the square of the speed while falling only linearly with the radius. That asymmetry is the practical result worth remembering: doubling the speed through a bend quadruples the force the tyres, the rope or the track has to supply, whereas halving the radius merely doubles it. Taking a corner twice as tight is therefore easier than taking the same corner twice as fast, and the numbers here make the size of that difference explicit.',
  seoTitle: 'Centripetal force calculator — circular motion',
  seoDescription:
    'Calculate centripetal force from mass, speed and radius, along with centripetal acceleration, angular velocity and the period of revolution.',
  h1: 'Centripetal force calculator',
  keywords: ['centripetal force calculator', 'circular motion', 'angular velocity', 'period of revolution'],
  howToUse: [
    'Enter the mass of the moving body in kilograms.',
    'Enter its speed along the circle in metres per second.',
    'Enter the radius of the circle in metres.',
    'Compare the force against what the tyres, rope or track can actually supply.',
  ],
  howItWorks:
    'F = m × v² ÷ r. Acceleration is v² ÷ r, angular velocity is v ÷ r, and the period of one revolution is 2πr ÷ v.',
  example: 'A 1,200 kg car at 15 m/s on a 40 m radius needs 6,750 N towards the centre.',
  faq: [
    {
      q: 'Is centripetal force a separate kind of force?',
      a: 'No. It is a role, not a source. Friction, tension, gravity or the track surface provides it; the formula says how much is needed, not where it comes from.',
    },
    {
      q: 'What about centrifugal force?',
      a: 'That is what the motion feels like from inside the turning object, not a force acting on it from outside. In the ground frame there is only the inward pull.',
    },
    {
      q: 'Why does the speed matter so much more than the radius?',
      a: 'Speed enters squared and radius only to the first power. Twice the speed needs four times the force; half the radius needs only twice.',
    },
    {
      q: 'Is the period shown for a stationary body?',
      a: 'No. At zero speed a revolution never completes, so the row is omitted rather than shown as an unbounded number. The force itself is legitimately zero.',
    },
  ],
};
