// Authored contract with individually retained effective legacy passages.
// AI review; human language and subject review remain pending.
export const contractContent = {
  "ru": {
    "shortDescription": "Размеры типографики по базе и отношению шкалы с таблицей ступеней.",
    "seoDescription": "Постройте модульную шкалу размеров шрифта по базовому размеру и отношению, с таблицей ступеней вверх и вниз от базы.",
    "longDescription": "Модульная шкала задаёт размеры шрифта умножением, а не подбором на глаз: каждая ступень — это предыдущая, умноженная на постоянное отношение, поэтому заголовки, основной текст и подписи остаются в одном отношении, сколько бы размеров ни понадобилось макету. Нулевая ступень — база, обычно основной текст; положительные поднимаются к заголовкам, отрицательные опускаются к подписям и мелкому шрифту. Главную роль играет отношение: 1,2 даёт спокойную шкалу с близкими размерами, а 1,618 разводит их так, что заголовок через две ступени превышает основной текст более чем вдвое.",
    "howToUse": [
      "Введите базовый размер — обычно это размер основного текста.",
      "Выберите отношение: 1,2 для плотной шкалы, 1,618 для контрастной.",
      "Укажите, сколько ступеней нужно вверх, к заголовкам.",
      "Укажите, сколько ступеней нужно вниз, к подписям и мелкому шрифту."
    ],
    "howItWorks": "Размер на ступени k = B·q^k. База B положительная, q>1 задаёт возрастающую шкалу. Поля вверх/вниз — целые количества от 0 до 20, а не знак индекса. Нулевая ступень включена, поэтому всего 1+вверх+вниз значений. При отрицательном k используется деление на q^|k|. Таблица показывает первые 12 ступеней; минимум и максимум относятся ко всей заданной шкале. Все длины остаются в одной единице базы.",
    "example": "База 16 с отношением 1,25 через пять ступеней вверх даёт 48,828, а через две вниз — 10,24.",
    "faq": [
      {
        "q": "Какое отношение выбрать для шкалы?",
        "a": "Отношения от 1,125 до 1,25 держат размеры близко и подходят плотным интерфейсам. Большие — 1,414, 1,5, 1,618 — дают сильный контраст и лучше работают в вёрстке с малым числом уровней."
      },
      {
        "q": "Нужно ли округлять полученные размеры?",
        "a": "Для CSS не нужно: браузеры спокойно работают с дробными пикселями и rem. Округляйте, только если этого требует дизайн-система, и тогда округляйте всю шкалу одинаково."
      },
      {
        "q": "Обязательно ли базой брать размер основного текста?",
        "a": "Не обязательно, но почти всегда стоит. Привязка шкалы к тому размеру, который читают чаще всего, и удерживает остальные размеры в понятном отношении к нему."
      },
      {
        "q": "Почему вверху шкала растёт так быстро?",
        "a": "Потому что она геометрическая: каждая ступень умножает, а не прибавляет, поэтому расстояния расширяются по мере подъёма. Именно это свойство и позволяет мелкому концу шкалы оставаться дробным, не сжимая крупный."
      }
    ],
    "disclaimer": "Геометрическая шкала размеров без автоматического выбора типографики. Ограничение 20 ступеней в каждую сторону — граница этого инструмента; единицы не переводятся между px и rem."
  },
  "en": {
    "shortDescription": "Typographic sizes from a base and a ratio, with a table of steps.",
    "seoDescription": "Build a modular type scale from a base size and a ratio, with a table of steps above and below the base for headings and captions.",
    "longDescription": "A modular scale produces type sizes by multiplication rather than by eye: every step is the previous one multiplied by a fixed ratio, so headings, body text and captions stay in a single relationship no matter how many sizes a design ends up needing. Step zero is the base — normally body text — with positive steps climbing towards headings and negative steps descending to captions and fine print. The ratio does most of the work: 1.2 gives a quiet scale where sizes stay close together, while 1.618 opens gaps wide enough that a heading two steps up is more than twice the body size.",
    "howToUse": [
      "Enter the base size — usually the body text size.",
      "Choose a ratio: 1.2 for a tight scale, 1.618 for a dramatic one.",
      "Enter how many steps you need above the base for headings.",
      "Enter how many steps you need below it for captions and fine print."
    ],
    "howItWorks": "Size at step k = B·q^k. Positive base B and q>1 define an ascending scale. Up/down fields are integer counts from 0 to 20, not signed indices. Step zero is included, giving 1+up+down sizes. Negative k divides by q^|k|. The table previews the first 12 steps; the minimum and maximum cover the entire requested scale. All lengths retain the base’s unit.",
    "example": "A base of 16 with a ratio of 1.25 reaches 48.828 five steps up and 10.24 two steps down.",
    "faq": [
      {
        "q": "Which ratio should I pick?",
        "a": "Ratios between 1.125 and 1.25 keep sizes close and suit dense interfaces. Larger ones — 1.414, 1.5, 1.618 — give strong contrast and work better for editorial layouts with few levels."
      },
      {
        "q": "Should I round the sizes?",
        "a": "For CSS there is no need: browsers handle fractional pixels and rem values fine. Round only when a design system requires whole numbers, and round the whole scale the same way."
      },
      {
        "q": "Does the base have to be the body size?",
        "a": "It does not have to be, but it usually should be. Anchoring the scale to the size people read most keeps the rest of the sizes in a defined relationship to it."
      },
      {
        "q": "Why does the scale grow so fast at the top?",
        "a": "Because it is geometric. Each step multiplies rather than adds, so distances widen as the steps climb — that is the property that keeps the small end finely spaced without cramping the large end."
      }
    ],
    "disclaimer": "Geometric size scale without automatic typography selection. Twenty steps in either direction is this tool’s limit; px and rem are not converted."
  },
  "uk": {
    "shortDescription": "Розміри типографіки за базою та відношенням шкали з таблицею ступенів.",
    "seoDescription": "Побудова модульної шкали розмірів шрифту за базовим розміром і відношенням, з таблицею ступенів угору та вниз від бази.",
    "longDescription": "Модульна шкала будує ряд розмірів як степені одного відношення від базового. Це дає узгоджену типографіку: розміри пов’язані між собою правилом, а не підібрані на око, і будь-який новий ступінь виводиться сам собою.",
    "howToUse": [
      "Введіть додатну базу в одній обраній одиниці довжини.",
      "Задайте відношення понад 1: наприклад, 1,25 дає множник 1,25 між сусідніми розмірами.",
      "Задайте окремо цілі кількості ступеней вгору й униз від 0 до 20; таблиця показує перші 12."
    ],
    "howItWorks": "Розмір на ступені k = B·q^k. Додатна база B та q>1 задають зростаючу шкалу. Поля вгору/вниз — цілі кількості від 0 до 20, а не знакові індекси. Нульова ступінь включена, тому всього 1+вгору+вниз значень. За від’ємного k виконується ділення на q^|k|. Таблиця показує перші 12 ступеней, а мінімум і максимум — усю задану шкалу. Довжини мають ту саму одиницю, що й база.",
    "example": "База 16 з відношенням 1,25 через п’ять ступенів угору дає 48,828, а через два вниз — 10,24.",
    "faq": [
      {
        "q": "Яке відношення обрати?",
        "a": "1,125–1,25 для стриманої шкали з великою кількістю близьких розмірів, 1,414 і 1,618 для контрастної з різкими переходами. Що більше відношення, то менше ступенів поміщається в корисний діапазон."
      },
      {
        "q": "Навіщо взагалі шкала?",
        "a": "Щоб розміри були пов’язані правилом, а не підібрані на око. Тоді додавання нового рівня заголовків не потребує перепідбору всієї типографіки."
      },
      {
        "q": "Чи треба округлювати розміри?",
        "a": "Округлення не потрібне для самої формули: CSS підтримує дробові px і rem. Якщо система дизайну вимагає певного кроку, округлюйте вже готові розміри послідовно; це трохи змінить точне відношення сусідніх ступеней."
      },
      {
        "q": "Чи можна застосувати шкалу до відступів?",
        "a": "Так, формула однаково працює для шрифтів і відступів у спільній одиниці. Це спосіб задати правило розмірів, а не доказ того, що вибране відношення робить будь-який макет зручним."
      }
    ],
    "disclaimer": "Геометрична шкала розмірів без автоматичного вибору типографіки. Двадцять ступеней у кожен бік — межа цього інструмента; px і rem не переводяться між собою."
  },
  "de": {
    "shortDescription": "Typografische Größen aus Grundgröße und Verhältnis, mit einer Tabelle der Stufen.",
    "seoDescription": "Baue eine modulare Typoskala aus Grundgröße und Verhältnis, mit einer Tabelle der Stufen über und unter der Grundgröße für Überschriften und Bildunterschriften.",
    "longDescription": "Eine modulare Skala erzeugt Schriftgrößen durch Multiplikation statt nach Augenmaß: jede Stufe ist die vorige mal einem festen Verhältnis, deshalb bleiben Überschriften, Fließtext und Bildunterschriften in einer einzigen Beziehung, gleich wie viele Größen ein Entwurf am Ende braucht. Stufe null ist die Grundgröße — gewöhnlich der Fließtext —, positive Stufen steigen zu Überschriften auf, negative sinken zu Bildunterschriften und Kleingedrucktem. Das Verhältnis leistet die meiste Arbeit: 1,2 ergibt eine ruhige Skala mit eng beieinanderliegenden Größen, während 1,618 die Abstände so weit öffnet, dass eine Überschrift zwei Stufen höher mehr als doppelt so groß ist wie der Fließtext.",
    "howToUse": [
      "Trage die Grundgröße ein — meist die Größe des Fließtextes.",
      "Wähle ein Verhältnis: 1,2 für eine enge Skala, 1,618 für eine kräftige.",
      "Trage ein, wie viele Stufen du über der Grundgröße für Überschriften brauchst.",
      "Trage ein, wie viele Stufen du darunter für Bildunterschriften und Kleingedrucktes brauchst."
    ],
    "howItWorks": "Größe bei Stufe k = B·q^k. Positive Basis B und q>1 definieren eine aufsteigende Skala. Auf-/Abwärtsfelder sind ganze Anzahlen von 0 bis 20, keine vorzeichenbehafteten Indizes. Stufe null zählt mit, insgesamt also 1+auf+ab Größen. Für negatives k wird durch q^|k| geteilt. Die Tabelle zeigt die ersten 12 Stufen; Minimum und Maximum gelten für die gesamte angeforderte Skala. Alle Längen behalten die Einheit der Basis.",
    "example": "Eine Grundgröße von 16 mit dem Verhältnis 1,25 erreicht fünf Stufen höher 48,828 und zwei Stufen tiefer 10,24.",
    "faq": [
      {
        "q": "Welches Verhältnis soll ich wählen?",
        "a": "Verhältnisse zwischen 1,125 und 1,25 halten die Größen eng beieinander und passen zu dichten Oberflächen. Größere — 1,414, 1,5, 1,618 — geben starken Kontrast und passen besser zu redaktionellen Layouts mit wenigen Ebenen."
      },
      {
        "q": "Soll ich die Größen runden?",
        "a": "Für CSS ist das nicht nötig: Browser kommen mit gebrochenen Pixel- und rem-Werten gut zurecht. Runde nur, wenn ein Designsystem ganze Zahlen verlangt, und dann die ganze Skala auf dieselbe Weise."
      },
      {
        "q": "Muss die Grundgröße die Fließtextgröße sein?",
        "a": "Müssen nicht, sollte aber meist. Die Skala an der Größe zu verankern, die am meisten gelesen wird, hält alle übrigen Größen in einer festgelegten Beziehung dazu."
      },
      {
        "q": "Warum wächst die Skala oben so schnell?",
        "a": "Weil sie geometrisch ist. Jede Stufe multipliziert statt zu addieren, die Abstände weiten sich also mit steigenden Stufen — genau diese Eigenschaft hält das kleine Ende fein abgestuft, ohne das große zu stauchen."
      }
    ],
    "disclaimer": "Geometrische Größenskala ohne automatische Typografiewahl. Zwanzig Stufen je Richtung sind die Grenze dieses Werkzeugs; px und rem werden nicht ineinander umgerechnet."
  },
  "es": {
    "shortDescription": "Tamaños tipográficos a partir de una base y una razón, con una tabla de pasos.",
    "seoDescription": "Construye una escala tipográfica modular a partir de un tamaño base y una razón, con una tabla de pasos por encima y por debajo de la base para títulos y textos secundarios.",
    "longDescription": "Una escala modular produce tamaños de letra por multiplicación y no a ojo: cada paso es el anterior multiplicado por una razón fija, así que los títulos, el texto y los pies mantienen una única relación por muchos tamaños que acabe necesitando un diseño. El paso cero es la base —normalmente el texto corrido—, con los pasos positivos subiendo hacia los títulos y los negativos bajando hacia pies y letra pequeña. La razón hace casi todo el trabajo: 1,2 da una escala discreta en la que los tamaños quedan cerca, mientras que 1,618 abre huecos lo bastante grandes como para que un título dos pasos por encima mida más del doble que el texto.",
    "howToUse": [
      "Introduce el tamaño base, normalmente el del texto corrido.",
      "Elige una razón: 1,2 para una escala apretada y 1,618 para una llamativa.",
      "Introduce cuántos pasos necesitas por encima de la base para los títulos.",
      "Introduce cuántos necesitas por debajo para pies y letra pequeña."
    ],
    "howItWorks": "Tamaño en el nivel k = B·q^k. La base positiva B y q>1 definen una escala ascendente. Los campos arriba/abajo son cantidades enteras de 0 a 20, no índices con signo. Se incluye el nivel cero: hay 1+arriba+abajo tamaños. Con k negativo se divide por q^|k|. La tabla muestra los primeros 12 niveles; mínimo y máximo corresponden a toda la escala solicitada. Las longitudes conservan la unidad de la base.",
    "example": "Una base de 16 con una razón de 1,25 llega a 48,828 cinco pasos arriba y a 10,24 dos pasos abajo.",
    "faq": [
      {
        "q": "¿Qué razón elijo?",
        "a": "Las razones entre 1,125 y 1,25 mantienen los tamaños cerca y van bien en interfaces densas. Las mayores —1,414, 1,5, 1,618— dan un contraste fuerte y funcionan mejor en composiciones editoriales con pocos niveles."
      },
      {
        "q": "¿Debo redondear los tamaños?",
        "a": "Para CSS no hace falta: los navegadores manejan bien los píxeles y los rem fraccionarios. Redondea solo si un sistema de diseño exige números enteros, y redondea toda la escala igual."
      },
      {
        "q": "¿La base tiene que ser el tamaño del texto corrido?",
        "a": "No tiene por qué, pero normalmente debería serlo. Anclar la escala al tamaño que más se lee mantiene el resto de tamaños en una relación definida con él."
      },
      {
        "q": "¿Por qué la escala crece tan deprisa por arriba?",
        "a": "Porque es geométrica. Cada paso multiplica en vez de sumar, así que las distancias se ensanchan a medida que suben los pasos: esa es la propiedad que mantiene el extremo pequeño finamente espaciado sin apretar el grande."
      }
    ],
    "disclaimer": "Escala geométrica sin selección automática de tipografía. Veinte niveles en cada sentido es el límite de esta herramienta; no convierte px en rem."
  }
};
