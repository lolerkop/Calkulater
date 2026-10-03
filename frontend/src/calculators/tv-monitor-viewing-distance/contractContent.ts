// Authored contract with individually retained effective legacy passages.
// AI review; human language and subject review remain pending.
export const contractContent = {
  "ru": {
    "shortDescription": "Геометрические расстояния для углов экрана 40°/30° и условного пикселя 1′.",
    "seoDescription": "Сравните расстояния по диагонали, пропорции экрана и выбранным углам 40°/30°. Оценка одного пикселя 1′ не является нормой комфорта или зрения.",
    "longDescription": "Геометрическое сравнение расстояний для горизонтальных углов экрана 40° и 30°. Эти два выбранных угла не объявляются универсальным комфортом или стандартом THX/SMPTE. Третья оценка использует условный угловой размер одного пикселя 1′. Она описывает геометрию, а не медицинский предел зрения, пользу 4K или безопасное расстояние до экрана.",
    "howToUse": [
      "Введите диагональ активного экрана в дюймах и его пропорцию.",
      "Задайте целое число вертикальных пиксельных строк, например 2160 для 3840×2160.",
      "Сравните расстояния для 40° и 30° отдельно от условной оценки пикселя 1′."
    ],
    "howItWorks": "Диагональ переводится в см множителем 2,54. Для пропорции a:b ширина W=D·a/√(a²+b²), высота H=D·b/√(a²+b²). Расстояние для горизонтального угла θ: W/[2tan(θ/2)], затем см переводятся в метры. Оценка одного пикселя: (H/число строк)·3438/100м, где 3438 — округлённое малоугловое приближение одной угловой минуты. Пропорция 21:9 здесь буквально 21/9.",
    "example": "Экран 55″, 16:9, 2160 строк: ширина около 121,76см, высота 68,49см. Для 40° расстояние 1,673м, для 30° — 2,272м; модель пикселя 1′ даёт 1,09м. Последнее число не гарантирует, что различия разрешения станут невидимы.",
    "faq": [
      {
        "q": "Почему расстояния для 40° и 30° различаются?",
        "a": "При той же ширине больший горизонтальный угол требует меньшего расстояния. Это два сценария одной формулы, а не универсальные рекомендации комфорта или нормы здоровья глаз."
      },
      {
        "q": "Что означает оценка пикселя 1′?",
        "a": "Один пиксель занимает условную угловую минуту по малоугловой модели. Она не учитывает зрение человека, контраст, субпиксели, обработку изображения или характер сцены."
      },
      {
        "q": "Решает ли эта оценка, нужно ли 4K?",
        "a": "Нет. Польза разрешения зависит от материала, масштабирования, расстояния и зрителя. Нельзя объявлять разницу 4K и FullHD невидимой по единственному геометрическому числу."
      },
      {
        "q": "Почему используется ширина, а не диагональ?",
        "a": "Введён горизонтальный угол поля зрения. Диагональ сначала задаёт ширину через пропорцию экрана. При одинаковой диагонали ширина 4:3 и 21:9 различается."
      }
    ],
    "disclaimer": "Геометрическая модель выбранных углов, не рекомендация офтальмолога, THX или SMPTE. Оценка пикселя не является измерением зрения или обещанием невидимости деталей."
  },
  "en": {
    "shortDescription": "Geometric distances for 40°/30° screen angles and an assumed 1′ pixel.",
    "seoDescription": "Compare distances from diagonal, ratio and chosen 40°/30° angles. A one-pixel 1′ estimate is not a comfort or vision standard.",
    "longDescription": "A geometric comparison of distances for horizontal screen angles of 40° and 30°. These chosen angles are not presented as universal comfort settings or THX/SMPTE standards. A third estimate assumes one pixel subtends 1′. It describes geometry, not a medical vision threshold, the benefit of 4K or a safe viewing distance.",
    "howToUse": [
      "Enter the active screen diagonal in inches and its ratio.",
      "Set the integer vertical pixel count, such as 2160 for 3840×2160.",
      "Compare the 40°/30° distances separately from the assumed 1′-pixel estimate."
    ],
    "howItWorks": "Diagonal is converted to cm by 2.54. For ratio a:b, width W=D·a/√(a²+b²) and height H=D·b/√(a²+b²). Distance at horizontal angle θ is W/[2tan(θ/2)], then cm are converted to metres. The one-pixel estimate is (H/vertical lines)·3438/100m; 3438 is a rounded small-angle factor for one arcminute. Ratio 21:9 here means literally 21/9.",
    "example": "A 55″, 16:9 screen with 2160 vertical lines is about 121.76cm wide and 68.49cm high. The 40° distance is 1.673m and the 30° distance 2.272m; the 1′-pixel model gives 1.09m. The last number does not guarantee invisible resolution differences.",
    "faq": [
      {
        "q": "Why do the 40° and 30° distances differ?",
        "a": "For the same width, a wider horizontal angle requires a shorter distance. These are two cases of one formula, not universal comfort or eye-health recommendations."
      },
      {
        "q": "What does the 1′-pixel estimate mean?",
        "a": "One pixel occupies an assumed arcminute in a small-angle model. It does not account for individual vision, contrast, subpixels, image processing or scene content."
      },
      {
        "q": "Does this estimate decide whether 4K is needed?",
        "a": "No. Resolution benefit depends on content, scaling, distance and the viewer. A single geometric number cannot establish that 4K/FullHD differences are invisible."
      },
      {
        "q": "Why use width rather than diagonal?",
        "a": "The model uses horizontal field of view. The diagonal first determines width through the screen ratio. Equal diagonals with 4:3 and 21:9 have different widths."
      }
    ],
    "disclaimer": "Geometric model of chosen angles, not an ophthalmic, THX or SMPTE recommendation. The pixel estimate is not a vision measurement or guarantee of invisible detail."
  },
  "uk": {
    "shortDescription": "Геометричні відстані для кутів екрана 40°/30° і умовного пікселя 1′.",
    "seoDescription": "Порівняйте відстані за діагоналлю, пропорцією й вибраними кутами 40°/30°. Оцінка пікселя 1′ не є нормою комфорту чи зору.",
    "longDescription": "Геометричне порівняння відстаней для горизонтальних кутів екрана 40° і 30°. Ці вибрані кути не оголошуються універсальним комфортом або стандартом THX/SMPTE. Третя оцінка припускає кутовий розмір одного пікселя 1′. Це геометрія, а не медична межа зору, користь 4K чи безпечна відстань до екрана.",
    "howToUse": [
      "Введіть діагональ активного екрана в дюймах і його пропорцію.",
      "Задайте цілу кількість вертикальних піксельних рядків, наприклад 2160 для 3840×2160.",
      "Порівнюйте відстані для 40°/30° окремо від умовної оцінки пікселя 1′."
    ],
    "howItWorks": "Діагональ переводиться в см множником 2,54. Для пропорції a:b ширина W=D·a/√(a²+b²), висота H=D·b/√(a²+b²). Відстань для горизонтального кута θ: W/[2tan(θ/2)], далі см переводяться в метри. Оцінка одного пікселя: (H/кількість рядків)·3438/100м; 3438 — округлений малокутовий множник для однієї кутової мінути. Пропорція 21:9 тут буквально 21/9.",
    "example": "Екран 55″, 16:9, 2160 рядків: ширина близько 121,76см, висота 68,49см. Відстань для 40° — 1,673м, для 30° — 2,272м; модель пікселя 1′ дає 1,09м. Останнє число не гарантує непомітності відмінностей роздільної здатності.",
    "faq": [
      {
        "q": "Чому відстані для 40° і 30° відрізняються?",
        "a": "За тієї самої ширини більший горизонтальний кут потребує меншої відстані. Це два випадки однієї формули, а не універсальні рекомендації комфорту чи здоров’я очей."
      },
      {
        "q": "Що означає оцінка пікселя 1′?",
        "a": "Один піксель займає умовну кутову мінуту в малокутовій моделі. Вона не враховує індивідуальний зір, контраст, субпікселі, обробку зображення чи зміст сцени."
      },
      {
        "q": "Чи визначає оцінка, чи потрібне 4K?",
        "a": "Ні. Користь роздільної здатності залежить від матеріалу, масштабування, відстані та глядача. Одне геометричне число не доводить непомітності відмінностей 4K/FullHD."
      },
      {
        "q": "Чому використано ширину, а не діагональ?",
        "a": "Модель задає горизонтальний кут поля зору. Діагональ спочатку визначає ширину через пропорцію екрана. Однакові діагоналі з 4:3 і 21:9 мають різну ширину."
      }
    ],
    "disclaimer": "Геометрична модель вибраних кутів, не рекомендація офтальмолога, THX чи SMPTE. Оцінка пікселя не вимірює зір і не гарантує непомітності деталей."
  },
  "de": {
    "shortDescription": "Geometrische Abstände für Bildschirmwinkel 40°/30° und einen angenommenen 1′-Pixel.",
    "seoDescription": "Vergleiche Abstände anhand Diagonale, Seitenverhältnis und gewählten Winkeln 40°/30°. Die 1′-Pixelschätzung ist keine Komfort- oder Sehnorm.",
    "longDescription": "Geometrischer Vergleich von Abständen für horizontale Bildschirmwinkel von 40° und 30°. Diese gewählten Winkel gelten hier weder als universelle Komfortwerte noch als THX/SMPTE-Standards. Eine dritte Schätzung setzt einen Pixelwinkel von 1′ voraus. Sie beschreibt Geometrie, keine medizinische Sehgrenze, den Nutzen von 4K oder einen sicheren Sehabstand.",
    "howToUse": [
      "Gib die Diagonale der aktiven Bildschirmfläche in Zoll und ihr Seitenverhältnis ein.",
      "Trage die ganzzahlige vertikale Pixelzahl ein, etwa 2160 für 3840×2160.",
      "Vergleiche die 40°/30°-Abstände getrennt von der angenommenen 1′-Pixelschätzung."
    ],
    "howItWorks": "Die Diagonale wird mit 2,54 in cm umgerechnet. Beim Verhältnis a:b gilt Breite W=D·a/√(a²+b²), Höhe H=D·b/√(a²+b²). Abstand bei horizontalem Winkel θ: W/[2tan(θ/2)], anschließend cm in Meter umrechnen. Die Pixelschätzung ist (H/Zeilenzahl)·3438/100m; 3438 ist ein gerundeter Kleinwinkelfaktor für eine Bogenminute. 21:9 bedeutet hier wörtlich 21/9.",
    "example": "Ein Bildschirm mit 55″, 16:9 und 2160 Zeilen ist etwa 121,76cm breit und 68,49cm hoch. Für 40° beträgt der Abstand 1,673m, für 30° 2,272m; das 1′-Pixelmodell ergibt 1,09m. Letzteres garantiert keine unsichtbaren Auflösungsunterschiede.",
    "faq": [
      {
        "q": "Warum unterscheiden sich die Abstände für 40° und 30°?",
        "a": "Bei gleicher Breite verlangt ein größerer horizontaler Winkel einen kürzeren Abstand. Das sind zwei Fälle derselben Formel, keine universellen Komfort- oder Augengesundheitsregeln."
      },
      {
        "q": "Was bedeutet die Pixelschätzung für 1′?",
        "a": "Ein Pixel nimmt im Kleinwinkelmodell eine angenommene Bogenminute ein. Individuelles Sehvermögen, Kontrast, Subpixel, Bildverarbeitung und Bildinhalt werden nicht berücksichtigt."
      },
      {
        "q": "Entscheidet die Schätzung über den Nutzen von 4K?",
        "a": "Nein. Der Nutzen hängt von Inhalt, Skalierung, Abstand und Betrachter ab. Eine einzelne geometrische Zahl belegt nicht, dass Unterschiede zwischen 4K und FullHD unsichtbar sind."
      },
      {
        "q": "Warum wird die Breite statt der Diagonale verwendet?",
        "a": "Das Modell beschreibt das horizontale Sichtfeld. Aus der Diagonale wird über das Seitenverhältnis zunächst die Breite bestimmt. Gleiche Diagonalen bei 4:3 und 21:9 ergeben verschiedene Breiten."
      }
    ],
    "disclaimer": "Geometrisches Modell gewählter Winkel, keine augenärztliche, THX- oder SMPTE-Empfehlung. Die Pixelschätzung misst kein Sehvermögen und garantiert keine unsichtbaren Details."
  },
  "es": {
    "shortDescription": "Distancias geométricas para ángulos de pantalla de 40°/30° y un píxel supuesto de 1′.",
    "seoDescription": "Compara distancias con diagonal, proporción y ángulos elegidos de 40°/30°. La estimación de píxel de 1′ no es una norma de comodidad o visión.",
    "longDescription": "Comparación geométrica de distancias para ángulos horizontales de pantalla de 40° y 30°. Los ángulos elegidos no se presentan como comodidad universal ni normas THX/SMPTE. Una tercera estimación supone que un píxel ocupa 1′. Describe geometría, no un umbral médico de visión, la utilidad de 4K ni una distancia segura.",
    "howToUse": [
      "Introduce la diagonal del área activa en pulgadas y su proporción.",
      "Indica el número entero de líneas verticales, por ejemplo 2160 para 3840×2160.",
      "Compara las distancias de 40°/30° por separado de la estimación supuesta del píxel de 1′."
    ],
    "howItWorks": "La diagonal se convierte a cm multiplicando por 2,54. Para a:b, anchura W=D·a/√(a²+b²) y altura H=D·b/√(a²+b²). Distancia con ángulo horizontal θ: W/[2tan(θ/2)], convirtiendo después cm a metros. La estimación por píxel es (H/líneas verticales)·3438/100m; 3438 es un factor aproximado de ángulo pequeño para un minuto de arco. Aquí 21:9 significa literalmente 21/9.",
    "example": "Una pantalla de 55″, 16:9 y 2160 líneas mide unos 121,76cm de ancho y 68,49cm de alto. A 40° corresponde 1,673m y a 30° 2,272m; el modelo de píxel de 1′ da 1,09m. Esta última cifra no garantiza que las diferencias de resolución sean invisibles.",
    "faq": [
      {
        "q": "¿Por qué difieren las distancias de 40° y 30°?",
        "a": "Con la misma anchura, un ángulo horizontal mayor exige una distancia menor. Son dos casos de la misma fórmula, no reglas universales de comodidad ni salud ocular."
      },
      {
        "q": "¿Qué significa la estimación de píxel de 1′?",
        "a": "Un píxel ocupa un minuto de arco supuesto en un modelo de ángulo pequeño. No contempla visión individual, contraste, subpíxeles, procesado ni contenido."
      },
      {
        "q": "¿Decide la estimación si hace falta 4K?",
        "a": "No. La utilidad depende del material, escalado, distancia y espectador. Un único número geométrico no demuestra que las diferencias 4K/FullHD sean invisibles."
      },
      {
        "q": "¿Por qué se usa la anchura y no la diagonal?",
        "a": "El modelo usa un campo de visión horizontal. La proporción permite obtener primero la anchura a partir de la diagonal. Las diagonales iguales de 4:3 y 21:9 tienen anchuras diferentes."
      }
    ],
    "disclaimer": "Modelo geométrico de ángulos elegidos, no recomendación oftalmológica, THX ni SMPTE. La estimación del píxel no mide la visión ni garantiza detalles invisibles."
  }
};
