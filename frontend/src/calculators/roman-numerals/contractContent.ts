import type { CalculatorCopy } from '../../lib/platform/types';

// Individually reviewed existing native body, with scoped subject corrections.
export const mathWave8ContractContent = {
  "ru": {
    "longDescription": "Переводит целые арабские числа в выбранную современную каноническую римскую запись и обратно. Поддерживаемый диапазон 1–3999 ограничивает тысячи тремя M; используются вычитательные пары IV, IX, XL, XC, CD и CM. Это соглашение данного инструмента, а не предел всех исторических римских записей: аддитивные варианты, надстрочные черты и другие расширения не поддерживаются. При обратном переводе регистр не важен, но запись должна совпасть с канонической формой.",
    "howItWorks": "Символы берутся от большего к меньшему; вычитательные пары CM, CD, XC, XL, IX и IV удерживают запись канонической.",
    "howToUse": [
      "Выберите направление перевода.",
      "Введите число или запись.",
      "Прочитайте результат."
    ],
    "example": "1994 записывается как MCMXCIV: M + CM + XC + IV.",
    "faq": [
      {
        "q": "Почему диапазон заканчивается на 3999?",
        "a": "Потому что здесь выбран канонический формат с не более чем тремя M и вычитательными парами. Другие соглашения могут записывать большие числа, например аддитивное MMMM для 4000. Их этот калькулятор не разбирает; ограничение 3999 относится к его формату."
      },
      {
        "q": "Почему IIII отклоняется?",
        "a": "IIII встречается, например, на циферблатах и тоже может обозначать 4. Здесь выбран вариант IV, чтобы запись совпадала с результатом обратного преобразования. Несколько вариантов одного числа не делают декодирование само по себе неоднозначным; это просто выбранная проверка канонической формы."
      },
      {
        "q": "Есть ли римский ноль?",
        "a": "Нет. В системе нет символа для нуля и нет отрицательных чисел."
      },
      {
        "q": "Принимаются ли строчные буквы?",
        "a": "Да, ввод читается без учёта регистра, а ответ показывается прописными."
      }
    ]
  },
  "en": {
    "longDescription": "Converts Arabic integers to a chosen modern canonical Roman notation and back. The supported range 1–3999 limits thousands to three Ms and uses the subtractive pairs IV, IX, XL, XC, CD and CM. This is the tool’s convention, not the limit of every historical Roman notation: additive variants, overlines and other extensions are unsupported. Reverse conversion ignores case but requires the canonical spelling.",
    "howItWorks": "Symbols are taken largest first; the subtractive pairs CM, CD, XC, XL, IX and IV keep the writing canonical.",
    "howToUse": [
      "Choose the direction.",
      "Enter the number or the numeral.",
      "Read the result."
    ],
    "example": "1994 is MCMXCIV: M + CM + XC + IV.",
    "faq": [
      {
        "q": "Why does the range stop at 3999?",
        "a": "This chosen canonical format allows at most three Ms and uses subtractive pairs. Other conventions can express larger values, such as additive MMMM for 4000. This calculator does not parse those extensions; 3999 is a limit of its format."
      },
      {
        "q": "Why is IIII rejected?",
        "a": "IIII occurs on clock faces and can also mean 4. This tool chooses IV so the input matches its canonical encoder. Multiple spellings for one number do not inherently make decoding ambiguous; rejection enforces this chosen canonical form."
      },
      {
        "q": "Is there a Roman zero?",
        "a": "No. The system has no symbol for zero and no negative numbers."
      },
      {
        "q": "Are lowercase letters accepted?",
        "a": "Yes, the input is read case-insensitively and the answer is shown in capitals."
      }
    ]
  },
  "uk": {
    "longDescription": "Перетворює цілі арабські числа на вибраний сучасний канонічний римський запис і навпаки. Діапазон 1–3999 обмежує тисячі трьома M; використовуються віднімальні пари IV, IX, XL, XC, CD та CM. Це правило інструмента, а не межа всіх історичних римських записів: адитивні варіанти, надрядкові риски та інші розширення не підтримуються. Зворотне перетворення не залежить від регістру, але вимагає канонічної форми.",
    "howItWorks": "Символи беруться від більшого до меншого: M, D, C, L, X, V, I. Віднімальні пари CM, CD, XC, XL, IX та IV утримують запис канонічним — саме вони не дають написати DCCCC замість CM. Зворотний переклад читає запис зліва направо й віднімає символ, коли за ним стоїть більший.",
    "howToUse": [
      "Виберіть напрямок перекладу: в римський запис чи з нього.",
      "Введіть число від 1 до 3999 або сам римський запис.",
      "Прочитайте результат."
    ],
    "example": "1994 записується як MCMXCIV: M + CM + XC + IV, тобто 1000 + 900 + 90 + 4. Запис MDCCCCLXXXXIIII дав би те саме число, але канонічним не є.",
    "faq": [
      {
        "q": "Чому діапазон обмежений числом 3999?",
        "a": "Тут вибрано канонічний формат із не більш як трьома M та віднімальними парами. Інші домовленості можуть позначати більші числа, наприклад адитивне MMMM для 4000. Цей калькулятор такі розширення не розбирає; 3999 — межа його формату."
      },
      {
        "q": "Що таке віднімальні пари?",
        "a": "Поєднання, де менший символ стоїть перед більшим і віднімається: IV — це 4, а не 6; XC — 90, а не 110. Дозволені лише шість таких пар: CM, CD, XC, XL, IX, IV."
      },
      {
        "q": "Чому неканонічний запис відхиляється?",
        "a": "IIII трапляється на циферблатах і теж може означати 4. Тут вибрано IV, щоб введений запис збігався з канонічним результатом зворотного перетворення. Кілька записів одного числа самі собою не роблять декодування неоднозначним; це перевірка вибраного формату."
      },
      {
        "q": "Чи є в римських числах нуль?",
        "a": "Ні. Система позиційною не є, і символа для нуля в ній не передбачено — тому діапазон починається з одиниці."
      }
    ],
    "seoDescription": "Перетворіть цілі числа від 1 до 3999 на канонічний римський запис і перевірте зворотне перетворення без історичних варіантів."
  },
  "de": {
    "longDescription": "Wandelt arabische Ganzzahlen in eine gewählte moderne kanonische römische Schreibweise um und zurück. Der Bereich 1–3999 begrenzt Tausender auf drei M und nutzt die Subtraktionspaare IV, IX, XL, XC, CD und CM. Das ist die Konvention dieses Rechners, keine Grenze aller historischen Schreibweisen. Additive Varianten, Überstriche und weitere Erweiterungen werden nicht unterstützt. Die Rückrichtung ignoriert Groß- und Kleinschreibung, verlangt aber die kanonische Form.",
    "howItWorks": "Die Zeichen werden vom größten her genommen; die Subtraktionspaare CM, CD, XC, XL, IX und IV halten die Schreibweise kanonisch.",
    "howToUse": [
      "Wähle die Richtung.",
      "Trage die Zahl oder das Zahlzeichen ein.",
      "Lies das Ergebnis ab."
    ],
    "example": "1994 ist MCMXCIV: M + CM + XC + IV.",
    "faq": [
      {
        "q": "Warum endet der Bereich bei 3999?",
        "a": "Das gewählte kanonische Format erlaubt höchstens drei M und verwendet Subtraktionspaare. Andere Konventionen können größere Werte schreiben, etwa additives MMMM für 4000. Dieser Rechner liest solche Erweiterungen nicht; 3999 ist die Grenze seines Formats."
      },
      {
        "q": "Warum wird IIII abgewiesen?",
        "a": "IIII kommt auf Zifferblättern vor und kann ebenfalls 4 bedeuten. Dieser Rechner wählt IV, damit die Eingabe mit seiner kanonischen Ausgabe übereinstimmt. Mehrere Schreibweisen einer Zahl machen das Dekodieren nicht an sich mehrdeutig; die Ablehnung setzt die gewählte kanonische Form durch."
      },
      {
        "q": "Gibt es eine römische Null?",
        "a": "Nein. Das System hat kein Zeichen für die Null und keine negativen Zahlen."
      },
      {
        "q": "Werden Kleinbuchstaben angenommen?",
        "a": "Ja, die Eingabe wird ohne Rücksicht auf Groß- und Kleinschreibung gelesen, und die Antwort erscheint in Großbuchstaben."
      }
    ]
  },
  "es": {
    "longDescription": "Convierte enteros arábigos a una notación romana canónica moderna elegida y a la inversa. El intervalo 1–3999 limita los millares a tres M y usa los pares sustractivos IV, IX, XL, XC, CD y CM. Es la convención de esta herramienta, no el límite de todas las notaciones históricas. No se admiten variantes aditivas, rayas superiores ni otras extensiones. La conversión inversa ignora mayúsculas y minúsculas, pero exige la forma canónica.",
    "howItWorks": "Los símbolos se toman de mayor a menor; las parejas sustractivas CM, CD, XC, XL, IX y IV mantienen canónica la escritura.",
    "howToUse": [
      "Elige el sentido.",
      "Introduce el número o la escritura romana.",
      "Consulta el resultado."
    ],
    "example": "1994 es MCMXCIV: M + CM + XC + IV.",
    "faq": [
      {
        "q": "¿Por qué el intervalo se detiene en 3999?",
        "a": "El formato canónico elegido admite como máximo tres M y usa pares sustractivos. Otras convenciones pueden expresar números mayores, como MMMM aditivo para 4000. Esta calculadora no interpreta esas extensiones; 3999 es el límite de su formato."
      },
      {
        "q": "¿Por qué se rechaza IIII?",
        "a": "IIII aparece en esferas de reloj y también puede significar 4. Aquí se elige IV para que la entrada coincida con la salida canónica. Varias escrituras de un número no hacen ambigua la decodificación por sí mismas; el rechazo aplica la forma canónica elegida."
      },
      {
        "q": "¿Existe el cero romano?",
        "a": "No. El sistema no tiene símbolo para el cero ni números negativos."
      },
      {
        "q": "¿Se admiten minúsculas?",
        "a": "Sí: el dato se lee sin distinguir mayúsculas y la respuesta se muestra en mayúsculas."
      }
    ]
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', Partial<CalculatorCopy>>;
