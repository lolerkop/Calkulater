import type { CalculatorLocalization } from '../../lib/platform/types';
import { marketingScalarValues } from '../../lib/platform/marketingScalarLocalization';

export const localization: CalculatorLocalization = {
  "en": {
    "fields": {
      "mode": "How to derive lifetime",
      "arpu": "Monthly revenue per customer",
      "months": "Lifetime, months",
      "churn": "Monthly customer churn, %",
      "margin": "Gross margin, %",
      "cac": "Acquisition cost"
    },
    "options": {
      "months": "by lifetime",
      "churn": "by churn"
    },
    "results": {
      "LTV": "LTV",
      "Срок жизни клиента": "Customer lifetime",
      "Средний доход за период": "Average revenue per period",
      "Валовая маржа": "Gross margin",
      "Отношение LTV к CAC": "LTV to CAC ratio",
      "Окупаемость привлечения": "Payback on acquisition",
      "Проверьте данные": "Check the values",
      "Средний доход за месяц": "Average monthly revenue",
      "Простой срок покрытия CAC": "Simple CAC coverage time"
    },
    "values": {
      ...marketingScalarValues.en,
      "₽": "$",
      "мес": "mo",
      "Средний доход должен быть больше нуля": "The average revenue must be greater than zero",
      "Маржа задаётся в диапазоне от 0 до 100 процентов": "Margin is set between 0 and 100 percent",
      "Стоимость привлечения не может быть отрицательной": "The acquisition cost cannot be negative",
      "Отток задаётся в диапазоне от 0 до 100 процентов": "Churn is set between 0 and 100 percent",
      "Срок жизни должен быть больше нуля": "The lifetime must be greater than zero",
      "Неизвестный режим расчёта": "Unknown calculation mode",
      "Маржа должна быть больше нуля и не превышать 100 процентов": "Margin must be above zero and no greater than100 percent",
      "Месячный отток должен быть больше нуля и не превышать 100 процентов": "Monthly customer churn must be above zero and no greater than100 percent"
    }
  },
  "uk": {
    "fields": {
      "mode": "Як визначити строк",
      "arpu": "Місячний виторг із клієнта",
      "months": "Строк життя, місяців",
      "churn": "Місячний відтік клієнтів, %",
      "margin": "Валова маржа, %",
      "cac": "Вартість залучення"
    },
    "options": {
      "months": "за строком",
      "churn": "за відтіком"
    },
    "results": {
      "LTV": "LTV",
      "Срок жизни клиента": "Строк життя клієнта",
      "Средний доход за период": "Середній дохід за період",
      "Валовая маржа": "Валова маржа",
      "Отношение LTV к CAC": "Відношення LTV до CAC",
      "Окупаемость привлечения": "Окупність залучення",
      "Проверьте данные": "Перевірте дані",
      "Средний доход за месяц": "Середній місячний виторг",
      "Простой срок покрытия CAC": "Простий строк покриття CAC"
    },
    "values": {
      ...marketingScalarValues.uk,
      "₽": "₴",
      "мес": "міс",
      "Средний доход должен быть больше нуля": "Середній дохід має бути більшим за нуль",
      "Маржа задаётся в диапазоне от 0 до 100 процентов": "Маржа задається в діапазоні від 0 до 100 відсотків",
      "Стоимость привлечения не может быть отрицательной": "Вартість залучення не може бути від’ємною",
      "Отток задаётся в диапазоне от 0 до 100 процентов": "Відтік задається в діапазоні від 0 до 100 відсотків",
      "Срок жизни должен быть больше нуля": "Строк життя має бути більшим за нуль",
      "Неизвестный режим расчёта": "Невідомий режим розрахунку",
      "Маржа должна быть больше нуля и не превышать 100 процентов": "Маржа має бути більшою за нуль і не перевищувати100 відсотків",
      "Месячный отток должен быть больше нуля и не превышать 100 процентов": "Місячний відтік клієнтів має бути більшим за нуль і не перевищувати100 відсотків"
    }
  },
  "de": {
    "fields": {
      "mode": "Wie die Verweildauer bestimmt wird",
      "arpu": "Monatsumsatz je Kunde",
      "months": "Verweildauer, Monate",
      "churn": "Monatliche Kundenabwanderung, %",
      "margin": "Rohmarge, %",
      "cac": "Gewinnungskosten"
    },
    "options": {
      "months": "über die Verweildauer",
      "churn": "über die Abwanderung"
    },
    "results": {
      "LTV": "LTV",
      "Срок жизни клиента": "Verweildauer des Kunden",
      "Средний доход за период": "Mittlerer Umsatz je Zeitraum",
      "Валовая маржа": "Rohmarge",
      "Отношение LTV к CAC": "Verhältnis LTV zu CAC",
      "Окупаемость привлечения": "Amortisation der Gewinnung",
      "Проверьте данные": "Prüfe die Werte",
      "Средний доход за месяц": "Mittlerer Monatsumsatz",
      "Простой срок покрытия CAC": "Einfache CAC-Deckungszeit"
    },
    "values": {
      ...marketingScalarValues.de,
      "₽": "€",
      "мес": "Mon.",
      "Средний доход должен быть больше нуля": "Der mittlere Umsatz muss größer als null sein",
      "Маржа задаётся в диапазоне от 0 до 100 процентов": "Die Marge liegt im Bereich von 0 bis 100 Prozent",
      "Стоимость привлечения не может быть отрицательной": "Die Gewinnungskosten können nicht negativ sein",
      "Отток задаётся в диапазоне от 0 до 100 процентов": "Die Abwanderung liegt im Bereich von 0 bis 100 Prozent",
      "Срок жизни должен быть больше нуля": "Die Verweildauer muss größer als null sein",
      "Неизвестный режим расчёта": "Unbekannter Berechnungsmodus",
      "Маржа должна быть больше нуля и не превышать 100 процентов": "Die Marge muss größer als null sein und darf100 Prozent nicht überschreiten",
      "Месячный отток должен быть больше нуля и не превышать 100 процентов": "Die monatliche Kundenabwanderung muss größer als null sein und darf100 Prozent nicht überschreiten"
    }
  },
  "es": {
    "fields": {
      "mode": "Cómo deducir la duración",
      "arpu": "Ingreso mensual por cliente",
      "months": "Duración, meses",
      "churn": "Abandono mensual de clientes, %",
      "margin": "Margen bruto, %",
      "cac": "Coste de captación"
    },
    "options": {
      "months": "por duración",
      "churn": "por rotación"
    },
    "results": {
      "LTV": "LTV",
      "Срок жизни клиента": "Duración del cliente",
      "Средний доход за период": "Ingreso medio por periodo",
      "Валовая маржа": "Margen bruto",
      "Отношение LTV к CAC": "Relación LTV/CAC",
      "Окупаемость привлечения": "Retorno de la captación",
      "Проверьте данные": "Revisa los datos",
      "Средний доход за месяц": "Ingreso mensual medio",
      "Простой срок покрытия CAC": "Tiempo simple de cobertura del CAC"
    },
    "values": {
      ...marketingScalarValues.es,
      "₽": "€",
      "мес": "mes",
      "Средний доход должен быть больше нуля": "El ingreso medio debe ser mayor que cero",
      "Маржа задаётся в диапазоне от 0 до 100 процентов": "El margen se fija entre 0 y 100 por ciento",
      "Стоимость привлечения не может быть отрицательной": "El coste de captación no puede ser negativo",
      "Отток задаётся в диапазоне от 0 до 100 процентов": "La rotación se fija entre 0 y 100 por ciento",
      "Срок жизни должен быть больше нуля": "La duración debe ser mayor que cero",
      "Неизвестный режим расчёта": "Modo de cálculo desconocido",
      "Маржа должна быть больше нуля и не превышать 100 процентов": "El margen debe superar cero y no exceder el100 por ciento",
      "Месячный отток должен быть больше нуля и не превышать 100 процентов": "El abandono mensual de clientes debe superar cero y no exceder el100 por ciento"
    }
  }
};
