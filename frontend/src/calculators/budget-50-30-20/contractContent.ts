import type { CalculatorDef } from '../../lib/types';
type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Правило 50/30/20 делит месячный доход после налогов на 50 % для нужд, 30 % для желаний и 20 % для сбережений. Тридцать процентов — именно 0,30 дохода, а не треть. Три суммы являются плановыми ориентирами: единственное поле дохода не позволяет узнать фактические расходы или автоматически выявить превышение категории. Сопоставление с вашим бюджетом выполняется отдельно, а пропорция не является обязательной нормой.",
    "howToUse": [
      "Введите месячный доход после налогов.",
      "Сравните три суммы с тем, сколько уходит на самом деле.",
      "Начните с категории, которая расходится сильнее всего."
    ],
    "howItWorks": "Нужды = 0,50×I, желания = 0,30×I, сбережения = 0,20×I, где I — положительный месячный доход после налогов. Неокруглённые доли в сумме равны I. Денежные строки обычно округляются до целой единицы, поэтому сумма отображённых частей может отличаться от дохода; суммы меньше единицы сохраняют дробную часть. Модель не собирает ваши расходы, не распределяет платежи автоматически и не рассчитывает налог из начисленного дохода.",
    "example": "Доход 100 000 даёт 50 000 на нужды, 30 000 на желания и 20 000 на сбережения. При доходе 1 части равны 0,50; 0,30; 0,20 денежной единицы, без округления первой части до 1.",
    "faq": [
      {
        "q": "Что считать нуждами?",
        "a": "Жильё, еду, транспорт, коммунальные платежи, лекарства и обязательные платежи по долгам — всё, что нельзя пропустить в следующем месяце."
      },
      {
        "q": "Пропорция обязательна?",
        "a": "Нет, это ориентир. В дорогих городах нужды часто превышают половину, и полезно именно увидеть, насколько."
      },
      {
        "q": "Доход до или после налогов?",
        "a": "После налогов и обязательных удержаний, иначе все три доли завышены."
      },
      {
        "q": "Что делать, если на сбережения не остаётся?",
        "a": "Начните с того, что остаётся, и повышайте долю постепенно. Небольшая регулярная сумма работает лучше амбициозной, от которой отказываются."
      },
      {
        "q": "Почему показанные части бюджета иногда не складываются точно?",
        "a": "Каждая часть округляется отдельно для показа. При доходе 103 неокруглённые суммы равны 51,5; 30,9; 20,6, а целые строки показывают 52, 31 и 21. При доходе 1 доли составляют 0,50; 0,30; 0,20. Для распределения до копейки используйте неокруглённые значения."
      }
    ],
    "disclaimer": "Учебное распределение одного дохода по фиксированным долям. Не является проверкой реального бюджета, нормативом достаточных сбережений, налоговым расчётом или планом погашения долга. Классификация нужд, желаний и накоплений зависит от вашей ситуации."
  },
  "en": {
    "longDescription": "The 50/30/20 rule divides monthly after-tax income into 50% for needs, 30% for wants and 20% for savings. Thirty percent is exactly 0.30 of income, rather than one third. The three amounts are planning benchmarks: the income-only form cannot identify actual spending or an overspent category. Compare them with your budget separately; the split is not a mandatory standard.",
    "howToUse": [
      "Enter monthly income after tax.",
      "Compare the three amounts with what you actually spend.",
      "Adjust the categories that differ most."
    ],
    "howItWorks": "Needs = 0.50×I, wants = 0.30×I and savings = 0.20×I, for positive monthly after-tax income I. The unrounded shares sum to I. Money rows normally round to whole units, so displayed parts may not sum exactly to income; amounts below one unit retain fractions. The model does not collect spending, classify payments automatically or calculate tax from gross income.",
    "example": "Income of 100,000 gives 50,000 for needs, 30,000 for wants and 20,000 for savings. Income of 1 gives 0.50, 0.30 and 0.20 monetary units, without rounding the first share up to 1.",
    "faq": [
      {
        "q": "What counts as a need?",
        "a": "Housing, food, transport, utilities, medicine and minimum debt payments — anything you cannot skip next month."
      },
      {
        "q": "Is the split strict?",
        "a": "No. It is a reference point. In expensive cities needs often exceed half, and the useful step is to see by how much."
      },
      {
        "q": "Before or after tax?",
        "a": "After tax, and after mandatory deductions — otherwise every share is overstated."
      },
      {
        "q": "What if savings do not fit?",
        "a": "Start from what is left and raise it gradually. A small regular share beats an ambitious one you abandon."
      },
      {
        "q": "Why might displayed budget parts not add up exactly?",
        "a": "Each part is rounded separately for display. Income of 103 gives unrounded 51.5, 30.9 and 20.6, with whole-unit rows showing 52, 31 and 21. Income of 1 gives 0.50, 0.30 and 0.20. For cent-exact allocation use the unrounded amounts."
      }
    ],
    "disclaimer": "A teaching allocation of one income using fixed shares. It is not an actual budget check, savings-adequacy standard, tax calculation or debt-repayment plan. Classifying needs, wants and savings depends on the situation."
  },
  "uk": {
    "longDescription": "Правило 50/30/20 ділить місячний дохід після податків на 50 % для потреб, 30 % для бажань і 20 % для заощаджень. Тридцять відсотків — це саме 0,30 доходу, а не третина. Три суми є плановими орієнтирами: одне поле доходу не визначає фактичні витрати або перевищення категорії. Зіставлення зі своїм бюджетом виконується окремо, а пропорція не є обов’язковою нормою.",
    "howToUse": [
      "Введіть дохід після податків.",
      "Прочитайте три суми.",
      "Спробуйте віднести реальні витрати до груп — саме це й дає користь."
    ],
    "howItWorks": "Потреби = 0,50×I, бажання = 0,30×I, заощадження = 0,20×I, де I — додатний місячний дохід після податків. Неокруглені частки разом дорівнюють I. Грошові рядки зазвичай округлюються до цілої одиниці, тому показані частини можуть не скластися точно в дохід; менші за одиницю суми зберігають дробову частину. Модель не збирає витрат, не класифікує платежів і не обчислює податок із нарахованого доходу.",
    "example": "Дохід 100 000 ₴ дає 50 000 ₴ на потреби, 30 000 ₴ на бажання і 20 000 ₴ на заощадження. За доходу 1 частки дорівнюють 0,50; 0,30; 0,20 грошової одиниці без округлення першої до 1.",
    "faq": [
      {
        "q": "Що вважати потребою, а що бажанням?",
        "a": "Потреба — те, без чого не обійтися: житло, їжа, транспорт до роботи, ліки, мінімальні платежі за боргами. Бажання — усе, від чого можна відмовитися без шкоди: кав’ярні, підписки, подорожі, нова техніка замість справної."
      },
      {
        "q": "Що робити, якщо потреби вже понад 50 %?",
        "a": "Це звичайна ситуація у великих містах. Тоді пропорція стає орієнтиром, а не нормою: скорочувати доводиться бажання, а в довшій перспективі — працювати з великими статтями на кшталт житла й транспорту."
      },
      {
        "q": "Від якого доходу рахувати пропорцію?",
        "a": "Після. Правило застосовується до грошей, якими ви розпоряджаєтеся, а не до нарахованої суми."
      },
      {
        "q": "Чи можна змінювати пропорції?",
        "a": "Так, і це нормально. 60/20/20 або 50/20/30 — робочі варіанти. Головне лишається тим самим: заощадження мають бути окремою статтею, а не тим, що випадково лишилося наприкінці місяця."
      },
      {
        "q": "Чому показані частини бюджету можуть не скластися точно?",
        "a": "Кожну частину округлено окремо для показу. Дохід 103 дає неокруглені 51,5; 30,9; 20,6, а цілі рядки — 52, 31 і 21. За доходу 1 частки становлять 0,50; 0,30; 0,20. Для розподілу до копійки потрібні неокруглені значення."
      }
    ],
    "disclaimer": "Навчальний розподіл одного доходу за сталими частками. Це не перевірка реального бюджету, норматив достатніх заощаджень, податковий розрахунок або план погашення боргу. Класифікація потреб, бажань і накопичень залежить від ситуації."
  },
  "de": {
    "longDescription": "Die 50-30-20-Regel teilt das monatliche Nettoeinkommen in 50 % für Bedarf, 30 % für Wünsche und 20 % fürs Sparen. Dreißig Prozent sind genau 0,30 des Einkommens, nicht ein Drittel. Die Beträge sind Planungsrichtwerte: aus dem einzigen Einkommensfeld ergeben sich weder tatsächliche Ausgaben noch überschrittene Kategorien. Vergleiche die Beträge gesondert mit deinem Budget; die Aufteilung ist keine Pflichtnorm.",
    "howToUse": [
      "Trage das monatliche Einkommen nach Steuern ein.",
      "Vergleiche die drei Beträge mit dem, was du tatsächlich ausgibst.",
      "Passe die Kategorie an, die am stärksten abweicht."
    ],
    "howItWorks": "Bedarf = 0,50×I, Wünsche = 0,30×I und Sparen = 0,20×I, mit positivem monatlichem Nettoeinkommen I. Ungerundet ergeben die Anteile zusammen I. Geldzeilen werden gewöhnlich auf ganze Einheiten gerundet, daher können angezeigte Teile vom Einkommen abweichen; Beträge unter einer Einheit behalten Bruchteile. Das Modell sammelt keine Ausgaben, ordnet Zahlungen nicht automatisch zu und berechnet keine Steuern aus Bruttoeinkommen.",
    "example": "Ein Einkommen von 2500 € ergibt 1250 € für den Bedarf, 750 € für Wünsche und 500 € fürs Sparen. Einkommen 1 ergibt 0,50; 0,30; 0,20 Geldeinheiten, ohne den ersten Anteil auf 1 aufzurunden.",
    "faq": [
      {
        "q": "Was zählt als Bedarf?",
        "a": "Wohnen, Essen, Verkehr, Nebenkosten, Arzneimittel und Mindestraten für Kredite — alles, was du im nächsten Monat nicht auslassen kannst."
      },
      {
        "q": "Ist die Aufteilung streng?",
        "a": "Nein. Sie ist ein Anhaltspunkt. In teuren Städten übersteigt der Bedarf oft die Hälfte, und der nützliche Schritt ist zu sehen, um wie viel."
      },
      {
        "q": "Vor oder nach Steuern?",
        "a": "Nach Steuern und nach Pflichtabzügen — sonst ist jeder Anteil zu hoch angesetzt."
      },
      {
        "q": "Was, wenn das Sparen nicht hineinpasst?",
        "a": "Beginne mit dem, was übrig bleibt, und hebe es nach und nach. Ein kleiner regelmäßiger Anteil schlägt einen ehrgeizigen, den du aufgibst."
      },
      {
        "q": "Warum ergeben angezeigte Budgetteile nicht immer exakt die Summe?",
        "a": "Jeder Teil wird gesondert gerundet. Einkommen 103 ergibt ungerundet 51,5; 30,9; 20,6 und ganzzahlig angezeigt 52, 31 und 21. Bei Einkommen 1 lauten die Teile 0,50; 0,30; 0,20. Für centgenaue Verteilung nutze die ungerundeten Beträge."
      }
    ],
    "disclaimer": "Lehrhafte Aufteilung eines Einkommens nach festen Anteilen. Keine Prüfung des tatsächlichen Budgets, Sparangemessenheitsnorm, Steuerrechnung oder Tilgungsplanung. Die Zuordnung von Bedarf, Wünschen und Sparen hängt von der Situation ab."
  },
  "es": {
    "longDescription": "La regla 50/30/20 divide los ingresos mensuales netos en 50 % para necesidades, 30 % para deseos y 20 % para ahorro. El treinta por ciento es exactamente 0,30 de los ingresos, no un tercio. Las tres cifras son referencias de planificación: un único campo de ingresos no identifica gastos reales ni categorías excedidas. Compáralas aparte con tu presupuesto; el reparto no es una norma obligatoria.",
    "howToUse": [
      "Introduce los ingresos mensuales netos.",
      "Compara los tres importes con lo que gastas de verdad.",
      "Ajusta las categorías que más se desvíen."
    ],
    "howItWorks": "Necesidades = 0,50×I, deseos = 0,30×I y ahorro = 0,20×I, con ingresos mensuales netos positivos I. Las partes sin redondear suman I. Las filas monetarias suelen redondearse a unidades enteras, así que las partes mostradas pueden diferir del ingreso; importes menores que una unidad conservan fracciones. No se recogen gastos, no se clasifican pagos automáticamente ni se calculan impuestos desde ingresos brutos.",
    "example": "Unos ingresos de 1000 dan 500 para necesidades, 300 para deseos y 200 para ahorro. Ingresos de 1 dan 0,50; 0,30 y 0,20 unidades monetarias, sin redondear la primera parte a 1.",
    "faq": [
      {
        "q": "¿Qué cuenta como necesidad?",
        "a": "La vivienda, la comida, el transporte, los suministros, la medicina y los pagos mínimos de deudas: todo lo que no puedes saltarte el mes que viene."
      },
      {
        "q": "¿El reparto es estricto?",
        "a": "No. Es un punto de referencia. En ciudades caras las necesidades superan a menudo la mitad, y el paso útil es ver por cuánto."
      },
      {
        "q": "¿Antes o después de impuestos?",
        "a": "Después de impuestos y de las retenciones obligatorias; de lo contrario todas las partes salen exageradas."
      },
      {
        "q": "¿Y si el ahorro no cabe?",
        "a": "Empieza por lo que quede y súbelo poco a poco. Una parte pequeña y constante gana a una ambiciosa que abandonas."
      },
      {
        "q": "¿Por qué las partes mostradas del presupuesto no siempre suman exactamente?",
        "a": "Cada parte se redondea por separado. Ingresos de 103 dan 51,5; 30,9 y 20,6 sin redondear, mostrados como 52, 31 y 21 en unidades enteras. Ingresos de 1 dan 0,50; 0,30 y 0,20. Para repartir al céntimo usa los importes sin redondear."
      }
    ],
    "disclaimer": "Reparto educativo de un ingreso con proporciones fijas. No es una comprobación del presupuesto real, un estándar de ahorro suficiente, un cálculo fiscal ni un plan de amortización. Clasificar necesidades, deseos y ahorro depende de la situación."
  }
};
