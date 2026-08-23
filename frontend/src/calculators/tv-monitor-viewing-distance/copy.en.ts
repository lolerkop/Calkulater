import type { CalculatorCopy } from '../../lib/platform/types';

export const tvViewingDistanceCopyEn: CalculatorCopy = {
  name: "TV viewing distance calculator",
  slug: "tv-viewing-distance",
  shortDescription: "Comfortable viewing distance by field of view, plus the limit where pixels stop being visible.",
  longDescription:
    "The right distance to a television is set by the viewing angle rather than the diagonal: THX suggests the screen fill about forty degrees of the field of view, SMPTE about thirty. The first is closer to a cinema, the second to ordinary viewing, and both are correct for the same screen. A separate figure gives the distance beyond which the eye can no longer resolve individual pixels — it explains why 4K matters on a large diagonal and buys nothing on a small one.",
  seoTitle: "TV viewing distance calculator — THX, SMPTE and 4K",
  seoDescription: "Work out the comfortable viewing distance from diagonal, aspect ratio and resolution, including the pixel visibility limit.",
  h1: "TV viewing distance calculator",
  keywords: ["viewing distance", "field of view", "THX", "4K"],
  howToUse: [
    "The diagonal is in inches, as printed on the box; the distances come out in metres.",
    "Resolution lines: 1080 for Full HD, 2160 for 4K, 4320 for 8K.",
    "The THX distance is closer and suits films; the SMPTE one is further and easier for ordinary viewing.",
    "If your seat is further than the visibility limit, the extra resolution will not be visible.",
  ],
  howItWorks: "Screen width from diagonal and ratio, distance = width/2 ÷ tangent of half the viewing angle; the visibility limit comes from a pixel subtending one arcminute.",
  example: "For a 55-inch 4K set the THX distance is about 1.67 m, and pixels vanish beyond 1.08 m.",
  faq: [
    { q: "Why two different recommendations?", a: "Because the goals differ. THX aims at cinema immersion and gives about forty degrees, SMPTE at comfort over long ordinary viewing and gives about thirty. Practice lies between them." },
    { q: "What does the pixel visibility limit mean?", a: "It is the distance at which one pixel subtends one arcminute — the resolving limit of normal vision. Beyond it the difference between 4K and Full HD stops being visible." },
    { q: "Does that mean 4K is pointless?", a: "Not if you sit closer than the limit — which is exactly what happens with a large diagonal in an ordinary room. On a small screen from a typical sofa the gain really is invisible." },
    { q: "Why compute from width rather than diagonal?", a: "The viewing angle is defined by the horizontal field of view, and the screen width sets it. At equal diagonals an ultrawide screen is wider than a normal one, so its distance differs." },
  ],
};
