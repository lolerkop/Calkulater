import type { CalculatorCopy } from '../../lib/platform/types';

export const budgetSplitCopyEn: CalculatorCopy = {
  name: "Shared budget split calculator",
  slug: "budget-split",
  shortDescription: "Splits a shared amount between people equally or in proportion to income.",
  longDescription:
    "Takes one amount and divides it between people, either equally or in proportion to what each of them earns. Each line is a name and an income, and the last number on the line is read as the income while everything before it counts as the name. The shares are then rounded to whole cents and the remainder is added to the largest share, so the contributions always add up to exactly the amount you entered — a table whose column does not sum to the total is a table nobody should trust.",
  seoTitle: "Shared budget split calculator: equally or by income",
  seoDescription: "Split rent, bills or a shared purchase between people equally or in proportion to income, with shares that always add up to the total.",
  h1: "Shared budget split calculator",
  keywords: ["split expenses calculator", "shared budget split", "split rent by income", "proportional cost sharing"],
  howToUse: [
    "Enter the amount you need to split.",
    "List the participants one per line: a name and an income.",
    "Choose whether to split equally or in proportion to income.",
    "Check the table: the contributions add up to the amount exactly.",
  ],
  howItWorks:
    "Equally: each share is the amount divided by the number of participants. In proportion: each share is the amount multiplied by that person's income and divided by the total income. Shares are rounded to cents and the rounding remainder goes to the largest share.",
  example: "60,000 split between incomes of 80,000 and 120,000 comes to 24,000 and 36,000.",
  faq: [
    { q: "Why does the largest share get the odd cent?", a: "Because the rounded shares have to add up to the amount you entered. A hundred split three ways is 33.333… each, and three times 33.33 is 99.99 — the missing cent has to land somewhere, and the largest share absorbs it least noticeably." },
    { q: "Can I split equally without entering incomes?", a: "Enter any number as the income — in equal mode it is ignored and only the names are used. The income column still shows what you typed." },
    { q: "What if someone earns nothing?", a: "In equal mode that is fine. In proportional mode a person with zero income gets a zero share, and if everyone earns nothing the calculation stops rather than dividing by zero." },
    { q: "Can names contain spaces?", a: "Yes. Only the last number on the line is read as the income; everything before it is the name, so «John Smith 90000» parses correctly." },
    { q: "Is this the same as a 50/30/20 budget?", a: "No. That one splits one person's income between categories of spending. This one splits one amount between several people." },
  ],
};
