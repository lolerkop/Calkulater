import type { CalculatorCopy } from '../../lib/platform/types';

export const activityCaloriesCopyEn: CalculatorCopy = {
  "name": "Exercise calorie calculator",
  "slug": "exercise-calorie-calculator",
  "shortDescription": "Gross session calories from MET, with a 1 MET reference and its difference over the same time.",
  "longDescription": "Estimates gross energy over a session, including resting expenditure during the same minutes. Presets describe specific activities in the 2024 Adult Compendium for ages 19–59: walking for pleasure, general cycling, medium crawl swimming and running at about 9.7–10.1 km/h. These are group reference values, not a measurement of your metabolism. Extra rows show the standard 1 MET expenditure and the difference from it, helping explain why a session total cannot automatically be added to a daily estimate that already includes activity.",
  "seoTitle": "Activity calorie calculator — MET, weight and time",
  "seoDescription": "Gross session calories from MET, with a 1 MET reference and its difference over the same time.",
  "h1": "Exercise calorie calculator",
  "keywords": [
    "exercise calorie calculator",
    "calories burned running",
    "calories burned cycling",
    "met calorie calculator"
  ],
  "howToUse": [
    "Choose the closest activity description; use custom MET for another effort.",
    "Enter kilograms and minutes spent at that intensity.",
    "Calculate changing-intensity sections separately and add their energy.",
    "Compare the total with 1 MET over the same interval."
  ],
  "howItWorks": "E = MET × 3.5 × m / 200 × t, with m in kg, t in minutes and E in kcal. Standard 1 MET = 3.5 mL oxygen/kg/min; conversion assumes about 5 kcal per litre of oxygen. E₁ = 3.5 mt/200; difference = E − E₁. Preset codes: 17160 — 3.5; 01014 — 7; 18290 — 8; 12050 — 9.3 MET. The main total and hourly expenditure round to whole kcal except small nonzero values. Below 1 MET the difference from 1 MET is negative: it compares models, rather than a negative total expenditure.",
  "example": "Cycling: 70 kg, 45 min, 7 MET →386 kcal (385.875 before rounding). Standard 1 MET over those minutes is 55.125 kcal; the difference is 330.75 kcal. At 1 MET, 70 kg and 60 min the total is 73.5 kcal before rounding (74 kcal displayed) and the difference is zero.",
  "faq": [
    {
      "q": "What does MET mean for activity energy?",
      "a": "It is a ratio to standard resting expenditure. 7 MET means seven times that standard expenditure over the same time, not seven additional resting expenditures."
    },
    {
      "q": "Why is weight a multiplier in the MET equation?",
      "a": "At fixed MET and time, changing 70 to 90 kg multiplies the estimate by 90/70. This is a model relationship, not proof of two individuals’ measured expenditure."
    },
    {
      "q": "How should I choose MET for another pace?",
      "a": "Match speed, surface, technique and effort to a source description. 8 MET crawl here is about 45.7 m/min, not every swim. There is no universal error percentage."
    },
    {
      "q": "Does the session total include rest?",
      "a": "Yes. It is gross energy. The 1 MET row shows the assumed resting reference over those minutes and the next row its difference. Your own resting expenditure can differ."
    },
    {
      "q": "Can I add all session calories to daily expenditure?",
      "a": "Check what the daily estimate already includes. Adding the whole total can count rest and routine activity twice. Even the 1 MET difference is not a measured dietary deficit."
    }
  ],
  "disclaimer": "Reference MET estimate for adults; the 2024 presets cover ages 19–59. It does not measure personal metabolism or prescribe diet or exercise."
};
