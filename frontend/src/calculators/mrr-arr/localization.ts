import type { CalculatorLocalization } from '../../lib/platform/types';
import { marketingScalarValues } from '../../lib/platform/marketingScalarLocalization';

export const localization: CalculatorLocalization = {
  "en": {
    "fields": {
      "subscribers": "Subscribers",
      "arpuMonth": "Average monthly amount per subscriber",
      "growthPct": "Assumed MRR change, %"
    },
    "options": {},
    "results": {
      "MRR": "MRR",
      "ARR": "ARR",
      "MRR через месяц": "MRR next month",
      "Прирост за месяц": "Growth in a month",
      "Подписчиков": "Subscribers",
      "Проверьте данные": "Check the values"
    },
    "values": {
      ...marketingScalarValues.en,
      "₽": "$",
      "Число подписчиков должно быть больше нуля": "The number of subscribers must be greater than zero",
      "Средний доход с подписчика должен быть больше нуля": "The average revenue per subscriber must be greater than zero",
      "Падение выручки не может превышать ста процентов": "A revenue decline cannot exceed one hundred percent"
    }
  },
  "uk": {
    "fields": {
      "subscribers": "Передплатників",
      "arpuMonth": "Середня місячна сума з передплатника",
      "growthPct": "Припущена зміна MRR, %"
    },
    "options": {},
    "results": {
      "MRR": "MRR",
      "ARR": "ARR",
      "MRR через месяц": "MRR через місяць",
      "Прирост за месяц": "Приріст за місяць",
      "Подписчиков": "Передплатників",
      "Проверьте данные": "Перевірте дані"
    },
    "values": {
      ...marketingScalarValues.uk,
      "₽": "₴",
      "Число подписчиков должно быть больше нуля": "Кількість передплатників має бути більшою за нуль",
      "Средний доход с подписчика должен быть больше нуля": "Середній дохід з передплатника має бути більшим за нуль",
      "Падение выручки не может превышать ста процентов": "Падіння виручки не може перевищувати ста відсотків"
    }
  },
  "de": {
    "fields": {
      "subscribers": "Abonnenten",
      "arpuMonth": "Mittlerer Monatsbetrag je Abonnent",
      "growthPct": "Angenommene MRR-Änderung, %"
    },
    "results": {
      "MRR": "MRR",
      "ARR": "ARR",
      "MRR через месяц": "MRR in einem Monat",
      "Прирост за месяц": "Zuwachs in einem Monat",
      "Подписчиков": "Abonnenten",
      "Проверьте данные": "Prüfe die Werte"
    },
    "values": {
      ...marketingScalarValues.de,
      "₽": "€",
      "Число подписчиков должно быть больше нуля": "Die Zahl der Abonnenten muss größer als null sein",
      "Средний доход с подписчика должен быть больше нуля": "Der mittlere Umsatz je Abonnent muss größer als null sein",
      "Падение выручки не может превышать ста процентов": "Ein Umsatzrückgang kann hundert Prozent nicht übersteigen"
    }
  },
  "es": {
    "fields": {
      "subscribers": "Suscriptores",
      "arpuMonth": "Importe mensual medio por suscriptor",
      "growthPct": "Cambio supuesto del MRR, %"
    },
    "options": {},
    "results": {
      "MRR": "MRR",
      "ARR": "ARR",
      "MRR через месяц": "MRR dentro de un mes",
      "Прирост за месяц": "Crecimiento en un mes",
      "Подписчиков": "Suscriptores",
      "Проверьте данные": "Revisa los datos"
    },
    "values": {
      ...marketingScalarValues.es,
      "₽": "€",
      "Число подписчиков должно быть больше нуля": "El número de suscriptores debe ser mayor que cero",
      "Средний доход с подписчика должен быть больше нуля": "El ingreso medio por suscriptor debe ser mayor que cero",
      "Падение выручки не может превышать ста процентов": "Una caída de ingresos no puede superar el cien por cien"
    }
  }
};
