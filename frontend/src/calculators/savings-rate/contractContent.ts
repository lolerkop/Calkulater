import type { CalculatorDef } from '../../lib/types';
type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Норма сбережений показывает долю дохода после налогов, оставшуюся после введённых расходов за тот же период. Это показатель денежного бюджета: при доходе 100 000 и расходах 70 000 остаётся 30 000, или 30 %. Одинаковые проценты при разных доходах дают разные денежные суммы. Для сравнения месяцев нужны одинаковые определения дохода и расходов; показатель сам по себе не определяет финансовую независимость или достаточность резерва.",
    "howToUse": [
      "Введите доход за месяц или другой удобный период.",
      "Введите расходы за тот же период.",
      "Сравните норму с предыдущими периодами: важна динамика, а не одно значение."
    ],
    "howItWorks": "Сбережения S = доход I − расходы E; норма = S/I×100 %. I>0, E≥0, суммы в одной валюте и за один период. E>I даёт отрицательную норму и предупреждение, а не ошибку. Это остаток бюджета, а не изменение чистого капитала. Перевод между собственными счетами не считайте расходом второй раз. Денежные строки обычно округляются до целой единицы, суммы меньше единицы сохраняют дробную часть; проценты считаются до округления.",
    "example": "Доход 100 000 и расходы 70 000 дают сбережения 30 000 и норму 30 %. Доход 50 000 при расходах 60 000 означает остаток −10 000 и норму −20 %; равные доход и расходы дают 0 %.",
    "faq": [
      {
        "q": "Какая норма сбережений считается хорошей?",
        "a": "Расчёт не устанавливает норму безопасности в 10 % или 20 %. Нужная доля зависит от обязательств, резерва и выбранных целей. Например, 30 % при доходе 100 000 — это 30 000, а при доходе 30 000 — 9000; процент полезен вместе с суммой."
      },
      {
        "q": "Что считать доходом?",
        "a": "Сумму, которая реально поступила за период после налогов. Разовые поступления лучше считать отдельно, иначе норма скачет."
      },
      {
        "q": "Почему норма отрицательная?",
        "a": "Расходы превысили доход: разница покрыта из накоплений или в долг. Калькулятор показывает это отдельной строкой."
      },
      {
        "q": "Как сравнивать норму сбережений за разные сроки?",
        "a": "Используйте доход и расходы за одинаковый период в каждом расчёте. Не сравнивайте годовой доход с месячными расходами. При нерегулярных потоках квартал или год может лучше показать общий остаток, но не решает проблему платежей в конкретную дату."
      }
    ],
    "disclaimer": "Остаток дохода после введённых расходов. Рыночная переоценка активов, чистый капитал, проценты по накоплениям, будущие доходы и персональная достаточность сбережений не определяются. Классификацию расходов и долгов нужно применять последовательно."
  },
  "en": {
    "longDescription": "The savings rate measures after-tax income left after the entered expenses for the same period. It is a cash-budget measure: income of 100,000 and expenses of 70,000 leave 30,000, or 30%. Equal percentages at different incomes leave different amounts. Comparing months requires consistent income and expense definitions; the rate alone does not establish financial independence or reserve adequacy.",
    "howToUse": [
      "Enter income for a month or another period.",
      "Enter expenses for the same period.",
      "Compare the rate with earlier periods."
    ],
    "howItWorks": "Savings S = income I − expenses E; rate = S/I×100%. Income must be positive, expenses nonnegative, with one currency and period. Expenses above income give a negative rate and warning, rather than an error. This is a budget remainder, not a net-worth change. Do not count transfers between your own accounts as another expense. Money rows normally round to whole units, while amounts below one unit retain fractions; the rate uses unrounded values.",
    "example": "Income 100,000 and expenses 70,000 give savings of 30,000 and a rate of 30%. Income of 50,000 and expenses of 60,000 give a −10,000 remainder and −20% rate; equal income and expenses give 0%.",
    "faq": [
      {
        "q": "What is a good savings rate?",
        "a": "The calculation does not establish a safe 10% or 20% threshold. The share needed depends on obligations, reserves and chosen goals. For example, 30% of 100,000 is 30,000, while 30% of 30,000 is 9,000; read the percentage with its amount."
      },
      {
        "q": "What counts as income?",
        "a": "Money that actually arrived during the period, after tax. Keep one-off amounts separate or the rate will swing."
      },
      {
        "q": "Why is my rate negative?",
        "a": "Expenses exceeded income, so the gap was covered from savings or borrowing. The calculator flags this on its own line."
      },
      {
        "q": "How do I compare savings rates over different periods?",
        "a": "Use income and expenses covering the same period in each calculation. Do not pair annual income with monthly expenses. A quarter or year can summarise irregular flows better, but does not solve cash shortages on a particular payment date."
      }
    ],
    "disclaimer": "Income left after entered expenses. Asset revaluation, net worth, savings interest, future income and personal savings adequacy are not determined. Apply expense and debt classifications consistently."
  },
  "uk": {
    "longDescription": "Норма заощаджень показує частку доходу після податків, що залишається після введених витрат за той самий період. Це показник грошового бюджету: дохід 100 000 і витрати 70 000 залишають 30 000, або 30 %. Рівні проценти за різних доходів означають різні суми. Для порівняння місяців потрібні однакові визначення доходу й витрат; сам показник не визначає фінансову незалежність чи достатність резерву.",
    "howToUse": [
      "Введіть дохід за період.",
      "Введіть витрати за той самий період.",
      "Прочитайте суму заощаджень і норму у відсотках."
    ],
    "howItWorks": "Заощадження S = дохід I − витрати E; норма = S/I×100 %. I>0, E≥0, суми в одній валюті та за один період. E>I дає від’ємну норму й попередження, а не помилку. Це залишок бюджету, не зміна чистого капіталу. Переказ між власними рахунками не рахуйте повторною витратою. Грошові рядки зазвичай округлюються до цілої одиниці, менші за одиницю зберігають дробову частину; проценти обчислюються до округлення.",
    "example": "Дохід 100 000 ₴ і витрати 70 000 ₴ дають заощадження 30 000 ₴ і норму 30 %. Та сама норма за доходу 30 000 ₴ означала б 9000 ₴ заощаджень. Дохід 50 000 за витрат 60 000 дає залишок −10 000 і норму −20 %; рівні дохід та витрати дають 0 %.",
    "faq": [
      {
        "q": "Чому норма важливіша за суму заощаджень?",
        "a": "За сталих витрат і відсутності податків, інфляції та доходу від накопичень норма 50 % означає, що річний залишок дорівнює річним витратам. Це обмежений арифметичний приклад, не прогноз фінансової незалежності."
      },
      {
        "q": "Яка норма вважається доброю?",
        "a": "Розрахунок не встановлює безпечної межі 10 % або 20 %. Потрібна частка залежить від зобов’язань, резерву та цілей. Наприклад, 30 % від 100 000 — 30 000, а від 30 000 — 9000; процент корисний разом із сумою."
      },
      {
        "q": "Дохід брати до податків чи після?",
        "a": "Після — це те, чим ви реально розпоряджаєтеся. Головне робити це послідовно, інакше порівняння між періодами втратить сенс."
      },
      {
        "q": "Чи вважати погашення боргу заощадженням?",
        "a": "Тут обчислюється грошовий залишок. Якщо погашення тіла боргу входить до введених витрат, воно зменшує залишок, хоча може збільшувати чистий капітал. Для іншого визначення заощаджень потрібна окрема база; не додавайте той самий платіж двічі."
      }
    ],
    "disclaimer": "Залишок доходу після введених витрат. Переоцінка активів, чистий капітал, відсотки на накопичення, майбутній дохід і особиста достатність заощаджень не визначаються. Послідовно застосовуйте класифікацію витрат і боргів."
  },
  "de": {
    "longDescription": "Die Sparquote misst den Anteil des Einkommens nach Steuern, der nach den eingegebenen Ausgaben desselben Zeitraums übrig bleibt. Sie beschreibt den Geldhaushalt: 3200 Einkommen und 2240 Ausgaben lassen 960 oder 30 % übrig. Gleiche Prozente bei verschiedenen Einkommen bedeuten verschiedene Beträge. Monatsvergleiche brauchen dieselben Einkommens- und Ausgabendefinitionen; die Quote allein bestimmt weder finanzielle Unabhängigkeit noch ausreichende Reserven.",
    "howToUse": [
      "Trage das Einkommen eines Monats oder eines anderen Zeitraums ein.",
      "Trage die Ausgaben desselben Zeitraums ein.",
      "Vergleiche die Quote mit früheren Zeiträumen."
    ],
    "howItWorks": "Ersparnis S = Einkommen I − Ausgaben E; Quote = S/I×100 %. I>0, E≥0, gleiche Währung und gleicher Zeitraum. E>I ergibt eine negative Quote und Warnung statt eines Fehlers. Gemessen wird der Budgetrest, nicht die Veränderung des Nettovermögens. Überweisungen zwischen eigenen Konten nicht erneut als Ausgabe zählen. Geldzeilen werden gewöhnlich auf ganze Einheiten gerundet, Beträge unter einer Einheit behalten Bruchteile; die Quote nutzt ungerundete Werte.",
    "example": "Ein Einkommen von 3200 € bei Ausgaben von 2240 € ergibt 960 € gespart und eine Quote von 30 %. Einkommen 50 000 und Ausgaben 60 000 ergeben einen Rest von −10 000 und eine Quote von −20 %; gleiche Einnahmen und Ausgaben ergeben 0 %.",
    "faq": [
      {
        "q": "Welche Sparquote ist gut?",
        "a": "Der Rechner legt keine sichere Schwelle von 10 % oder 20 % fest. Der benötigte Anteil hängt von Verpflichtungen, Reserve und Zielen ab. Beispielsweise sind 30 % von 100 000 gleich 30 000, von 30 000 aber 9000; lies Quote und Betrag zusammen."
      },
      {
        "q": "Was zählt als Einkommen?",
        "a": "Geld, das im Zeitraum tatsächlich eingegangen ist, nach Steuern. Halte einmalige Beträge getrennt, sonst schwankt die Quote."
      },
      {
        "q": "Warum ist meine Quote negativ?",
        "a": "Die Ausgaben haben das Einkommen überstiegen, die Lücke wurde also aus Erspartem oder auf Kredit gedeckt. Der Rechner weist das in einer eigenen Zeile aus."
      },
      {
        "q": "Wie vergleiche ich Sparquoten verschiedener Zeiträume?",
        "a": "Einkommen und Ausgaben müssen in jeder Rechnung denselben Zeitraum umfassen. Jahresverdienst nicht mit Monatsausgaben kombinieren. Ein Quartal oder Jahr fasst unregelmäßige Ströme oft besser zusammen, löst aber keine Geldlücke an einem bestimmten Zahlungstag."
      }
    ],
    "disclaimer": "Einkommen nach eingegebenen Ausgaben. Vermögensneubewertung, Nettovermögen, Sparzinsen, künftiges Einkommen und persönliche Sparangemessenheit werden nicht bestimmt. Ausgaben und Schulden einheitlich zuordnen."
  },
  "es": {
    "longDescription": "La tasa de ahorro mide los ingresos después de impuestos que quedan tras los gastos introducidos del mismo periodo. Describe el presupuesto de caja: ingresos de 1000 y gastos de 700 dejan 300, o el 30 %. El mismo porcentaje con ingresos distintos deja cantidades distintas. Comparar meses exige definiciones coherentes; la tasa por sí sola no determina independencia financiera ni suficiencia de reservas.",
    "howToUse": [
      "Introduce los ingresos de un mes o de otro periodo.",
      "Introduce los gastos del mismo periodo.",
      "Compara la tasa con periodos anteriores."
    ],
    "howItWorks": "Ahorro S = ingresos I − gastos E; tasa = S/I×100 %. I>0, E≥0, una moneda y un periodo comunes. E>I produce una tasa negativa y un aviso, no un error. Es el saldo del presupuesto, no el cambio de patrimonio neto. No cuentes una transferencia entre cuentas propias como otro gasto. Las filas monetarias suelen redondearse a unidades enteras; los importes menores que una unidad conservan fracciones. El porcentaje usa valores sin redondear.",
    "example": "Unos ingresos de 1000 y unos gastos de 700 dan un ahorro de 300 y una tasa del 30 %. Ingresos de 50 000 y gastos de 60 000 dejan −10 000 y una tasa del −20 %; ingresos y gastos iguales dan 0 %.",
    "faq": [
      {
        "q": "¿Qué tasa de ahorro es buena?",
        "a": "El cálculo no establece un umbral seguro del 10 % o 20 %. La parte necesaria depende de obligaciones, reservas y objetivos. Por ejemplo, el 30 % de 100 000 son 30 000, pero de 30 000 son 9000; lee el porcentaje junto con la cantidad."
      },
      {
        "q": "¿Qué cuenta como ingresos?",
        "a": "El dinero que llegó de verdad durante el periodo, después de impuestos. Mantén aparte los importes puntuales o la tasa oscilará."
      },
      {
        "q": "¿Por qué mi tasa es negativa?",
        "a": "Los gastos superaron a los ingresos, así que la diferencia se cubrió con ahorros o con deuda. La calculadora lo señala en su propia línea."
      },
      {
        "q": "¿Cómo comparar tasas de ahorro de periodos diferentes?",
        "a": "En cada cálculo los ingresos y gastos deben abarcar el mismo periodo. No combines ingresos anuales con gastos mensuales. Un trimestre o año resume mejor flujos irregulares, pero no resuelve la falta de dinero en una fecha concreta de pago."
      }
    ],
    "disclaimer": "Ingresos tras los gastos introducidos. No se determinan revalorización de activos, patrimonio neto, intereses del ahorro, ingresos futuros ni suficiencia personal del ahorro. Clasifica gastos y deudas de forma coherente."
  }
};
