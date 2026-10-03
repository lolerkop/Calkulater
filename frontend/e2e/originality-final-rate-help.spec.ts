import { expect, test, type Page } from '@playwright/test';

// Narrow20native-help amendment. The body/metadata/fields below are immutable
// published records, NOT numerical oracles. Fixed scenario arithmetic is
// written separately and does not import registry, runtime or compute code.
type Locale = 'ru' | 'en' | 'uk' | 'de' | 'es';
type Id = 'overtime' | 'timesheet-week' | 'currency-exchange-fee' | 'password-entropy';
type Values = Record<string, string | number>;
type Sample = {
  id: Id; locale: Locale; path: string; h1: string; title: string;
  description: string; canonical: string;
  body: { intro: string; howItWorks: string; example: string; tips: string; faq: { q: string; a: string }[] };
  howToUse: string[]; disclaimer: string | null; sources: string[]; defaults: Values;
  fields: { name: string; type: string; label: string; unit: string | null; help: string | null }[];
  rateLabel: string; rateUnit: string; rateHelp: string;
};
const samples: Sample[] = [
  {
    "id": "overtime",
    "locale": "ru",
    "path": "/ru/finance/overtime-pay/",
    "h1": "Калькулятор сверхурочных",
    "title": "Калькулятор сверхурочных: оплата и средняя ставка — Калькуляторы",
    "description": "Рассчитайте оплату за период по ставке, обычным и сверхурочным часам и коэффициенту, вместе со средней ставкой за отработанный час.",
    "canonical": "https://calcuway.com/ru/finance/overtime-pay/",
    "body": {
      "intro": "Сверхурочные оплачиваются обычной ставкой с надбавочным коэффициентом, который применяется только к часам сверх нормы. Средняя ставка за час рядом с итогом — та величина, которую стоит читать: она делит всё заработанное на все отработанные часы и растёт куда слабее, чем обещает коэффициент. Четырнадцать сверхурочных часов по полтора поверх ста шестидесяти обычных поднимают среднюю ставку на четыре процента, а не на пятьдесят. Именно этот разрыв и делает сверхурочные привлекательнее в договоре, чем в расчётном листке.",
      "howItWorks": "Обычная оплата = ставка × обычные часы. Сверхурочные = ставка × коэффициент × сверхурочные часы. Средняя ставка делит итог на все отработанные часы. Обычные и сверхурочные часы могут быть дробными, но не отрицательными. Один выбранный коэффициент применяется ко всем введённым сверхурочным часам; пороги по дням, неделям и разным ступеням не определяются автоматически. При нулевом общем времени сумма 0, а средняя ставка не показывается, поскольку 0/0 не имеет значения.",
      "example": "При ставке 650 ₽, 160 обычных и 14 сверхурочных часах по 1,5 выходит 117 650 ₽ — в среднем 676,15 ₽ за час. Если обычных и сверхурочных часов по 0, обе суммы и итог равны 0, а средней ставки нет. Это отличается от действительной ставки 0 за положительное время.",
      "tips": "Введите обычную ставку за час. Укажите обычные часы за период. Сверхурочные часы укажите отдельно. Введите один коэффициент, применимый к этому блоку часов;1,5 — пример, а не автоматическое определение права на доплату.",
      "faq": [
        {
          "q": "Почему средняя ставка намного ниже коэффициента?",
          "a": "Потому что надбавка касается только сверхурочных часов, а среднее делится на все. Небольшой блок надбавочных часов сдвигает среднее очень слабо."
        },
        {
          "q": "Какой коэффициент подставлять?",
          "a": "Введите коэффициент для конкретного договора и блока часов. Например, правило FLSA США о 1,5 относится к охваченным законом работникам без освобождения и рабочей неделе; оно не является общей мировой ставкой. Если разные часы имеют разные надбавки, считайте блоки отдельно."
        },
        {
          "q": "Расчёт до налогов или после?",
          "a": "До. Это начисленная сумма; налог на доходы и взносы применяются позже и в расчёт не входят."
        },
        {
          "q": "Почему коэффициент меньше единицы отклоняется?",
          "a": "Эта модель описывает доплату и поэтому принимает коэффициент не ниже 1. Ограничение поля не подтверждает юридическое право на сверхурочные и не проверяет законность конкретной оплаты."
        }
      ]
    },
    "howToUse": [
      "Введите обычную ставку за час.",
      "Укажите обычные часы за период.",
      "Сверхурочные часы укажите отдельно.",
      "Введите один коэффициент, применимый к этому блоку часов;1,5 — пример, а не автоматическое определение права на доплату."
    ],
    "disclaimer": "Модель одного блока сверхурочных с введённой базовой ставкой. Право на доплату, порог часов, состав regular rate, налоги и ограничения рабочего времени зависят от применимых правил; язык страницы не выбирает трудовое законодательство.",
    "sources": [
      "https://webapps.dol.gov/elaws/otcalculator.htm"
    ],
    "defaults": {
      "rate": 650,
      "normalHours": 160,
      "overtimeHours": 14,
      "multiplier": 1.5
    },
    "fields": [
      {
        "name": "rate",
        "type": "number",
        "label": "Ставка за час",
        "unit": "₽",
        "help": "Базовая оплата одного обычного рабочего часа; для сверхурочных применяется выбранный коэффициент."
      },
      {
        "name": "normalHours",
        "type": "number",
        "label": "Обычных часов",
        "unit": null,
        "help": "Часы обычного блока, в том числе дробные; календарный порог не подставляется."
      },
      {
        "name": "overtimeHours",
        "type": "number",
        "label": "Сверхурочных часов",
        "unit": null,
        "help": null
      },
      {
        "name": "multiplier",
        "type": "number",
        "label": "Коэффициент сверхурочных",
        "unit": null,
        "help": "Один выбранный коэффициент от 1 для всего блока; 1,5 не является мировой нормой."
      }
    ],
    "rateLabel": "Ставка за час",
    "rateUnit": "₽",
    "rateHelp": "Базовая оплата одного обычного рабочего часа; для сверхурочных применяется выбранный коэффициент."
  },
  {
    "id": "overtime",
    "locale": "en",
    "path": "/en/finance/overtime-pay-calculator/",
    "h1": "Overtime pay calculator",
    "title": "Overtime pay calculator — total and effective rate — Calculators",
    "description": "Calculate monthly pay from an hourly rate, regular and overtime hours and the overtime multiplier, together with the effective hourly rate.",
    "canonical": "https://calcuway.com/en/finance/overtime-pay-calculator/",
    "body": {
      "intro": "Overtime pay is the ordinary rate multiplied by a premium, applied only to the hours beyond the normal schedule. The effective hourly rate shown next to the total is the part worth reading: it divides everything earned by every hour worked, and it rises far less than the multiplier suggests. Fourteen overtime hours at time and a half on top of a hundred and sixty regular ones lift the effective rate by four per cent, not fifty. That gap is exactly what makes overtime look better in a contract than it feels in a payslip.",
      "howItWorks": "Regular pay = rate × regular hours. Overtime pay = rate × multiplier × overtime hours. The effective rate divides the total by all hours worked. Regular and overtime hours may be fractional but not negative. One selected multiplier applies to the entire overtime block; daily, weekly and tiered thresholds are not determined automatically. With zero total hours, pay is 0 and the average is omitted because 0/0 has no defined value.",
      "example": "At 650 an hour, 160 regular and 14 overtime hours at 1.5 come to 117,650 — an effective 676.15 an hour. With both regular and overtime hours at 0, both pay components and the total are 0; the average is omitted. This differs from an actual zero rate for positive working time.",
      "tips": "Enter the ordinary hourly rate. Enter the regular hours worked in the period. Enter the overtime hours separately. Enter one multiplier applicable to this block of hours;1.5 is an example, not an automatic determination of overtime entitlement.",
      "faq": [
        {
          "q": "Why is the effective rate so much lower than the multiplier?",
          "a": "Because the premium applies only to the overtime hours but the average divides by all of them. A small block of premium hours moves the average very little."
        },
        {
          "q": "Which overtime multiplier applies to me?",
          "a": "Use the multiplier for the contract and block of hours. For example, the US FLSA 1.5 rule has coverage and exemption conditions and a workweek basis; it is not a worldwide rate. Calculate separately when different blocks have different premiums."
        },
        {
          "q": "Are the figures before or after tax?",
          "a": "Before. This is gross pay; income tax and contributions are applied afterwards and are outside the calculation."
        },
        {
          "q": "Why is a multiplier below one rejected?",
          "a": "This model represents a premium and therefore accepts multipliers of at least 1. The field constraint does not establish legal overtime entitlement or verify that a pay arrangement complies with local law."
        }
      ]
    },
    "howToUse": [
      "Enter the ordinary hourly rate.",
      "Enter the regular hours worked in the period.",
      "Enter the overtime hours separately.",
      "Enter one multiplier applicable to this block of hours;1.5 is an example, not an automatic determination of overtime entitlement."
    ],
    "disclaimer": "This is one overtime block at an entered base rate. Entitlement, hour thresholds, regular-rate components, taxes and time limits depend on applicable rules; page language does not select employment law.",
    "sources": [
      "https://webapps.dol.gov/elaws/otcalculator.htm"
    ],
    "defaults": {
      "rate": 650,
      "normalHours": 160,
      "overtimeHours": 14,
      "multiplier": 1.5
    },
    "fields": [
      {
        "name": "rate",
        "type": "number",
        "label": "Hourly rate",
        "unit": "$",
        "help": "Base pay for one regular work hour; the selected multiplier applies to overtime hours."
      },
      {
        "name": "normalHours",
        "type": "number",
        "label": "Regular hours",
        "unit": null,
        "help": "Regular-block hours, including fractions; no calendar threshold is inserted."
      },
      {
        "name": "overtimeHours",
        "type": "number",
        "label": "Overtime hours",
        "unit": null,
        "help": null
      },
      {
        "name": "multiplier",
        "type": "number",
        "label": "Overtime multiplier",
        "unit": null,
        "help": "One chosen multiplier from 1 for the whole block; 1.5 is not a worldwide rule."
      }
    ],
    "rateLabel": "Hourly rate",
    "rateUnit": "$",
    "rateHelp": "Base pay for one regular work hour; the selected multiplier applies to overtime hours."
  },
  {
    "id": "overtime",
    "locale": "uk",
    "path": "/uk/finansy/nadurochni/",
    "h1": "Калькулятор надурочних",
    "title": "Калькулятор надурочних: оплата та середня ставка — Калькулятори",
    "description": "Розрахунок оплати за місяць за ставкою, звичайними та надурочними годинами і коефіцієнтом, разом із середньою ставкою за годину.",
    "canonical": "https://calcuway.com/uk/finansy/nadurochni/",
    "body": {
      "intro": "Надурочні оплачуються з підвищувальним коефіцієнтом, і саме тому середня вартість години виявляється вищою за базову ставку. Розрахунок показує обидва числа — підсумкову оплату й фактичну середню ставку, яка й потрібна для порівняння варіантів зайнятості.",
      "howItWorks": "Звичайна оплата дорівнює ставка × звичайні години. Надурочні рахуються як ставка × коефіцієнт × надурочні години. Середня ставка — підсумкова оплата, поділена на всі відпрацьовані години. Звичайні й надурочні години можуть бути дробовими, але не від’ємними. Один обраний коефіцієнт застосовується до всього блоку надурочних; денні, тижневі та ступінчасті пороги не визначаються автоматично. За нульового часу сума 0, а середня ставка не показується, бо 0/0 не має визначеного значення.",
      "example": "За ставки 650 ₴, 160 звичайних і 14 надурочних годин за коефіцієнта 1,5 виходить 117 650 ₴ — у середньому 676,15 ₴ за годину. За нульових звичайних і надурочних годин обидві суми й підсумок 0, середньої ставки немає. Це відрізняється від справжньої нульової ставки за додатного часу.",
      "tips": "Введіть базову погодинну ставку. Введіть кількість звичайних годин. Введіть один коефіцієнт для цього блоку годин;1,5 є прикладом, не автоматичним визначенням права на доплату.",
      "faq": [
        {
          "q": "Який коефіцієнт застосовується?",
          "a": "Коефіцієнт залежить від застосовних правил і договору. Значення 1,5 у прикладі — обраний параметр; калькулятор не визначає право на надурочні, денні чи тижневі пороги або надбавки за вихідні."
        },
        {
          "q": "Навіщо знати середню ставку?",
          "a": "Щоб чесно порівнювати пропозиції. Робота з високою базовою ставкою й без надурочних може виявитися вигіднішою за роботу з низькою ставкою й регулярними переробками."
        },
        {
          "q": "Чи є межа надурочних годин?",
          "a": "Допустимість і межі надурочних залежать від країни, режиму роботи та винятків. Цей калькулятор не перевіряє трудових обмежень і не перетворює введені години на юридично дозволений графік."
        },
        {
          "q": "Чи входять надурочні в розрахунок відпускних?",
          "a": "Розрахунок показує лише оплату введеного блоку годин. Включення надурочних у відпускні чи інші виплати визначається окремими правилами; середній заробіток для таких виплат тут не розраховується."
        }
      ]
    },
    "howToUse": [
      "Введіть базову погодинну ставку.",
      "Введіть кількість звичайних годин.",
      "Введіть один коефіцієнт для цього блоку годин;1,5 є прикладом, не автоматичним визначенням права на доплату."
    ],
    "disclaimer": "Це один блок надурочних за введеною базовою ставкою. Право на доплату, поріг годин, склад бази, податки й обмеження часу залежать від правил; мова сторінки не обирає трудове законодавство.",
    "sources": [
      "https://webapps.dol.gov/elaws/otcalculator.htm"
    ],
    "defaults": {
      "rate": 650,
      "normalHours": 160,
      "overtimeHours": 14,
      "multiplier": 1.5
    },
    "fields": [
      {
        "name": "rate",
        "type": "number",
        "label": "Ставка за годину",
        "unit": "₴",
        "help": "Базова оплата однієї звичайної робочої години; для надурочних застосовується вибраний коефіцієнт."
      },
      {
        "name": "normalHours",
        "type": "number",
        "label": "Звичайні години",
        "unit": null,
        "help": "Години звичайного блоку, також дробові; календарний поріг не підставляється."
      },
      {
        "name": "overtimeHours",
        "type": "number",
        "label": "Надурочні години",
        "unit": null,
        "help": null
      },
      {
        "name": "multiplier",
        "type": "number",
        "label": "Коефіцієнт надурочних",
        "unit": null,
        "help": "Один коефіцієнт від 1 для всього блоку; 1,5 не світова норма."
      }
    ],
    "rateLabel": "Ставка за годину",
    "rateUnit": "₴",
    "rateHelp": "Базова оплата однієї звичайної робочої години; для надурочних застосовується вибраний коефіцієнт."
  },
  {
    "id": "overtime",
    "locale": "de",
    "path": "/de/finanzen/ueberstunden-rechner/",
    "h1": "Rechner für Überstundenvergütung",
    "title": "Überstunden berechnen — Summe und tatsächlicher Stundensatz — Rechner",
    "description": "Berechne den Monatslohn aus Stundensatz, regulären und Überstunden sowie dem Überstundenzuschlag, samt dem tatsächlichen Stundensatz.",
    "canonical": "https://calcuway.com/de/finanzen/ueberstunden-rechner/",
    "body": {
      "intro": "Die Überstundenvergütung ist der gewöhnliche Satz mal einem Zuschlag, angewendet allein auf die Stunden über der regulären Arbeitszeit. Der tatsächliche Stundensatz neben der Summe ist der Teil, der sich zu lesen lohnt: er teilt alles Verdiente durch alle geleisteten Stunden, und er steigt weit weniger, als der Faktor vermuten lässt. Vierzehn Überstunden mit dem Anderthalbfachen auf hundertsechzig reguläre heben den tatsächlichen Satz um vier Prozent und nicht um fünfzig. Genau dieser Abstand lässt Überstunden im Vertrag besser aussehen, als sie sich auf der Abrechnung anfühlen.",
      "howItWorks": "Reguläre Vergütung = Satz × reguläre Stunden. Überstundenvergütung = Satz × Faktor × Überstunden. Der tatsächliche Satz teilt die Summe durch alle geleisteten Stunden. Reguläre Stunden und Überstunden dürfen gebrochen, aber nicht negativ sein. Ein gewählter Faktor gilt für den gesamten Überstundenblock; Tages-, Wochen- und Stufengrenzen werden nicht automatisch ermittelt. Bei null Stunden beträgt die Vergütung 0; der Durchschnitt entfällt, weil 0/0 keinen definierten Wert hat.",
      "example": "Bei 20 € je Stunde ergeben 160 reguläre und 14 Überstunden mit dem Faktor 1,5 zusammen 3620 € — tatsächlich 20,80 € je Stunde. Bei null regulären und null Überstunden sind beide Beträge und die Summe 0; der Durchschnitt entfällt. Das ist etwas anderes als ein tatsächlicher Nullsatz für positive Arbeitszeit.",
      "tips": "Trage den gewöhnlichen Stundensatz ein. Trage die im Zeitraum geleisteten regulären Stunden ein. Trage die Überstunden gesondert ein. Gib einen für diesen Stundenblock geltenden Faktor ein;1,5 ist ein Beispiel, keine automatische Ermittlung eines Zuschlagsanspruchs.",
      "faq": [
        {
          "q": "Warum liegt der tatsächliche Satz so viel unter dem Faktor?",
          "a": "Weil der Zuschlag allein für die Überstunden gilt, der Durchschnitt aber durch alle Stunden teilt. Ein kleiner Block Zuschlagsstunden bewegt den Durchschnitt sehr wenig."
        },
        {
          "q": "Welcher Überstundenfaktor gilt für mich?",
          "a": "Verwende den Faktor für den konkreten Vertrag und Stundenblock. Die US-FLSA-Regel 1,5 hängt beispielsweise von Geltungsbereich, Ausnahmen und Arbeitswoche ab; sie ist kein weltweiter Satz. Rechne Blöcke mit verschiedenen Zuschlägen getrennt."
        },
        {
          "q": "Sind die Zahlen brutto oder netto?",
          "a": "Brutto. Lohnsteuer und Sozialabgaben kommen danach und liegen außerhalb dieser Rechnung."
        },
        {
          "q": "Warum wird ein Faktor unter eins abgewiesen?",
          "a": "Das Modell beschreibt einen Zuschlag und akzeptiert deshalb Faktoren ab 1. Diese Eingabegrenze begründet keinen gesetzlichen Überstundenanspruch und prüft keine Rechtmäßigkeit der Vergütung."
        }
      ]
    },
    "howToUse": [
      "Trage den gewöhnlichen Stundensatz ein.",
      "Trage die im Zeitraum geleisteten regulären Stunden ein.",
      "Trage die Überstunden gesondert ein.",
      "Gib einen für diesen Stundenblock geltenden Faktor ein;1,5 ist ein Beispiel, keine automatische Ermittlung eines Zuschlagsanspruchs."
    ],
    "disclaimer": "Das Modell umfasst einen Überstundenblock mit eingegebenem Basissatz. Anspruch, Stundenschwellen, Bestandteile des Grundsatzes, Steuern und Zeitgrenzen hängen von anwendbaren Regeln ab; die Sprache wählt kein Arbeitsrecht.",
    "sources": [
      "https://webapps.dol.gov/elaws/otcalculator.htm"
    ],
    "defaults": {
      "rate": 650,
      "normalHours": 160,
      "overtimeHours": 14,
      "multiplier": 1.5
    },
    "fields": [
      {
        "name": "rate",
        "type": "number",
        "label": "Stundensatz",
        "unit": "€",
        "help": "Grundvergütung für eine reguläre Arbeitsstunde; für Überstunden wird der gewählte Faktor angewendet."
      },
      {
        "name": "normalHours",
        "type": "number",
        "label": "Reguläre Stunden",
        "unit": null,
        "help": "Stunden des Regelblocks, auch gebrochen; keine Kalenderschwelle."
      },
      {
        "name": "overtimeHours",
        "type": "number",
        "label": "Überstunden",
        "unit": null,
        "help": null
      },
      {
        "name": "multiplier",
        "type": "number",
        "label": "Überstundenfaktor",
        "unit": null,
        "help": "Ein Faktor ab 1 für den ganzen Block; 1,5 ist keine weltweite Regel."
      }
    ],
    "rateLabel": "Stundensatz",
    "rateUnit": "€",
    "rateHelp": "Grundvergütung für eine reguläre Arbeitsstunde; für Überstunden wird der gewählte Faktor angewendet."
  },
  {
    "id": "overtime",
    "locale": "es",
    "path": "/es/finanzas/calculadora-de-horas-extra/",
    "h1": "Calculadora de horas extra",
    "title": "Calculadora de horas extra — total y tarifa efectiva — Calculadoras",
    "description": "Calcula la retribución mensual a partir de una tarifa por hora, las horas ordinarias y extra y el multiplicador de horas extra, junto con la tarifa efectiva por hora.",
    "canonical": "https://calcuway.com/es/finanzas/calculadora-de-horas-extra/",
    "body": {
      "intro": "La retribución de las horas extra es la tarifa ordinaria multiplicada por un recargo, aplicado solo a las horas que pasan de la jornada normal. La tarifa efectiva por hora que aparece junto al total es la parte que conviene leer: divide todo lo ganado entre todas las horas trabajadas, y sube mucho menos de lo que sugiere el multiplicador. Catorce horas extra a hora y media sobre ciento sesenta ordinarias suben la tarifa efectiva un cuatro por ciento, no un cincuenta. Esa diferencia es justo lo que hace que las horas extra se vean mejor en un contrato que en una nómina.",
      "howItWorks": "Retribución ordinaria = tarifa × horas ordinarias. Retribución de horas extra = tarifa × multiplicador × horas extra. La tarifa efectiva divide el total entre todas las horas trabajadas. Las horas ordinarias y extra pueden ser fraccionarias, pero no negativas. Un multiplicador elegido se aplica al bloque completo; no se determinan automáticamente umbrales diarios, semanales ni por tramos. Con cero horas, la retribución es 0 y se omite la media porque 0/0 no tiene un valor definido.",
      "example": "A 6,50 la hora, 160 horas ordinarias y 14 extra a 1,5 suman 1176,50: una tarifa efectiva de 6,76 por hora. Con horas ordinarias y extra en 0, ambos importes y total son 0; se omite la media. No equivale a una tarifa real cero con tiempo trabajado positivo.",
      "tips": "Introduce la tarifa ordinaria por hora. Introduce las horas ordinarias trabajadas en el periodo. Introduce las horas extra por separado. Introduce un multiplicador para este bloque de horas;1,5 es un ejemplo, no una determinación automática del derecho al recargo.",
      "faq": [
        {
          "q": "¿Por qué la tarifa efectiva es mucho menor que el multiplicador?",
          "a": "Porque el recargo se aplica solo a las horas extra pero la media divide entre todas. Un bloque pequeño de horas con recargo mueve muy poco la media."
        },
        {
          "q": "¿Qué multiplicador de horas extra me corresponde?",
          "a": "Usa el multiplicador del contrato y bloque de horas. Por ejemplo, el 1,5 de la FLSA estadounidense depende de cobertura, exenciones y semana laboral; no es una tarifa mundial. Calcula por separado bloques con recargos distintos."
        },
        {
          "q": "¿Las cifras son antes o después de impuestos?",
          "a": "Antes. Esto es retribución bruta; la retención y las cotizaciones se aplican después y quedan fuera del cálculo."
        },
        {
          "q": "¿Por qué se rechaza un multiplicador menor que uno?",
          "a": "El modelo representa un recargo y acepta por ello multiplicadores desde 1. Esta restricción no establece el derecho legal a horas extra ni verifica el cumplimiento de una forma de pago."
        }
      ]
    },
    "howToUse": [
      "Introduce la tarifa ordinaria por hora.",
      "Introduce las horas ordinarias trabajadas en el periodo.",
      "Introduce las horas extra por separado.",
      "Introduce un multiplicador para este bloque de horas;1,5 es un ejemplo, no una determinación automática del derecho al recargo."
    ],
    "disclaimer": "Modela un bloque de horas extra con tarifa base introducida. Derecho, umbrales, componentes de la tarifa regular, impuestos y límites dependen de reglas aplicables; el idioma no elige legislación laboral.",
    "sources": [
      "https://webapps.dol.gov/elaws/otcalculator.htm"
    ],
    "defaults": {
      "rate": 650,
      "normalHours": 160,
      "overtimeHours": 14,
      "multiplier": 1.5
    },
    "fields": [
      {
        "name": "rate",
        "type": "number",
        "label": "Tarifa por hora",
        "unit": "€",
        "help": "Tarifa base por una hora ordinaria de trabajo; a las horas extra se aplica el multiplicador elegido."
      },
      {
        "name": "normalHours",
        "type": "number",
        "label": "Horas ordinarias",
        "unit": null,
        "help": "Horas del bloque ordinario, también fracciones; sin umbral automático."
      },
      {
        "name": "overtimeHours",
        "type": "number",
        "label": "Horas extra",
        "unit": null,
        "help": null
      },
      {
        "name": "multiplier",
        "type": "number",
        "label": "Multiplicador de horas extra",
        "unit": null,
        "help": "Un factor desde 1 para todo el bloque; 1,5 no es regla mundial."
      }
    ],
    "rateLabel": "Tarifa por hora",
    "rateUnit": "€",
    "rateHelp": "Tarifa base por una hora ordinaria de trabajo; a las horas extra se aplica el multiplicador elegido."
  },
  {
    "id": "timesheet-week",
    "locale": "ru",
    "path": "/ru/business/tabel-rabochego-vremeni/",
    "h1": "Калькулятор табеля рабочего времени",
    "title": "Калькулятор табеля рабочего времени за неделю — Калькуляторы",
    "description": "Посчитайте часы за неделю по сменам с перерывами, получите сверхурочные сверх нормы и начисленную сумму.",
    "canonical": "https://calcuway.com/ru/business/tabel-rabochego-vremeni/",
    "body": {
      "intro": "Табель считают не по одной смене, а по неделе целиком, и именно там теряются минуты: где-то перерыв сорок пять минут вместо часа, где-то смена ушла за полночь, где-то день короткий. Здесь каждая смена задаётся строкой, а итог собирается в целых минутах и переводится в часы один раз — поэтому сумма сходится с тем, что стоит в бумажном табеле. Ночная смена вида 22:00,06:00 понимается как переход через полночь, а не как ошибка. Это учёт показаний часов без дат и часовых поясов. Оплата использует введённую норму и фиксированный коэффициент 1,5 для всех часов сверх неё; модель не определяет законные сверхурочные, ночные доплаты или правила конкретного договора.",
      "howItWorks": "Одна строка содержит ровно начало,конец или начало,конец,перерыв. Время задаётся HH:MM, перерыв — целые неотрицательные минуты, пустой перерыв равен 0. Если конец меньше начала, добавляются 1440 минут; одинаковые время начала и конца дают 0, не 24 часа. Сумма ведётся в целых минутах. Оплата = min(часы,норма)×ставка + max(часы−норма,0)×ставка×1,5. Часы нормы могут быть дробными; переходы летнего времени и смены дольше суток не моделируются.",
      "example": "Пять смен с перерывами дают 36,75 часа и 18 375 ₽ при ставке 500 ₽ в час. Строка 22:00,06:00,30 даёт 7,5 часа; одинаковые начало и конец без перерыва дают 0 часов.",
      "tips": "Одна смена — одна строка: начало, конец и перерыв в минутах через запятую. Перерыв можно не указывать: строка «09:00,18:00» считается сменой без перерыва. Ночная смена задаётся как есть: 22:00,06:00 понимается как переход через полночь. Всё, что сверх нормы часов, идёт в сверхурочные с коэффициентом полтора. Вводите только вычитаемые перерывы целыми минутами. Для оплаты по другим коэффициентам используйте часы из результата и свой отдельный расчёт.",
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
      ]
    },
    "howToUse": [
      "Одна смена — одна строка: начало, конец и перерыв в минутах через запятую.",
      "Перерыв можно не указывать: строка «09:00,18:00» считается сменой без перерыва.",
      "Ночная смена задаётся как есть: 22:00,06:00 понимается как переход через полночь.",
      "Всё, что сверх нормы часов, идёт в сверхурочные с коэффициентом полтора.",
      "Вводите только вычитаемые перерывы целыми минутами. Для оплаты по другим коэффициентам используйте часы из результата и свой отдельный расчёт."
    ],
    "disclaimer": "Часы по показаниям без дат и DST; фиксированная доплата 1,5 сверх введённой нормы. Не юридический расчёт обязательной зарплаты.",
    "sources": [
      "https://www.dol.gov/agencies/whd/fact-sheets/23-flsa-overtime-pay"
    ],
    "defaults": {
      "lines": "09:00,18:00,60\n09:00,18:00,60\n09:00,17:30,45\n10:00,19:00,60\n09:00,14:00,0",
      "rate": 500,
      "normal": 40
    },
    "fields": [
      {
        "name": "lines",
        "type": "textarea",
        "label": "Смены: начало, конец, перерыв в минутах",
        "unit": null,
        "help": null
      },
      {
        "name": "rate",
        "type": "number",
        "label": "Ставка за час",
        "unit": "₽",
        "help": "Базовая оплата обычного часа табеля; в этой модели для часов сверх заданной нормы применяется коэффициент 1,5."
      },
      {
        "name": "normal",
        "type": "number",
        "label": "Норма часов за период",
        "unit": "h",
        "help": "Часы за выбранный период, дробная норма допустима. Все часы сверх неё получают фиксированный коэффициент 1,5; местные правила не определяются."
      }
    ],
    "rateLabel": "Ставка за час",
    "rateUnit": "₽",
    "rateHelp": "Базовая оплата обычного часа табеля; в этой модели для часов сверх заданной нормы применяется коэффициент 1,5."
  },
  {
    "id": "timesheet-week",
    "locale": "en",
    "path": "/en/business/weekly-timesheet/",
    "h1": "Weekly timesheet calculator",
    "title": "Weekly timesheet calculator — hours, overtime and pay — Calculators",
    "description": "Add up weekly hours from shifts with breaks, get overtime beyond the standard and the gross pay.",
    "canonical": "https://calcuway.com/en/business/weekly-timesheet/",
    "body": {
      "intro": "A timesheet is settled for the whole week rather than a single shift, and that is exactly where minutes go missing: a forty-five minute break here, a shift running past midnight there, a short day at the end. Each shift is one line, the total is accumulated in whole minutes and converted to hours only once — so the sum matches the paper sheet. A line such as 22:00,06:00 is understood as crossing midnight, not as an error. This records clock readings without dates or time zones. Pay uses the entered standard hours and a fixed 1.5 multiplier for every hour above them; it does not determine legal overtime, night premiums or contract-specific rules.",
      "howItWorks": "Each row has exactly start,end or start,end,break. Times use HH:MM; breaks are whole nonnegative minutes, with blank meaning 0. An end earlier than the start adds 1440 minutes; equal start and end mean 0 rather than 24 hours. Minutes are summed exactly. Pay = min(hours,standard)×rate + max(hours−standard,0)×rate×1.5. Standard hours may be fractional. Daylight-saving changes and shifts longer than a day are not modelled.",
      "example": "Five shifts with breaks add up to 36.75 hours and 18,375 at a rate of 500 per hour. Row 22:00,06:00,30 gives 7.5 hours; equal start and end with no break give 0 hours.",
      "tips": "One shift per line: start, end and break in minutes separated by commas. The break may be omitted: a line of 09:00,18:00 counts as a shift with no break. A night shift is written as it is: 22:00,06:00 is read as crossing midnight. Anything above the standard hours goes to overtime at one and a half times the rate. Enter only breaks to be excluded, in whole minutes. For other pay multipliers, use the resulting hours and a separate payroll calculation.",
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
      ]
    },
    "howToUse": [
      "One shift per line: start, end and break in minutes separated by commas.",
      "The break may be omitted: a line of 09:00,18:00 counts as a shift with no break.",
      "A night shift is written as it is: 22:00,06:00 is read as crossing midnight.",
      "Anything above the standard hours goes to overtime at one and a half times the rate.",
      "Enter only breaks to be excluded, in whole minutes. For other pay multipliers, use the resulting hours and a separate payroll calculation."
    ],
    "disclaimer": "Clock hours without dates or DST; fixed 1.5 pay above the entered standard. Not a legal calculation of required wages.",
    "sources": [
      "https://www.dol.gov/agencies/whd/fact-sheets/23-flsa-overtime-pay"
    ],
    "defaults": {
      "lines": "09:00,18:00,60\n09:00,18:00,60\n09:00,17:30,45\n10:00,19:00,60\n09:00,14:00,0",
      "rate": 500,
      "normal": 40
    },
    "fields": [
      {
        "name": "lines",
        "type": "textarea",
        "label": "Shifts: start, end, break in minutes",
        "unit": null,
        "help": null
      },
      {
        "name": "rate",
        "type": "number",
        "label": "Hourly rate",
        "unit": "$",
        "help": "Base pay per regular timesheet hour; this model applies a multiplier of 1.5 to hours above the entered threshold."
      },
      {
        "name": "normal",
        "type": "number",
        "label": "Standard hours for the period",
        "unit": "h",
        "help": "Hours for the selected period; fractions are valid. All hours above this receive the fixed 1.5 factor; local rules are not determined."
      }
    ],
    "rateLabel": "Hourly rate",
    "rateUnit": "$",
    "rateHelp": "Base pay per regular timesheet hour; this model applies a multiplier of 1.5 to hours above the entered threshold."
  },
  {
    "id": "timesheet-week",
    "locale": "uk",
    "path": "/uk/business/tabel-robochogo-chasu/",
    "h1": "Калькулятор табеля робочого часу",
    "title": "Калькулятор табеля робочого часу за тиждень — Калькулятори",
    "description": "Порахуйте години за тиждень за змінами з перервами, отримайте понаднормові понад норму та нараховану суму.",
    "canonical": "https://calcuway.com/uk/business/tabel-robochogo-chasu/",
    "body": {
      "intro": "Табель рахують не за однією зміною, а за тижнем цілком, і саме там губляться хвилини: десь перерва сорок п’ять хвилин замість години, десь зміна перейшла через північ. За п’ять днів набігає розбіжність, яку помічають уже під час нарахування. Це облік показів годинника без дат і часових поясів. Оплата використовує введену норму та фіксований коефіцієнт 1,5 для всіх годин понад неї; модель не визначає законні надурочні, нічні доплати або правила конкретного договору.",
      "howItWorks": "Рядок має рівно початок,кінець або початок,кінець,перерва. Час у форматі HH:MM, перерва — цілі невід’ємні хвилини, порожня дорівнює 0. Якщо кінець раніше початку, додаються 1440 хвилин; однакові часи означають 0, не 24 години. Хвилини підсумовуються точно. Оплата = min(години,норма)×ставка + max(години−норма,0)×ставка×1,5. Норма може бути дробовою. Перехід на літній час і зміни довші за добу не моделюються.",
      "example": "П’ять змін із перервами дають 36,75 години і 18 375 ₴ за ставки 500 ₴ на годину. Чверть години різниці в перервах щодня — це вже понад годину за тиждень. Рядок 22:00,06:00,30 дає 7,5 години; однакові початок і кінець без перерви дають 0 годин.",
      "tips": "Введіть початок і кінець кожної зміни. Введіть тривалість перерви в хвилинах. Задайте ставку й норму годин, понад яку йдуть надурочні. Вводьте лише перерви, які треба відняти, цілими хвилинами. Для інших коефіцієнтів оплати використайте підсумкові години й окремий розрахунок.",
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
      ]
    },
    "howToUse": [
      "Введіть початок і кінець кожної зміни.",
      "Введіть тривалість перерви в хвилинах.",
      "Задайте ставку й норму годин, понад яку йдуть надурочні.",
      "Вводьте лише перерви, які треба відняти, цілими хвилинами. Для інших коефіцієнтів оплати використайте підсумкові години й окремий розрахунок."
    ],
    "disclaimer": "Години за показами без дат і DST; фіксована доплата 1,5 понад введену норму. Не юридичний розрахунок обов’язкової зарплати.",
    "sources": [
      "https://www.dol.gov/agencies/whd/fact-sheets/23-flsa-overtime-pay"
    ],
    "defaults": {
      "lines": "09:00,18:00,60\n09:00,18:00,60\n09:00,17:30,45\n10:00,19:00,60\n09:00,14:00,0",
      "rate": 500,
      "normal": 40
    },
    "fields": [
      {
        "name": "lines",
        "type": "textarea",
        "label": "Зміни: початок, кінець, перерва у хвилинах",
        "unit": null,
        "help": null
      },
      {
        "name": "rate",
        "type": "number",
        "label": "Ставка за годину",
        "unit": "₴",
        "help": "Базова оплата звичайної години табеля; у цій моделі до годин понад задану норму застосовується коефіцієнт 1,5."
      },
      {
        "name": "normal",
        "type": "number",
        "label": "Норма годин за період",
        "unit": "h",
        "help": "Години за вибраний період, дробова норма допустима. Усі години понад неї мають фіксований коефіцієнт 1,5; місцеві правила не визначаються."
      }
    ],
    "rateLabel": "Ставка за годину",
    "rateUnit": "₴",
    "rateHelp": "Базова оплата звичайної години табеля; у цій моделі до годин понад задану норму застосовується коефіцієнт 1,5."
  },
  {
    "id": "timesheet-week",
    "locale": "de",
    "path": "/de/business/wochenstundenzettel/",
    "h1": "Wochenstundenzettel-Rechner",
    "title": "Wochenstundenzettel berechnen — Stunden, Überstunden und Lohn — Rechner",
    "description": "Zähle die Wochenstunden aus Schichten mit Pausen zusammen, erhalte die Überstunden über der Sollzeit und den Bruttolohn.",
    "canonical": "https://calcuway.com/de/business/wochenstundenzettel/",
    "body": {
      "intro": "Ein Stundenzettel wird für die ganze Woche abgerechnet und nicht für eine einzelne Schicht, und genau dort gehen Minuten verloren: hier eine Pause von fünfundvierzig Minuten, dort eine Schicht über Mitternacht, am Ende ein kurzer Tag. Jede Schicht ist eine Zeile, die Summe wird in ganzen Minuten angesammelt und erst einmal am Schluss in Stunden umgerechnet — so stimmt die Summe mit dem Zettel auf Papier überein. Eine Zeile wie 22:00,06:00 wird als Übergang über Mitternacht verstanden und nicht als Fehler. Dies erfasst Uhrzeiten ohne Datum oder Zeitzone. Die Vergütung nutzt eingegebene Sollstunden und den festen Faktor 1,5 für alle Stunden darüber. Gesetzliche Überstunden, Nachtzuschläge und besondere Vertragsregeln werden nicht bestimmt.",
      "howItWorks": "Jede Zeile enthält genau Beginn,Ende oder Beginn,Ende,Pause. Uhrzeiten gelten als HH:MM; Pausen sind ganze nicht negative Minuten, leer bedeutet 0. Liegt das Ende vor dem Beginn, kommen 1440 Minuten hinzu; gleiche Uhrzeiten bedeuten 0 statt 24 Stunden. Minuten werden genau summiert. Vergütung = min(Stunden,Soll)×Satz + max(Stunden−Soll,0)×Satz×1,5. Sollstunden dürfen gebrochen sein. Sommerzeitwechsel und Schichten über einen Tag werden nicht modelliert.",
      "example": "Fünf Schichten mit Pausen ergeben zusammen 36,75 Stunden und 551,25 € bei einem Satz von 15 € je Stunde. Zeile 22:00,06:00,30 ergibt 7,5 Stunden; gleicher Beginn und Ende ohne Pause ergeben 0 Stunden.",
      "tips": "Eine Schicht je Zeile: Beginn, Ende und Pause in Minuten mit Kommas getrennt. Die Pause darf entfallen: eine Zeile 09:00,18:00 zählt als Schicht ohne Pause. Eine Nachtschicht wird geschrieben, wie sie ist: 22:00,06:00 gilt als Übergang über Mitternacht. Alles über den Sollstunden geht als Überstunde zum Anderthalbfachen des Satzes. Trage nur abzuziehende Pausen in ganzen Minuten ein. Verwende bei anderen Vergütungsfaktoren die Stunden und eine separate Lohnberechnung.",
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
      ]
    },
    "howToUse": [
      "Eine Schicht je Zeile: Beginn, Ende und Pause in Minuten mit Kommas getrennt.",
      "Die Pause darf entfallen: eine Zeile 09:00,18:00 zählt als Schicht ohne Pause.",
      "Eine Nachtschicht wird geschrieben, wie sie ist: 22:00,06:00 gilt als Übergang über Mitternacht.",
      "Alles über den Sollstunden geht als Überstunde zum Anderthalbfachen des Satzes.",
      "Trage nur abzuziehende Pausen in ganzen Minuten ein. Verwende bei anderen Vergütungsfaktoren die Stunden und eine separate Lohnberechnung."
    ],
    "disclaimer": "Uhrzeiten ohne Datum oder Sommerzeitwechsel; fester Faktor 1,5 über eingegebenem Soll. Keine gesetzliche Berechnung verpflichtender Löhne.",
    "sources": [
      "https://www.dol.gov/agencies/whd/fact-sheets/23-flsa-overtime-pay"
    ],
    "defaults": {
      "lines": "09:00,18:00,60\n09:00,18:00,60\n09:00,17:30,45\n10:00,19:00,60\n09:00,14:00,0",
      "rate": 500,
      "normal": 40
    },
    "fields": [
      {
        "name": "lines",
        "type": "textarea",
        "label": "Schichten: Beginn, Ende, Pause in Minuten",
        "unit": null,
        "help": null
      },
      {
        "name": "rate",
        "type": "number",
        "label": "Stundensatz",
        "unit": "€",
        "help": "Grundvergütung je regulärer Arbeitsstunde im Stundenzettel; diese Modellrechnung verwendet oberhalb der eingegebenen Regelstundenzahl den Faktor 1,5."
      },
      {
        "name": "normal",
        "type": "number",
        "label": "Sollstunden für den Zeitraum",
        "unit": "h",
        "help": "Stunden im gewählten Zeitraum, Bruchteile sind möglich. Alles darüber erhält den festen Faktor 1,5; örtliche Regeln werden nicht bestimmt."
      }
    ],
    "rateLabel": "Stundensatz",
    "rateUnit": "€",
    "rateHelp": "Grundvergütung je regulärer Arbeitsstunde im Stundenzettel; diese Modellrechnung verwendet oberhalb der eingegebenen Regelstundenzahl den Faktor 1,5."
  },
  {
    "id": "timesheet-week",
    "locale": "es",
    "path": "/es/negocios/parte-de-horas-semanal/",
    "h1": "Calculadora de parte de horas semanal",
    "title": "Calculadora de parte de horas semanal — horas, extras y salario — Calculadoras",
    "description": "Suma las horas semanales de turnos con descansos, obtén las horas extra por encima de la jornada estándar y el salario bruto.",
    "canonical": "https://calcuway.com/es/negocios/parte-de-horas-semanal/",
    "body": {
      "intro": "Un parte de horas se liquida por toda la semana y no por un solo turno, y ahí es justo donde se pierden los minutos: un descanso de cuarenta y cinco minutos aquí, un turno que pasa de medianoche allá, una jornada corta al final. Cada turno es una línea, el total se acumula en minutos enteros y se convierte a horas una sola vez, así que la suma coincide con el parte en papel. Una línea como 22:00,06:00 se entiende como un cruce de medianoche y no como un error. El parte usa horas del reloj sin fechas ni zonas horarias. El pago aplica la jornada introducida y un multiplicador fijo 1,5 a todas las horas superiores. No determina horas extra legales, pluses nocturnos ni reglas de un contrato.",
      "howItWorks": "Cada fila contiene exactamente inicio,fin o inicio,fin,descanso. Horas en HH:MM y descansos en minutos enteros no negativos, vacío significa 0. Si el fin es anterior al inicio, se añaden 1440 minutos; horas iguales significan 0 y no 24 horas. Se suman minutos exactos. Pago = min(horas,jornada)×tarifa + max(horas−jornada,0)×tarifa×1,5. La jornada admite fracciones. No se modelan cambios de horario estacional ni turnos superiores a un día.",
      "example": "Cinco turnos con descansos suman 36,75 horas y 367,50 con una tarifa de 10 por hora. La fila 22:00,06:00,30 da 7,5 horas; inicio y fin iguales sin descanso dan 0 horas.",
      "tips": "Un turno por línea: inicio, fin y descanso en minutos separados por comas. El descanso puede omitirse: una línea 09:00,18:00 cuenta como un turno sin descanso. Un turno de noche se escribe tal cual: 22:00,06:00 se lee como cruce de medianoche. Todo lo que pase de la jornada estándar va a horas extra a una vez y media la tarifa. Introduce solo descansos que deban descontarse, en minutos enteros. Con otros multiplicadores usa las horas calculadas y un pago separado.",
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
      ]
    },
    "howToUse": [
      "Un turno por línea: inicio, fin y descanso en minutos separados por comas.",
      "El descanso puede omitirse: una línea 09:00,18:00 cuenta como un turno sin descanso.",
      "Un turno de noche se escribe tal cual: 22:00,06:00 se lee como cruce de medianoche.",
      "Todo lo que pase de la jornada estándar va a horas extra a una vez y media la tarifa.",
      "Introduce solo descansos que deban descontarse, en minutos enteros. Con otros multiplicadores usa las horas calculadas y un pago separado."
    ],
    "disclaimer": "Horas del reloj sin fechas ni cambios estacionales; pago fijo 1,5 sobre la jornada introducida. No cálculo legal de salarios obligatorios.",
    "sources": [
      "https://www.dol.gov/agencies/whd/fact-sheets/23-flsa-overtime-pay"
    ],
    "defaults": {
      "lines": "09:00,18:00,60\n09:00,18:00,60\n09:00,17:30,45\n10:00,19:00,60\n09:00,14:00,0",
      "rate": 500,
      "normal": 40
    },
    "fields": [
      {
        "name": "lines",
        "type": "textarea",
        "label": "Turnos: inicio, fin y descanso en minutos",
        "unit": null,
        "help": null
      },
      {
        "name": "rate",
        "type": "number",
        "label": "Tarifa por hora",
        "unit": "€",
        "help": "Tarifa base por hora ordinaria del parte; este modelo aplica un factor de 1,5 a las horas que superan el umbral indicado."
      },
      {
        "name": "normal",
        "type": "number",
        "label": "Jornada estándar del periodo, horas",
        "unit": "h",
        "help": "Horas del periodo elegido, admite fracciones. Todas las superiores reciben factor fijo 1,5; no determina reglas locales."
      }
    ],
    "rateLabel": "Tarifa por hora",
    "rateUnit": "€",
    "rateHelp": "Tarifa base por hora ordinaria del parte; este modelo aplica un factor de 1,5 a las horas que superan el umbral indicado."
  },
  {
    "id": "currency-exchange-fee",
    "locale": "ru",
    "path": "/ru/currency/currency-exchange-fee/",
    "h1": "Калькулятор стоимости обмена валюты",
    "title": "Калькулятор стоимости обмена валюты со спредом — Калькуляторы",
    "description": "Рассчитайте, сколько останется после обмена валюты с учётом спреда, процентной комиссии и фиксированного сбора при заданном курсе.",
    "canonical": "https://calcuway.com/ru/currency/currency-exchange-fee/",
    "body": {
      "intro": "Сравните условия обмена при вручную заданном базовом курсе, спреде и сборах. При продаже сумма — количество иностранной валюты; при покупке — бюджет в местных деньгах. Курс всегда задаётся как местные деньги за одну единицу иностранной валюты. Если вводите уже предложенный обменником курс, поставьте спред 0%, чтобы не учесть его второй раз.",
      "howItWorks": "Обозначим сумму A, базовый курс r, долю спреда s, долю комиссии c и фиксированный сбор F в местных деньгах; проценты делятся на 100. Продажа: Q = A × r × (1 − s) × (1 − c) − F. Покупка: Q = (A − F) × (1 − c) / [r × (1 + s)]. При покупке сбор сначала уменьшает бюджет, затем с остатка берётся процент. Это заявленный порядок модели, а не универсальное правило банков. Потери равны разнице между A × r (продажа) или A / r (покупка) и Q. Денежные строки обычно округляются отдельно до двух знаков; результат без сборов и спреда равен базовому обмену.",
      "example": "Учебные условия: базовый курс 2 местных единицы за одну иностранную, спред 10%, комиссия 5%, сбор 20 местных единиц. Продажа 1000: 1000 × 2 × 0,9 = 1800; комиссия 90; к получению 1800 − 90 − 20 = 1690 ₽, потери 310 / 2000 = 15,5%. Покупка на бюджет 2000: (2000 − 20) × 0,95 / 2,2 = 855 единиц валюты, потери 145 / 1000 = 14,5%. Это не текущий рыночный курс.",
      "tips": "Выберите продажу или покупку: подпись и единица суммы изменятся. Введите базовый курс в местных деньгах за одну единицу иностранной валюты. Задайте спред относительно этого базового курса и процентную комиссию. Фиксированный сбор вводите в местных деньгах при обоих направлениях. Сравните сумму к получению и потери относительно базового курса.",
      "faq": [
        {
          "q": "Какой курс вводить, чтобы не посчитать спред дважды?",
          "a": "Введите базовый курс до спреда. Если знаете только конечный курс обменника, используйте его со спредом 0%; тогда сравнение потерь будет относительно этого введённого курса."
        },
        {
          "q": "В каких деньгах вводится фиксированный сбор?",
          "a": "В местных деньгах и при продаже, и при покупке. При покупке строка результата переводит сбор в иностранную валюту по курсу со спредом, чтобы её можно было сопоставить с суммой к получению."
        },
        {
          "q": "Почему покупка и продажа используют разный порядок сбора?",
          "a": "Продажа получает местные деньги, из которых вычитается сбор. Покупка сначала платит сбор из местного бюджета, и комиссия применяется к оставшемуся бюджету. Если договор предусматривает другой порядок или валюту комиссии, эта модель ему не соответствует."
        },
        {
          "q": "Может ли сумма к получению быть отрицательной?",
          "a": "Нет: если сборы превышают доступную сумму, показывается ошибка. Ровно нулевая выплата допустима и означает, что сборы поглотили всю сумму; доля потерь тогда 100%."
        },
        {
          "q": "Какие расходы и данные здесь не учитываются автоматически?",
          "a": "Рыночные курсы, налоги, ограничения и комиссии перевода не загружаются. Добавлять плату за перевод к F можно только если она взимается в тех же местных деньгах и в указанном порядке модели."
        }
      ]
    },
    "howToUse": [
      "Выберите продажу или покупку: подпись и единица суммы изменятся.",
      "Введите базовый курс в местных деньгах за одну единицу иностранной валюты.",
      "Задайте спред относительно этого базового курса и процентную комиссию.",
      "Фиксированный сбор вводите в местных деньгах при обоих направлениях. Сравните сумму к получению и потери относительно базового курса."
    ],
    "disclaimer": "Справочная учебная модель вручную введённых условий. Символ местных денег в интерфейсе не определяет страну, валютную пару или правила договора. Проверяйте валюту и порядок каждого сбора у своего провайдера.",
    "sources": [],
    "defaults": {
      "direction": "sell",
      "amount": 1000,
      "rate": 92.5,
      "spreadPct": 0.5,
      "feePct": 1.5,
      "feeFixed": 0
    },
    "fields": [
      {
        "name": "direction",
        "type": "select",
        "label": "Что делаем",
        "unit": null,
        "help": null
      },
      {
        "name": "amount",
        "type": "number",
        "label": "Сумма продаваемой валюты",
        "unit": "ед. валюты",
        "help": null
      },
      {
        "name": "rate",
        "type": "number",
        "label": "Курс обмена",
        "unit": "₽/ед. валюты",
        "help": "Денежные единицы расчёта за 1 единицу обмениваемой валюты. До спреда и комиссий: при продаже сумма умножается на курс, при покупке бюджет делится на него."
      },
      {
        "name": "spreadPct",
        "type": "number",
        "label": "Спред к курсу, %",
        "unit": null,
        "help": null
      },
      {
        "name": "feePct",
        "type": "number",
        "label": "Комиссия, %",
        "unit": null,
        "help": null
      },
      {
        "name": "feeFixed",
        "type": "number",
        "label": "Фиксированный сбор",
        "unit": "₽",
        "help": null
      }
    ],
    "rateLabel": "Курс обмена",
    "rateUnit": "₽/ед. валюты",
    "rateHelp": "Денежные единицы расчёта за 1 единицу обмениваемой валюты. До спреда и комиссий: при продаже сумма умножается на курс, при покупке бюджет делится на него."
  },
  {
    "id": "currency-exchange-fee",
    "locale": "en",
    "path": "/en/currency/currency-exchange-cost-calculator/",
    "h1": "Currency exchange cost calculator",
    "title": "Currency exchange cost calculator with spread — Calculators",
    "description": "Calculate what is left after a currency exchange, allowing for the spread, a percentage commission and a flat charge at a given rate.",
    "canonical": "https://calcuway.com/en/currency/currency-exchange-cost-calculator/",
    "body": {
      "intro": "Compare exchange terms using a manually entered baseline rate, spread and charges. For a sale, the amount is foreign currency; for a purchase, it is a budget in local money. The rate always means local money per one foreign currency unit. Set the spread to 0% when entering a final quoted rate, so its markup is not counted twice.",
      "howItWorks": "Let A be the amount, r the baseline rate, s the spread fraction, c the commission fraction, and F the fixed charge in local money; divide percentages by 100. Selling: Q = A × r × (1 − s) × (1 − c) − F. Buying: Q = (A − F) × (1 − c) / [r × (1 + s)]. Buying first deducts the fixed charge from the budget, then charges commission on the remainder. This is the stated model order, not a rule all banks follow. Loss is A × r (selling) or A / r (buying), minus Q. Monetary rows are normally rounded independently to two decimals; with no spread or charges, the payout equals the baseline exchange.",
      "example": "Teaching inputs: baseline rate 2 local units per foreign unit, spread 10%, commission 5%, fixed charge 20 local units. Selling 1000: 1000 × 2 × 0.9 = 1800; commission 90; payout 1800 − 90 − 20 = $1690, loss 310 / 2000 = 15.5%. Buying with a budget of 2000: (2000 − 20) × 0.95 / 2.2 = 855 currency units, loss 145 / 1000 = 14.5%. This is not a current market rate.",
      "tips": "Choose selling or buying; the amount label and unit change. Enter the baseline rate in local money per foreign currency unit. Enter the spread relative to that baseline and the percentage commission. Enter the fixed charge in local money in both directions. Compare the payout and the loss relative to the baseline.",
      "faq": [
        {
          "q": "Which rate avoids counting the spread twice?",
          "a": "Enter the baseline rate before the spread. If you only know a final quoted rate, use it with a 0% spread; the loss comparison will then use that entered rate as its baseline."
        },
        {
          "q": "Which currency is the fixed charge in?",
          "a": "Local money, for both selling and buying. For a purchase, the result converts the charge into foreign currency at the spread-adjusted rate so it can be compared with the payout."
        },
        {
          "q": "Why is the fixed charge handled differently for a purchase?",
          "a": "A sale receives local money and then pays the fixed charge. A purchase pays that charge from the local budget first and commission applies to the remaining budget. A contract using a different order or fee currency needs a different model."
        },
        {
          "q": "Can the payout be negative?",
          "a": "No. Charges exceeding the available amount produce an error. A zero payout is allowed when charges consume the entire amount; the loss share is then 100%."
        },
        {
          "q": "What is not included automatically?",
          "a": "Market quotes, taxes, restrictions and transfer charges are not loaded. Only add a transfer charge to F if it uses the same local money and follows the stated model order."
        }
      ]
    },
    "howToUse": [
      "Choose selling or buying; the amount label and unit change.",
      "Enter the baseline rate in local money per foreign currency unit.",
      "Enter the spread relative to that baseline and the percentage commission.",
      "Enter the fixed charge in local money in both directions. Compare the payout and the loss relative to the baseline."
    ],
    "disclaimer": "Teaching model of manually entered terms. The local money symbol does not establish a country, currency pair or contract rules. Check the currency and order of each charge with your provider.",
    "sources": [],
    "defaults": {
      "direction": "sell",
      "amount": 1000,
      "rate": 92.5,
      "spreadPct": 0.5,
      "feePct": 1.5,
      "feeFixed": 0
    },
    "fields": [
      {
        "name": "direction",
        "type": "select",
        "label": "What you are doing",
        "unit": null,
        "help": null
      },
      {
        "name": "amount",
        "type": "number",
        "label": "Foreign currency to sell",
        "unit": "currency units",
        "help": null
      },
      {
        "name": "rate",
        "type": "number",
        "label": "Exchange rate",
        "unit": "$/currency units",
        "help": "Payment-currency units per 1 foreign-currency unit. Before spread and fees, selling multiplies the amount by this rate; buying divides the budget by it."
      },
      {
        "name": "spreadPct",
        "type": "number",
        "label": "Spread on the rate, %",
        "unit": null,
        "help": null
      },
      {
        "name": "feePct",
        "type": "number",
        "label": "Commission, %",
        "unit": null,
        "help": null
      },
      {
        "name": "feeFixed",
        "type": "number",
        "label": "Flat charge",
        "unit": "$",
        "help": null
      }
    ],
    "rateLabel": "Exchange rate",
    "rateUnit": "$/currency units",
    "rateHelp": "Payment-currency units per 1 foreign-currency unit. Before spread and fees, selling multiplies the amount by this rate; buying divides the budget by it."
  },
  {
    "id": "currency-exchange-fee",
    "locale": "uk",
    "path": "/uk/valyuty/vartist-obminu-valyuty/",
    "h1": "Калькулятор вартості обміну валюти",
    "title": "Калькулятор вартості обміну валюти зі спредом — Калькулятори",
    "description": "Розрахуйте, скільки залишиться після обміну валюти з урахуванням спреду, відсоткової комісії та фіксованого збору за заданим курсом.",
    "canonical": "https://calcuway.com/uk/valyuty/vartist-obminu-valyuty/",
    "body": {
      "intro": "Порівняйте умови обміну за вручну введеним базовим курсом, спредом і зборами. Під час продажу сума — кількість іноземної валюти; під час купівлі — бюджет у місцевих грошах. Курс завжди означає місцеві гроші за одну одиницю іноземної валюти. Якщо вводите вже запропонований обмінником курс, задайте спред 0%, щоб не врахувати його вдруге.",
      "howItWorks": "Позначимо суму A, базовий курс r, частку спреду s, частку комісії c та фіксований збір F у місцевих грошах; відсотки діляться на 100. Продаж: Q = A × r × (1 − s) × (1 − c) − F. Купівля: Q = (A − F) × (1 − c) / [r × (1 + s)]. Під час купівлі збір спочатку зменшує бюджет, а комісія береться із залишку. Це заявлений порядок моделі, а не загальне правило банків. Втрати — різниця між A × r (продаж) або A / r (купівля) та Q. Грошові рядки зазвичай округлюються окремо до двох знаків; без спреду та зборів виплата дорівнює базовому обміну.",
      "example": "Навчальні умови: базовий курс 2 місцеві одиниці за іноземну, спред 10%, комісія 5%, збір 20 місцевих одиниць. Продаж 1000: 1000 × 2 × 0,9 = 1800; комісія 90; виплата 1800 − 90 − 20 = 1690 ₴, втрати 310 / 2000 = 15,5%. Купівля на бюджет 2000: (2000 − 20) × 0,95 / 2,2 = 855 одиниць валюти, втрати 145 / 1000 = 14,5%. Це не поточний ринковий курс.",
      "tips": "Виберіть продаж або купівлю: підпис та одиниця суми зміняться. Введіть базовий курс у місцевих грошах за одиницю іноземної валюти. Задайте спред щодо цього базового курсу та відсоткову комісію. Фіксований збір вводьте в місцевих грошах за обох напрямків. Порівняйте виплату та втрати щодо базового курсу.",
      "faq": [
        {
          "q": "Який курс вводити, щоб не врахувати спред двічі?",
          "a": "Введіть базовий курс до спреда. Якщо знаєте лише кінцевий курс обмінника, використайте його зі спредом 0%; тоді втрати порівнюються саме з цим введеним курсом."
        },
        {
          "q": "У яких грошах вводиться фіксований збір?",
          "a": "У місцевих грошах і під час продажу, і під час купівлі. Для купівлі рядок результату переводить збір в іноземну валюту за курсом зі спредом, щоб порівняти його з виплатою."
        },
        {
          "q": "Чому під час купівлі збір враховується в іншому порядку?",
          "a": "Продаж отримує місцеві гроші, з яких сплачується збір. Купівля спочатку платить збір із місцевого бюджету, а комісія застосовується до залишку. Договір з іншим порядком або валютою зборів потребує іншої моделі."
        },
        {
          "q": "Чи може виплата бути від’ємною?",
          "a": "Ні: якщо збори перевищують доступну суму, показується помилка. Рівно нульова виплата допустима, коли збори поглинули всю суму; частка втрат тоді 100%."
        },
        {
          "q": "Що не враховується автоматично?",
          "a": "Ринкові курси, податки, обмеження та плата за переказ не завантажуються. Додавати плату за переказ до F можна лише в тих самих місцевих грошах і за описаним порядком моделі."
        }
      ]
    },
    "howToUse": [
      "Виберіть продаж або купівлю: підпис та одиниця суми зміняться.",
      "Введіть базовий курс у місцевих грошах за одиницю іноземної валюти.",
      "Задайте спред щодо цього базового курсу та відсоткову комісію.",
      "Фіксований збір вводьте в місцевих грошах за обох напрямків. Порівняйте виплату та втрати щодо базового курсу."
    ],
    "disclaimer": "Навчальна модель вручну введених умов. Символ місцевих грошей не визначає країну, валютну пару чи правила договору. Перевіряйте валюту та порядок кожного збору у свого провайдера.",
    "sources": [],
    "defaults": {
      "direction": "sell",
      "amount": 1000,
      "rate": 92.5,
      "spreadPct": 0.5,
      "feePct": 1.5,
      "feeFixed": 0
    },
    "fields": [
      {
        "name": "direction",
        "type": "select",
        "label": "Що робимо",
        "unit": null,
        "help": null
      },
      {
        "name": "amount",
        "type": "number",
        "label": "Сума валюти для продажу",
        "unit": "од. валюти",
        "help": null
      },
      {
        "name": "rate",
        "type": "number",
        "label": "Курс обміну",
        "unit": "₴/од. валюти",
        "help": "Грошові одиниці розрахунку за 1 одиницю обмінюваної валюти. До спреду й комісій: під час продажу суму множать на курс, під час купівлі бюджет ділять на нього."
      },
      {
        "name": "spreadPct",
        "type": "number",
        "label": "Спред до курсу, %",
        "unit": null,
        "help": null
      },
      {
        "name": "feePct",
        "type": "number",
        "label": "Комісія, %",
        "unit": null,
        "help": null
      },
      {
        "name": "feeFixed",
        "type": "number",
        "label": "Фіксований збір",
        "unit": "₴",
        "help": null
      }
    ],
    "rateLabel": "Курс обміну",
    "rateUnit": "₴/од. валюти",
    "rateHelp": "Грошові одиниці розрахунку за 1 одиницю обмінюваної валюти. До спреду й комісій: під час продажу суму множать на курс, під час купівлі бюджет ділять на нього."
  },
  {
    "id": "currency-exchange-fee",
    "locale": "de",
    "path": "/de/waehrungen/wechselkosten-rechner/",
    "h1": "Rechner für Wechselkosten",
    "title": "Wechselkosten berechnen — mit Spread und Gebühr — Rechner",
    "description": "Berechne, was nach einem Währungsumtausch übrig bleibt, unter Berücksichtigung von Spread, prozentualer Gebühr und Festbetrag.",
    "canonical": "https://calcuway.com/de/waehrungen/wechselkosten-rechner/",
    "body": {
      "intro": "Vergleiche Wechselbedingungen mit einem von dir eingegebenen Basiskurs, Spread und Gebühren. Beim Verkauf ist der Betrag Fremdwährung, beim Kauf ein Budget in örtlichem Geld. Der Kurs bedeutet immer örtliches Geld je Fremdwährungseinheit. Trägst du einen bereits angebotenen Endkurs ein, setze den Spread auf 0%, damit sein Aufschlag nicht zweimal zählt.",
      "howItWorks": "A bezeichnet den Betrag, r den Basiskurs, s den Spreadanteil, c den Gebührenanteil und F die feste Gebühr in örtlichem Geld; Prozentwerte werden durch 100 geteilt. Verkauf: Q = A × r × (1 − s) × (1 − c) − F. Kauf: Q = (A − F) × (1 − c) / [r × (1 + s)]. Beim Kauf wird zuerst die feste Gebühr vom Budget abgezogen; die Prozentgebühr gilt für den Rest. Das ist die erklärte Modellreihenfolge, keine allgemeine Bankregel. Der Verlust ist A × r beim Verkauf beziehungsweise A / r beim Kauf, jeweils minus Q. Geldbeträge werden normalerweise einzeln auf zwei Dezimalstellen gerundet; ohne Spread und Gebühren entspricht die Auszahlung dem Basisumtausch.",
      "example": "Rechenbeispiel: Basiskurs 2 örtliche Einheiten je Fremdwährungseinheit, Spread 10%, Gebühr 5%, Festgebühr 20 örtliche Einheiten. Verkauf von 1000: 1000 × 2 × 0,9 = 1800; Gebühr 90; Auszahlung 1800 − 90 − 20 = 1690 €, Verlust 310 / 2000 = 15,5%. Kauf mit Budget 2000: (2000 − 20) × 0,95 / 2,2 = 855 Währungseinheiten, Verlust 145 / 1000 = 14,5%. Dies ist kein aktueller Marktkurs.",
      "tips": "Wähle Verkauf oder Kauf; Bezeichnung und Einheit des Betrags ändern sich. Trage den Basiskurs in örtlichem Geld je Fremdwährungseinheit ein. Trage den Spread gegenüber diesem Basiskurs und die prozentuale Gebühr ein. Die feste Gebühr wird in beiden Richtungen in örtlichem Geld eingegeben. Vergleiche Auszahlung und Verlust gegenüber dem Basiskurs.",
      "faq": [
        {
          "q": "Welcher Kurs verhindert einen doppelt berechneten Spread?",
          "a": "Trage den Basiskurs vor dem Spread ein. Kennst du nur einen endgültig angebotenen Kurs, verwende ihn mit 0% Spread; der Verlustvergleich bezieht sich dann auf diesen eingegebenen Kurs."
        },
        {
          "q": "In welcher Währung steht die feste Gebühr?",
          "a": "In örtlichem Geld, beim Verkauf und beim Kauf. Beim Kauf rechnet die Ergebniszeile die Gebühr zum Kurs mit Spread in Fremdwährung um, damit sie mit der Auszahlung vergleichbar ist."
        },
        {
          "q": "Warum wird die feste Gebühr beim Kauf zuerst abgezogen?",
          "a": "Ein Verkauf erhält örtliches Geld und bezahlt daraus die feste Gebühr. Ein Kauf bezahlt sie zuerst aus dem örtlichen Budget; die Prozentgebühr gilt für den Rest. Ein Vertrag mit anderer Reihenfolge oder Gebührenwährung braucht ein anderes Modell."
        },
        {
          "q": "Kann die Auszahlung negativ sein?",
          "a": "Nein. Übersteigen die Gebühren den verfügbaren Betrag, erscheint ein Fehler. Eine Auszahlung von genau null ist zulässig, wenn die Gebühren alles verbrauchen; der Verlustanteil beträgt dann 100%."
        },
        {
          "q": "Welche Daten und Kosten werden nicht automatisch berücksichtigt?",
          "a": "Marktkurse, Steuern, Einschränkungen und Überweisungsgebühren werden nicht geladen. Eine Überweisungsgebühr darf nur zu F addiert werden, wenn sie in demselben örtlichen Geld und in der beschriebenen Reihenfolge erhoben wird."
        }
      ]
    },
    "howToUse": [
      "Wähle Verkauf oder Kauf; Bezeichnung und Einheit des Betrags ändern sich.",
      "Trage den Basiskurs in örtlichem Geld je Fremdwährungseinheit ein.",
      "Trage den Spread gegenüber diesem Basiskurs und die prozentuale Gebühr ein.",
      "Die feste Gebühr wird in beiden Richtungen in örtlichem Geld eingegeben. Vergleiche Auszahlung und Verlust gegenüber dem Basiskurs."
    ],
    "disclaimer": "Rechenmodell für selbst eingegebene Bedingungen. Das örtliche Geldsymbol legt kein Land, Währungspaar oder Vertragsregeln fest. Prüfe Währung und Reihenfolge jeder Gebühr bei deinem Anbieter.",
    "sources": [],
    "defaults": {
      "direction": "sell",
      "amount": 1000,
      "rate": 92.5,
      "spreadPct": 0.5,
      "feePct": 1.5,
      "feeFixed": 0
    },
    "fields": [
      {
        "name": "direction",
        "type": "select",
        "label": "Was du vorhast",
        "unit": null,
        "help": null
      },
      {
        "name": "amount",
        "type": "number",
        "label": "Zu verkaufende Fremdwährung",
        "unit": "Währungseinheiten",
        "help": null
      },
      {
        "name": "rate",
        "type": "number",
        "label": "Wechselkurs",
        "unit": "€/Währungseinheiten",
        "help": "Einheiten der Zahlungswährung je 1 Einheit Fremdwährung. Vor Spread und Gebühren wird beim Verkauf der Betrag mit dem Kurs multipliziert, beim Kauf das Budget durch ihn geteilt."
      },
      {
        "name": "spreadPct",
        "type": "number",
        "label": "Spread auf den Kurs, %",
        "unit": null,
        "help": null
      },
      {
        "name": "feePct",
        "type": "number",
        "label": "Gebühr, %",
        "unit": null,
        "help": null
      },
      {
        "name": "feeFixed",
        "type": "number",
        "label": "Festbetrag",
        "unit": "€",
        "help": null
      }
    ],
    "rateLabel": "Wechselkurs",
    "rateUnit": "€/Währungseinheiten",
    "rateHelp": "Einheiten der Zahlungswährung je 1 Einheit Fremdwährung. Vor Spread und Gebühren wird beim Verkauf der Betrag mit dem Kurs multipliziert, beim Kauf das Budget durch ihn geteilt."
  },
  {
    "id": "currency-exchange-fee",
    "locale": "es",
    "path": "/es/divisas/coste-de-cambio-de-divisas/",
    "h1": "Calculadora del coste de cambiar divisas",
    "title": "Calculadora del coste de cambiar divisas con diferencial — Calculadoras",
    "description": "Calcula cuánto recibes al cambiar divisas teniendo en cuenta el diferencial sobre el tipo, la comisión porcentual y el cargo fijo.",
    "canonical": "https://calcuway.com/es/divisas/coste-de-cambio-de-divisas/",
    "body": {
      "intro": "Compara las condiciones de cambio con un tipo base, diferencial y cargos introducidos por ti. Al vender, el importe es divisa; al comprar, es un presupuesto en moneda local. El tipo siempre significa moneda local por una unidad de divisa. Si introduces un tipo final ya ofrecido, fija el diferencial en 0% para no contar dos veces su margen.",
      "howItWorks": "A es el importe, r el tipo base, s la fracción del diferencial, c la fracción de comisión y F el cargo fijo en moneda local; los porcentajes se dividen entre 100. Venta: Q = A × r × (1 − s) × (1 − c) − F. Compra: Q = (A − F) × (1 − c) / [r × (1 + s)]. Al comprar, primero se resta el cargo fijo del presupuesto y la comisión se aplica al resto. Es el orden declarado del modelo, no una regla de todos los bancos. La pérdida es A × r al vender o A / r al comprar, menos Q. Los importes suelen redondearse por separado a dos decimales; sin diferencial ni cargos, lo recibido coincide con el cambio base.",
      "example": "Ejemplo didáctico: tipo base 2 unidades locales por unidad de divisa, diferencial 10%, comisión 5% y cargo fijo 20 unidades locales. Venta de 1000: 1000 × 2 × 0,9 = 1800; comisión 90; recibes 1800 − 90 − 20 = 1690 €, pérdida 310 / 2000 = 15,5%. Compra con presupuesto 2000: (2000 − 20) × 0,95 / 2,2 = 855 unidades de divisa, pérdida 145 / 1000 = 14,5%. No es un tipo de mercado actual.",
      "tips": "Elige venta o compra; cambian la etiqueta y la unidad del importe. Introduce el tipo base en moneda local por una unidad de divisa. Introduce el diferencial respecto a ese tipo base y la comisión porcentual. El cargo fijo se introduce en moneda local en ambos sentidos. Compara lo recibido y la pérdida respecto al tipo base.",
      "faq": [
        {
          "q": "¿Qué tipo evita contar dos veces el diferencial?",
          "a": "Introduce el tipo base anterior al diferencial. Si solo conoces un tipo final ofrecido, úsalo con un diferencial de 0%; la comparación de pérdidas tendrá ese tipo como base."
        },
        {
          "q": "¿En qué moneda se introduce el cargo fijo?",
          "a": "En moneda local, tanto al vender como al comprar. Al comprar, la fila del resultado convierte el cargo en divisa con el tipo que incluye el diferencial, para compararlo con lo recibido."
        },
        {
          "q": "¿Por qué se resta primero el cargo fijo al comprar?",
          "a": "La venta recibe moneda local y de ahí paga el cargo fijo. La compra lo paga primero del presupuesto local y aplica la comisión al resto. Un contrato con otro orden o moneda de cargos necesita otro modelo."
        },
        {
          "q": "¿Puede ser negativo el importe recibido?",
          "a": "No. Si los cargos superan el importe disponible, aparece un error. Se admite un resultado de cero cuando los cargos consumen todo; la proporción de pérdida es entonces 100%."
        },
        {
          "q": "¿Qué datos y gastos no se incluyen automáticamente?",
          "a": "No se cargan cotizaciones de mercado, impuestos, restricciones ni cargos por transferencias. Solo añade un cargo de transferencia a F si se cobra en la misma moneda local y siguiendo el orden del modelo."
        }
      ]
    },
    "howToUse": [
      "Elige venta o compra; cambian la etiqueta y la unidad del importe.",
      "Introduce el tipo base en moneda local por una unidad de divisa.",
      "Introduce el diferencial respecto a ese tipo base y la comisión porcentual.",
      "El cargo fijo se introduce en moneda local en ambos sentidos. Compara lo recibido y la pérdida respecto al tipo base."
    ],
    "disclaimer": "Modelo didáctico de condiciones introducidas por ti. El símbolo de moneda local no establece un país, par de divisas ni reglas contractuales. Consulta con tu proveedor la moneda y el orden de cada cargo.",
    "sources": [],
    "defaults": {
      "direction": "sell",
      "amount": 1000,
      "rate": 92.5,
      "spreadPct": 0.5,
      "feePct": 1.5,
      "feeFixed": 0
    },
    "fields": [
      {
        "name": "direction",
        "type": "select",
        "label": "Qué vas a hacer",
        "unit": null,
        "help": null
      },
      {
        "name": "amount",
        "type": "number",
        "label": "Divisa que vas a vender",
        "unit": "unidades de divisa",
        "help": null
      },
      {
        "name": "rate",
        "type": "number",
        "label": "Tipo de cambio",
        "unit": "€/unidades de divisa",
        "help": "Unidades de la moneda de pago por 1 unidad de divisa. Antes del diferencial y las comisiones, al vender se multiplica el importe por el tipo; al comprar se divide el presupuesto entre él."
      },
      {
        "name": "spreadPct",
        "type": "number",
        "label": "Diferencial sobre el tipo, %",
        "unit": null,
        "help": null
      },
      {
        "name": "feePct",
        "type": "number",
        "label": "Comisión, %",
        "unit": null,
        "help": null
      },
      {
        "name": "feeFixed",
        "type": "number",
        "label": "Cargo fijo",
        "unit": "€",
        "help": null
      }
    ],
    "rateLabel": "Tipo de cambio",
    "rateUnit": "€/unidades de divisa",
    "rateHelp": "Unidades de la moneda de pago por 1 unidad de divisa. Antes del diferencial y las comisiones, al vender se multiplica el importe por el tipo; al comprar se divide el presupuesto entre él."
  },
  {
    "id": "password-entropy",
    "locale": "ru",
    "path": "/ru/computers/stoykost-parolya/",
    "h1": "Калькулятор стойкости пароля",
    "title": "Калькулятор стойкости пароля — энтропия и время перебора — Калькуляторы",
    "description": "Рассчитайте L·log₂N для независимой случайной генерации и приблизительное время M/2 попыток. Не проверяет реальный пароль или безопасность аккаунта.",
    "canonical": "https://calcuway.com/ru/computers/stoykost-parolya/",
    "body": {
      "intro": "Учебная модель равномерной генерации независимых знаков из выбранного полного алфавита. Показывает энтропию пространства вариантов и приближённое время исчерпывающего перебора при вручную заданной скорости. Сам пароль вводить не требуется: его содержание, утечки и реальную стойкость аккаунта этот инструмент не проверяет. Для придуманного человеком пароля размер алфавита и длина не определяют фактическую энтропию.",
      "howItWorks": "Для длины L и алфавита N равновероятных независимых знаков число вариантов M=N^L, энтропия H=log₂M=L·log₂N. Длина — положительное безопасное целое; скорость r задаётся в миллиардах попыток/с. Здесь время = M/(2·r·10⁹): приближение середины большого пространства. Точное среднее при переборе без повторов с учётом успешной попытки равно (M+1)/2; при случайных независимых догадках с повторениями — M. Алфавит 94 означает печатный ASCII без пробела. Год в выводе равен 31 557 600с.",
      "example": "Двенадцать знаков из букв и цифр дают 71,45 бита и около 3,2·10²¹ вариантов.",
      "tips": "Задайте целую длину случайно генерируемой последовательности. Выберите весь алфавит, из которого независимо выбирается каждый знак, а не набор символов, встретившихся в готовом пароле. Введите предполагаемую скорость в миллиардах попыток/с и читайте результат только в рамках этой модели.",
      "faq": [
        {
          "q": "Сколько бит гарантирует безопасность пароля?",
          "a": "Никакое число здесь не гарантирует безопасность. H описывает только указанную случайную генерацию. Время зависит от алгоритма хеширования, стоимости проверки, ограничения попыток, утечек и других угроз; скорость калькулятор не измеряет."
        },
        {
          "q": "Почему перебор показан как половина пространства?",
          "a": "Для большого равномерного пространства используется M/2. Точное среднее без повторов и с успешной попыткой — (M+1)/2: у одной случайной цифры 5,5 попытки, а приближение показывает 5. Это явно приближённая модель."
        },
        {
          "q": "Как сравнить длину и размер алфавита?",
          "a": "Один дополнительный случайный знак добавляет log₂N бит. Изменение N на N₂ добавляет L·log₂(N₂/N). Сравнивайте конкретные варианты при одинаковой модели генерации, а не делайте правило о любых человеческих паролях."
        },
        {
          "q": "Можно проверить парольную фразу или словарную атаку?",
          "a": "Нет: интерфейс содержит только шесть символьных алфавитов, не словарь слов и не текст пароля. Формула для случайных слов требует отдельной модели. Предсказуемые слова, повторное использование и утечки здесь не оцениваются."
        }
      ]
    },
    "howToUse": [
      "Задайте целую длину случайно генерируемой последовательности.",
      "Выберите весь алфавит, из которого независимо выбирается каждый знак, а не набор символов, встретившихся в готовом пароле.",
      "Введите предполагаемую скорость в миллиардах попыток/с и читайте результат только в рамках этой модели."
    ],
    "disclaimer": "Учебная модель равномерной независимой генерации, не оценка реального пароля и не гарантия времени атаки. Сам пароль здесь не нужен. Результаты вне конечного числового диапазона отклоняются.",
    "sources": [
      "https://pages.nist.gov/800-63-4/sp800-63b.html"
    ],
    "defaults": {
      "length": 12,
      "charset": "alnum",
      "rate": 10
    },
    "fields": [
      {
        "name": "length",
        "type": "number",
        "label": "Длина случайной последовательности",
        "unit": "знаков",
        "help": null
      },
      {
        "name": "charset",
        "type": "select",
        "label": "Алфавит",
        "unit": null,
        "help": null
      },
      {
        "name": "rate",
        "type": "number",
        "label": "Скорость проверки",
        "unit": "10⁹ попыток/с",
        "help": "Предполагаемая скорость перебора в миллиардах попыток в секунду: 1 = 10⁹ попыток/с. Это значение сценария, а не измеренная скорость атаки."
      }
    ],
    "rateLabel": "Скорость проверки",
    "rateUnit": "10⁹ попыток/с",
    "rateHelp": "Предполагаемая скорость перебора в миллиардах попыток в секунду: 1 = 10⁹ попыток/с. Это значение сценария, а не измеренная скорость атаки."
  },
  {
    "id": "password-entropy",
    "locale": "en",
    "path": "/en/computers/password-entropy/",
    "h1": "Password entropy calculator",
    "title": "Password entropy calculator — bits and brute-force time — Calculators",
    "description": "Calculate L·log₂N for independent random generation and approximate M/2-attempt search time. Does not assess actual passwords or account safety.",
    "canonical": "https://calcuway.com/en/computers/password-entropy/",
    "body": {
      "intro": "An educational model of uniform independent character generation from the selected full alphabet. It shows search-space entropy and approximate exhaustive-search time at a manually supplied rate. No actual password is required: its contents, breaches and account security are not checked. For a human-chosen password, length and alphabet size do not determine its actual entropy.",
      "howItWorks": "For length L and N equiprobable independent characters, possibilities M=N^L and entropy H=log₂M=L·log₂N. Length is a positive safe integer; rate r is in billions of attempts/s. Displayed time is M/(2·r·10⁹), a midpoint approximation for a large space. The exact expected count for a nonrepeating exhaustive search including success is (M+1)/2; independent random guesses with replacement require M on average. Alphabet 94 means printable ASCII without space. One displayed year is 31,557,600s.",
      "example": "Twelve characters from letters and digits give 71.45 bits and about 3.2·10²¹ combinations.",
      "tips": "Set the integer length of the randomly generated sequence. Select the complete alphabet available to each independent draw, not the characters observed in an existing password. Supply the assumed rate in billions of attempts/s and interpret the result only within this model.",
      "faq": [
        {
          "q": "How many bits guarantee password safety?",
          "a": "No number here guarantees safety. H describes only the stated random generation model. Time depends on hash verification cost, rate limits, breaches and other threats; this tool does not measure the rate."
        },
        {
          "q": "Why does search time use half the space?",
          "a": "For a large uniform space the tool uses M/2. Exact nonrepeating search including success averages (M+1)/2: one random digit takes 5.5 attempts, while this approximation shows 5. The model is explicitly approximate."
        },
        {
          "q": "How can length and alphabet size be compared?",
          "a": "One additional random character adds log₂N bits. Changing N to N₂ adds L·log₂(N₂/N). Compare particular choices under the same generation model, not all human-selected passwords."
        },
        {
          "q": "Can this test passphrases or dictionary attacks?",
          "a": "No: the interface contains six character alphabets, not a word dictionary or password text. Random-word generation needs a separate model. Predictable phrases, reuse and breaches are not assessed."
        }
      ]
    },
    "howToUse": [
      "Set the integer length of the randomly generated sequence.",
      "Select the complete alphabet available to each independent draw, not the characters observed in an existing password.",
      "Supply the assumed rate in billions of attempts/s and interpret the result only within this model."
    ],
    "disclaimer": "Educational uniform-independent-generation model, not a real-password assessment or attack-time guarantee. No actual password is needed. Results outside the finite numerical range are rejected.",
    "sources": [
      "https://pages.nist.gov/800-63-4/sp800-63b.html"
    ],
    "defaults": {
      "length": 12,
      "charset": "alnum",
      "rate": 10
    },
    "fields": [
      {
        "name": "length",
        "type": "number",
        "label": "Random sequence length",
        "unit": "characters",
        "help": null
      },
      {
        "name": "charset",
        "type": "select",
        "label": "Character set",
        "unit": null,
        "help": null
      },
      {
        "name": "rate",
        "type": "number",
        "label": "Verification rate",
        "unit": "10⁹ attempts/s",
        "help": "Assumed verification speed in billions of attempts per second: 1 = 10⁹ attempts/s. This is a scenario value, not a measured attack speed."
      }
    ],
    "rateLabel": "Verification rate",
    "rateUnit": "10⁹ attempts/s",
    "rateHelp": "Assumed verification speed in billions of attempts per second: 1 = 10⁹ attempts/s. This is a scenario value, not a measured attack speed."
  },
  {
    "id": "password-entropy",
    "locale": "uk",
    "path": "/uk/kompyutery/stiykist-parolya/",
    "h1": "Калькулятор стійкості пароля",
    "title": "Калькулятор стійкості пароля — ентропія і час перебору — Калькулятори",
    "description": "Обчисліть L·log₂N для незалежної випадкової генерації та наближений час M/2 спроб. Не перевіряє реальний пароль чи безпеку облікового запису.",
    "canonical": "https://calcuway.com/uk/kompyutery/stiykist-parolya/",
    "body": {
      "intro": "Навчальна модель рівномірної генерації незалежних знаків із вибраного повного алфавіту. Показує ентропію простору варіантів і наближений час повного перебору за вручну заданої швидкості. Сам пароль вводити не потрібно: його зміст, витоки й реальна безпека облікового запису не перевіряються. Для пароля, придуманого людиною, довжина та алфавіт не визначають фактичну ентропію.",
      "howItWorks": "Для довжини L та N рівноймовірних незалежних знаків число варіантів M=N^L, ентропія H=log₂M=L·log₂N. Довжина — додатне безпечне ціле; швидкість r задається в мільярдах спроб/с. Час тут = M/(2·r·10⁹): наближення середини великого простору. Точне середнє для перебору без повторів з успішною спробою — (M+1)/2; для незалежних випадкових здогадів із повтореннями — M. Алфавіт 94 — друкований ASCII без пробілу. Рік у виведенні дорівнює 31 557 600с.",
      "example": "Дванадцять знаків із літер і цифр дають 71,45 біта і близько 3,2·10²¹ варіантів.",
      "tips": "Задайте цілу довжину випадково генерованої послідовності. Оберіть весь алфавіт незалежного вибору кожного знака, а не символи, знайдені в готовому паролі. Введіть припущену швидкість у мільярдах спроб/с і тлумачте результат лише в межах моделі.",
      "faq": [
        {
          "q": "Скільки бітів гарантує безпеку пароля?",
          "a": "Жодне число тут не гарантує безпеки. H описує тільки задану випадкову генерацію. Час залежить від вартості перевірки хешу, обмеження спроб, витоків та інших загроз; швидкість інструмент не вимірює."
        },
        {
          "q": "Чому час перебору використовує половину простору?",
          "a": "Для великого рівномірного простору використано M/2. Точне середнє без повторів з успішною спробою — (M+1)/2: одна випадкова цифра потребує 5,5 спроби, а наближення показує 5. Модель явно наближена."
        },
        {
          "q": "Як порівнювати довжину й розмір алфавіту?",
          "a": "Один додатковий випадковий знак додає log₂N бітів. Зміна N на N₂ додає L·log₂(N₂/N). Порівнюйте конкретні варіанти за однакової моделі генерації, а не всі паролі, придумані людиною."
        },
        {
          "q": "Чи можна перевірити парольну фразу або словникову атаку?",
          "a": "Ні: інтерфейс містить шість символьних алфавітів, а не словник слів чи текст пароля. Випадкові слова потребують окремої моделі. Передбачувані фрази, повторне використання та витоки тут не оцінюються."
        }
      ]
    },
    "howToUse": [
      "Задайте цілу довжину випадково генерованої послідовності.",
      "Оберіть весь алфавіт незалежного вибору кожного знака, а не символи, знайдені в готовому паролі.",
      "Введіть припущену швидкість у мільярдах спроб/с і тлумачте результат лише в межах моделі."
    ],
    "disclaimer": "Навчальна модель рівномірної незалежної генерації, не оцінка реального пароля й не гарантія часу атаки. Сам пароль не потрібен. Результати поза скінченним числовим діапазоном відхиляються.",
    "sources": [
      "https://pages.nist.gov/800-63-4/sp800-63b.html"
    ],
    "defaults": {
      "length": 12,
      "charset": "alnum",
      "rate": 10
    },
    "fields": [
      {
        "name": "length",
        "type": "number",
        "label": "Довжина випадкової послідовності",
        "unit": "знаків",
        "help": null
      },
      {
        "name": "charset",
        "type": "select",
        "label": "Алфавіт",
        "unit": null,
        "help": null
      },
      {
        "name": "rate",
        "type": "number",
        "label": "Швидкість перевірки",
        "unit": "10⁹ спроб/с",
        "help": "Припущена швидкість перебору в мільярдах спроб за секунду: 1 = 10⁹ спроб/с. Це значення сценарію, а не виміряна швидкість атаки."
      }
    ],
    "rateLabel": "Швидкість перевірки",
    "rateUnit": "10⁹ спроб/с",
    "rateHelp": "Припущена швидкість перебору в мільярдах спроб за секунду: 1 = 10⁹ спроб/с. Це значення сценарію, а не виміряна швидкість атаки."
  },
  {
    "id": "password-entropy",
    "locale": "de",
    "path": "/de/computer/passwort-entropie/",
    "h1": "Rechner für die Passwortentropie",
    "title": "Passwortentropie berechnen — Bit und Dauer des Durchprobierens — Rechner",
    "description": "Berechne L·log₂N für unabhängige Zufallsgenerierung und eine ungefähre Suche mit M/2 Versuchen. Keine Prüfung echter Passwörter oder Kontosicherheit.",
    "canonical": "https://calcuway.com/de/computer/passwort-entropie/",
    "body": {
      "intro": "Lehrmodell gleichverteilter unabhängiger Zeichen aus dem gewählten vollständigen Alphabet. Es zeigt die Entropie des Suchraums und die ungefähre Zeit einer vollständigen Suche bei manuell angegebener Rate. Ein echter Passworttext wird nicht benötigt; Inhalt, Datenlecks und Kontosicherheit werden nicht geprüft. Bei menschlich gewählten Passwörtern bestimmen Länge und Alphabetgröße nicht die tatsächliche Entropie.",
      "howItWorks": "Für Länge L und N gleichwahrscheinliche unabhängige Zeichen gilt M=N^L und H=log₂M=L·log₂N. Die Länge ist eine positive sichere ganze Zahl; Rate r wird in Milliarden Versuchen/s angegeben. Die angezeigte Zeit M/(2·r·10⁹) nähert die Mitte eines großen Suchraums an. Bei vollständiger Suche ohne Wiederholung einschließlich Erfolg sind exakt (M+1)/2 Versuche zu erwarten; bei unabhängigen Zufallsversuchen mit Wiederholung M. Alphabet 94 bezeichnet druckbares ASCII ohne Leerzeichen. Ein angezeigtes Jahr entspricht 31.557.600s.",
      "example": "Zwölf Zeichen aus Buchstaben und Ziffern ergeben 71,45 Bit und rund 3,2·10²¹ Möglichkeiten.",
      "tips": "Lege die ganzzahlige Länge der zufällig erzeugten Folge fest. Wähle das vollständige Alphabet für jeden unabhängigen Zug, nicht nur die Zeichen eines vorhandenen Passworts. Gib die angenommene Rate in Milliarden Versuchen/s ein und deute das Ergebnis nur im Rahmen dieses Modells.",
      "faq": [
        {
          "q": "Wie viele Bits garantieren ein sicheres Passwort?",
          "a": "Keine Zahl hier garantiert Sicherheit. H beschreibt nur das angegebene Zufallsmodell. Die Zeit hängt von Hash-Prüfkosten, Versuchslimits, Datenlecks und anderen Gefahren ab; die Rate wird nicht gemessen."
        },
        {
          "q": "Warum nutzt die Suchzeit den halben Raum?",
          "a": "Für einen großen gleichverteilten Raum wird M/2 genutzt. Eine Suche ohne Wiederholung einschließlich Erfolg benötigt exakt im Mittel (M+1)/2 Versuche: eine Zufallsziffer 5,5, während die Näherung 5 zeigt. Das Modell ist ausdrücklich angenähert."
        },
        {
          "q": "Wie vergleicht man Länge und Alphabetgröße?",
          "a": "Ein zusätzliches Zufallszeichen erhöht H um log₂N Bits. Der Wechsel von N zu N₂ erhöht H um L·log₂(N₂/N). Vergleiche konkrete Varianten desselben Generierungsmodells, nicht beliebige menschliche Passwörter."
        },
        {
          "q": "Prüft das Werkzeug Passphrasen oder Wörterbuchangriffe?",
          "a": "Nein. Es bietet sechs Zeichenalphabete, kein Wortwörterbuch und keinen Passworttext. Zufallswörter benötigen ein eigenes Modell. Vorhersagbare Phrasen, Wiederverwendung und Datenlecks werden nicht bewertet."
        }
      ]
    },
    "howToUse": [
      "Lege die ganzzahlige Länge der zufällig erzeugten Folge fest.",
      "Wähle das vollständige Alphabet für jeden unabhängigen Zug, nicht nur die Zeichen eines vorhandenen Passworts.",
      "Gib die angenommene Rate in Milliarden Versuchen/s ein und deute das Ergebnis nur im Rahmen dieses Modells."
    ],
    "disclaimer": "Lehrmodell gleichverteilter unabhängiger Generierung, keine Bewertung echter Passwörter oder garantierte Angriffszeit. Ein echter Passworttext ist nicht nötig. Ergebnisse außerhalb des endlichen Zahlenbereichs werden abgelehnt.",
    "sources": [
      "https://pages.nist.gov/800-63-4/sp800-63b.html"
    ],
    "defaults": {
      "length": 12,
      "charset": "alnum",
      "rate": 10
    },
    "fields": [
      {
        "name": "length",
        "type": "number",
        "label": "Länge der Zufallsfolge",
        "unit": "Zeichen",
        "help": null
      },
      {
        "name": "charset",
        "type": "select",
        "label": "Zeichenvorrat",
        "unit": null,
        "help": null
      },
      {
        "name": "rate",
        "type": "number",
        "label": "Prüfrate",
        "unit": "10⁹ Versuche/s",
        "help": "Angenommene Prüfrate in Milliarden Versuchen pro Sekunde: 1 = 10⁹ Versuche/s. Dies ist ein Szenariowert, keine gemessene Angriffsgeschwindigkeit."
      }
    ],
    "rateLabel": "Prüfrate",
    "rateUnit": "10⁹ Versuche/s",
    "rateHelp": "Angenommene Prüfrate in Milliarden Versuchen pro Sekunde: 1 = 10⁹ Versuche/s. Dies ist ein Szenariowert, keine gemessene Angriffsgeschwindigkeit."
  },
  {
    "id": "password-entropy",
    "locale": "es",
    "path": "/es/informatica/entropia-de-contrasenas/",
    "h1": "Calculadora de entropía de contraseñas",
    "title": "Calculadora de entropía de contraseñas — bits y tiempo de fuerza bruta — Calculadoras",
    "description": "Calcula L·log₂N para generación aleatoria independiente y el tiempo aproximado de M/2 intentos. No evalúa contraseñas reales ni seguridad de cuentas.",
    "canonical": "https://calcuway.com/es/informatica/entropia-de-contrasenas/",
    "body": {
      "intro": "Modelo educativo de generación uniforme e independiente de caracteres del alfabeto completo seleccionado. Muestra la entropía del espacio y un tiempo aproximado de búsqueda exhaustiva a una tasa indicada manualmente. No necesita la contraseña real: no comprueba su contenido, filtraciones ni seguridad de la cuenta. En una contraseña elegida por una persona, longitud y alfabeto no determinan la entropía real.",
      "howItWorks": "Con longitud L y N caracteres equiprobables e independientes, M=N^L y H=log₂M=L·log₂N. La longitud es un entero positivo seguro; la tasa r se expresa en miles de millones de intentos/s. El tiempo mostrado M/(2·r·10⁹) aproxima el punto medio de un espacio grande. Una búsqueda exhaustiva sin repeticiones, incluyendo el éxito, necesita exactamente (M+1)/2 intentos de media; las conjeturas aleatorias independientes con repetición necesitan M. El alfabeto 94 es ASCII imprimible sin espacio. Un año mostrado equivale a 31 557 600s.",
      "example": "Doce caracteres de letras y cifras dan 71,45 bits y unas 3,2·10²¹ combinaciones.",
      "tips": "Indica la longitud entera de la secuencia generada al azar. Selecciona el alfabeto completo disponible para cada elección independiente, no los caracteres observados en una contraseña existente. Introduce la tasa supuesta en miles de millones de intentos/s e interpreta el resultado solo dentro del modelo.",
      "faq": [
        {
          "q": "¿Cuántos bits garantizan una contraseña segura?",
          "a": "Ninguna cifra aquí garantiza seguridad. H describe solo la generación aleatoria indicada. El tiempo depende del coste de verificar hashes, límites de intentos, filtraciones y otras amenazas; la tasa no se mide."
        },
        {
          "q": "¿Por qué el tiempo usa la mitad del espacio?",
          "a": "Para un espacio uniforme grande se usa M/2. La búsqueda sin repeticiones incluyendo el éxito necesita exactamente (M+1)/2 intentos de media: una cifra aleatoria requiere 5,5, mientras la aproximación muestra 5. El modelo es explícitamente aproximado."
        },
        {
          "q": "¿Cómo comparar longitud y tamaño del alfabeto?",
          "a": "Un carácter aleatorio adicional añade log₂N bits. Cambiar N por N₂ añade L·log₂(N₂/N). Compara opciones concretas con el mismo modelo de generación, no cualquier contraseña elegida por personas."
        },
        {
          "q": "¿Comprueba frases de contraseña o ataques de diccionario?",
          "a": "No. La interfaz ofrece seis alfabetos de caracteres, no un diccionario de palabras ni el texto de la contraseña. Las palabras aleatorias requieren otro modelo. No evalúa frases previsibles, reutilización ni filtraciones."
        }
      ]
    },
    "howToUse": [
      "Indica la longitud entera de la secuencia generada al azar.",
      "Selecciona el alfabeto completo disponible para cada elección independiente, no los caracteres observados en una contraseña existente.",
      "Introduce la tasa supuesta en miles de millones de intentos/s e interpreta el resultado solo dentro del modelo."
    ],
    "disclaimer": "Modelo educativo de generación uniforme e independiente, no evaluación de una contraseña real ni garantía de tiempo de ataque. No necesita la contraseña. Se rechazan resultados fuera del intervalo numérico finito.",
    "sources": [
      "https://pages.nist.gov/800-63-4/sp800-63b.html"
    ],
    "defaults": {
      "length": 12,
      "charset": "alnum",
      "rate": 10
    },
    "fields": [
      {
        "name": "length",
        "type": "number",
        "label": "Longitud de la secuencia aleatoria",
        "unit": "caracteres",
        "help": null
      },
      {
        "name": "charset",
        "type": "select",
        "label": "Alfabeto",
        "unit": null,
        "help": null
      },
      {
        "name": "rate",
        "type": "number",
        "label": "Tasa de verificación",
        "unit": "10⁹ intentos/s",
        "help": "Velocidad de comprobación supuesta en miles de millones de intentos por segundo: 1 = 10⁹ intentos/s. Es un valor del escenario, no una velocidad de ataque medida."
      }
    ],
    "rateLabel": "Tasa de verificación",
    "rateUnit": "10⁹ intentos/s",
    "rateHelp": "Velocidad de comprobación supuesta en miles de millones de intentos por segundo: 1 = 10⁹ intentos/s. Es un valor del escenario, no una velocidad de ataque medida."
  }
];

