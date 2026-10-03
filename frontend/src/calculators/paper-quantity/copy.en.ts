import { contractContent } from './contractContent';
import type { CalculatorCopy } from '../../lib/platform/types';

export const paperQuantityCopyEn: CalculatorCopy = {
  name: "Paper weight and sheets calculator",
  slug: "paper-weight-and-sheets",
  shortDescription: "Ream mass from sheet size, grammage and sheet count.",
  seoTitle: "Paper weight calculator — by size, grammage and sheet count",
  seoDescription: "Calculate the mass of a paper ream from A0–A6 size, grammage in grams per square metre and the number of sheets.",
  h1: "Paper weight and sheets calculator",
  keywords: ["paper weight", "paper grammage", "gsm", "a4 sheet weight"],
  ...contractContent.en
};
