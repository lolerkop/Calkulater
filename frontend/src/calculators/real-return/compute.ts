import type { CalcFunction } from '../../lib/types';
import { displayNumber as text, displayMoney as money } from '../../lib/platform/financeDisplay';
import { number, optionalNumber } from '../../lib/platform/scalarInputDisplay';
import { divideRate } from '../../lib/platform/financeMath';
import { formatStatistic } from '../../lib/platform/measurement';

// Rates describe the same year's balance and price growth, not a nominal APR.
export const compute: CalcFunction = (inputs) => {
  const nominal = number(inputs.nominal);
  const inflation = number(inputs.inflation);
  const amount = optionalNumber(inputs.amount);
  const fail = (message: string) => ({
    primary: { label: 'Реальная доходность', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (nominal === null || inflation === null || amount === null) return fail('Введите корректные числовые данные');
  if (nominal < -100) return fail('Доходность не может быть меньше минус ста процентов');
  if (inflation <= -100) return fail('Инфляция должна быть больше минус ста процентов');
  if (amount < 0) return fail('Сумма не может быть отрицательной');
  // Algebraic form of Fisher's ratio, without subtracting nearly equal ones.
  const rough = nominal - inflation;
  const real = (rough / (100 + inflation)) * 100;
  const gap = Math.abs(rough - real);
  if (![real, rough, gap].every(Number.isFinite) || (nominal !== inflation && real === 0)) return fail('Результат вне допустимого диапазона');
  const secondary = [
    { label: 'Грубая оценка разностью', value: `${text(rough)}%` },
    { label: 'Расхождение с разностью', value: `${text(gap)} п.п.` },
    { label: 'Номинальная ставка', value: `${text(nominal)}%` },
    { label: 'Инфляция', value: `${text(inflation)}%` },
  ];
  // The visible duration input is valid even when optional money rows are absent.
  const years = inputs.years === undefined ? 1 : number(inputs.years);
  if (years === null) return fail('Введите корректные числовые данные');
  if (!(years > 0)) return fail('Срок должен быть больше нуля');
  if (amount > 0) {
    const nominalMagnitude = divideRate(Math.abs(nominal), 100);
    const inflationMagnitude = divideRate(Math.abs(inflation), 100);
    if (nominalMagnitude === null || inflationMagnitude === null) return fail('Результат вне допустимого диапазона');
    // The negative tail uses the same100+p denominator as the primary ratio;
    // division before subtracting from1 can lose significant digits near−100%.
    const nominalLog = nominal < -50 ? Math.log((100 + nominal) / 100) : Math.log1p(Math.sign(nominal) * nominalMagnitude);
    const inflationLog = inflation < -50 ? Math.log((100 + inflation) / 100) : Math.log1p(Math.sign(inflation) * inflationMagnitude);
    const scale = (exponent: number): number => {
      const factor = Math.exp(exponent);
      const direct = amount * factor;
      return direct > 0 && Number.isFinite(direct) ? direct : Math.exp(Math.log(amount) + exponent);
    };
    const grown = nominal === -100 ? 0 : scale(years * (nominalLog - inflationLog));
    const nominalAmount = nominal === -100 ? 0 : scale(years * nominalLog);
    if (![grown, nominalAmount].every(Number.isFinite) || (nominal > -100 && (grown <= 0 || nominalAmount <= 0))) return fail('Результат вне допустимого диапазона');
    secondary.push({ label: `Покупательная способность через ${formatStatistic(years, text)}`, value: money(grown) });
    secondary.push({ label: 'Номинальная сумма', value: money(nominalAmount) });
  }
  return { primary: { label: 'Реальная доходность', value: `${text(real)}%` }, secondary };
};
