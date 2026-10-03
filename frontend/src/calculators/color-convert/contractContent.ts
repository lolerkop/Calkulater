// Authored contract with individually retained effective legacy passages.
// AI review; human language and subject review remain pending.
export const contractContent = {
  "ru": {
    "shortDescription": "Перевод цвета из HEX в RGB и HSL с разбором по каналам.",
    "seoDescription": "Переведите шестнадцатеричный код цвета в rgb() и hsl(), посмотрите значения каналов и светлоту.",
    "longDescription": "Преобразует текстовый код sRGB из трёх или шести шестнадцатеричных цифр в RGB и HSL. Например, #F0A разворачивается в #FF00AA удвоением каждой цифры. RGB и развёрнутый HEX сохраняют исходные байты; HSL округляется для вывода. CSS-строки используют десятичную точку во всех языках, поэтому их можно копировать в таблицу стилей.",
    "howToUse": [
      "Введите HEX как текст: #2E86DE, 2E86DE или #F0A.",
      "Читайте точные RGB-байты и развёрнутый HEX.",
      "Копируйте CSS-строки RGB/HSL; округлённый HSL может немного изменить цвет при обратном переводе."
    ],
    "howItWorks": "Каналы r,g,b — целые байты от 0 до 255. Для HSL они делятся на 255: светлота L=(max+min)/2, насыщенность S=Δ/(1−|2L−1|) при Δ=max−min>0, тон определяется каналом максимума. При Δ=0 насыщенность равна нулю, а тон условно записывается как 0°. Светлота HSL не является физической яркостью или показателем контраста. Тон округляется до градуса, S и L — до двух знаков процента.",
    "example": "#2E86DE → rgb(46, 134, 222), округлённый CSS hsl(210, 72.73%, 52.55%). #F0A → #FF00AA → rgb(255, 0, 170). Десятичные точки в hsl() обязательны для записи CSS.",
    "faq": [
      {
        "q": "Почему #F0A превращается в #FF00AA?",
        "a": "Короткая запись разворачивается удвоением каждого знака — так устроен сам формат. Дописать нули было бы другим цветом: #F00A00 вместо #FF00AA."
      },
      {
        "q": "Обязательно ли ставить решётку?",
        "a": "Нет, она необязательна, и регистр букв тоже не важен. Подойдут и #2e86de, и 2E86DE."
      },
      {
        "q": "Что означает яркость в списке?",
        "a": "Это светлота из HSL, выраженная в процентах: 0 — чёрный, 100 — белый, около 50 — чистый насыщенный цвет. Она же стоит третьим числом в записи hsl()."
      },
      {
        "q": "Чем светлота HSL отличается от воспринимаемой яркости?",
        "a": "Светлота считается по формуле, одинаковой для всех каналов, а глаз воспринимает зелёный намного светлее синего. Поэтому два цвета с одинаковой светлотой HSL могут выглядеть по-разному, и для проверки контраста нужна отдельная мера."
      },
      {
        "q": "Теряется ли точность при переводе?",
        "a": "RGB и развёрнутый HEX сохраняют исходные байты точно. HSL округлён: тон до целого градуса, насыщенность и светлота до двух знаков. Обратное преобразование округлённого HSL может дать другие RGB-байты."
      }
    ],
    "disclaimer": "Поддерживаются только непрозрачные коды HEX из 3/6 цифр в sRGB. Коды 4/8 цифр с альфа-каналом, вход RGB/HSL, цветовые профили и проверка доступности контраста не рассчитываются."
  },
  "en": {
    "shortDescription": "Convert a colour from HEX to RGB and HSL with a per-channel breakdown.",
    "seoDescription": "Convert a hexadecimal colour code into rgb() and hsl(), and see the channel values and lightness.",
    "longDescription": "Convert a three- or six-digit sRGB hexadecimal text code to RGB and HSL. Each digit is repeated when expanding a short code: #F0A becomes #FF00AA. RGB and expanded HEX preserve the original bytes; HSL is rounded for display. CSS strings use a decimal point in every language so they can be copied into a stylesheet.",
    "howToUse": [
      "Enter HEX text such as #2E86DE, 2E86DE or #F0A.",
      "Read the exact RGB bytes and expanded HEX.",
      "Copy the RGB/HSL CSS strings; rounded HSL may slightly change the colour when converted back."
    ],
    "howItWorks": "Channels r,g,b are integer bytes from 0 to 255. HSL uses channels divided by 255: lightness L=(max+min)/2, saturation S=Δ/(1−|2L−1|) for Δ=max−min>0, and hue follows the maximum channel. When Δ=0 saturation is zero and hue is conventionally written as 0°. HSL lightness is neither physical luminance nor a contrast score. Hue is rounded to degrees, S and L to two percentage decimals.",
    "example": "#2E86DE → rgb(46, 134, 222), rounded CSS hsl(210, 72.73%, 52.55%). #F0A → #FF00AA → rgb(255, 0, 170). Decimal points in hsl() are part of CSS syntax.",
    "faq": [
      {
        "q": "Why does #F0A become #FF00AA?",
        "a": "The short form expands by doubling each character — that is how the format is defined. Padding with zeros would give a different colour: #F00A00 rather than #FF00AA."
      },
      {
        "q": "Is the hash required?",
        "a": "No, it is optional, and letter case does not matter either. Both #2e86de and 2E86DE work."
      },
      {
        "q": "What does the lightness row mean?",
        "a": "It is the HSL lightness as a percentage: 0 is black, 100 is white, and around 50 is a pure saturated colour. It is also the third number in the hsl() notation."
      },
      {
        "q": "How does HSL lightness differ from perceived brightness?",
        "a": "Lightness uses one formula for every channel, while the eye sees green as far lighter than blue. Two colours with the same HSL lightness can therefore look quite different, and checking contrast needs a separate measure."
      },
      {
        "q": "Is precision lost in the conversion?",
        "a": "RGB and expanded HEX preserve the original bytes exactly. HSL is rounded to whole hue degrees and two decimals for saturation/lightness. Converting that rounded HSL back may produce different RGB bytes."
      }
    ],
    "disclaimer": "Only opaque three-/six-digit sRGB HEX input is supported. Four-/eight-digit alpha codes, RGB/HSL input, colour profiles and accessible-contrast assessment are outside this calculator."
  },
  "uk": {
    "shortDescription": "Переведення кольору з HEX у RGB та HSL з розбором за каналами.",
    "seoDescription": "Переведіть шістнадцятковий код кольору у rgb() та hsl(), подивіться значення каналів і світлоту.",
    "longDescription": "Перетворює текстовий код sRGB із трьох або шести шістнадцяткових цифр на RGB та HSL. Кожна цифра короткого коду подвоюється: #F0A стає #FF00AA. RGB і розгорнутий HEX зберігають початкові байти; HSL округлюється для виведення. CSS-рядки в усіх мовах мають десяткову крапку, тому їх можна скопіювати у стилі.",
    "howToUse": [
      "Введіть HEX як текст: #2E86DE, 2E86DE або #F0A.",
      "Прочитайте точні RGB-байти та розгорнутий HEX.",
      "Скопіюйте CSS-рядки RGB/HSL; округлений HSL може трохи змінити колір при зворотному перетворенні."
    ],
    "howItWorks": "Канали r,g,b — цілі байти від 0 до 255. Для HSL вони діляться на 255: світлота L=(max+min)/2, насиченість S=Δ/(1−|2L−1|) за Δ=max−min>0, тон визначає максимальний канал. За Δ=0 насиченість нульова, а тон умовно записується як 0°. Світлота HSL не є фізичною яскравістю чи оцінкою контрасту. Тон округлюється до градуса, S та L — до двох десяткових знаків відсотка.",
    "example": "#2E86DE → rgb(46, 134, 222), округлений CSS hsl(210, 72.73%, 52.55%). #F0A → #FF00AA → rgb(255, 0, 170). Десяткові крапки в hsl() — частина синтаксису CSS.",
    "faq": [
      {
        "q": "Навіщо потрібен HSL, якщо є RGB?",
        "a": "Бо в ньому зручно міняти колір осмислено. Зробити відтінок світлішим у HSL — це змінити одне число, тоді як у RGB довелося б підбирати всі три канали."
      },
      {
        "q": "Що означають скорочені HEX-коди?",
        "a": "Запис #F0A розгортається у #FF00AA: кожен знак подвоюється. Це скорочення працює лише тоді, коли в кожному каналі обидва знаки однакові."
      },
      {
        "q": "Що додає четверта пара знаків?",
        "a": "У CSS коди з чотирьох або восьми цифр містять альфа-канал; 80 означає непрозорість 128/255≈50,2%. Цей інструмент їх не приймає: введення обмежене непрозорими кодами з трьох або шести цифр."
      },
      {
        "q": "Чому колір на екранах відрізняється?",
        "a": "Через різні кольорові профілі й калібрування. Один і той самий HEX-код на sRGB і на широкому охопленні виглядатиме по-різному — тому для друку й використовують інші системи."
      }
    ],
    "disclaimer": "Підтримуються лише непрозорі HEX-коди sRGB із 3/6 цифр. Коди 4/8 цифр з альфа-каналом, введення RGB/HSL, колірні профілі та оцінка доступності контрасту тут не розраховуються."
  },
  "de": {
    "shortDescription": "Eine Farbe von HEX nach RGB und HSL umrechnen, mit Aufschlüsselung je Kanal.",
    "seoDescription": "Rechne einen hexadezimalen Farbcode in rgb() und hsl() um und sieh die Kanalwerte und die Helligkeit.",
    "longDescription": "Wandelt einen sRGB-Hexcode aus drei oder sechs Zeichen in RGB und HSL um. Im Kurzcode wird jede Ziffer verdoppelt: #F0A wird zu #FF00AA. RGB und der ausgeschriebene HEX-Code behalten die ursprünglichen Bytes; HSL wird für die Anzeige gerundet. CSS-Zeichenfolgen verwenden in jeder Sprache einen Dezimalpunkt und lassen sich in ein Stylesheet kopieren.",
    "howToUse": [
      "Gib HEX als Text ein: #2E86DE, 2E86DE oder #F0A.",
      "Lies die exakten RGB-Bytes und den vollständigen HEX-Code ab.",
      "Kopiere die CSS-Zeichenfolgen RGB/HSL; gerundetes HSL kann bei der Rückumwandlung den Farbwert leicht ändern."
    ],
    "howItWorks": "Die Kanäle r,g,b sind ganze Bytes von 0 bis 255. Für HSL werden sie durch 255 geteilt: Helligkeit L=(max+min)/2, Sättigung S=Δ/(1−|2L−1|) bei Δ=max−min>0; der maximale Kanal bestimmt den Farbton. Bei Δ=0 ist die Sättigung null und der Farbton wird konventionell als 0° geschrieben. HSL-Helligkeit ist weder physikalische Leuchtdichte noch ein Kontrastwert. Der Farbton wird auf Grad, S und L auf zwei Prozentnachkommastellen gerundet.",
    "example": "#2E86DE → rgb(46, 134, 222), gerundetes CSS hsl(210, 72.73%, 52.55%). #F0A → #FF00AA → rgb(255, 0, 170). Die Dezimalpunkte in hsl() gehören zur CSS-Syntax.",
    "faq": [
      {
        "q": "Warum wird aus #F0A das #FF00AA?",
        "a": "Die kurze Form wird durch Verdoppeln jedes Zeichens erweitert — so ist das Format festgelegt. Mit Nullen aufzufüllen ergäbe eine andere Farbe: #F00A00 statt #FF00AA."
      },
      {
        "q": "Ist das Rautezeichen nötig?",
        "a": "Nein, es ist freiwillig, und auch die Groß- und Kleinschreibung spielt keine Rolle. Sowohl #2e86de als auch 2E86DE funktionieren."
      },
      {
        "q": "Was bedeutet die Zeile zur Helligkeit?",
        "a": "Sie ist die HSL-Helligkeit in Prozent: 0 ist Schwarz, 100 ist Weiß, und rund 50 ist eine reine gesättigte Farbe. Sie ist zugleich die dritte Zahl in der hsl()-Schreibweise."
      },
      {
        "q": "Wie unterscheidet sich die HSL-Helligkeit von der empfundenen?",
        "a": "Die Helligkeit nutzt für jeden Kanal dieselbe Formel, während das Auge Grün weit heller sieht als Blau. Zwei Farben mit gleicher HSL-Helligkeit können deshalb recht verschieden aussehen, und für Kontrast braucht es ein eigenes Maß."
      },
      {
        "q": "Geht bei der Umrechnung Genauigkeit verloren?",
        "a": "RGB und vollständiges HEX behalten die ursprünglichen Bytes exakt. HSL wird auf ganze Farbton-Grade und zwei Nachkommastellen für Sättigung/Helligkeit gerundet. Eine Rückumwandlung kann andere RGB-Bytes liefern."
      }
    ],
    "disclaimer": "Unterstützt werden nur deckende sRGB-HEX-Eingaben mit 3/6 Ziffern. Alpha-Codes mit 4/8 Ziffern, RGB/HSL-Eingaben, Farbprofile und barrierefreie Kontrastbewertungen werden nicht berechnet."
  },
  "es": {
    "shortDescription": "Convierte un color de HEX a RGB y HSL con el desglose por canales.",
    "seoDescription": "Convierte un código de color hexadecimal en rgb() y hsl(), y consulta los valores de los canales y la luminosidad.",
    "longDescription": "Convierte un código hexadecimal sRGB de tres o seis cifras en RGB y HSL. Cada cifra corta se repite: #F0A se convierte en #FF00AA. RGB y el HEX completo conservan los bytes originales; HSL se redondea para mostrarlo. Las cadenas CSS usan punto decimal en todos los idiomas y pueden copiarse a una hoja de estilos.",
    "howToUse": [
      "Introduce HEX como texto: #2E86DE, 2E86DE o #F0A.",
      "Lee los bytes RGB exactos y el HEX completo.",
      "Copia las cadenas CSS RGB/HSL; el HSL redondeado puede alterar ligeramente el color al convertirlo de nuevo."
    ],
    "howItWorks": "Los canales r,g,b son bytes enteros entre 0 y 255. HSL divide los canales por 255: luminosidad L=(max+min)/2, saturación S=Δ/(1−|2L−1|) para Δ=max−min>0; el canal máximo determina el tono. Si Δ=0, la saturación es cero y el tono se escribe por convenio como 0°. La luminosidad HSL no es luminancia física ni una puntuación de contraste. El tono se redondea a grados y S y L a dos decimales porcentuales.",
    "example": "#2E86DE → rgb(46, 134, 222), CSS redondeado hsl(210, 72.73%, 52.55%). #F0A → #FF00AA → rgb(255, 0, 170). Los puntos decimales de hsl() forman parte de la sintaxis CSS.",
    "faq": [
      {
        "q": "¿Por qué #F0A pasa a ser #FF00AA?",
        "a": "La forma corta se expande duplicando cada carácter: así está definido el formato. Rellenar con ceros daría otro color: #F00A00 en vez de #FF00AA."
      },
      {
        "q": "¿Hace falta la almohadilla?",
        "a": "No, es opcional, y tampoco importan las mayúsculas. Tanto #2e86de como 2E86DE funcionan."
      },
      {
        "q": "¿Qué significa la fila de luminosidad?",
        "a": "Es la luminosidad HSL en porcentaje: 0 es negro, 100 es blanco y alrededor de 50 es un color puro saturado. Es también el tercer número de la notación hsl()."
      },
      {
        "q": "¿En qué se diferencia la luminosidad HSL del brillo percibido?",
        "a": "La luminosidad usa una misma fórmula para todos los canales, mientras que el ojo ve el verde mucho más claro que el azul. Dos colores con la misma luminosidad HSL pueden verse bastante distintos, y comprobar el contraste exige otra medida."
      },
      {
        "q": "¿Se pierde precisión en la conversión?",
        "a": "RGB y HEX completo conservan los bytes exactos. HSL redondea el tono a grados enteros y saturación/luminosidad a dos decimales. Convertir ese HSL redondeado de nuevo puede producir otros bytes RGB."
      }
    ],
    "disclaimer": "Solo se admite HEX sRGB opaco de 3/6 cifras. Los códigos alfa de 4/8 cifras, la entrada RGB/HSL, los perfiles de color y la evaluación de contraste accesible quedan fuera de esta calculadora."
  }
};
