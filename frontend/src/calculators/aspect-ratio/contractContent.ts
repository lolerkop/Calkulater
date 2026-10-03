// Authored contract with individually retained effective legacy passages.
// AI review; human language and subject review remain pending.
export const contractContent = {
  "ru": {
    "shortDescription": "Сокращает разрешение до соотношения и находит недостающую сторону.",
    "seoDescription": "Сократите разрешение экрана до соотношения сторон или найдите недостающую ширину либо высоту для нужной пропорции.",
    "longDescription": "Делит ширину и высоту на их наибольший общий делитель и даёт точное соотношение, а также решает обратную задачу: по соотношению и одной стороне находит вторую. Рядом показано ближайшее распространённое соотношение, потому что точное сокращение и число на коробке монитора совпадают не всегда.",
    "howToUse": [
      "Выберите, что у вас есть: разрешение или соотношение.",
      "Введите известные значения.",
      "Прочитайте точное соотношение или недостающую сторону."
    ],
    "howItWorks": "Для целых ширины W и высоты H отношение сокращается на НОД(W,H). Если известна ширина S и пропорция a:b, высота равна S·b/a; при известной высоте — S·a/b. Размеры в пикселях должны быть положительными безопасными целыми. Части пропорции могут быть положительными дробными числами. Недостающий размер округляется до пикселя; рядом показано значение до округления. Ближайший формат выбирается только из шести перечисленных пресетов.",
    "example": "У 1920 и 1080 общий делитель 120, и пара сокращается до 16:9.",
    "faq": [
      {
        "q": "Почему 2560×1080 даёт 64:27?",
        "a": "Это точное сокращение на наибольший общий делитель. Привычное 21:9 — маркетинговое округление, и оно показано отдельной строкой."
      },
      {
        "q": "Что если недостающая сторона не целая?",
        "a": "Ответом показывается округлённое число пикселей, а рядом стоит точное значение, чтобы было видно величину округления."
      },
      {
        "q": "Поддерживаются ли неквадратные пиксели?",
        "a": "Расчёт предполагает квадратные пиксели. При неквадратных пикселях отношение чисел пикселей не равно пропорции видимого изображения: нужна отдельная поправка PAR."
      },
      {
        "q": "Подходит ли калькулятор для картинок, а не экранов?",
        "a": "Да, арифметика одинакова для любой пары размеров в пикселях."
      }
    ],
    "disclaimer": "Геометрия пиксельной сетки без PAR, кадрирования и ограничений кодека. Результат меньше одного пикселя или вне безопасного целого диапазона не выводится как разрешение."
  },
  "en": {
    "shortDescription": "Reduce a resolution to its ratio, or find the missing side.",
    "seoDescription": "Reduce a screen resolution to its aspect ratio or find the missing width or height for a given ratio.",
    "longDescription": "Divides width and height by their greatest common divisor to give the exact ratio, and works the other way too: give a ratio and one side and the other follows. The nearest common ratio is shown alongside, because an exact reduction and the number printed on the box are not always the same thing.",
    "howToUse": [
      "Choose whether you have a resolution or a ratio.",
      "Enter the known values.",
      "Read the exact ratio or the missing side."
    ],
    "howItWorks": "Integer width W and height H are divided by gcd(W,H). With known width S and ratio a:b, height is S·b/a; with known height, width is S·a/b. Pixel dimensions must be positive safe integers; ratio parts may be positive fractions. The missing dimension is rounded to one pixel and its unrounded value is shown separately. The nearest format is selected only from the six listed presets.",
    "example": "1920 and 1080 share a divisor of 120, which reduces the pair to 16:9.",
    "faq": [
      {
        "q": "Why does 2560×1080 give 64:27?",
        "a": "That is the exact reduction by the greatest common divisor. The familiar 21:9 is a marketing round number, shown here as the nearest common ratio."
      },
      {
        "q": "What if the missing side is not a whole number?",
        "a": "The rounded pixel value is shown as the answer and the exact figure appears beside it, so you can see how far the rounding went."
      },
      {
        "q": "Are non-square pixels supported?",
        "a": "The calculation assumes square pixels. With non-square pixels, the ratio of pixel counts differs from the displayed image ratio and requires a separate pixel-aspect-ratio correction."
      },
      {
        "q": "Can I use it for images rather than screens?",
        "a": "Yes, the arithmetic is the same for any pair of pixel dimensions."
      }
    ],
    "disclaimer": "Pixel-grid geometry excludes pixel aspect ratio, cropping and codec constraints. A rounded result below one pixel or beyond the safe integer range is rejected."
  },
  "uk": {
    "shortDescription": "Зведення роздільності до співвідношення та пошук відсутньої сторони.",
    "seoDescription": "Зведіть роздільність екрана до співвідношення сторін або знайдіть відсутню ширину чи висоту.",
    "longDescription": "Співвідношення сторін скорочується через найбільший спільний дільник — саме тому 1920 на 1080 дає 16:9, а не 1920:1080. Розрахунок також відновлює відсутню сторону: це потрібно, коли зображення треба вписати в задану ширину без спотворень.",
    "howToUse": [
      "Введіть ширину й висоту, щоб отримати співвідношення.",
      "Або введіть співвідношення й одну сторону, щоб знайти другу.",
      "Прочитайте результат у скороченому вигляді."
    ],
    "howItWorks": "Цілі ширина W і висота H скорочуються на НСД(W,H). За відомою шириною S і пропорцією a:b висота дорівнює S·b/a; за відомою висотою ширина — S·a/b. Піксельні розміри мають бути додатними безпечними цілими, а частини пропорції можуть бути дробовими. Шуканий розмір округлюється до пікселя; окремо видно значення до округлення. Найближчий формат обирається лише із шести наведених варіантів.",
    "example": "У 1920 і 1080 спільний дільник 120, і пара скорочується до 16:9.",
    "faq": [
      {
        "q": "Які співвідношення найпоширеніші?",
        "a": "16:9 для відео й моніторів, 4:3 для старих екранів і частини фотоапаратів, 3:2 для дзеркальних камер, 21:9 для надширокого формату, 9:16 для вертикального відео."
      },
      {
        "q": "Чому важливо зберігати співвідношення?",
        "a": "Бо інакше зображення розтягується. Вписати кадр 16:9 у рамку 4:3 без спотворень можна лише обрізанням або полями."
      },
      {
        "q": "Що таке пікселі неквадратної форми?",
        "a": "Розрахунок передбачає квадратні пікселі. За неквадратних пікселів відношення їх кількості відрізняється від пропорції видимого зображення; потрібна окрема поправка PAR."
      },
      {
        "q": "Як вписати зображення в задану ширину?",
        "a": "Введіть співвідношення й потрібну ширину — висота порахується сама. Це стандартна задача під час верстки й підготовки зображень."
      }
    ],
    "disclaimer": "Геометрія піксельної сітки без PAR, обрізання та обмежень кодека. Округлений результат менший за піксель або поза безпечним цілим діапазоном відхиляється."
  },
  "de": {
    "shortDescription": "Auflösung auf ihr Seitenverhältnis kürzen oder die fehlende Seite finden.",
    "seoDescription": "Kürze eine Bildschirmauflösung auf ihr Seitenverhältnis oder bestimme die fehlende Breite oder Höhe zu einem Verhältnis.",
    "longDescription": "Das Seitenverhältnis beschreibt das Format eines Bildes unabhängig von seiner Größe. Der Rechner kürzt eine Auflösung auf ihr Verhältnis — 1920 × 1080 wird zu 16:9 — und findet umgekehrt die fehlende Kantenlänge, wenn das Verhältnis und eine Seite bekannt sind. Das ist die Rechnung hinter Zuschnitten, Bildschirmwahl und Videoformaten.",
    "howToUse": [
      "Wähle, ob du aus einer Auflösung das Verhältnis bestimmen oder eine fehlende Seite finden willst.",
      "Für das Verhältnis trägst du Breite und Höhe in Pixeln ein.",
      "Für die fehlende Seite gibst du das Verhältnis und die bekannte Kantenlänge an.",
      "Lies das gekürzte Verhältnis oder die gesuchte Kantenlänge ab."
    ],
    "howItWorks": "Ganzzahlige Breite W und Höhe H werden durch ggT(W,H) geteilt. Bei bekannter Breite S und Verhältnis a:b ist die Höhe S·b/a; bei bekannter Höhe ist die Breite S·a/b. Pixelmaße müssen positive sichere ganze Zahlen sein, Verhältnisanteile dürfen positive Brüche sein. Das fehlende Maß wird auf einen Pixel gerundet; der ungerundete Wert steht daneben. Der nächste Standard wird nur unter den sechs aufgeführten Vorgaben gewählt.",
    "example": "Für 2560 × 1080 ist der größte gemeinsame Teiler 40, das Verhältnis also 64:27 — das übliche 21:9 ist dafür nur die gerundete Marketingangabe. Umgekehrt gehören zu 16:9 und einer Höhe von 1440 Pixeln genau 2560 Pixel Breite.",
    "faq": [
      {
        "q": "Warum ergibt 2560 × 1080 nicht glatt 21:9?",
        "a": "Gekürzt sind es 64:27. Die Angabe 21:9 ist ein eingebürgerter Näherungsname für diese Klasse von Formaten, nicht das exakte Verhältnis der Pixelzahlen."
      },
      {
        "q": "Ändert sich das Verhältnis beim Skalieren?",
        "a": "Nein. Werden Breite und Höhe mit demselben Faktor multipliziert, bleibt das Verhältnis gleich — genau deshalb beschreibt es das Format und nicht die Größe."
      },
      {
        "q": "Was sind nicht quadratische Pixel?",
        "a": "Die Rechnung setzt quadratische Pixel voraus. Bei nichtquadratischen Pixeln unterscheidet sich das Verhältnis der Pixelzahlen vom sichtbaren Bildformat; dafür ist eine gesonderte PAR-Korrektur nötig."
      },
      {
        "q": "Kann die fehlende Seite gebrochen ausfallen?",
        "a": "Ja. 16:9 und eine Höhe von 1000 Pixeln ergeben rechnerisch 1777,78 Pixel Breite. In der Praxis wird auf ganze Pixel gerundet, was das Format minimal verschiebt."
      }
    ],
    "disclaimer": "Geometrie des Pixelrasters ohne PAR, Zuschnitt oder Codecgrenzen. Ein gerundetes Ergebnis unter einem Pixel oder außerhalb des sicheren Ganzzahlbereichs wird abgelehnt."
  },
  "es": {
    "shortDescription": "Reduce una resolución a su relación, o halla el lado que falta.",
    "seoDescription": "Reduce una resolución de pantalla a su relación de aspecto o halla el ancho o el alto que falta para una relación dada.",
    "longDescription": "Divide el ancho y el alto entre su máximo común divisor para dar la relación exacta, y funciona también al revés: das una relación y un lado, y sale el otro. La relación habitual más cercana aparece al lado, porque una reducción exacta y el número impreso en la caja no siempre son lo mismo.",
    "howToUse": [
      "Elige si tienes una resolución o una relación.",
      "Introduce los valores conocidos.",
      "Consulta la relación exacta o el lado que falta."
    ],
    "howItWorks": "La anchura entera W y la altura H se dividen por mcd(W,H). Con anchura conocida S y proporción a:b, la altura es S·b/a; con altura conocida, la anchura es S·a/b. Los tamaños en píxeles deben ser enteros positivos seguros; las partes de la proporción pueden ser fraccionarias. La dimensión calculada se redondea a un píxel y se muestra también sin redondear. El formato más próximo se elige solo entre las seis opciones enumeradas.",
    "example": "1920 y 1080 comparten un divisor de 120, que reduce la pareja a 16:9.",
    "faq": [
      {
        "q": "¿Por qué 2560×1080 da 64:27?",
        "a": "Es la reducción exacta por el máximo común divisor. El conocido 21:9 es una cifra redonda de marketing, que aquí se muestra como la relación habitual más cercana."
      },
      {
        "q": "¿Y si el lado que falta no es un número entero?",
        "a": "El valor en píxeles redondeado se muestra como respuesta y la cifra exacta aparece al lado, para que veas hasta dónde llegó el redondeo."
      },
      {
        "q": "¿Se admiten píxeles no cuadrados?",
        "a": "El cálculo supone píxeles cuadrados. Con píxeles no cuadrados, la proporción de sus cantidades no coincide con la imagen mostrada y necesita una corrección PAR independiente."
      },
      {
        "q": "¿Sirve para imágenes y no solo para pantallas?",
        "a": "Sí, la aritmética es la misma para cualquier par de dimensiones en píxeles."
      }
    ],
    "disclaimer": "Geometría de la cuadrícula sin PAR, recorte ni restricciones del códec. Se rechaza un resultado redondeado inferior a un píxel o fuera del intervalo entero seguro."
  }
};
