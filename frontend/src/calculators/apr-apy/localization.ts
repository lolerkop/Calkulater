import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'mode': 'Richtung der Umrechnung',
      'rate': 'Zinssatz, %',
      'periods': 'Zinsperioden je Jahr',
    },
    options: {
      'toApy': 'nominal in effektiv',
      'toApr': 'effektiv in nominal',
    },
    results: {
      'Эффективная ставка (APY)': 'Effektiver Zinssatz',
      'Номинальная ставка (APR)': 'Nominaler Zinssatz',
      'Номинальная ставка': 'Nominaler Zinssatz',
      'Ставка за период': 'Zinssatz je Periode',
      'Периодов в году': 'Perioden im Jahr',
      'Множитель за год': 'Jahresfaktor',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Ставка не может быть отрицательной': 'Der Zinssatz kann nicht negativ sein',
      'Периодов начисления должно быть не меньше одного': 'Es muss mindestens eine Zinsperiode geben',
    },
  },
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
  es: {
    fields: {
      "mode": "Sentido de la conversión",
      "rate": "Tipo, %",
      "periods": "Periodos de capitalización al año",
    },
    options: {
      "toApy": "de nominal (TIN) a efectivo (TAE)",
      "toApr": "de efectivo (TAE) a nominal (TIN)",
    },
    results: {
      "Эффективная ставка (APY)": "Tipo efectivo (TAE)",
      "Номинальная ставка (APR)": "Tipo nominal (TIN)",
      "Номинальная ставка": "Tipo nominal",
      "Ставка за период": "Tipo por periodo",
      "Периодов в году": "Periodos al año",
      "Множитель за год": "Multiplicador anual",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "Ставка не может быть отрицательной": "El tipo no puede ser negativo",
      "Периодов начисления должно быть не меньше одного": "Debe haber al menos un periodo de capitalización",
    },
  },
};
