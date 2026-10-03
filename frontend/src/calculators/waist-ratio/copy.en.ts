import type { CalculatorCopy } from '../../lib/platform/types';

export const waistRatioCopyEn: CalculatorCopy = {
  "name": "Waist ratio calculator",
  "slug": "waist-ratio",
  "shortDescription": "WHtR and WHR with measurement protocol and conditional NICE adult-screening boundaries.",
  "longDescription": "Calculates two dimensionless ratios: waist-to-height (WHtR) and waist-to-hip (WHR). The category applies only to WHtR and describes central-adiposity screening, not overall health. These NICE boundaries are for adults with BMI below 35: 0.4–<0.5 without increased central adiposity, 0.5–<0.6 increased, 0.6 and above high. BMI is not calculated in this form, so check that condition separately. Values below 0.4 lie outside these three categories and do not become an underweight diagnosis.",
  "seoTitle": "Waist-to-height and waist-to-hip ratio calculator",
  "seoDescription": "WHtR and WHR with measurement protocol and conditional NICE adult-screening boundaries.",
  "h1": "Waist ratio calculator",
  "keywords": [
    "waist to height ratio",
    "waist to hip ratio",
    "WHtR calculator",
    "waist measurement health"
  ],
  "howToUse": [
    "Find the bottom ribs and top of the hips; measure waist midway between them after a natural exhalation.",
    "Keep the tape horizontal without compressing skin or holding your stomach in.",
    "Measure the widest hip circumference and height without shoes; enter centimetres.",
    "Read the category as conditional adult screening at BMI<35, not a personal medical verdict."
  ],
  "howItWorks": "WHtR = waist/height; WHR = waist/hip. Category uses unrounded WHtR: 0.4≤r<0.5; 0.5≤r<0.6; r≥0.6. Exact 0.5 and 0.6 enter the next band. Displayed ratios are rounded; the category interval shows the side of the threshold used by the actual ratio.",
  "example": "84 cm/178 cm=0.4719; with 100 cm hips, WHR=0.84.80 cm/160 cm=0.5 already enters the increased band; 79 cm/160 cm=0.4938 is below 0.5. Very close values can display alike after rounding; classification occurs beforehand.",
  "faq": [
    {
      "q": "Where should waist be measured for these WHtR boundaries?",
      "a": "NICE uses the midpoint between bottom ribs and top hips after a natural exhalation. The narrowest point or navel need not match it; do not mix measurement protocols."
    },
    {
      "q": "Why use WHtR alongside ordinary BMI?",
      "a": "BMI describes weight relative to height; WHtR describes abdominal circumference relative to height. NICE uses it as additional screening in adults with BMI<35. Neither figure alone confirms health."
    },
    {
      "q": "Are these WHtR boundaries the same for different people?",
      "a": "The cited NICE adult categories apply across sexes and ethnicities with BMI<35. That does not guarantee equal personal risk; pregnancy and other circumference changes need another context."
    },
    {
      "q": "Why is WHR shown without a sex category?",
      "a": "Waist-to-hip is a separate measure with different conditions and thresholds. This form does not ask sex and shows WHR arithmetic only, without a verdict based on a hidden assumption."
    },
    {
      "q": "What should an increased waist category mean next?",
      "a": "It is a reason to discuss further assessment with a healthcare professional, not an independent diagnosis or treatment plan. A category without increase does not rule out other risk factors."
    }
  ],
  "disclaimer": "Circumference ratios and conditional adult WHtR screening at BMI<35. Not an overall-health diagnosis; pregnancy and abdominal-circumference-changing conditions need separate assessment."
};
