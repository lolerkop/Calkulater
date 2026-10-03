import type { CalculatorCopy } from '../../lib/platform/types';

export const cpaCplCpiCopyEn: CalculatorCopy = {
  "name": "CPA, CPL and CPI calculator",
  "slug": "cpa-cpl-cpi-calculator",
  "shortDescription": "Cost per action, lead or install from the budget and the number of actions.",
  "seoTitle": "CPA, CPL and CPI calculator — cost per action",
  "seoDescription": "Calculate the cost per action, per lead or per app install from an advertising budget and the number of actions received.",
  "h1": "CPA, CPL and CPI calculator",
  "keywords": [
    "cpa calculator",
    "cost per lead",
    "cost per install",
    "cost per action"
  ],
  "longDescription": "CPA, CPL and CPI divide spend by an event count, but price different outcomes: a chosen conversion, a confirmed lead or an app install. Define the event and deduplication rule before comparing campaigns. Opening a form is not submitting it, and an install does not prove active use. This tool accepts actual whole event counts; fractional credits from attribution models use a different measurement base.",
  "howItWorks": "CPA, CPL or CPI = spend ÷ the corresponding actions. The selector changes the label, not the division. “Per thousand actions” = cost per action × 1,000: it scales the same metric and is not CPM, which prices impressions. Both spend and the action count must be positive. Two-decimal money rounding does not add precision to the source data; tiny nonzero amounts remain visible.",
  "howToUse": [
    "Choose CPA for a defined conversion, CPL for a lead or CPI for an install; settle the event definition before counting.",
    "Enter actual spend and decide beforehand whether agency fees and other costs are included.",
    "Enter a positive whole count from the same campaign, no more than 9,007,199,254,740,991.",
    "Match the period, attribution window and duplicate rule. Use one currency for all money values; the calculator applies no exchange rate and does not estimate profit."
  ],
  "example": "Spend of 84,000 for 320 leads gives CPL = 84,000 ÷ 320 = 262.50. One thousand such leads at the same average price would cost 262,500. With zero leads the price cannot be calculated. With spend of 10,000, counting 100 form opens gives 100 per open, while counting 50 submitted leads gives 200 per lead.",
  "faq": [
    {
      "q": "How do CPA, CPL and CPI differ?",
      "a": "CPA prices the chosen conversion, CPL a lead and CPI an install. CPA may refer to a purchase or another action, so it need not exceed CPL. Compare the cost of the same defined event."
    },
    {
      "q": "Should agency fees be included?",
      "a": "You may measure media spend alone or a broader cost including fees and other expenses. Name that scope and apply it consistently across campaigns. The calculator does not decide which costs belong in it."
    },
    {
      "q": "Why do the platform and CRM show different costs?",
      "a": "Check attribution windows and models, click dates versus event dates, confirmation status, duplicate rules and cost scope. The difference can run either way; CRM costs are not always higher."
    },
    {
      "q": "Is a lower action cost always better?",
      "a": "No. Cheap leads may convert into paying customers less often, and installs may not become active users. Read CPL beside the lead-to-customer rate and CPI beside retention. Increasing the budget does not guarantee a rise in average action cost."
    }
  ],
  "disclaimer": "Average cost of a defined event from supplied spend. Does not estimate profit, lead quality, attribution or currency exchange."
};
