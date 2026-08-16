export const fullParityCalculatorIds = [
  'credit-calculator',
  'compound-interest',
  'mortgage-calculator',
  'percent-calculator',
  'discount-calculator',
  'currency-converter',
  'usd-to-eur',
  'eur-to-mdl',
  'usd-to-mdl',
  'bmi-calculator',
  'calorie-calculator',
  'running-pace-calculator',
  'one-rep-max-calculator',
  'tile-calculator',
  'wallpaper-calculator',
  'paint-calculator',
  'laminate-calculator',
  'age-calculator',
  'working-days-calculator',
  'date-shift-calculator',
  'screed-calculator',
] as const;

export const ruOnlyCalculatorReasons = {
  'deposit-calculator': 'Калькулятор использует российские условия вкладов и рублёвую модель результата.',
  'income-tax-calculator': 'Калькулятор реализует российскую шкалу НДФЛ и относится к налоговым правилам РФ.',
  'vat-calculator': 'Калькулятор использует ставки и правила НДС Российской Федерации.',
} as const;

export type FullParityCalculatorId = (typeof fullParityCalculatorIds)[number];
export type RuOnlyCalculatorId = keyof typeof ruOnlyCalculatorReasons;

const fullParityIds = new Set<string>(fullParityCalculatorIds);

export function hasFullLocaleParity(id: string): id is FullParityCalculatorId {
  return fullParityIds.has(id);
}

export function isRuOnlyCalculator(id: string): id is RuOnlyCalculatorId {
  return id in ruOnlyCalculatorReasons;
}
