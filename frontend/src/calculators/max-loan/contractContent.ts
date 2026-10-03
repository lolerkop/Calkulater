import type { CalculatorDef } from '../../lib/types';

type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
// Starts from the five actual145 public bodies; bounded model corrections
// and independently checked examples are authored per subject and locale.
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Решает задачу, обратную обычному кредитному калькулятору: тот идёт от суммы к платежу, а этот — от посильного платежа к сумме. Сначала из дохода и допустимой долговой нагрузки получается платёж, затем сумма как приведённая стоимость аннуитета. При нулевой ставке формула делится на нуль, поэтому предел взят отдельной ветвью: без процентов сумма равна просто сумме всех платежей. Важно понимать, что результат — это потолок по формуле, а не одобренная сумма: банк смотрит ещё на кредитную историю, стаж, состав семьи и залог, а эти условия в модель не включены.",
    "howToUse": [
      "Введите ежемесячный доход.",
      "Укажите долю дохода, которую готовы отдавать банку.",
      "Введите ставку и срок кредита.",
      "Результат — потолок по формуле, а не решение банка."
    ],
    "howItWorks": "При доходе Y и выбранной доле d% месячный платёж P=Y×d/100. Срок n=round(12×лет), минимум один месяц. Для постоянной номинальной ставки r% годовых i=r/1200; сумма A=P×[1−(1+i)^−n]/i, при i=0 A=P×n. Всего планируется P×n, проценты равны этой сумме минус A. Платежи предполагаются в конце месяца, без комиссий, страхования, изменения ставки или договорного округления графика.",
    "example": "При доходе 120 000 ₽, нагрузке 40 %, ставке 18 % и сроке 20 лет максимальная сумма — 3 110 195,14 ₽. При доходе 1000, доле 30%, нулевой ставке и одном году платёж 300 даёт сумму 3600 и проценты 0. Срок 0,1 года округляется до одного месяца: сумма 300, а не 360.",
    "faq": [
      {
        "q": "Какую долговую нагрузку выбрать?",
        "a": "Долю выбирают для конкретной задачи; модель не объявляет 40–50% нормативом или безопасным пределом. Если это общий бюджет всех кредитов, сначала учтите платежи по существующим долгам и вводите только оставшуюся долю для нового кредита. Обязательные расходы домохозяйства здесь не проверяются."
      },
      {
        "q": "Одобрит ли банк рассчитанную сумму?",
        "a": "Нет. Это приведённая стоимость выбранных платежей при заданной ставке и сроке. Решение кредитора, подтверждение дохода, существующие обязательства и обеспечение остаются за пределами модели; результат не является предложением или гарантией одобрения."
      },
      {
        "q": "Почему при большем сроке сумма растёт не пропорционально?",
        "a": "Потому что каждый следующий платёж дисконтируется сильнее предыдущего. При ставке 18 % удвоение срока с 10 до 20 лет добавляет к сумме заметно меньше половины."
      },
      {
        "q": "Как ставка влияет на доступную сумму?",
        "a": "При тех же 240 ежемесячных платежах снижение номинальной ставки с 18% до 12% увеличивает приведённую сумму примерно на 40,16%. Эффект зависит от срока; это сравнение формул без комиссий и изменения кредитных условий."
      },
      {
        "q": "Считать доход до налога или после?",
        "a": "Для показателя DTI в образовательном определении CFPB используется доход до налогов и удержаний. Если считаете личный бюджет от суммы на руки, используйте процент от той же чистой базы и не сравнивайте его напрямую с gross-DTI. Требования кредитора проверяются отдельно; язык страницы не определяет страну договора."
      }
    ],
    "disclaimer": "Сумма — приведённая стоимость выбранных платежей, не допустимый или безопасный кредит. Не проверяются обязательные расходы, существующие долги, кредитоспособность и правила банка; номинальная ставка не заменяет полную стоимость договора."
  },
  "en": {
    "longDescription": "Solves the reverse of the usual loan calculation: that one goes from an amount to a payment, this one goes from an affordable payment to an amount. The payment comes first, from your income and the debt burden you accept, and the loan is then the present value of that annuity. At a zero rate the formula would divide by zero, so the limit is taken on its own branch: with no interest the amount is simply the sum of all the payments. The result is a ceiling produced by a formula rather than an approved offer — a lender also weighs credit history, employment, dependants and collateral, and those conditions are outside the model.",
    "howToUse": [
      "Enter your monthly income.",
      "Enter the share of it you are willing to pay a lender.",
      "Enter the interest rate and the term.",
      "The result is a formula ceiling, not a lender's decision."
    ],
    "howItWorks": "Income Y and selected share d% give monthly payment P=Y×d/100. Term n=round(12×years), at least one month. With constant nominal annual rate r%, i=r/1200; principal A=P×[1−(1+i)^−n]/i, or P×n at zero interest. Scheduled total is P×n, and interest is that total less A. Payments occur at month-end; fees, insurance, changing rates and contractual schedule rounding are excluded.",
    "example": "On an income of 120,000 at a 40% burden, 18% and 20 years, the maximum amount is 3,110,195.14. At income 1000, share 30%, zero rate and one year, payment 300 gives principal 3600 and interest 0. A 0.1-year term rounds to one month: principal 300, not 360.",
    "faq": [
      {
        "q": "What debt burden should I use?",
        "a": "Choose the share for the scenario; the model does not label 40–50% a universal lending limit or safe budget. If it is a budget for all debts, account for existing repayments first and enter only the share remaining for the new loan. Household living costs are not tested here."
      },
      {
        "q": "Will a lender approve the calculated amount?",
        "a": "No. It is the present value of the selected payments at the entered rate and term. A lender decision, income verification, existing obligations and collateral remain outside the model; this is neither an offer nor approval assurance."
      },
      {
        "q": "Why doesn't the amount grow proportionally with the term?",
        "a": "Because each later payment is discounted more heavily than the one before. At 18%, doubling the term from 10 to 20 years adds noticeably less than half again to the amount."
      },
      {
        "q": "How much does the rate matter?",
        "a": "For the same 240 monthly payments, reducing the nominal annual rate from 18% to 12% raises the present-value amount by about 40.16%. The effect depends on the term; this compares formulas without fees or changes in loan conditions."
      },
      {
        "q": "Should income be before or after tax?",
        "a": "The CFPB educational definition of DTI uses income before taxes and deductions. For a personal take-home-pay budget, use a percentage of that same net base and do not compare it directly with gross-income DTI. Check lender requirements separately; the page language does not select a jurisdiction."
      }
    ],
    "disclaimer": "The amount is the present value of selected payments, not an approved or safe loan. Living costs, existing debts, creditworthiness and lender rules are not checked; a nominal rate does not replace full contractual cost."
  },
  "uk": {
    "longDescription": "Розрахунок знаходить теоретичну суму кредиту за заданим місячним платежем, а не прогнозує схвалення банку. Логіка зворотна до кредитного калькулятора: спершу дохід і обрана частка визначають платіж, потім він дисконтується за постійною номінальною ставкою. За нульової ставки сума дорівнює сумі всіх платежів. Наявні борги, кредитна перевірка, комісії й страхування не визначаються автоматично.",
    "howToUse": [
      "Введіть щомісячний дохід.",
      "Задайте частку доходу на новий кредит після врахування наявних платежів; універсального банківського порога тут немає.",
      "Введіть ставку й строк."
    ],
    "howItWorks": "За доходу Y та частки d% місячний платіж P=Y×d/100. Строк n=round(12×роки), щонайменше один місяць. За постійної номінальної річної ставки r% маємо i=r/1200; сума A=P×[1−(1+i)^−n]/i, а за i=0 A=P×n. Запланований підсумок P×n, проценти — його різниця з A. Платежі припускаються наприкінці місяця; комісії, страхування, зміна ставки й договірне округлення графіка не включені.",
    "example": "За доходу 120 000 ₴, навантаження 40 %, ставки 18 % і строку 20 років максимальна сума — 3 110 195,14 ₴. За доходу 1000, частки 30%, нульової ставки й одного року платіж 300 дає суму 3600 та проценти 0. Строк 0,1 року округлюється до одного місяця: сума 300, не 360.",
    "faq": [
      {
        "q": "Яке навантаження закладати?",
        "a": "Частку обирають для конкретного сценарію; модель не встановлює 40–50% як норматив чи 30% як безпечну межу. Для загального бюджету всіх боргів спершу врахуйте наявні платежі й введіть лише залишок частки для нового кредиту. Побутові обов’язкові витрати тут не перевіряються."
      },
      {
        "q": "Чому сума так сильно залежить від строку?",
        "a": "Бо довший строк знижує платіж і дозволяє взяти більше за того самого доходу. Але переплата при цьому росте значно швидше, ніж сума кредиту."
      },
      {
        "q": "Чи враховано наявні борги?",
        "a": "Ні. Якщо у вас уже є платежі за кредитами, їх треба відняти з допустимого навантаження — інакше сума вийде завищеною."
      },
      {
        "q": "Чи гарантує банк цю суму?",
        "a": "Ні. Крім доходу він дивиться на кредитну історію, стаж, вік, тип зайнятості та вартість застави. Розрахунок дає орієнтир, а не рішення."
      }
    ],
    "disclaimer": "Сума — приведена вартість обраних платежів, не схвалений чи безпечний кредит. Витрати, наявні борги, кредитоспроможність і правила банку не перевіряються; номінальна ставка не замінює повної вартості договору."
  },
  "de": {
    "longDescription": "Löst die übliche Darlehensrechnung rückwärts: jene geht von einem Betrag zu einer Rate, diese von einer tragbaren Rate zu einem Betrag. Die Rate kommt zuerst, aus deinem Einkommen und der Schuldendienstquote, die du hinnimmst, und das Darlehen ist danach der Barwert dieser Annuität. Bei einem Zinssatz von null teilte die Formel durch null, der Grenzfall bekommt deshalb einen eigenen Zweig: ohne Zinsen ist der Betrag schlicht die Summe aller Raten. Das Ergebnis ist eine von einer Formel erzeugte Obergrenze und kein bewilligtes Angebot — eine Bank wägt zusätzlich Schufa, Beschäftigung, Unterhaltspflichten und Sicherheiten und diese Bedingungen fehlen im Modell.",
    "howToUse": [
      "Trage dein monatliches Einkommen ein.",
      "Trage den Anteil davon ein, den du einer Bank zahlen willst.",
      "Trage Zinssatz und Laufzeit ein.",
      "Das Ergebnis ist eine rechnerische Obergrenze und keine Entscheidung einer Bank."
    ],
    "howItWorks": "Einkommen Y und gewählter Anteil d% ergeben Monatsrate P=Y×d/100. Laufzeit n=round(12×Jahre), mindestens ein Monat. Beim konstanten jährlichen Nominalzins r% ist i=r/1200; Betrag A=P×[1−(1+i)^−n]/i, bei null Zins P×n. Die geplante Zahlungssumme ist P×n, die Zinsen sind deren Differenz zu A. Raten fallen am Monatsende an; Gebühren, Versicherung, variable Zinsen und vertragliche Tilgungsrundung fehlen.",
    "example": "Bei einem Einkommen von 3000 €, einer Quote von 40 %, 6 % Zinsen und 20 Jahren beträgt der Höchstbetrag 167 496,93 €. Bei Einkommen 1000, Anteil 30%, null Zins und einem Jahr ergeben Rate 300, Betrag 3600 und Zinsen 0. 0,1 Jahre runden auf einen Monat: Betrag 300, nicht 360.",
    "faq": [
      {
        "q": "Welche Schuldendienstquote soll ich nehmen?",
        "a": "Wähle den Anteil für das Szenario;40–50% sind hier weder allgemeine Kreditgrenze noch sicherer Budgetwert. Bezieht sich der Anteil auf alle Schulden, berücksichtige zunächst bestehende Raten und gib nur den verbleibenden Anteil für den neuen Kredit ein. Lebenshaltungskosten werden nicht geprüft."
      },
      {
        "q": "Bewilligt eine Bank den berechneten Betrag?",
        "a": "Nein. Berechnet wird der Barwert der gewählten Raten bei eingegebenem Zins und Laufzeit. Kreditentscheidung, Einkommensnachweis, vorhandene Verpflichtungen und Sicherheiten liegen außerhalb des Modells; das Ergebnis ist kein Angebot und keine Zusage."
      },
      {
        "q": "Warum wächst der Betrag nicht im Verhältnis zur Laufzeit?",
        "a": "Jede spätere Rate wird stärker abgezinst. Bei gleicher Monatsrate und 6% Nominalzins erhöht der Wechsel von 10 auf 20 Jahre den Barwert um rund 54,96%, nicht um 100%. Das ist ein Zahlenbeispiel, keine Prognose von Bankbedingungen."
      },
      {
        "q": "Wie stark zählt der Zinssatz?",
        "a": "Bei derselben Monatsrate und 20 Jahren erhöht eine Senkung des jährlichen Nominalzinses von 6% auf 4% den Barwert um rund 18,23%. Der Effekt hängt von der Laufzeit ab; Gebühren und andere Vertragsänderungen fehlen im Vergleich."
      },
      {
        "q": "Einkommen vor oder nach Steuern?",
        "a": "Die erläuternde DTI-Definition des CFPB nutzt Einkommen vor Steuern und Abzügen. Für ein privates Nettobudget muss der Anteil dieselbe Nettobasis verwenden und darf nicht direkt mit Brutto-DTI verglichen werden. Bankvorgaben sind gesondert zu prüfen; die Seitensprache legt keinen Rechtsraum fest."
      }
    ],
    "disclaimer": "Der Betrag ist der Barwert gewählter Raten, kein genehmigter oder sicherer Kredit. Lebenshaltung, bestehende Schulden, Bonität und Bankregeln werden nicht geprüft; Nominalzins ersetzt keine gesamten Vertragskosten."
  },
  "es": {
    "longDescription": "Resuelve lo inverso del cálculo habitual de un préstamo: aquel va de un importe a una cuota y este va de una cuota asumible a un importe. La cuota va primero, a partir de tus ingresos y de la carga de deuda que aceptes, y el préstamo es después el valor actual de esa renta. Con un tipo de cero la fórmula dividiría entre cero, así que el límite se toma por una rama aparte: sin intereses, el importe es simplemente la suma de todas las cuotas. El resultado es un techo producido por una fórmula y no una oferta aprobada: un prestamista también valora el historial crediticio, el empleo, las personas a cargo y las garantías, y esas condiciones quedan fuera del modelo.",
    "howToUse": [
      "Introduce tus ingresos mensuales.",
      "Introduce la parte de ellos que estás dispuesto a pagar a un prestamista.",
      "Introduce el tipo de interés y el plazo.",
      "El resultado es un techo de fórmula, no la decisión de un prestamista."
    ],
    "howItWorks": "Ingresos Y y proporción d% dan cuota mensual P=Y×d/100. Plazo n=round(12×años), al menos un mes. Con tipo nominal anual constante r%, i=r/1200; principal A=P×[1−(1+i)^−n]/i, o P×n sin interés. El total previsto es P×n y el interés su diferencia con A. Se supone pago al final de mes; se excluyen comisiones, seguros, tipos variables y redondeo contractual del cuadro.",
    "example": "Con unos ingresos de 1200, una carga del 40 %, un 18 % y 20 años, el importe máximo es 31 101,95. Con ingresos 1000, proporción 30%, tipo cero y un año, cuota 300 da principal 3600 e interés 0. Plazo 0,1 años se redondea a un mes: principal 300, no 360.",
    "faq": [
      {
        "q": "¿Qué carga de deuda debo usar?",
        "a": "Elige la proporción para el caso; el 40–50% no se presenta como límite universal ni presupuesto seguro. Si cubre todas las deudas, descuenta primero las cuotas existentes e introduce solo la parte restante para el préstamo nuevo. No se comprueban gastos básicos del hogar."
      },
      {
        "q": "¿Un prestamista aprobará el importe calculado?",
        "a": "No. Es el valor actual de las cuotas elegidas con el tipo y plazo introducidos. La decisión del prestamista, verificación de ingresos, obligaciones existentes y garantías quedan fuera; no es una oferta ni una garantía de aprobación."
      },
      {
        "q": "¿Por qué el importe no crece en proporción al plazo?",
        "a": "Porque cada cuota posterior se descuenta con más fuerza que la anterior. Al 18 %, doblar el plazo de 10 a 20 años añade bastante menos de la mitad al importe."
      },
      {
        "q": "¿Cuánto importa el tipo?",
        "a": "Con las mismas 240 cuotas mensuales, bajar el tipo nominal anual del 18% al 12% aumenta el valor actual aproximadamente un 40,16%. El efecto depende del plazo; es una comparación de fórmulas sin comisiones ni cambios en las condiciones."
      },
      {
        "q": "¿Los ingresos son antes o después de impuestos?",
        "a": "La definición educativa del DTI del CFPB usa ingresos antes de impuestos y deducciones. En un presupuesto sobre salario neto, aplica el porcentaje a esa misma base y no lo compares directamente con DTI sobre bruto. Comprueba aparte los requisitos del prestamista; el idioma no selecciona una jurisdicción."
      }
    ],
    "disclaimer": "El importe es el valor actual de cuotas elegidas, no un préstamo aprobado o seguro. No comprueba gastos básicos, deudas, solvencia o reglas del prestamista; el tipo nominal no sustituye el coste contractual total."
  }
};
