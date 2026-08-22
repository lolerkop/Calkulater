import type { CalculatorCopy } from '../../lib/platform/types';

export const tankVolumeCopyEn: CalculatorCopy = {
  name: "Tank volume calculator",
  slug: "tank-volume",
  shortDescription: "Full tank volume and the volume held at a given level.",
  longDescription:
    "Works out both the full capacity and how much liquid is in the tank right now. In a vertical tank or a rectangular trough the fill is proportional to the level; in a horizontal tank it is not. There the wetted cross-section is a circular segment, so half the height gives exactly half the volume while a quarter of the height gives noticeably less than a quarter. The difference from a geometric cylinder matters: that one returns the volume of a solid, here the answer is how many litres are inside at this level.",
  seoTitle: "Tank volume calculator — cylinder, horizontal tank, barrel",
  seoDescription: "Calculate the full volume of a tank and the volume held at a given level for vertical, horizontal, rectangular and capsule shapes.",
  h1: "Tank volume calculator",
  keywords: ["tank volume calculator", "horizontal tank volume", "how many litres in a barrel", "tank capacity"],
  howToUse: [
    "Pick the shape: in a horizontal tank the level is measured from the bottom of the shell.",
    "For a cylinder enter the diameter, for a rectangular tank the base side.",
    "Height or length: a vertical tank uses its height, a horizontal one its shell length.",
    "Measure the level with a dipstick from the bottom; it cannot exceed the tank itself.",
  ],
  howItWorks: "Vertical shapes: base area times level. Horizontal tank: circular segment area r²(θ − sin θ)/2 times length.",
  example: "A vertical tank 1.5 m across and 2 m tall filled to 1.2 m holds 2.12 m³ — that is 2121 litres.",
  faq: [
    { q: "Why does half the height of a horizontal tank give exactly half the volume?", a: "Because a circle is symmetric about its horizontal axis: the segment up to the middle is half the circle. A quarter of the height, though, gives far less than a quarter — the section down there is narrow." },
    { q: "How is this different from a cylinder calculator?", a: "A geometric cylinder returns the volume of the whole solid. Here there is a fill level and an orientation, and the answer is how much liquid is inside now." },
    { q: "How is a capsule handled?", a: "As a cylinder plus a sphere of the same diameter, with the fill spread over the total height. That is an approximation: the exact segment of a domed end needs the shape of that dome measured." },
    { q: "Is wall thickness accounted for?", a: "No. The sizes are treated as internal. If you measured from outside, subtract two wall thicknesses from the diameter and one from the height." },
  ],
};