const money = { ru: '₽', en: '$', uk: '₴', de: '€', es: '€' } as const;
const foreign = { ru: 'ед. валюты', en: 'currency units', uk: 'од. валюти', de: 'Währungseinheiten', es: 'unidades de divisa' } as const;
const hours = { ru: 'ч', en: 'h', uk: 'год', de: 'h', es: 'h' } as const;
const seconds = { ru: 'с', en: 's', uk: 'с', de: 's', es: 's' } as const;
const bits = { ru: 'бит', en: 'bits', uk: 'біт', de: 'Bit', es: 'bits' } as const;
const viewports = [{ width: 390, height: 844 }, { width: 1365, height: 900 }] as const;
const query: Record<Id, Values> = {
  overtime: { rate: 700, normalHours: 40, overtimeHours: 6, multiplier: 2 },
  'timesheet-week': { lines: '22:00,06:00,30', rate: 700, normal: 6 },
  'currency-exchange-fee': { direction: 'sell', amount: 1000, rate: 2, spreadPct: 10, feePct: 5, feeFixed: 20 },
  'password-entropy': { length: 8, charset: 'digits', rate: 10 },
};
const leak = /\b(?:NaN|Infinity|undefined)\b/;
function number(text: string, locale: Locale) {
  const raw = text.match(/[-−]?\d[\d\s\u00a0\u202f.,]*/)?.[0];
  if (!raw) return NaN;
  const compact = raw.replace(/[\s\u00a0\u202f]/g, '').replace('−', '-');
  return Number(locale === 'en' ? compact.replaceAll(',', '') : compact.replaceAll('.', '').replace(',', '.'));
}
async function fixedNumber(page: Page, sample: Sample, value: number, row?: number, unit?: string, precision = 3) {
  const target = row === undefined ? page.getByTestId('calc-result-primary') : page.getByTestId(`calc-result-row-${row}`).locator('dd');
  await expect(target).toBeVisible();
  await expect.poll(async () => number((await target.allTextContents())[0] ?? '', sample.locale)).toBeCloseTo(value, precision);
  if (unit) await expect(target).toContainText(unit);
}
async function fixedScenario(page: Page, sample: Sample, kind: 'default' | 'query' | 'alternate') {
  const locale = sample.locale;
  if (sample.id === 'overtime') {
    // Default650×160+650×1.5×14=117650; average117650/174→676.15.
    // Query700×40+700×2×6=36400; average36400/46→791.30.
    const values = kind === 'default' ? [117650,104000,13650,676.15] : [36400,28000,8400,791.30];
    await fixedNumber(page, sample, values[0], undefined, money[locale]);
    for (let i = 0; i < 3; i++) await fixedNumber(page, sample, values[i + 1], i, money[locale]);
    await expect(page.getByTestId('calc-result').locator('[data-testid^="calc-result-row-"]')).toHaveCount(3);
  } else if (sample.id === 'timesheet-week') {
    // Default shifts8+8+7.75+8+5=36.75h;500×36.75=18375.
    //22:00→06:00 minus30min=7.5h; normal6h×700 +extra1.5h×700×1.5=5775.
    const normal = kind === 'default';
    await fixedNumber(page, sample, normal ? 36.75 : 7.5, undefined, hours[locale]);
    await fixedNumber(page, sample, normal ? 5 : 1, 0);
    await fixedNumber(page, sample, normal ? 0 : 1.5, 2, hours[locale]);
    await fixedNumber(page, sample, normal ? 18375 : 5775, 3, money[locale]);
    await expect(page.getByTestId('calc-result').locator('[data-testid^="calc-result-row-"]')).toHaveCount(4);
    if (!normal) {
      await expect.poll(async () => [...((await page.getByTestId('calc-result-row-1').locator('dd').allTextContents())[0] ?? '').matchAll(/\d+/g)].map(token => Number(token[0]))).toEqual([7,30]);
      const cells = page.locator('main table tbody tr').first().locator('td');
      await expect(cells.nth(0)).toHaveText('22:00'); await expect(cells.nth(1)).toHaveText('06:00'); await expect(cells.nth(2)).toHaveText('30');
      await expect.poll(async () => number(await cells.nth(3).innerText(), locale)).toBe(7.5);
    }
  } else if (sample.id === 'currency-exchange-fee') {
    // Default1000×92.5×.995×.985=90656.9375→90656.94.
    // Sell:1000×2×.9 −20 −(1000×2×.9×.05)=1690local.
    // Buy:(2000−20)×.95/(2×1.1)=855foreign; local/foreign rate stays2.
    if (kind === 'default') {
      await fixedNumber(page, sample, 90656.94, undefined, money[locale]);
      await fixedNumber(page, sample, 92.0375, 0);
      await expect(page.getByTestId('calc-result').locator('[data-testid^="calc-result-row-"]')).toHaveCount(6);
    } else {
      const buy = kind === 'alternate';
      await fixedNumber(page, sample, buy ? 855 : 1690, undefined, buy ? foreign[locale] : money[locale]);
      const values = buy ? [2.2,1000,45,9.09,90.91,145,14.5] : [1.8,2000,90,20,200,310,15.5];
      for (let i = 0; i < values.length; i++) await fixedNumber(page, sample, values[i], i, i >= 1 && i <= 5 ? (buy ? foreign[locale] : money[locale]) : i === 6 ? '%' : undefined);
      await expect(page.getByTestId('calc-result').locator('[data-testid^="calc-result-row-"]')).toHaveCount(7);
      await expect(page.getByTestId('field-label-amount')).toContainText(`(${buy ? money[locale] : foreign[locale]})`);
    }
  } else {
    // Default12log₂62=71.450355…→71.45bits. Uniform eight digits:
    //8log₂10=26.575424…→26.575bits,M=100000000;
    //M/(2×10×1e9)=.005s, at20billions/s=.0025s.
    await fixedNumber(page, sample, kind === 'default' ? 71.45 : 26.575, undefined, bits[locale]);
    if (kind !== 'default') {
      await fixedNumber(page, sample, 100000000, 0);
      await fixedNumber(page, sample, kind === 'alternate' ? .0025 : .005, 1, seconds[locale], 6);
      await fixedNumber(page, sample, 10, 3);
    }
    await expect(page.getByTestId('calc-result').locator('[data-testid^="calc-result-row-"]')).toHaveCount(4);
    await expect(page.locator('main input[type="password"]')).toHaveCount(0);
  }
}
async function helpAndBounds(page: Page, sample: Sample, width: number) {
  await expect(page.locator('#f-rate-help')).toHaveText(sample.rateHelp);
  await expect(page.locator('#f-rate')).toHaveAttribute('aria-describedby', /(?:^|\s)f-rate-help(?:\s|$)/);
  await expect(page.getByTestId('field-label-rate')).toContainText(sample.rateLabel);
  await expect(page.getByTestId('field-label-rate')).toContainText(`(${sample.rateUnit})`);
  for (const id of ['calc-form', 'calc-result-wrap', ...sample.fields.map(field => `field-${field.name}`)]) {
    const box = await page.getByTestId(id).boundingBox();
    expect(box).not.toBeNull(); expect(box!.x).toBeGreaterThanOrEqual(-1); expect(box!.x + box!.width).toBeLessThanOrEqual(width + 1);
  }
  expect(await page.evaluate(() => Math.max(document.documentElement.scrollWidth, document.body.scrollWidth) <= window.innerWidth + 1)).toBe(true);
}
async function declaredValues(page: Page, sample: Sample, values: Values) {
  for (const field of sample.fields) {
    await expect(page.getByTestId(`field-${field.name}`)).toBeVisible();
    if (field.name in values) await expect(page.getByTestId(`field-${field.name}`)).toHaveValue(String(values[field.name]));
  }
}
async function completeBodyAndMeta(page: Page, sample: Sample) {
  await expect(page.locator('h1')).toHaveText(sample.h1); await expect(page).toHaveTitle(sample.title);
  await expect(page.locator('head link[rel="canonical"]')).toHaveAttribute('href', sample.canonical);
  await expect(page.locator('head meta[name="description"]')).toHaveAttribute('content', sample.description);
  for (const text of [sample.body.intro, ...sample.howToUse, sample.body.howItWorks, sample.body.example]) await expect(page.locator('main')).toContainText(text);
  if (sample.disclaimer) await expect(page.getByTestId('calc-form')).toContainText(sample.disclaimer);
  const faq = page.getByTestId('calculator-faq'); await expect(faq.locator('details')).toHaveCount(sample.body.faq.length);
  for (const [index, item] of sample.body.faq.entries()) {
    await expect(faq.getByTestId(`faq-item-${index}`).locator('summary')).toContainText(item.q);
    await expect(faq.getByTestId(`faq-item-${index}`).locator('p')).toHaveText(item.a);
  }
  for (const field of sample.fields) if (field.help) await expect(page.locator(`#f-${field.name}-help`)).toHaveText(field.help);
  for (const href of sample.sources) await expect(page.locator('main').locator(`a[href="${href}"]`)).toBeVisible();
}
async function copy(page: Page, sample: Sample, values: Values) {
  await page.evaluate(() => { delete (window as Window & { rateHelpShare?: string }).rateHelpShare; });
  await page.getByTestId('calc-share-btn').click();
  if (sample.id === 'overtime' || sample.id === 'currency-exchange-fee') { await expect(page.getByTestId('calc-share-warning')).toBeVisible(); await page.getByTestId('calc-share-confirm').click(); }
  else await expect(page.getByTestId('calc-share-warning')).toHaveCount(0);
  await expect.poll(() => page.evaluate(() => (window as Window & { rateHelpShare?: string }).rateHelpShare ?? '')).not.toBe('');
  const link = await page.evaluate(() => (window as Window & { rateHelpShare?: string }).rateHelpShare!);
  const url = new URL(link); expect(url.origin).toBe(new URL(page.url()).origin); expect(url.pathname).toBe(sample.path); expect(url.hash).toBe('#calculator');
  const expected = Object.fromEntries(Object.entries(values).filter(([key,value]) => value !== sample.defaults[key]).map(([key,value]) => [key,String(value)]));
  expect(Object.fromEntries(url.searchParams)).toEqual(expected);
  return link;
}
for (const viewport of viewports) for (const sample of samples) test.describe(`rate-help ${viewport.width}px ${sample.locale} ${sample.id}`, () => {
  test.use({ viewport });
  test('specific native rate help, fixed model, full publication, actual clipboard, reload and reset', async ({ page }) => {
    const errors: string[] = []; page.on('pageerror', error => errors.push(error.message));
    await page.addInitScript(() => Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: async (text: string) => { (window as Window & { rateHelpShare?: string }).rateHelpShare = text; } } }));
    await page.goto(sample.path); await fixedScenario(page, sample, 'default');
    await declaredValues(page, sample, sample.defaults); await helpAndBounds(page, sample, viewport.width); await completeBodyAndMeta(page, sample);
    const inputs = query[sample.id];
    await page.goto(`${sample.path}?${new URLSearchParams(Object.entries(inputs).map(([key,value]) => [key,String(value)]))}`);
    await fixedScenario(page, sample, 'query'); await declaredValues(page, sample, inputs); await helpAndBounds(page, sample, viewport.width);
    await page.getByTestId('field-rate').fill('');
    await expect(page.getByTestId('field-error-rate')).toBeVisible(); await expect(page.getByTestId('calc-result-invalid')).toBeVisible(); await expect(page.getByTestId('calc-result-primary')).toHaveCount(0);
    await page.getByTestId('field-rate').fill(String(inputs.rate)); await fixedScenario(page, sample, 'query');
    const link = await copy(page, sample, inputs); await page.goto(link); await fixedScenario(page, sample, 'query'); await page.reload(); await fixedScenario(page, sample, 'query');
    await declaredValues(page, sample, inputs); await helpAndBounds(page, sample, viewport.width);
    if (sample.id === 'currency-exchange-fee' || sample.id === 'password-entropy') {
      const alternate: Values = sample.id === 'currency-exchange-fee' ? { ...inputs, direction:'buy',amount:2000 } : { ...inputs,rate:20 };
      if (sample.id === 'currency-exchange-fee') { await page.getByTestId('field-direction').selectOption('buy'); await page.getByTestId('field-amount').fill('2000'); }
      else await page.getByTestId('field-rate').fill('20');
      await fixedScenario(page, sample, 'alternate'); await helpAndBounds(page, sample, viewport.width);
      const alternateLink = await copy(page, sample, alternate); await page.goto(alternateLink); await fixedScenario(page, sample, 'alternate'); await page.reload(); await fixedScenario(page, sample, 'alternate'); await declaredValues(page, sample, alternate);
    }
    await expect(page.getByTestId('calc-result-wrap')).not.toContainText(leak);
    if (['en','de','es'].includes(sample.locale)) await expect(page.getByTestId('calc-form')).not.toContainText(/[А-Яа-яЁёІіЇїЄєҐґ]/);
    await page.getByTestId('calc-reset-btn').click(); await fixedScenario(page, sample, 'default'); expect(new URL(page.url()).search).toBe('');
    await declaredValues(page, sample, sample.defaults); await helpAndBounds(page, sample, viewport.width);
    const defaultLink = await copy(page, sample, sample.defaults); expect(new URL(defaultLink).search).toBe('');
    expect(errors).toEqual([]);
  });
});
