// Authored contract with individually retained effective legacy passages.
// AI review; human language and subject review remain pending.
export const contractContent = {
  "ru": {
    "shortDescription": "Плотность пикселей экрана по разрешению и диагонали.",
    "seoDescription": "Рассчитайте плотность пикселей экрана (PPI) по разрешению и диагонали в дюймах, а также размер одного пикселя.",
    "longDescription": "Вычисляет геометрическую плотность пикселей активной области по разрешению и диагонали в дюймах. Для прямоугольного экрана с квадратными пикселями диагональ сетки находится по теореме Пифагора. Рядом показан шаг одного пикселя в миллиметрах. Эти числа не определяют сами по себе читаемость текста или невидимость пикселей.",
    "howToUse": [
      "Введите разрешение экрана в пикселях.",
      "Укажите диагональ в дюймах.",
      "Прочитайте плотность пикселей и размер одного пикселя."
    ],
    "howItWorks": "Диагональ пиксельной сетки Dpx=√(W²+H²). Плотность PPI=Dpx/Din, шаг пикселя в мм=25,4/PPI. W и H — положительные безопасные целые, диагональ в дюймах — положительное конечное число. Модель предполагает квадратные пиксели и активную прямоугольную область. Число точек принтера DPI по этим входам не определяется.",
    "example": "Экран 1920×1080 с диагональю 15,6 дюйма имеет плотность 141,21 ppi.",
    "faq": [
      {
        "q": "Чем PPI отличается от DPI?",
        "a": "Считаются они одинаково, но PPI описывает пиксели экрана, а DPI — точки печати. Точка принтера и пиксель монитора устроены по-разному, поэтому переносить одно число на другое напрямую нельзя."
      },
      {
        "q": "Почему одно и то же разрешение выглядит по-разному?",
        "a": "При одинаковых 1920×1080 диагональ 15,6″ даёт около 141,21ppi, а 40″ — 55,07ppi. Физический шаг пикселя различается; воспринимаемая детализация также зависит от расстояния, зрения и содержимого."
      },
      {
        "q": "Какая плотность считается достаточной?",
        "a": "Зависит от расстояния до экрана: телефон держат близко, и ему нужно больше, телевизор смотрят издалека, и ему хватает меньшего. Универсального порога нет."
      },
      {
        "q": "Что показывает размер пикселя?",
        "a": "Сторону одного пикселя в миллиметрах. По ней удобно прикинуть, будет ли различима тонкая линия или мелкий шрифт."
      }
    ],
    "disclaimer": "Геометрия квадратных пикселей активной области экрана. Не оценивает зрение, читабельность, субпиксельную структуру или качество печати."
  },
  "en": {
    "shortDescription": "Screen pixel density from the resolution and the diagonal.",
    "seoDescription": "Calculate screen pixel density (PPI) from the resolution and the diagonal in inches, plus the size of one pixel.",
    "longDescription": "Calculate geometric pixel density of the active display from resolution and diagonal in inches. For a rectangular screen with square pixels, the grid diagonal follows Pythagoras. The result also shows one-pixel pitch in millimetres. These figures alone do not determine text readability or invisible pixels.",
    "howToUse": [
      "Enter the screen resolution in pixels.",
      "Give the diagonal in inches.",
      "Read the pixel density and the size of one pixel."
    ],
    "howItWorks": "Pixel-grid diagonal Dpx=√(W²+H²). Density PPI=Dpx/Din and pixel pitch in mm=25.4/PPI. W and H are positive safe integers; diagonal in inches is a positive finite number. The model assumes square pixels and the active rectangular area. Printer DPI cannot be determined from these inputs.",
    "example": "A 1920×1080 screen with a 15.6-inch diagonal has a density of 141.21 ppi.",
    "faq": [
      {
        "q": "How does PPI differ from DPI?",
        "a": "The arithmetic is the same, but PPI describes screen pixels and DPI printed dots. A printer dot and a monitor pixel work differently, so one figure cannot be carried over to the other."
      },
      {
        "q": "Why does the same resolution look different?",
        "a": "At the same 1920×1080 resolution, 15.6″ gives about 141.21ppi and 40″ gives 55.07ppi. Physical pixel pitch differs; perceived detail also depends on distance, vision and content."
      },
      {
        "q": "What density is enough?",
        "a": "It depends on viewing distance: a phone is held close and needs more, a television is watched from afar and needs less. There is no universal threshold."
      },
      {
        "q": "What does the pixel size show?",
        "a": "The side of one pixel in millimetres. It is a handy way to judge whether a thin line or small type will be legible."
      }
    ],
    "disclaimer": "Square-pixel geometry of the active display area. Vision, readability, subpixel structure and print quality are not assessed."
  },
  "uk": {
    "shortDescription": "Щільність пікселів екрана за роздільною здатністю та діагоналлю.",
    "seoDescription": "Обчисліть щільність пікселів екрана (PPI) за роздільною здатністю та діагоналлю.",
    "longDescription": "Обчислює геометричну щільність активної області за роздільною здатністю й діагоналлю в дюймах. Для прямокутного екрана з квадратними пікселями діагональ сітки знаходиться за теоремою Піфагора. Поруч показано крок пікселя в міліметрах. Ці числа самі по собі не визначають читабельність чи непомітність пікселів.",
    "howToUse": [
      "Введіть роздільну здатність по ширині й висоті.",
      "Введіть діагональ екрана в дюймах.",
      "Прочитайте щільність і фізичний розмір пікселя."
    ],
    "howItWorks": "Діагональ піксельної сітки Dpx=√(W²+H²). Щільність PPI=Dpx/Din, крок пікселя в мм=25,4/PPI. W та H — додатні безпечні цілі, діагональ у дюймах — додатне скінченне число. Модель передбачає квадратні пікселі й активну прямокутну область. DPI принтера за цими входами не визначається.",
    "example": "Екран 1920 × 1080 з діагоналлю 15,6 дюйма має щільність 141,21 ppi.",
    "faq": [
      {
        "q": "Яка щільність вважається високою?",
        "a": "Універсальної достатньої щільності немає. PPI описує лише геометрію сітки; читабельність і сприйняття залежать від відстані, розміру тексту, зору та вмісту. Цей розрахунок не встановлює вимог до здоров’я очей."
      },
      {
        "q": "Чим PPI відрізняється від DPI?",
        "a": "PPI — кількість пікселів на дюйм екрана, DPI — точок на дюйм друку. Цей інструмент обчислює лише PPI. Одна точка принтера не обов’язково відповідає одному пікселю зображення."
      },
      {
        "q": "З якої відстані пікселі непомітні?",
        "a": "Можна окремо задати умовний кутовий розмір пікселя, але він не гарантує непомітності. Наприклад, модель однієї кутової мінути для 141ppi дає близько 0,62м. Це геометричне припущення, не перевірка гостроти зору."
      },
      {
        "q": "Чи потрібна висока щільність для телевізора?",
        "a": "Однаковий PPI не означає однакове сприйняття з різних відстаней. Калькулятор дає щільність і крок пікселя, але не вирішує, чи потрібна певна роздільна здатність конкретному глядачеві."
      }
    ],
    "disclaimer": "Геометрія квадратних пікселів активної області екрана. Зір, читабельність, субпіксельна структура та якість друку не оцінюються."
  },
  "de": {
    "shortDescription": "Pixeldichte eines Bildschirms aus Auflösung und Diagonale.",
    "seoDescription": "Berechne die Pixeldichte eines Bildschirms (PPI) aus Auflösung und Diagonale in Zoll, dazu die Größe eines Pixels.",
    "longDescription": "Berechnet die geometrische Pixeldichte der aktiven Fläche aus Auflösung und Diagonale in Zoll. Bei einem rechteckigen Bildschirm mit quadratischen Pixeln folgt die Rasterdiagonale aus Pythagoras. Daneben steht der Pixelabstand in Millimetern. Diese Zahlen allein bestimmen weder Textlesbarkeit noch unsichtbare Pixel.",
    "howToUse": [
      "Trage die Auflösung des Bildschirms in Pixeln ein.",
      "Gib die Diagonale in Zoll an.",
      "Lies die Pixeldichte und die Größe eines Pixels ab."
    ],
    "howItWorks": "Pixelraster-Diagonale Dpx=√(W²+H²). Dichte PPI=Dpx/Din, Pixelabstand in mm=25,4/PPI. W und H sind positive sichere ganze Zahlen; die Diagonale in Zoll ist positiv und endlich. Das Modell setzt quadratische Pixel und die aktive rechteckige Fläche voraus. Drucker-DPI lassen sich daraus nicht bestimmen.",
    "example": "Ein Bildschirm mit 1920×1080 und 15,6 Zoll Diagonale hat eine Dichte von 141,21 ppi.",
    "faq": [
      {
        "q": "Wie unterscheidet sich PPI von DPI?",
        "a": "Die Rechnung ist dieselbe, aber PPI beschreibt Bildschirmpixel und DPI gedruckte Punkte. Ein Druckpunkt und ein Monitorpixel arbeiten verschieden, die eine Zahl lässt sich also nicht auf die andere übertragen."
      },
      {
        "q": "Warum sieht dieselbe Auflösung verschieden aus?",
        "a": "Bei identischen 1920×1080 Pixeln ergeben 15,6″ etwa 141,21ppi und 40″ etwa 55,07ppi. Der physische Pixelabstand ist verschieden; die wahrgenommene Detailtreue hängt auch von Abstand, Sehvermögen und Inhalt ab."
      },
      {
        "q": "Welche Dichte reicht?",
        "a": "Das hängt vom Betrachtungsabstand ab: ein Telefon wird nah gehalten und braucht mehr, ein Fernseher wird aus der Ferne gesehen und braucht weniger. Eine allgemeingültige Schwelle gibt es nicht."
      },
      {
        "q": "Was zeigt die Pixelgröße?",
        "a": "Die Kantenlänge eines Pixels in Millimetern. Damit lässt sich gut abschätzen, ob eine dünne Linie oder kleine Schrift noch lesbar bleibt."
      }
    ],
    "disclaimer": "Geometrie quadratischer Pixel der aktiven Bildschirmfläche. Sehvermögen, Lesbarkeit, Subpixelstruktur und Druckqualität werden nicht bewertet."
  },
  "es": {
    "shortDescription": "Densidad de píxeles de una pantalla a partir de la resolución y la diagonal.",
    "seoDescription": "Calcula la densidad de píxeles de una pantalla (PPI) a partir de la resolución y la diagonal en pulgadas, además del tamaño de un píxel.",
    "longDescription": "Calcula la densidad geométrica del área activa con resolución y diagonal en pulgadas. En una pantalla rectangular con píxeles cuadrados, la diagonal de la cuadrícula sigue Pitágoras. También muestra el paso de un píxel en milímetros. Estas cifras por sí solas no determinan la legibilidad ni píxeles invisibles.",
    "howToUse": [
      "Introduce la resolución de la pantalla en píxeles.",
      "Indica la diagonal en pulgadas.",
      "Consulta la densidad de píxeles y el tamaño de un píxel."
    ],
    "howItWorks": "Diagonal de la cuadrícula Dpx=√(W²+H²). Densidad PPI=Dpx/Din y paso de píxel en mm=25,4/PPI. W y H son enteros positivos seguros; la diagonal en pulgadas es positiva y finita. El modelo supone píxeles cuadrados y el área rectangular activa. Estas entradas no permiten determinar los DPI de una impresora.",
    "example": "Una pantalla de 1920×1080 con una diagonal de 15,6 pulgadas tiene una densidad de 141,21 ppi.",
    "faq": [
      {
        "q": "¿En qué se diferencian PPI y DPI?",
        "a": "La aritmética es la misma, pero PPI describe píxeles de pantalla y DPI, puntos impresos. Un punto de impresora y un píxel de monitor funcionan de forma distinta, así que una cifra no puede trasladarse a la otra."
      },
      {
        "q": "¿Por qué la misma resolución se ve distinta?",
        "a": "Con la misma resolución 1920×1080, 15,6″ dan unos 141,21ppi y 40″ unos 55,07ppi. Cambia el paso físico del píxel; el detalle percibido depende también de distancia, visión y contenido."
      },
      {
        "q": "¿Qué densidad basta?",
        "a": "Depende de la distancia de visión: un móvil se sostiene cerca y necesita más, un televisor se mira de lejos y necesita menos. No hay un umbral universal."
      },
      {
        "q": "¿Qué indica el tamaño del píxel?",
        "a": "El lado de un píxel en milímetros. Es una manera cómoda de juzgar si una línea fina o una letra pequeña serán legibles."
      }
    ],
    "disclaimer": "Geometría de píxeles cuadrados del área activa de pantalla. No evalúa visión, legibilidad, subpíxeles ni calidad de impresión."
  }
};
