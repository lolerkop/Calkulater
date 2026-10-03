import { createFieldHelp } from '../../lib/platform/financeWave14Input';

export const contextualField = createFieldHelp({
  "ru": {
    "days": "Положительное целое число дней; строка «За 30 дней» всегда использует 30.",
    "tariff": "Необязательно: пусто или 0 скрывает стоимость. Введите цену за кВт·ч в выбранной денежной единице, без конвертации."
  },
  "en": {
    "days": "Positive whole days; the “Over 30 days” row always uses 30.",
    "tariff": "Optional: blank or 0 omits cost. Enter price per kWh in the displayed currency; no exchange conversion."
  },
  "uk": {
    "days": "Додатне ціле число днів; рядок «За 30 днів» завжди використовує 30.",
    "tariff": "Необов’язково: порожньо або 0 приховує вартість. Ціна за кВт·год у показаній валюті, без обміну."
  },
  "de": {
    "days": "Positive ganze Tageszahl; die 30-Tage-Zeile verwendet immer 30.",
    "tariff": "Optional: leer oder 0 blendet Kosten aus. Preis je kWh in angezeigter Währung, ohne Umrechnung."
  },
  "es": {
    "days": "Días enteros positivos; la fila de 30 días siempre usa 30.",
    "tariff": "Opcional: blanco o 0 omite costes. Precio por kWh en moneda mostrada, sin conversión."
  }
});
