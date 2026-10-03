import type { CalculatorLocalization } from '../../lib/platform/types';
import { marketingScalarValues } from '../../lib/platform/marketingScalarLocalization';

export const localization: CalculatorLocalization = {
  "en": {
    "fields": {
      "mode": "What to find",
      "cost": "Campaign budget",
      "impressions": "Impressions",
      "cpm": "CPM"
    },
    "options": {
      "cpm": "CPM",
      "impressions": "impressions",
      "cost": "budget"
    },
    "results": {
      "CPM": "CPM",
      "Показы": "Impressions",
      "Бюджет": "Budget",
      "Стоимость показа": "Cost per impression",
      "Проверьте данные": "Check the values"
    },
    "values": {
      ...marketingScalarValues.en,
      "₽": "$",
      "Бюджет не может быть отрицательным": "The budget cannot be negative",
      "CPM должен быть больше нуля": "CPM must be greater than zero",
      "Показов должно быть не меньше одного": "There must be at least one impression",
      "Количество не может быть отрицательным": "The count cannot be negative",
      "Неизвестный режим расчёта": "Unknown calculation mode",
      "Расходы не могут быть отрицательными": "Spend cannot be negative"
    }
  },
  "uk": {
    "fields": {
      "mode": "Що знайти",
      "cost": "Бюджет кампанії",
      "impressions": "Покази",
      "cpm": "CPM"
    },
    "options": {
      "cpm": "CPM",
      "impressions": "покази",
      "cost": "бюджет"
    },
    "results": {
      "CPM": "CPM",
      "Показы": "Покази",
      "Бюджет": "Бюджет",
      "Стоимость показа": "Вартість показу",
      "Проверьте данные": "Перевірте дані"
    },
    "values": {
      ...marketingScalarValues.uk,
      "₽": "₴",
      "Бюджет не может быть отрицательным": "Бюджет не може бути від’ємним",
      "CPM должен быть больше нуля": "CPM має бути більшим за нуль",
      "Показов должно быть не меньше одного": "Показів має бути щонайменше один",
      "Количество не может быть отрицательным": "Кількість не може бути від’ємною",
      "Неизвестный режим расчёта": "Невідомий режим розрахунку",
      "Расходы не могут быть отрицательными": "Витрати не можуть бути від’ємними"
    }
  },
  "de": {
    "fields": {
      "mode": "Was gesucht ist",
      "cost": "Budget der Kampagne",
      "impressions": "Einblendungen",
      "cpm": "CPM"
    },
    "options": {
      "cpm": "CPM",
      "impressions": "Einblendungen",
      "cost": "Budget"
    },
    "results": {
      "CPM": "CPM",
      "Показы": "Einblendungen",
      "Бюджет": "Budget",
      "Стоимость показа": "Kosten je Einblendung",
      "Проверьте данные": "Prüfe die Werte"
    },
    "values": {
      ...marketingScalarValues.de,
      "₽": "€",
      "Бюджет не может быть отрицательным": "Das Budget kann nicht negativ sein",
      "CPM должен быть больше нуля": "Der CPM muss größer als null sein",
      "Показов должно быть не меньше одного": "Es muss mindestens eine Einblendung sein",
      "Количество не может быть отрицательным": "Die Anzahl darf nicht negativ sein",
      "Неизвестный режим расчёта": "Unbekannter Berechnungsmodus",
      "Расходы не могут быть отрицательными": "Die Ausgaben dürfen nicht negativ sein"
    }
  },
  "es": {
    "fields": {
      "mode": "Qué hallar",
      "cost": "Presupuesto de la campaña",
      "impressions": "Impresiones",
      "cpm": "CPM"
    },
    "options": {
      "cpm": "CPM",
      "impressions": "impresiones",
      "cost": "presupuesto"
    },
    "results": {
      "CPM": "CPM",
      "Показы": "Impresiones",
      "Бюджет": "Presupuesto",
      "Стоимость показа": "Coste por impresión",
      "Проверьте данные": "Revisa los datos"
    },
    "values": {
      ...marketingScalarValues.es,
      "₽": "€",
      "Бюджет не может быть отрицательным": "El presupuesto no puede ser negativo",
      "CPM должен быть больше нуля": "El CPM debe ser mayor que cero",
      "Показов должно быть не меньше одного": "Debe haber al menos una impresión",
      "Количество не может быть отрицательным": "El recuento no puede ser negativo",
      "Неизвестный режим расчёта": "Modo de cálculo desconocido",
      "Расходы не могут быть отрицательными": "El gasto no puede ser negativo"
    }
  }
};
