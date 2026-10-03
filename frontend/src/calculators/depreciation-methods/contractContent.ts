import type { CalculatorDef } from '../../lib/types';
type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Считает амортизацию линейным методом, двойным убывающим остатком и способом суммы чисел лет. Линейный делит амортизируемую базу поровну. Двойной убывающий берёт удвоенную линейную норму от остаточной стоимости и в первые годы списывает больше, но никогда не уводит книгу ниже ликвидационной стоимости — этот ограничитель и отличает метод от простой геометрической прогрессии. Сумма чисел лет распределяет базу пропорционально оставшемуся сроку: из пяти лет в первый списывается 5/15, в последний — 1/15. Таблица показывает все годы сразу. Чистый убывающий метод может оставить стоимость выше ликвидационной к концу указанного срока: автоматического переключения и финальной корректировки нет.",
    "howToUse": [
      "Введите первоначальную стоимость и ту, по которой актив можно продать в конце срока.",
      "Срок службы задаётся в годах и определяет норму списания.",
      "Выберите метод: линейный ровный, убывающий остаток быстрее в начале, сумма чисел лет между ними.",
      "Год расчёта показывает нужную строку таблицы отдельно."
    ],
    "howItWorks": "Линейно списывается (стоимость − ликвидационная стоимость) / срок. В чистом двойном убывающем методе за год списывается минимум из остаточной стоимости × (2 / срок) и её превышения над ликвидационной. Переключения на линейный метод и принудительного списания остатка в последний год нет: итоговый остаток может быть выше ликвидационной стоимости. Сумма чисел лет: база × оставшиеся годы / [срок × (срок+1) / 2]. Срок и выбранный год — целые, срок от 1 до 50 лет; суммы внутри таблицы не округляются. Двойная норма применяется к текущей книге, а списание ограничено разницей между книгой и ликвидационной стоимостью. При сроке два года норма равна 100% и уже первое списание может достичь этого пола; при сроке один год ограничитель также необходим. При большем сроке убывание может оставить остаток выше пола.",
    "example": "Актив за 1 200 000 ₽ с ликвидационной 200 000 ₽ на пять лет линейно списывается по 200 000 ₽ в год.",
    "faq": [
      {
        "q": "Чем двойной убывающий отличается от простой прогрессии?",
        "a": "Ограничителем: списание никогда не уводит остаточную стоимость ниже ликвидационной. Без него книга стремилась бы к нулю и никогда его не достигала."
      },
      {
        "q": "Зачем нужна ликвидационная стоимость?",
        "a": "Это то, за что актив можно продать в конце срока. Амортизируется только разница между покупкой и ней — списывать до нуля то, что сохранит цену, неверно."
      },
      {
        "q": "Какой метод выбрать?",
        "a": "Выбор зависит от учётной политики и применимых правил. Эти формулы показывают распределение амортизации, а не выбирают разрешённый налоговый метод и не гарантируют экономию налога. Для убывающего метода здесь нет автоматического перехода на линейный."
      },
      {
        "q": "Это налоговый расчёт?",
        "a": "Нет. Это арифметика трёх классических методов. Какой из них допустим в вашем учёте и с какими сроками — вопрос учётной политики и законодательства, а не калькулятора."
      }
    ],
    "disclaimer": "Учебные формулы с целыми годовыми периодами; не переоценка рыночной цены и не выбор допустимого налогового метода. Ликвидационная стоимость — оценка пользователя. Переход на линейное списание, частичные годы и правила страны не применяются."
  },
  "en": {
    "longDescription": "Calculates depreciation by straight line, double declining balance and sum of years digits. Straight line splits the depreciable base evenly. Double declining takes twice the straight-line rate off the remaining book value and writes off more in the early years, yet never drops the book below the salvage value — that floor is what separates the method from a plain geometric series. Sum of years digits spreads the base in proportion to the life left: out of five years the first takes 5/15 and the last 1/15. The table shows every year at once. Pure declining balance can leave book value above salvage at the end of the chosen life: there is no automatic switch or final adjustment.",
    "howToUse": [
      "Enter the initial cost and what the asset can be sold for at the end of its life.",
      "Useful life is given in years and sets the write-off rate.",
      "Pick a method: straight line is even, declining balance is faster early, sum of years sits between them.",
      "The year to show pulls one row of the table out on its own."
    ],
    "howItWorks": "Straight line charges (cost − salvage) / life. Pure double declining balance charges the lesser of book value × (2 / life) and book value minus salvage. There is no switch to straight line or forced last-year adjustment, so final book value may exceed salvage. Sum of years digits charges base × remaining years / [life × (life+1) / 2]. Life and selected year are whole numbers, life is 1–50 years, and internal table amounts are not rounded.",
    "example": "An asset of 1,200,000 with a 200,000 salvage over five years writes off 200,000 a year on a straight line.",
    "faq": [
      {
        "q": "How does double declining differ from a plain geometric series?",
        "a": "The double rate applies to current book value, capped at book value minus salvage. With a two-year life the rate is 100%, so the first write-off can already reach that floor; the cap also matters for a one-year life. A longer declining schedule can end above salvage."
      },
      {
        "q": "What is the salvage value for?",
        "a": "It is what the asset can be sold for at the end of its life. Only the difference between purchase and salvage is depreciated — writing an asset that holds value down to zero would be wrong."
      },
      {
        "q": "Which method should I use?",
        "a": "The choice depends on accounting policy and applicable rules. These formulas illustrate depreciation schedules rather than choosing a permitted tax method or guaranteeing tax savings. The declining method here does not switch automatically to straight line."
      },
      {
        "q": "Is this a tax calculation?",
        "a": "No. This is the arithmetic of three classical methods. Which of them your accounting permits, and over what life, is a question of policy and law, not of a calculator."
      }
    ],
    "disclaimer": "Educational formulas for whole yearly periods; neither a market-price appraisal nor a choice of legally permitted tax method. Salvage is a user estimate. No switch to straight line, partial years or country rules are applied."
  },
  "uk": {
    "longDescription": "Амортизація розподіляє вартість активу на роки служби, і метод помітно змінює картину прибутку. Лінійний списує рівно, подвійний спадний — швидше на початку: розподіл списання за роками відрізняється, а в чистому спадному методі навіть загальна сума за заданий строк може бути меншою за амортизовану базу. Чистий спадний метод може залишити вартість вищою за ліквідаційну наприкінці строку: автоматичного переходу та фінального коригування немає.",
    "howToUse": [
      "Введіть початкову вартість активу.",
      "Введіть ліквідаційну вартість — те, що лишиться наприкінці.",
      "Задайте строк служби та виберіть метод."
    ],
    "howItWorks": "Лінійно списується (вартість − ліквідаційна вартість) / строк. Чистий подвійний спадний метод за рік списує меншу з величин: залишкова вартість × (2 / строк) або її перевищення над ліквідаційною. Переходу на лінійний метод і примусового списання решти в останній рік немає: кінцевий залишок може перевищувати ліквідаційну вартість. Сума чисел років: база × роки, що залишилися / [строк × (строк+1) / 2]. Строк та обраний рік цілі, строк 1–50 років; внутрішні суми таблиці не округлюються. Подвійна норма застосовується до поточної балансової вартості, а списання обмежене різницею між нею та ліквідаційною. За строку два роки норма становить 100%, тому перше списання може вже досягти цієї межі; за одного року обмеження також потрібне. Довший спадний графік може завершитися вище ліквідаційної вартості.",
    "example": "Актив за 1 200 000 ₴ із ліквідаційною 200 000 ₴ на п’ять років лінійно списується по 200 000 ₴ на рік. Подвійний спадний у перший рік списав би 480 000 ₴.",
    "faq": [
      {
        "q": "Навіщо потрібен прискорений метод?",
        "a": "Метод залежить від облікової політики та застосовних правил. Формули показують графік списання, але не обирають дозволений податковий метод і не гарантують податкової економії. Спадний метод тут не переходить автоматично на лінійний."
      },
      {
        "q": "Що таке ліквідаційна вартість?",
        "a": "Те, за скільки актив можна продати наприкінці строку служби. Нижче за неї амортизація не опускається: списувати більше, ніж актив втратив, некоректно."
      },
      {
        "q": "Чи впливає метод на податки?",
        "a": "Це не податковий розрахунок. За вартості 100, ліквідаційної 0 і строку 5 років чистий подвійний спадний метод залишає 7,776, а лінійний списує всю базу. Податкові наслідки, допустимі методи й коригування визначаються окремо."
      },
      {
        "q": "Як обрати строк служби?",
        "a": "Введіть очікуваний строк корисного використання цілими роками від 1 до 50. Чи потрібен нормативний строк для конкретного обліку, залежить від юрисдикції та правил; калькулятор його не встановлює."
      }
    ],
    "disclaimer": "Навчальні формули для цілих річних періодів; це не оцінка ринкової ціни й не вибір дозволеного податкового методу. Ліквідаційна вартість — оцінка користувача. Переходу на лінійне списання, часткових років та правил країни немає."
  },
  "de": {
    "longDescription": "Berechnet die Abschreibung linear, doppelt degressiv und arithmetisch-degressiv. Die lineare teilt die Abschreibungsgrundlage gleichmäßig auf. Die doppelt degressive nimmt den doppelten linearen Satz vom verbleibenden Buchwert und schreibt in den frühen Jahren mehr ab, senkt den Buchwert aber nie unter den Restwert — dieser Boden unterscheidet das Verfahren von einer reinen geometrischen Reihe. Die arithmetisch-degressive verteilt die Grundlage im Verhältnis der verbleibenden Nutzungsdauer: von fünf Jahren nimmt das erste 5/15 und das letzte 1/15. Die Tabelle zeigt alle Jahre auf einmal. Die reine degressive Methode kann am Ende der Dauer einen Buchwert über dem Restwert lassen; automatischer Wechsel und Schlussanpassung fehlen.",
    "howToUse": [
      "Trage den Anschaffungswert ein und das, wofür sich das Anlagegut am Ende seiner Nutzungsdauer verkaufen lässt.",
      "Die Nutzungsdauer wird in Jahren angegeben und setzt den Abschreibungssatz.",
      "Wähle ein Verfahren: linear ist gleichmäßig, degressiv am Anfang schneller, arithmetisch-degressiv liegt dazwischen.",
      "Das anzuzeigende Jahr hebt eine Zeile der Tabelle gesondert hervor."
    ],
    "howItWorks": "Linear wird (Anschaffungswert − Restwert) / Nutzungsdauer abgeschrieben. Die reine doppelt degressive Methode nimmt das Minimum aus Buchwert × (2 / Nutzungsdauer) und Buchwert minus Restwert. Es gibt keinen Wechsel zur linearen Methode und keine erzwungene Anpassung im letzten Jahr; der Schlussbuchwert kann daher über dem Restwert liegen. Arithmetisch-degressiv: Grundlage × verbleibende Jahre / [Nutzungsdauer × (Nutzungsdauer+1) / 2]. Dauer und ausgewähltes Jahr sind ganzzahlig, die Dauer beträgt 1–50 Jahre; intern wird nicht gerundet.",
    "example": "Ein Anlagegut für 120 000 € mit 20 000 € Restwert über fünf Jahre schreibt linear 20 000 € im Jahr ab.",
    "faq": [
      {
        "q": "Wie unterscheidet sich die doppelt degressive von einer reinen geometrischen Reihe?",
        "a": "Der doppelte Satz gilt für den aktuellen Buchwert; die Abschreibung ist auf Buchwert minus Restwert begrenzt. Bei zwei Jahren beträgt der Satz 100%, sodass bereits die erste Abschreibung den Restwert erreichen kann. Auch bei einem Jahr ist die Begrenzung nötig. Längere degressive Pläne können über dem Restwert enden."
      },
      {
        "q": "Wozu der Restwert?",
        "a": "Er ist das, wofür sich das Anlagegut am Ende seiner Nutzungsdauer verkaufen lässt. Abgeschrieben wird allein der Unterschied zwischen Anschaffung und Restwert — ein werthaltiges Gut auf null abzuschreiben wäre falsch."
      },
      {
        "q": "Welches Verfahren soll ich nehmen?",
        "a": "Die Auswahl hängt von Bilanzierungsregeln und geltendem Recht ab. Die Formeln zeigen Abschreibungspläne, wählen aber kein steuerlich zulässiges Verfahren und garantieren keine Steuerersparnis. Die degressive Methode wechselt hier nicht automatisch zur linearen."
      },
      {
        "q": "Ist das eine Steuerrechnung?",
        "a": "Nein. Hier steht die Rechnung dreier klassischer Verfahren. Welches davon deine Buchführung zulässt und über welche Nutzungsdauer, ist eine Frage der Richtlinien und des Rechts und nicht eines Rechners."
      }
    ],
    "disclaimer": "Lehrformeln für ganze Jahresperioden; weder Marktwertgutachten noch Auswahl eines steuerlich zulässigen Verfahrens. Der Restwert ist eine Eingabeschätzung. Kein Wechsel zur linearen Abschreibung, keine Teiljahre und keine Regeln eines Landes."
  },
  "es": {
    "longDescription": "Calcula la amortización por el método lineal, el de saldo doblemente decreciente y el de suma de dígitos de los años. El lineal reparte la base amortizable por igual. El de saldo doblemente decreciente aplica el doble del tipo lineal sobre el valor contable restante y amortiza más en los primeros años, aunque nunca baja el valor contable por debajo del residual: ese suelo es lo que separa al método de una simple progresión geométrica. La suma de dígitos reparte la base en proporción a la vida que queda: de cinco años, el primero se lleva 5/15 y el último, 1/15. La tabla muestra todos los años a la vez. El método decreciente puro puede dejar un valor contable superior al residual al final; no hay cambio automático ni ajuste final.",
    "howToUse": [
      "Introduce el coste inicial y por cuánto puede venderse el activo al final de su vida.",
      "La vida útil se indica en años y fija el ritmo de amortización.",
      "Elige un método: el lineal es uniforme, el de saldo decreciente es más rápido al principio y el de suma de dígitos queda entre ambos.",
      "El año a mostrar extrae una fila de la tabla por separado."
    ],
    "howItWorks": "El método lineal carga (coste − residual) / vida. El saldo doblemente decreciente puro carga el menor de valor contable × (2 / vida) y valor contable menos residual. No cambia al método lineal ni fuerza un ajuste final, por lo que el valor contable final puede superar el residual. Suma de dígitos: base × años restantes / [vida × (vida+1) / 2]. La vida y el año elegido son enteros, la vida está entre 1 y 50 años y no se redondean los importes internos.",
    "example": "Un activo de 120 000 € con un valor residual de 20 000 € a cinco años amortiza 20 000 € al año por el método lineal.",
    "faq": [
      {
        "q": "¿En qué se diferencia el saldo doblemente decreciente de una progresión geométrica simple?",
        "a": "El tipo doble se aplica al valor contable actual, con un límite de valor contable menos residual. En una vida de dos años el tipo es 100%, por lo que la primera amortización ya puede llegar al residual; el límite también importa con un año. Un calendario decreciente más largo puede acabar por encima del residual."
      },
      {
        "q": "¿Para qué sirve el valor residual?",
        "a": "Es por lo que puede venderse el activo al final de su vida. Solo se amortiza la diferencia entre la compra y el residual: amortizar hasta cero un activo que conserva valor sería un error."
      },
      {
        "q": "¿Qué método debo usar?",
        "a": "La elección depende de la política contable y las reglas aplicables. Las fórmulas ilustran calendarios, sin elegir un método fiscal permitido ni garantizar ahorro fiscal. El método decreciente no cambia aquí automáticamente al lineal."
      },
      {
        "q": "¿Es un cálculo fiscal?",
        "a": "No. Esto es la aritmética de tres métodos clásicos. Cuál de ellos permite tu contabilidad, y a lo largo de qué vida, es una cuestión de política y de ley, no de una calculadora."
      }
    ],
    "disclaimer": "Fórmulas didácticas con periodos anuales enteros; no tasan el valor de mercado ni eligen un método fiscal permitido. El residual es una estimación del usuario. No se aplica cambio al método lineal, años parciales ni reglas de un país."
  }
};
