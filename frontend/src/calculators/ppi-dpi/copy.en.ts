import type { CalculatorCopy } from '../../lib/platform/types';

export const ppiDpiCopyEn: CalculatorCopy = {
  name: "PPI calculator",
  slug: "ppi-calculator",
  shortDescription: "Screen pixel density from the resolution and the diagonal.",
  longDescription:
    "Computes PPI — how many pixels fall on an inch of screen. That number, rather than the resolution alone, decides whether you can see the grain: 1920×1080 looks sharp on a laptop and coarse on a large TV, because the same pixels are stretched across a longer diagonal. The diagonal in pixels comes from the Pythagorean theorem and is divided by the diagonal in inches.\n\nScreens are described in PPI and printing in DPI: the arithmetic is the same, but a printer dot and a screen pixel are different things and should not be conflated.",
  seoTitle: "PPI calculator — screen pixel density",
  seoDescription: "Calculate screen pixel density (PPI) from the resolution and the diagonal in inches, plus the size of one pixel.",
  h1: "PPI calculator",
  keywords: ["ppi calculator", "pixel density calculator", "pixels per inch", "screen ppi"],
  howToUse: ["Enter the screen resolution in pixels.", "Give the diagonal in inches.", "Read the pixel density and the size of one pixel."],
  howItWorks: "Diagonal in pixels = √(width² + height²); PPI = that diagonal ÷ the diagonal in inches. Pixel size is 25.4 mm divided by the PPI.",
  example: "A 1920×1080 screen with a 15.6-inch diagonal has a density of 141.21 ppi.",
  faq: [
    { q: "How does PPI differ from DPI?", a: "The arithmetic is the same, but PPI describes screen pixels and DPI printed dots. A printer dot and a monitor pixel work differently, so one figure cannot be carried over to the other." },
    { q: "Why does the same resolution look different?", a: "Because what matters is not the pixel grid but its density. 1920×1080 gives about 141 ppi at 15 inches and about 55 at 40, where the grain becomes visible." },
    { q: "What density is enough?", a: "It depends on viewing distance: a phone is held close and needs more, a television is watched from afar and needs less. There is no universal threshold." },
    { q: "What does the pixel size show?", a: "The side of one pixel in millimetres. It is a handy way to judge whether a thin line or small type will be legible." },
  ],
};
