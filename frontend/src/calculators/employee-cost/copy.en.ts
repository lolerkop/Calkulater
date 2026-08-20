import type { CalculatorCopy } from '../../lib/platform/types';

export const employeeCostCopyEn: CalculatorCopy = {
  name: 'Employee cost calculator',
  slug: 'employee-cost-calculator',
  shortDescription: 'Full cost of an employee including contributions and overhead.',
  longDescription:
    'The salary is what the employee sees; the business pays considerably more. Employer contributions are added on top of the salary rather than deducted from it, so a rate of thirty per cent adds a third rather than taking one away — the direction is the single most common mistake in a hiring budget. Overhead covers the workspace, equipment, software and training, and it is usually unrelated to the salary, which is why it is entered as an amount rather than a percentage. The multiple shown at the end is the one number worth remembering: plan a hire on salary alone and you will be out by close to half.',
  seoTitle: 'Employee cost calculator — true cost of a hire',
  seoDescription:
    'Calculate the full cost of an employee from gross salary, employer contribution rate and overhead, with the resulting multiple of salary.',
  h1: 'Employee cost calculator',
  keywords: ['employee cost calculator', 'payroll contributions', 'overhead per employee', 'cost of hiring'],
  howToUse: [
    'Enter the gross salary for the period.',
    'Enter the employer contribution rate that applies on top of it.',
    'Enter overhead for the same period as an amount.',
    'Use the same period throughout — monthly or yearly, not mixed.',
  ],
  howItWorks:
    'Contributions = salary × rate ÷ 100. Total = salary + contributions + overhead. The multiple is the total divided by the salary.',
  example: 'A salary of 180,000 with 30% contributions and 25,000 of overhead costs 259,000 — 1.44 times the salary.',
  faq: [
    {
      q: 'Are contributions added to the salary or taken out of it?',
      a: 'Added. Income tax is withheld from the employee\'s salary, but employer contributions sit on top of it and never appear on the payslip.',
    },
    {
      q: 'What belongs in overhead?',
      a: 'Desk space, equipment, software licences, training, recruitment amortised over the stay. Anything the business would stop paying if the role disappeared.',
    },
    {
      q: 'Why is the multiple useful?',
      a: 'Because it converts any salary into a budget figure instantly. Once you know your organisation runs at about 1.4, a 200,000 offer is a 280,000 commitment without further arithmetic.',
    },
    {
      q: 'Does this include paid leave?',
      a: 'Not separately. Leave is already inside an annual salary; if you work per month, remember that the business pays twelve months for eleven of output.',
    },
  ],
};
