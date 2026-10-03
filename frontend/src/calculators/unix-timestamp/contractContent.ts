// Authored contract with individually retained effective legacy passages.
// AI review; human language and subject review remain pending.
export const contractContent = {
  "ru": {
    "shortDescription": "Перевод между Unix-временем и датой UTC в обе стороны.",
    "seoDescription": "Перевод целых Unix-секунд и существующих дат UTC в обе стороны, годы 0001–9999. Поддерживает отрицательные секунды до эпохи; миллисекундная часть не вводится.",
    "longDescription": "Считает секунды от первого января 1970 года и обратно, всегда в UTC. Часовой пояс браузера сюда не попадает намеренно: одно и то же число обязано давать одну и ту же дату у всех, иначе ссылка с результатом показывала бы каждому своё. Отрицательные значения — обычные даты до эпохи.",
    "howToUse": [
      "Выберите нужное направление перевода.",
      "Введите отметку времени либо дату и время в UTC.",
      "Прочитайте результат и день недели."
    ],
    "howItWorks": "Целые Unix-секунды отсчитываются от 1970-01-01T00:00:00Z. Используется григорианский календарь UTC с годами 0001–9999 и сутками по 86 400 секунд; секунды координации не моделируются. Даты проверяются по реальному календарю: 1900-02-29 отклоняется, 2000-02-29 допустима. Часы 0–23, минуты и секунды 0–59 задаются целыми. Диапазон timestamp: −62 135 596 800…253 402 300 799. Миллисекунды во вход не принимаются.",
    "example": "1 700 000 000 соответствует 2023-11-14 22:13:20 UTC, вторнику.",
    "faq": [
      {
        "q": "Почему только UTC?",
        "a": "Чтобы одна и та же отметка всегда показывала одну и ту же дату. Применение часового пояса читателя означало бы, что общий результат значит разное на разных машинах."
      },
      {
        "q": "Учитываются ли секунды координации?",
        "a": "Нет, как не учитывает их и само Unix-время: каждые сутки считаются ровно 86 400 секундами, так задано стандартом."
      },
      {
        "q": "Может ли отметка быть отрицательной?",
        "a": "Да. Отрицательные значения — это даты до 1970 года, и переводятся они точно так же."
      },
      {
        "q": "Секунды или миллисекунды?",
        "a": "На вход подаются секунды — обычное соглашение Unix. Системам, которые считают в миллисекундах, значение нужно умножить на тысячу."
      }
    ],
    "disclaimer": "Детерминированный перевод целых секунд и существующих дат UTC, годы 0001–9999. Не переводит часовые пояса, не читает текущее время, не учитывает секунды координации или миллисекундную часть."
  },
  "en": {
    "shortDescription": "Convert between Unix time and a UTC date, both directions.",
    "seoDescription": "Convert whole Unix seconds and valid UTC dates both ways, years 0001–9999. Negative seconds before the epoch are supported; no millisecond fraction input.",
    "longDescription": "Counts seconds from the first of January 1970 and back again, always in UTC. The browser timezone deliberately does not enter: the same number has to give the same date for everyone, otherwise a shared link would show something different to each reader. Negative values are ordinary dates before the epoch.",
    "howToUse": [
      "Choose which direction you need.",
      "Enter the timestamp, or the date and time in UTC.",
      "Read the converted value and the day of the week."
    ],
    "howItWorks": "Integer Unix seconds are counted from 1970-01-01T00:00:00Z. The model uses the UTC Gregorian calendar, years 0001–9999 and 86,400-second days; leap seconds are not modelled. Calendar validity is checked: 1900-02-29 is rejected and 2000-02-29 is valid. Hours 0–23 and minutes/seconds 0–59 must be integers. Timestamp range is −62,135,596,800…253,402,300,799. Millisecond input is not accepted.",
    "example": "1 700 000 000 corresponds to 2023-11-14 22:13:20 UTC, a Tuesday.",
    "faq": [
      {
        "q": "Why UTC only?",
        "a": "So the same timestamp always shows the same date. Applying the reader timezone would make a shared result mean different things on different machines."
      },
      {
        "q": "Are leap seconds handled?",
        "a": "No, and neither is Unix time itself: every day is treated as exactly 86 400 seconds, which is what the standard specifies."
      },
      {
        "q": "Can a timestamp be negative?",
        "a": "Yes. Negative values are dates before 1970, and they convert exactly the same way."
      },
      {
        "q": "Seconds or milliseconds?",
        "a": "The input is in seconds, the usual Unix convention. Systems that count in milliseconds need the value multiplied by a thousand."
      }
    ],
    "disclaimer": "Deterministic conversion of whole seconds and valid UTC dates, years 0001–9999. No timezone conversion, current-time lookup, leap seconds or millisecond fraction."
  },
  "uk": {
    "shortDescription": "Переведення між Unix-часом і датою UTC в обидва боки.",
    "seoDescription": "Перетворюйте цілі Unix-секунди й справжні дати UTC в обидва боки, роки 0001–9999. Підтримуються від’ємні секунди до епохи; мілісекундна частина не вводиться.",
    "longDescription": "Позначка часу Unix — це кількість секунд від 1 січня 1970 року за UTC. Вона не має часового пояса зовсім, і саме тому зручна для зберігання: перетворення в місцевий час відбувається лише під час показу.",
    "howToUse": [
      "Виберіть напрямок переведення.",
      "Введіть позначку часу або дату.",
      "Прочитайте результат у UTC."
    ],
    "howItWorks": "Цілі Unix-секунди відлічуються від 1970-01-01T00:00:00Z. Використано григоріанський календар UTC, роки 0001–9999 і доби по 86 400 секунд; високосні секунди не моделюються. Перевіряється справжня дата: 1900-02-29 відхиляється, 2000-02-29 допустима. Години 0–23, хвилини й секунди 0–59 мають бути цілими. Діапазон timestamp: −62 135 596 800…253 402 300 799. Вхід у мілісекундах не приймається.",
    "example": "1 700 000 000 відповідає 2023-11-14 22:13:20 UTC, вівторку.",
    "faq": [
      {
        "q": "Чому саме 1970 рік?",
        "a": "1970-01-01T00:00:00Z — початок відліку цієї шкали. Це визначення, а не особлива властивість дати. Наприклад, −86400 означає 1969-12-31T00:00:00Z."
      },
      {
        "q": "Що таке проблема 2038 року?",
        "a": "Найбільше додатне знакове 32-бітне число 2147483647 відповідає 2038-01-19T03:14:07Z. Наступна секунда вже не вміщується в таке поле. Цей інструмент підтримує роки до 9999, але це не доводить можливості конкретної зовнішньої системи."
      },
      {
        "q": "Чи враховуються високосні секунди?",
        "a": "Ні. У шкалі Unix кожна доба рівно 86 400 секунд, тому під час високосної секунди позначка часу повторюється або зупиняється — залежно від реалізації."
      },
      {
        "q": "Секунди чи мілісекунди?",
        "a": "Вхід цього інструмента — цілі секунди. JavaScript Date внутрішньо використовує мілісекунди, але одиницю зовнішнього API потрібно перевіряти за його контрактом, а не кількістю цифр. Для мілісекунд спочатку поділіть на 1000; залишок означає дробову секунду, якої тут немає."
      }
    ],
    "disclaimer": "Детерміноване перетворення цілих секунд і справжніх дат UTC, роки 0001–9999. Без переведення часових поясів, поточного часу, високосних секунд чи мілісекундної частини."
  },
  "de": {
    "shortDescription": "Zwischen Unix-Zeit und einem UTC-Datum umrechnen, in beide Richtungen.",
    "seoDescription": "Ganze Unix-Sekunden und gültige UTC-Daten in beide Richtungen umrechnen, Jahre 0001–9999. Negative Sekunden vor der Epoche werden unterstützt; kein Millisekundenanteil.",
    "longDescription": "Zählt Sekunden ab dem ersten Januar 1970 und wieder zurück, immer in UTC. Die Zeitzone des Browsers geht bewusst nicht ein: dieselbe Zahl muss für jeden dasselbe Datum ergeben, sonst zeigte ein geteilter Link jedem Leser etwas anderes. Negative Werte sind gewöhnliche Daten vor dem Epochenbeginn.",
    "howToUse": [
      "Wähle die gewünschte Richtung.",
      "Trage den Zeitstempel ein oder Datum und Uhrzeit in UTC.",
      "Lies den umgerechneten Wert und den Wochentag ab."
    ],
    "howItWorks": "Ganzzahlige Unix-Sekunden zählen ab 1970-01-01T00:00:00Z. Das Modell verwendet den gregorianischen UTC-Kalender, Jahre 0001–9999 und Tage mit 86.400 Sekunden; Schaltsekunden werden nicht modelliert. Die Kalendergültigkeit wird geprüft: 1900-02-29 wird abgelehnt, 2000-02-29 ist gültig. Stunden 0–23 sowie Minuten/Sekunden 0–59 müssen ganzzahlig sein. Timestamp-Bereich: −62.135.596.800…253.402.300.799. Millisekunden sind keine zulässige Eingabe.",
    "example": "1 700 000 000 entsprechen dem 14.11.2023 um 22:13:20 UTC, einem Dienstag.",
    "faq": [
      {
        "q": "Warum nur UTC?",
        "a": "Damit derselbe Zeitstempel immer dasselbe Datum zeigt. Die Zeitzone des Lesers anzuwenden hieße, dass ein geteiltes Ergebnis auf verschiedenen Rechnern Verschiedenes bedeutet."
      },
      {
        "q": "Werden Schaltsekunden berücksichtigt?",
        "a": "Nein, und die Unix-Zeit selbst tut es auch nicht: jeder Tag gilt als genau 86 400 Sekunden, so schreibt es der Standard vor."
      },
      {
        "q": "Kann ein Zeitstempel negativ sein?",
        "a": "Ja. Negative Werte sind Daten vor 1970, und sie werden genauso umgerechnet."
      },
      {
        "q": "Sekunden oder Millisekunden?",
        "a": "Die Eingabe erfolgt in Sekunden, so ist es unter Unix üblich. Systeme, die in Millisekunden zählen, brauchen den Wert mal tausend."
      }
    ],
    "disclaimer": "Deterministische Umrechnung ganzer Sekunden und gültiger UTC-Daten, Jahre 0001–9999. Keine Zeitzonenumrechnung, aktuelle Uhrzeit, Schaltsekunden oder Millisekundenanteile."
  },
  "es": {
    "shortDescription": "Convierte entre tiempo Unix y una fecha UTC en ambos sentidos.",
    "seoDescription": "Convierte segundos Unix enteros y fechas UTC válidas en ambos sentidos, años 0001–9999. Admite segundos negativos anteriores a la época, sin fracción de milisegundo.",
    "longDescription": "Cuenta segundos desde el uno de enero de 1970 y de vuelta, siempre en UTC. La zona horaria del navegador no entra a propósito: el mismo número tiene que dar la misma fecha para todo el mundo, o un enlace compartido mostraría algo distinto a cada lector. Los valores negativos son fechas corrientes anteriores a la época.",
    "howToUse": [
      "Elige el sentido que necesitas.",
      "Introduce la marca de tiempo, o la fecha y la hora en UTC.",
      "Consulta el valor convertido y el día de la semana."
    ],
    "howItWorks": "Los segundos Unix enteros se cuentan desde 1970-01-01T00:00:00Z. Se usa el calendario gregoriano UTC, años 0001–9999 y días de 86 400 segundos; no se modelan segundos intercalares. Se comprueba la fecha real: 1900-02-29 se rechaza y 2000-02-29 es válida. Horas 0–23 y minutos/segundos 0–59 deben ser enteros. Intervalo timestamp: −62 135 596 800…253 402 300 799. No admite entrada en milisegundos.",
    "example": "1 700 000 000 corresponde al 14-11-2023 a las 22:13:20 UTC, un martes.",
    "faq": [
      {
        "q": "¿Por qué solo UTC?",
        "a": "Para que la misma marca de tiempo muestre siempre la misma fecha. Aplicar la zona horaria del lector haría que un resultado compartido significara cosas distintas en cada máquina."
      },
      {
        "q": "¿Se tienen en cuenta los segundos intercalares?",
        "a": "No, y el propio tiempo Unix tampoco: cada día se trata como exactamente 86 400 segundos, que es lo que fija la norma."
      },
      {
        "q": "¿Una marca de tiempo puede ser negativa?",
        "a": "Sí. Los valores negativos son fechas anteriores a 1970, y se convierten exactamente igual."
      },
      {
        "q": "¿Segundos o milisegundos?",
        "a": "El dato va en segundos, el convenio habitual de Unix. Los sistemas que cuentan en milisegundos necesitan el valor multiplicado por mil."
      }
    ],
    "disclaimer": "Conversión determinista de segundos enteros y fechas UTC válidas, años 0001–9999. Sin conversión de zonas, consulta de hora actual, segundos intercalares ni fracciones de milisegundo."
  }
};
