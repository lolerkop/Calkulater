import type { CalculatorCopy } from '../../lib/platform/types';

export const sealantVolumeCopyEn: CalculatorCopy = {
  name: "Sealant volume calculator",
  slug: "sealant-volume",
  shortDescription: "Sealant needed for a joint of a given section, and how many cartridges that is.",
  longDescription:
    "The real question in the shop is not \"how many millilitres\" but \"will one cartridge do it\". So next to the volume sits a row for how many metres of joint one cartridge fills: at a six-by-six section an ordinary cartridge runs about eight and a half metres, at ten-by-eight less than four. The arithmetic is convenient: a millimetre by a millimetre by a metre gives exactly one millilitre.",
  seoTitle: "Sealant calculator — volume and number of cartridges",
  seoDescription: "Work out the sealant needed from the width, depth and length of the joint, with the number of cartridges and metres per cartridge.",
  h1: "Sealant volume calculator",
  keywords: ["sealant volume", "sealant cartridge", "joint section", "silicone sealant"],
  howToUse: [
    "The joint depth is usually equal to the width or half of it — deeper sealant works worse and cracks.",
    "A standard cartridge is 310 ml, a sausage for a gun 600 ml, small packs 80 and 100 ml.",
    "A 10 per cent allowance covers trimming the nozzle, the first uneven bead and irregularities in the joint.",
    "Wide joints take a backer rod first: it limits the depth and saves sealant.",
  ],
  howItWorks: "Volume = width × depth × length; a millimetre by a millimetre by a metre gives exactly a millilitre; cartridges are rounded up.",
  example: "A 6×6 mm joint 12 m long needs 475 ml with allowance — two 310 ml cartridges.",
  faq: [
    { q: "Why not make the joint deeper than it is wide?", a: "Sealant works in tension, and too deep a joint stops it stretching: it tears at the edge. The rule is simple — depth equals width, and half the width for wide joints." },
    { q: "What is a backer rod for?", a: "It limits the depth from below and keeps the sealant from bonding to a third surface. A bead stuck on three sides cannot stretch freely and is the first to crack." },
    { q: "How accurate is the figure?", a: "The calculation gives the geometry of the joint. Real use runs higher for nozzle trimming, the first uneven bead and what stays in the cartridge — which is what the allowance covers." },
    { q: "Can I tell how many doorways one cartridge does?", a: "The \"metres per cartridge\" row does it directly: divide it by the perimeter of your opening." },
  ],
};
