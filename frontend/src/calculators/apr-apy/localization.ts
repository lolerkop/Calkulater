import type { CalculatorLocalization } from '../../lib/platform/types';
import { runtimeScalarPhrases } from '../../lib/platform/runtimeScalarPhrases';

// Final effective owned bundles; overwritten intermediate maps removed after deep equality proof.
export const localization:CalculatorLocalization={
  "en": {
    fields: {"mode": "Direction of conversion", "rate": "Rate, %", "periods": "Compounding periods per year"},
    options: {"toApy": "nominal annual rate to annual effective rate", "toApr": "annual effective rate to nominal annual rate"},
    results: { ...runtimeScalarPhrases("en",[6]),"Эффективная ставка (APY)": "Annual effective rate (compounding only)", "Номинальная ставка (APR)": "Nominal annual rate", "Номинальная ставка": "Nominal rate", "Ставка за период": "Rate per period", "Периодов в году": "Periods per year", "Множитель за год": "Yearly multiple" },
    values: { ...runtimeScalarPhrases("en",[11, 0, 4, 7, 5]),"Периодов начисления должно быть не меньше одного": "There must be at least one compounding period" },
  },
  "uk": {
    fields: {"mode": "Напрям переведення", "rate": "Ставка, %", "periods": "Нарахувань на рік"},
    options: {"toApy": "номінальна річна ставка в ефективну", "toApr": "ефективна річна ставка в номінальну"},
    results: { ...runtimeScalarPhrases("uk",[8]),"Эффективная ставка (APY)": "Ефективна річна ставка (лише капіталізація)", "Номинальная ставка (APR)": "Номінальна річна ставка", "Номинальная ставка": "Номінальна ставка", "Ставка за период": "Ставка за період", "Периодов в году": "Періодів на рік", "Множитель за год": "Множник за рік" },
    values: { ...runtimeScalarPhrases("uk",[12, 1, 6, 9, 7]),"Периодов начисления должно быть не меньше одного": "Періодів нарахування має бути не менше одного" },
  },
  "de": {
    fields: {"mode": "Richtung der Umrechnung", "rate": "Zinssatz, %", "periods": "Zinsperioden je Jahr"},
    options: {"toApy": "nominaler Jahreszins in jährlichen Effektivzins", "toApr": "jährlicher Effektivzins in nominalen Jahreszins"},
    results: { ...runtimeScalarPhrases("de",[8]),"Эффективная ставка (APY)": "Jährlicher Effektivzins (nur Zinseszins)", "Номинальная ставка (APR)": "Nominaler Jahreszins", "Номинальная ставка": "Nominaler Zinssatz", "Ставка за период": "Zinssatz je Periode", "Периодов в году": "Perioden im Jahr", "Множитель за год": "Jahresfaktor" },
    values: { ...runtimeScalarPhrases("de",[12, 2, 6, 10, 7]),"Периодов начисления должно быть не меньше одного": "Es muss mindestens eine Zinsperiode geben" },
  },
  "es": {
    fields: {"mode": "Sentido de la conversión", "rate": "Tipo, %", "periods": "Periodos de capitalización al año"},
    options: {"toApy": "tipo nominal anual a efectivo anual sin gastos", "toApr": "tipo efectivo anual sin gastos a nominal anual"},
    results: { ...runtimeScalarPhrases("es",[7]),"Эффективная ставка (APY)": "Tipo efectivo anual sin gastos", "Номинальная ставка (APR)": "Tipo nominal anual", "Номинальная ставка": "Tipo nominal", "Ставка за период": "Tipo por periodo", "Периодов в году": "Periodos al año", "Множитель за год": "Multiplicador anual" },
    values: { ...runtimeScalarPhrases("es",[12, 0, 4, 9, 6]),"Периодов начисления должно быть не меньше одного": "Debe haber al menos un periodo de capitalización" },
  },
};
