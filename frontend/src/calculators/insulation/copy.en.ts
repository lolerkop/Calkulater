import type { CalculatorCopy } from '../../lib/platform/types';

export const insulationCopyEn: CalculatorCopy = {
  name: 'Insulation calculator',
  slug: 'insulation-calculator',
  shortDescription: 'Insulation volume, number of slabs and packs from area and thickness.',
  longDescription:
    'Works out how much insulation an area needs at a chosen thickness: the volume in cubic metres, the number of slabs and the number of packs. The slab size and the count per pack stay fields — they differ between manufacturers, and hard-coding one catalogue would present a particular case as a standard. Slabs and packs round up, but the rounding is protected against binary noise: an area that fits exactly will not demand one more slab.',
  seoTitle: 'Insulation calculator — volume, slabs and packs',
  seoDescription: 'Calculate the insulation volume, the number of slabs and the number of packs from the area and the layer thickness.',
  h1: 'Insulation calculator',
  keywords: ['insulation calculator', 'how much insulation', 'insulation per m2', 'mineral wool calculator'],
  howToUse: ['Enter the area and the thickness of insulation.', 'Give the slab size and the slabs per pack from the label.', 'Read the volume, the slabs and the packs.'],
  howItWorks:
    'The volume is the area multiplied by the layer thickness converted from millimetres to metres. The number of slabs is the area divided by one slab area and rounded up; packs follow the same way from the slab count.',
  example: '60 m² at a 100 mm layer is 6 m³ of insulation: 84 slabs of 0.72 m², which is 14 packs of six.',
  faq: [
    { q: 'Why does the slab count round up?', a: 'Because half a slab cannot be bought and partial coverage is not coverage. When the area fits exactly no extra slab is added — the rounding is protected against binary rounding error.' },
    { q: 'Where do the slab area and pack count come from?', a: 'From the label: they differ between manufacturers and formats. The defaults match a common 1200 × 600 mm slab, but that is an assumption rather than a standard.' },
    { q: 'Do I need an allowance for cutting?', a: 'On complicated surfaces, yes. Increase the area by 5–10 % before calculating — there is deliberately no separate field, so that area and allowance are not mixed up.' },
    { q: 'Can it handle two layers?', a: 'Yes, just enter the combined thickness. The volume is the same; the slab count depends on the format you actually buy.' },
  ],
};
