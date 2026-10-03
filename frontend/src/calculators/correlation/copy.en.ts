import { mathWave8ContractContent } from './contractContent';
import type { CalculatorCopy } from '../../lib/platform/types';

export const correlationCopyEn: CalculatorCopy = {
  name: "Correlation coefficient calculator",
  slug: "correlation-coefficient-calculator",
  shortDescription: "Pearson correlation for two series, together with the regression line.",
  seoTitle: "Pearson correlation coefficient calculator",
  seoDescription: "Calculate the Pearson correlation coefficient, coefficient of determination, covariance and regression line from two series of values.",
  h1: "Correlation coefficient calculator",
  keywords: ["correlation coefficient calculator", "pearson correlation", "regression line", "coefficient of determination"],
  ...mathWave8ContractContent.en,
};
