import type { CalculatorCopy } from '../../lib/platform/types';

export const pressureCopyEn: CalculatorCopy = {
  name: "Pressure calculator",
  slug: "pressure-calculator",
  shortDescription: "Pressure, force or area from p = F ÷ A.",
  longDescription:
    "Computes mechanical pressure — force spread over an area — and solves the relation in any direction. The reverse step answers a practical question: how much bearing area is needed for the ground or a footing to carry a given load. It is also why a wide ski floats on snow while a thin heel dents a floor: the same force, a different area.",
  seoTitle: "Pressure calculator — p = F ÷ A",
  seoDescription: "Calculate mechanical pressure, force or bearing area from p = F ÷ A in pascals.",
  h1: "Pressure calculator",
  keywords: ["pressure calculator", "force over area", "pascal calculator", "bearing area"],
  howToUse: ["Choose the quantity you need.", "Enter the other two in SI units.", "Read the result — the pressure is also shown in atmospheres."],
  howItWorks: "p = F ÷ A, so F = p · A and A = F ÷ p. One standard atmosphere equals 101,325 Pa.",
  example: "A force of 1000 N spread over 2 m² gives a pressure of 500 Pa.",
  faq: [
    { q: "Why does a wider support press less?", a: "Because the same force is spread over a larger area. Pressure is a ratio, so doubling the area halves the pressure." },
    { q: "Is this gauge or absolute pressure?", a: "It is simply force divided by area. Atmospheric pressure is not added: if you need the absolute value, add 101,325 Pa yourself." },
    { q: "How do I size a footing for a load?", a: "Choose the area mode, enter the force and the permissible pressure of the ground or footing — you get the minimum bearing area required." },
    { q: "Is this the same pressure as in a tyre or a pipe?", a: "The same quantity and unit. But a gauge shows pressure above atmospheric, which is worth remembering when comparing figures." },
  ],
};
