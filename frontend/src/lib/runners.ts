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
import { calcLaminate } from './calculators/laminate';
import { calcScreed } from './calculators/screed';
import { calcAge } from './calculators/age';
import { calcWorkingDays } from './calculators/workingDays';
import { calcDateShift } from './calculators/dateShift';
import { calcIncomeTax } from './calculators/incomeTax';
import { calcVat } from './calculators/vat';
import { calcDiscount } from './calculators/discount';
import { calcMargin } from './calculators/margin';
import { calcBreakEven } from './calculators/breakEven';
import { calcBodyFat } from './calculators/bodyFat';
import { calcBrick } from './calculators/brick';

const legacyRunners: Record<string, CalcFunction> = {
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
  'laminate-calculator': calcLaminate,
  'screed-calculator': calcScreed,
  'age-calculator': calcAge,
  'working-days-calculator': calcWorkingDays,
  'date-shift-calculator': calcDateShift,
  // Новые финансовые калькуляторы (НДФЛ, НДС, проценты, скидка)
  'income-tax-calculator': calcIncomeTax,
  'vat-calculator': calcVat,
  'discount-calculator': calcDiscount,
  'margin-calculator': calcMargin,
  'break-even-calculator': calcBreakEven,
  'body-fat-calculator': calcBodyFat,
  'brick-calculator': calcBrick,
};

// Реестр только легаси-калькуляторов: именно его импортирует остров.
//
// Раннеры V2 сюда сознательно не входят. Пока они были здесь, весь их код
// становился статически достижимым из острова, и посетитель одной страницы
// скачивал реализации всех остальных. Теперь калькулятор V2 приносит расчёт
// собственной точкой входа, а полный реестр для сборки и тестов собирается
// отдельно в `runners.all.ts`.
export const runners: Record<string, CalcFunction> = legacyRunners;
