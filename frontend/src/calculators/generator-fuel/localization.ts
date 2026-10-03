import type { CalculatorLocalization } from '../../lib/platform/types';
import { marketingScalarValues } from '../../lib/platform/marketingScalarLocalization';

export const localization: CalculatorLocalization = {
  "en": {
  "fields": {
    "load": "Load, kW",
    "sfc": "Specific consumption, L/kWh",
    "hours": "Running time, h",
    "price": "Fuel price per litre"
  },
  "options": {},
  "results": {
    "Расход топлива": "Fuel used",
    "Расход в час": "Consumption per hour",
    "Стоимость топлива": "Fuel cost",
    "Проверьте данные": "Check the values"
  },
  "values": {
    ...marketingScalarValues.en,
    " л/ч": " L/h",
    " л": " L",
    "Нагрузка должна быть больше нуля": "The load must be greater than zero",
    "Удельный расход должен быть больше нуля": "The specific consumption must be greater than zero",
    "Время работы должно быть больше нуля": "The running time must be greater than zero",
    "Цена топлива не может быть отрицательной": "The fuel price cannot be negative"
  }
},
  "uk": {
  "fields": {
    "load": "Навантаження, кВт",
    "sfc": "Питома витрата, л/кВт·год",
    "hours": "Час роботи, год",
    "price": "Ціна пального за літр"
  },
  "options": {},
  "results": {
    "Расход топлива": "Витрата пального",
    "Расход в час": "Витрата на годину",
    "Стоимость топлива": "Вартість пального",
    "Проверьте данные": "Перевірте дані"
  },
  "values": {
    ...marketingScalarValues.uk,
    " л/ч": " л/год",
    " л": " л",
    "Нагрузка должна быть больше нуля": "Навантаження має бути більшим за нуль",
    "Удельный расход должен быть больше нуля": "Питома витрата має бути більшою за нуль",
    "Время работы должно быть больше нуля": "Час роботи має бути більшим за нуль",
    "Цена топлива не может быть отрицательной": "Ціна пального не може бути від’ємною"
  }
},
  "de": {
  "fields": {
    "load": "Last, kW",
    "sfc": "Spezifischer Verbrauch, l/kWh",
    "hours": "Laufzeit, h",
    "price": "Kraftstoffpreis je Liter"
  },
  "results": {
    "Расход топлива": "Kraftstoffverbrauch",
    "Расход в час": "Verbrauch je Stunde",
    "Стоимость топлива": "Kraftstoffkosten",
    "Проверьте данные": "Prüfe die Werte"
  },
  "values": {
    ...marketingScalarValues.de,
    " л/ч": " l/h",
    " л": " l",
    "Нагрузка должна быть больше нуля": "Die Last muss größer als null sein",
    "Удельный расход должен быть больше нуля": "Der spezifische Verbrauch muss größer als null sein",
    "Время работы должно быть больше нуля": "Die Laufzeit muss größer als null sein",
    "Цена топлива не может быть отрицательной": "Der Kraftstoffpreis darf nicht negativ sein"
  }
},
  "es": {
  "fields": {
    "load": "Carga, kW",
    "sfc": "Consumo específico, l/kWh",
    "hours": "Tiempo de funcionamiento, h",
    "price": "Precio del combustible por litro"
  },
  "options": {},
  "results": {
    "Расход топлива": "Combustible consumido",
    "Расход в час": "Consumo por hora",
    "Стоимость топлива": "Coste del combustible",
    "Проверьте данные": "Revisa los datos"
  },
  "values": {
    ...marketingScalarValues.es,
    " л/ч": " l/h",
    " л": " l",
    "Нагрузка должна быть больше нуля": "La carga debe ser mayor que cero",
    "Удельный расход должен быть больше нуля": "El consumo específico debe ser mayor que cero",
    "Время работы должно быть больше нуля": "El tiempo de funcionamiento debe ser mayor que cero",
    "Цена топлива не может быть отрицательной": "El precio del combustible no puede ser negativo"
  }
}
};
