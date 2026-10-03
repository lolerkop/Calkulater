import type { CalculatorCopy } from '../../lib/platform/types';

// Individually reviewed existing native body, with scoped subject corrections.
export const mathWave8ContractContent = {
  "ru": {
    "longDescription": "Считает описательную статистику по произвольному списку: среднее и медиану как разные характеристики положения данных, моду, размах и разброс. Числа вводятся столбиком или через пробел, десятичная запятая без пробела остаётся частью числа. Дисперсия по умолчанию выборочная — с делением на n−1, потому что чаще всего список и есть выборка, а не вся совокупность; режим генеральной совокупности переключается явно.",
    "howItWorks": "Среднее — сумма, делённая на количество. Медиана — середина упорядоченного ряда, при чётном количестве это полусумма двух средних. Дисперсия — средний квадрат отклонения от среднего: выборочная делит на n−1, генеральная на n. Стандартное отклонение — её квадратный корень. Сумма, среднее, медиана, минимум, максимум, размах и стандартное отклонение сохраняют единицу исходных данных; дисперсия имеет её квадрат. Все значения списка должны описывать одну величину в согласованной единице. Допускается 1–10000 конечных чисел и не больше 1000000 символов. Если сумма или дисперсия за пределами числового диапазона, это отмечается отдельно: конечные среднее и стандартное отклонение могут оставаться вычислимыми. Настоящий ноль отличается от положительного значения, слишком малого для числового представления.",
    "howToUse": [
      "Вставьте числа столбиком или перечислите через пробел.",
      "Выберите, выборка это или вся совокупность.",
      "Прочитайте среднее и остальные показатели разброса."
    ],
    "example": "Ряд 4, 8, 15, 16, 23, 42 даёт среднее 18 и медиану 15,5: одно большое значение тянет среднее вверх, а медиану почти нет.",
    "faq": [
      {
        "q": "Чем медиана отличается от среднего?",
        "a": "Среднее учитывает величину каждого значения, поэтому одно очень большое число сдвигает его заметно. Медиана смотрит только на порядок, поэтому устойчивее к выбросам."
      },
      {
        "q": "Какую дисперсию выбрать — выборочную или генеральную?",
        "a": "Если список — это выборка, по которой судят о чём-то большем, берите выборочную с делением на n−1. Если это вообще все объекты, которые вас интересуют, берите генеральную."
      },
      {
        "q": "Почему мода иногда показана прочерком?",
        "a": "Это выбранное соглашение вывода: если все значения встречаются по одному разу, вместо перечисления всех равноправных мод показывается прочерк. При повторениях перечисляются все значения с наибольшей частотой; единственная мода не требуется."
      },
      {
        "q": "Как вводить дробные числа в список?",
        "a": "Запятой без пробела: «4,5» — это одно число четыре с половиной. Если после запятой стоит пробел, она считается разделителем списка."
      },
      {
        "q": "Что будет, если в списке опечатка?",
        "a": "Любой нечисловой или непредставимый токен останавливает весь расчёт. Значение не пропускается молча, потому что это изменило бы набор данных. Разделители — пробел, точка с запятой, новая строка либо запятая перед пробелом; десятичная запятая без пробела остаётся частью числа."
      }
    ]
  },
  "en": {
    "longDescription": "Works out the descriptive statistics of any list: the mean and median as different summaries of the data location, together with the mode, the range and the spread. Numbers can be pasted as a column or typed with spaces between them. Variance defaults to the sample form with n−1 in the denominator, because a list is usually a sample of something larger; the population form is an explicit choice, not a hidden one.",
    "howItWorks": "The mean is the sum divided by the count. The median is the middle of the ordered list, or the average of the two central values when the count is even. Variance is the mean squared deviation from the mean — divided by n−1 for a sample and by n for a population — and the standard deviation is its square root. The sum, mean, median, minimum, maximum, range and standard deviation retain the data unit; variance has its square. List entries must describe the same quantity in a consistent unit. The limit is 1–10000 finite numbers and 1000000 characters. An out-of-range sum or variance is marked separately because a finite mean or standard deviation may still be recoverable. A genuine zero is distinguished from a positive value too small to represent numerically.",
    "howToUse": [
      "Paste the numbers as a column, or type them separated by spaces.",
      "Choose whether the list is a sample or the whole population.",
      "Read the mean and the spread measures below it."
    ],
    "example": "The list 4, 8, 15, 16, 23, 42 has a mean of 18 but a median of 15.5: one large value pulls the mean up and barely moves the median.",
    "faq": [
      {
        "q": "How does the median differ from the mean?",
        "a": "The mean uses the size of every value, so a single very large number shifts it noticeably. The median only uses the ordering, which makes it far more resistant to outliers."
      },
      {
        "q": "Should I pick sample or population variance?",
        "a": "If the list is a sample you are using to judge something larger, use the sample form with n−1. If those numbers are every case you care about, use the population form."
      },
      {
        "q": "Why is the mode sometimes shown as a dash?",
        "a": "This is a display convention: if every value occurs once, the tool shows a dash rather than listing all values tied for the greatest frequency. When values repeat, it lists every value sharing the highest frequency; a mode need not be unique."
      },
      {
        "q": "What happens if the list has a typo in it?",
        "a": "Any nonnumeric or unrepresentable token stops the entire calculation. Silently skipping it would change the data set. Separators are whitespace, semicolons, newlines or commas followed by whitespace; a decimal comma without whitespace stays within the number."
      }
    ]
  },
  "uk": {
    "longDescription": "Калькулятор рахує описову статистику за довільним списком: середнє й медіану як різні характеристики положення даних, моду, розмах і розкид. Дисперсія за замовчуванням вибіркова — з діленням на n−1, бо найчастіше список і є вибіркою, а не всією сукупністю; режим генеральної сукупності перемикається явно.",
    "howItWorks": "Середнє — сума, поділена на кількість. Медіана — середина впорядкованого ряду, за парної кількості це півсума двох середніх. Дисперсія — середній квадрат відхилення від середнього: вибіркова ділить на n−1, генеральна на n. Стандартне відхилення — її квадратний корінь. Сума, середнє, медіана, мінімум, максимум, розмах та стандартне відхилення зберігають одиницю даних; дисперсія має її квадрат. Значення списку мають описувати одну величину в узгодженій одиниці. Допускається 1–10000 скінченних чисел та не більше 1000000 символів. Сума чи дисперсія поза числовим діапазоном позначаються окремо: скінченні середнє та стандартне відхилення можуть лишатися обчислюваними. Справжній нуль відрізняється від додатного значення, замалого для числового подання.",
    "howToUse": [
      "Вставте числа стовпчиком або перелічіть через пробіл.",
      "Кома без пробілу є десятковою: «2,5». Кома перед пробілом розділяє числа: «2, 5».",
      "Виберіть, вибірка це чи вся сукупність.",
      "Прочитайте середнє та інші показники розкиду."
    ],
    "example": "Ряд 4, 8, 15, 16, 23, 42 дає середнє 18 і медіану 15,5: одне велике значення тягне середнє вгору, а медіану майже ні. Ці два показники описують різні властивості розташування значень; сама різниця не є повним тестом симетричності.",
    "faq": [
      {
        "q": "Чому середнє й медіана різні?",
        "a": "Бо середнє враховує величину кожного значення, а медіана — лише їхній порядок. Одне велике число помітно зсуває середнє й майже не рухає медіану. Розбіжність між ними — швидкий показник несиметричності."
      },
      {
        "q": "Чому дисперсія ділиться на n−1?",
        "a": "Бо вибіркове середнє саме пораховане з тих самих даних, і ділення на n систематично занижувало б розкид. Поправка Бесселя це виправляє. Для повної сукупності перемкніть режим — там ділять на n."
      },
      {
        "q": "Що показує розмах?",
        "a": "Різницю між найбільшим і найменшим значенням. Він простий, але чутливий до єдиного викиду, тому поруч корисно дивитися на стандартне відхилення й квартилі."
      },
      {
        "q": "Як вводити десяткові значення?",
        "a": "Через кому: «2,5 3,5». Кома вважається роздільником значень лише перед пробілом, тому дробова частина не губиться."
      },
      {
        "q": "Що станеться, якщо в списку помилка?",
        "a": "Будь-який нечисловий або непредставимий токен зупиняє весь розрахунок. Його не пропускають мовчки, бо це змінило б набір даних. Роздільники — пробіл, крапка з комою, новий рядок або кома перед пробілом; десяткова кома без пробілу лишається частиною числа."
      },
      {
        "q": "Чому мода іноді показана прочерком?",
        "a": "Це вибране правило виводу: якщо всі значення трапляються по одному разу, інструмент показує прочерк замість переліку всіх рівночастотних значень. За повторень перелічуються всі значення з найбільшою частотою; мода не мусить бути єдиною."
      }
    ]
  },
  "de": {
    "longDescription": "Ermittelt die beschreibenden Kennzahlen einer beliebigen Liste: Mittelwert und Median als unterschiedliche Kennzahlen der Datenlage, dazu Modus, Spannweite und Streuung. Die Zahlen lassen sich als Spalte einfügen oder mit Leerzeichen dazwischen eintippen. Die Varianz nutzt in der Voreinstellung die Stichprobenform mit n−1 im Nenner, weil eine Liste gewöhnlich eine Stichprobe aus etwas Größerem ist; die Form für die Grundgesamtheit ist eine ausdrückliche Wahl und keine versteckte.",
    "howItWorks": "Der Mittelwert ist die Summe geteilt durch die Anzahl. Der Median ist die Mitte der geordneten Liste oder das Mittel der beiden mittleren Werte bei gerader Anzahl. Die Varianz ist die mittlere quadratische Abweichung vom Mittelwert — geteilt durch n−1 bei einer Stichprobe und durch n bei einer Grundgesamtheit —, und die Standardabweichung ist ihre Quadratwurzel. Summe, Mittelwert, Median, Minimum, Maximum, Spannweite und Standardabweichung behalten die Dateneinheit; die Varianz hat deren Quadrat. Alle Listeneinträge müssen dieselbe Größe in einer einheitlichen Einheit beschreiben. Zulässig sind 1–10000 endliche Zahlen und höchstens 1000000 Zeichen. Eine Summe oder Varianz außerhalb des Zahlenbereichs wird getrennt markiert, weil ein endlicher Mittelwert oder eine Standardabweichung weiterhin berechenbar sein kann. Eine echte Null wird von einem positiven, numerisch zu kleinen Wert unterschieden.",
    "howToUse": [
      "Füge die Zahlen als Spalte ein oder tippe sie mit Leerzeichen getrennt.",
      "Wähle, ob die Liste eine Stichprobe oder die ganze Grundgesamtheit ist.",
      "Lies den Mittelwert und darunter die Streuungsmaße ab."
    ],
    "example": "Die Liste 4, 8, 15, 16, 23, 42 hat einen Mittelwert von 18, aber einen Median von 15,5: ein großer Wert zieht den Mittelwert nach oben und bewegt den Median kaum.",
    "faq": [
      {
        "q": "Wie unterscheidet sich der Median vom Mittelwert?",
        "a": "Der Mittelwert nutzt die Größe jedes Wertes, eine einzelne sehr große Zahl verschiebt ihn also merklich. Der Median nutzt nur die Reihenfolge, was ihn gegen Ausreißer weit widerstandsfähiger macht."
      },
      {
        "q": "Soll ich die Varianz für Stichprobe oder Grundgesamtheit wählen?",
        "a": "Ist die Liste eine Stichprobe, mit der du etwas Größeres beurteilst, nimm die Stichprobenform mit n−1. Sind diese Zahlen jeder Fall, der dich betrifft, nimm die Form für die Grundgesamtheit."
      },
      {
        "q": "Warum erscheint der Modus manchmal als Strich?",
        "a": "Das ist eine Ausgabekonvention: Kommt jeder Wert einmal vor, erscheint ein Strich statt einer Liste aller gleich häufigen Werte. Bei Wiederholungen werden alle Werte mit der höchsten Häufigkeit aufgeführt; ein Modalwert muss nicht eindeutig sein."
      },
      {
        "q": "Was passiert bei einem Tippfehler in der Liste?",
        "a": "Jedes nichtnumerische oder nicht darstellbare Element stoppt die gesamte Rechnung. Ein stilles Überspringen würde die Datenmenge ändern. Trennzeichen sind Leerraum, Semikolon, Zeilenumbruch oder Komma vor Leerraum; ein Dezimalkomma ohne Leerraum bleibt Teil der Zahl."
      }
    ]
  },
  "es": {
    "longDescription": "Calcula la estadística descriptiva de cualquier lista: la media y la mediana como distintas medidas de posición de los datos, junto con la moda, el rango y la dispersión. Los números pueden pegarse en columna o escribirse separados por espacios. La varianza usa por defecto la forma muestral, con n−1 en el denominador, porque una lista suele ser una muestra de algo mayor; la forma poblacional es una elección explícita, no oculta.",
    "howItWorks": "La media es la suma dividida entre la cantidad. La mediana es el centro de la lista ordenada, o el promedio de los dos valores centrales cuando la cantidad es par. La varianza es la desviación cuadrática media respecto a la media —dividida entre n−1 en una muestra y entre n en una población— y la desviación típica es su raíz cuadrada. La suma, media, mediana, mínimo, máximo, rango y desviación estándar conservan la unidad de los datos; la varianza tiene su cuadrado. La lista debe describir la misma magnitud con una unidad coherente. Se admiten 1–10000 números finitos y hasta 1000000 caracteres. Una suma o varianza fuera del intervalo numérico se indica por separado, pues la media o desviación estándar todavía puede ser finita. Un cero real se distingue de un valor positivo demasiado pequeño para representarlo.",
    "howToUse": [
      "Pega los números en columna o escríbelos separados por espacios.",
      "Elige si la lista es una muestra o toda la población.",
      "Consulta la media y, debajo, las medidas de dispersión."
    ],
    "example": "La lista 4, 8, 15, 16, 23, 42 tiene una media de 18 pero una mediana de 15,5: un valor grande tira de la media hacia arriba y apenas mueve la mediana.",
    "faq": [
      {
        "q": "¿En qué se diferencia la mediana de la media?",
        "a": "La media usa el tamaño de cada valor, así que un único número muy grande la desplaza de forma apreciable. La mediana solo usa el orden, lo que la hace mucho más resistente a los valores atípicos."
      },
      {
        "q": "¿Debo elegir varianza muestral o poblacional?",
        "a": "Si la lista es una muestra con la que juzgas algo mayor, usa la forma muestral con n−1. Si esos números son todos los casos que te interesan, usa la poblacional."
      },
      {
        "q": "¿Por qué a veces la moda se muestra como un guion?",
        "a": "Es una convención de presentación: si cada valor aparece una vez, se muestra una raya en lugar de enumerar todos los valores empatados. Si hay repeticiones, se muestran todos los valores de frecuencia máxima; la moda no tiene por qué ser única."
      },
      {
        "q": "¿Qué ocurre si la lista tiene una errata?",
        "a": "Cualquier elemento no numérico o no representable detiene todo el cálculo. Omitirlo sin avisar cambiaría los datos. Los separadores son espacios, puntos y coma, saltos de línea o comas seguidas de espacio; una coma decimal sin espacio sigue formando parte del número."
      }
    ]
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', Partial<CalculatorCopy>>;
