import type { CalculatorCopy } from '../../lib/platform/types';

export const positionSizeCopyEn: CalculatorCopy = {
  name: "Position size calculator",
  slug: "position-size-calculator",
  shortDescription: "Trade size from the risk you allow per account and the distance to the stop.",
  longDescription:
    "Derives size not from the amount you want to commit but from the amount you can afford to lose: however much is lost on one unit down to the stop, that is how many times the permitted risk fits into it. The position value comes out as a by-product and may well exceed the account — a sign that the stop sits too close rather than an error in the arithmetic, and the share of the account is shown on its own row precisely so that this is visible. Whole units round down: a fractional lot cannot be bought, and rounding up would breach the risk you set.",
  seoTitle: "Position size calculator based on risk",
  seoDescription: "Calculate trade size from the risk allowed per account and the distance between the entry price and the stop, including the account share.",
  h1: "Position size calculator",
  keywords: ["position size calculator", "risk per trade", "trade size from stop loss", "money management calculator"],
  howToUse: [
    "Enter the whole account balance rather than the free margin.",
    "Set the risk allowed on one trade — usually between half a percent and two.",
    "Enter the entry price and the stop price.",
    "Check the account share: above one hundred percent means the stop is too close.",
  ],
  howItWorks:
    "Risk amount = account × permitted risk ÷ 100. Risk per unit = the distance from entry to stop. Size = risk amount ÷ risk per unit, and whole units round down.",
  example: "On a 100000 account at 1% risk with a stop ten points away, the size is 100 units worth 25000.",
  faq: [
    { q: "Why is size derived from the stop rather than the amount invested?", a: "Because what is lost is not the whole position but the distance to the stop. The risk is set in money, and the size follows from it rather than the other way round." },
    { q: "The position is worth more than the account — is that an error?", a: "No, it is a sign the stop sits too close. At a distance of one hundredth of a point the chosen risk demands an enormous size, and the account share says so directly." },
    { q: "Why do whole units round down?", a: "Because rounding up would increase the size, and with it the loss when the stop triggers, above the risk you set." },
    { q: "Are fees and slippage included?", a: "No. Both increase the actual loss, so real risk is a little above the calculated figure." },
    { q: "What risk percentage is considered sensible?", a: "A common reference point is 0.5 to 2% of the account per trade. That is a money-management convention rather than advice — the value is yours to set." },
  ],
};
