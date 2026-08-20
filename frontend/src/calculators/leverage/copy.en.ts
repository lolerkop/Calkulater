import type { CalculatorCopy } from '../../lib/platform/types';

export const leverageCopyEn: CalculatorCopy = {
  name: 'Leverage calculator',
  slug: 'leverage-calculator',
  shortDescription: 'Position size, liquidation price and the distance to it.',
  longDescription:
    'Leverage multiplies the position and divides the room for error by the same number, and the second half is the one people underestimate. The inverse of the leverage is the whole cushion: at five times, a twenty per cent move against the position wipes out the margin; at twenty times, five per cent does it. The maintenance margin then moves the liquidation price closer still, because an exchange closes a position slightly before the equity actually reaches zero rather than after. This calculator shows the position, that liquidation price and the percentage drop that reaches it.',
  seoTitle: 'Leverage calculator — position size and liquidation',
  seoDescription:
    'Calculate a leveraged position size, its liquidation price and the percentage drop that reaches it, from margin, leverage and maintenance margin.',
  h1: 'Leverage calculator',
  keywords: ['leverage calculator', 'liquidation price', 'position size', 'maintenance margin'],
  howToUse: [
    'Enter the margin you are putting up.',
    'Enter the leverage multiple.',
    'Enter the entry price of the instrument.',
    'Enter the maintenance margin required by the venue.',
  ],
  howItWorks:
    'Position = margin × leverage. The liquidation price is the entry price times one minus the inverse of the leverage plus the maintenance margin, and the drop to it follows from the two prices.',
  example: 'Margin of 50,000 at 5× on an entry of 2,400 with 0.5% maintenance liquidates at 1,932.',
  faq: [
    {
      q: 'Why does higher leverage bring liquidation so much closer?',
      a: 'Because the cushion is the inverse of the leverage. Doubling leverage halves the move you can survive, and the effect compounds fast at the high end: 100× leaves one per cent.',
    },
    {
      q: 'What is the maintenance margin for?',
      a: 'It is the equity floor a venue insists on. Liquidation happens when equity falls to that floor, not to zero, so the price that triggers it is always a little closer than the naive calculation suggests.',
    },
    {
      q: 'Does this apply to short positions too?',
      a: 'The arithmetic mirrors, but the direction reverses: a short is liquidated by a rise, not a fall. This calculation is written for a long position.',
    },
    {
      q: 'Are funding and fees included?',
      a: 'No. Funding payments, borrowing costs and trading fees all erode the margin over time and pull the real liquidation price closer than the figure shown here.',
    },
  ],
};
