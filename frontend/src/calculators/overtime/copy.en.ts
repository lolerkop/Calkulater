import type { CalculatorCopy } from '../../lib/platform/types';

export const overtimeCopyEn: CalculatorCopy = {
  name: 'Overtime pay calculator',
  slug: 'overtime-pay-calculator',
  shortDescription: 'Monthly pay with overtime hours and the effective hourly rate.',
  longDescription:
    'Overtime pay is the ordinary rate multiplied by a premium, applied only to the hours beyond the normal schedule. The effective hourly rate shown next to the total is the part worth reading: it divides everything earned by every hour worked, and it rises far less than the multiplier suggests. Fourteen overtime hours at time and a half on top of a hundred and sixty regular ones lift the effective rate by four per cent, not fifty. That gap is exactly what makes overtime look better in a contract than it feels in a payslip.',
  seoTitle: 'Overtime pay calculator — total and effective rate',
  seoDescription:
    'Calculate monthly pay from an hourly rate, regular and overtime hours and the overtime multiplier, together with the effective hourly rate.',
  h1: 'Overtime pay calculator',
  keywords: ['overtime pay calculator', 'time and a half', 'effective hourly rate', 'overtime multiplier'],
  howToUse: [
    'Enter the ordinary hourly rate.',
    'Enter the regular hours worked in the period.',
    'Enter the overtime hours separately.',
    'Enter the multiplier your contract applies — 1.5 and 2 are the common ones.',
  ],
  howItWorks:
    'Regular pay = rate × regular hours. Overtime pay = rate × multiplier × overtime hours. The effective rate divides the total by all hours worked.',
  example: 'At 650 an hour, 160 regular and 14 overtime hours at 1.5 come to 117,650 — an effective 676.15 an hour.',
  faq: [
    {
      q: 'Why is the effective rate so much lower than the multiplier?',
      a: 'Because the premium applies only to the overtime hours but the average divides by all of them. A small block of premium hours moves the average very little.',
    },
    {
      q: 'Which overtime multiplier applies to me?',
      a: 'Whatever the contract or local law sets. Time and a half for the first hours and double thereafter is a widespread pattern, but the exact rule varies by jurisdiction and by employer.',
    },
    {
      q: 'Are the figures before or after tax?',
      a: 'Before. This is gross pay; income tax and contributions are applied afterwards and are outside the calculation.',
    },
    {
      q: 'Why is a multiplier below one rejected?',
      a: 'Because an overtime hour cannot be worth less than an ordinary one. A value under one means a typing mistake rather than an unusual contract.',
    },
  ],
};
