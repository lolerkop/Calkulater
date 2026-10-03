import type { CalculatorDef } from '../../lib/types';

type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
// Starts from the five actual145 public bodies; bounded model corrections
// and independently checked examples are authored per subject and locale.
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Сверхурочные оплачиваются обычной ставкой с надбавочным коэффициентом, который применяется только к часам сверх нормы. Средняя ставка за час рядом с итогом — та величина, которую стоит читать: она делит всё заработанное на все отработанные часы и растёт куда слабее, чем обещает коэффициент. Четырнадцать сверхурочных часов по полтора поверх ста шестидесяти обычных поднимают среднюю ставку на четыре процента, а не на пятьдесят. Именно этот разрыв и делает сверхурочные привлекательнее в договоре, чем в расчётном листке.",
    "howToUse": [
      "Введите обычную ставку за час.",
      "Укажите обычные часы за период.",
      "Сверхурочные часы укажите отдельно.",
      "Введите один коэффициент, применимый к этому блоку часов;1,5 — пример, а не автоматическое определение права на доплату."
    ],
    "howItWorks": "Обычная оплата = ставка × обычные часы. Сверхурочные = ставка × коэффициент × сверхурочные часы. Средняя ставка делит итог на все отработанные часы. Обычные и сверхурочные часы могут быть дробными, но не отрицательными. Один выбранный коэффициент применяется ко всем введённым сверхурочным часам; пороги по дням, неделям и разным ступеням не определяются автоматически. При нулевом общем времени сумма 0, а средняя ставка не показывается, поскольку 0/0 не имеет значения.",
    "example": "При ставке 650 ₽, 160 обычных и 14 сверхурочных часах по 1,5 выходит 117 650 ₽ — в среднем 676,15 ₽ за час. Если обычных и сверхурочных часов по 0, обе суммы и итог равны 0, а средней ставки нет. Это отличается от действительной ставки 0 за положительное время.",
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
    ],
    "disclaimer": "Модель одного блока сверхурочных с введённой базовой ставкой. Право на доплату, порог часов, состав regular rate, налоги и ограничения рабочего времени зависят от применимых правил; язык страницы не выбирает трудовое законодательство."
  },
  "en": {
    "longDescription": "Overtime pay is the ordinary rate multiplied by a premium, applied only to the hours beyond the normal schedule. The effective hourly rate shown next to the total is the part worth reading: it divides everything earned by every hour worked, and it rises far less than the multiplier suggests. Fourteen overtime hours at time and a half on top of a hundred and sixty regular ones lift the effective rate by four per cent, not fifty. That gap is exactly what makes overtime look better in a contract than it feels in a payslip.",
    "howToUse": [
      "Enter the ordinary hourly rate.",
      "Enter the regular hours worked in the period.",
      "Enter the overtime hours separately.",
      "Enter one multiplier applicable to this block of hours;1.5 is an example, not an automatic determination of overtime entitlement."
    ],
    "howItWorks": "Regular pay = rate × regular hours. Overtime pay = rate × multiplier × overtime hours. The effective rate divides the total by all hours worked. Regular and overtime hours may be fractional but not negative. One selected multiplier applies to the entire overtime block; daily, weekly and tiered thresholds are not determined automatically. With zero total hours, pay is 0 and the average is omitted because 0/0 has no defined value.",
    "example": "At 650 an hour, 160 regular and 14 overtime hours at 1.5 come to 117,650 — an effective 676.15 an hour. With both regular and overtime hours at 0, both pay components and the total are 0; the average is omitted. This differs from an actual zero rate for positive working time.",
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
    ],
    "disclaimer": "This is one overtime block at an entered base rate. Entitlement, hour thresholds, regular-rate components, taxes and time limits depend on applicable rules; page language does not select employment law."
  },
  "uk": {
    "longDescription": "Надурочні оплачуються з підвищувальним коефіцієнтом, і саме тому середня вартість години виявляється вищою за базову ставку. Розрахунок показує обидва числа — підсумкову оплату й фактичну середню ставку, яка й потрібна для порівняння варіантів зайнятості.",
    "howToUse": [
      "Введіть базову погодинну ставку.",
      "Введіть кількість звичайних годин.",
      "Введіть один коефіцієнт для цього блоку годин;1,5 є прикладом, не автоматичним визначенням права на доплату."
    ],
    "howItWorks": "Звичайна оплата дорівнює ставка × звичайні години. Надурочні рахуються як ставка × коефіцієнт × надурочні години. Середня ставка — підсумкова оплата, поділена на всі відпрацьовані години. Звичайні й надурочні години можуть бути дробовими, але не від’ємними. Один обраний коефіцієнт застосовується до всього блоку надурочних; денні, тижневі та ступінчасті пороги не визначаються автоматично. За нульового часу сума 0, а середня ставка не показується, бо 0/0 не має визначеного значення.",
    "example": "За ставки 650 ₴, 160 звичайних і 14 надурочних годин за коефіцієнта 1,5 виходить 117 650 ₴ — у середньому 676,15 ₴ за годину. За нульових звичайних і надурочних годин обидві суми й підсумок 0, середньої ставки немає. Це відрізняється від справжньої нульової ставки за додатного часу.",
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
    ],
    "disclaimer": "Це один блок надурочних за введеною базовою ставкою. Право на доплату, поріг годин, склад бази, податки й обмеження часу залежать від правил; мова сторінки не обирає трудове законодавство."
  },
  "de": {
    "longDescription": "Die Überstundenvergütung ist der gewöhnliche Satz mal einem Zuschlag, angewendet allein auf die Stunden über der regulären Arbeitszeit. Der tatsächliche Stundensatz neben der Summe ist der Teil, der sich zu lesen lohnt: er teilt alles Verdiente durch alle geleisteten Stunden, und er steigt weit weniger, als der Faktor vermuten lässt. Vierzehn Überstunden mit dem Anderthalbfachen auf hundertsechzig reguläre heben den tatsächlichen Satz um vier Prozent und nicht um fünfzig. Genau dieser Abstand lässt Überstunden im Vertrag besser aussehen, als sie sich auf der Abrechnung anfühlen.",
    "howToUse": [
      "Trage den gewöhnlichen Stundensatz ein.",
      "Trage die im Zeitraum geleisteten regulären Stunden ein.",
      "Trage die Überstunden gesondert ein.",
      "Gib einen für diesen Stundenblock geltenden Faktor ein;1,5 ist ein Beispiel, keine automatische Ermittlung eines Zuschlagsanspruchs."
    ],
    "howItWorks": "Reguläre Vergütung = Satz × reguläre Stunden. Überstundenvergütung = Satz × Faktor × Überstunden. Der tatsächliche Satz teilt die Summe durch alle geleisteten Stunden. Reguläre Stunden und Überstunden dürfen gebrochen, aber nicht negativ sein. Ein gewählter Faktor gilt für den gesamten Überstundenblock; Tages-, Wochen- und Stufengrenzen werden nicht automatisch ermittelt. Bei null Stunden beträgt die Vergütung 0; der Durchschnitt entfällt, weil 0/0 keinen definierten Wert hat.",
    "example": "Bei 20 € je Stunde ergeben 160 reguläre und 14 Überstunden mit dem Faktor 1,5 zusammen 3620 € — tatsächlich 20,80 € je Stunde. Bei null regulären und null Überstunden sind beide Beträge und die Summe 0; der Durchschnitt entfällt. Das ist etwas anderes als ein tatsächlicher Nullsatz für positive Arbeitszeit.",
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
    ],
    "disclaimer": "Das Modell umfasst einen Überstundenblock mit eingegebenem Basissatz. Anspruch, Stundenschwellen, Bestandteile des Grundsatzes, Steuern und Zeitgrenzen hängen von anwendbaren Regeln ab; die Sprache wählt kein Arbeitsrecht."
  },
  "es": {
    "longDescription": "La retribución de las horas extra es la tarifa ordinaria multiplicada por un recargo, aplicado solo a las horas que pasan de la jornada normal. La tarifa efectiva por hora que aparece junto al total es la parte que conviene leer: divide todo lo ganado entre todas las horas trabajadas, y sube mucho menos de lo que sugiere el multiplicador. Catorce horas extra a hora y media sobre ciento sesenta ordinarias suben la tarifa efectiva un cuatro por ciento, no un cincuenta. Esa diferencia es justo lo que hace que las horas extra se vean mejor en un contrato que en una nómina.",
    "howToUse": [
      "Introduce la tarifa ordinaria por hora.",
      "Introduce las horas ordinarias trabajadas en el periodo.",
      "Introduce las horas extra por separado.",
      "Introduce un multiplicador para este bloque de horas;1,5 es un ejemplo, no una determinación automática del derecho al recargo."
    ],
    "howItWorks": "Retribución ordinaria = tarifa × horas ordinarias. Retribución de horas extra = tarifa × multiplicador × horas extra. La tarifa efectiva divide el total entre todas las horas trabajadas. Las horas ordinarias y extra pueden ser fraccionarias, pero no negativas. Un multiplicador elegido se aplica al bloque completo; no se determinan automáticamente umbrales diarios, semanales ni por tramos. Con cero horas, la retribución es 0 y se omite la media porque 0/0 no tiene un valor definido.",
    "example": "A 6,50 la hora, 160 horas ordinarias y 14 extra a 1,5 suman 1176,50: una tarifa efectiva de 6,76 por hora. Con horas ordinarias y extra en 0, ambos importes y total son 0; se omite la media. No equivale a una tarifa real cero con tiempo trabajado positivo.",
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
    ],
    "disclaimer": "Modela un bloque de horas extra con tarifa base introducida. Derecho, umbrales, componentes de la tarifa regular, impuestos y límites dependen de reglas aplicables; el idioma no elige legislación laboral."
  }
};
