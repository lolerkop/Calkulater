import type { CalculatorCopy } from '../../lib/platform/types';
import { exchangeFeeContractContent } from './contractContent';

export const currencyExchangeFeeCopyEn: CalculatorCopy = {
  name: "Currency exchange cost calculator",
  slug: "currency-exchange-cost-calculator",
  shortDescription: "What an exchange really costs: spread, percentage fee and flat charge together.",
  seoTitle: "Currency exchange cost calculator with spread",
  seoDescription: "Calculate what is left after a currency exchange, allowing for the spread, a percentage commission and a flat charge at a given rate.",
  h1: "Currency exchange cost calculator",
  keywords: ["currency exchange cost calculator", "exchange spread calculator", "currency conversion fee", "how much exchange costs"],
  ...exchangeFeeContractContent.en,
};
