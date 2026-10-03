import type { CalculatorContextualField } from '../../lib/platform/types';
const help: Record<string, Record<string, string>> = {
  "years": {
    "ru": "Дробные годы используются без округления: это продолжение модели постоянного годового роста цен, а не опубликованный индекс для части года.",
    "en": "Fractional years are used without rounding: this extends a constant annual price-growth model rather than supplying a published partial-year index.",
    "uk": "Дробові роки використовуються без округлення: це продовження моделі сталого річного зростання цін, а не опублікований індекс за частину року.",
    "de": "Gebrochene Jahre werden nicht gerundet: das setzt ein Modell konstanten jährlichen Preiswachstums fort und liefert keinen veröffentlichten Teiljahresindex.",
    "es": "Los años fraccionarios se usan sin redondear: prolongan un modelo de crecimiento anual constante de precios, sin aportar un índice publicado para parte del año."
  },
  "ratePct": {
    "ru": "Постоянное годовое изменение цен в процентах; отрицательное значение выше −100 % означает дефляцию. Это введённое предположение.",
    "en": "Assumed constant annual price change in percent; a negative value above −100% represents deflation.",
    "uk": "Припущена стала річна зміна цін у відсотках; від’ємне значення понад −100 % означає дефляцію.",
    "de": "Angenommene konstante jährliche Preisänderung in Prozent; ein negativer Wert über −100 % steht für Deflation.",
    "es": "Cambio anual constante de precios supuesto, en porcentaje; un valor negativo superior a −100 % representa deflación."
  }
};
export const contextualField: CalculatorContextualField = (field, values, locale) => {
  const labels = help[field.name];
  return labels ? { ...field, help: labels[locale] ?? labels.en } : field;
};
