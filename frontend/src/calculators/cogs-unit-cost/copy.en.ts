import type { CalculatorCopy } from '../../lib/platform/types';

export const cogsUnitCostCopyEn: CalculatorCopy = {
  name: 'Unit cost calculator',
  slug: 'unit-cost-calculator',
  shortDescription: 'Cost of a single produced unit from materials, labour and overhead.',
  longDescription:
    'Unit cost is the total of three cost groups divided by the size of the run. Materials and labour scale with the batch, overhead usually does not, which is why the same product gets cheaper per unit as the run grows. The materials share shown next to the result answers a different question: what the cost actually depends on. A run where materials are ninety per cent of the total tracks raw-material prices almost one for one, while a run at thirty per cent barely moves — and savings there have to come from somewhere else.',
  seoTitle: 'Unit cost calculator — cost per produced unit',
  seoDescription:
    'Calculate the cost of one produced unit from materials, labour and overhead, together with the total cost and the share of materials.',
  h1: 'Unit cost calculator',
  keywords: ['unit cost calculator', 'cost per unit', 'production cost', 'materials share'],
  howToUse: [
    'Enter the cost of materials for the whole run.',
    'Enter the labour cost for the same run.',
    'Enter the overhead allocated to the run.',
    'Enter how many units the run produced.',
  ],
  howItWorks:
    'Cost per unit = (materials + labour + overhead) ÷ units. The materials share is materials divided by the total cost, shown as a percentage.',
  example: 'Materials 240,000, labour 96,000 and overhead 54,000 across 1,500 units give 260 per unit.',
  faq: [
    {
      q: 'Which costs belong in overhead here?',
      a: 'Everything the run consumed without being part of the product: rent for the production floor, equipment depreciation, supervision. Company-wide costs such as marketing usually do not belong in the unit cost.',
    },
    {
      q: 'Why does the unit cost fall when the run gets bigger?',
      a: 'Overhead is largely fixed, so spreading it over more units lowers the per-unit figure even when materials and labour per unit stay exactly the same.',
    },
    {
      q: 'Should defective units be counted in the run size?',
      a: 'No. Divide by the units you can actually sell — scrap is a cost, not output. Counting it as output understates the true cost of every sellable unit.',
    },
    {
      q: 'Is this the price I should charge?',
      a: 'No, it is the floor. Selling and delivery costs, taxes and the margin all sit on top; this figure only tells you where losing money begins.',
    },
  ],
};
