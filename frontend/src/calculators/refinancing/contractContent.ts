import type { CalculatorDef } from '../../lib/types';
type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Сравнивает остаток действующего долга с новым кредитом на ту же сумму. Оба используют постоянную номинальную ставку и равные месячные платежи, поэтому разница возникает из ставок, сроков и введённых расходов. Меньший платёж не обязательно означает меньшую общую выплату: удлинение срока может увеличить её. Выгода здесь — разница номинальных будущих сумм, а не стоимость денег с учётом времени.",
    "howToUse": [
      "Введите остаток долга, текущую номинальную ставку и целое число оставшихся месяцев.",
      "Введите ставку и целый срок нового кредита на тот же остаток.",
      "Добавьте разовые расходы перехода, оплачиваемые отдельно; пустое поле означает 0.",
      "Сравните оба итога и платежи. Все суммы задаются в одной валюте; досрочный выход и изменяемые ставки требуют отдельного сценария."
    ],
    "howItWorks": "Для каждого кредита i = r/1200 и A = S·i/[1−(1+i)^−n], при r = 0 — S/n. Старый итог = Aстар×nстар, новый = Aнов×nнов + расходы. Выгода = старый итог − новый, разница платежей = Aстар − Aнов. Расходы платятся при переходе, не увеличивают основной долг и не начисляют проценты. Промежуточные платежи не округляются до копеек; показанные суммы округляются. Дисконтирование и полный юридический APR не рассчитываются.",
    "example": "Остаток 2 000 000, 14 % и 120 месяцев против 10 % и 120 месяцев с расходами 30 000: платежи 31 053,29 и 26 430,15, номинальная выгода 524 776,76. Для 800 000 переход с 18 % на 48 месяцев к 16 % на 60 месяцев без расходов снижает платёж, но выгода −39 266,76. При одинаковых условиях выгода равна минус расходы.",
    "disclaimer": "Сравнение двух постоянных аннуитетов на одинаковый остаток долга. Разовые расходы не финансируются; время денег, плавающие ставки, налоги, будущие изменения страховки и досрочный выход не учтены.",
    "faq": [
      {
        "q": "Почему выгода бывает отрицательной?",
        "a": "Потому что меньшая ставка на большем сроке может стоить дороже в сумме, даже если месячный платёж падает. Разница платежа и разница итога показаны отдельно именно поэтому."
      },
      {
        "q": "Вводить исходную сумму или остаток?",
        "a": "Остаток. Рефинансирование заменяет то, что осталось, а не то, с чего вы начинали."
      },
      {
        "q": "Что входит в расходы на сделку?",
        "a": "Только расходы, действительно вызванные переходом и оплаченные отдельно: применимые оценка, регистрация, комиссия, штраф или дополнительные страховки. Они зависят от договора и страны. Повторяющиеся расходы и финансирование комиссий этой моделью не распределяются."
      },
      {
        "q": "Считается ли график аннуитетным?",
        "a": "Да. Обе схемы заданы равными месячными платежами по постоянной номинальной ставке. Это допущение расчёта, а не утверждение о большинстве кредитов. Дифференцированные платежи, переменная ставка и дневная база дают другие суммы."
      },
      {
        "q": "Это то же, что калькулятор досрочного погашения?",
        "a": "Нет. Тот оставляет ваш кредит и добавляет к нему платежи. Этот заменяет кредит другим."
      },
      {
        "q": "Почему номинальная выгода рефинансирования не равна приведённой стоимости?",
        "a": "Суммы разных дат складываются без дисконтирования. Для стоимости денег во времени нужны даты и ставка дисконтирования. Также проверьте планируемый досрочный выход: здесь оба кредита доводятся до конца."
      }
    ]
  },
  "en": {
    "longDescription": "Compare an outstanding loan with a replacement borrowing the same balance. Both use constant nominal rates and equal monthly payments, so differences come from rates, terms and entered switching costs. A smaller payment need not mean a smaller total: a longer term can increase it. The gain is a difference between nominal future sums, not a time-adjusted valuation.",
    "howToUse": [
      "Enter outstanding balance, current nominal rate and whole months remaining.",
      "Enter the replacement rate and whole term for the same principal.",
      "Add separately paid upfront switching costs; blank means zero.",
      "Compare both totals and payments in one currency. Early exit and changing rates need another scenario."
    ],
    "howItWorks": "For each loan, i = r/1200 and A = S·i/[1−(1+i)^−n], or S/n at r = 0. Old total = Aold×nold; new total = Anew×nnew + cost. Gain = old total − new total; payment difference = Aold − Anew. Switching costs are paid upfront, not financed into principal. Intermediate payments are unrounded; displayed amounts use two decimals. Discounting and statutory full-cost APR are not calculated.",
    "example": "Balance 2,000,000, 14% for 120 months versus 10% for 120 months with cost 30,000 gives payments 31,053.29 and 26,430.15 and nominal gain 524,776.76. For 800,000, switching from 18% over 48 months to 16% over 60 months with zero cost lowers the payment but gives gain −39,266.76. Identical loan terms give a gain equal to minus switching cost.",
    "disclaimer": "Two constant-rate annuities on the same outstanding principal. Upfront costs are not financed; time value, floating rates, taxes, later insurance changes and early exit are omitted.",
    "faq": [
      {
        "q": "Why is the gain sometimes negative?",
        "a": "Because a lower rate over a longer term can cost more in total even though the monthly payment falls. The payment difference and the total difference are shown separately for exactly this reason."
      },
      {
        "q": "Should I enter the original amount or the balance?",
        "a": "The balance. Refinancing replaces what is left, not what you started with."
      },
      {
        "q": "What counts as the cost of switching?",
        "a": "Only expenses actually caused by switching and paid separately: applicable valuation, registration, fees, penalties or extra insurance. Contract and jurisdiction determine them. Recurring expenses and financed fees are not scheduled by this model."
      },
      {
        "q": "Does it assume the payment schedule is annuity?",
        "a": "Yes. Both are assumed to have equal monthly payments at constant nominal rates. This is a model choice, not a claim about most loans. Equal-principal schedules, changing rates and day-count rules change totals."
      },
      {
        "q": "Is the same as an early repayment calculator?",
        "a": "No. That one keeps your loan and adds extra payments. This one replaces the loan with a different one."
      },
      {
        "q": "Why is the nominal refinancing gain different from present value?",
        "a": "Cash amounts from different dates are added without discounting. Time-value analysis needs dates and a discount rate. Also consider planned early exit: this comparison carries both loans to completion."
      }
    ]
  },
  "uk": {
    "longDescription": "Порівнює залишок чинного боргу з новим кредитом на ту саму суму. Обидва мають сталі номінальні ставки й рівні місячні платежі, тому різниця походить зі ставок, строків та заданих витрат. Менший платіж не обов’язково означає меншу загальну виплату: довший строк може її збільшити. Вигода є різницею номінальних майбутніх сум без оцінки часу грошей.",
    "howToUse": [
      "Введіть залишок боргу, чинну номінальну ставку й цілу кількість місяців до кінця.",
      "Задайте ставку й цілий строк нового кредиту на той самий залишок.",
      "Додайте разові витрати переходу, сплачені окремо; порожнє поле означає 0.",
      "Порівняйте підсумки й платежі в одній валюті. Достроковий вихід і зміни ставки потребують іншого сценарію."
    ],
    "howItWorks": "Для кожного кредиту i = r/1200 і A = S·i/[1−(1+i)^−n], за r = 0 — S/n. Старий підсумок = Aстар×nстар, новий = Aнов×nнов + витрати. Вигода = старий підсумок − новий; різниця платежів = Aстар − Aнов. Витрати сплачуються при переході, не додаються до боргу й не приносять відсотків. Проміжні платежі не округлюються до копійок; показані суми округлюються. Дисконтування та законодавчий повний APR не визначаються.",
    "example": "Залишок 2 000 000, 14 % і 120 місяців проти 10 % і 120 місяців із витратами 30 000: платежі 31 053,29 і 26 430,15, номінальна вигода 524 776,76. Для 800 000 перехід із 18 % на 48 місяців до 16 % на 60 місяців без витрат знижує платіж, але вигода −39 266,76. Однакові умови дають вигоду мінус витрати.",
    "disclaimer": "Два сталі ануїтети на однаковий залишок боргу. Разові витрати не фінансуються; час грошей, змінні ставки, податки, майбутнє страхування й достроковий вихід не враховані.",
    "faq": [
      {
        "q": "Чому вигода буває від'ємною?",
        "a": "Бо менша ставка на довшому строку може коштувати більше загалом, навіть якщо місячний платіж падає. Різниця платежу і різниця підсумку показані окремо саме тому."
      },
      {
        "q": "Вводити початкову суму чи залишок?",
        "a": "Залишок. Рефінансування замінює те, що лишилось, а не те, з чого ви починали."
      },
      {
        "q": "Що входить у витрати на перехід?",
        "a": "Лише витрати, спричинені переходом і сплачені окремо: застосовні оцінка, реєстрація, комісії, штрафи чи додаткове страхування. Їх визначають договір і країна. Регулярні витрати та фінансовані комісії модель не розподіляє."
      },
      {
        "q": "Чи вважається графік ануїтетним?",
        "a": "Так. Обидві схеми мають рівні місячні платежі за сталої номінальної ставки. Це припущення, а не твердження про більшість кредитів. Диференційовані платежі, змінна ставка та денна база дають інші суми."
      },
      {
        "q": "Це те саме, що калькулятор дострокового погашення?",
        "a": "Ні. Той залишає ваш кредит і додає до нього платежі. Цей замінює кредит іншим."
      },
      {
        "q": "Чому номінальна вигода рефінансування не дорівнює приведеній вартості?",
        "a": "Суми різних дат додаються без дисконтування. Для вартості часу грошей потрібні дати й ставка дисконтування. Окремо перевірте запланований достроковий вихід: тут обидва кредити завершуються за графіком."
      }
    ]
  },
  "de": {
    "longDescription": "Verglichen werden Restschuld und Ersatzdarlehen über denselben Betrag. Beide verwenden konstante Nominalzinsen und gleiche Monatsraten; Unterschiede entstehen aus Zins, Laufzeit und eingegebenen Wechselkosten. Eine kleinere Rate muss keine kleinere Gesamtsumme bedeuten: Verlängerung kann sie erhöhen. Der Vorteil ist die Differenz nominaler künftiger Summen ohne Zeitwertbewertung.",
    "howToUse": [
      "Gib Restschuld, aktuellen Nominalzins und ganze Restmonate ein.",
      "Setze neuen Zins und ganze Laufzeit für dieselbe Restschuld an.",
      "Addiere separat gezahlte einmalige Wechselkosten; leer bedeutet null.",
      "Vergleiche beide Summen und Raten in einer Währung. Vorzeitiger Ausstieg und Zinsänderungen brauchen ein anderes Szenario."
    ],
    "howItWorks": "Für jedes Darlehen gilt i = r/1200 und A = S·i/[1−(1+i)^−n], bei r = 0 dagegen S/n. Alte Summe = Aalt×nalt, neue = Aneu×nneu + Kosten. Vorteil = alte − neue Summe; Ratendifferenz = Aalt − Aneu. Kosten werden beim Wechsel gezahlt und nicht mitfinanziert. Zwischenraten bleiben ungerundet, Anzeigen haben zwei Dezimalstellen. Abzinsung und gesetzlicher Gesamtkosten-APR werden nicht berechnet.",
    "example": "200.000 Geldeinheiten Restschuld, 6 % und 180 Monate gegen 4 % bei gleichem Zeitraum: Raten 1.687,71 und 1.479,38. Nach 2.000 Wechselkosten beträgt der nominale Vorteil 35.500,80. Bei 800.000, Wechsel von 18 % für 48 Monate zu 16 % für 60 Monate ohne Kosten sinkt die Rate, doch der Vorteil ist −39.266,76. Identische Bedingungen ergeben minus Wechselkosten.",
    "disclaimer": "Zwei konstante Annuitäten auf gleiche Restschuld. Einmalige Kosten werden nicht finanziert; Zeitwert, variable Zinsen, Steuern, spätere Versicherungsänderungen und vorzeitiger Ausstieg fehlen.",
    "faq": [
      {
        "q": "Warum ist der Gewinn manchmal negativ?",
        "a": "Weil ein niedrigerer Satz über eine längere Laufzeit insgesamt mehr kosten kann, obwohl die monatliche Rate sinkt. Genau deshalb stehen der Unterschied der Rate und der Unterschied der Summe getrennt."
      },
      {
        "q": "Trage ich die ursprüngliche Summe oder die Restschuld ein?",
        "a": "Die Restschuld. Eine Umschuldung ersetzt das, was übrig ist, und nicht das, womit du angefangen hast."
      },
      {
        "q": "Was zählt zu den Kosten des Wechsels?",
        "a": "Nur durch den Wechsel verursachte, separat gezahlte Kosten: gegebenenfalls Bewertung, Registrierung, Gebühren, Entschädigungen oder zusätzliche Versicherung. Vertrag und Land bestimmen sie. Laufende Kosten und mitfinanzierte Gebühren werden hier nicht verteilt."
      },
      {
        "q": "Wird von einem Annuitätenplan ausgegangen?",
        "a": "Ja. Beide Modelle setzen gleiche Monatsraten bei konstantem Nominalzins voraus. Das ist keine Aussage über die Mehrheit aller Darlehen. Gleichbleibende Kapitaltilgung, variable Zinsen und Tageszählung verändern die Summen."
      },
      {
        "q": "Ist das dasselbe wie eine Sondertilgung?",
        "a": "Nein. Dort behältst du dein Darlehen und zahlst zusätzlich ein. Hier wird das Darlehen durch ein anderes ersetzt."
      },
      {
        "q": "Warum entspricht der nominale Umschuldungsvorteil keinem Barwert?",
        "a": "Zahlungen verschiedener Termine werden ohne Abzinsung addiert. Ein Zeitwertvergleich benötigt Termine und Diskontzins. Geplanter vorzeitiger Ausstieg ist separat zu prüfen; hier laufen beide Darlehen bis zum Ende."
      }
    ]
  },
  "es": {
    "longDescription": "Compara la deuda pendiente con un préstamo sustituto por el mismo capital. Ambos usan tipos nominales constantes y cuotas mensuales iguales; las diferencias vienen de tipos, plazos y gastos introducidos. Una cuota menor puede costar más en total si se amplía el plazo. La ganancia es una diferencia de sumas futuras nominales, sin valorar el tiempo del dinero.",
    "howToUse": [
      "Introduce saldo pendiente, nominal actual y meses restantes enteros.",
      "Indica nominal y plazo entero del préstamo nuevo por el mismo saldo.",
      "Añade gastos iniciales de cambio pagados aparte; vacío significa cero.",
      "Compara totales y cuotas en una moneda. Salida anticipada y tipos variables requieren otro escenario."
    ],
    "howItWorks": "Para cada préstamo, i = r/1200 y A = S·i/[1−(1+i)^−n], o S/n si r = 0. Total antiguo = Aant×nant; nuevo = Anue×nnue + gastos. Ganancia = total antiguo − nuevo; diferencia de cuota = Aant − Anue. Los gastos se pagan al cambiar y no se financian. No se redondean cuotas intermedias; los resultados se muestran con dos decimales. No se calcula descuento financiero ni TAE legal completa.",
    "example": "200.000 al 14 % por 120 meses frente al 10 % por 120 meses, con 3.000 de gastos, dan ganancia nominal 52.477,68. Para 800.000, pasar del 18 % en 48 meses al 16 % en 60 meses sin gastos reduce la cuota, pero la ganancia es −39.266,76. En condiciones idénticas la ganancia equivale a menos los gastos.",
    "disclaimer": "Dos préstamos de cuota fija sobre el mismo capital pendiente. Gastos iniciales no financiados; excluye valor temporal, tipos variables, impuestos, cambios de seguro y salida anticipada.",
    "faq": [
      {
        "q": "¿Por qué la ganancia sale a veces negativa?",
        "a": "Porque un tipo menor con un plazo más largo puede costar más en total aunque la cuota mensual baje. La diferencia de cuota y la de total se muestran por separado justo por eso."
      },
      {
        "q": "¿Introduzco el importe original o la deuda pendiente?",
        "a": "La deuda pendiente. Refinanciar sustituye lo que queda, no lo que pediste al empezar."
      },
      {
        "q": "¿Qué cuenta como gastos del cambio?",
        "a": "Solo gastos causados por el cambio y pagados aparte: según proceda, tasación, registro, comisiones, penalizaciones o seguro adicional. Dependen del contrato y país. El modelo no distribuye gastos recurrentes ni comisiones financiadas."
      },
      {
        "q": "¿Supone un cuadro de cuota constante?",
        "a": "Sí. Ambos modelos suponen cuotas mensuales iguales y nominal constante. Es una hipótesis, no una afirmación sobre la mayoría de los préstamos. Capital constante, tipos variables y cómputo diario cambian los totales."
      },
      {
        "q": "¿Es lo mismo que una calculadora de amortización anticipada?",
        "a": "No. Aquella mantiene tu préstamo y le añade amortizaciones. Esta sustituye el préstamo por otro distinto."
      },
      {
        "q": "¿Por qué la ganancia nominal de refinanciar no es un valor presente?",
        "a": "Se suman pagos de distintas fechas sin descontar. Valorar el tiempo requiere fechas y un tipo de descuento. Revisa también una salida anticipada prevista: aquí ambos préstamos llegan al final."
      }
    ]
  }
};
