import { contractContent } from './contractContent';
import type { CalculatorCopy } from '../../lib/platform/types';

export const gpaCopyEn: CalculatorCopy = {
  name: "GPA calculator",
  slug: "gpa-calculator",
  shortDescription: "Grade point average weighted by credits, alongside the unweighted mean for comparison.",
  seoTitle: "GPA calculator weighted by credits",
  seoDescription: "Calculate a grade point average from a list of grades with weights and compare it against the unweighted mean.",
  h1: "GPA calculator",
  keywords: ["gpa calculator", "weighted grade average", "grade point average credits", "how to calculate gpa"],
  ...contractContent.en
};
