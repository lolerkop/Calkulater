import type { CalculatorCopy } from '../../lib/platform/types';

export const momentOfInertiaCopyEn: CalculatorCopy = {
  name: "Moment of inertia calculator",
  slug: "moment-of-inertia",
  shortDescription: "Moment of inertia of a rod, disk, ring or sphere about an axis.",
  longDescription:
    "Moment of inertia measures resistance to rotation, and it depends not only on mass but on how that mass sits relative to the axis. A ring carries all of its material out at the radius, so its moment is twice that of a solid disk of the same mass and radius. For the same reason a rod swung about its end resists four times as strongly as the same rod about its centre.",
  seoTitle: "Moment of inertia calculator — rod, disk, ring, sphere",
  seoDescription: "Calculate the moment of inertia of a body about an axis from mass and size for six classical shapes, with the radius of gyration.",
  h1: "Moment of inertia calculator",
  keywords: ["moment of inertia calculator", "disk moment of inertia", "rod moment of inertia", "radius of gyration"],
  howToUse: [
    "Pick the body: the axis of rotation is set by that choice.",
    "For a disk, ring or sphere enter the radius; for a rod enter its length.",
    "The radius of gyration tells you how far from the axis all the mass would have to sit to give the same moment.",
    "For a compound body work out the parts separately and add their moments about the same axis.",
  ],
  howItWorks: "Rod about centre mL²/12, about end mL²/3, disk mr²/2, ring mr², solid sphere 2mr²/5, hollow sphere 2mr²/3.",
  example: "A disk of 2 kg and 15 cm radius has a moment of inertia of 0.0225 kg·m².",
  faq: [
    { q: "Why is a ring twice a disk?", a: "A ring has all of its mass at the radius, while a disk spreads it from centre to rim. The moment grows as the square of distance, so the inner layers of a disk contribute far less." },
    { q: "Why two options for a rod?", a: "The moment depends on where the axis runs. About the centre it is four times smaller than about the end — which is why a swing is easier to move from the middle than from the edge." },
    { q: "What does the radius of gyration show?", a: "The distance from the axis at which the whole mass would have to be concentrated as a point to leave the moment unchanged. It replaces a complicated shape with one number." },
    { q: "How do I handle a compound body?", a: "Add the moments of the parts about the same axis. If the axis does not pass through a part's centre, add its mass times the offset squared — the parallel axis theorem, which is not computed here." },
  ],
};
