import type { CalculatorCopy } from '../../lib/platform/types';

export const activityCaloriesCopyEn: CalculatorCopy = {
  name: "Exercise calorie calculator",
  slug: "exercise-calorie-calculator",
  shortDescription: "Calories burned walking, running, cycling or swimming, from MET and body weight.",
  longDescription:
    "Works out the burn for a specific activity rather than a daily allowance: MET expresses how many times more energy an activity costs than rest, and the whole calculation follows from it. Body weight enters as a multiplier rather than a correction — a 90 kg rider burns almost a third more than a 70 kg rider on the same bike, and a table average understates it. The coefficients offered are the widely used reference values, but they are averages rather than measurements, so your own pace can be entered through a separate list entry.",
  seoTitle: "Exercise calorie calculator — MET and body weight",
  seoDescription: "Calculate calories burned walking, running, cycling or swimming from the MET coefficient, your body weight and the duration.",
  h1: "Exercise calorie calculator",
  keywords: ["exercise calorie calculator", "calories burned running", "calories burned cycling", "met calorie calculator"],
  howToUse: [
    "Choose an activity, or the entry for your own MET coefficient.",
    "Enter your body weight — it enters the calculation as a multiplier.",
    "Enter the duration of the session in minutes.",
    "Check the hourly burn if you are planning a longer session.",
  ],
  howItWorks:
    "Calories = MET × 3.5 × weight in kilograms ÷ 200 × minutes. The 3.5 is resting oxygen uptake in millilitres per kilogram per minute, and MET says how far the activity exceeds it.",
  example: "Cycling for 45 minutes at 70 kg and MET 7.5 burns 413 kcal, that is 9.19 kcal a minute.",
  faq: [
    { q: "What does the MET coefficient mean?", a: "How many times more energy an activity costs than rest. MET 7.5 means cycling uses seven and a half times as much energy as sitting quietly." },
    { q: "Why does weight matter so much?", a: "It enters the formula as a multiplier: moving a heavier body costs more energy. At 90 kg instead of 70 the burn is almost a third higher." },
    { q: "How accurate are the listed coefficients?", a: "They are averages for a moderate pace. Real burn depends on speed, terrain and fitness, which is why your own coefficient can be entered by hand." },
    { q: "Is resting metabolism included?", a: "No. This is the burn for the session itself; a daily allowance including metabolism is a separate calculator." },
    { q: "Can I subtract these calories from my daily intake?", a: "Only partly: your body would have spent energy at rest during that time anyway. Strictly, subtract the burn minus resting metabolism for the same period." },
  ],
};
