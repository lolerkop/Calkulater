import type { CalculatorLocalization } from '../../lib/platform/types';
import { marketingScalarValues } from '../../lib/platform/marketingScalarLocalization';

export const localization: CalculatorLocalization = {
  "en": {
    "fields": {
      "cost": "Advertising spend",
      "clicks": "Clicks received",
      "impressions": "Impressions, 0 if unknown"
    },
    "results": {
      "Цена клика (CPC)": "Cost per click (CPC)",
      "Кликов": "Clicks",
      "Бюджет": "Budget",
      "CPM": "CPM",
      "Кликабельность": "Click-through rate",
      "Проверьте данные": "Check the values"
    },
    "values": {
      ...marketingScalarValues.en,
      "Бюджет должен быть больше нуля": "The budget must be greater than zero",
      "Число кликов должно быть больше нуля": "The number of clicks must be greater than zero",
      "Кликов не может быть больше, чем показов": "There cannot be more clicks than impressions",
      "Количество не может быть отрицательным": "The count cannot be negative",
      "Неизвестный режим расчёта": "Unknown calculation mode",
      "Расходы не могут быть отрицательными": "Spend cannot be negative"
    }
  },
  "uk": {
    "fields": {
      "cost": "Рекламні витрати",
      "clicks": "Отримано кліків",
      "impressions": "Покази, 0 якщо невідомі"
    },
    "results": {
      "Цена клика (CPC)": "Ціна кліка (CPC)",
      "Кликов": "Кліків",
      "Бюджет": "Бюджет",
      "CPM": "CPM",
      "Кликабельность": "Клікабельність",
      "Проверьте данные": "Перевірте дані"
    },
    "values": {
      ...marketingScalarValues.uk,
      "Бюджет должен быть больше нуля": "Бюджет має бути більшим за нуль",
      "Число кликов должно быть больше нуля": "Кількість кліків має бути більшою за нуль",
      "Кликов не может быть больше, чем показов": "Кліків не може бути більше, ніж показів",
      "Количество не может быть отрицательным": "Кількість не може бути від’ємною",
      "Неизвестный режим расчёта": "Невідомий режим розрахунку",
      "Расходы не могут быть отрицательными": "Витрати не можуть бути від’ємними"
    }
  },
  "de": {
    "fields": {
      "cost": "Werbeausgaben",
      "clicks": "Erhaltene Klicks",
      "impressions": "Einblendungen, 0 wenn unbekannt"
    },
    "results": {
      "Цена клика (CPC)": "Klickpreis (CPC)",
      "Кликов": "Klicks",
      "Бюджет": "Budget",
      "CPM": "CPM",
      "Кликабельность": "Klickrate",
      "Проверьте данные": "Prüfe die Werte"
    },
    "values": {
      ...marketingScalarValues.de,
      "Бюджет должен быть больше нуля": "Das Budget muss größer als null sein",
      "Число кликов должно быть больше нуля": "Die Zahl der Klicks muss größer als null sein",
      "Кликов не может быть больше, чем показов": "Es kann nicht mehr Klicks als Einblendungen geben",
      "Количество не может быть отрицательным": "Die Anzahl darf nicht negativ sein",
      "Неизвестный режим расчёта": "Unbekannter Berechnungsmodus",
      "Расходы не могут быть отрицательными": "Die Ausgaben dürfen nicht negativ sein"
    }
  },
  "es": {
    "fields": {
      "cost": "Gasto publicitario",
      "clicks": "Clics obtenidos",
      "impressions": "Impresiones, 0 si se desconocen"
    },
    "options": {},
    "results": {
      "Цена клика (CPC)": "Coste por clic (CPC)",
      "Кликов": "Clics",
      "Бюджет": "Presupuesto",
      "CPM": "CPM",
      "Кликабельность": "Tasa de clics",
      "Проверьте данные": "Revisa los datos"
    },
    "values": {
      ...marketingScalarValues.es,
      "Бюджет должен быть больше нуля": "El presupuesto debe ser mayor que cero",
      "Число кликов должно быть больше нуля": "El número de clics debe ser mayor que cero",
      "Кликов не может быть больше, чем показов": "No puede haber más clics que impresiones",
      "Количество не может быть отрицательным": "El recuento no puede ser negativo",
      "Неизвестный режим расчёта": "Modo de cálculo desconocido",
      "Расходы не могут быть отрицательными": "El gasto no puede ser negativo"
    }
  }
};
