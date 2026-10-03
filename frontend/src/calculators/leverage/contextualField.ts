import { createFieldHelp } from '../../lib/platform/financeWave14Input';

export const contextualField = createFieldHelp({
  "ru": {
    "leverage": "Математическая модель принимает конечное плечо от 1×; доступность на бирже не проверяется.",
    "maintenancePct": "Доля начальной стоимости позиции, фиксированная сумма; должна быть меньше 100/плечо."
  },
  "en": {
    "leverage": "Finite model leverage from 1×; venue availability is not checked.",
    "maintenancePct": "Share of initial notional, a fixed amount; must be below 100/leverage."
  },
  "uk": {
    "leverage": "Модель приймає скінченне плече від 1×; доступність на біржі не перевіряється.",
    "maintenancePct": "Частка початкової вартості, фіксована сума; має бути меншою за 100/плече."
  },
  "de": {
    "leverage": "Endlicher Modellhebel ab 1×; Verfügbarkeit am Handelsplatz ungeprüft.",
    "maintenancePct": "Anteil des Anfangsnotionals, fester Betrag; kleiner als 100/Hebel."
  },
  "es": {
    "leverage": "Apalancamiento finito desde 1×; no se verifica disponibilidad real.",
    "maintenancePct": "Porción del nocional inicial, importe fijo; menor que 100/apalancamiento."
  }
});
