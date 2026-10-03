import type { CalculatorDef } from '../../lib/types';

// Reviewed original public145 bodies are retained where factual. Native corrections
// are AI authored; human subject and language review remains pending.
type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Табель считают не по одной смене, а по неделе целиком, и именно там теряются минуты: где-то перерыв сорок пять минут вместо часа, где-то смена ушла за полночь, где-то день короткий. Здесь каждая смена задаётся строкой, а итог собирается в целых минутах и переводится в часы один раз — поэтому сумма сходится с тем, что стоит в бумажном табеле. Ночная смена вида 22:00,06:00 понимается как переход через полночь, а не как ошибка. Это учёт показаний часов без дат и часовых поясов. Оплата использует введённую норму и фиксированный коэффициент 1,5 для всех часов сверх неё; модель не определяет законные сверхурочные, ночные доплаты или правила конкретного договора.",
    "howItWorks": "Одна строка содержит ровно начало,конец или начало,конец,перерыв. Время задаётся HH:MM, перерыв — целые неотрицательные минуты, пустой перерыв равен 0. Если конец меньше начала, добавляются 1440 минут; одинаковые время начала и конца дают 0, не 24 часа. Сумма ведётся в целых минутах. Оплата = min(часы,норма)×ставка + max(часы−норма,0)×ставка×1,5. Часы нормы могут быть дробными; переходы летнего времени и смены дольше суток не моделируются.",
    "example": "Пять смен с перерывами дают 36,75 часа и 18 375 ₽ при ставке 500 ₽ в час. Строка 22:00,06:00,30 даёт 7,5 часа; одинаковые начало и конец без перерыва дают 0 часов.",
    "howToUse": [
      "Одна смена — одна строка: начало, конец и перерыв в минутах через запятую.",
      "Перерыв можно не указывать: строка «09:00,18:00» считается сменой без перерыва.",
      "Ночная смена задаётся как есть: 22:00,06:00 понимается как переход через полночь.",
      "Всё, что сверх нормы часов, идёт в сверхурочные с коэффициентом полтора.",
      "Вводите только вычитаемые перерывы целыми минутами. Для оплаты по другим коэффициентам используйте часы из результата и свой отдельный расчёт."
    ],
    "faq": [
      {
        "q": "Почему считается в минутах, а не сразу в часах?",
        "a": "Смена 8 часов 45 минут — это 8,75 часа, а смена 7 часов 20 минут — 7,333…. Складывать такие дроби и округлять каждую по дороге значит потерять минуты; в целых минутах итог сходится точно."
      },
      {
        "q": "Как задать ночную смену?",
        "a": "Обычной строкой: 22:00,06:00. Если конец меньше начала, смена считается перешедшей через полночь, и к концу добавляются сутки."
      },
      {
        "q": "Откуда берётся коэффициент полтора?",
        "a": "Он фиксирован в этой учебной модели и применяется ко всем часам сверх введённой нормы. Это не расчёт обязательной выплаты по законодательству: правила могут различать дни, типы часов, ставки и исключения. Если ваш порядок другой, используйте расчёт часов, а деньги пересчитайте отдельно."
      },
      {
        "q": "Что если перерыв длиннее смены?",
        "a": "Такая строка отклоняется. Отрицательное рабочее время означает опечатку во времени или в перерыве, и молча превращать его в ноль было бы хуже, чем сказать об этом."
      }
    ],
    "disclaimer": "Часы по показаниям без дат и DST; фиксированная доплата 1,5 сверх введённой нормы. Не юридический расчёт обязательной зарплаты."
  },
  "en": {
    "longDescription": "A timesheet is settled for the whole week rather than a single shift, and that is exactly where minutes go missing: a forty-five minute break here, a shift running past midnight there, a short day at the end. Each shift is one line, the total is accumulated in whole minutes and converted to hours only once — so the sum matches the paper sheet. A line such as 22:00,06:00 is understood as crossing midnight, not as an error. This records clock readings without dates or time zones. Pay uses the entered standard hours and a fixed 1.5 multiplier for every hour above them; it does not determine legal overtime, night premiums or contract-specific rules.",
    "howItWorks": "Each row has exactly start,end or start,end,break. Times use HH:MM; breaks are whole nonnegative minutes, with blank meaning 0. An end earlier than the start adds 1440 minutes; equal start and end mean 0 rather than 24 hours. Minutes are summed exactly. Pay = min(hours,standard)×rate + max(hours−standard,0)×rate×1.5. Standard hours may be fractional. Daylight-saving changes and shifts longer than a day are not modelled.",
    "example": "Five shifts with breaks add up to 36.75 hours and 18,375 at a rate of 500 per hour. Row 22:00,06:00,30 gives 7.5 hours; equal start and end with no break give 0 hours.",
    "howToUse": [
      "One shift per line: start, end and break in minutes separated by commas.",
      "The break may be omitted: a line of 09:00,18:00 counts as a shift with no break.",
      "A night shift is written as it is: 22:00,06:00 is read as crossing midnight.",
      "Anything above the standard hours goes to overtime at one and a half times the rate.",
      "Enter only breaks to be excluded, in whole minutes. For other pay multipliers, use the resulting hours and a separate payroll calculation."
    ],
    "faq": [
      {
        "q": "Why count in minutes rather than hours?",
        "a": "A shift of 8 hours 45 minutes is 8.75 hours, one of 7 hours 20 minutes is 7.333…. Adding such fractions and rounding each on the way loses minutes; in whole minutes the total is exact."
      },
      {
        "q": "How do I enter a night shift?",
        "a": "As an ordinary line: 22:00,06:00. When the end is earlier than the start, the shift is treated as crossing midnight and a day is added to the end."
      },
      {
        "q": "Where does the 1.5 multiplier come from?",
        "a": "It is fixed in this teaching model for all hours above your entered standard. It is not a statutory payroll calculation: rules may distinguish days, types of hours, rates and exceptions. Use the hour totals and calculate pay separately if your rules differ."
      },
      {
        "q": "What if the break is longer than the shift?",
        "a": "That line is rejected. Negative working time means a typo in the times or in the break, and silently turning it into zero would be worse than saying so."
      }
    ],
    "disclaimer": "Clock hours without dates or DST; fixed 1.5 pay above the entered standard. Not a legal calculation of required wages."
  },
  "uk": {
    "longDescription": "Табель рахують не за однією зміною, а за тижнем цілком, і саме там губляться хвилини: десь перерва сорок п’ять хвилин замість години, десь зміна перейшла через північ. За п’ять днів набігає розбіжність, яку помічають уже під час нарахування. Це облік показів годинника без дат і часових поясів. Оплата використовує введену норму та фіксований коефіцієнт 1,5 для всіх годин понад неї; модель не визначає законні надурочні, нічні доплати або правила конкретного договору.",
    "howItWorks": "Рядок має рівно початок,кінець або початок,кінець,перерва. Час у форматі HH:MM, перерва — цілі невід’ємні хвилини, порожня дорівнює 0. Якщо кінець раніше початку, додаються 1440 хвилин; однакові часи означають 0, не 24 години. Хвилини підсумовуються точно. Оплата = min(години,норма)×ставка + max(години−норма,0)×ставка×1,5. Норма може бути дробовою. Перехід на літній час і зміни довші за добу не моделюються.",
    "example": "П’ять змін із перервами дають 36,75 години і 18 375 ₴ за ставки 500 ₴ на годину. Чверть години різниці в перервах щодня — це вже понад годину за тиждень. Рядок 22:00,06:00,30 дає 7,5 години; однакові початок і кінець без перерви дають 0 годин.",
    "howToUse": [
      "Введіть початок і кінець кожної зміни.",
      "Введіть тривалість перерви в хвилинах.",
      "Задайте ставку й норму годин, понад яку йдуть надурочні.",
      "Вводьте лише перерви, які треба відняти, цілими хвилинами. Для інших коефіцієнтів оплати використайте підсумкові години й окремий розрахунок."
    ],
    "faq": [
      {
        "q": "Як рахується зміна через північ?",
        "a": "До кінця додається доба. Зміна з 22:00 до 06:00 дає вісім годин, а не мінус шістнадцять — розрахунок розпізнає перехід автоматично."
      },
      {
        "q": "Чи входить перерва в робочий час?",
        "a": "Указаний період перерви віднімається зі зміни незалежно від її правового статусу. Вводьте лише час, який за вашим правилом треба виключити. Оплачувану коротку перерву не віднімайте автоматично; калькулятор цього не вирішує."
      },
      {
        "q": "Як рахуються надурочні?",
        "a": "У цьому калькуляторі всі години понад введену норму оплачуються за фіксованим коефіцієнтом 1,5. Коефіцієнт не вводиться окремо. Якщо законодавство або договір передбачає інші ставки чи винятки, використайте підсумок годин, а оплату перерахуйте окремо."
      },
      {
        "q": "Чому підсумок за тиждень розходиться з ручним підрахунком?",
        "a": "Найчастіше через округлення хвилин. Розрахунок веде облік у хвилинах і переводить у години лише в підсумку, тоді як ручний підрахунок часто округлює кожну зміну."
      }
    ],
    "disclaimer": "Години за показами без дат і DST; фіксована доплата 1,5 понад введену норму. Не юридичний розрахунок обов’язкової зарплати."
  },
  "de": {
    "longDescription": "Ein Stundenzettel wird für die ganze Woche abgerechnet und nicht für eine einzelne Schicht, und genau dort gehen Minuten verloren: hier eine Pause von fünfundvierzig Minuten, dort eine Schicht über Mitternacht, am Ende ein kurzer Tag. Jede Schicht ist eine Zeile, die Summe wird in ganzen Minuten angesammelt und erst einmal am Schluss in Stunden umgerechnet — so stimmt die Summe mit dem Zettel auf Papier überein. Eine Zeile wie 22:00,06:00 wird als Übergang über Mitternacht verstanden und nicht als Fehler. Dies erfasst Uhrzeiten ohne Datum oder Zeitzone. Die Vergütung nutzt eingegebene Sollstunden und den festen Faktor 1,5 für alle Stunden darüber. Gesetzliche Überstunden, Nachtzuschläge und besondere Vertragsregeln werden nicht bestimmt.",
    "howItWorks": "Jede Zeile enthält genau Beginn,Ende oder Beginn,Ende,Pause. Uhrzeiten gelten als HH:MM; Pausen sind ganze nicht negative Minuten, leer bedeutet 0. Liegt das Ende vor dem Beginn, kommen 1440 Minuten hinzu; gleiche Uhrzeiten bedeuten 0 statt 24 Stunden. Minuten werden genau summiert. Vergütung = min(Stunden,Soll)×Satz + max(Stunden−Soll,0)×Satz×1,5. Sollstunden dürfen gebrochen sein. Sommerzeitwechsel und Schichten über einen Tag werden nicht modelliert.",
    "example": "Fünf Schichten mit Pausen ergeben zusammen 36,75 Stunden und 551,25 € bei einem Satz von 15 € je Stunde. Zeile 22:00,06:00,30 ergibt 7,5 Stunden; gleicher Beginn und Ende ohne Pause ergeben 0 Stunden.",
    "howToUse": [
      "Eine Schicht je Zeile: Beginn, Ende und Pause in Minuten mit Kommas getrennt.",
      "Die Pause darf entfallen: eine Zeile 09:00,18:00 zählt als Schicht ohne Pause.",
      "Eine Nachtschicht wird geschrieben, wie sie ist: 22:00,06:00 gilt als Übergang über Mitternacht.",
      "Alles über den Sollstunden geht als Überstunde zum Anderthalbfachen des Satzes.",
      "Trage nur abzuziehende Pausen in ganzen Minuten ein. Verwende bei anderen Vergütungsfaktoren die Stunden und eine separate Lohnberechnung."
    ],
    "faq": [
      {
        "q": "Warum wird in Minuten und nicht in Stunden gezählt?",
        "a": "Eine Schicht von 8 Stunden 45 Minuten sind 8,75 Stunden, eine von 7 Stunden 20 Minuten sind 7,333… Solche Brüche zu addieren und unterwegs jeden zu runden verliert Minuten; in ganzen Minuten ist die Summe genau."
      },
      {
        "q": "Wie trage ich eine Nachtschicht ein?",
        "a": "Als gewöhnliche Zeile: 22:00,06:00. Liegt das Ende vor dem Beginn, gilt die Schicht als über Mitternacht laufend, und dem Ende wird ein Tag zugerechnet."
      },
      {
        "q": "Woher kommt der Faktor 1,5?",
        "a": "Der Faktor ist in diesem Lehrmodell für alle Stunden oberhalb deiner Sollzeit fest. Es ist keine gesetzliche Lohnabrechnung; Regeln können Tage, Stundenarten, Sätze und Ausnahmen unterscheiden. Nutze bei anderen Regeln die Stunden und berechne die Vergütung getrennt."
      },
      {
        "q": "Was, wenn die Pause länger ist als die Schicht?",
        "a": "Diese Zeile wird abgewiesen. Negative Arbeitszeit heißt einen Tippfehler in den Uhrzeiten oder in der Pause, und sie stillschweigend zu null zu machen wäre schlechter, als es zu sagen."
      }
    ],
    "disclaimer": "Uhrzeiten ohne Datum oder Sommerzeitwechsel; fester Faktor 1,5 über eingegebenem Soll. Keine gesetzliche Berechnung verpflichtender Löhne."
  },
  "es": {
    "longDescription": "Un parte de horas se liquida por toda la semana y no por un solo turno, y ahí es justo donde se pierden los minutos: un descanso de cuarenta y cinco minutos aquí, un turno que pasa de medianoche allá, una jornada corta al final. Cada turno es una línea, el total se acumula en minutos enteros y se convierte a horas una sola vez, así que la suma coincide con el parte en papel. Una línea como 22:00,06:00 se entiende como un cruce de medianoche y no como un error. El parte usa horas del reloj sin fechas ni zonas horarias. El pago aplica la jornada introducida y un multiplicador fijo 1,5 a todas las horas superiores. No determina horas extra legales, pluses nocturnos ni reglas de un contrato.",
    "howItWorks": "Cada fila contiene exactamente inicio,fin o inicio,fin,descanso. Horas en HH:MM y descansos en minutos enteros no negativos, vacío significa 0. Si el fin es anterior al inicio, se añaden 1440 minutos; horas iguales significan 0 y no 24 horas. Se suman minutos exactos. Pago = min(horas,jornada)×tarifa + max(horas−jornada,0)×tarifa×1,5. La jornada admite fracciones. No se modelan cambios de horario estacional ni turnos superiores a un día.",
    "example": "Cinco turnos con descansos suman 36,75 horas y 367,50 con una tarifa de 10 por hora. La fila 22:00,06:00,30 da 7,5 horas; inicio y fin iguales sin descanso dan 0 horas.",
    "howToUse": [
      "Un turno por línea: inicio, fin y descanso en minutos separados por comas.",
      "El descanso puede omitirse: una línea 09:00,18:00 cuenta como un turno sin descanso.",
      "Un turno de noche se escribe tal cual: 22:00,06:00 se lee como cruce de medianoche.",
      "Todo lo que pase de la jornada estándar va a horas extra a una vez y media la tarifa.",
      "Introduce solo descansos que deban descontarse, en minutos enteros. Con otros multiplicadores usa las horas calculadas y un pago separado."
    ],
    "faq": [
      {
        "q": "¿Por qué contar en minutos y no en horas?",
        "a": "Un turno de 8 horas y 45 minutos son 8,75 horas y uno de 7 horas y 20 minutos, 7,333… Sumar esas fracciones redondeando cada una por el camino pierde minutos; en minutos enteros el total es exacto."
      },
      {
        "q": "¿Cómo introduzco un turno de noche?",
        "a": "Como una línea corriente: 22:00,06:00. Cuando el fin es anterior al inicio, el turno se trata como cruce de medianoche y se suma un día al fin."
      },
      {
        "q": "¿De dónde sale el multiplicador 1,5?",
        "a": "Es fijo en este modelo didáctico para todas las horas sobre la jornada introducida. No calcula nómina legal: las reglas pueden distinguir días, clases de horas, tipos y excepciones. Si tus reglas difieren, usa las horas y calcula el pago aparte."
      },
      {
        "q": "¿Y si el descanso es más largo que el turno?",
        "a": "Esa línea se rechaza. Un tiempo de trabajo negativo significa una errata en las horas o en el descanso, y convertirlo en silencio en cero sería peor que decirlo."
      }
    ],
    "disclaimer": "Horas del reloj sin fechas ni cambios estacionales; pago fijo 1,5 sobre la jornada introducida. No cálculo legal de salarios obligatorios."
  }
};
