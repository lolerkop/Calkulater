import type { CalculatorContextualField } from '../../lib/platform/types';
const help: Record<string, Record<string, string>> = {
  "years": {
    "ru": "Положительный срок может быть дробным и не округляется. Он влияет на денежные суммы; основная доходность остаётся годовой.",
    "en": "A positive duration may be fractional and is not rounded. It affects money amounts; the primary return remains annual.",
    "uk": "Додатний строк може бути дробовим і не округлюється. Він впливає на грошові суми; основна дохідність залишається річною.",
    "de": "Eine positive Dauer darf gebrochen sein und wird nicht gerundet. Sie beeinflusst Geldbeträge; die Hauptrendite bleibt jährlich.",
    "es": "Un plazo positivo puede ser fraccionario y no se redondea. Afecta a los importes; la rentabilidad principal sigue siendo anual."
  },
  "nominal": {
    "ru": "Годовое изменение стоимости до поправки на инфляцию, с согласованным реинвестированием. Это не номинальная APR с иной частотой начисления.",
    "en": "Annual value growth before inflation adjustment, with consistent reinvestment. This is not a nominal APR with another compounding frequency.",
    "uk": "Річна зміна вартості до поправки на інфляцію з узгодженим реінвестуванням. Це не номінальна APR з іншою частотою нарахування.",
    "de": "Jährliche Wertänderung vor Inflationsbereinigung bei einheitlicher Wiederanlage. Gemeint ist kein Nominal-APR mit anderer Verzinsungshäufigkeit.",
    "es": "Cambio anual del valor antes de ajustar la inflación, con reinversión coherente. No es una APR nominal con otra frecuencia de capitalización."
  }
};
export const contextualField: CalculatorContextualField = (field, values, locale) => {
  const labels = help[field.name];
  return labels ? { ...field, help: labels[locale] ?? labels.en } : field;
};
