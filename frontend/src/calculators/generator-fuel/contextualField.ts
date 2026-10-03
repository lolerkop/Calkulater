import { createFieldHelp } from '../../lib/platform/financeWave14Input';

export const contextualField = createFieldHelp({
  "ru": {
    "sfc": "Более 0: литры за час ÷ фактические кВт. Сверьте режим с данными машины; 0,3 — пример.",
    "price": "Необязательно: пусто или 0 скрывает стоимость; цена за литр, без обмена валюты."
  },
  "en": {
    "sfc": "Above 0: litres per hour ÷ actual kW. Match the machine’s load data; 0.3 is an example.",
    "price": "Optional: blank or 0 omits cost; price per litre, no exchange conversion."
  },
  "uk": {
    "sfc": "Понад 0: літри за годину ÷ фактичні кВт. Узгодьте режим з даними машини; 0,3 — приклад.",
    "price": "Необов’язково: порожньо або 0 приховує вартість; ціна за літр, без обміну валют."
  },
  "de": {
    "sfc": "Über 0: Liter pro Stunde ÷ tatsächliche kW. Zur Maschinenlast passende Daten; 0,3 ist Beispiel.",
    "price": "Optional: leer oder 0 blendet Kosten aus; Literpreis, ohne Währungsumrechnung."
  },
  "es": {
    "sfc": "Más de 0: litros por hora ÷ kW reales. Datos del equipo para esa carga; 0,3 es ejemplo.",
    "price": "Opcional: blanco o 0 omite costes; precio por litro, sin conversión de moneda."
  }
});
