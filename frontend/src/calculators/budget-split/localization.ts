import type { CalculatorLocalization } from '../../lib/platform/types';

const contractValues = {
  "en": {
    "Выберите корректный режим расчёта": "Choose a valid calculation mode",
    "Результат выходит за числовые пределы расчёта": "The result exceeds the numerical limits of this calculation",
    "Введите имена и числовые доходы по одному участнику в строке": "Enter one name and numerical income per line",
    "Сумма должна округляться хотя бы до одной копейки и укладываться в точные целые копейки": "The rounded amount must contain at least one cent and fit exactly representable whole cents",
    "Доход должен быть неотрицательным числом": "Income must be a non-negative number"
  },
  "uk": {
    "Выберите корректный режим расчёта": "Оберіть коректний режим розрахунку",
    "Результат выходит за числовые пределы расчёта": "Результат виходить за числові межі розрахунку",
    "Введите имена и числовые доходы по одному участнику в строке": "Введіть ім’я та числовий дохід одного учасника в кожному рядку",
    "Сумма должна округляться хотя бы до одной копейки и укладываться в точные целые копейки": "Округлена сума має містити хоча б одну копійку й уміщатися в точно представлені цілі копійки",
    "Доход должен быть неотрицательным числом": "Дохід має бути невід’ємним числом"
  },
  "de": {
    "Выберите корректный режим расчёта": "Wähle einen gültigen Rechenmodus",
    "Результат выходит за числовые пределы расчёта": "Das Ergebnis überschreitet die Zahlengrenzen dieser Rechnung",
    "Введите имена и числовые доходы по одному участнику в строке": "Gib je Zeile einen Namen und ein numerisches Einkommen ein",
    "Сумма должна округляться хотя бы до одной копейки и укладываться в точные целые копейки": "Der gerundete Betrag muss mindestens einen Cent enthalten und in exakt darstellbare ganze Cent passen",
    "Доход должен быть неотрицательным числом": "Das Einkommen muss eine nicht negative Zahl sein"
  },
  "es": {
    "Выберите корректный режим расчёта": "Elige un modo de cálculo válido",
    "Результат выходит за числовые пределы расчёта": "El resultado supera los límites numéricos del cálculo",
    "Введите имена и числовые доходы по одному участнику в строке": "Introduce un nombre y un ingreso numérico por línea",
    "Сумма должна округляться хотя бы до одной копейки и укладываться в точные целые копейки": "El importe redondeado debe incluir al menos un céntimo y caber en céntimos enteros representables exactamente",
    "Доход должен быть неотрицательным числом": "Los ingresos deben ser un número no negativo"
  }
} as const;

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'total': 'Zu teilender Betrag',
      'incomes': 'Beteiligte: Name und Einkommen je Zeile',
      'mode': 'Wie geteilt wird',
    },
    options: {
      'equal': 'Zu gleichen Teilen',
      'income': 'Im Verhältnis der Einkommen',
    },
    results: {
      'Наибольший взнос': 'Größter Anteil',
      'Наименьший взнос': 'Kleinster Anteil',
      'Участников': 'Beteiligte',
      'Сумма к делению': 'Zu teilender Betrag',
      'Проверка суммы': 'Anteile ergeben zusammen',
      'Кто сколько вносит': 'Wer wie viel zahlt',
      'Участник': 'Beteiligter',
      'Доход': 'Einkommen',
      'Доля': 'Anteil',
      'Взнос': 'Beitrag',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      ...contractValues.de,
      'Нужны имя и доход в строке:': 'In der Zeile werden Name und Einkommen gebraucht:',
      'Доход должен быть числом в строке:': 'Das Einkommen muss eine Zahl sein, in der Zeile:',
      '₽': '€',
      'Сумма к делению должна быть больше нуля': 'Der zu teilende Betrag muss größer als null sein',
      'Доход не может быть отрицательным': 'Das Einkommen kann nicht negativ sein',
      'Введите хотя бы одного участника': 'Trage mindestens einen Beteiligten ein',
      'Суммарный доход равен нулю: делить пропорционально нечему': 'Das Gesamteinkommen ist null: es gibt nichts, wonach sich anteilig teilen ließe',
    },
  },
  en: {
    fields: {
      "total": "Amount to split",
      "incomes": "Participants: name and income per line",
      "mode": "How to split",
    },
    options: { "equal": "Equally", "income": "In proportion to income" },
    results: {
      "Наибольший взнос": "Largest share",
      "Наименьший взнос": "Smallest share",
      "Участников": "Participants",
      "Сумма к делению": "Amount to split",
      "Проверка суммы": "Shares add up to",
      "Кто сколько вносит": "Who pays what",
      "Участник": "Participant",
      "Доход": "Income",
      "Доля": "Share",
      "Взнос": "Contribution",
      "Проверьте данные": "Check the values",
    },
    values: {
      ...contractValues.en,
      "Нужны имя и доход в строке:": "Name and income are required on the line:",
      "Доход должен быть числом в строке:": "The income must be a number on the line:",
      "₽": "$",
      "Сумма к делению должна быть больше нуля": "The amount to split must be greater than zero",
      "Доход не может быть отрицательным": "Income cannot be negative",
      "Введите хотя бы одного участника": "Enter at least one participant",
      "Суммарный доход равен нулю: делить пропорционально нечему": "Total income is zero, so there is nothing to split in proportion to",
    },
  },
  uk: {
    fields: {
      "total": "Сума до поділу",
      "incomes": "Учасники: ім'я і дохід у рядку",
      "mode": "Як ділити",
    },
    options: { "equal": "Порівну", "income": "Пропорційно доходу" },
    results: {
      "Наибольший взнос": "Найбільший внесок",
      "Наименьший взнос": "Найменший внесок",
      "Участников": "Учасників",
      "Сумма к делению": "Сума до поділу",
      "Проверка суммы": "Сума внесків",
      "Кто сколько вносит": "Хто скільки вносить",
      "Участник": "Учасник",
      "Доход": "Дохід",
      "Доля": "Частка",
      "Взнос": "Внесок",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      ...contractValues.uk,
      "Нужны имя и доход в строке:": "Потрібні ім'я і дохід у рядку:",
      "Доход должен быть числом в строке:": "Дохід має бути числом у рядку:",
      "₽": "₴",
      "Сумма к делению должна быть больше нуля": "Сума до поділу має бути більшою за нуль",
      "Доход не может быть отрицательным": "Дохід не може бути від'ємним",
      "Введите хотя бы одного участника": "Введіть хоча б одного учасника",
      "Суммарный доход равен нулю: делить пропорционально нечему": "Сумарний дохід дорівнює нулю, тож ділити пропорційно немає чого",
    },
  },
  es: {
    fields: {
      "total": "Importe a repartir",
      "incomes": "Participantes: nombre e ingresos por línea",
      "mode": "Cómo repartir",
    },
    options: {
      "income": "En proporción a los ingresos",
      "equal": "A partes iguales",
    },
    results: {
      "Наибольший взнос": "Aportación mayor",
      "Наименьший взнос": "Aportación menor",
      "Участников": "Participantes",
      "Сумма к делению": "Importe a repartir",
      "Проверка суммы": "Las partes suman",
      "Кто сколько вносит": "Quién aporta cuánto",
      "Участник": "Participante",
      "Доход": "Ingresos",
      "Доля": "Proporción",
      "Взнос": "Aportación",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      ...contractValues.es,
      "Нужны имя и доход в строке:": "Hacen falta un nombre y unos ingresos en la línea:",
      "Доход должен быть числом в строке:": "Los ingresos deben ser un número en la línea:",
      "₽": "€",
      "Сумма к делению должна быть больше нуля": "El importe a repartir debe ser mayor que cero",
      "Доход не может быть отрицательным": "Los ingresos no pueden ser negativos",
      "Введите хотя бы одного участника": "Introduce al menos un participante",
      "Суммарный доход равен нулю: делить пропорционально нечему": "Los ingresos totales son cero: no hay nada entre lo que repartir en proporción",
    },
  },
};
