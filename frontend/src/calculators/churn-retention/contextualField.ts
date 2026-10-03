import type { CalculatorContextualField } from '../../lib/platform/types';
const help: Record<string, Record<string, string>> = {
  "lost": {
    "ru": "Только ушедшие из клиентов на начало. Потери новых клиентов не включаются в этот счётчик.",
    "en": "Only departures from the opening customer cohort. Do not include losses among newcomers.",
    "uk": "Лише відходи з початкової групи. Втрати нових клієнтів не входять у цей лічильник.",
    "de": "Nur Abgänge aus der Anfangskohorte. Verluste unter Neukunden gehören nicht dazu.",
    "es": "Solo bajas de la cohorte inicial. No incluyas bajas de clientes nuevos."
  }
};
export const contextualField: CalculatorContextualField = (field, values, locale) => {
  const text = help[field.name];
  return text ? { ...field, help: text[locale] ?? text.en } : field;
};
