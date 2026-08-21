import type { CalculatorCopy } from '../../lib/platform/types';

export const utilityTotalCopyEn: CalculatorCopy = {
  name: "Utility bills calculator",
  slug: "utility-bills",
  shortDescription: "Adds up metered utilities and fixed charges into one monthly total.",
  longDescription:
    "Turns a list of meter readings and tariffs into one monthly bill. Each line is a service, the amount used and the price per unit, and the last two numbers are read as usage and tariff while everything before them counts as the name. Fixed charges — the ones with no meter behind them — go into a separate field rather than the table, because inventing a unit and a tariff for them would only make the table look tidier than it is. The result splits the bill into the metered part and the fixed part, which is usually where the surprise lives.",
  seoTitle: "Utility bills calculator: meters, tariffs and fixed charges",
  seoDescription: "Add up electricity, water and gas from meter readings and tariffs, plus fixed charges, into one monthly total.",
  h1: "Utility bills calculator",
  keywords: ["utility bills calculator", "monthly utilities total", "meter readings cost", "electricity water gas bill"],
  howToUse: [
    "Enter one service per line: name, usage and tariff.",
    "The last two numbers on the line are the usage and the price per unit.",
    "Put charges without a meter into the fixed field.",
    "Compare the metered part with the fixed part in the result.",
  ],
  howItWorks:
    "Each line costs usage × tariff. Their sum is the metered part; adding the fixed charges gives the monthly total, and multiplying by twelve gives the year.",
  example: "Electricity, water and gas at 2,023 plus 1,200 of fixed charges come to 3,223 a month.",
  faq: [
    { q: "What counts as a fixed charge?", a: "Anything billed the same every month regardless of use: building maintenance, waste collection, the entryphone, a rented meter. They have no usage and no tariff, so they do not belong in the table." },
    { q: "Which units should usage be in?", a: "Whatever the tariff is per. If electricity is priced per kWh, enter kilowatt-hours; if water is priced per cubic metre, enter cubic metres." },
    { q: "How do I enter a two-rate electricity meter?", a: "As two lines — day and night — each with its own usage and tariff. The table will show which of the two costs more." },
    { q: "Why is the yearly figure just twelve times the month?", a: "Because it is a projection of this month, not a forecast. Heating and air conditioning make real years uneven; the calculator does not pretend to know your season." },
    { q: "Is this the same as the electricity usage calculator?", a: "No. That one takes an appliance's power and hours to estimate consumption. This one takes readings you already have and turns them into money." },
  ],
};
