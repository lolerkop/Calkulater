import type { CalculatorCopy } from '../../lib/platform/types';

export const geomCubeCopyEn: CalculatorCopy = {
  name: "Cube calculator",
  slug: "cube-calculator",
  shortDescription: "Volume, surface area and diagonals of a cube from its edge, volume or surface area.",
  longDescription:
    "Works out a cube from whichever of three quantities you know: the edge, the volume or the surface area. In the reverse modes the edge is recovered first — a = ∛V or a = √(S/6) — and everything else follows as usual. The edge is also what appears as the headline result in those modes: the quantity you just typed in is not the answer. A cube has two different diagonals and they are worth keeping apart: the face diagonal a√2 lies flat in one side, while the space diagonal a√3 runs through the body from corner to opposite corner — it is the longer one, and it decides whether a long object will fit inside.",
  seoTitle: "Cube calculator: volume, surface area and diagonal",
  seoDescription: "Calculate the volume, surface area, diagonals and total edge length of a cube from its edge, volume or surface area.",
  h1: "Cube calculator",
  keywords: ["cube calculator", "volume of a cube", "surface area of a cube", "cube diagonal"],
  howToUse: [
    "Choose the length unit.",
    "Select which quantity you know.",
    "Enter its value.",
    "The remaining properties are calculated at once.",
  ],
  howItWorks:
    "Volume V = a³, surface area S = 6a², face diagonal a√2, space diagonal a√3, total edge length 12a. In the reverse modes the edge comes from a = ∛V or a = √(S/6).",
  example: "A cube with a 3 cm edge has a volume of 27 cm³, a surface area of 54 cm² and a diagonal of 5.196 cm.",
  faq: [
    { q: "How does the space diagonal differ from the face diagonal?", a: "The face diagonal a√2 lies flat within one side, while the space diagonal a√3 runs through the body from corner to opposite corner. The second is longer, and it is the one that answers whether a long object will fit inside a box." },
    { q: "How do I find the edge from the volume?", a: "Take the cube root: a = ∛V. For a volume of 64 cm³ the edge is 4 cm. Choose the «volume» mode and the calculator does it for you." },
    { q: "Why have a cube calculator when there is one for a cuboid?", a: "A cube is a special case of it, but a cube is described by one quantity instead of three, and that makes the reverse problems solvable: the edge follows directly from the volume or the surface area. The general case has no such unique inverse." },
    { q: "How much does the volume grow if the edge doubles?", a: "Eightfold, while the surface area grows fourfold. Volume scales with the cube of the linear size and area with the square — which is also why large bodies cool more slowly than small ones." },
    { q: "How do I convert the result into other units?", a: "Change the length unit before calculating. Converting a finished volume by hand is risky: a cubic centimetre holds a thousand cubic millimetres, not ten." },
  ],
};
