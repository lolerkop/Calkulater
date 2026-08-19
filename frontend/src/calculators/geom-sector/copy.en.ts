import type { CalculatorCopy } from '../../lib/platform/types';

export const geomSectorCopyEn: CalculatorCopy = {
  name: 'Circular sector calculator',
  slug: 'sector-calculator',
  shortDescription: 'Sector area, arc length and chord from the radius and the angle.',
  longDescription:
    'Solves a circular sector from the radius and the central angle: area, arc length, chord and sector perimeter, along with the share of the full circle. The angle is entered in degrees and converted to radians inside the calculation — the area and arc formulas only hold in radian measure. At a full circle the chord goes to exactly zero: binary arithmetic gives 1.22×10⁻¹⁶ here, and showing that noise as a length would be wrong.',
  seoTitle: 'Circular sector calculator — area, arc, chord',
  seoDescription: 'Calculate the area of a circular sector, the arc length and the chord from the radius and the central angle.',
  h1: 'Circular sector calculator',
  keywords: ['sector calculator', 'area of a sector', 'arc length', 'chord of a circle'],
  howToUse: ['Pick the length unit.', 'Enter the radius.', 'Give the central angle in degrees.'],
  howItWorks:
    'The angle becomes radians as θ = α·π/180. The sector area is S = ½r²θ, the arc length L = rθ and the chord c = 2r·sin(θ/2). The sector perimeter adds the arc to two radii.',
  example: 'A sector of radius 5 cm with a 60° angle has an area of 13.09 cm², an arc of 5.236 cm and a chord of exactly 5 cm.',
  faq: [
    { q: 'Why is the chord zero at 360 degrees?', a: 'Because the ends of the arc coincide: the segment joining them collapses to a point. Binary arithmetic leaves a tiny residue there, and it is deliberately snapped to exact zero.' },
    { q: 'How does a chord differ from the arc length?', a: 'The arc follows the circle, the chord runs straight between its ends. The chord is always shorter, and the gap widens with the angle.' },
    { q: 'Why convert degrees to radians?', a: 'Because S = ½r²θ and L = rθ only hold in radian measure. Substituting degrees would be out by a factor of about 57.' },
    { q: 'How do I get the area of a segment?', a: 'Subtract the area of the triangle with its apex at the centre: S_segment = ½r²(θ − sin θ).' },
  ],
};
