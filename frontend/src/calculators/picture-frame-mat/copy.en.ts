import type { CalculatorCopy } from '../../lib/platform/types';

export const pictureFrameMatCopyEn: CalculatorCopy = {
  name: "Picture frame mat calculator",
  slug: "picture-frame-mat",
  shortDescription: "Frame size and mat border widths for a photograph.",
  longDescription:
    "The bottom mat border is made wider than the others \u2014 an old framing rule with an optical reason: with geometrically equal borders the eye reads the bottom as narrower and the work appears to sag. An extra centimetre or two evens out the perception. So the bottom weighting is its own field: without it the calculation would give a formally correct but visually wrong frame.",
  seoTitle: "Picture frame mat calculator \u2014 size for a photograph",
  seoDescription: "Calculate frame size and mat border widths from the photograph size, with bottom weighting.",
  h1: "Picture frame mat calculator",
  keywords: ["picture mat", "frame size", "matboard", "photo framing"],
  howToUse: [
    "Use the visible photograph size \u2014 what remains in the mat window after the overlap.",
    "Borders are usually a fifth to a third of the shorter side of the work.",
    "Weight the bottom by one to two centimetres; with equal borders the work appears to sag.",
    "The frame size is the outer size of the mat: the moulding is cut to it.",
  ],
  howItWorks: "Frame width = photo + 2 borders; height = photo + 2 borders + weighting.",
  example: "A 20\u00d730 photograph with a 5 cm border and 1 cm weighting needs a 30\u00d741 cm frame.",
  faq: [
    { q: "Why is the bottom border wider?", a: "Because of an optical illusion: with geometrically equal borders the eye reads the bottom as narrower and the composition seems to slip downwards. A centimetre or two evens it out \u2014 the rule predates photography and comes from painting." },
    { q: "How wide should the borders be?", a: "Usually a fifth to a third of the shorter side of the work. Narrow borders make the framing look cramped; very wide ones turn the mat into the main element." },
    { q: "Should I allow for the mat overlap?", a: "Yes \u2014 the window is cut a few millimetres smaller than the print, otherwise it falls through. Enter the VISIBLE size here: what stays in the window." },
    { q: "Does this work for canvas?", a: "A stretched canvas is usually framed without a mat. But if you want a frame with a reveal, the arithmetic is the same \u2014 the border field becomes the width of that reveal." },
  ],
};
