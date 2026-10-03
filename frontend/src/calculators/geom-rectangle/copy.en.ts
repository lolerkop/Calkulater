import type { CalculatorCopy } from '../../lib/platform/types';

export const geomRectangleCopyEn: CalculatorCopy = {
  "name": "Rectangle calculator",
  "slug": "rectangle-calculator",
  "shortDescription": "Area, perimeter and diagonal of a rectangle from its sides or its area.",
  "longDescription": "Works a rectangle in both directions: two sides give the area, perimeter and diagonal, while an area plus one side gives the other side. That second mode answers the question that actually comes up when cutting or planning a room — \"I need 30 m² and the width is 6 m, how long is the piece?\". The diagonal comes from the Pythagorean theorem and is what you measure to check that corners really are square.",
  "seoTitle": "Rectangle calculator — area, perimeter, diagonal",
  "seoDescription": "Calculate the area, perimeter and diagonal of a rectangle from two sides, or find the missing side from the area.",
  "h1": "Rectangle calculator",
  "keywords": [
    "rectangle calculator",
    "area of a rectangle",
    "perimeter of a rectangle",
    "rectangle diagonal"
  ],
  "howToUse": [
    "For sides mode measure two adjacent sides of the rectangle.",
    "For area mode enter a positive area and one positive side.",
    "Put lengths in one unit and area in that unit squared.",
    "When checking a real layout, also check its shape and both diagonals."
  ],
  "howItWorks": "S = a · b, P = 2(a + b) and d = √(a² + b²); in the second mode the missing side is b = S ÷ a.",
  "example": "A room measuring 8 × 3 m has an area of 24 m², a perimeter of 22 m and a diagonal of 8.544 m.",
  "faq": [
    {
      "q": "What is the diagonal for?",
      "a": "A diagonal d = √(a²+b²) checks the included right angle between the corresponding independently measured adjacent sides. One such match does not establish all four angles of an arbitrary quadrilateral. For a layout also check opposite sides, the other diagonal and measurement accuracy."
    },
    {
      "q": "How do I find the second side from the area?",
      "a": "Choose the \"area and one side\" mode — the other side follows by division, and the perimeter and diagonal are then computed from both."
    },
    {
      "q": "What if the two sides are equal?",
      "a": "You get a square. The calculation allows it and returns correct values; the figure is simply a special case."
    },
    {
      "q": "Why can I not convert the area by multiplying by 100?",
      "a": "Because going from metres to centimetres squares the linear factor: one square metre is 10,000 square centimetres, not 100."
    },
    {
      "q": "Does area alone determine a rectangle?",
      "a": "No. An area of 24 m² can have sides 8 and 3 m or 6 and 4 m, with perimeters 22 and 20 m respectively. The inverse mode therefore also needs one side."
    }
  ],
  "disclaimer": "Rectangle model, with all four right angles assumed. One matching diagonal checks only the included angle between its corresponding two sides. Coverage area excludes allowance, joints and waste; results are rounded."
};
