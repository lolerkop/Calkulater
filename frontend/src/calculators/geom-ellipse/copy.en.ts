import type { CalculatorCopy } from '../../lib/platform/types';

export const geomEllipseCopyEn: CalculatorCopy = {
  name: "Ellipse calculator",
  slug: "ellipse-calculator",
  shortDescription: "Area, perimeter, eccentricity and foci of an ellipse from its semi-axes.",
  longDescription:
    "Works out an ellipse from its two semi-axes. The area is exact and simple: S = πab. The perimeter, however, cannot be written in elementary functions at all — it needs an elliptic integral — so this uses Ramanujan's approximation, whose error at moderate flattening is below one hundred-thousandth of a percent, smaller than the difference between the digits on screen. The row is labelled with its source rather than passing an approximation off as an exact formula. Eccentricity is measured from the larger semi-axis: it says how stretched the ellipse is, and falls to zero exactly when the figure becomes a circle.",
  seoTitle: "Ellipse calculator: area, perimeter and eccentricity",
  seoDescription: "Calculate the area, perimeter, eccentricity and distance between the foci of an ellipse from its semi-axes.",
  h1: "Ellipse calculator",
  keywords: ["ellipse calculator", "area of an ellipse", "ellipse perimeter", "eccentricity"],
  howToUse: [
    "Choose the length unit.",
    "Enter both semi-axes — halves of the axes, not the axes themselves.",
    "Order does not matter: the larger one is detected.",
    "Equal semi-axes give a circle.",
  ],
  howItWorks:
    "Area S = πab. The perimeter uses Ramanujan's approximation π[3(a+b) − √((3a+b)(a+3b))]. Eccentricity e = √(1 − b²/a²) is taken from the larger semi-axis, and the distance between the foci is 2√(a² − b²).",
  example: "An ellipse with semi-axes of 5 and 3 cm has an area of 47.124 cm², a perimeter of 25.527 cm and an eccentricity of 0.8.",
  faq: [
    { q: "Why is the perimeter approximate?", a: "The exact perimeter of an ellipse is an elliptic integral rather than an elementary formula. Ramanujan's approximation errs by less than 10⁻⁵ % at moderate flattening — less than the difference between the digits shown." },
    { q: "What does eccentricity tell me?", a: "How stretched the ellipse is. Zero is a circle, values around 0.8 are visibly elongated, and approaching one means the shape is nearly a flat segment." },
    { q: "Is a semi-axis the same as an axis?", a: "No, a semi-axis is half an axis: the distance from the centre to the edge, not edge to edge. Entering axes instead of semi-axes overstates the area fourfold." },
    { q: "What are the foci of an ellipse?", a: "Two points on the major axis for which the sum of the distances to any point on the curve is constant. That property is what lets you draw an ellipse with a string looped around two pins." },
    { q: "What happens when the semi-axes are equal?", a: "You get a circle: the area becomes πa², the eccentricity is zero and the foci meet at the centre. Ramanujan's approximation returns exactly 2πa there." },
  ],
};
