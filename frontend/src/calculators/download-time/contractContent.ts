// Authored contract with individually retained effective legacy passages.
// AI review; human language and subject review remain pending.
export const contractContent = {
  "ru": {
    "shortDescription": "Сколько будет качаться файл на вашей скорости.",
    "seoDescription": "Рассчитайте время загрузки файла по его размеру и скорости соединения, с явным разделением десятичных и двоичных единиц.",
    "longDescription": "Переводит размер файла в биты, делит на скорость канала и показывает время. Десятичные приставки вроде МБ и двоичные вроде МиБ вынесены в отдельные варианты, а не спрятаны в допущение; то же сделано для скорости в битах и в байтах. Результат теоретический: накладные расходы протокола в него не подмешиваются.",
    "howToUse": [
      "Введите размер файла и выберите его единицу.",
      "Введите скорость соединения и её единицу.",
      "Прочитайте время, за которое файл скачается."
    ],
    "howItWorks": "Время в секундах = размер в байтах·8 / скорость в бит/с. MB=10⁶ байт, MiB=2²⁰ байт; приставки скоростей kbit/s, Mbit/s и Gbit/s десятичные. MB/s — байты в секунду, поэтому 1MB/s=8Mbit/s. Введите положительные размер и скорость в выбранных единицах. Расчёт использует постоянную полезную скорость передачи без дополнительного коэффициента протокола.",
    "example": "Файл 1 ГБ на канале 100 Мбит/с качается 8 000 000 000 ÷ 100 000 000 = 80 секунд.",
    "faq": [
      {
        "q": "Почему реальная загрузка идёт дольше?",
        "a": "Показан теоретический минимум. Накладные расходы протокола, ограничения сервера и общая загруженность канала снижают реальную скорость."
      },
      {
        "q": "Чем МБ отличается от МиБ?",
        "a": "1MB=1 000 000 байт, 1MiB=1 048 576 байт. При одинаковом числовом значении MiB содержит на 4,8576% больше байтов. Процент постоянен; с размером файла растёт абсолютная разница."
      },
      {
        "q": "Почему делим на биты, а не на байты?",
        "a": "Скорость канала указывают в битах в секунду, а файлы измеряют в байтах, поэтому одну сторону приходится переводить. Умножение байт на восемь это и делает."
      },
      {
        "q": "Можно ли задать скорость в мегабайтах в секунду?",
        "a": "Да, МБ/с есть среди вариантов и переводится в биты внутри расчёта."
      }
    ],
    "disclaimer": "Оценка передачи одного файла при постоянной полезной скорости. Тарифная скорость, задержки запуска и реальные ограничения сервера отдельно не измеряются."
  },
  "en": {
    "shortDescription": "How long a file takes on your connection, bits and bytes kept apart.",
    "seoDescription": "Calculate how long a download takes from file size and connection speed, with decimal and binary units kept separate.",
    "longDescription": "Converts a file size to bits, divides by your link speed and shows the time. Decimal prefixes such as MB and binary prefixes such as MiB are separate options rather than a hidden assumption, and so are bit-per-second and byte-per-second speeds. The figure is theoretical: no protocol overhead is folded in behind your back.",
    "howToUse": [
      "Enter the file size and pick its unit.",
      "Enter your connection speed and its unit.",
      "Read the time the transfer would take."
    ],
    "howItWorks": "Time in seconds = bytes·8 / bits per second. MB=10⁶ bytes and MiB=2²⁰ bytes; kbit/s, Mbit/s and Gbit/s use decimal prefixes. MB/s means bytes per second, so 1MB/s=8Mbit/s. Enter a positive file size and rate in their selected units. The model uses constant useful throughput with no extra protocol multiplier.",
    "example": "A 1 GB file on a 100 Mbit/s link takes 8 000 000 000 ÷ 100 000 000 = 80 seconds.",
    "faq": [
      {
        "q": "Why is my real download slower?",
        "a": "The figure is the theoretical minimum. Protocol overhead, server limits and shared capacity all reduce real throughput."
      },
      {
        "q": "What is the difference between MB and MiB?",
        "a": "1MB=1,000,000 bytes and 1MiB=1,048,576 bytes. For the same numerical value, MiB contains 4.8576% more bytes. That percentage is constant; the absolute byte gap grows with file size."
      },
      {
        "q": "Why divide by bits and not bytes?",
        "a": "Link speeds are quoted in bits per second while files are measured in bytes, so one side has to be converted. Multiplying bytes by eight does it."
      },
      {
        "q": "Can I enter speed in megabytes per second?",
        "a": "Yes, MB/s is one of the speed units and is converted to bits internally."
      }
    ],
    "disclaimer": "One-file transfer estimate at constant useful throughput. Advertised line rate, start-up delays and server limits are not measured."
  },
  "uk": {
    "shortDescription": "Скільки завантажуватиметься файл на вашому з’єднанні.",
    "seoDescription": "Обчисліть час завантаження файлу за його розміром і швидкістю з’єднання, з розділенням десяткових і двійкових одиниць.",
    "longDescription": "Час завантаження впирається в різницю між бітами й байтами: провайдер міряє канал у мегабітах, а розмір файлу вимірюється в мегабайтах. Різниця рівно у вісім разів, і саме через неї гігабайтний файл на стомегабітному каналі йде вісімдесят секунд, а не десять.",
    "howToUse": [
      "Введіть додатний розмір файла та виберіть одиницю.",
      "Введіть додатну швидкість і виберіть kbit/s, Mbit/s, Gbit/s або MB/s.",
      "Прочитайте час для сталої заданої швидкості; за можливості використовуйте виміряний корисний потік."
    ],
    "howItWorks": "Час у секундах = байти·8 / біти за секунду. MB=10⁶ байтів, MiB=2²⁰ байтів; приставки швидкостей kbit/s, Mbit/s та Gbit/s десяткові. MB/s — байти за секунду, тому 1MB/s=8Mbit/s. Введіть додатні розмір і швидкість у вибраних одиницях. Модель використовує сталу корисну швидкість без додаткового коефіцієнта протоколу.",
    "example": "Файл 1 ГБ на каналі 100 Мбіт/с завантажується 8 000 000 000 ÷ 100 000 000 = 80 секунд.",
    "faq": [
      {
        "q": "Чому реальне завантаження триває довше?",
        "a": "Результат — час за сталої заданої швидкості. Службові дані, обмеження сервера, повторні передачі й спільний канал можуть змінити корисну швидкість. Універсальної поправки у відсотках тут немає; виміряну середню швидкість можна ввести безпосередньо."
      },
      {
        "q": "Чому в бітах, а не в байтах?",
        "a": "Швидкість може задаватися у бітах або байтах за секунду: 1 байт=8 бітів. Оберіть відповідну одиницю; MB/s переводиться в Mbit/s множенням на 8."
      },
      {
        "q": "Що обмежує швидкість, крім каналу?",
        "a": "Сервер-джерело, диск, Wi-Fi і навіть браузер. Часто вузьким місцем виявляється не ваш тариф, а сервер, що віддає файл."
      },
      {
        "q": "Чи впливає кількість одночасних завантажень?",
        "a": "Так, вони ділять канал між собою. Сумарна швидкість лишається приблизно тією самою, тому кожен файл іде повільніше."
      }
    ],
    "disclaimer": "Оцінка передачі одного файла за сталої корисної швидкості. Тарифна швидкість, затримки початку й обмеження сервера окремо не вимірюються."
  },
  "de": {
    "shortDescription": "Wie lange eine Datei über deine Leitung braucht, Bit und Byte sauber getrennt.",
    "seoDescription": "Berechne, wie lange ein Download dauert, aus Dateigröße und Leitungsgeschwindigkeit, mit getrennten dezimalen und binären Einheiten.",
    "longDescription": "Rechnet eine Dateigröße in Bit um, teilt durch die Geschwindigkeit deiner Leitung und zeigt die Zeit. Dezimale Vorsätze wie MB und binäre wie MiB sind eigene Auswahlpunkte statt einer versteckten Annahme, und ebenso Geschwindigkeiten in Bit und in Byte je Sekunde. Die Zahl ist theoretisch: kein Protokollaufwand wird dir hinter dem Rücken hineingerechnet.",
    "howToUse": [
      "Trage die Dateigröße ein und wähle ihre Einheit.",
      "Trage deine Leitungsgeschwindigkeit und ihre Einheit ein.",
      "Lies ab, wie lange die Übertragung dauern würde."
    ],
    "howItWorks": "Zeit in Sekunden = Bytes·8 / Bit pro Sekunde. MB=10⁶ Bytes, MiB=2²⁰ Bytes; kbit/s, Mbit/s und Gbit/s haben dezimale Vorsätze. MB/s sind Bytes pro Sekunde, also gilt 1MB/s=8Mbit/s. Dateigröße und Geschwindigkeit müssen in den gewählten Einheiten positiv sein. Das Modell nutzt konstanten Nutzdatendurchsatz ohne zusätzlichen Protokollfaktor.",
    "example": "Eine Datei von 1 GB braucht über eine Leitung mit 100 Mbit/s 8 000 000 000 ÷ 100 000 000 = 80 Sekunden.",
    "faq": [
      {
        "q": "Warum ist mein echter Download langsamer?",
        "a": "Die Zahl ist das theoretische Minimum. Protokollaufwand, Grenzen auf dem Server und geteilte Kapazität senken den tatsächlichen Durchsatz."
      },
      {
        "q": "Was ist der Unterschied zwischen MB und MiB?",
        "a": "1MB=1.000.000 Bytes, 1MiB=1.048.576 Bytes. Bei gleicher Zahl enthält MiB 4,8576% mehr Bytes. Der Prozentsatz bleibt gleich; nur die absolute Differenz wächst mit der Dateigröße."
      },
      {
        "q": "Warum wird durch Bit und nicht durch Byte geteilt?",
        "a": "Leitungsgeschwindigkeiten werden in Bit je Sekunde angegeben, Dateien dagegen in Byte gemessen, eine Seite muss also umgerechnet werden. Byte mal acht erledigt das."
      },
      {
        "q": "Kann ich die Geschwindigkeit in Megabyte je Sekunde eintragen?",
        "a": "Ja, MB/s ist eine der Geschwindigkeitseinheiten und wird intern in Bit umgerechnet."
      }
    ],
    "disclaimer": "Schätzung für eine Datei bei konstantem Nutzdatendurchsatz. Tarifgeschwindigkeit, Anlaufzeiten und Servergrenzen werden nicht gemessen."
  },
  "es": {
    "shortDescription": "Cuánto tarda un archivo en tu conexión, con los bits y los bytes bien separados.",
    "seoDescription": "Calcula cuánto tarda una descarga a partir del tamaño del archivo y la velocidad de conexión, con las unidades decimales y binarias por separado.",
    "longDescription": "Convierte el tamaño de un archivo a bits, lo divide entre la velocidad de tu enlace y muestra el tiempo. Los prefijos decimales como MB y los binarios como MiB son opciones separadas y no una suposición oculta, y lo mismo ocurre con las velocidades en bits por segundo y en bytes por segundo. La cifra es teórica: no se incorpora a tus espaldas ninguna sobrecarga de protocolo.",
    "howToUse": [
      "Introduce el tamaño del archivo y elige su unidad.",
      "Introduce la velocidad de tu conexión y su unidad.",
      "Consulta el tiempo que tardaría la transferencia."
    ],
    "howItWorks": "Tiempo en segundos = bytes·8 / bits por segundo. MB=10⁶ bytes y MiB=2²⁰ bytes; kbit/s, Mbit/s y Gbit/s usan prefijos decimales. MB/s son bytes por segundo: 1MB/s=8Mbit/s. Introduce tamaño y velocidad positivos en las unidades seleccionadas. El modelo usa un caudal útil constante sin añadir un factor de protocolo.",
    "example": "Un archivo de 1 GB por un enlace de 100 Mbit/s tarda 8 000 000 000 ÷ 100 000 000 = 80 segundos.",
    "faq": [
      {
        "q": "¿Por qué mi descarga real es más lenta?",
        "a": "La cifra es el mínimo teórico. La sobrecarga del protocolo, los límites del servidor y la capacidad compartida reducen el rendimiento real."
      },
      {
        "q": "¿Qué diferencia hay entre MB y MiB?",
        "a": "1MB=1 000 000 bytes y 1MiB=1 048 576 bytes. Con el mismo valor numérico, MiB contiene un 4,8576% más de bytes. El porcentaje es constante; crece la diferencia absoluta de bytes."
      },
      {
        "q": "¿Por qué se divide entre bits y no entre bytes?",
        "a": "Las velocidades de enlace se dan en bits por segundo mientras que los archivos se miden en bytes, así que hay que convertir uno de los dos lados. Multiplicar los bytes por ocho lo resuelve."
      },
      {
        "q": "¿Puedo introducir la velocidad en megabytes por segundo?",
        "a": "Sí, MB/s es una de las unidades de velocidad y se convierte a bits internamente."
      }
    ],
    "disclaimer": "Estimación de un archivo a caudal útil constante. No se miden la velocidad contratada, las demoras iniciales ni los límites del servidor."
  }
};
