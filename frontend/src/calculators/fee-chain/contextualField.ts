import type { CalculatorContextualField } from '../../lib/platform/types';
const help: Record<string, Record<string, string>> = {
  "price": {
    "ru": "Обе процентные ставки берутся от этой цены. Реальная база, минимум и тарифные ступени проверяются отдельно.",
    "en": "Both percentage rates use this price. Check actual fee bases, minimum charges and tiers separately.",
    "uk": "Обидві відсоткові ставки беруться від цієї ціни. Реальну базу, мінімум і ступені тарифу перевіряйте окремо.",
    "de": "Beide Prozentsätze gelten für diesen Preis. Tatsächliche Gebührenbasis, Mindestwerte und Stufen separat prüfen.",
    "es": "Ambos porcentajes usan este precio. Comprueba aparte bases reales, cargos mínimos y tramos."
  }
};
export const contextualField: CalculatorContextualField = (field, values, locale) => {
  const text = help[field.name];
  return text ? { ...field, help: text[locale] ?? text.en } : field;
};
