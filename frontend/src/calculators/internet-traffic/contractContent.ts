// Authored contract with individually retained effective legacy passages.
// AI review; human language and subject review remain pending.
export const contractContent = {
  "ru": {
    "shortDescription": "Сколько гигабайт набежит за месяц при заданной скорости потока и часах в день.",
    "seoDescription": "Рассчитайте расход интернет-трафика за месяц по скорости потока и часам просмотра в день, а также хватит ли лимита оператора.",
    "longDescription": "Считает объём, который набегает при постоянном потреблении: скорость потока умножается на время, а не делится на него. Восьмёрка в знаменателе — перевод битов в байты, и именно она чаще всего теряется: канал меряют в мегабитах, а лимит оператора в гигабайтах, и путаница между ними даёт ошибку ровно в восемь раз. Если задать лимит, добавляется срок, на который его хватит, и превышение — то есть ответ на вопрос «доживу ли я до конца месяца», а не только «сколько это в гигабайтах».",
    "howToUse": [
      "Введите скорость потока: у стандартного качества это 3–5 Мбит/с, у 4K — около 25.",
      "Укажите, сколько часов в день идёт просмотр или звонок.",
      "Задайте длину периода — обычно 30 или 31 день.",
      "Впишите лимит оператора, если хотите проверить, хватит ли его."
    ],
    "howItWorks": "За час при потоке b Mbit/s набегает b·10⁶·3600/8 байт, то есть 0,45b десятичных GB. Объём за день = 0,45b·часы, за период = этот объём·дни. Часы в день должны быть больше 0 и не больше 24; длительность периода может быть дробной. Необязательный лимит 0 означает отсутствие сравнения, положительный лимит делится на суточный объём. Вводите среднюю скорость потока, а не максимальную скорость тарифа.",
    "example": "Три часа в день на пяти мегабитах дают 6,75 ГБ в сутки и 202,5 ГБ за месяц — вдвое больше лимита в 100 ГБ.",
    "faq": [
      {
        "q": "Почему скорость делится на восемь?",
        "a": "Потому что канал меряют в мегабитах, а объём — в мегабайтах, и в байте восемь бит. Без деления расход завышается ровно в восемь раз."
      },
      {
        "q": "Какую скорость потока указывать?",
        "a": "Используйте измеренный средний битрейт потока или статистику сервиса за выбранный режим. Разрешение само по себе не задаёт скорость: она меняется с кодеком, сценой, настройками и политикой сервиса."
      },
      {
        "q": "Учитывается ли фоновый трафик?",
        "a": "Нет. Обновления, синхронизация и мессенджеры добавляют сверху, поэтому реальный расход обычно немного выше расчётного."
      },
      {
        "q": "Что показывает срок при лимите?",
        "a": "На сколько дней хватит лимита при том же ежедневном потреблении. Дробное число означает, что лимит закончится в середине дня."
      },
      {
        "q": "Гигабайт здесь десятичный?",
        "a": "Да, 10⁹ байт — так считают операторы, когда объявляют лимит. Разница с двоичным гигабайтом составляет около 7 %."
      }
    ],
    "disclaimer": "Объём выбранного постоянного среднего потока в десятичных GB. Фоновый трафик и правила учёта оператора автоматически не добавляются; квота должна использовать ту же единицу."
  },
  "en": {
    "shortDescription": "How many gigabytes a month adds up to at a given stream rate and hours per day.",
    "seoDescription": "Calculate monthly internet data usage from the stream rate and daily viewing hours, and check whether your data allowance covers it.",
    "longDescription": "Works out the volume that accumulates under steady use: the stream rate is multiplied by time rather than divided by it. The eight in the denominator converts bits to bytes, and that is what most often goes missing — a connection is measured in megabits while an allowance is quoted in gigabytes, and confusing the two is wrong by a factor of exactly eight. Enter an allowance and the calculator adds how long it lasts and by how much it is exceeded — answering «will this last the month», not only «how many gigabytes is that».",
    "howToUse": [
      "Enter the stream rate: standard quality is 3–5 Mbit/s, 4K about 25.",
      "Enter how many hours a day the stream or call runs.",
      "Set the length of the period — usually 30 or 31 days.",
      "Add your data allowance to check whether it is enough."
    ],
    "howItWorks": "One hour at b Mbit/s transfers b·10⁶·3600/8 bytes, or 0.45b decimal GB. Daily volume = 0.45b·hours; period volume = daily volume·days. Hours per day must be above 0 and at most 24; period length may be fractional. Optional quota 0 disables comparison; a positive quota is divided by daily volume. Enter the average stream rate, not the maximum advertised line rate.",
    "example": "Three hours a day at five megabits uses 6.75 GB daily and 202.5 GB a month — twice a 100 GB allowance.",
    "faq": [
      {
        "q": "Why is the rate divided by eight?",
        "a": "Because connections are measured in megabits and volume in megabytes, and a byte holds eight bits. Without the division the usage is overstated eightfold."
      },
      {
        "q": "Which stream rate should I enter?",
        "a": "Use a measured average stream bitrate or service statistics for the selected mode. Resolution alone does not determine bitrate; codec, scene content, settings and service policy affect it."
      },
      {
        "q": "Is background traffic counted?",
        "a": "No. Updates, sync and messengers add on top, so real usage is usually a little above the calculated figure."
      },
      {
        "q": "What does the allowance duration show?",
        "a": "How many days the allowance lasts at the same daily usage. A fractional number means it runs out partway through a day."
      },
      {
        "q": "Is the gigabyte decimal here?",
        "a": "Yes, 10⁹ bytes — the way operators quote an allowance. The gap against a binary gigabyte is about 7%."
      }
    ],
    "disclaimer": "Volume of the supplied constant average stream in decimal GB. Background traffic and operator accounting rules are not added automatically; the quota must use the same unit."
  },
  "uk": {
    "shortDescription": "Скільки гігабайтів набіжить за місяць за заданої швидкості потоку та годин на день.",
    "seoDescription": "Розрахуйте витрату інтернет-трафіку за місяць за швидкістю потоку та годинами перегляду на день, а також чи вистачить ліміту оператора.",
    "longDescription": "Оцінює обсяг заданого середнього потоку за введений період, а не лише за умовний місяць. Наприклад, 5Mbit/s протягом трьох годин щодня за 30 днів дає 202,5GB. Необов’язковий ліміт можна зіставити з тим самим обсягом; жоден типовий тариф або відеобітрейт не підставляється автоматично.",
    "howToUse": [
      "Введіть середній бітрейт у Mbit/s.",
      "Задайте години на день (понад 0, до 24) і фактичну кількість днів.",
      "За потреби введіть квоту в десяткових GB; 0 вимикає порівняння."
    ],
    "howItWorks": "За годину потік b Mbit/s передає b·10⁶·3600/8 байтів, тобто 0,45b десяткових GB. Обсяг за день = 0,45b·години, за період = добовий обсяг·дні. Години за день мають бути понад 0 і не більш ніж 24; тривалість може бути дробовою. Необов’язковий ліміт 0 вимикає порівняння; додатний ліміт ділиться на добовий обсяг. Вводьте середню швидкість потоку, а не максимальну швидкість тарифу.",
    "example": "5Mbit/s·3год/день·30днів дає 6,75GB/день і 202,5GB за період. Ліміт 100GB вистачить на 100/6,75≈14,8148 дня; перевищення за 30 днів — 102,5GB.",
    "faq": [
      {
        "q": "Скільки трафіку їсть відео?",
        "a": "За сталого потоку 5Mbit/s виходить 2,25GB за годину. Це приклад формули, а не норматив для певної роздільної здатності. Для свого відео введіть виміряну середню швидкість."
      },
      {
        "q": "Як зменшити витрату?",
        "a": "Для зменшення обсягу потрібен менший середній бітрейт або коротша тривалість. Сам перехід між позначками 1080p та 720p не задає універсального коефіцієнта; перевіряйте статистику конкретного потоку."
      },
      {
        "q": "Чи враховано фоновий трафік?",
        "a": "Ні. Рахується тільки потік із заданим середнім бітрейтом і тривалістю. Фонові оновлення, синхронізація та інші пристрої потрібно додати окремо або включити у виміряну сумарну швидкість."
      },
      {
        "q": "Чому лічильник оператора показує більше?",
        "a": "Можуть відрізнятися облік службових байтів, повторних передач, інших пристроїв і одиниці квоти. Модель не встановлює нормальну розбіжність у відсотках. Зіставляйте однаковий період і фактичні правила обліку."
      }
    ],
    "disclaimer": "Обсяг заданого сталого середнього потоку в десяткових GB. Фоновий трафік і правила обліку оператора автоматично не додаються; квота має бути в тій самій одиниці."
  },
  "de": {
    "shortDescription": "Wie viele Gigabyte im Monat zusammenkommen bei gegebener Streamrate und Stunden am Tag.",
    "seoDescription": "Berechne den monatlichen Datenverbrauch aus Streamrate und täglicher Nutzungsdauer und prüfe, ob dein Datenvolumen reicht.",
    "longDescription": "Rechnet die Menge aus, die sich bei gleichmäßiger Nutzung ansammelt: die Streamrate wird mit der Zeit multipliziert und nicht durch sie geteilt. Die Acht im Nenner rechnet Bit in Byte um, und genau sie fehlt am häufigsten — eine Leitung wird in Megabit gemessen, ein Datenvolumen in Gigabyte angegeben, und beides zu verwechseln liegt um genau den Faktor acht daneben. Trägst du ein Volumen ein, ergänzt der Rechner, wie lange es reicht und um wie viel es überschritten wird — er beantwortet also „reicht das den Monat“ und nicht nur „wie viele Gigabyte sind das“.",
    "howToUse": [
      "Trage die Streamrate ein: Standardqualität liegt bei 3–5 Mbit/s, 4K bei rund 25.",
      "Trage ein, wie viele Stunden am Tag der Stream oder das Gespräch läuft.",
      "Setze die Länge des Zeitraums — meist 30 oder 31 Tage.",
      "Ergänze dein Datenvolumen, um zu prüfen, ob es reicht."
    ],
    "howItWorks": "Ein Strom mit b Mbit/s überträgt pro Stunde b·10⁶·3600/8 Bytes, also 0,45b dezimale GB. Tagesvolumen = 0,45b·Stunden; Zeitraumvolumen = Tagesvolumen·Tage. Stunden pro Tag müssen über 0 und höchstens 24 sein; die Dauer darf gebrochen sein. Ein optionales Kontingent von 0 deaktiviert den Vergleich; ein positives wird durch das Tagesvolumen geteilt. Gib die mittlere Datenrate statt der maximalen Tarifrate ein.",
    "example": "Drei Stunden am Tag bei fünf Megabit brauchen 6,75 GB täglich und 202,5 GB im Monat — doppelt so viel wie ein Volumen von 100 GB.",
    "faq": [
      {
        "q": "Warum wird die Rate durch acht geteilt?",
        "a": "Weil Leitungen in Megabit gemessen werden und Datenmengen in Megabyte, und ein Byte hält acht Bit. Ohne die Division fällt der Verbrauch achtfach zu hoch aus."
      },
      {
        "q": "Welche Streamrate soll ich eintragen?",
        "a": "Nutze eine gemessene mittlere Datenrate oder die Dienststatistik des gewählten Modus. Die Auflösung allein legt die Rate nicht fest; Codec, Bildinhalt, Einstellungen und Dienstregeln beeinflussen sie."
      },
      {
        "q": "Zählt der Hintergrundverkehr mit?",
        "a": "Nein. Aktualisierungen, Abgleich und Messenger kommen obendrauf, der echte Verbrauch liegt deshalb meist etwas über der berechneten Zahl."
      },
      {
        "q": "Was zeigt die Dauer des Volumens?",
        "a": "Wie viele Tage das Volumen bei gleichem täglichem Verbrauch reicht. Eine gebrochene Zahl heißt, dass es mitten am Tag aufgebraucht ist."
      },
      {
        "q": "Ist das Gigabyte hier dezimal?",
        "a": "Ja, 10⁹ Byte — so, wie Anbieter ein Volumen angeben. Der Abstand zu einem binären Gigabyte liegt bei rund 7 %."
      }
    ],
    "disclaimer": "Volumen des angegebenen konstanten mittleren Datenstroms in dezimalen GB. Hintergrundverkehr und Anbieterregeln werden nicht automatisch ergänzt; das Kontingent muss dieselbe Einheit verwenden."
  },
  "es": {
    "shortDescription": "Cuántos gigabytes suma un mes con una tasa de transmisión y unas horas al día dadas.",
    "seoDescription": "Calcula el consumo mensual de datos de internet a partir de la tasa de transmisión y las horas diarias de visionado, y comprueba si tu tarifa lo cubre.",
    "longDescription": "Calcula el volumen que se acumula con un uso constante: la tasa de transmisión se multiplica por el tiempo, no se divide entre él. El ocho del denominador convierte bits en bytes, y eso es lo que más a menudo se pierde: una conexión se mide en megabits mientras que una tarifa se da en gigabytes, y confundirlos falla en un factor de exactamente ocho. Si introduces una tarifa, la calculadora añade cuánto dura y en cuánto se supera, respondiendo a «¿llegará a fin de mes?» y no solo a «¿cuántos gigabytes son?».",
    "howToUse": [
      "Introduce la tasa de transmisión: la calidad estándar son 3-5 Mbit/s y el 4K, unos 25.",
      "Introduce cuántas horas al día dura la reproducción o la llamada.",
      "Fija la duración del periodo, normalmente 30 o 31 días.",
      "Añade tu tarifa de datos para comprobar si basta."
    ],
    "howItWorks": "Una hora a b Mbit/s transfiere b·10⁶·3600/8 bytes, es decir, 0,45b GB decimales. Volumen diario = 0,45b·horas; volumen del período = volumen diario·días. Las horas diarias deben ser mayores que 0 y como máximo 24; la duración puede ser fraccionaria. La cuota opcional 0 desactiva la comparación; una cuota positiva se divide por el volumen diario. Introduce la tasa media del flujo, no la velocidad máxima contratada.",
    "example": "Tres horas al día a cinco megabits consumen 6,75 GB diarios y 202,5 GB al mes: el doble de una tarifa de 100 GB.",
    "faq": [
      {
        "q": "¿Por qué se divide la tasa entre ocho?",
        "a": "Porque las conexiones se miden en megabits y el volumen en megabytes, y un byte tiene ocho bits. Sin esa división el consumo sale ocho veces exagerado."
      },
      {
        "q": "¿Qué tasa de transmisión introduzco?",
        "a": "Usa la tasa media medida del flujo o las estadísticas del servicio. La resolución por sí sola no fija el bitrate: intervienen el códec, el contenido, la configuración y el servicio."
      },
      {
        "q": "¿Se cuenta el tráfico de fondo?",
        "a": "No. Las actualizaciones, la sincronización y los mensajeros suman aparte, así que el consumo real suele quedar algo por encima de la cifra calculada."
      },
      {
        "q": "¿Qué indica la duración de la tarifa?",
        "a": "Cuántos días dura la tarifa con el mismo consumo diario. Un número fraccionario significa que se agota a mitad de un día."
      },
      {
        "q": "¿El gigabyte de aquí es decimal?",
        "a": "Sí, 10⁹ bytes, tal como lo dan los operadores en una tarifa. La diferencia frente a un gigabyte binario ronda el 7 %."
      }
    ],
    "disclaimer": "Volumen del flujo medio constante indicado, en GB decimales. No se añaden automáticamente tráfico de fondo ni reglas del operador; la cuota debe usar la misma unidad."
  }
};
