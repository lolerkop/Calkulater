import type { CalculatorLocalization } from '../../lib/platform/types';
import { marketingScalarValues } from '../../lib/platform/marketingScalarLocalization';

export const localization: CalculatorLocalization = {
  "en": {
  "fields": {
    "salary": "Monthly salary",
    "days": "Working days per month",
    "hours": "Hours per working day"
  },
  "options": {},
  "results": {
    "Стоимость рабочего дня": "Cost of a working day",
    "Стоимость часа": "Cost of an hour",
    "Рабочих часов в месяце": "Working hours per month",
    "Проверьте данные": "Check the values"
  },
  "values": {
    ...marketingScalarValues.en,
    "Оклад должен быть больше нуля": "The salary must be greater than zero",
    "Число рабочих дней должно быть больше нуля": "The number of working days must be greater than zero",
    "Число часов в дне должно быть больше нуля": "The number of hours per day must be greater than zero",
    "Рабочий месяц ограничен 31 днём, а день — 24 часами": "The month is limited to 31 days and the day to 24 hours"
  }
},
  "uk": {
  "fields": {
    "salary": "Місячний оклад",
    "days": "Робочих днів на місяць",
    "hours": "Годин у робочому дні"
  },
  "options": {},
  "results": {
    "Стоимость рабочего дня": "Вартість робочого дня",
    "Стоимость часа": "Вартість години",
    "Рабочих часов в месяце": "Робочих годин на місяць",
    "Проверьте данные": "Перевірте дані"
  },
  "values": {
    ...marketingScalarValues.uk,
    "Оклад должен быть больше нуля": "Оклад має бути більшим за нуль",
    "Число рабочих дней должно быть больше нуля": "Кількість робочих днів має бути більшою за нуль",
    "Число часов в дне должно быть больше нуля": "Кількість годин у дні має бути більшою за нуль",
    "Рабочий месяц ограничен 31 днём, а день — 24 часами": "Місяць обмежено 31 днем, день — 24 годинами"
  }
},
  "de": {
  "fields": {
    "salary": "Monatsgehalt",
    "days": "Arbeitstage im Monat",
    "hours": "Stunden je Arbeitstag"
  },
  "results": {
    "Стоимость рабочего дня": "Wert eines Arbeitstages",
    "Стоимость часа": "Wert einer Stunde",
    "Рабочих часов в месяце": "Arbeitsstunden im Monat",
    "Проверьте данные": "Prüfe die Werte"
  },
  "values": {
    ...marketingScalarValues.de,
    "Оклад должен быть больше нуля": "Das Gehalt muss größer als null sein",
    "Число рабочих дней должно быть больше нуля": "Die Zahl der Arbeitstage muss größer als null sein",
    "Число часов в дне должно быть больше нуля": "Die Zahl der Stunden je Tag muss größer als null sein",
    "Рабочий месяц ограничен 31 днём, а день — 24 часами": "Der Monat ist auf 31 Tage und der Tag auf 24 Stunden begrenzt"
  }
},
  "es": {
  "fields": {
    "salary": "Salario mensual",
    "days": "Días laborables al mes",
    "hours": "Horas por día laborable"
  },
  "options": {},
  "results": {
    "Стоимость рабочего дня": "Coste de un día de trabajo",
    "Стоимость часа": "Coste de una hora",
    "Рабочих часов в месяце": "Horas de trabajo al mes",
    "Проверьте данные": "Revisa los datos"
  },
  "values": {
    ...marketingScalarValues.es,
    "Оклад должен быть больше нуля": "El salario debe ser mayor que cero",
    "Число рабочих дней должно быть больше нуля": "El número de días laborables debe ser mayor que cero",
    "Число часов в дне должно быть больше нуля": "El número de horas al día debe ser mayor que cero",
    "Рабочий месяц ограничен 31 днём, а день — 24 часами": "El mes está limitado a 31 días y el día a 24 horas"
  }
}
};
