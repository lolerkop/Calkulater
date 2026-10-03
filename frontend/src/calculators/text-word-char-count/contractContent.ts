import type { CalculatorCopy } from '../../lib/platform/types';
type Body = Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Body> = {
  "ru": {
    "longDescription": "Считает объём текста и явно называет правила, по которым считает, потому что «слово» и «предложение» — это соглашения, а не свойства строки, и разные счётчики дают разные числа. Слово здесь начинается с буквы или цифры, а дефис и апостроф внутри его не разрывают: «из-за» и «don't» считаются одним словом. Предложение — непустой кусок между точками, восклицательными и вопросительными знаками, причём текст без завершающего знака всё равно считается одним предложением. Абзац — непустая строка, поэтому двойной перенос не удваивает счёт.",
    "howToUse": [
      "Вставьте или наберите текст в поле — переносы строк сохраняются.",
      "Смотрите число символов с пробелами, если у вас лимит поста или объявления.",
      "Смотрите число без пробелов, если оплата идёт за знаки.",
      "Средняя длина токенов и число слов во фрагменте описывают этот текст, но не являются оценкой читаемости."
    ],
    "howItWorks": "Слова начинаются с буквы или цифры Unicode; следующие буквы, цифры, соединяющие знаки и внутренние апострофы или дефисы остаются в том же токене. Символы считаются кодовыми точками исходной строки, без нормализации; «без пробелов» исключает все пробельные знаки. Средняя длина слова = сумма кодовых точек токенов / число слов, без окружающей пунктуации. Предложения — непустые фрагменты между . ! ? …; абзацы — непустые строки. Это соглашения счётчика, не лингвистический анализ и не правила лимитов внешних платформ.",
    "example": "Панграмма «Съешь ещё этих мягких французских булок, да выпей же чаю. Всё готово!» — это 12 слов и 69 символов.",
    "faq": [
      {
        "q": "Считаются ли пробелы за символы?",
        "a": "Да, в общем числе учитываются пробелы, переносы строк и табуляции. Второе число исключает все пробельные знаки. Проверяйте правила нужной платформы: она может считать иначе."
      },
      {
        "q": "Как считается слово с дефисом?",
        "a": "Внутренние дефис и апостроф соединяют части одного токена: «из-за», «don’t» и «м’яких» считаются по одному. Внешняя пунктуация не входит в длину слова; внутренние знаки входят. Это выбранное правило, а не универсальное определение слова."
      },
      {
        "q": "Что если текст без точки в конце?",
        "a": "Он всё равно считается одним предложением. Иначе счётчик показывал бы ноль там, где предложение очевидно есть."
      },
      {
        "q": "Почему пустая строка между абзацами не считается?",
        "a": "Абзацем считается непустая строка, поэтому двойной перенос между абзацами не удваивает счёт."
      },
      {
        "q": "Одинаково ли считаются кириллица и латиница?",
        "a": "Да, символы считаются в кодовых точках, и русская буква весит столько же, сколько латинская."
      }
    ]
  },
  "en": {
    "longDescription": "Measures the size of a text and states the rules it counts by, because «word» and «sentence» are conventions rather than properties of a string, and different counters return different numbers. A word here starts with a letter or digit, and a hyphen or apostrophe inside does not split it: «don't» and «up-to-date» each count once. A sentence is a non-empty run between full stops, exclamation and question marks, and text without a closing mark still counts as one sentence. A paragraph is a non-empty line, so a double line break does not double the count.",
    "howToUse": [
      "Paste or type text into the field — line breaks are preserved.",
      "Use the count with spaces when a post or advert has a limit.",
      "Use the count without spaces when work is paid per character.",
      "Mean token length and words per segment describe this text; they are not a readability score."
    ],
    "howItWorks": "Words start with a Unicode letter or digit; following letters, digits, combining marks and internal apostrophes or hyphens stay in the token. Characters are code points of the original string without normalization; the no-space count excludes all whitespace. Mean word length = code points in word tokens / word count, excluding surrounding punctuation. Sentences are nonempty segments between . ! ? …; paragraphs are nonempty lines. These are counting conventions, not linguistic analysis or the quota rules of external platforms.",
    "example": "The line «The quick brown fox jumps over the lazy dog. All done!» is 11 words and 54 characters.",
    "faq": [
      {
        "q": "Do spaces count as characters?",
        "a": "Yes: the total includes spaces, line breaks and tabs. The other count excludes all whitespace. Check the target platform rules, which may use a different method."
      },
      {
        "q": "How is a hyphenated word counted?",
        "a": "Internal hyphens and apostrophes join one token: “up-to-date”, “don’t” and “someone’s” each count once. Surrounding punctuation is excluded from word length; internal marks are included. This is a chosen convention, not a universal definition of a word."
      },
      {
        "q": "What if the text has no full stop at the end?",
        "a": "It still counts as one sentence. Otherwise the counter would report zero where a sentence plainly exists."
      },
      {
        "q": "Why is a blank line between paragraphs not counted?",
        "a": "A paragraph is a non-empty line, so a double line break between paragraphs does not double the count."
      },
      {
        "q": "Are Cyrillic and Latin counted the same way?",
        "a": "Yes — characters are counted in code points, so a Cyrillic letter weighs exactly as much as a Latin one."
      }
    ]
  },
  "uk": {
    "longDescription": "Рахує слова, символи, фрагменти речень і непорожні рядки за явними правилами. Літери Unicode, зокрема українські апострофи всередині слова й латинські діакритики, не розривають токен. Символи рахуються кодовими точками, тому візуально один знак може дати кілька. Ліміти сайтів, повідомлень та редакторів перевіряйте за їхніми власними правилами.",
    "howToUse": [
      "Вставте текст у поле.",
      "Прочитайте кількість слів, символів і символів без пробілів.",
      "Порівняйте з потрібним лімітом."
    ],
    "howItWorks": "Слова починаються з літери або цифри Unicode; наступні літери, цифри, сполучні знаки та внутрішні апострофи чи дефіси залишаються в токені. Символи — кодові точки початкового рядка без нормалізації; підрахунок без пробілів виключає всі пробільні знаки. Середня довжина слова = кодові точки токенів / кількість слів, без зовнішньої пунктуації. Речення — непорожні фрагменти між . ! ? …; абзаци — непорожні рядки. Це правила лічильника, не мовний аналіз і не ліміти сторонніх платформ.",
    "example": "Рядок «З’їж ще цих м’яких французьких булок і випий чаю» містить 9 слів і 48 кодових точок разом із пробілами.",
    "faq": [
      {
        "q": "Чи рахуються пробіли й переноси рядків як символи?",
        "a": "Так: загальне число містить пробіли, переноси рядків і табуляції. Інший показник виключає всі пробільні знаки. Правила потрібної платформи можуть відрізнятися."
      },
      {
        "q": "Чому внутрішній апостроф не розриває слово?",
        "a": "Внутрішні дефіс і апостроф з’єднують один токен: «будь-який» і «м’яких» рахуються по одному. Зовнішня пунктуація не входить у довжину слова, внутрішні знаки входять. Це обране правило, не універсальне визначення слова."
      },
      {
        "q": "Чи рахуються емодзі за один символ?",
        "a": "Залежить від того, як рахувати: технічно багато емодзі складаються з кількох кодових точок. Для лімітів це важливо — одне емодзі може «з’їсти» два-чотири символи."
      },
      {
        "q": "Чи можна з кількості слів визначити час читання?",
        "a": "Лише після вибору темпу: час = слова / слів за хвилину. Калькулятор часу читання дозволяє ввести власний темп; сам підрахунок слів не визначає його."
      }
    ]
  },
  "de": {
    "longDescription": "Misst den Umfang eines Textes und nennt die Regeln, nach denen gezählt wird, denn „Wort“ und „Satz“ sind Übereinkünfte und keine Eigenschaften einer Zeichenkette — verschiedene Zähler liefern verschiedene Zahlen. Ein Wort beginnt hier mit einem Buchstaben oder einer Ziffer, und ein Bindestrich oder Apostroph darin trennt es nicht: „E-Mail“ und „geht's“ zählen je einmal. Ein Satz ist eine nicht leere Folge zwischen Punkt, Ausrufe- und Fragezeichen, und ein Text ohne abschließendes Zeichen zählt trotzdem als ein Satz. Ein Absatz ist eine nicht leere Zeile, ein doppelter Zeilenumbruch verdoppelt die Zahl also nicht.",
    "howToUse": [
      "Füge einen Text ein oder tippe ihn — Zeilenumbrüche bleiben erhalten.",
      "Nutze die Zahl mit Leerzeichen, wenn ein Beitrag oder eine Anzeige eine Grenze hat.",
      "Nutze die Zahl ohne Leerzeichen, wenn nach Zeichen bezahlt wird.",
      "Mittlere Tokenlänge und Wörter je Abschnitt beschreiben den Text, ergeben aber keinen Lesbarkeitswert."
    ],
    "howItWorks": "Wörter beginnen mit einem Unicode-Buchstaben oder einer Ziffer; folgende Buchstaben, Ziffern, kombinierende Zeichen und innere Apostrophe oder Bindestriche bleiben im Token. Zeichen sind Codepunkte der ursprünglichen Zeichenkette ohne Normalisierung; ohne Leerraum werden alle Leerraumzeichen entfernt. Mittlere Wortlänge = Codepunkte in Worttokens / Wortzahl, ohne umgebende Satzzeichen. Sätze sind nicht leere Abschnitte zwischen . ! ? …; Absätze sind nicht leere Zeilen. Dies sind Zählregeln, keine Sprachanalyse oder Zeichenlimits externer Plattformen.",
    "example": "Die Zeile „Der schnelle braune Fuchs springt über den faulen Hund. Alles erledigt!“ hat 11 Wörter und 71 Zeichen.",
    "faq": [
      {
        "q": "Zählen Leerzeichen als Zeichen?",
        "a": "Ja: Die Gesamtzahl enthält Leerzeichen, Zeilenumbrüche und Tabulatoren. Die zweite Zahl schließt alle Leerraumzeichen aus. Prüfe die Regeln der Zielplattform, die anders zählen kann."
      },
      {
        "q": "Wie wird ein Wort mit Bindestrich gezählt?",
        "a": "Innere Bindestriche und Apostrophe verbinden ein Token: „E-Mail“ und „geht’s“ zählen je einmal. Umgebende Satzzeichen zählen nicht zur Wortlänge, innere Zeichen schon. Das ist eine gewählte Regel, keine allgemeingültige Wortdefinition."
      },
      {
        "q": "Was ist, wenn am Ende der Punkt fehlt?",
        "a": "Es zählt trotzdem als ein Satz. Sonst meldete der Zähler null, wo offensichtlich ein Satz steht."
      },
      {
        "q": "Warum wird eine Leerzeile zwischen Absätzen nicht gezählt?",
        "a": "Ein Absatz ist eine nicht leere Zeile, ein doppelter Zeilenumbruch zwischen Absätzen verdoppelt die Zahl also nicht."
      },
      {
        "q": "Zählen Umlaute und ß wie andere Buchstaben?",
        "a": "Ja — gezählt wird in Codepunkten, ein ä oder ß wiegt also genau so viel wie ein a oder s."
      }
    ]
  },
  "es": {
    "longDescription": "Mide el tamaño de un texto y declara las reglas con las que cuenta, porque «palabra» y «frase» son convenios y no propiedades de una cadena, y distintos contadores devuelven cifras distintas. Aquí una palabra empieza por una letra o una cifra, y un guion o un apóstrofo dentro no la parte: «d’acord» y «teórico-práctico» cuentan una vez cada uno. Una frase es un tramo no vacío entre puntos, signos de exclamación y de interrogación, y un texto sin signo de cierre sigue contando como una frase. Un párrafo es una línea no vacía, así que un salto de línea doble no duplica el recuento.",
    "howToUse": [
      "Pega o escribe el texto en el campo: los saltos de línea se conservan.",
      "Usa el recuento con espacios cuando una publicación o un anuncio tenga un límite.",
      "Usa el recuento sin espacios cuando el trabajo se pague por caracteres.",
      "La longitud media de tokens y las palabras por segmento describen el texto; no son una puntuación de legibilidad."
    ],
    "howItWorks": "Las palabras empiezan por una letra o cifra Unicode; las letras, cifras, marcas combinantes y apóstrofos o guiones internos siguientes permanecen en el token. Los caracteres son puntos de código de la cadena original sin normalización; el recuento sin espacios excluye todo carácter de espacio en blanco. Longitud media = puntos de código de los tokens / palabras, sin puntuación externa. Las frases son segmentos no vacíos entre . ! ? …; los párrafos, líneas no vacías. Son convenios de recuento, no análisis lingüístico ni reglas de límites de plataformas externas.",
    "example": "La línea «El veloz murciélago hindú comía feliz cardillo y kiwi. ¡Ya está!» contiene 11 palabras y 64 puntos de código, incluidos los espacios.",
    "faq": [
      {
        "q": "¿Los espacios cuentan como caracteres?",
        "a": "Sí: el total incluye espacios, saltos de línea y tabulaciones. El otro recuento excluye todos los espacios en blanco. Comprueba las reglas de la plataforma de destino: puede contar de otra forma."
      },
      {
        "q": "¿Cómo se cuenta una palabra con guion?",
        "a": "Los guiones y apóstrofos internos unen un token: «teórico-práctico» y «d’acord» cuentan una vez. La puntuación externa no entra en la longitud de palabra; las marcas internas sí. Es un convenio elegido, no una definición universal de palabra."
      },
      {
        "q": "¿Y si el texto no termina en punto?",
        "a": "Sigue contando como una frase. De lo contrario el contador daría cero donde es evidente que hay una frase."
      },
      {
        "q": "¿Por qué no se cuenta una línea en blanco entre párrafos?",
        "a": "Un párrafo es una línea no vacía, así que un salto de línea doble entre párrafos no duplica el recuento."
      },
      {
        "q": "¿El cirílico y el latino se cuentan igual?",
        "a": "Sí: los caracteres se cuentan en puntos de código, así que una letra cirílica pesa exactamente lo mismo que una latina."
      }
    ]
  }
};
