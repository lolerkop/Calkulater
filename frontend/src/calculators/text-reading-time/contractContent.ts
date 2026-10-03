import type { CalculatorCopy } from '../../lib/platform/types';
type Body = Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Body> = {
  "ru": {
    "longDescription": "Оценивает длительность по объёму текста: можно вставить текст или ввести целое число слов. Одновременно показываются оценки чтения и речи. Начальные 200 и 130 слов в минуту — редактируемые настройки модели, а не нормы для людей. При этих настройках 1000 слов дают 5 минут чтения и около 7 минут 42 секунд речи.",
    "howToUse": [
      "Выберите, что у вас есть: готовое число слов или сам текст.",
      "Вставьте текст или введите число слов.",
      "При необходимости поправьте скорость чтения под себя.",
      "Скорость речи меняйте, если готовите выступление и знаете свой темп."
    ],
    "howItWorks": "Для каждого темпа время в секундах = слова / (слов в минуту) × 60. Обычные длительности округляются до целой секунды; маленькие ненулевые значения сохраняются числом. В режиме текста слово — последовательность букв или цифр Unicode с соединяющими знаками, внутренним дефисом или апострофом. Паузы, изображения и содержание формул отдельно не измеряются.",
    "example": "Текст на 1200 слов читается про себя за 6 минут ровно, а вслух звучит 9 минут 14 секунд.",
    "faq": [
      {
        "q": "Чем это отличается от калькулятора скорости чтения?",
        "a": "Там по прочитанному за известное время измеряют вашу скорость. Здесь наоборот: скорость известна, а оценивается длительность."
      },
      {
        "q": "Какую скорость чтения ставить?",
        "a": "Измерьте свой темп на похожем тексте и подставьте его. Начальные 200 слов в минуту — настройка расчёта; она не подтверждает вашу скорость."
      },
      {
        "q": "Почему речь медленнее чтения?",
        "a": "Оценка речи использует отдельную редактируемую скорость, начально 130 слов в минуту. Она может быть выше или ниже скорости чтения; измерьте свой темп с паузами для нужного формата."
      },
      {
        "q": "Как считаются слова во вставленном тексте?",
        "a": "Словом считается последовательность букв или цифр; дефис и апостроф внутри слова его не разрывают, а знаки препинания в счёт не идут."
      },
      {
        "q": "Учитываются ли иллюстрации и формулы?",
        "a": "Нет, считается только текст. Формулы и таблицы обычно замедляют чтение сильнее обычной прозы."
      }
    ]
  },
  "en": {
    "longDescription": "Estimates duration from text or an integer word count and shows reading and speaking estimates together. The initial 200 and 130 words per minute are editable model settings, not population norms. With these settings, 1000 words give 5 minutes of reading and about 7 minutes 42 seconds of speech.",
    "howToUse": [
      "Choose what you have: a word count or the text itself.",
      "Paste the text or enter the number of words.",
      "Adjust the reading speed to your own if needed.",
      "Change the speaking speed if you are preparing a talk and know your pace."
    ],
    "howItWorks": "For each pace, seconds = words / words-per-minute × 60. Ordinary durations are rounded to whole seconds; tiny nonzero durations remain numeric. In text mode a word is a Unicode letter-or-digit sequence with combining marks and internal hyphens or apostrophes. Pauses, images and the content of formulas are not measured separately.",
    "example": "A 1200-word text reads silently in exactly 6 minutes and runs to 9 minutes 14 seconds aloud.",
    "faq": [
      {
        "q": "How is this different from a reading speed calculator?",
        "a": "That one measures your speed from what you read in a known time. This works the other way: the speed is known and the duration is estimated."
      },
      {
        "q": "What reading speed should I use?",
        "a": "Measure your pace on a similar text and enter it. The initial 200 words per minute is a calculation setting, not evidence of your own speed."
      },
      {
        "q": "Why is speech slower than reading?",
        "a": "Speech uses its own editable pace, initially 130 words per minute. It may be above or below the reading pace; measure your own delivery with pauses for the intended format."
      },
      {
        "q": "How are words counted in pasted text?",
        "a": "A word is a run of letters or digits; a hyphen or apostrophe inside a word does not split it, and punctuation is not counted."
      },
      {
        "q": "Are images and formulas included?",
        "a": "No, only the text is counted. Formulas and tables usually slow reading down more than ordinary prose."
      }
    ]
  },
  "uk": {
    "longDescription": "Оцінює тривалість за вставленим текстом або цілою кількістю слів та одночасно показує читання й мовлення. Початкові 200 і 130 слів за хвилину — редаговані налаштування моделі, не норми для людей. За цих налаштувань 1000 слів дають 5 хвилин читання й приблизно 7 хвилин 42 секунди мовлення.",
    "howToUse": [
      "Виберіть джерело: цілу кількість слів або сам текст.",
      "Введіть кількість слів або вставте текст у відповідному режимі.",
      "Задайте окремі додатні темпи читання та мовлення; обидві оцінки показуються разом."
    ],
    "howItWorks": "Для кожного темпу секунди = слова / (слів за хвилину) × 60. Звичайні тривалості округлюються до цілих секунд; малі ненульові значення зберігаються числом. У режимі тексту слово — послідовність літер або цифр Unicode зі сполучними знаками, внутрішнім дефісом чи апострофом. Паузи, зображення та зміст формул окремо не вимірюються.",
    "example": "Текст на 1200 слів читається про себе за 6 хвилин рівно, а вголос звучить 9 хвилин 14 секунд.",
    "faq": [
      {
        "q": "Чому показано два різні часи?",
        "a": "Вони використовують два окремі налаштування темпу. Початкові 200 і 130 слів за хвилину можна змінити; жоден темп не визначається автоматично для людини."
      },
      {
        "q": "Навіщо показувати час читання в статті?",
        "a": "Оцінка часу може допомогти планувати читання, але не гарантує, що статтю почнуть читати. Вона залежить від введеного темпу й не включає всі паузи."
      },
      {
        "q": "Чи враховані зображення й таблиці?",
        "a": "Окремого часу на зображення й таблиці немає. Лічильник враховує текстові токени; підставте виміряний темп для схожого матеріалу та додайте потрібні паузи окремо."
      },
      {
        "q": "Який темп указати для виступу?",
        "a": "Засічіть власний виступ зі схожим текстом і паузами та введіть отриманий темп. Калькулятор не встановлює комфортний або нормативний темп подкасту."
      }
    ]
  },
  "de": {
    "longDescription": "Schätzt die Dauer aus eingefügtem Text oder einer ganzzahligen Wortzahl und zeigt Lesen und Sprechen gleichzeitig. Die anfänglichen 200 und 130 Wörter je Minute sind änderbare Modelleinstellungen, keine Bevölkerungsnormen. Damit ergeben 1000 Wörter 5 Minuten Lesen und ungefähr 7 Minuten 42 Sekunden Sprechen.",
    "howToUse": [
      "Wähle, was du hast: eine Wortzahl oder den Text selbst.",
      "Füge den Text ein oder trage die Zahl der Wörter ein.",
      "Passe das Lesetempo bei Bedarf an dein eigenes an.",
      "Ändere das Sprechtempo, wenn du einen Vortrag vorbereitest und dein Tempo kennst."
    ],
    "howItWorks": "Für jedes Tempo gilt: Sekunden = Wörter / Wörter-pro-Minute × 60. Übliche Dauern werden auf ganze Sekunden gerundet; kleine Werte ungleich null bleiben als Zahl erhalten. Im Textmodus ist ein Wort eine Unicode-Buchstaben- oder Ziffernfolge mit kombinierenden Zeichen und inneren Bindestrichen oder Apostrophen. Pausen, Bilder und Formelinhalte werden nicht gesondert gemessen.",
    "example": "Ein Text mit 1200 Wörtern liest sich still in genau 6 Minuten und dauert laut vorgelesen 9 Minuten 14 Sekunden.",
    "faq": [
      {
        "q": "Worin unterscheidet sich das vom Rechner für die Lesegeschwindigkeit?",
        "a": "Jener misst dein Tempo aus dem, was du in bekannter Zeit gelesen hast. Dieser geht andersherum vor: das Tempo ist bekannt, und die Dauer wird geschätzt."
      },
      {
        "q": "Welches Lesetempo soll ich nehmen?",
        "a": "Miss dein Tempo an einem ähnlichen Text und trage es ein. Die anfänglichen 200 Wörter je Minute sind eine Recheneinstellung, kein Nachweis deines Tempos."
      },
      {
        "q": "Warum ist Sprechen langsamer als Lesen?",
        "a": "Sprechen hat ein eigenes änderbares Tempo, anfänglich 130 Wörter je Minute. Es kann über oder unter dem Lesetempo liegen; miss deinen Vortrag mit Pausen im vorgesehenen Format."
      },
      {
        "q": "Wie werden Wörter im eingefügten Text gezählt?",
        "a": "Ein Wort ist eine Folge von Buchstaben oder Ziffern; ein Bindestrich oder Apostroph im Wort trennt es nicht, und Satzzeichen werden nicht mitgezählt."
      },
      {
        "q": "Sind Bilder und Formeln enthalten?",
        "a": "Nein, gezählt wird nur der Text. Formeln und Tabellen bremsen das Lesen meist stärker als gewöhnliche Prosa."
      }
    ]
  },
  "es": {
    "longDescription": "Estima la duración a partir del texto pegado o de una cantidad entera de palabras y muestra juntas las estimaciones de lectura y habla. Los valores iniciales de 200 y 130 palabras por minuto son ajustes editables del modelo, no normas poblacionales. Con ellos, 1000 palabras dan 5 minutos de lectura y unos 7 minutos y 42 segundos de habla.",
    "howToUse": [
      "Elige qué tienes: un número de palabras o el propio texto.",
      "Pega el texto o introduce el número de palabras.",
      "Ajusta la velocidad de lectura a la tuya si hace falta.",
      "Cambia la velocidad al hablar si estás preparando una charla y conoces tu ritmo."
    ],
    "howItWorks": "Para cada ritmo: segundos = palabras / palabras-por-minuto × 60. Las duraciones habituales se redondean a segundos enteros; los valores pequeños no nulos se conservan como número. En modo texto, una palabra es una secuencia Unicode de letras o cifras con marcas combinantes y guiones o apóstrofos internos. No se miden por separado las pausas, imágenes ni el contenido de fórmulas.",
    "example": "Un texto de 1200 palabras se lee en silencio en exactamente 6 minutos y dura 9 minutos y 14 segundos en voz alta.",
    "faq": [
      {
        "q": "¿En qué se diferencia de una calculadora de velocidad de lectura?",
        "a": "Aquella mide tu velocidad a partir de lo que lees en un tiempo conocido. Esta trabaja al revés: la velocidad se conoce y se estima la duración."
      },
      {
        "q": "¿Qué velocidad de lectura uso?",
        "a": "Mide tu ritmo con un texto similar e introdúcelo. Las 200 palabras por minuto iniciales son un ajuste de cálculo, no una prueba de tu velocidad."
      },
      {
        "q": "¿Por qué hablar es más lento que leer?",
        "a": "El habla usa un ritmo editable propio, inicialmente 130 palabras por minuto. Puede superar o quedar por debajo del ritmo de lectura; mide tu intervención con las pausas del formato previsto."
      },
      {
        "q": "¿Cómo se cuentan las palabras de un texto pegado?",
        "a": "Una palabra es un tramo de letras o cifras; un guion o un apóstrofo dentro de una palabra no la parte, y la puntuación no se cuenta."
      },
      {
        "q": "¿Se incluyen las imágenes y las fórmulas?",
        "a": "No, solo se cuenta el texto. Las fórmulas y las tablas suelen ralentizar la lectura más que la prosa corriente."
      }
    ]
  }
};
