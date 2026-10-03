import type { CalculatorDef } from '../../lib/types';
type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Симуляция нескольких долгов показывает срок, проценты и порядок закрытия при фиксированных минимальных платежах и выбранной надбавке. Снежный ком направляет надбавку на меньший текущий остаток, лавина — на большую ставку. Минимум уже закрытого долга освобождается со следующего месяца. Сравнение требует двух запусков на одних входах: эта модель переноса денег не гарантирует, что лавина всегда даст меньшую переплату или что снежный ком первым закроет долг раньше.",
    "howToUse": [
      "По одному долгу в строке: название, сумма, годовая ставка и минимальный платёж.",
      "Название может быть из нескольких слов — числа берутся с конца строки.",
      "Свободные деньги — это то, что вы готовы платить сверх минимальных платежей.",
      "Сравните обе стратегии на одних и тех же долгах: разница видна в переплате."
    ],
    "howItWorks": "Каждый месяц сначала начисляются проценты по годовой ставке / 1200 и вносятся минимальные платежи. Надбавка плюс минимальные платежи долгов, закрытых ДО этого месяца, идут одному оставшемуся долгу: по меньшему текущему остатку для снежного кома или по большей ставке для лавины. Неиспользованный остаток платежа при закрытии не переносится другому долгу в том же месяце; высвободившийся минимум добавляется со следующего. Это конкретная помесячная модель без округления внутренних сумм, максимум 20 долгов и 1200 месяцев. Достижение предела не означает, что погашение невозможно.",
    "example": "Долг 40 000 под 12% с минимумом 2000 и долг 200 000 под 26% с минимумом 6000, при надбавке 4000 ₽ в месяц, гасятся лавиной за 26 месяцев, снежным комом — за 27 в сохранённой модели переноса платежей.",
    "faq": [
      {
        "q": "Какая стратегия выгоднее?",
        "a": "Сравните срок и переплату после отдельного запуска каждого режима. Лавина выбирает большую ставку, снежный ком — меньший текущий остаток. Здесь перенос платежей начинается со следующего месяца и неиспользованный остаток не переносится в том же месяце, поэтому универсальное сравнение не заявляется."
      },
      {
        "q": "Почему считается по месяцам, а не формулой?",
        "a": "Ставки и минимумы меняют остатки каждый месяц, а закрытие долга меняет распределение платежей. Пошаговая симуляция сохраняет этот порядок. Отдельные простые случаи допускают закрытую формулу; утверждать, что формула невозможна вообще, неверно."
      },
      {
        "q": "Что если минимального платежа не хватает даже на проценты?",
        "a": "Один недостаточный минимум не доказывает невозможности: после закрытия другого долга может добавиться его платёж. Например, 10 без процентов с минимумом 10 и 100 под 120% с минимумом 5, без надбавки, закрываются за 14 месяцев в этой модели. Предел 1200 месяцев — лишь граница симуляции."
      },
      {
        "q": "Учитываются ли новые траты по карте?",
        "a": "Нет. Набор долгов фиксирован, дополнительных покупок и комиссий нет. При новых обязательствах пересчитайте входы; прежний срок уже не описывает изменившийся бюджет."
      }
    ],
    "disclaimer": "Фиксированные ставки и минимумы, без новых долгов и комиссий. Таблица относится к одной выбранной стратегии; для сравнения нужно пересчитать обе. Сохранённый порядок переноса платежей может отличаться от договора и модели, которая в тот же месяц направляет весь неиспользованный бюджет следующему долгу."
  },
  "en": {
    "longDescription": "Simulates several debts to show duration, interest and closure order for fixed minimum payments and an extra amount. Snowball directs the extra to the smallest current balance; avalanche uses the highest rate. A closed debt frees its minimum from the next month. Compare two runs with identical inputs: this payment-transfer model does not guarantee that avalanche always costs less or snowball always produces an earlier first closure.",
    "howToUse": [
      "One debt per line: name, balance, annual rate and minimum payment.",
      "The name may be several words — the numbers are read from the end of the line.",
      "Spare money is what you are willing to pay above the minimums.",
      "Compare both strategies on the same debts: the difference shows up in the interest."
    ],
    "howItWorks": "Each month first accrues interest at annual percentage / 1200 and makes minimum payments. The extra amount plus minimums from debts closed BEFORE that month goes to one remaining debt: the smallest current balance for snowball or highest rate for avalanche. Unused payment money at closure is not transferred to another debt in the same month; the freed minimum joins from the next month. This particular monthly model does not round internal amounts and covers at most 20 debts and 1200 months. Reaching the horizon does not establish that repayment is impossible.",
    "example": "Debt 40,000 at 12% with minimum 2,000 and debt 200,000 at 26% with minimum 6,000, plus an extra 4,000 a month, clear in 26 months by avalanche and 27 by snowball under the specified payment-transfer timing.",
    "faq": [
      {
        "q": "Which strategy costs less?",
        "a": "Compare duration and interest after running each mode separately. Avalanche chooses the highest rate; snowball chooses the smallest current balance. Transfers begin next month and unused money is not redirected within the same month, so no universal ranking is asserted."
      },
      {
        "q": "Why simulate month by month instead of using a formula?",
        "a": "Interest and minimums change balances each month, and debt closure changes allocation. Simulation preserves that order. Some simple cases admit a closed formula; claiming that a formula is never possible would be incorrect."
      },
      {
        "q": "What if the minimum payment does not cover the interest?",
        "a": "One insufficient minimum does not prove impossibility: another debt can close and release its payment. For example, 10 at 0% with minimum 10 and 100 at 120% with minimum 5, with no extra, clear in 14 months in this model. The 1200-month limit is only a simulation boundary."
      },
      {
        "q": "Are new card purchases included?",
        "a": "No. The debt list is fixed, with no new purchases or fees. Recalculate the inputs for new obligations; the previous duration no longer describes the changed budget."
      }
    ],
    "disclaimer": "Rates and minimums are fixed; there are no new debts or fees. The table shows the selected strategy; calculate both separately to compare them. Its payment-transfer timing can differ from contracts and from models that direct all unused budget to the next debt in the same month."
  },
  "uk": {
    "longDescription": "Симуляція кількох боргів показує строк, проценти та порядок закриття за сталих мінімальних платежів і надбавки. Снігова куля віддає надбавку меншому поточному залишку, лавина — вищій ставці. Мінімум закритого боргу вивільняється з наступного місяця. Порівнюйте два запуски з однаковими входами: ця модель перенесення не гарантує меншу переплату лавини чи раніше перше закриття сніговою кулею.",
    "howToUse": [
      "Введіть суми боргів і ставки по кожному.",
      "Введіть мінімальні платежі.",
      "Введіть суму, вільну понад мінімальні платежі."
    ],
    "howItWorks": "Щомісяця спершу нараховуються проценти за річним відсотком / 1200 та вносяться мінімальні платежі. Надбавка й мінімальні платежі боргів, закритих ДО цього місяця, йдуть одному залишеному боргу: найменшому за поточним залишком для снігової кулі чи з найвищою ставкою для лавини. Невикористана сума при закритті не переходить іншому боргу в цьому самому місяці; вивільнений мінімум додається з наступного. Це конкретна помісячна модель без округлення внутрішніх сум, до 20 боргів та 1200 місяців. Досягнення межі не доводить неможливості погашення.",
    "example": "Борг 40 000 ₴ під 12% з мінімумом 2000 та борг 200 000 ₴ під 26% з мінімумом 6000, за надбавки 4000 ₴ на місяць, гасяться лавиною за 26 місяців, сніговою кулею — за 27 у визначеній моделі перенесення платежів.",
    "faq": [
      {
        "q": "Який метод обрати?",
        "a": "Порівняйте строк та проценти після окремого запуску кожного режиму. Лавина обирає вищу ставку, снігова куля — менший поточний залишок. Перенесення починається наступного місяця, а невикористані гроші не переходять у цьому самому, тож універсальної переваги не заявляємо."
      },
      {
        "q": "Чому після закриття боргу все прискорюється?",
        "a": "Мінімум закритого боргу додається до надбавки з наступного місяця. Вільна сума спрямовується одному залишеному боргу, а невикористаний надлишок цього місяця не переноситься ще одному. Саме цей порядок застосовується в обох режимах."
      },
      {
        "q": "Чи враховано нові борги?",
        "a": "Ні. Набір боргів фіксований, нових покупок і комісій немає. За нових зобов’язань перерахуйте входи: попередній строк уже не описує змінений бюджет."
      },
      {
        "q": "Що робити, якщо вільних грошей немає?",
        "a": "Надбавка 0 дозволена. Мінімум одного боргу може спершу не покривати його проценти, а після закриття іншого до нього може перейти звільнений платіж. Якщо всі борги не спадають і додаткових грошей немає, модель зупиняється; досягнення 1200 місяців саме по собі не доводить неможливості."
      }
    ],
    "disclaimer": "Ставки та мінімуми фіксовані, нових боргів і комісій немає. Таблиця стосується обраної стратегії; для порівняння перерахуйте обидві. Порядок перенесення платежів може відрізнятися від договору та моделі, яка в цьому самому місяці віддає весь невикористаний бюджет наступному боргу."
  },
  "de": {
    "longDescription": "Simuliert mehrere Schulden und zeigt Dauer, Zinsen und Tilgungsreihenfolge bei festen Mindestraten und Zusatzgeld. Der Schneeball lenkt Zusatzgeld zum kleinsten aktuellen Saldo, die Lawine zum höchsten Satz. Die Mindestrate einer getilgten Schuld wird im nächsten Monat frei. Vergleiche zwei Läufe mit gleichen Eingaben: dieses Zahlungsmodell garantiert weder stets niedrigere Zinsen der Lawine noch eine frühere erste Tilgung beim Schneeball.",
    "howToUse": [
      "Eine Schuld je Zeile: Name, Saldo, Jahreszins und Mindestrate.",
      "Der Name darf mehrere Wörter haben — die Zahlen werden vom Zeilenende gelesen.",
      "Das freie Geld ist das, was du über die Mindestraten hinaus zahlen willst.",
      "Vergleiche beide Strategien an denselben Schulden: der Unterschied zeigt sich in den Zinsen."
    ],
    "howItWorks": "Jeden Monat fallen zuerst Zinsen mit Jahresprozentsatz / 1200 an, dann werden Mindestraten gezahlt. Zusatzgeld plus Mindestraten von VOR diesem Monat getilgten Schulden gehen an eine verbleibende Schuld: kleinster aktueller Saldo beim Schneeball oder höchster Satz bei der Lawine. Beim Abschluss ungenutztes Zahlungsgeld geht nicht im selben Monat an eine weitere Schuld; die frei gewordene Mindestrate kommt im nächsten Monat hinzu. Dieses konkrete Monatsmodell rundet intern nicht und umfasst höchstens 20 Schulden und 1200 Monate. Das Erreichen der Grenze beweist keine Unmöglichkeit der Tilgung.",
    "example": "1200 € zu 12% mit Mindestrate 60 € und 6000 € zu 26% mit Mindestrate 180 €, dazu 120 € monatlich extra, sind nach dem beschriebenen Weitergabemodell mit Lawine in 26 und mit Schneeball in 27 Monaten getilgt.",
    "faq": [
      {
        "q": "Welche Strategie kostet weniger?",
        "a": "Vergleiche Dauer und Zinsen nach getrennten Läufen. Die Lawine wählt den höchsten Satz, der Schneeball den kleinsten aktuellen Saldo. Weitergaben beginnen im nächsten Monat und ungenutztes Geld wird nicht im selben Monat umgeleitet; eine allgemeine Rangfolge wird daher nicht behauptet."
      },
      {
        "q": "Warum Monat für Monat simulieren statt eine Formel zu nehmen?",
        "a": "Zinsen und Mindestraten verändern die Salden monatlich, Tilgungen verändern die Verteilung. Die Simulation erhält diese Reihenfolge. Einfache Sonderfälle haben geschlossene Formeln; eine allgemeine Unmöglichkeit von Formeln wäre falsch."
      },
      {
        "q": "Was, wenn die Mindestrate die Zinsen nicht deckt?",
        "a": "Eine unzureichende Mindestrate beweist keine Unmöglichkeit: eine andere Schuld kann enden und ihre Rate freigeben. 10 zu 0% mit Minimum 10 und 100 zu 120% mit Minimum 5, ohne Zusatzgeld, enden hier nach 14 Monaten. Die Grenze von 1200 Monaten ist nur der Simulationshorizont."
      },
      {
        "q": "Sind neue Kartenkäufe enthalten?",
        "a": "Nein. Die Schuldenliste ist fest, ohne Neukäufe oder Gebühren. Berechne bei neuen Verpflichtungen die Eingaben neu; die bisherige Dauer beschreibt das veränderte Budget nicht mehr."
      }
    ],
    "disclaimer": "Feste Zinssätze und Mindestraten, ohne neue Schulden oder Gebühren. Die Tabelle zeigt eine gewählte Strategie; zum Vergleich beide getrennt berechnen. Die Weitergabezeitpunkte können vom Vertrag und von Modellen abweichen, die ungenutztes Budget noch im selben Monat an die nächste Schuld geben."
  },
  "es": {
    "longDescription": "Simula varias deudas para mostrar plazo, intereses y orden de cierre con cuotas mínimas y un extra fijos. La bola de nieve dirige el extra al menor saldo actual; la avalancha al mayor tipo. La cuota de una deuda cerrada se libera desde el mes siguiente. Compara dos ejecuciones con las mismas entradas: este modelo de traslado no garantiza menos intereses con avalancha ni un primer cierre anterior con bola de nieve.",
    "howToUse": [
      "Una deuda por línea: nombre, saldo, tipo anual y cuota mínima.",
      "El nombre puede llevar varias palabras: los números se leen desde el final de la línea.",
      "El dinero disponible es lo que estás dispuesto a pagar por encima de los mínimos.",
      "Compara las dos estrategias con las mismas deudas: la diferencia aparece en los intereses."
    ],
    "howItWorks": "Cada mes se devengan primero intereses con porcentaje anual / 1200 y se pagan las cuotas mínimas. El extra y las cuotas de deudas cerradas ANTES de ese mes van a una deuda restante: el menor saldo actual en bola de nieve o el mayor tipo en avalancha. El dinero de pago no utilizado al cerrar una deuda no pasa a otra en ese mismo mes; su cuota liberada se añade desde el siguiente. Este modelo mensual concreto no redondea importes internos y admite hasta 20 deudas y 1200 meses. Alcanzar el límite no demuestra que sea imposible liquidarlas.",
    "example": "Una deuda de 4000 al 12% con mínimo 200 y otra de 20 000 al 26% con mínimo 600, más 400 extra al mes, se liquidan por el traslado descrito en 26 meses con avalancha y 27 con bola de nieve.",
    "faq": [
      {
        "q": "¿Qué estrategia cuesta menos?",
        "a": "Compara plazo e intereses ejecutando cada modo por separado. Avalancha elige el mayor tipo y bola de nieve el menor saldo actual. Los traslados comienzan el mes siguiente y no se redistribuye el sobrante en el mismo mes, por lo que no se afirma un orden universal de ventajas."
      },
      {
        "q": "¿Por qué simular mes a mes en vez de usar una fórmula?",
        "a": "Intereses y mínimos cambian los saldos cada mes, y cada cierre cambia el reparto de pagos. La simulación conserva ese orden. Algunos casos sencillos admiten fórmulas cerradas; no sería correcto afirmar que nunca son posibles."
      },
      {
        "q": "¿Y si la cuota mínima no cubre los intereses?",
        "a": "Una cuota mínima insuficiente no prueba imposibilidad: otra deuda puede cerrarse y liberar su cuota. Diez al 0% con mínimo diez y cien al 120% con mínimo cinco, sin extra, se liquidan en catorce meses en este modelo. Los 1200 meses son solo el límite de simulación."
      },
      {
        "q": "¿Se incluyen nuevas compras con la tarjeta?",
        "a": "No. La lista de deudas es fija, sin compras nuevas ni comisiones. Vuelve a calcular las entradas ante nuevas obligaciones; el plazo anterior ya no describe el presupuesto cambiado."
      }
    ],
    "disclaimer": "Tipos y mínimos fijos, sin deudas nuevas ni comisiones. La tabla muestra una estrategia elegida; calcula ambas por separado para compararlas. El momento del traslado puede diferir del contrato y de modelos que pasan todo presupuesto no usado a la siguiente deuda en el mismo mes."
  }
};
