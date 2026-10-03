// Subject copy reviewed against the actual fields, formula and result rows.
import type { CalculatorDef } from '../../lib/types';

type ContractCopy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', ContractCopy> = {
  "ru": {
    "longDescription": "Находит день недели для даты григорианского календаря, день года и неделю ISO вместе с её годом. Вблизи Нового года год недели ISO может отличаться от календарного. Признак выходного отмечает субботу и воскресенье, без календаря государственных праздников.",
    "howToUse": [
      "Введите существующую календарную дату.",
      "Прочитайте день недели и порядковый день года.",
      "Для даты около Нового года проверяйте вместе номер и год недели ISO; выходной означает субботу или воскресенье."
    ],
    "howItWorks": "Григорианское правило високосности: год кратен 4, но столетие должно быть кратно 400. Недели ISO начинаются в понедельник; неделя 1 содержит первый четверг года. Четверг каждой недели определяет её год ISO, поэтому декабрь может относиться к следующему году, а январь — к предыдущему.",
    "example": "29.02.2024 — четверг, 60-й день года, неделя ISO 9 в 2024 году. 31.12.2024 — вторник и неделя ISO 1 в 2025 году; 01.01.2023 — воскресенье и неделя 52 в 2022 году.",
    "faq": [
      {
        "q": "Влияет ли часовой пояс?",
        "a": "Нет. Дата читается как обычная календарная, поэтому ответ везде одинаков."
      },
      {
        "q": "Почему 1 января иногда относится к прошлому году?",
        "a": "По ISO 8601 первая неделя — та, что содержит первый четверг. Год, начинающийся с пятницы, субботы или воскресенья, начинается в последней неделе предыдущего."
      },
      {
        "q": "Работает ли для прошлых веков?",
        "a": "Используется григорианский календарь и для исторических дат, без перевода из юлианского. Страны переходили на него в разное время; для записи старого документа сначала установите его календарь. Форма не учитывает местные исторические пропуски дат."
      },
      {
        "q": "Учитываются ли високосные дни?",
        "a": "Да. 29 февраля существует только в високосные годы, и нумерация дней года сдвигается соответственно."
      }
    ],
    "disclaimer": "Григорианская дата без юлианского пересчёта. Выходной — только суббота/воскресенье, без государственных праздников и графика смен."
  },
  "en": {
    "longDescription": "Finds the weekday, ordinal day and ISO week with its week-year for a Gregorian calendar date. Near New Year the ISO week-year can differ from the calendar year. The weekend flag marks Saturday and Sunday without a public-holiday calendar.",
    "howToUse": [
      "Enter a calendar date that exists.",
      "Read the weekday and the ordinal day of the year.",
      "Near New Year, read the ISO week number together with its week-year; the weekend flag means Saturday or Sunday."
    ],
    "howItWorks": "Gregorian leap years are divisible by 4, except century years must be divisible by 400. ISO weeks start on Monday; week 1 contains the year’s first Thursday. Each week’s Thursday determines its ISO year, so December may belong to the next ISO year and January to the previous one.",
    "example": "29 February 2024 is Thursday, day 60, ISO week 9 of 2024. 31 December 2024 is Tuesday in ISO week 1 of 2025; 1 January 2023 is Sunday in week 52 of 2022.",
    "faq": [
      {
        "q": "Does the timezone matter?",
        "a": "No. The date is read as a plain calendar date, so the answer is the same everywhere."
      },
      {
        "q": "Why does 1 January sometimes belong to the previous year?",
        "a": "Under ISO 8601 week one is the week containing the first Thursday. A year starting on a Friday, Saturday or Sunday begins in the last week of the year before."
      },
      {
        "q": "Does it work for past centuries?",
        "a": "Historical dates also use the Gregorian calendar, with no Julian conversion. Countries adopted it at different times; first establish the calendar used by an old document. The form does not model local historical date omissions."
      },
      {
        "q": "Are leap days handled?",
        "a": "Yes. 29 February exists only in leap years, and the day-of-year count shifts accordingly."
      }
    ],
    "disclaimer": "Gregorian dates without Julian conversion. Weekend means Saturday/Sunday only, without public holidays or shift schedules."
  },
  "uk": {
    "longDescription": "Знаходить день тижня для дати григоріанського календаря, день року й тиждень ISO разом із його роком. Біля Нового року рік тижня ISO може відрізнятися від календарного. Ознака вихідного позначає суботу та неділю без календаря державних свят.",
    "howToUse": [
      "Введіть наявну календарну дату.",
      "Прочитайте день тижня та порядковий день року.",
      "Біля Нового року перевіряйте разом номер і рік тижня ISO; вихідний означає суботу або неділю."
    ],
    "howItWorks": "За григоріанським правилом високосний рік кратний 4, але століття має бути кратним 400. Тижні ISO починаються в понеділок; тиждень 1 містить перший четвер року. Четвер кожного тижня визначає його рік ISO, тому грудень може належати наступному року, а січень — попередньому.",
    "example": "29.02.2024 — четвер, 60-й день року, тиждень ISO 9 у 2024 році. 31.12.2024 — вівторок і тиждень ISO 1 у 2025 році; 01.01.2023 — неділя й тиждень 52 у 2022 році.",
    "faq": [
      {
        "q": "Чому 1 січня іноді належить до попереднього року?",
        "a": "За правилом ISO перший тиждень — це той, що містить перший четвер. Якщо рік починається в п’ятницю, перші дні належать до 52-го або 53-го тижня попереднього року."
      },
      {
        "q": "Скільки тижнів у році?",
        "a": "52 або 53 за ISO. П’ятдесят третій з’являється, коли рік починається в четвер або коли високосний рік починається в середу."
      },
      {
        "q": "Чому тиждень починається з понеділка?",
        "a": "Цей результат використовує ISO: понеділок — перший день тижня. Інші календарні правила можуть починати тиждень у неділю й нумерувати його інакше; форма не перемикає систему нумерації."
      },
      {
        "q": "Чи можна дізнатися день тижня для давньої дати?",
        "a": "Розрахунок використовує григоріанський календар і для історичних дат, без перетворення з юліанського. Країни переходили в різний час; для старого документа спершу встановіть його календар. Місцеві історичні пропуски дат форма не моделює."
      }
    ],
    "disclaimer": "Григоріанська дата без юліанського перерахунку. Вихідний — лише субота/неділя, без державних свят і графіка змін."
  },
  "de": {
    "longDescription": "Ermittelt Wochentag, laufenden Tag des Jahres und ISO-Woche samt Wochenjahr für ein Datum des gregorianischen Kalenders. Zum Jahreswechsel kann das ISO-Wochenjahr vom Kalenderjahr abweichen. Wochenende markiert Samstag und Sonntag ohne Feiertagskalender.",
    "howToUse": [
      "Trage ein gültiges Kalenderdatum ein.",
      "Lies den Wochentag und den laufenden Tag des Jahres ab.",
      "Prüfe zum Jahreswechsel ISO-Wochennummer und Wochenjahr gemeinsam; Wochenende bedeutet Samstag oder Sonntag."
    ],
    "howItWorks": "Gregorianische Schaltjahre sind durch 4 teilbar; Jahrhundertjahre müssen durch 400 teilbar sein. ISO-Wochen beginnen montags; Woche 1 enthält den ersten Donnerstag des Jahres. Der Donnerstag jeder Woche bestimmt ihr ISO-Jahr, sodass Dezember zum nächsten und Januar zum vorherigen Jahr gehören kann.",
    "example": "29.02.2024 ist Donnerstag, Tag 60, ISO-Woche 9 im Jahr 2024. 31.12.2024 ist Dienstag in ISO-Woche 1 des Jahres 2025; 01.01.2023 ist Sonntag in Woche 52 des Jahres 2022.",
    "faq": [
      {
        "q": "Spielt die Zeitzone eine Rolle?",
        "a": "Nein. Das Datum wird als reines Kalenderdatum gelesen, die Antwort ist deshalb überall dieselbe."
      },
      {
        "q": "Warum gehört der 1. Januar manchmal zum Vorjahr?",
        "a": "Nach ISO 8601 ist die erste Woche diejenige mit dem ersten Donnerstag. Ein Jahr, das an einem Freitag, Samstag oder Sonntag beginnt, startet in der letzten Woche des Vorjahres."
      },
      {
        "q": "Funktioniert das auch für frühere Jahrhunderte?",
        "a": "Auch historische Daten werden gregorianisch berechnet, ohne Umrechnung aus dem julianischen Kalender. Länder wechselten zu unterschiedlichen Zeiten; kläre zuerst den Kalender eines alten Dokuments. Lokale historische Datumsauslassungen werden nicht modelliert."
      },
      {
        "q": "Werden Schalttage berücksichtigt?",
        "a": "Ja. Den 29. Februar gibt es nur in Schaltjahren, und die Zählung des Jahrestages verschiebt sich entsprechend."
      }
    ],
    "disclaimer": "Gregorianische Daten ohne julianische Umrechnung. Wochenende bedeutet nur Samstag/Sonntag, ohne Feiertage oder Schichtplan."
  },
  "es": {
    "longDescription": "Obtiene el día de la semana, el día ordinal y la semana ISO con su año para una fecha gregoriana. Cerca de Año Nuevo, el año de la semana ISO puede ser distinto del año calendario. Fin de semana marca sábado y domingo, sin calendario de festivos.",
    "howToUse": [
      "Introduce una fecha válida del calendario.",
      "Consulta el día de la semana y el día ordinal del año.",
      "Cerca de Año Nuevo, lee juntos el número y el año de la semana ISO; fin de semana significa sábado o domingo."
    ],
    "howItWorks": "Los años bisiestos gregorianos son divisibles entre 4, pero los años de siglo deben ser divisibles entre 400. Las semanas ISO empiezan el lunes; la semana 1 contiene el primer jueves del año. El jueves de cada semana determina su año ISO; diciembre puede pertenecer al siguiente y enero al anterior.",
    "example": "El 29.02.2024 es jueves, día 60, semana ISO 9 de 2024. El 31.12.2024 es martes en la semana ISO 1 de 2025; el 01.01.2023 es domingo en la semana 52 de 2022.",
    "faq": [
      {
        "q": "¿Importa la zona horaria?",
        "a": "No. La fecha se lee como una fecha de calendario simple, así que la respuesta es la misma en todas partes."
      },
      {
        "q": "¿Por qué el 1 de enero pertenece a veces al año anterior?",
        "a": "Según la ISO 8601 la semana uno es la que contiene el primer jueves. Un año que empieza en viernes, sábado o domingo arranca en la última semana del año anterior."
      },
      {
        "q": "¿Vale para siglos pasados?",
        "a": "Las fechas históricas también se calculan en el calendario gregoriano, sin conversión juliana. Los países lo adoptaron en momentos distintos; identifica primero el calendario del documento. No se modelan omisiones históricas locales de fechas."
      },
      {
        "q": "¿Se gestionan los días bisiestos?",
        "a": "Sí. El 29 de febrero solo existe en años bisiestos, y el recuento del día del año se desplaza en consecuencia."
      }
    ],
    "disclaimer": "Fechas gregorianas sin conversión juliana. Fin de semana significa solo sábado/domingo, sin festivos ni turnos."
  }
};
