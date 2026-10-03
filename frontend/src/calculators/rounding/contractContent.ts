import type { CalculatorCopy } from '../../lib/platform/types';

// Individually reviewed existing native body, with scoped subject corrections.
export const mathWave8ContractContent = {
  "ru": {
    "longDescription": "Три направления покрывают случаи, которые действительно различаются. Округление к ближайшему отправляет половину от нуля, поэтому 2,5 становится 3, а −2,5 становится −3. «Вниз» и «вверх» здесь означают пол и потолок на числовой оси, а не отбрасывание или добавление модуля, и для отрицательных чисел различие принципиально: −2,44 вниз до одного знака даёт −2,5, а вовсе не −2,4. Строка разницы показывает ровно то, что округление отбросило, — а это и есть та величина, которая накапливается, когда действие применяют к столбцу чисел, а не к одному.",
    "howItWorks": "Значение умножается на десять в степени числа знаков, округляется в выбранную сторону и делится обратно. Ноль знаков даёт целое число. Поддерживается целое число десятичных знаков от 0 до 10. Расчёт округляет кратчайшую десятичную запись уже нормализованного конечного числового ввода; дополнительная точность длинной исходной строки сверх binary64 не сохраняется. Десятичные разряды обрабатываются целочисленно, поэтому 1,005 до двух знаков даёт 1,01 без промежуточного умножения double на 100. Разница = результат − исходное число: её знак показывает направление изменения. Выбранные разряды результата не заменяются общей четырёхзначной разрядностью вывода.",
    "howToUse": [
      "Введите число, которое нужно округлить.",
      "Укажите, сколько десятичных знаков оставить.",
      "Выберите направление: к ближайшему, вниз или вверх.",
      "Строка разницы покажет, что было отброшено."
    ],
    "example": "Округление 2 748,536 до двух знаков даёт 2 748,54 и отбрасывает 0,004.",
    "faq": [
      {
        "q": "Куда уходит половина при округлении к ближайшему?",
        "a": "В режиме «к ближайшему» ровно половина уходит от нуля: 2,5 → 3, −2,5 → −3. Это выбранное правило, отличающееся от округления к чётному. Оно не устанавливает правила бухгалтерского, налогового или банковского документа: там нужно применять заданный для документа метод."
      },
      {
        "q": "Округление вниз — это то же самое, что отбросить лишние цифры?",
        "a": "Только для положительных чисел. У отрицательных отбрасывание двигает к нулю, а округление вниз — от него: −2,44 при одном знаке становится −2,5."
      },
      {
        "q": "Почему важна отброшенная разница?",
        "a": "Потому что она накапливается. Округление тысячи строк счёта в одну сторону сдвигает итог на заметную величину — поэтому бухгалтерские правила задают направление, а не оставляют его на усмотрение."
      },
      {
        "q": "Можно ли округлить до десятков или сотен?",
        "a": "Нет. Этот инструмент принимает 0–10 десятичных знаков: 0 округляет до целого, 1 — до десятых. Отрицательные числа знаков и округление до десятков или сотен не поддерживаются."
      }
    ]
  },
  "en": {
    "longDescription": "Three directions cover the cases that actually differ. Rounding to the nearest sends a half away from zero, so 2.5 becomes 3 and −2.5 becomes −3. Down and up here mean floor and ceiling on the number line rather than dropping or padding the magnitude, and for negative numbers that distinction matters: −2.44 rounded down to one place is −2.5, not −2.4. The difference row shows exactly what the rounding threw away, which is the part that accumulates when the same operation is applied to a column of figures rather than to one.",
    "howItWorks": "The value is scaled by ten to the power of the places, rounded in the chosen direction, then scaled back. Zero places rounds to a whole number. The decimal-place count is an integer from 0 to 10. The calculation quantizes the shortest decimal representation of the normalized finite numeric input; extra precision in a long original string beyond binary64 is not retained. Integer decimal arithmetic makes 1.005 round to 1.01 at two places without multiplying a double by 100. Difference = result − input, so its sign shows the direction of change. The requested decimal places are preserved in the result rather than replaced by a general four-place formatter.",
    "howToUse": [
      "Enter the number you want to round.",
      "Enter how many decimal places to keep.",
      "Choose the direction: nearest, down or up.",
      "Read the difference row to see what was discarded."
    ],
    "example": "Rounding 2,748.536 to two places gives 2,748.54 and discards 0.004.",
    "faq": [
      {
        "q": "Where does a half go when rounding to the nearest?",
        "a": "In nearest mode, an exact half goes away from zero: 2.5 → 3 and −2.5 → −3. This chosen rule differs from ties to even. It does not establish the rule for an accounting, tax or banking document; use the method specified for that document."
      },
      {
        "q": "Is rounding down the same as dropping the extra digits?",
        "a": "Only for positive numbers. For negatives, dropping digits moves towards zero while rounding down moves away from it: −2.44 becomes −2.5 at one place."
      },
      {
        "q": "Why does the difference matter?",
        "a": "Because it accumulates. Rounding a thousand invoice lines the same direction can shift a total by a visible amount, which is why accounting rules specify the direction rather than leaving it open."
      },
      {
        "q": "Can I round to tens or hundreds?",
        "a": "No. This tool accepts 0–10 decimal places: 0 rounds to an integer, 1 to tenths. Negative place counts and rounding to tens or hundreds are unsupported."
      }
    ]
  },
  "uk": {
    "longDescription": "Три напрямки покривають випадки, які справді різняться. Округлення до найближчого відправляє половину від нуля, тому 2,5 стає 3, а −2,5 стає −3. «Вниз» і «вгору» тут означають підлогу й стелю на числовій осі, а не відкидання чи додавання модуля, і для від’ємних чисел різниця принципова: −2,44 вниз до одного знака дає −2,5, а зовсім не −2,4.",
    "howItWorks": "Значення множиться на десять у степені кількості знаків, округлюється в обраний бік і ділиться назад. Нуль знаків дає ціле число. Рядок різниці показує рівно те, що округлення відкинуло, — а це і є величина, яка накопичується, коли дію застосовують до стовпця чисел, а не до одного. Підтримується ціла кількість десяткових знаків від 0 до 10. Розрахунок округлює найкоротший десятковий запис уже нормалізованого скінченного числового вводу; додаткова точність довгого початкового рядка понад binary64 не зберігається. Ціла десяткова арифметика дає 1,01 для 1,005 до двох знаків без проміжного множення double на 100. Різниця = результат − початкове число; знак показує напрямок зміни. Вибрані розряди результату не замінюються загальним чотиризнаковим форматуванням.",
    "howToUse": [
      "Введіть число, яке потрібно округлити.",
      "Укажіть, скільки десяткових знаків залишити.",
      "Виберіть напрямок: до найближчого, вниз чи вгору.",
      "Рядок різниці покаже, що було відкинуто."
    ],
    "example": "Округлення 2748,536 до двох знаків дає 2748,54 і відкидає 0,004. На тисячі таких рядків це вже чотири одиниці розбіжності.",
    "faq": [
      {
        "q": "Чим «вниз» відрізняється від відкидання дробової частини?",
        "a": "Для додатних чисел нічим, для від’ємних — принципово. Підлога від −2,44 дорівнює −2,5 до одного знака, а відкидання дало б −2,4. Тут узято саме підлогу на числовій осі."
      },
      {
        "q": "Куди йде рівно половина?",
        "a": "У режимі «до найближчого» рівно половина йде від нуля: 2,5 → 3, −2,5 → −3. Це вибране правило, відмінне від округлення до парного. Воно не задає метод для бухгалтерського, податкового чи банківського документа; застосовуйте правило, установлене для відповідного документа."
      },
      {
        "q": "Навіщо показувати різницю?",
        "a": "Бо саме вона накопичується. Одне округлення дає дрібницю, а тисяча рядків звіту — помітну розбіжність підсумку. Побачивши різницю, легше вирішити, де округлювати."
      },
      {
        "q": "Чи можна округлити до десятків або сотень?",
        "a": "Ні. Інструмент приймає 0–10 десяткових знаків: 0 округлює до цілого, 1 — до десятих. Від’ємна кількість знаків та округлення до десятків чи сотень не підтримуються."
      }
    ]
  },
  "de": {
    "longDescription": "Drei Richtungen decken die Fälle ab, die sich tatsächlich unterscheiden. Kaufmännisches Runden schickt die Hälfte von der Null weg, aus 2,5 wird also 3 und aus −2,5 wird −3. Ab- und Aufrunden meinen hier Boden und Decke auf dem Zahlenstrahl und nicht das Weglassen oder Auffüllen des Betrags, und bei negativen Zahlen zählt dieser Unterschied: −2,44 auf eine Stelle abgerundet ist −2,5 und nicht −2,4. Die Zeile mit der Differenz zeigt genau, was das Runden verworfen hat — und genau dieser Teil häuft sich an, wenn dieselbe Rechnung auf eine ganze Spalte statt auf eine Zahl angewendet wird.",
    "howItWorks": "Der Wert wird mit zehn hoch der Stellenzahl vervielfacht, in die gewählte Richtung gerundet und danach zurückgerechnet. Null Stellen runden auf eine ganze Zahl. Die Anzahl der Dezimalstellen ist ganzzahlig von 0 bis 10. Gerundet wird die kürzeste Dezimaldarstellung der bereits normalisierten endlichen Zahl; zusätzliche Genauigkeit einer langen ursprünglichen Zeichenfolge über binary64 hinaus bleibt nicht erhalten. Ganzzahlige Dezimalarithmetik ergibt bei 1,005 auf zwei Stellen 1,01, ohne einen double-Zwischenwert mit 100 zu multiplizieren. Differenz = Ergebnis − Eingabe; ihr Vorzeichen zeigt die Änderungsrichtung. Gewählte Ergebnisstellen werden nicht durch eine allgemeine Vierstellenformatierung ersetzt.",
    "howToUse": [
      "Trage die Zahl ein, die gerundet werden soll.",
      "Trage ein, wie viele Nachkommastellen bleiben sollen.",
      "Wähle die Richtung: kaufmännisch, ab oder auf.",
      "Lies die Zeile mit der Differenz, um zu sehen, was verworfen wurde."
    ],
    "example": "2748,536 auf zwei Stellen gerundet ergibt 2748,54 und verwirft 0,004.",
    "faq": [
      {
        "q": "Wohin geht die Hälfte beim kaufmännischen Runden?",
        "a": "Beim Runden zum nächsten Wert geht eine genaue Hälfte von null weg: 2,5 → 3 und −2,5 → −3. Diese gewählte Regel unterscheidet sich vom Runden zur geraden Zahl. Sie legt keine Vorgabe für Buchhaltungs-, Steuer- oder Bankdokumente fest; dort gilt die jeweils vorgeschriebene Methode."
      },
      {
        "q": "Ist Abrunden dasselbe wie das Weglassen der weiteren Stellen?",
        "a": "Nur bei positiven Zahlen. Bei negativen führt das Weglassen zur Null hin, während Abrunden von ihr weg führt: aus −2,44 wird auf eine Stelle −2,5."
      },
      {
        "q": "Warum zählt die Differenz?",
        "a": "Weil sie sich anhäuft. Tausend Rechnungspositionen in dieselbe Richtung zu runden kann eine Summe merklich verschieben, weshalb Buchhaltungsregeln die Richtung vorschreiben, statt sie offenzulassen."
      },
      {
        "q": "Kann ich auf Zehner oder Hunderter runden?",
        "a": "Nein. Zulässig sind 0–10 Dezimalstellen: 0 rundet auf eine ganze Zahl, 1 auf Zehntel. Negative Stellenzahlen sowie das Runden auf Zehner oder Hunderter werden nicht unterstützt."
      }
    ]
  },
  "es": {
    "longDescription": "Tres sentidos cubren los casos que de verdad se diferencian. Redondear al más cercano manda la mitad justa lejos del cero, así que 2,5 pasa a 3 y −2,5 pasa a −3. Hacia abajo y hacia arriba significan aquí suelo y techo sobre la recta numérica, y no recortar o completar la magnitud; con números negativos esa distinción importa: −2,44 redondeado hacia abajo a un decimal es −2,5, no −2,4. La fila de la diferencia muestra exactamente lo que el redondeo desechó, que es la parte que se acumula cuando la misma operación se aplica a una columna de cifras y no a una sola.",
    "howItWorks": "El valor se escala por diez elevado al número de decimales, se redondea en el sentido elegido y se vuelve a escalar. Con cero decimales se redondea a un número entero. Se admite un número entero de decimales entre 0 y 10. Se redondea la representación decimal más corta de la entrada numérica finita ya normalizada; no se conserva precisión adicional de una cadena larga más allá de binary64. La aritmética decimal entera hace que 1,005 a dos decimales dé 1,01 sin multiplicar un double por 100. Diferencia = resultado − entrada, por lo que su signo indica la dirección del cambio. Los decimales elegidos se conservan en lugar de sustituirse por un formato general de cuatro cifras.",
    "howToUse": [
      "Introduce el número que quieres redondear.",
      "Introduce cuántos decimales conservar.",
      "Elige el sentido: al más cercano, hacia abajo o hacia arriba.",
      "Consulta la fila de la diferencia para ver qué se descartó."
    ],
    "example": "Redondear 2748,536 a dos decimales da 2748,54 y descarta 0,004.",
    "faq": [
      {
        "q": "¿Adónde va la mitad justa al redondear al más cercano?",
        "a": "En el modo al más cercano, una mitad exacta se aleja de cero: 2,5 → 3 y −2,5 → −3. Esta regla elegida es distinta de redondear al par. No establece el método de un documento contable, fiscal o bancario; aplica la regla especificada para ese documento."
      },
      {
        "q": "¿Redondear hacia abajo es lo mismo que quitar las cifras sobrantes?",
        "a": "Solo con números positivos. Con negativos, quitar cifras acerca al cero mientras que redondear hacia abajo aleja de él: −2,44 pasa a −2,5 con un decimal."
      },
      {
        "q": "¿Por qué importa la diferencia?",
        "a": "Porque se acumula. Redondear mil líneas de factura en el mismo sentido puede desplazar un total de forma visible, y por eso las normas contables fijan el sentido en vez de dejarlo abierto."
      },
      {
        "q": "¿Puedo redondear a decenas o centenas?",
        "a": "No. Se admiten 0–10 decimales: 0 redondea a un entero y 1 a décimas. No se admiten decimales negativos ni redondeo a decenas o centenas."
      }
    ]
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', Partial<CalculatorCopy>>;
