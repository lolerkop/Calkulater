import type { CalculatorDef } from '../../lib/types';
type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Кредитная нагрузка показывает долю месячного дохода до налогов, которую занимают ежемесячные платежи по долгам. Это отношение денежных потоков за один месяц, а не размера задолженности к годовому доходу. Показанные зоны до 30 %, от 30 до 43 % и выше 43 % — условная шкала этого инструмента. Они не определяют одобрение кредита, безопасность бюджета или лимит конкретного кредитора. Остаток после платежей ещё включает деньги на налоги и остальные расходы.",
    "howToUse": [
      "Введите сумму ежемесячных платежей по долгам; не остаток всей задолженности.",
      "Введите месячный доход до налогов в той же валюте.",
      "Сравните процент и условную зону; остаток ещё не является свободным бюджетом.",
      "Для заявки уточните перечень обязательств и определение дохода у своего кредитора."
    ],
    "howItWorks": "DTI = ежемесячные платежи ÷ месячный доход до налогов × 100 %. Доход должен быть положительным, платежи — неотрицательными, суммы в одной валюте. Остаток = доход до налогов − платежи; налоги, аренда, питание и прочие траты из него не вычтены. Отношение может превышать 100 %. Зоны 30 % и 43 % сохранены как условные диапазоны с нейтральной оценкой, без банковского решения.",
    "example": "Платежи 45 000 при доходе 150 000 дают нагрузку 30 %. При нулевых платежах и положительном доходе доля равна 0 %; 180 000 / 150 000 даёт 120 % без ограничения сотней.",
    "faq": [
      {
        "q": "Какие платежи учитывать?",
        "a": "Регулярные обязательства: платежи по кредитам и ипотеке, минимальные платежи по картам, рассрочки. Аренду и коммунальные обычно не включают, если банк не требует иного."
      },
      {
        "q": "Какой доход брать для расчёта нагрузки?",
        "a": "Для показанного DTI используется доход до налогов. Деление на сумму после налогов отвечает другой задаче — доле платежей в доступном бюджете — и даст другой процент. Например, 45 000 / 150 000 = 30 %, а 45 000 / 120 000 = 37,5 %. Не смешивайте эти базы при сравнении."
      },
      {
        "q": "Пороги — это норма?",
        "a": "Нет. Пороговые зоны здесь условные и не подтверждают способность платить или право получить кредит. У разных кредиторов и продуктов разные пределы и перечни обязательств; 43 % не является универсальным правилом."
      },
      {
        "q": "Почему нагрузка бывает больше 100 %?",
        "a": "Платежи превышают доход. Калькулятор показывает это, а не обрезает, потому что сама ситуация и есть ответ."
      }
    ],
    "disclaimer": "Отношение платежей к доходу до налогов. Условные зоны не являются нормативом или оценкой вероятности просрочки. Состав обязательств, проверка дохода и решение зависят от кредитора и местных правил; налоги и бытовые расходы не моделируются."
  },
  "en": {
    "longDescription": "Debt-to-income measures monthly debt payments against monthly income before taxes. It compares cash flows for the same month, rather than total debt with annual income. The bands up to 30%, over 30% through 43%, and over 43% are an illustrative scale used by this tool. They do not determine loan approval, budget safety or a particular lender’s limit. The amount left after debt payments still has to cover taxes and other expenses.",
    "howToUse": [
      "Enter total monthly debt payments, not the outstanding debt balance.",
      "Enter gross monthly income in the same currency.",
      "Read the ratio and illustrative band; the remainder is not a spendable budget yet.",
      "For an application, check the lender’s own debt and income definitions."
    ],
    "howItWorks": "DTI = monthly debt payments ÷ gross monthly income × 100%. Income must be positive, payments nonnegative, and both amounts in one currency. Remainder = gross income − payments; taxes, rent, food and other costs have not been deducted. The ratio may exceed 100%. The 30% and 43% bands remain as illustrative neutral ranges, without a lending decision.",
    "example": "Payments of 45,000 against income of 150,000 give a DTI of 30%. Zero payments against positive income give 0%; 180,000 / 150,000 gives 120% without a cap at 100%.",
    "faq": [
      {
        "q": "Which payments count?",
        "a": "Regular obligations: loan and mortgage instalments, card minimums, instalment plans. Rent and utilities are usually left out unless your lender includes them."
      },
      {
        "q": "Is income before or after tax?",
        "a": "This DTI uses income before tax. Dividing by take-home income measures debt payments as a share of the available budget and gives a different percentage: 45,000 / 150,000 = 30%, while 45,000 / 120,000 = 37.5%. Keep the income basis consistent."
      },
      {
        "q": "Are the thresholds a rule?",
        "a": "No. These illustrative bands do not establish affordability or eligibility. Lenders and loan products use different limits and debt definitions; 43% is not a universal rule."
      },
      {
        "q": "Why does the ratio exceed 100%?",
        "a": "Payments are larger than income. The calculator shows it rather than clamping, because the situation itself is the answer."
      }
    ],
    "disclaimer": "Debt-payment ratio to income before taxes. Illustrative bands are neither a regulation nor a default-probability estimate. Debt scope, income verification and approval depend on the lender and local rules; taxes and living costs are not modelled."
  },
  "uk": {
    "longDescription": "Кредитне навантаження показує частку місячного доходу до податків, яку займають щомісячні платежі за боргами. Це співвідношення потоків за один місяць, а не всього боргу до річного доходу. Зони до 30 %, понад 30 % до 43 % і понад 43 % є умовною шкалою цього інструмента. Вони не визначають схвалення кредиту, безпечність бюджету чи межу конкретного кредитора. Залишок після платежів ще має покривати податки та інші витрати.",
    "howToUse": [
      "Введіть суму щомісячних платежів за боргами, а не весь залишок боргу.",
      "Введіть місячний дохід до податків у тій самій валюті.",
      "Прочитайте частку та умовну зону; залишок ще не є вільним бюджетом.",
      "Для заявки уточніть перелік зобов’язань і визначення доходу у кредитора."
    ],
    "howItWorks": "DTI = щомісячні платежі за боргами ÷ місячний дохід до податків × 100 %. Дохід має бути додатним, платежі — невід’ємними, суми в одній валюті. Залишок = дохід до податків − платежі; податки, оренду, харчування й інші витрати ще не віднято. Співвідношення може перевищувати 100 %. Межі 30 % та 43 % залишені як умовні нейтральні діапазони без кредитного рішення.",
    "example": "Платежі 45 000 за доходу до податків 150 000 дають 30 %. За нульових платежів і додатного доходу частка 0 %; 180 000 / 150 000 дає 120 % без обмеження сотнею.",
    "faq": [
      {
        "q": "Які платежі враховувати?",
        "a": "Усі регулярні платежі за боргами: кредити, іпотеку, автокредит, мінімальні платежі за картками, розстрочки. Оренда житла формально не борг, але банки часто враховують і її."
      },
      {
        "q": "Чи є 30 % і 43 % нормативними межами кредиту?",
        "a": "Ні. Це умовні діапазони, а не підтвердження платоспроможності чи права на кредит. Кредитори та продукти мають різні межі й переліки зобов’язань; 43 % не є універсальним правилом."
      },
      {
        "q": "Який дохід враховує банк?",
        "a": "Цей DTI використовує дохід до податків. Ділення на дохід на руки вимірює частку платежів у доступному бюджеті та дає інший процент: 45 000 / 150 000 = 30 %, а 45 000 / 120 000 = 37,5 %. Не змішуйте ці бази порівняння."
      },
      {
        "q": "Чи можна порівнювати DTI різних кредиторів напряму?",
        "a": "Лише за однакових визначень доходу та платежів. Розрахунок не перевіряє підтверджений дохід, кредитну історію, заставу чи вимоги конкретного продукту."
      }
    ],
    "disclaimer": "Відношення платежів до доходу до податків. Умовні зони не є нормативом або оцінкою ймовірності прострочення. Склад зобов’язань, перевірка доходу й рішення залежать від кредитора та місцевих правил; податки й побутові витрати не моделюються."
  },
  "de": {
    "longDescription": "Die Schuldendienstquote setzt monatliche Kreditraten zum monatlichen Einkommen vor Steuern ins Verhältnis. Sie vergleicht Zahlungsströme desselben Monats, nicht die gesamte Schuld mit dem Jahreseinkommen. Die Bereiche bis 30 %, über 30 % bis 43 % und über 43 % bilden eine illustrative Skala dieses Rechners. Sie bestimmen weder Kreditbewilligung noch Budgetsicherheit oder die Grenze einer bestimmten Bank. Der Rest nach den Raten muss noch Steuern und andere Ausgaben decken.",
    "howToUse": [
      "Trage die gesamten monatlichen Kreditraten ein, nicht den offenen Schuldenstand.",
      "Trage monatliches Bruttoeinkommen in derselben Währung ein.",
      "Lies Quote und illustrativen Bereich; der Rest ist noch kein frei verfügbares Budget.",
      "Prüfe für einen Antrag die Schuld- und Einkommensdefinitionen der Bank."
    ],
    "howItWorks": "DTI = monatliche Kreditraten ÷ monatliches Bruttoeinkommen × 100 %. Einkommen muss positiv, Raten müssen nichtnegativ sein; beide Beträge verwenden eine Währung. Rest = Bruttoeinkommen − Raten; Steuern, Miete, Essen und andere Ausgaben sind noch nicht abgezogen. Die Quote darf über 100 % liegen. Die 30-%- und 43-%-Bereiche bleiben illustrative neutrale Bereiche ohne Kreditentscheidung.",
    "example": "Raten von 900 € bei einem Einkommen von 3000 € ergeben eine Quote von 30 %. Bei Raten null und positivem Einkommen beträgt die Quote 0 %; 180 000 / 150 000 ergibt 120 % ohne Deckelung bei 100 %.",
    "faq": [
      {
        "q": "Welche Raten zählen mit?",
        "a": "Regelmäßige Verpflichtungen: Kredit- und Darlehensraten, Mindestbeträge auf Karten, Ratenkäufe. Miete und Nebenkosten bleiben meist außen vor, sofern deine Bank sie nicht einbezieht."
      },
      {
        "q": "Einkommen vor oder nach Steuern?",
        "a": "Dieser DTI verwendet Einkommen vor Steuern. Mit Nettoeinkommen als Nenner misst du den Ratenanteil am verfügbaren Budget und erhältst einen anderen Wert: 45 000 / 150 000 = 30 %, aber 45 000 / 120 000 = 37,5 %. Halte die Bezugsbasis beim Vergleich gleich."
      },
      {
        "q": "Sind die Schwellen eine Regel?",
        "a": "Nein. Diese illustrativen Bereiche bestätigen weder Tragbarkeit noch Kreditanspruch. Banken und Produkte verwenden unterschiedliche Grenzen und Schulddefinitionen; 43 % ist keine universelle Regel."
      },
      {
        "q": "Warum übersteigt die Quote 100 %?",
        "a": "Die Raten sind größer als das Einkommen. Der Rechner zeigt das, statt zu deckeln, denn die Lage selbst ist die Antwort."
      }
    ],
    "disclaimer": "Verhältnis der Kreditraten zum Einkommen vor Steuern. Illustrative Bereiche sind weder Vorschrift noch Schätzung der Ausfallwahrscheinlichkeit. Schuldumfang, Einkommensprüfung und Bewilligung hängen von Bank und örtlichen Regeln ab; Steuern und Lebenshaltung fehlen."
  },
  "es": {
    "longDescription": "El ratio deuda-ingresos relaciona las cuotas mensuales de deuda con los ingresos mensuales antes de impuestos. Compara flujos del mismo mes, no toda la deuda con los ingresos anuales. Las bandas hasta el 30 %, por encima del 30 % hasta el 43 %, y por encima del 43 % son una escala ilustrativa de esta herramienta. No determinan aprobación de crédito, seguridad del presupuesto ni límites de un prestamista. El saldo tras las cuotas todavía debe cubrir impuestos y otros gastos.",
    "howToUse": [
      "Introduce todas las cuotas mensuales, no el saldo total de deuda.",
      "Introduce ingresos mensuales brutos en la misma moneda.",
      "Lee el ratio y la banda ilustrativa; el saldo aún no es un presupuesto disponible.",
      "Para una solicitud, consulta las definiciones de deuda e ingresos del prestamista."
    ],
    "howItWorks": "DTI = cuotas mensuales de deuda ÷ ingresos mensuales brutos × 100 %. Los ingresos deben ser positivos y las cuotas no negativas, en una misma moneda. Saldo = ingresos brutos − cuotas; todavía no se han descontado impuestos, alquiler, comida ni otros gastos. El ratio puede superar el 100 %. Las bandas del 30 % y 43 % se mantienen como intervalos ilustrativos neutrales, sin decisión crediticia.",
    "example": "Unas cuotas de 450 frente a unos ingresos de 1500 dan un DTI del 30 %. Cuotas cero con ingresos positivos dan 0 %; 180 000 / 150 000 da 120 % sin limitarlo al 100 %.",
    "faq": [
      {
        "q": "¿Qué cuotas cuentan?",
        "a": "Las obligaciones periódicas: cuotas de préstamos e hipotecas, mínimos de tarjetas, compras a plazos. El alquiler y los suministros suelen quedar fuera salvo que tu prestamista los incluya."
      },
      {
        "q": "¿Los ingresos son antes o después de impuestos?",
        "a": "Este DTI usa ingresos antes de impuestos. Dividir por ingresos netos mide las cuotas respecto al presupuesto disponible y da otro porcentaje: 45 000 / 150 000 = 30 %, frente a 45 000 / 120 000 = 37,5 %. Mantén la misma base al comparar."
      },
      {
        "q": "¿Los umbrales son una norma?",
        "a": "No. Las bandas ilustrativas no prueban capacidad de pago ni elegibilidad. Los prestamistas y productos usan límites y obligaciones distintos; el 43 % no es una regla universal."
      },
      {
        "q": "¿Por qué el ratio supera el 100 %?",
        "a": "Las cuotas son mayores que los ingresos. La calculadora lo muestra en vez de recortarlo, porque la situación en sí es la respuesta."
      }
    ],
    "disclaimer": "Ratio de cuotas a ingresos antes de impuestos. Las bandas ilustrativas no son normas ni estimaciones de impago. Las obligaciones incluidas, la verificación de ingresos y la aprobación dependen del prestamista y de las reglas locales; impuestos y coste de vida no se modelan."
  }
};
