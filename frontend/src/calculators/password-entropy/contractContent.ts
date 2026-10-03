// Authored contract with individually retained effective legacy passages.
// AI review; human language and subject review remain pending.
export const contractContent = {
  "ru": {
    "shortDescription": "Энтропия равномерно случайной последовательности и модель перебора при заданной скорости.",
    "seoDescription": "Рассчитайте L·log₂N для независимой случайной генерации и приблизительное время M/2 попыток. Не проверяет реальный пароль или безопасность аккаунта.",
    "longDescription": "Учебная модель равномерной генерации независимых знаков из выбранного полного алфавита. Показывает энтропию пространства вариантов и приближённое время исчерпывающего перебора при вручную заданной скорости. Сам пароль вводить не требуется: его содержание, утечки и реальную стойкость аккаунта этот инструмент не проверяет. Для придуманного человеком пароля размер алфавита и длина не определяют фактическую энтропию.",
    "howToUse": [
      "Задайте целую длину случайно генерируемой последовательности.",
      "Выберите весь алфавит, из которого независимо выбирается каждый знак, а не набор символов, встретившихся в готовом пароле.",
      "Введите предполагаемую скорость в миллиардах попыток/с и читайте результат только в рамках этой модели."
    ],
    "howItWorks": "Для длины L и алфавита N равновероятных независимых знаков число вариантов M=N^L, энтропия H=log₂M=L·log₂N. Длина — положительное безопасное целое; скорость r задаётся в миллиардах попыток/с. Здесь время = M/(2·r·10⁹): приближение середины большого пространства. Точное среднее при переборе без повторов с учётом успешной попытки равно (M+1)/2; при случайных независимых догадках с повторениями — M. Алфавит 94 означает печатный ASCII без пробела. Год в выводе равен 31 557 600с.",
    "example": "Двенадцать знаков из букв и цифр дают 71,45 бита и около 3,2·10²¹ вариантов.",
    "faq": [
      {
        "q": "Сколько бит гарантирует безопасность пароля?",
        "a": "Никакое число здесь не гарантирует безопасность. H описывает только указанную случайную генерацию. Время зависит от алгоритма хеширования, стоимости проверки, ограничения попыток, утечек и других угроз; скорость калькулятор не измеряет."
      },
      {
        "q": "Почему перебор показан как половина пространства?",
        "a": "Для большого равномерного пространства используется M/2. Точное среднее без повторов и с успешной попыткой — (M+1)/2: у одной случайной цифры 5,5 попытки, а приближение показывает 5. Это явно приближённая модель."
      },
      {
        "q": "Как сравнить длину и размер алфавита?",
        "a": "Один дополнительный случайный знак добавляет log₂N бит. Изменение N на N₂ добавляет L·log₂(N₂/N). Сравнивайте конкретные варианты при одинаковой модели генерации, а не делайте правило о любых человеческих паролях."
      },
      {
        "q": "Можно проверить парольную фразу или словарную атаку?",
        "a": "Нет: интерфейс содержит только шесть символьных алфавитов, не словарь слов и не текст пароля. Формула для случайных слов требует отдельной модели. Предсказуемые слова, повторное использование и утечки здесь не оцениваются."
      }
    ],
    "disclaimer": "Учебная модель равномерной независимой генерации, не оценка реального пароля и не гарантия времени атаки. Сам пароль здесь не нужен. Результаты вне конечного числового диапазона отклоняются."
  },
  "en": {
    "shortDescription": "Entropy of a uniformly random sequence and a search model at the supplied rate.",
    "seoDescription": "Calculate L·log₂N for independent random generation and approximate M/2-attempt search time. Does not assess actual passwords or account safety.",
    "longDescription": "An educational model of uniform independent character generation from the selected full alphabet. It shows search-space entropy and approximate exhaustive-search time at a manually supplied rate. No actual password is required: its contents, breaches and account security are not checked. For a human-chosen password, length and alphabet size do not determine its actual entropy.",
    "howToUse": [
      "Set the integer length of the randomly generated sequence.",
      "Select the complete alphabet available to each independent draw, not the characters observed in an existing password.",
      "Supply the assumed rate in billions of attempts/s and interpret the result only within this model."
    ],
    "howItWorks": "For length L and N equiprobable independent characters, possibilities M=N^L and entropy H=log₂M=L·log₂N. Length is a positive safe integer; rate r is in billions of attempts/s. Displayed time is M/(2·r·10⁹), a midpoint approximation for a large space. The exact expected count for a nonrepeating exhaustive search including success is (M+1)/2; independent random guesses with replacement require M on average. Alphabet 94 means printable ASCII without space. One displayed year is 31,557,600s.",
    "example": "Twelve characters from letters and digits give 71.45 bits and about 3.2·10²¹ combinations.",
    "faq": [
      {
        "q": "How many bits guarantee password safety?",
        "a": "No number here guarantees safety. H describes only the stated random generation model. Time depends on hash verification cost, rate limits, breaches and other threats; this tool does not measure the rate."
      },
      {
        "q": "Why does search time use half the space?",
        "a": "For a large uniform space the tool uses M/2. Exact nonrepeating search including success averages (M+1)/2: one random digit takes 5.5 attempts, while this approximation shows 5. The model is explicitly approximate."
      },
      {
        "q": "How can length and alphabet size be compared?",
        "a": "One additional random character adds log₂N bits. Changing N to N₂ adds L·log₂(N₂/N). Compare particular choices under the same generation model, not all human-selected passwords."
      },
      {
        "q": "Can this test passphrases or dictionary attacks?",
        "a": "No: the interface contains six character alphabets, not a word dictionary or password text. Random-word generation needs a separate model. Predictable phrases, reuse and breaches are not assessed."
      }
    ],
    "disclaimer": "Educational uniform-independent-generation model, not a real-password assessment or attack-time guarantee. No actual password is needed. Results outside the finite numerical range are rejected."
  },
  "uk": {
    "shortDescription": "Ентропія рівномірно випадкової послідовності й модель перебору за заданої швидкості.",
    "seoDescription": "Обчисліть L·log₂N для незалежної випадкової генерації та наближений час M/2 спроб. Не перевіряє реальний пароль чи безпеку облікового запису.",
    "longDescription": "Навчальна модель рівномірної генерації незалежних знаків із вибраного повного алфавіту. Показує ентропію простору варіантів і наближений час повного перебору за вручну заданої швидкості. Сам пароль вводити не потрібно: його зміст, витоки й реальна безпека облікового запису не перевіряються. Для пароля, придуманого людиною, довжина та алфавіт не визначають фактичну ентропію.",
    "howToUse": [
      "Задайте цілу довжину випадково генерованої послідовності.",
      "Оберіть весь алфавіт незалежного вибору кожного знака, а не символи, знайдені в готовому паролі.",
      "Введіть припущену швидкість у мільярдах спроб/с і тлумачте результат лише в межах моделі."
    ],
    "howItWorks": "Для довжини L та N рівноймовірних незалежних знаків число варіантів M=N^L, ентропія H=log₂M=L·log₂N. Довжина — додатне безпечне ціле; швидкість r задається в мільярдах спроб/с. Час тут = M/(2·r·10⁹): наближення середини великого простору. Точне середнє для перебору без повторів з успішною спробою — (M+1)/2; для незалежних випадкових здогадів із повтореннями — M. Алфавіт 94 — друкований ASCII без пробілу. Рік у виведенні дорівнює 31 557 600с.",
    "example": "Дванадцять знаків із літер і цифр дають 71,45 біта і близько 3,2·10²¹ варіантів.",
    "faq": [
      {
        "q": "Скільки бітів гарантує безпеку пароля?",
        "a": "Жодне число тут не гарантує безпеки. H описує тільки задану випадкову генерацію. Час залежить від вартості перевірки хешу, обмеження спроб, витоків та інших загроз; швидкість інструмент не вимірює."
      },
      {
        "q": "Чому час перебору використовує половину простору?",
        "a": "Для великого рівномірного простору використано M/2. Точне середнє без повторів з успішною спробою — (M+1)/2: одна випадкова цифра потребує 5,5 спроби, а наближення показує 5. Модель явно наближена."
      },
      {
        "q": "Як порівнювати довжину й розмір алфавіту?",
        "a": "Один додатковий випадковий знак додає log₂N бітів. Зміна N на N₂ додає L·log₂(N₂/N). Порівнюйте конкретні варіанти за однакової моделі генерації, а не всі паролі, придумані людиною."
      },
      {
        "q": "Чи можна перевірити парольну фразу або словникову атаку?",
        "a": "Ні: інтерфейс містить шість символьних алфавітів, а не словник слів чи текст пароля. Випадкові слова потребують окремої моделі. Передбачувані фрази, повторне використання та витоки тут не оцінюються."
      }
    ],
    "disclaimer": "Навчальна модель рівномірної незалежної генерації, не оцінка реального пароля й не гарантія часу атаки. Сам пароль не потрібен. Результати поза скінченним числовим діапазоном відхиляються."
  },
  "de": {
    "shortDescription": "Entropie einer gleichverteilten Zufallsfolge und Suchmodell mit angegebener Rate.",
    "seoDescription": "Berechne L·log₂N für unabhängige Zufallsgenerierung und eine ungefähre Suche mit M/2 Versuchen. Keine Prüfung echter Passwörter oder Kontosicherheit.",
    "longDescription": "Lehrmodell gleichverteilter unabhängiger Zeichen aus dem gewählten vollständigen Alphabet. Es zeigt die Entropie des Suchraums und die ungefähre Zeit einer vollständigen Suche bei manuell angegebener Rate. Ein echter Passworttext wird nicht benötigt; Inhalt, Datenlecks und Kontosicherheit werden nicht geprüft. Bei menschlich gewählten Passwörtern bestimmen Länge und Alphabetgröße nicht die tatsächliche Entropie.",
    "howToUse": [
      "Lege die ganzzahlige Länge der zufällig erzeugten Folge fest.",
      "Wähle das vollständige Alphabet für jeden unabhängigen Zug, nicht nur die Zeichen eines vorhandenen Passworts.",
      "Gib die angenommene Rate in Milliarden Versuchen/s ein und deute das Ergebnis nur im Rahmen dieses Modells."
    ],
    "howItWorks": "Für Länge L und N gleichwahrscheinliche unabhängige Zeichen gilt M=N^L und H=log₂M=L·log₂N. Die Länge ist eine positive sichere ganze Zahl; Rate r wird in Milliarden Versuchen/s angegeben. Die angezeigte Zeit M/(2·r·10⁹) nähert die Mitte eines großen Suchraums an. Bei vollständiger Suche ohne Wiederholung einschließlich Erfolg sind exakt (M+1)/2 Versuche zu erwarten; bei unabhängigen Zufallsversuchen mit Wiederholung M. Alphabet 94 bezeichnet druckbares ASCII ohne Leerzeichen. Ein angezeigtes Jahr entspricht 31.557.600s.",
    "example": "Zwölf Zeichen aus Buchstaben und Ziffern ergeben 71,45 Bit und rund 3,2·10²¹ Möglichkeiten.",
    "faq": [
      {
        "q": "Wie viele Bits garantieren ein sicheres Passwort?",
        "a": "Keine Zahl hier garantiert Sicherheit. H beschreibt nur das angegebene Zufallsmodell. Die Zeit hängt von Hash-Prüfkosten, Versuchslimits, Datenlecks und anderen Gefahren ab; die Rate wird nicht gemessen."
      },
      {
        "q": "Warum nutzt die Suchzeit den halben Raum?",
        "a": "Für einen großen gleichverteilten Raum wird M/2 genutzt. Eine Suche ohne Wiederholung einschließlich Erfolg benötigt exakt im Mittel (M+1)/2 Versuche: eine Zufallsziffer 5,5, während die Näherung 5 zeigt. Das Modell ist ausdrücklich angenähert."
      },
      {
        "q": "Wie vergleicht man Länge und Alphabetgröße?",
        "a": "Ein zusätzliches Zufallszeichen erhöht H um log₂N Bits. Der Wechsel von N zu N₂ erhöht H um L·log₂(N₂/N). Vergleiche konkrete Varianten desselben Generierungsmodells, nicht beliebige menschliche Passwörter."
      },
      {
        "q": "Prüft das Werkzeug Passphrasen oder Wörterbuchangriffe?",
        "a": "Nein. Es bietet sechs Zeichenalphabete, kein Wortwörterbuch und keinen Passworttext. Zufallswörter benötigen ein eigenes Modell. Vorhersagbare Phrasen, Wiederverwendung und Datenlecks werden nicht bewertet."
      }
    ],
    "disclaimer": "Lehrmodell gleichverteilter unabhängiger Generierung, keine Bewertung echter Passwörter oder garantierte Angriffszeit. Ein echter Passworttext ist nicht nötig. Ergebnisse außerhalb des endlichen Zahlenbereichs werden abgelehnt."
  },
  "es": {
    "shortDescription": "Entropía de una secuencia uniforme aleatoria y modelo de búsqueda a la tasa indicada.",
    "seoDescription": "Calcula L·log₂N para generación aleatoria independiente y el tiempo aproximado de M/2 intentos. No evalúa contraseñas reales ni seguridad de cuentas.",
    "longDescription": "Modelo educativo de generación uniforme e independiente de caracteres del alfabeto completo seleccionado. Muestra la entropía del espacio y un tiempo aproximado de búsqueda exhaustiva a una tasa indicada manualmente. No necesita la contraseña real: no comprueba su contenido, filtraciones ni seguridad de la cuenta. En una contraseña elegida por una persona, longitud y alfabeto no determinan la entropía real.",
    "howToUse": [
      "Indica la longitud entera de la secuencia generada al azar.",
      "Selecciona el alfabeto completo disponible para cada elección independiente, no los caracteres observados en una contraseña existente.",
      "Introduce la tasa supuesta en miles de millones de intentos/s e interpreta el resultado solo dentro del modelo."
    ],
    "howItWorks": "Con longitud L y N caracteres equiprobables e independientes, M=N^L y H=log₂M=L·log₂N. La longitud es un entero positivo seguro; la tasa r se expresa en miles de millones de intentos/s. El tiempo mostrado M/(2·r·10⁹) aproxima el punto medio de un espacio grande. Una búsqueda exhaustiva sin repeticiones, incluyendo el éxito, necesita exactamente (M+1)/2 intentos de media; las conjeturas aleatorias independientes con repetición necesitan M. El alfabeto 94 es ASCII imprimible sin espacio. Un año mostrado equivale a 31 557 600s.",
    "example": "Doce caracteres de letras y cifras dan 71,45 bits y unas 3,2·10²¹ combinaciones.",
    "faq": [
      {
        "q": "¿Cuántos bits garantizan una contraseña segura?",
        "a": "Ninguna cifra aquí garantiza seguridad. H describe solo la generación aleatoria indicada. El tiempo depende del coste de verificar hashes, límites de intentos, filtraciones y otras amenazas; la tasa no se mide."
      },
      {
        "q": "¿Por qué el tiempo usa la mitad del espacio?",
        "a": "Para un espacio uniforme grande se usa M/2. La búsqueda sin repeticiones incluyendo el éxito necesita exactamente (M+1)/2 intentos de media: una cifra aleatoria requiere 5,5, mientras la aproximación muestra 5. El modelo es explícitamente aproximado."
      },
      {
        "q": "¿Cómo comparar longitud y tamaño del alfabeto?",
        "a": "Un carácter aleatorio adicional añade log₂N bits. Cambiar N por N₂ añade L·log₂(N₂/N). Compara opciones concretas con el mismo modelo de generación, no cualquier contraseña elegida por personas."
      },
      {
        "q": "¿Comprueba frases de contraseña o ataques de diccionario?",
        "a": "No. La interfaz ofrece seis alfabetos de caracteres, no un diccionario de palabras ni el texto de la contraseña. Las palabras aleatorias requieren otro modelo. No evalúa frases previsibles, reutilización ni filtraciones."
      }
    ],
    "disclaimer": "Modelo educativo de generación uniforme e independiente, no evaluación de una contraseña real ni garantía de tiempo de ataque. No necesita la contraseña. Se rechazan resultados fuera del intervalo numérico finito."
  }
};
