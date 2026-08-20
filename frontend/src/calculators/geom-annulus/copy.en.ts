import type { CalculatorCopy } from '../../lib/platform/types';

export const geomAnnulusCopyEn: CalculatorCopy = {
  name: "Annulus calculator",
  slug: "annulus-calculator",
  shortDescription: "Area of the ring between two circles, its width and both circumferences.",
  longDescription:
    "Works out the area of an annulus — the figure between two circles sharing a centre. The area is the difference of two discs: π(R² − r²). Writing it as π(R − r)² is wrong even though the slip is easy to make: that expression gives the area of a disc of radius R − r, a completely different figure, and for a narrow ring both numbers are small enough that the substitution looks plausible. An inner radius equal to the outer one is rejected, because a ring of zero width does not exist. A zero inner radius, by contrast, is perfectly legitimate — that is a solid disc.",
  seoTitle: "Annulus calculator: area between two circles",
  seoDescription: "Calculate the area of an annulus, its width, the outer and inner circumferences and the mean radius.",
  h1: "Annulus calculator",
  keywords: ["annulus calculator", "area of a ring", "area between two circles", "annulus area"],
  howToUse: [
    "Choose the length unit.",
    "Enter the outer radius.",
    "Enter the inner radius — it must be smaller than the outer one.",
    "Leave the inner radius at zero for a solid disc.",
  ],
  howItWorks:
    "Area S = π(R² − r²), the difference of two discs. The ring width is R − r, the circumferences are 2πR and 2πr, and the mean radius is (R + r)/2.",
  example: "A ring with radii of 10 and 6 cm has an area of 201.06 cm² and a width of 4 cm.",
  faq: [
    { q: "Why can't the area be π(R − r)²?", a: "Because that is the area of a disc of radius R − r, not of the ring. For radii 10 and 6 the correct answer is 201.06 cm² while the mistaken one is 50.27 cm² — a factor of four apart, though both look plausible." },
    { q: "What if the inner radius is zero?", a: "You get a solid disc, and the calculation allows it: the area becomes πR² and the inner circumference is zero." },
    { q: "Why can't the inner radius equal the outer one?", a: "The ring would then have zero width, so there is no figure. Reporting an area of zero would answer a question nobody asked." },
    { q: "What is the mean radius for?", a: "It lets you treat a narrow ring as a strip: unrolled, it has length 2π·R_mean and width R − r. For narrow rings that gives the area to good accuracy." },
    { q: "How do I find the cross-section of a pipe?", a: "It is exactly this problem: the outer radius of the pipe and the inner radius of the bore. The difference gives the area of metal in cross-section." },
  ],
};
