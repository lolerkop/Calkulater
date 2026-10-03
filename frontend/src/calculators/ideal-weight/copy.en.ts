import type { CalculatorCopy } from '../../lib/platform/types';

export const idealWeightCopyEn: CalculatorCopy = {
  "name": "Ideal weight calculator",
  "slug": "ideal-weight",
  "shortDescription": "Compare Devine, Robinson, Miller and Hamwi with adult BMI boundaries, without prescribing a target.",
  "longDescription": "Compares four historical reference-weight equations: Devine (1974), Robinson and Miller (1983), and Hamwi (1964). They use height and published sex-specific constants, without body composition, illness or personal goals. Their average is a comparison statistic; their spread is not a confidence interval. Separate weight boundaries for BMI 18.5 and 25 describe an adult screening category for ages 20 and over. Neither this interval nor a point equation confirms health or sets a desired weight.",
  "seoTitle": "Weight estimates by height — Devine, Robinson, Miller, Hamwi",
  "seoDescription": "Compare Devine, Robinson, Miller and Hamwi with adult BMI boundaries, without prescribing a target.",
  "h1": "Ideal weight calculator",
  "keywords": [
    "ideal weight calculator",
    "Devine formula",
    "ideal body weight",
    "healthy weight for height"
  ],
  "howToUse": [
    "Choose the published sex-specific constant set.",
    "Enter 152.4–230 cm; these equations are used here from five feet.",
    "Compare methods without turning the average into a weight-loss plan.",
    "Read the upper BMI boundary as excluded: weight must be below it."
  ],
  "howItWorks": "x = height/2.54 − 60 inches. Men: Devine 50+2.3 x; Robinson 52+1.9 x; Miller 56.2+1.41 x kg; Hamwi (106+6 x) lb. Women: 45.5+2.3 x; 49+1.7 x; 53.1+1.36 x kg; (100+5 x) lb. 1 lb =0.45359237 kg. Average = sum/4. With h in metres, BMI interval: 18.5 h² ≤ weight <25 h².",
  "example": "A man at 180 cm: Devine 74.992 kg, Miller 71.521 kg, Hamwi 77.654 kg; average 74.203 kg. BMI boundaries are 59.94 kg included and 81 kg excluded. Heights below 152.4 cm receive an applicability error rather than a constant weight.",
  "faq": [
    {
      "q": "Which reference-weight result should be my target?",
      "a": "None automatically. Averaging four historical estimates does not create a personal recommendation. This tool compares methods and does not calculate treatment targets or medicine doses."
    },
    {
      "q": "Why do BMI boundaries differ from reference-weight equations?",
      "a": "BMI produces an interval using height squared; the named equations produce individual linear points. At 180 cm, 81 kg is BMI 25 and is outside the stated interval."
    },
    {
      "q": "Do these weight equations account for muscle?",
      "a": "No. Height and constants do not measure body composition. High muscle mass can explain disagreement but cannot by itself establish health."
    },
    {
      "q": "Why do reference equations offer two sex sets?",
      "a": "Those are their published constant sets. The choice selects coefficients rather than assessing an individual’s identity or physiology; there is no third validated set here."
    },
    {
      "q": "How does this comparison differ from ordinary BMI?",
      "a": "Ordinary BMI uses actual weight. This tool derives weights from height. Children, pregnancy and treatment require other assessment methods; equal height does not mean equal needs."
    }
  ],
  "disclaimer": "Reference-equation comparison, not a personal target, diagnosis or dosage. BMI boundaries are for adults 20 and over, not child or pregnancy standards."
};
