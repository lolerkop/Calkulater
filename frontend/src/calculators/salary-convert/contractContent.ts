import type { CalculatorDef } from '../../lib/types';

type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
// Starts from the five actual145 public bodies; bounded model corrections
// and independently checked examples are authored per subject and locale.
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Переводит оплату между часом, днём, неделей, месяцем и годом через фиксированные часы: 8, 40, 168 и 2016 соответственно. Это условная модель для сопоставления сумм, не установленная законом или договором норма: её год состоит из 12 месяцев и 50,4 таких недель. Конкретный календарь, отпуск, налог и фактический график здесь не подставляются. Все периоды показаны рядом, чтобы сравнивать предложения на одинаковой базе, а не по запомненным суммам.",
    "howToUse": [
      "Введите сумму, которая вам известна.",
      "Выберите период, к которому эта сумма относится.",
      "Выберите период, в который нужно перевести.",
      "Остальные периоды показаны рядом для сравнения."
    ],
    "howItWorks": "Сумма делится на часы своего периода и умножается на часы целевого. День 8 ч, неделя 40 ч, месяц 168 ч, год 2 016 ч.",
    "example": "180 000 ₽ в месяц — это 2 160 000 ₽ в год и около 1 071,43 ₽ в час. Проверка границы модели: 40 за неделю означает 1 за час, 168 за месяц и 2016 за год, а не 2080 по календарному правилу 52 недель. Исходный и целевой одинаковые периоды сохраняют сумму.",
    "faq": [
      {
        "q": "Почему в месяце 168 часов, а не по календарю?",
        "a": "Это выбранная модель: 21 день × 8 часов. Она не утверждает, что каждый договор или месяц содержит 168 часов. Год здесь равен 2016 часам, поэтому перевод из недельной ставки не следует правилу 52 недель; для реального графика используйте фактические часы отдельно."
      },
      {
        "q": "Учитываются ли отпуск и праздники?",
        "a": "Нет. Здесь одинаковые условные часы для всех сумм. Стоимость фактически отработанного часа требует отдельно определить выплаченный доход и реальные часы, включая правила оплачиваемого и неоплачиваемого отсутствия."
      },
      {
        "q": "Стоит ли сравнивать предложения по часовой ставке?",
        "a": "Часовая база помогает, но этот инструмент не меняет число часов под четырёхдневный график. При равной недельной оплате 32 вместо 40 часов означает на 20% меньше времени и на 25% выше оплату часа. Взносы, отпуск и условия договора сравнивайте отдельно."
      },
      {
        "q": "Сумма берётся до налогов или после?",
        "a": "Та, которую вы ввели. Перевод пропорционален: начисленная на входе даёт начисленную на выходе, чистая — чистую."
      }
    ],
    "disclaimer": "Фиксированные 8/40/168/2016 часов служат только этой модели сравнения. Календарная норма, фактические рабочие часы, оплачиваемое отсутствие и налоговые преобразования не рассчитываются."
  },
  "en": {
    "longDescription": "Converts pay between hour, day, week, month and year using fixed hours: 8, 40, 168 and 2016 respectively. This is a comparison model rather than a statutory or contractual norm: its year contains 12 months and 50.4 of these weeks. It does not substitute a real calendar, leave, taxes or actual schedule. Periods appear together so offers can be compared on the same basis rather than remembered figures.",
    "howToUse": [
      "Enter the amount you already know.",
      "Choose the period that amount refers to.",
      "Choose the period you want it converted into.",
      "The remaining periods are shown alongside for comparison."
    ],
    "howItWorks": "The amount is divided by the hours in its own period and multiplied by the hours in the target one. Day 8 h, week 40 h, month 168 h, year 2,016 h.",
    "example": "180,000 a month is 2,160,000 a year and about 1,071.43 an hour. Model check: 40 per week gives 1 per hour, 168 per month and 2016 per year, not 2080 from a 52-week calendar convention. Identical source and target periods preserve the amount.",
    "faq": [
      {
        "q": "Why is a month 168 hours rather than the actual calendar?",
        "a": "It is the selected model: 21 days × 8 hours. It does not assert that every contract or month has 168 hours. The modeled year has 2016 hours, so weekly-to-year conversion does not use 52 weeks; use actual hours separately for a real schedule."
      },
      {
        "q": "Does this account for holidays and paid leave?",
        "a": "No. All amounts use the same modeled hours. Pay per hour actually worked needs a separate definition of paid income and actual hours, including paid and unpaid absence arrangements."
      },
      {
        "q": "Should I compare offers on the hourly figure?",
        "a": "An hourly basis helps, but this tool does not change its hours for a four-day schedule. At equal weekly pay, 32 rather than 40 hours means 20% less time and 25% higher hourly pay. Compare contributions, leave and contract terms separately."
      },
      {
        "q": "Is the amount gross or net?",
        "a": "Whatever you enter. The conversion is proportional, so gross in gives gross out, and net in gives net out."
      }
    ],
    "disclaimer": "Fixed 8/40/168/2016 hours belong only to this comparison model. Calendar norms, actual hours, paid absence and tax conversions are not calculated."
  },
  "uk": {
    "longDescription": "Переводить оплату між годиною, днем, тижнем, місяцем і роком за фіксованими годинами: 8, 40, 168 та 2016 відповідно. Це модель порівняння, не законодавча чи договірна норма: її рік містить 12 місяців і 50,4 таких тижня. Календар, відпустка, податки та фактичний графік тут не підставляються. Усі періоди показані разом, щоб зіставляти пропозиції на однаковій базі.",
    "howToUse": [
      "Виберіть вихідний період.",
      "Введіть суму.",
      "Виберіть цільовий період."
    ],
    "howItWorks": "Сума ділиться на години свого періоду й множиться на години цільового. Прийнято такі норми: день 8 годин, тиждень 40 годин, місяць 168 годин, рік 2016 годин. Це умовні середні значення, зручні для порівняння.",
    "example": "180 000 ₴ на місяць — це 2 160 000 ₴ на рік і близько 1071,43 ₴ на годину. Перевірка моделі: 40 за тиждень дає 1 за годину, 168 за місяць і 2016 за рік, не 2080 за календарним правилом 52 тижнів. Однакові вихідний і цільовий періоди зберігають суму.",
    "faq": [
      {
        "q": "Чому в місяці 168 годин?",
        "a": "Це обрана модель: 21 день × 8 годин, а не твердження про кожен договір чи місяць. Рік тут має 2016 годин, тому переведення тижневої ставки в річну не використовує 52 тижні. Для фактичного графіка потрібні окремі реальні години."
      },
      {
        "q": "Чи враховано відпустку й свята?",
        "a": "Ні. Усі суми використовують однакові умовні години. Оплата фактично відпрацьованої години потребує окремо визначити виплачений дохід і реальні години з урахуванням оплачуваної та неоплачуваної відсутності."
      },
      {
        "q": "Як порівняти оклад і погодинну ставку чесно?",
        "a": "Погодинна база допомагає, але цей інструмент не змінює години під чотириденний графік. За однакової тижневої оплати 32 замість 40 годин означає на 20% менше часу й на 25% вищу оплату години. Внески, відпустку й умови договору зіставляйте окремо."
      },
      {
        "q": "Суми до податків чи після?",
        "a": "Пропорційний перерахунок зберігає введену базу: нарахована сума дає нараховану, чиста — чисту. Він не обчислює податок і не перетворює одну базу на іншу; для порівняння не змішуйте їх."
      }
    ],
    "disclaimer": "Фіксовані 8/40/168/2016 годин стосуються лише цієї моделі порівняння. Календарна норма, фактичні години, оплачувана відсутність і перерахунок податків не обчислюються."
  },
  "de": {
    "longDescription": "Rechnet Vergütung zwischen Stunde, Tag, Woche, Monat und Jahr mit festen Stunden um: 8, 40, 168 und 2016. Das ist ein Vergleichsmodell, keine gesetzliche oder vertragliche Norm: sein Jahr umfasst 12 Monate und 50,4 solcher Wochen. Kalender, Urlaub, Steuern und tatsächlicher Arbeitsplan werden nicht eingesetzt. Die Zeiträume stehen nebeneinander, damit Angebote auf gleicher Basis verglichen werden können.",
    "howToUse": [
      "Trage den Betrag ein, den du bereits kennst.",
      "Wähle den Zeitraum, auf den sich dieser Betrag bezieht.",
      "Wähle den Zeitraum, in den du ihn umrechnen willst.",
      "Die übrigen Zeiträume stehen zum Vergleich daneben."
    ],
    "howItWorks": "Der Betrag wird durch die Stunden seines eigenen Zeitraums geteilt und mit den Stunden des Zielzeitraums multipliziert. Tag 8 h, Woche 40 h, Monat 168 h, Jahr 2016 h.",
    "example": "4200 € im Monat sind 50 400 € im Jahr und 25 € in der Stunde. Modellprüfung: 40 je Woche ergeben 1 je Stunde, 168 je Monat und 2016 je Jahr, nicht 2080 nach einer 52-Wochen-Konvention. Gleiche Ausgangs- und Zielzeiträume erhalten den Betrag.",
    "faq": [
      {
        "q": "Warum hat ein Monat 168 Stunden und nicht den wirklichen Kalender?",
        "a": "Es ist das gewählte Modell: 21 Tage × 8 Stunden, keine Aussage über jeden Vertrag oder Monat. Das Modelljahr hat 2016 Stunden; die Umrechnung vom Wochenbetrag nutzt daher nicht 52 Wochen. Für reale Arbeitspläne sind tatsächliche Stunden gesondert nötig."
      },
      {
        "q": "Sind Feiertage und Urlaub berücksichtigt?",
        "a": "Nein. Alle Beträge nutzen dieselben Modellstunden. Vergütung je tatsächlich gearbeiteter Stunde erfordert eine getrennte Ermittlung von ausgezahltem Einkommen und realen Stunden samt bezahlten und unbezahlten Abwesenheiten."
      },
      {
        "q": "Soll ich Angebote über den Stundenlohn vergleichen?",
        "a": "Eine Stundenbasis hilft, aber dieses Werkzeug passt Stunden nicht an eine Viertagewoche an. Bei gleicher Wochenvergütung bedeuten 32 statt 40 Stunden 20% weniger Zeit und 25% höheren Stundenwert. Beiträge, Urlaub und Vertragsbedingungen sind getrennt zu vergleichen."
      },
      {
        "q": "Ist der Betrag brutto oder netto?",
        "a": "Was immer du einträgst. Die Umrechnung ist proportional: brutto hinein ergibt brutto heraus, netto hinein ergibt netto heraus."
      }
    ],
    "disclaimer": "Feste 8/40/168/2016 Stunden gelten nur für dieses Vergleichsmodell. Kalendernormen, tatsächliche Stunden, bezahlte Abwesenheit und Steuerumrechnungen werden nicht berechnet."
  },
  "es": {
    "longDescription": "Convierte remuneración entre hora, día, semana, mes y año con horas fijas: 8, 40, 168 y 2016 respectivamente. Es un modelo de comparación, no una norma legal o contractual: su año contiene 12 meses y 50,4 de esas semanas. No introduce calendario real, vacaciones, impuestos ni jornada efectiva. Los periodos aparecen juntos para comparar ofertas sobre la misma base.",
    "howToUse": [
      "Introduce el importe que ya conoces.",
      "Elige el periodo al que se refiere ese importe.",
      "Elige el periodo al que quieres convertirlo.",
      "Los demás periodos aparecen al lado para comparar."
    ],
    "howItWorks": "El importe se divide entre las horas de su propio periodo y se multiplica por las del periodo de destino. Día 8 h, semana 40 h, mes 168 h, año 2016 h.",
    "example": "1800 al mes son 21 600 al año y unos 10,71 por hora. Comprobación del modelo: 40 semanales dan 1 por hora, 168 al mes y 2016 al año, no 2080 según 52 semanas. Periodos de origen y destino iguales conservan el importe.",
    "faq": [
      {
        "q": "¿Por qué un mes son 168 horas y no el calendario real?",
        "a": "Es el modelo elegido: 21 días × 8 horas, no una afirmación sobre cada contrato o mes. El año modelado tiene 2016 horas; convertir un salario semanal a anual no usa 52 semanas. Para una jornada real hacen falta horas efectivas aparte."
      },
      {
        "q": "¿Tiene en cuenta los festivos y las vacaciones retribuidas?",
        "a": "No. Todos los importes usan las mismas horas modeladas. Pago por hora efectivamente trabajada exige definir aparte ingresos pagados y horas reales, incluidas ausencias pagadas y no pagadas."
      },
      {
        "q": "¿Debo comparar ofertas por la cifra horaria?",
        "a": "La base horaria ayuda, pero esta herramienta no adapta sus horas a una semana de cuatro días. Con igual sueldo semanal, 32 en vez de 40 horas son un 20% menos de tiempo y un 25% más por hora. Compara aparte cotizaciones, vacaciones y condiciones."
      },
      {
        "q": "¿El importe es bruto o neto?",
        "a": "El que introduzcas. La conversión es proporcional, así que un bruto de entrada da un bruto de salida y un neto de entrada, un neto de salida."
      }
    ],
    "disclaimer": "Las 8/40/168/2016 horas fijas solo corresponden a este modelo. No calcula normas de calendario, horas reales, ausencias pagadas ni conversiones fiscales."
  }
};
