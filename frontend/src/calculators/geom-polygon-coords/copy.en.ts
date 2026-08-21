import type { CalculatorCopy } from '../../lib/platform/types';

export const geomPolygonCoordsCopyEn: CalculatorCopy = {
  name: "Polygon area from coordinates calculator",
  slug: "polygon-area-coordinates",
  shortDescription: "Area, perimeter and centroid of any polygon from the coordinates of its vertices.",
  longDescription:
    "Works out the area of an arbitrary polygon using the shoelace formula, which needs nothing but the coordinates of the corners taken in order. The sign of the sum tells you which way the outline runs, so the winding is reported alongside the area: entering the vertices in the wrong order is the most common mistake, and «clockwise» points at it before you start looking for an error in the numbers. Three points on one straight line are rejected rather than shown as zero — a zero would look like a legitimate answer.",
  seoTitle: "Polygon area calculator from vertex coordinates (shoelace formula)",
  seoDescription: "Enter the coordinates of the corners and get the area, perimeter, centroid and winding of any polygon.",
  h1: "Polygon area from coordinates",
  keywords: ["polygon area from coordinates", "shoelace formula calculator", "irregular polygon area", "land plot area by coordinates"],
  howToUse: [
    "Enter one vertex per line: x and y.",
    "Follow the outline in order — either direction works, but do not jump across.",
    "Do not repeat the first vertex at the end; the outline closes itself.",
    "Check the winding if the shape is not what you expected.",
  ],
  howItWorks:
    "Twice the area is the sum of x·y of each pair of neighbouring vertices minus the same product the other way round. Its absolute value halved is the area, and its sign gives the winding.",
  example: "A 4 by 3 rectangle entered as four corners gives an area of 12 and a perimeter of 14.",
  faq: [
    { q: "Do I need to repeat the first point at the end?", a: "No. The last vertex is joined to the first automatically. Repeating it adds a zero-length side, which changes nothing but looks like an error." },
    { q: "Does the direction of the outline matter?", a: "Not for the area — the absolute value is taken. The direction is reported separately because a wrong order usually means a wrong shape." },
    { q: "Can the polygon be non-convex?", a: "Yes. The shoelace formula handles any simple polygon, convex or not. It does not handle self-intersecting outlines: those have no well-defined area." },
    { q: "What units does the result use?", a: "The same ones as the coordinates, squared. Metres in, square metres out." },
    { q: "Why is a straight line rejected?", a: "Because three collinear points do not enclose anything. Showing zero would look like a valid answer to an invalid figure." },
  ],
};
