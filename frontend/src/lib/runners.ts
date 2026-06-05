import type { CalcFunction } from './types';
import { calcCredit } from './calculators/credit';
import { calcDeposit } from './calculators/deposit';
import { calcCompound } from './calculators/compound';
import { calcMortgage } from './calculators/mortgage';
import { calcCurrency } from './calculators/currency';
import { calcBmi } from './calculators/bmi';
import { calcCalorie } from './calculators/calorie';
import { calcPace } from './calculators/pace';
import { calcOneRm } from './calculators/oneRm';
import { calcTile } from './calculators/tile';
import { calcWallpaper } from './calculators/wallpaper';
import { calcPaint } from './calculators/paint';
import { calcLaminate } from './calculators/laminate';
import { calcAge } from './calculators/age';
import { calcWorkingDays } from './calculators/workingDays';
import { calcIncomeTax } from './calculators/incomeTax';
import { calcVat } from './calculators/vat';
import { calcPercent } from './calculators/percent';
import { calcDiscount } from './calculators/discount';

export const runners: Record<string, CalcFunction> = {
  'credit-calculator': calcCredit,
  'deposit-calculator': calcDeposit,
  'compound-interest': calcCompound,
  'mortgage-calculator': calcMortgage,
  'currency-converter': calcCurrency,
  'usd-to-eur': calcCurrency,
  'eur-to-mdl': calcCurrency,
  'usd-to-mdl': calcCurrency,
  'bmi-calculator': calcBmi,
  'calorie-calculator': calcCalorie,
  'running-pace-calculator': calcPace,
  'one-rep-max-calculator': calcOneRm,
  'tile-calculator': calcTile,
  'wallpaper-calculator': calcWallpaper,
  'paint-calculator': calcPaint,
  'laminate-calculator': calcLaminate,
  'age-calculator': calcAge,
  'working-days-calculator': calcWorkingDays,
  // Новые финансовые калькуляторы (НДФЛ, НДС, проценты, скидка)
  'income-tax-calculator': calcIncomeTax,
  'vat-calculator': calcVat,
  'percent-calculator': calcPercent,
  'discount-calculator': calcDiscount,
};
