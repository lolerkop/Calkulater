import type { CalculatorCopy } from '../../lib/platform/types';

export const geomSphereCopyEn: CalculatorCopy = {
  name: "Sphere calculator",
  slug: "sphere-calculator",
  shortDescription: "Volume and surface area of a sphere from its radius, diameter or volume.",
  longDescription:
    "Solves a sphere from whichever value you have: radius, diameter or the volume itself. The reverse direction comes up more often than expected — a tank volume tells you the radius, which tells you whether it fits through a hatch. The volume is reported in the cube of the chosen unit and the surface in its square: different powers of the same length, and they cannot share a conversion factor.",
  seoTitle: "Sphere calculator — volume and surface area",
  seoDescription: "Calculate the volume and surface area of a sphere from its radius, diameter or a known volume.",
  h1: "Sphere calculator",
  keywords: ["sphere calculator", "volume of a sphere", "surface area of a sphere", "radius from volume"],
  howToUse: ["Choose the length unit.", "Say whether you know the radius, the diameter or the volume.", "Enter it and read the rest."],
  howItWorks: "V = (4 ÷ 3) · π · r³ and S = 4 · π · r²; the radius from a volume is the cube root of 3V ÷ (4π).",
  example: "A sphere of radius 3 m has a volume of 113.097 m³ and a surface area of 113.097 m².",
  faq: [
    { q: "Why do the volume and surface match at radius 3?", a: "It is a coincidence of numbers, not of quantities: 4πr² and (4/3)πr³ are equal exactly at r = 3. Their units differ — a square and a cube of length." },
    { q: "How do I find the radius from a volume?", a: "Choose the volume mode: the radius is the cube root of 3V ÷ (4π), and the surface follows from it." },
    { q: "What is the difference between a sphere and a ball?", a: "A sphere is the surface only; a ball is the solid together with its interior. Volume belongs to the ball, surface area to the sphere bounding it." },
    { q: "Is the wall thickness of a tank taken into account?", a: "No. The calculation is ideal — a geometric solid, not a vessel with material walls." },
  ],
};
