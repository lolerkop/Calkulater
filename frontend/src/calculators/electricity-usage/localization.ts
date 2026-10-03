import type { CalculatorLocalization } from '../../lib/platform/types';
import { marketingScalarValues } from '../../lib/platform/marketingScalarLocalization';

export const localization: CalculatorLocalization = {
  "en": {
  "fields": {
    "power": "Appliance power",
    "powerUnit": "Power unit",
    "hoursPerDay": "Hours per day",
    "days": "Number of days",
    "tariff": "Tariff per kWh"
  },
  "options": {
    "w": "watts (W)",
    "kw": "kilowatts (kW)"
  },
  "results": {
    "Расход энергии": "Energy used",
    "В сутки": "Per day",
    "За 30 дней": "Over 30 days",
    "Мощность": "Power",
    "Стоимость за период": "Cost for the period",
    "Стоимость за 30 дней": "Cost over 30 days",
    "Проверьте данные": "Check the values"
  },
  "values": {
    ...marketingScalarValues.en,
    "кВт·ч": "kWh",
    "кВт": "kW",
    "₽": "$",
    "Мощность должна быть больше нуля": "The power must be greater than zero",
    "Часов в сутки может быть от 0 до 24": "Hours per day must be between 0 and 24",
    "Число дней должно быть больше нуля": "The number of days must be greater than zero",
    "Выберите корректную единицу мощности": "Choose a valid power unit",
    "Тариф не может быть отрицательным": "The tariff cannot be negative"
  }
},
  "uk": {
  "fields": {
    "power": "Потужність приладу",
    "powerUnit": "Одиниця потужності",
    "hoursPerDay": "Годин на добу",
    "days": "Кількість днів",
    "tariff": "Тариф за кВт·год"
  },
  "options": {
    "w": "вати (Вт)",
    "kw": "кіловати (кВт)"
  },
  "results": {
    "Расход энергии": "Витрата енергії",
    "В сутки": "За добу",
    "За 30 дней": "За 30 днів",
    "Мощность": "Потужність",
    "Стоимость за период": "Вартість за період",
    "Стоимость за 30 дней": "Вартість за 30 днів",
    "Проверьте данные": "Перевірте дані"
  },
  "values": {
    ...marketingScalarValues.uk,
    "кВт·ч": "кВт·год",
    "кВт": "кВт",
    "₽": "₴",
    "Мощность должна быть больше нуля": "Потужність має бути більшою за нуль",
    "Часов в сутки может быть от 0 до 24": "Годин на добу може бути від 0 до 24",
    "Число дней должно быть больше нуля": "Кількість днів має бути більшою за нуль",
    "Выберите корректную единицу мощности": "Оберіть коректну одиницю потужності",
    "Тариф не может быть отрицательным": "Тариф не може бути від’ємним"
  }
},
  "de": {
  "fields": {
    "power": "Leistung des Geräts",
    "powerUnit": "Einheit der Leistung",
    "hoursPerDay": "Stunden am Tag",
    "days": "Zahl der Tage",
    "tariff": "Tarif je kWh"
  },
  "options": {
    "w": "Watt (W)",
    "kw": "Kilowatt (kW)"
  },
  "results": {
    "Расход энергии": "Energieverbrauch",
    "В сутки": "Am Tag",
    "За 30 дней": "Über 30 Tage",
    "Мощность": "Leistung",
    "Стоимость за период": "Kosten im Zeitraum",
    "Стоимость за 30 дней": "Kosten über 30 Tage",
    "Проверьте данные": "Prüfe die Werte"
  },
  "values": {
    ...marketingScalarValues.de,
    "кВт·ч": "kWh",
    "кВт": "kW",
    "₽": "€",
    "Мощность должна быть больше нуля": "Die Leistung muss größer als null sein",
    "Часов в сутки может быть от 0 до 24": "Die Stunden am Tag müssen zwischen 0 und 24 liegen",
    "Число дней должно быть больше нуля": "Die Zahl der Tage muss größer als null sein",
    "Выберите корректную единицу мощности": "Wähle eine gültige Leistungseinheit",
    "Тариф не может быть отрицательным": "Der Tarif darf nicht negativ sein"
  }
},
  "es": {
  "fields": {
    "power": "Potencia del aparato",
    "powerUnit": "Unidad de potencia",
    "hoursPerDay": "Horas al día",
    "days": "Número de días",
    "tariff": "Tarifa por kWh"
  },
  "options": {
    "w": "vatios (W)",
    "kw": "kilovatios (kW)"
  },
  "results": {
    "Расход энергии": "Energía consumida",
    "В сутки": "Al día",
    "За 30 дней": "En 30 días",
    "Мощность": "Potencia",
    "Стоимость за период": "Coste del periodo",
    "Стоимость за 30 дней": "Coste en 30 días",
    "Проверьте данные": "Revisa los datos"
  },
  "values": {
    ...marketingScalarValues.es,
    "кВт·ч": "kWh",
    "кВт": "kW",
    "₽": "€",
    "Мощность должна быть больше нуля": "La potencia debe ser mayor que cero",
    "Часов в сутки может быть от 0 до 24": "Las horas al día deben estar entre 0 y 24",
    "Число дней должно быть больше нуля": "El número de días debe ser mayor que cero",
    "Выберите корректную единицу мощности": "Elige una unidad de potencia válida",
    "Тариф не может быть отрицательным": "La tarifa no puede ser negativa"
  }
}
};
