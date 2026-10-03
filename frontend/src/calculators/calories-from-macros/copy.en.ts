import type { CalculatorCopy } from '../../lib/platform/types';

export const caloriesCopyEn: CalculatorCopy = {
  "name": "Calories from macros calculator",
  "slug": "calories-from-macros-calculator",
  "shortDescription": "Energy from macro grams using 4/9/4 and calorie shares, with fibre and labelling limits.",
  "longDescription": "Calculates energy from supplied protein, fat and carbohydrate grams using general 4/9/4 factors, with each component’s contribution. It is food-energy accounting, not a measurement of personal absorption or a diet plan. For carbohydrate use grams you intend to count at 4 kcal/g; fibre and polyols may require different factors and are not calculated separately here. Shares describe energy percentage rather than mass percentage. Zero grams are valid; negative or malformed values must be corrected.",
  "seoTitle": "Calories from macros calculator — protein, fat and carbs",
  "seoDescription": "Energy from macro grams using 4/9/4 and calorie shares, with fibre and labelling limits.",
  "h1": "Calories from macros calculator",
  "keywords": [
    "calories from macros",
    "macronutrient calories",
    "atwater factors"
  ],
  "howToUse": [
    "Enter nonnegative grams from the same serving or daily set.",
    "Check whether the package’s carbohydrate number includes fibre or polyols.",
    "Compare kcal contributions and energy shares; equal grams do not give equal energy.",
    "Check packaging differences against rounding and composition rather than treating this as a laboratory measurement."
  ],
  "howItWorks": "Ep =4 P; Ef =9 F; Ec =4 C; E =Ep+Ef+Ec kcal. Component share =100×component energy/E. With E=0, energy is 0 but percentage shares are unavailable. Ordinary energy rounds to whole kcal; positive values below 1 kcal remain fractional. Shares use unrounded arithmetic.",
  "example": "100 g protein, 50 g fat, 200 g carbohydrate: 400+450+800=1650 kcal. Energy shares 24.24%, 27.27%, 48.48%. 0.1 g protein gives 0.4 kcal and 100% protein energy; all zeros give 0 kcal without percentage shares.",
  "faq": [
    {
      "q": "Why does fat give 9 kcal/g in this scheme?",
      "a": "General Atwater factors reflect differing energy values: 4 for protein and carbohydrate, 9 for fat. They are averages, not exact molecular composition or a measurement of your body."
    },
    {
      "q": "How should fibre and alcohol enter macro calories?",
      "a": "Separate factors are not applied here. Do not automatically treat fibre or polyol grams as 4 kcal/g; alcohol is also absent from the three inputs. Its energy is not absent from the food."
    },
    {
      "q": "Why can macro calories differ from the package?",
      "a": "Labels round grams and calories, and some foods use specific factors, fibre or polyols. Rounding order and composition can explain a difference without an arithmetic error."
    },
    {
      "q": "How does calorie share differ from gram share?",
      "a": "10 g protein and 10 g fat give 40 and 90 kcal. Mass shares are equal; energy shares are 30.77% and 69.23%. The calculator does not prescribe dietary target percentages."
    },
    {
      "q": "What does zero macro energy mean?",
      "a": "All three zeros give 0 kcal, but shares cannot divide each contribution by 0. That is not a product error. Any negative gram value is rejected rather than silently replaced by zero."
    }
  ],
  "disclaimer": "General 4/9/4 food-energy model, not a diet, absorption assessment or nutrient-ratio recommendation. Special components and food-specific factors are not calculated separately."
};
