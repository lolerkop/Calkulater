import type { CalculatorCopy } from '../../lib/platform/types';

export const roofBattensCopyEn: CalculatorCopy = {
  name: "Roof batten calculator",
  slug: "roof-battens",
  shortDescription: "Running metres, battens and timber volume for roof battening.",
  longDescription:
    "Counts battening from the roof area rather than its length, because the spacing is what decides how many running metres each square metre takes. That ratio — one divided by the spacing — is printed as its own line, since it is the number people actually use when estimating on site. Battens round up: a length of timber is sold whole. The volume comes from the running metres and the section in millimetres, which is how sawn timber is ordered — by the cubic metre, not by the piece.",
  seoTitle: "Roof batten calculator: metres, pieces and volume",
  seoDescription: "Work out the running metres, number of battens and timber volume for a roof from its area and batten spacing.",
  h1: "Roof batten calculator",
  keywords: ["roof batten calculator", "batten spacing", "roof timber volume", "battens per square metre"],
  howToUse: [
    "Enter the roof area — the sloped area, not the footprint.",
    "Enter the batten spacing your covering requires.",
    "Enter the length and section of the battens you are buying.",
    "Add an allowance for cuts and joints.",
  ],
  howItWorks:
    "Running metres are the area divided by the spacing, plus the allowance. Battens are that length divided by one batten, rounded up, and the volume is the running metres times the section.",
  example: "60 m² at 350 mm spacing with 10 % allowance takes 188.57 m, which is 32 six-metre battens.",
  faq: [
    { q: "Should I use the roof area or the floor area?", a: "The roof area — the actual sloped surface. A roof at 30° is about 15 % larger than the building it covers, and the roof area calculator will give you that figure." },
    { q: "What spacing should I use?", a: "It is set by the covering: tiles fix the spacing to their own gauge, metal sheet is usually 350–500 mm, and soft coverings need solid decking instead of battens." },
    { q: "Why is the volume useful?", a: "Because sawn timber is priced and delivered by the cubic metre. Running metres tell you what to lay; volume tells you what to order." },
    { q: "Are the counter-battens included?", a: "No. If your roof has a ventilated gap, the counter-battens run the other way at the rafter spacing and are a separate count." },
    { q: "Why round the battens up so aggressively?", a: "Because they are not rounded aggressively — the length is divided by one piece and rounded up once. Every cut leaves a stub, which is what the allowance is for." },
  ],
};
