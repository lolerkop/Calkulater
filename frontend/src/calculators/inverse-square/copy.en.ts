import type { CalculatorCopy } from '../../lib/platform/types';

export const inverseSquareCopyEn: CalculatorCopy = {
  name: "Inverse square law calculator",
  slug: "inverse-square-law",
  shortDescription: "How intensity falls with distance from a point source.",
  longDescription:
    "Stepping twice as far away leaves you a quarter, not a half: the energy spreads over a sphere whose area grows as the square of the radius. That is the counter-intuitive heart of the law, and the reason a lamp moved back \"only a little\" leaves the room dark. Intensity units are deliberately unspecified — the law is the same for lux, watts per square metre and radiation doses; all that matters is that both distances share one measure.",
  seoTitle: "Inverse square law calculator — intensity and distance",
  seoDescription: "Calculate how illuminance, loudness or radiation level changes when moved to another distance from the source.",
  h1: "Inverse square law calculator",
  keywords: ["inverse square law", "intensity and distance", "illuminance", "level falloff"],
  howToUse: [
    "Intensity units are up to you but the same in both fields: lux, watts per square metre, microsieverts per hour.",
    "Both distances share one measure too — only their ratio enters the formula.",
    "The law describes a point source in a transparent medium. A spotlight with a reflector and a laser do not obey it.",
    "For sound it gives a drop of about 6 dB per doubling of distance.",
  ],
  howItWorks: "I₂ = I₁ · (d₁ / d₂)².",
  example: "1000 lux at one metre becomes 111.11 lux at three metres.",
  faq: [
    { q: "Why a square specifically?", a: "The source shines in every direction, and all its energy crosses a sphere around it. A sphere's area is 4πr², growing as the square of the radius — so each unit of area is left with that much less." },
    { q: "Why does it fail for a spotlight?", a: "The reflector gathers the light into a beam, so the energy spreads through a narrow cone rather than a sphere. The tighter the beam, the slower the falloff; for a laser at household distances it barely falls at all." },
    { q: "Does sound really obey it?", a: "Outdoors and away from reflecting surfaces, yes — that is the familiar 6 dB per doubling. Indoors, reflections off the walls noticeably break the picture." },
    { q: "What if the new distance is smaller?", a: "The calculation still holds and returns a rise in intensity. The only limit is that both distances must be above zero: at the source point itself the law goes to infinity." },
  ],
};
