import type { CalculatorContextualField } from '../../lib/platform/types';
const help: Record<string, Record<string, string>> = {
  "clicked": {
    "ru": "Уникальные доставленные письма хотя бы с одним кликом, не все клики. Клики могут превышать зарегистрированные открытия.",
    "en": "Unique delivered emails with at least one click, not total clicks. Clicked emails may exceed recorded opens.",
    "uk": "Унікальні доставлені листи хоча б з одним кліком, не всі кліки. Їх може бути більше за зареєстровані відкриття.",
    "de": "Einmalig gezählte zugestellte E-Mails mit mindestens einem Klick, nicht alle Klicks. Sie können erfasste Öffnungen übersteigen.",
    "es": "Correos entregados únicos con al menos un clic, no clics totales. Pueden superar aperturas registradas."
  }
};
export const contextualField: CalculatorContextualField = (field, values, locale) => {
  const text = help[field.name];
  return text ? { ...field, help: text[locale] ?? text.en } : field;
};
