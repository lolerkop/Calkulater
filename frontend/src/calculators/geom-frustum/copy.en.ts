import type { CalculatorCopy } from '../../lib/platform/types';

export const geomFrustumCopyEn: CalculatorCopy = {
  name: "Conical frustum calculator",
  slug: "conical-frustum-calculator",
  shortDescription: "Volume, slant height and surfaces of a truncated cone from two radii and the height.",
  longDescription:
    "Works out a conical frustum — the shape of a bucket, a lampshade or a drinking glass. The volume is V = πh(R² + Rr + r²)/3, and the middle term Rr is not decoration: without it the formula would collapse into the average of two cylinders and understate the volume. It is easy to check — set the top radius to zero and the expression reduces to the ordinary cone πR²h/3. The slant height is measured from the difference of the radii: l = √(h² + (R − r)²). Substituting the height for the slant is a common mistake that overstates the lateral surface, the more so the further the radii are apart.",
  seoTitle: "Conical frustum calculator: volume and surface area",
  seoDescription: "Calculate the volume, slant height, lateral and total surface of a truncated cone from two radii and the height.",
  h1: "Conical frustum calculator",
  keywords: ["frustum calculator", "truncated cone volume", "conical frustum area", "slant height"],
  howToUse: [
    "Choose the length unit.",
    "Enter the radius of the bottom base.",
    "Enter the top radius — it must be smaller than the bottom one.",
    "Enter the height: the vertical distance between the bases, not the slant.",
  ],
  howItWorks:
    "Volume V = πh(R² + Rr + r²)/3. Slant height l = √(h² + (R − r)²). The lateral surface is π(R + r)l, and the total surface adds both bases.",
  example: "A frustum with radii of 6 and 3 cm and a height of 8 cm has a volume of 527.79 cm³.",
  faq: [
    { q: "How is the height different from the slant height?", a: "The height is the vertical distance between the bases; the slant runs along the lateral surface. Using the height in place of the slant overstates the lateral surface, and the more so the more the cone tapers." },
    { q: "Where does the Rr term in the volume come from?", a: "From the cross-section changing gradually rather than in a step. Without that term you would get the average of two cylinders, and the volume would come out too small." },
    { q: "What happens if the top radius is zero?", a: "You get an ordinary cone, and the formula reduces to πR²h/3. That makes a convenient check on the result." },
    { q: "Why must the top radius be smaller than the bottom one?", a: "Otherwise the figure is upside down relative to the usual convention. Simply swap the radii — the volume is unaffected either way." },
    { q: "How do I work out what a bucket holds?", a: "Enter the radii of the base and the rim and the inside height. The volume in cubic centimetres divided by 1000 gives litres." },
  ],
};
