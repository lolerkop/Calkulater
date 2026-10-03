import type { CalculatorDef } from '../../lib/types';

type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
// Starts from the five actual145 public bodies; bounded model corrections
// and independently checked examples are authored per subject and locale.
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Распределяет введённую годовую норму отпуска пропорционально отработанным месяцам в пределах одного 12-месячного периода. При 28 днях модель даёт 28/12≈2,333 дня за месяц; дробь остаётся в расчёте, чтобы не накапливать ошибки округления. Это выбранный способ учёта, а не утверждение о том, когда закон или договор предоставляет отпуск. Отрицательный остаток показывает превышение использованных дней над модельным начислением; он не определяет удержание из зарплаты при увольнении.",
    "howToUse": [
      "Введите годовую норму отпуска в днях.",
      "Укажите, сколько месяцев отработано в рабочем году.",
      "Введите количество уже использованных дней.",
      "Введите долю месяца, которую хотите моделировать; правовой порядок подсчёта и округления проверяется отдельно."
    ],
    "howItWorks": "Для нормы D>0, месяцев M от 0 до 12 и использованных дней U≥0: за месяц D/12, накоплено A=(D/12)×M, остаток B=A−U. Месяцы и использованные дни могут быть дробными; введённая доля месяца используется напрямую, без календарного порога. Результат не округляется до целых или половины дня для предоставления отпуска. Перенос прошлых лет, особые режимы и денежная компенсация не включены.",
    "example": "При норме 28 дней после 7 месяцев и 5 использованных дней остаётся 11,333 дня. При норме 24 дня, 0,5 месяца и 2 использованных днях накоплено 1, остаток −1. При 12 месяцах накопление равно всей введённой норме; 12,1 месяца выходит за один период и возвращает ошибку.",
    "faq": [
      {
        "q": "Почему месячная норма получается дробной?",
        "a": "Потому что 28/12 не целое число. Калькулятор сохраняет точную дробную норму до отображения. Это не правило всех кадровых систем: например, отдельное британское правило для первого года предусматривает округление 2,33 до 2,5 дня; его здесь автоматически не применяют."
      },
      {
        "q": "Может ли остаток быть отрицательным?",
        "a": "Да. Это только разница между линейным начислением и использованными днями. Возможность отпуска авансом, компенсация и удержания зависят от применимых правил и договора; отрицательное число не является расчётом долга работодателю."
      },
      {
        "q": "Считаются ли неполные месяцы?",
        "a": "Да, в этой модели можно ввести 0,5 месяца: результат берётся пропорционально. Это не календарный подсчёт дат и не утверждение о местном пороге; если договор использует иной порядок, сначала определите подходящее число месяцев отдельно."
      },
      {
        "q": "Переносится ли неиспользованный отпуск?",
        "a": "Это зависит от законодательства и договора. Где-то перенос разрешён со сроком давности, где-то требуется компенсация, и ни то ни другое этот расчёт не охватывает."
      }
    ],
    "disclaimer": "Линейное начисление за один год не определяет юридическую норму отпуска, округление, перенос, компенсацию или удержания. Норму и применимые правила выбирают отдельно; язык страницы не устанавливает страну трудового договора."
  },
  "en": {
    "longDescription": "Prorates the entered annual leave allowance by months worked within one 12-month period. With 28 days, the model gives 28/12≈2.333 days per month and retains the fraction to avoid accumulating rounding errors. This is a selected accounting method, not a statement about when law or contract grants leave. A negative balance means days used exceed modeled accrual; it does not determine a salary deduction on departure.",
    "howToUse": [
      "Enter the annual leave entitlement in days.",
      "Enter how many months have been worked in the leave year.",
      "Enter the days already taken.",
      "Enter the part-month you want to model; legal counting and rounding rules require separate verification."
    ],
    "howItWorks": "For annual days D>0, months M from 0 to 12 and used days U≥0: monthly D/12, accrued A=(D/12)×M, balance B=A−U. Months and used days may be fractional; an entered part-month is used directly, without a calendar threshold. The result is not rounded to whole or half days for granting leave. Previous-year carryover, special arrangements and cash settlement are excluded.",
    "example": "A 28-day entitlement after 7 months with 5 days taken leaves a balance of 11.333 days. With allowance 24 days, 0.5 months and 2 days used, accrual is 1 and balance −1. At 12 months, accrual equals the full allowance; 12.1 months exceeds one period and returns an error.",
    "faq": [
      {
        "q": "Why is the monthly figure fractional?",
        "a": "Because 28/12 is not a whole number. The calculator retains the fractional allowance until display. This is not a rule for every payroll system: a specific UK first-year rule, for example, rounds 2.33 up to 2.5 days; it is not applied automatically here."
      },
      {
        "q": "Can the balance be negative?",
        "a": "Yes. It is only the difference between linear accrual and used days. Advance leave, compensation and deductions depend on applicable rules and contract; the negative number is not a debt calculation."
      },
      {
        "q": "Do part months count?",
        "a": "Yes. This model accepts 0.5 months and prorates directly. It does not count dates or declare a local threshold. If a contract uses another method, establish the appropriate month input separately."
      },
      {
        "q": "Does unused leave carry over?",
        "a": "That depends on the jurisdiction and the contract. Some allow carry-over with a deadline, others require payment instead, and this calculation covers neither."
      }
    ],
    "disclaimer": "One-year linear accrual determines no legal entitlement, rounding, carryover, compensation or deduction. Allowance and applicable rules must be established separately; language does not select the employment jurisdiction."
  },
  "uk": {
    "longDescription": "Розподіляє введену річну норму відпустки пропорційно відпрацьованим місяцям у межах одного 12-місячного періоду. За 28 днів модель дає 28/12≈2,333 дня на місяць і зберігає дріб, щоб не накопичувати похибки округлення. Це обраний спосіб обліку, не твердження про законодавчий чи договірний момент надання відпустки. Від’ємний залишок означає перевищення використаних днів над модельним нарахуванням, але не визначає утримання із зарплати під час звільнення.",
    "howToUse": [
      "Введіть річну норму відпустки в днях.",
      "Введіть кількість відпрацьованих місяців.",
      "Введіть кількість уже використаних днів."
    ],
    "howItWorks": "Для норми D>0, місяців M від 0 до 12 і використаних днів U≥0: за місяць D/12, накопичено A=(D/12)×M, залишок B=A−U. Місяці й використані дні можуть бути дробовими; введена частка місяця береться прямо, без календарного порога. Результат не округлюється до цілого чи половини дня для надання відпустки. Перенесення минулих років, особливі режими й грошова компенсація не включені.",
    "example": "За норми 28 днів після 7 місяців і 5 використаних днів лишається 11,333 дня. За норми 24 дні, 0,5 місяця й 2 використаних днів накопичено 1, залишок −1. За 12 місяців накопичення дорівнює всій нормі; 12,1 місяця перевищує один період і повертає помилку.",
    "faq": [
      {
        "q": "Чи можна взяти відпустку наперед?",
        "a": "Право на відпустку наперед залежить від застосовних правил і домовленості. Калькулятор лише допускає від’ємну різницю між нарахуванням та використанням; із неї не випливає автоматичне утримання із зарплати."
      },
      {
        "q": "Чому виходить дробова кількість днів?",
        "a": "28/12 не ділиться націло, тому в моделі зберігається дріб до відображення. Це не загальне кадрове правило: наприклад, окремий британський порядок першого року округлює 2,33 до 2,5 дня; автоматично він тут не застосовується."
      },
      {
        "q": "Чи згоряють невикористані дні?",
        "a": "Перенесення, строки використання та компенсація визначаються застосовними правилами й договором. Річна норма тут не включає залишки попередніх років автоматично; їх треба обліковувати окремо."
      },
      {
        "q": "Що буде під час звільнення?",
        "a": "Грошова компенсація та допустимість утримань потребують окремого правового й зарплатного розрахунку. Показані дні не визначають суму виплати чи боргу; калькулятор не вводить середнього заробітку або підстав звільнення."
      }
    ],
    "disclaimer": "Лінійне нарахування за один рік не визначає правової норми, округлення, перенесення, компенсації чи утримань. Норму й правила встановлюють окремо; мова не обирає країну трудового договору."
  },
  "de": {
    "longDescription": "Verteilt den eingegebenen Jahresurlaub proportional auf gearbeitete Monate innerhalb eines 12-Monats-Zeitraums. Bei 28 Tagen liefert das Modell 28/12≈2,333 Tage je Monat und behält den Bruchteil gegen fortlaufende Rundungsfehler. Das ist eine gewählte Rechenmethode, keine Aussage darüber, wann Recht oder Vertrag Urlaub gewähren. Ein negativer Rest bedeutet mehr genommene als modelliert erworbene Tage; einen Lohnabzug beim Ausscheiden bestimmt er nicht.",
    "howToUse": [
      "Trage den Jahresanspruch in Tagen ein.",
      "Trage ein, wie viele Monate im Urlaubsjahr gearbeitet wurden.",
      "Trage die bereits genommenen Tage ein.",
      "Gib den zu modellierenden Monatsanteil ein; rechtliche Zähl- und Rundungsregeln sind gesondert zu prüfen."
    ],
    "howItWorks": "Für Jahrestage D>0, Monate M von 0 bis 12 und genommene Tage U≥0: monatlich D/12, erworben A=(D/12)×M, Rest B=A−U. Monate und Tage dürfen gebrochen sein; ein eingegebener Monatsanteil gilt direkt ohne Kalenderschwelle. Das Ergebnis wird nicht auf ganze oder halbe Urlaubstage zur Gewährung gerundet. Vorjahresübertrag, Sondermodelle und Geldabgeltung fehlen.",
    "example": "Ein Anspruch von 28 Tagen nach 7 Monaten mit 5 genommenen Tagen lässt einen Rest von 11,333 Tagen. Bei 24 Jahrestagen, 0,5 Monaten und 2 genommenen Tagen sind 1 erworben und Rest −1. Nach 12 Monaten entspricht die Ansammlung dem Jahreswert; 12,1 Monate überschreiten einen Zeitraum und erzeugen einen Fehler.",
    "faq": [
      {
        "q": "Warum ist der Monatswert gebrochen?",
        "a": "Weil 28/12 keine ganze Zahl ist. Der Rechner behält den Bruchteil bis zur Anzeige. Das ist keine Regel sämtlicher Abrechnungen: eine bestimmte britische Erstjahresregel rundet beispielsweise 2,33 auf 2,5 Tage; sie wird hier nicht automatisch angewandt."
      },
      {
        "q": "Kann der Rest negativ sein?",
        "a": "Ja. Es ist nur die Differenz zwischen linearer Ansammlung und genommenen Tagen. Vorausurlaub, Abgeltung und Abzüge hängen von Recht und Vertrag ab; die negative Zahl berechnet keine Schuld."
      },
      {
        "q": "Zählen angebrochene Monate?",
        "a": "Ja. Das Modell akzeptiert 0,5 Monate und rechnet direkt proportional. Es zählt keine Daten und bestimmt keine örtliche Schwelle. Bei einer anderen Vertragsmethode ist die passende Monatszahl gesondert zu ermitteln."
      },
      {
        "q": "Wird nicht genommener Urlaub übertragen?",
        "a": "Das hängt von Recht und Vertrag ab. Manche erlauben die Übertragung mit einer Frist, andere verlangen stattdessen eine Abgeltung, und beides deckt diese Rechnung nicht ab."
      }
    ],
    "disclaimer": "Lineare Ansammlung für ein Jahr bestimmt keinen gesetzlichen Anspruch, Rundung, Übertrag, Ausgleich oder Abzug. Jahreswert und Regeln sind separat zu ermitteln; die Sprache bestimmt keinen Rechtsraum."
  },
  "es": {
    "longDescription": "Prorratea los días anuales introducidos por meses trabajados dentro de un periodo de 12 meses. Con 28 días, el modelo da 28/12≈2,333 días mensuales y conserva la fracción para evitar errores acumulados de redondeo. Es un método elegido, no una afirmación sobre cuándo ley o contrato concede vacaciones. Un saldo negativo indica más días usados que acumulados en el modelo; no determina una deducción salarial al salir.",
    "howToUse": [
      "Introduce el derecho anual de vacaciones en días.",
      "Introduce cuántos meses se han trabajado en el año de vacaciones.",
      "Introduce los días ya disfrutados.",
      "Introduce la parte de mes que quieres modelar; verifica aparte las reglas legales de cómputo y redondeo."
    ],
    "howItWorks": "Para días anuales D>0, meses M entre 0 y 12 y días usados U≥0: mensual D/12, acumulado A=(D/12)×M, saldo B=A−U. Meses y días admiten fracciones; la parte de mes se usa directamente sin umbral de calendario. No se redondea a días enteros o medios para conceder vacaciones. Se excluyen arrastres, regímenes especiales y liquidación monetaria.",
    "example": "Un derecho de 28 días tras 7 meses con 5 días disfrutados deja un saldo de 11,333 días. Con 24 días anuales, 0,5 meses y 2 días usados, acumulado 1 y saldo −1. Con 12 meses se acumula el total anual; 12,1 meses supera un periodo y devuelve error.",
    "faq": [
      {
        "q": "¿Por qué la cifra mensual es fraccionaria?",
        "a": "Porque 28/12 no es entero. Se conserva la fracción hasta mostrarla. No es una regla de toda nómina: una regla británica específica del primer año, por ejemplo, redondea 2,33 a 2,5 días; aquí no se aplica automáticamente."
      },
      {
        "q": "¿El saldo puede ser negativo?",
        "a": "Sí. Es solo la diferencia entre acumulación lineal y días usados. Vacaciones adelantadas, compensación y deducciones dependen de reglas y contrato; la cifra negativa no calcula una deuda."
      },
      {
        "q": "¿Cuentan los meses incompletos?",
        "a": "Sí. Este modelo acepta 0,5 meses y prorratea directamente. No cuenta fechas ni establece un umbral local. Si el contrato usa otro método, determina aparte el dato de meses adecuado."
      },
      {
        "q": "¿Las vacaciones no disfrutadas se arrastran al año siguiente?",
        "a": "Depende de la jurisdicción y del contrato. Unos permiten arrastrarlas con una fecha límite y otros exigen compensarlas, y este cálculo no cubre ninguno de los dos casos."
      }
    ],
    "disclaimer": "La acumulación lineal anual no determina derecho legal, redondeo, arrastre, compensación ni deducción. Deben establecerse aparte días y reglas aplicables; el idioma no selecciona jurisdicción laboral."
  }
};
