import type { CalculatorCopy } from '../../lib/platform/types';

type Body = Pick<CalculatorCopy, 'shortDescription' | 'seoDescription' | 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

// Subject-specific retained and amended copy; source and calculation limits are explicit.
export const contractContent: Record<'ru'|'en'|'uk'|'de'|'es', Body> = {
  "ru": {
    "longDescription": "Формула шнурков находит площадь простого многоугольника по координатам вершин, записанным вдоль контура. Можно обходить по часовой стрелке или против неё: направление меняет знак ориентированной суммы, но не геометрическую площадь. Калькулятор также находит периметр и центроид однородной плоской области. Невыпуклые контуры допустимы; самопересечения, наложение сторон и нулевая площадь исключены.",
    "howToUse": [
      "Введите по одной вершине в строке: x и y.",
      "Идите по контуру по порядку — направление любое, но не перепрыгивайте.",
      "Не повторяйте первую вершину в конце: контур замыкается сам.",
      "Проверьте направление обхода, если фигура вышла не той, что вы ожидали.",
      "Разделяйте x и y пробелом или точкой с запятой; десятичная запятая допустима внутри координаты. Ограничение страницы — 3–256 различных вершин и 32768 символов."
    ],
    "howItWorks": "wᵢ = xᵢyᵢ₊₁ − xᵢ₊₁yᵢ, 2Aор = Σwᵢ, площадь = |Aор|. Центроид X = Σ(xᵢ+xᵢ₊₁)wᵢ/(6Aор), Y аналогично. Периметр — сумма расстояний между соседними вершинами, включая последнюю и первую. Знаки и произведения координат проверяются до округления, чтобы большой сдвиг начала координат не уничтожил малую площадь.",
    "example": "Прямоугольник 4 на 3, введённый четырьмя углами, даёт площадь 12 и периметр 14.",
    "faq": [
      {
        "q": "Нужно ли повторять первую точку в конце?",
        "a": "Нет, контур замыкается автоматически. Одно повторение первой точки в самом конце допускается и удаляется из счёта вершин. Другие повторные вершины и стороны нулевой длины отклоняются."
      },
      {
        "q": "Важно ли направление обхода?",
        "a": "Оба направления верны. При обращении порядка меняется только подпись обхода, а площадь, периметр и центроид сохраняются. Ошибка — переставить вершины так, что рёбра начинают пересекаться; само направление «по часовой» ошибкой не является."
      },
      {
        "q": "Может ли многоугольник быть невыпуклым?",
        "a": "Да, если контур простой, без самопересечений и наложений. Для пересекающегося контура формула шнурков даёт ориентированную сумму, которая зависит от выбранного правила заполнения; инструмент не выдаёт её за площадь простой области."
      },
      {
        "q": "В каких единицах результат?",
        "a": "Координаты и центроид выражены в одной выбранной вами единице длины, периметр — в той же единице, площадь — в её квадрате. Смешивать метры и сантиметры между точками нельзя; автоматического распознавания единиц здесь нет."
      },
      {
        "q": "Почему прямая отклоняется?",
        "a": "Потому что три точки на одной прямой ничего не охватывают. Показать ноль значило бы выдать правильный ответ на неправильную фигуру."
      }
    ],
    "shortDescription": "Площадь, периметр и центроид простого многоугольника по вершинам контура.",
    "seoDescription": "Введите вершины простого многоугольника по порядку контура и рассчитайте площадь, периметр, центроид и направление обхода.",
    "disclaimer": "Простой плоский контур в декартовых координатах. Центроид относится к равномерно заполненной области, а не к среднему положению вершин или к неоднородному материалу. Географические широта и долгота не являются длинами на плоскости."
  },
  "en": {
    "longDescription": "The shoelace formula gives the area of a simple polygon from vertices entered along its outline. Either clockwise or anticlockwise order is valid: direction changes the signed sum but not geometric area. The calculator also gives perimeter and the centroid of a uniform planar region. Concave outlines are allowed; self-crossings, overlapping edges and zero area are excluded.",
    "howToUse": [
      "Enter one vertex per line: x and y.",
      "Follow the outline in order — either direction works, but do not jump across.",
      "Do not repeat the first vertex at the end; the outline closes itself.",
      "Check the winding if the shape is not what you expected.",
      "Separate x and y with whitespace or a semicolon; a decimal comma is allowed inside a coordinate. Page limits are 3–256 distinct vertices and 32768 characters."
    ],
    "howItWorks": "Let wᵢ = xᵢyᵢ₊₁ − xᵢ₊₁yᵢ and 2A_signed = Σwᵢ; area is |A_signed|. Centroid X = Σ(xᵢ+xᵢ₊₁)wᵢ/(6A_signed), with Y analogous. Perimeter sums neighbouring-vertex distances, including the closing edge. Coordinate products and signs are evaluated before rounding so a large origin shift does not destroy a small area.",
    "example": "A 4 by 3 rectangle entered as four corners gives an area of 12 and a perimeter of 14.",
    "faq": [
      {
        "q": "Do I need to repeat the first point at the end?",
        "a": "No: the outline closes automatically. One repeated first point at the very end is accepted and excluded from the vertex count. Other repeated vertices and zero-length edges are rejected."
      },
      {
        "q": "Does the direction of the outline matter?",
        "a": "Both directions are valid. Reversing the order changes only the winding label; area, perimeter and centroid stay the same. Reordering vertices so edges cross is an error, but clockwise order itself is not."
      },
      {
        "q": "Can the polygon be non-convex?",
        "a": "Yes, provided the outline is simple, without crossings or overlaps. For a crossing outline the shoelace sum is signed and a filled-region area needs a chosen fill rule; this tool does not present that sum as the area of a simple region."
      },
      {
        "q": "What units does the result use?",
        "a": "Coordinates and centroid use one length unit you choose; perimeter uses that unit and area its square. Do not mix metres and centimetres between points; units are not detected automatically."
      },
      {
        "q": "Why is a straight line rejected?",
        "a": "Because three collinear points do not enclose anything. Showing zero would look like a valid answer to an invalid figure."
      }
    ],
    "shortDescription": "Area, perimeter and centroid of a simple polygon from ordered vertices.",
    "seoDescription": "Enter ordered vertices of a simple polygon to calculate area, perimeter, centroid and winding direction.",
    "disclaimer": "A simple planar outline in Cartesian coordinates. Centroid refers to a uniformly filled region, not the average of vertices or a non-uniform material. Geographic latitude and longitude are not planar lengths."
  },
  "uk": {
    "longDescription": "Формула шнурків знаходить площу простого багатокутника за координатами вершин уздовж контуру. Допустимий обхід за годинниковою стрілкою або проти неї: напрямок змінює знак орієнтованої суми, але не геометричну площу. Калькулятор також знаходить периметр і центроїд однорідної плоскої області. Увігнуті контури допустимі; самоперетини, накладання сторін і нульова площа виключені.",
    "howToUse": [
      "Введіть по одній вершині в рядку: x і y.",
      "Ідіть по контуру за порядком — напрямок будь-який, але не перестрибуйте.",
      "Не повторюйте першу вершину в кінці: контур замикається сам.",
      "Перевірте напрямок обходу, якщо фігура вийшла не такою, як ви очікували.",
      "Розділяйте x та y пробілом або крапкою з комою; десяткова кома допустима всередині координати. Межі сторінки — 3–256 різних вершин і 32768 символів."
    ],
    "howItWorks": "wᵢ = xᵢyᵢ₊₁ − xᵢ₊₁yᵢ, 2Aор = Σwᵢ, площа = |Aор|. Центроїд X = Σ(xᵢ+xᵢ₊₁)wᵢ/(6Aор), Y аналогічно. Периметр є сумою відстаней між сусідніми вершинами, включно з останньою та першою. Знаки й добутки координат перевіряються до округлення, щоб великий зсув початку координат не знищив малу площу.",
    "example": "Прямокутник 4 на 3, введений чотирма кутами, дає площу 12 і периметр 14.",
    "faq": [
      {
        "q": "Чи треба повторювати першу точку в кінці?",
        "a": "Ні, контур замикається автоматично. Одне повторення першої точки наприкінці допускається й вилучається з кількості вершин. Інші повторні вершини та сторони нульової довжини відхиляються."
      },
      {
        "q": "Чи має значення напрямок обходу?",
        "a": "Обидва напрямки правильні. Зворотний порядок змінює лише підпис обходу; площа, периметр і центроїд зберігаються. Помилка — переставити вершини так, що ребра перетинаються; сам обхід за годинниковою стрілкою не є помилкою."
      },
      {
        "q": "Чи може багатокутник бути невипуклим?",
        "a": "Так, якщо контур простий, без самоперетинів і накладань. Для перетинного контуру формула шнурків дає орієнтовану суму, а площа заповненої області потребує правила заповнення; інструмент не видає цю суму за площу простої області."
      },
      {
        "q": "У яких одиницях результат?",
        "a": "Координати й центроїд мають одну обрану вами одиницю довжини, периметр — ту саму одиницю, площа — її квадрат. Не змішуйте метри й сантиметри між точками; одиниці автоматично не розпізнаються."
      },
      {
        "q": "Чому пряма відхиляється?",
        "a": "Бо три точки на одній прямій нічого не охоплюють. Показати нуль означало б видати правильну відповідь на неправильну фігуру."
      }
    ],
    "shortDescription": "Площа, периметр і центроїд простого багатокутника за вершинами контуру.",
    "seoDescription": "Уведіть вершини простого багатокутника за порядком контуру й обчисліть площу, периметр, центроїд і напрямок обходу.",
    "disclaimer": "Простий плоский контур у декартових координатах. Центроїд стосується рівномірно заповненої області, а не середнього положення вершин чи неоднорідного матеріалу. Географічні широта й довгота не є довжинами на площині."
  },
  "de": {
    "longDescription": "Die gaußsche Trapezformel liefert die Fläche eines einfachen Vielecks aus Eckpunkten entlang seines Umrisses. Beide Umlaufrichtungen sind gültig: Sie ändern das Vorzeichen der Summe, nicht die geometrische Fläche. Zusätzlich werden Umfang und Schwerpunkt einer gleichmäßig verteilten ebenen Fläche berechnet. Konkave Umrisse sind erlaubt; Selbstschnitte, überlappende Kanten und Fläche null sind ausgeschlossen.",
    "howToUse": [
      "Trage einen Eckpunkt je Zeile ein: x und y.",
      "Folge dem Umriss der Reihe nach — beide Richtungen gehen, aber springe nicht quer.",
      "Wiederhole den ersten Eckpunkt am Ende nicht; der Umriss schließt sich selbst.",
      "Prüfe den Umlaufsinn, wenn die Form nicht die erwartete ist.",
      "Trenne x und y durch Leerraum oder Semikolon; ein Dezimalkomma innerhalb einer Koordinate ist erlaubt. Seitengrenzen sind 3–256 verschiedene Eckpunkte und 32768 Zeichen."
    ],
    "howItWorks": "Mit wᵢ = xᵢyᵢ₊₁ − xᵢ₊₁yᵢ gilt 2A_or = Σwᵢ und Fläche = |A_or|. Schwerpunkt X = Σ(xᵢ+xᵢ₊₁)wᵢ/(6A_or), Y entsprechend. Der Umfang summiert die Abstände benachbarter Punkte einschließlich der Schlusskante. Produkte und Vorzeichen werden vor dem Runden geprüft, damit eine große Ursprungsverschiebung keine kleine Fläche auslöscht.",
    "example": "Ein Rechteck 4 mal 3, als vier Ecken eingetragen, ergibt eine Fläche von 12 und einen Umfang von 14.",
    "faq": [
      {
        "q": "Muss ich den ersten Punkt am Ende wiederholen?",
        "a": "Nein, der Umriss schließt sich automatisch. Ein einmaliger Schlusswiederholpunkt wird akzeptiert und nicht als zusätzlicher Eckpunkt gezählt. Andere wiederholte Punkte und Kanten der Länge null werden abgewiesen."
      },
      {
        "q": "Spielt die Richtung des Umlaufs eine Rolle?",
        "a": "Beide Richtungen sind richtig. Eine Umkehr ändert nur die Umlaufangabe; Fläche, Umfang und Schwerpunkt bleiben gleich. Falsch ist eine Umordnung, bei der Kanten sich schneiden, nicht der Uhrzeigersinn an sich."
      },
      {
        "q": "Darf das Vieleck nicht konvex sein?",
        "a": "Ja, solange der Umriss einfach ist und weder Selbstschnitte noch Überlappungen enthält. Bei einem gekreuzten Umriss ergibt die Formel eine vorzeichenbehaftete Summe; für die gefüllte Fläche wäre eine Füllregel nötig. Hier wird diese Summe nicht als einfache Fläche ausgegeben."
      },
      {
        "q": "In welchen Einheiten steht das Ergebnis?",
        "a": "Koordinaten und Schwerpunkt verwenden eine von dir gewählte Längeneinheit; der Umfang dieselbe Einheit, die Fläche deren Quadrat. Mische nicht Meter und Zentimeter zwischen Punkten; Einheiten werden nicht automatisch erkannt."
      },
      {
        "q": "Warum wird eine Gerade abgewiesen?",
        "a": "Weil drei Punkte auf einer Geraden nichts einschließen. Null anzuzeigen sähe nach einer gültigen Antwort auf eine ungültige Figur aus."
      }
    ],
    "shortDescription": "Fläche, Umfang und Schwerpunkt eines einfachen Vielecks aus geordneten Eckpunkten.",
    "seoDescription": "Gib die Eckpunkte eines einfachen Vielecks entlang des Umrisses ein und berechne Fläche, Umfang, Schwerpunkt und Umlaufsinn.",
    "disclaimer": "Ein einfacher ebener Umriss in kartesischen Koordinaten. Der Schwerpunkt gilt für eine gleichmäßig gefüllte Fläche, nicht für den Mittelwert der Punkte oder ungleichmäßiges Material. Geografische Breite und Länge sind keine ebenen Längenmaße."
  },
  "es": {
    "longDescription": "La fórmula del cordón da el área de un polígono simple con vértices introducidos siguiendo el contorno. Son válidos ambos sentidos: cambian el signo de la suma, no el área geométrica. También se calcula el perímetro y el centroide de una región plana uniforme. Se admiten contornos cóncavos; se excluyen cruces, lados solapados y área cero.",
    "howToUse": [
      "Introduce un vértice por línea: x e y.",
      "Sigue el contorno en orden; cualquiera de los dos sentidos vale, pero no saltes de un lado a otro.",
      "No repitas el primer vértice al final: el contorno se cierra solo.",
      "Comprueba el sentido de recorrido si la figura no es la que esperabas.",
      "Separa x e y con espacio o punto y coma; se admite coma decimal dentro de una coordenada. Los límites de la página son 3–256 vértices distintos y 32768 caracteres."
    ],
    "howItWorks": "Con wᵢ = xᵢyᵢ₊₁ − xᵢ₊₁yᵢ, 2A_or = Σwᵢ y área = |A_or|. El centroide X = Σ(xᵢ+xᵢ₊₁)wᵢ/(6A_or), y Y análogamente. El perímetro suma las distancias entre vértices contiguos, incluido el cierre. Los productos y signos se evalúan antes de redondear para que un desplazamiento grande del origen no elimine un área pequeña.",
    "example": "Un rectángulo de 4 por 3 introducido como cuatro vértices da un área de 12 y un perímetro de 14.",
    "faq": [
      {
        "q": "¿Hay que repetir el primer punto al final?",
        "a": "No: el contorno se cierra automáticamente. Se acepta una repetición del primer punto al final y no se cuenta como vértice adicional. Se rechazan otras repeticiones y lados de longitud cero."
      },
      {
        "q": "¿Importa el sentido del contorno?",
        "a": "Ambos sentidos son correctos. Invertir el orden cambia solo la etiqueta de recorrido; área, perímetro y centroide se conservan. El error es reordenar vértices hasta que se crucen los lados, no el sentido horario por sí mismo."
      },
      {
        "q": "¿El polígono puede ser cóncavo?",
        "a": "Sí, si el contorno es simple, sin cruces ni solapamientos. Con un contorno cruzado la fórmula da una suma orientada y el área rellenada necesita una regla de relleno; aquí no se presenta esa suma como el área de una región simple."
      },
      {
        "q": "¿En qué unidades sale el resultado?",
        "a": "Coordenadas y centroide usan una unidad de longitud elegida por ti; el perímetro esa misma unidad y el área su cuadrado. No mezcles metros y centímetros entre puntos; las unidades no se detectan automáticamente."
      },
      {
        "q": "¿Por qué se rechaza una línea recta?",
        "a": "Porque tres puntos alineados no encierran nada. Mostrar cero parecería una respuesta válida a una figura que no lo es."
      }
    ],
    "shortDescription": "Área, perímetro y centroide de un polígono simple con vértices ordenados.",
    "seoDescription": "Introduce los vértices de un polígono simple siguiendo el contorno y calcula área, perímetro, centroide y sentido de recorrido.",
    "disclaimer": "Contorno plano simple en coordenadas cartesianas. El centroide corresponde a una región uniforme, no al promedio de vértices ni a un material no uniforme. Latitud y longitud geográficas no son longitudes en el plano."
  }
};
