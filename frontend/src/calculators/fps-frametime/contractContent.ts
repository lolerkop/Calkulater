// Authored contract with individually retained effective legacy passages.
// AI review; human language and subject review remain pending.
export const contractContent = {
  "ru": {
    "shortDescription": "Перевод между кадрами в секунду и миллисекундами на кадр.",
    "seoDescription": "Переведите кадры в секунду во время кадра в миллисекундах и обратно, с таблицей распространённых частот.",
    "longDescription": "Переводит положительную частоту кадров в средний интервал между кадрами и обратно. Для равномерного потока это длительность каждого кадра; для измеренного неравномерного потока используйте число кадров / общее время и соответствующий средний интервал. Калькулятор принимает только известную величину выбранного направления; искомая находится в результате.",
    "howToUse": [
      "Выберите нужное направление перевода.",
      "Введите известную величину.",
      "Прочитайте результат и строку сравнения."
    ],
    "howItWorks": "Интервал t в мс = 1000/FPS; FPS = 1000/t. Поэтому 60FPS соответствует 16,666…мс, округлённым здесь до 16,667мс. Два кадра длительностью 10 и 30мс занимают 40мс: средний интервал 20мс, частота 50FPS. Среднее мгновенных величин 1000/t не заменяет число кадров / общее время.",
    "example": "60FPS → 1000/60=16,666…мс → показано 16,667мс. При вводе 20мс получается 50FPS. Это две взаимно обратные проверки одной формулы.",
    "faq": [
      {
        "q": "Почему 60 FPS — это не ровно 16 мс?",
        "a": "1000/60=16,666…мс. 16,667мс — округлённая запись, а не точное значение. Для обратного расчёта используйте исходную величину, если она доступна."
      },
      {
        "q": "Всегда ли большая частота означает меньшее время кадра?",
        "a": "Да, это строго обратные величины: одна падает ровно настолько, насколько растёт другая."
      },
      {
        "q": "Это то же самое, что 1% low?",
        "a": "Нет. Здесь средняя связь частоты и времени, а перцентили требуют полного журнала кадров."
      },
      {
        "q": "Почему ноль не принимается?",
        "a": "Деление на ноль не имеет значения: нулевая частота означает отсутствие картинки, а нулевое время кадра — отсутствие самого кадра."
      }
    ],
    "disclaimer": "Средняя связь FPS и интервала; не анализирует журнал кадров, задержку ввода, герцовку дисплея или перцентили. Ноль не допускается в делителе."
  },
  "en": {
    "shortDescription": "Convert between frames per second and milliseconds per frame.",
    "seoDescription": "Convert frames per second to frame time in milliseconds and back, with the common refresh rates for comparison.",
    "longDescription": "Convert a positive frame rate to the mean frame interval and back. For uniform pacing this is each frame’s duration. For uneven measured pacing, use frame count / total time and its corresponding mean interval. Only the known value for the selected direction is entered; the unknown appears in the result.",
    "howToUse": [
      "Choose which direction you need.",
      "Enter the known value.",
      "Read the converted value and the comparison row."
    ],
    "howItWorks": "Interval t in ms = 1000/FPS; FPS = 1000/t. Thus 60FPS corresponds to 16.666…ms, displayed here as 16.667ms. Two frames lasting 10 and 30ms occupy 40ms: mean interval 20ms, rate 50FPS. Averaging instantaneous values 1000/t does not replace frame count / total time.",
    "example": "60FPS → 1000/60=16.666…ms → displayed as 16.667ms. Entering 20ms gives 50FPS. These are two reciprocal checks of the same formula.",
    "faq": [
      {
        "q": "Why is 60 FPS not exactly 16 ms?",
        "a": "1000/60=16.666…ms. 16.667ms is a rounded display, not the exact value. Use the original rate for reverse calculation when it is available."
      },
      {
        "q": "Does a higher frame rate always mean lower frame time?",
        "a": "Yes, they are strict reciprocals, so one falls exactly as the other rises."
      },
      {
        "q": "Is this the same as 1% low frame times?",
        "a": "No. This is the average relationship between rate and time; percentile statistics need a full frame log."
      },
      {
        "q": "Why is zero rejected?",
        "a": "Dividing by zero has no value. A frame rate of zero means no picture, and a frame time of zero means no frame at all."
      }
    ],
    "disclaimer": "Mean rate/interval relationship; no frame-log, input-latency, display-refresh or percentile analysis. A zero divisor is rejected."
  },
  "uk": {
    "shortDescription": "Переведення між кадрами за секунду та мілісекундами на кадр.",
    "seoDescription": "Переведіть кадри за секунду в час кадру в мілісекундах і назад, з таблицею поширених частот.",
    "longDescription": "Переводить додатну частоту кадрів у середній інтервал між кадрами й навпаки. За рівномірного потоку це тривалість кожного кадру; за нерівномірного використовуйте кількість кадрів / загальний час і відповідний середній інтервал. Вводиться лише відома величина вибраного напрямку; шукана відображається в результаті.",
    "howToUse": [
      "Введіть частоту кадрів або час кадру.",
      "Прочитайте зворотну величину.",
      "Порівняйте з частотою оновлення вашого екрана."
    ],
    "howItWorks": "Інтервал t у мс = 1000/FPS; FPS = 1000/t. Тому 60FPS відповідає 16,666…мс, тут округленим до 16,667мс. Два кадри по 10 і 30мс займають 40мс: середній інтервал 20мс, частота 50FPS. Середнє миттєвих значень 1000/t не замінює кількість кадрів / загальний час.",
    "example": "60FPS → 1000/60=16,666…мс → показано 16,667мс. Введення 20мс дає 50FPS. Це дві взаємно обернені перевірки однієї формули.",
    "faq": [
      {
        "q": "Чому час кадру інформативніший за FPS?",
        "a": "Саме середнє не показує нерівномірності: кадри по 10 і 30мс мають середній інтервал 20мс і дають 50FPS. Для пошуку затримок потрібен журнал окремих кадрів, якого тут немає."
      },
      {
        "q": "Скільки FPS достатньо?",
        "a": "Цей інструмент не встановлює достатню або комфортну частоту. Він лише зіставляє FPS та середній інтервал; вимоги залежать від задачі, пристрою й користувача."
      },
      {
        "q": "Що дає вища частота оновлення екрана?",
        "a": "Частота оновлення дисплея вимірюється в Гц, а частота створених кадрів — у FPS. Вони можуть відрізнятися; фактична презентація залежить від синхронізації та системи. Цей калькулятор не моделює відкидання кадрів чи розриви."
      },
      {
        "q": "Що таке 1 % low?",
        "a": "Показники 1% low залежать від журналу кадрів і прийнятого способу підрахунку найповільнішої частини. Один середній FPS або середній інтервал не дозволяє їх визначити."
      }
    ],
    "disclaimer": "Середній зв’язок FPS та інтервалу; без аналізу журналу кадрів, затримки вводу, герцовки дисплея чи перцентилів. Нульовий дільник не допускається."
  },
  "de": {
    "shortDescription": "Zwischen Bildern je Sekunde und Millisekunden je Bild umrechnen.",
    "seoDescription": "Rechne Bilder je Sekunde in die Bildzeit in Millisekunden um und zurück, mit den üblichen Bildwiederholraten zum Vergleich.",
    "longDescription": "Wandelt eine positive Bildrate in das mittlere Bildintervall um und zurück. Bei gleichmäßiger Ausgabe ist dies die Dauer jedes Bildes. Bei ungleichmäßiger Ausgabe nutze Bildzahl / Gesamtzeit und das zugehörige mittlere Intervall. Eingegeben wird nur die bekannte Größe der gewählten Richtung; die gesuchte steht im Ergebnis.",
    "howToUse": [
      "Wähle die gewünschte Richtung.",
      "Trage den bekannten Wert ein.",
      "Lies den umgerechneten Wert und die Vergleichszeile ab."
    ],
    "howItWorks": "Intervall t in ms = 1000/FPS; FPS = 1000/t. 60FPS entsprechen daher 16,666…ms, hier als 16,667ms angezeigt. Zwei Bilder mit 10 und 30ms belegen 40ms: mittleres Intervall 20ms, Bildrate 50FPS. Der Mittelwert einzelner Werte 1000/t ersetzt nicht Bildzahl / Gesamtzeit.",
    "example": "60FPS → 1000/60=16,666…ms → Anzeige 16,667ms. Die Eingabe 20ms ergibt 50FPS. Beide Richtungen prüfen dieselbe Kehrwertformel.",
    "faq": [
      {
        "q": "Warum sind 60 FPS nicht genau 16 ms?",
        "a": "1000/60=16,666…ms. 16,667ms ist eine gerundete Anzeige, kein exakter Wert. Nutze für die Rückrechnung die ursprüngliche Größe, wenn sie vorliegt."
      },
      {
        "q": "Bedeutet eine höhere Bildrate immer eine kürzere Bildzeit?",
        "a": "Ja, beide sind strenge Kehrwerte, die eine fällt also genau so, wie die andere steigt."
      },
      {
        "q": "Ist das dasselbe wie die Bildzeiten der schlechtesten ein Prozent?",
        "a": "Nein. Hier geht es um die mittlere Beziehung zwischen Rate und Zeit; für Perzentilstatistiken braucht es ein vollständiges Bildprotokoll."
      },
      {
        "q": "Warum wird null abgewiesen?",
        "a": "Eine Division durch null hat keinen Wert. Eine Bildrate von null heißt kein Bild, und eine Bildzeit von null heißt gar kein Bild."
      }
    ],
    "disclaimer": "Mittlere Beziehung zwischen Bildrate und Intervall; keine Analyse von Bildprotokollen, Eingabeverzögerung, Displayfrequenz oder Perzentilen. Ein Nullteiler wird abgelehnt."
  },
  "es": {
    "shortDescription": "Convierte entre fotogramas por segundo y milisegundos por fotograma.",
    "seoDescription": "Convierte fotogramas por segundo en tiempo de fotograma en milisegundos y al revés, con las frecuencias habituales para comparar.",
    "longDescription": "Convierte una frecuencia positiva en el intervalo medio entre fotogramas y viceversa. Con ritmo uniforme, corresponde a la duración de cada fotograma. Si el ritmo es irregular, usa cantidad de fotogramas / tiempo total y su intervalo medio correspondiente. Solo se introduce el valor conocido del sentido seleccionado; el desconocido aparece en el resultado.",
    "howToUse": [
      "Elige el sentido que necesitas.",
      "Introduce el valor conocido.",
      "Consulta el valor convertido y la fila de comparación."
    ],
    "howItWorks": "Intervalo t en ms = 1000/FPS; FPS = 1000/t. Por tanto, 60FPS equivalen a 16,666…ms, mostrados aquí como 16,667ms. Dos fotogramas de 10 y 30ms ocupan 40ms: intervalo medio 20ms y frecuencia 50FPS. Promediar valores instantáneos 1000/t no sustituye cantidad de fotogramas / tiempo total.",
    "example": "60FPS → 1000/60=16,666…ms → se muestra 16,667ms. Introducir 20ms da 50FPS. Son dos comprobaciones recíprocas de la misma fórmula.",
    "faq": [
      {
        "q": "¿Por qué 60 FPS no son exactamente 16 ms?",
        "a": "1000/60=16,666…ms. 16,667ms es un valor redondeado, no exacto. Usa el dato original para la conversión inversa cuando esté disponible."
      },
      {
        "q": "¿Una tasa de fotogramas mayor significa siempre menor tiempo de fotograma?",
        "a": "Sí, son inversos estrictos, así que uno cae exactamente en la medida en que el otro sube."
      },
      {
        "q": "¿Es lo mismo que los tiempos de fotograma del 1 % peor?",
        "a": "No. Esto es la relación media entre tasa y tiempo; las estadísticas por percentiles exigen un registro completo de fotogramas."
      },
      {
        "q": "¿Por qué se rechaza el cero?",
        "a": "Dividir entre cero no tiene valor. Una tasa de cero significa que no hay imagen y un tiempo de cero, que no hay fotograma en absoluto."
      }
    ],
    "disclaimer": "Relación media entre frecuencia e intervalo; no analiza registros de fotogramas, latencia, refresco de pantalla ni percentiles. Se rechaza un divisor cero."
  }
};
