import type { CalculatorContextualField } from '../../lib/platform/types';

const labels = {
  ru: { rateHelp: "Денежные единицы расчёта за 1 единицу обмениваемой валюты. До спреда и комиссий: при продаже сумма умножается на курс, при покупке бюджет делится на него.", sell: 'Сумма продаваемой валюты', buy: 'Бюджет покупки', local: '₽', foreign: 'ед. валюты' },
  en: { rateHelp: "Payment-currency units per 1 foreign-currency unit. Before spread and fees, selling multiplies the amount by this rate; buying divides the budget by it.", sell: 'Foreign currency to sell', buy: 'Purchase budget', local: '$', foreign: 'currency units' },
  uk: { rateHelp: "Грошові одиниці розрахунку за 1 одиницю обмінюваної валюти. До спреду й комісій: під час продажу суму множать на курс, під час купівлі бюджет ділять на нього.", sell: 'Сума валюти для продажу', buy: 'Бюджет купівлі', local: '₴', foreign: 'од. валюти' },
  de: { rateHelp: "Einheiten der Zahlungswährung je 1 Einheit Fremdwährung. Vor Spread und Gebühren wird beim Verkauf der Betrag mit dem Kurs multipliziert, beim Kauf das Budget durch ihn geteilt.", sell: 'Zu verkaufende Fremdwährung', buy: 'Budget für den Kauf', local: '€', foreign: 'Währungseinheiten' },
  es: { rateHelp: "Unidades de la moneda de pago por 1 unidad de divisa. Antes del diferencial y las comisiones, al vender se multiplica el importe por el tipo; al comprar se divide el presupuesto entre él.", sell: 'Divisa que vas a vender', buy: 'Presupuesto de compra', local: '€', foreign: 'unidades de divisa' },
};

export const contextualField: CalculatorContextualField = (field, values, locale) => {
  const copy = labels[locale === 'ru' || locale === 'uk' || locale === 'de' || locale === 'es' ? locale : 'en'];
  if (field.name === 'amount') return { ...field, label: values.direction === 'buy' ? copy.buy : copy.sell, unit: values.direction === 'buy' ? copy.local : copy.foreign };
  if (field.name === 'rate') return { ...field, unit: `${copy.local}/${copy.foreign}`, help: copy.rateHelp };
  if (field.name === 'feeFixed') return { ...field, unit: copy.local };
  return field;
};
