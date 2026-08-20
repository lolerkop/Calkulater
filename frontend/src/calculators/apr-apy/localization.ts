import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      mode: 'Direction of conversion',
      rate: 'Rate, %',
      periods: 'Compounding periods per year',
    },
    options: {
      toApy: 'nominal (APR) to effective (APY)',
      toApr: 'effective (APY) to nominal (APR)',
    },
    results: {
      'Эффективная ставка (APY)': 'Effective rate (APY)',
      'Номинальная ставка (APR)': 'Nominal rate (APR)',
      'Номинальная ставка': 'Nominal rate',
      'Ставка за период': 'Rate per period',
      'Периодов в году': 'Periods per year',
      'Множитель за год': 'Yearly multiple',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Ставка не может быть отрицательной': 'The rate cannot be negative',
      'Периодов начисления должно быть не меньше одного': 'There must be at least one compounding period',
    },
  },
  uk: {
    fields: {
      mode: 'Напрям переведення',
      rate: 'Ставка, %',
      periods: 'Нарахувань на рік',
    },
    options: {
      toApy: 'номінальна (APR) в ефективну (APY)',
      toApr: 'ефективна (APY) в номінальну (APR)',
    },
    results: {
      'Эффективная ставка (APY)': 'Ефективна ставка (APY)',
      'Номинальная ставка (APR)': 'Номінальна ставка (APR)',
      'Номинальная ставка': 'Номінальна ставка',
      'Ставка за период': 'Ставка за період',
      'Периодов в году': 'Періодів на рік',
      'Множитель за год': 'Множник за рік',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Ставка не может быть отрицательной': 'Ставка не може бути від’ємною',
      'Периодов начисления должно быть не меньше одного': 'Періодів нарахування має бути не менше одного',
    },
  },
};
