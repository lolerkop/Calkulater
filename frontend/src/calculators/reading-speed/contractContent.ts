import type { CalculatorCopy } from '../../lib/platform/types';
type Body = Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Body> = {
  "ru": {
    "longDescription": "Делит прочитанные слова на затраченные минуты и даёт скорость в словах за минуту вместе с часовым показателем. Если указать объём книги, калькулятор оценит, сколько времени она займёт в таком темпе. Измеряется именно скорость: понимание прочитанного — отдельный вопрос, и здесь оно не оценивается.",
    "howToUse": [
      "Прочитайте отрывок и посчитайте, сколько в нём слов.",
      "Введите затраченное время в минутах.",
      "При желании укажите объём книги для оценки."
    ],
    "howItWorks": "Скорость v = слова / минуты. Слов в час = 60v; приблизительных знаков в минуту = 6v, где 6 — выбранное допущение о знаках на слово, не измеренная средняя. Время на книгу = её слова / v; оно использует неокруглённую скорость, затем обычная длительность округляется до целых минут. Число прочитанных слов — положительное целое; объём книги — необязательное неотрицательное целое. Скорость от 1 слова в минуту на экране округляется до целого, меньшая скорость сохраняет дробную часть. Обычное время книги округляется до минут; маленькое ненулевое время показывается числом, чтобы не превращаться в ноль.",
    "example": "3000 слов за 12 минут дают 250 слов в минуту.",
    "faq": [
      {
        "q": "Измеряется ли понимание прочитанного?",
        "a": "Нет, только темп. Более быстрое чтение с меньшим пониманием всё равно даст здесь большее число."
      },
      {
        "q": "Какая скорость чтения считается обычной?",
        "a": "Калькулятор не назначает норму. Засеките время на тексте нужной сложности и используйте собственный темп; одинаковая скорость не означает одинаковое понимание."
      },
      {
        "q": "Почему число знаков приблизительное?",
        "a": "Показатель равен скорости в словах, умноженной на 6. Это явное допущение модели; настоящий объём знаков можно получить из счётчика текста."
      },
      {
        "q": "Обязательно ли указывать объём книги?",
        "a": "Нет, поле необязательное. Без него вы получите просто скорость."
      }
    ]
  },
  "en": {
    "longDescription": "Divides the words you read by the minutes it took and gives the speed in words per minute, along with the hourly figure. Add the length of a book and the calculator estimates how long it would take at that pace. Speed is all this measures — comprehension is a different question and is not scored here.",
    "howToUse": [
      "Read a passage and note how many words it had.",
      "Enter the time it took in minutes.",
      "Optionally add a book length for an estimate."
    ],
    "howItWorks": "Speed v = words / minutes. Words per hour = 60v; approximate characters per minute = 6v, where 6 is a chosen characters-per-word assumption, not a measured average. Book time = book words / v, using the unrounded speed before rounding ordinary durations to whole minutes. Read words must be a positive integer; optional book words must be a non-negative integer. Displayed speeds of 1 word per minute or more are rounded to whole words; lower speeds retain a fractional part. Ordinary book durations are rounded to minutes; tiny nonzero durations remain numeric instead of becoming zero.",
    "example": "3000 words in 12 minutes is 250 words per minute.",
    "faq": [
      {
        "q": "Does this measure comprehension?",
        "a": "No. It measures pace only. Reading faster with less understanding will still show as a higher number here."
      },
      {
        "q": "What is a typical adult reading speed?",
        "a": "The calculator assigns no norm. Time yourself on material of the relevant difficulty and use your own pace; equal speed does not imply equal comprehension."
      },
      {
        "q": "Why is the character count approximate?",
        "a": "It is the word speed multiplied by 6. This is an explicit model assumption; use the text counter for an actual character count."
      },
      {
        "q": "Do I have to enter a book length?",
        "a": "No, that field is optional. Without it you simply get the speed."
      }
    ]
  },
  "uk": {
    "longDescription": "Вимірює темп у словах за хвилину за відомим обсягом прочитаного та витраченим часом. Якщо додати кількість слів у книзі, оцінює час за тим самим неокругленим темпом. Розуміння тексту не оцінюється; перерви та зміна складності матеріалу можуть змінити фактичну тривалість.",
    "howToUse": [
      "Прочитайте фрагмент відомого обсягу й засічіть час.",
      "Введіть кількість слів і витрачені хвилини.",
      "Прочитайте швидкість і оцінку часу на книгу."
    ],
    "howItWorks": "Швидкість v = слова / хвилини. Слів за годину = 60v; приблизних знаків за хвилину = 6v, де 6 — обране припущення про знаки на слово, а не виміряний середній показник. Час на книгу = її слова / v; використовується неокруглена швидкість, потім звичайний час округлюється до цілих хвилин. Прочитаних слів має бути додатне ціле число, необов’язковий обсяг книги — невід’ємне ціле. Швидкість від 1 слова за хвилину на екрані округлюється до цілого, менша зберігає дробову частину. Звичайний час книги округлюється до хвилин; малий ненульовий час зберігається числом замість нуля.",
    "example": "3000 слів за 12 хвилин дають 250 слів за хвилину.",
    "faq": [
      {
        "q": "Чи оцінюється розуміння тексту?",
        "a": "Ні. Вимірюється лише кількість слів за час; засвоєння змісту потребує окремої перевірки."
      },
      {
        "q": "Яку швидкість використати для іншого тексту?",
        "a": "Калькулятор не встановлює норму. Виміряйте власний темп на тексті потрібної складності; однакова швидкість не означає однакового розуміння."
      },
      {
        "q": "Чому знаки за хвилину приблизні?",
        "a": "Показник дорівнює швидкості в словах, помноженій на 6. Це явне припущення моделі; справжню кількість знаків визначає лічильник тексту."
      },
      {
        "q": "Чи обов’язково вводити обсяг книги?",
        "a": "Ні. Порожнє поле або 0 вимикає оцінку часу на книгу. Вводьте відому кількість слів, а не сторінки: верстка й обсяг сторінок різняться."
      }
    ]
  },
  "de": {
    "longDescription": "Teilt die gelesenen Wörter durch die dafür gebrauchten Minuten und nennt die Geschwindigkeit in Wörtern je Minute, dazu den Stundenwert. Gib die Länge eines Buches an, und der Rechner schätzt, wie lange es in diesem Tempo dauern würde. Gemessen wird ausschließlich das Tempo — Verständnis ist eine andere Frage und wird hier nicht bewertet.",
    "howToUse": [
      "Lies eine Passage und notiere, wie viele Wörter sie hatte.",
      "Trage die gebrauchte Zeit in Minuten ein.",
      "Ergänze bei Bedarf die Länge eines Buches für eine Schätzung."
    ],
    "howItWorks": "Geschwindigkeit v = Wörter / Minuten. Wörter je Stunde = 60v; ungefähre Zeichen je Minute = 6v. Die 6 ist eine gewählte Annahme für Zeichen je Wort, kein gemessener Mittelwert. Buchzeit = Wörter im Buch / v; verwendet wird die ungerundete Geschwindigkeit, danach werden übliche Dauern auf ganze Minuten gerundet. Gelesene Wörter müssen positive ganze Zahlen sein; die optionale Buchlänge muss eine nichtnegative ganze Zahl sein. Angezeigte Geschwindigkeiten ab 1 Wort je Minute werden auf ganze Wörter gerundet; kleinere behalten einen Bruchteil. Übliche Buchzeiten werden auf Minuten gerundet; kleine Werte ungleich null bleiben als Zahl erhalten.",
    "example": "3000 Wörter in 12 Minuten sind 250 Wörter je Minute.",
    "faq": [
      {
        "q": "Wird damit das Verständnis gemessen?",
        "a": "Nein. Gemessen wird nur das Tempo. Schneller zu lesen und weniger zu verstehen ergibt hier trotzdem eine höhere Zahl."
      },
      {
        "q": "Was ist eine übliche Lesegeschwindigkeit bei Erwachsenen?",
        "a": "Der Rechner legt keine Norm fest. Miss dein eigenes Tempo an passend schwierigem Material; gleiches Tempo bedeutet nicht gleiches Verständnis."
      },
      {
        "q": "Warum ist die Zeichenzahl nur ungefähr?",
        "a": "Der Wert ist das Worttempo mal 6. Das ist eine ausdrückliche Modellannahme; tatsächliche Zeichen zählt der Textzähler."
      },
      {
        "q": "Muss ich eine Buchlänge angeben?",
        "a": "Nein, das Feld ist freiwillig. Ohne sie bekommst du einfach die Geschwindigkeit."
      }
    ]
  },
  "es": {
    "longDescription": "Divide las palabras que has leído entre los minutos que tardaste y da la velocidad en palabras por minuto, junto con la cifra por hora. Añade la extensión de un libro y la calculadora estima cuánto llevaría a ese ritmo. La velocidad es todo lo que mide: la comprensión es otra cuestión y aquí no se puntúa.",
    "howToUse": [
      "Lee un pasaje y anota cuántas palabras tenía.",
      "Introduce el tiempo que tardaste en minutos.",
      "Si quieres, añade la extensión de un libro para una estimación."
    ],
    "howItWorks": "Velocidad v = palabras / minutos. Palabras por hora = 60v; caracteres aproximados por minuto = 6v, donde 6 es una suposición elegida de caracteres por palabra, no una media medida. Tiempo del libro = palabras del libro / v; se usa la velocidad sin redondear y después se redondean las duraciones habituales a minutos enteros. Las palabras leídas deben ser un entero positivo; la extensión opcional debe ser un entero no negativo. Las velocidades mostradas de 1 palabra por minuto o más se redondean a palabras enteras; las menores conservan la fracción. Las duraciones habituales se redondean a minutos; los valores pequeños no nulos se conservan como número.",
    "example": "3000 palabras en 12 minutos son 250 palabras por minuto.",
    "faq": [
      {
        "q": "¿Mide la comprensión?",
        "a": "No. Mide solo el ritmo. Leer más deprisa entendiendo menos seguirá dando aquí una cifra mayor."
      },
      {
        "q": "¿Cuál es una velocidad de lectura típica en un adulto?",
        "a": "La calculadora no fija una norma. Mide tu ritmo con material de la dificultad adecuada; la misma velocidad no implica la misma comprensión."
      },
      {
        "q": "¿Por qué el recuento de caracteres es aproximado?",
        "a": "Es la velocidad en palabras multiplicada por 6. Es una suposición explícita del modelo; usa el contador de texto para el número real de caracteres."
      },
      {
        "q": "¿Tengo que introducir la extensión de un libro?",
        "a": "No, ese campo es opcional. Sin él obtienes simplemente la velocidad."
      }
    ]
  }
};
