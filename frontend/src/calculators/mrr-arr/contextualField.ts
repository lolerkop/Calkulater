import type { CalculatorContextualField } from '../../lib/platform/types';

const help: Record<string, Record<string, string>> = {
  "ru": {
    "arpuMonth": "Средняя регулярная сумма с подписчика за месяц: денежная дробь допустима.",
    "growthPct": "Ваш сценарий изменения MRR на следующий месяц. −100% означает ноль; это не прогноз числа клиентов."
  },
  "en": {
    "arpuMonth": "Average recurring monthly amount per subscriber; fractional monetary amounts are allowed.",
    "growthPct": "Your next-month MRR change scenario. −100% means zero; it does not forecast customer numbers."
  },
  "uk": {
    "arpuMonth": "Середня регулярна місячна сума з передплатника; грошові дробові значення допустимі.",
    "growthPct": "Ваш сценарій зміни MRR наступного місяця. −100% означає нуль, а не прогноз кількості клієнтів."
  },
  "de": {
    "arpuMonth": "Mittlerer wiederkehrender Monatsbetrag je Abonnent; Geldbeträge dürfen Dezimalstellen haben.",
    "growthPct": "Dein MRR-Szenario für den nächsten Monat. −100% bedeutet null; es prognostiziert keine Kundenzahl."
  },
  "es": {
    "arpuMonth": "Importe recurrente mensual medio por suscriptor; se admiten importes monetarios decimales.",
    "growthPct": "Tu escenario de cambio del MRR para el próximo mes. −100% significa cero; no pronostica clientes."
  }
};

export const contextualField: CalculatorContextualField = (field, _values, locale) => {
  const subjectHelp = help[locale]?.[field.name];
  return subjectHelp ? { ...field, help: subjectHelp } : field;
};
