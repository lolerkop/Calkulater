// Individual subject copy; native human editorial review pending.
export const contract = {
  "ru": {
    "longDescription": "Считает внешний прямоугольник паспарту по видимому окну изображения, одинаковым верхнему и боковым полям и отдельной добавке снизу. Добавка — ваш выбор композиции; равные поля допустимы, и универсального обязательного утяжеления на 1–2 см нет. Размер относится к паспарту, а не к внешним краям багета.",
    "howToUse": [
      "Введите ширину и высоту видимого окна в сантиметрах, уже после выбранного перекрытия изображения.",
      "Укажите положительное поле сверху и по бокам; ширина зависит от вашего оформления, а не от фиксированной доли фотографии.",
      "Добавку снизу задайте отдельно; ноль оставляет все поля одинаковыми.",
      "Сверьте внешний размер паспарту с посадочным размером рамы; профиль, фальц, стекло и монтажные допуски не моделируются."
    ],
    "howItWorks": "Ширина = w +2 b; высота = h +2 b +e; нижнее поле = b +e. Площадь полей =2 b(w+h)+4 b²+e(w+2 b), то есть внешний прямоугольник минус окно. Эта развёрнутая форма сохраняет узкие поля при больших размерах.",
    "example": "Окно 20×30 см, поле 5 см и добавка снизу 1 см дают паспарту 30×41 см, нижнее поле 6 см и площадь полей 630 см². При добавке 0 высота станет 40 см.",
    "faq": [
      {
        "q": "Зачем нижнее поле шире?",
        "a": "Более широкое нижнее поле — возможный приём композиции, а не обязательная оптическая норма. Добавка зависит от изображения и оформления; ноль также допустим."
      },
      {
        "q": "Какой ширины делать поля?",
        "a": "Выберите ширину под изображение, рамку и желаемый вид. Доля меньшей стороны не является обязательным правилом и не проверяется калькулятором."
      },
      {
        "q": "Считать ли нахлёст паспарту на фотографию?",
        "a": "Да: эти поля описывают видимое окно. Перекрытие краёв снимка выбирается отдельно по креплению, а физический размер отпечатка может быть больше окна."
      },
      {
        "q": "Подойдёт ли расчёт для холста?",
        "a": "Формула описывает прямоугольные отступы. Конструкция рамы для холста, подрамник и фальц требуют отдельного расчёта; число здесь не является готовым размером багета."
      }
    ],
    "disclaimer": "Геометрия прямоугольного паспарту. Выбор композиции, монтажных припусков и материалов остаётся за проектом; внешний размер багета и сохранность изображения не вычисляются.",
    "shortDescription": "Внешний размер паспарту и площадь полей по видимому окну изображения.",
    "seoDescription": "Внешний размер паспарту и площадь полей по видимому окну, одинаковым боковым полям и отдельной добавке снизу."
  },
  "en": {
    "longDescription": "Calculates the outer mat rectangle from the visible image opening, equal top and side borders, and an optional extra bottom border. Bottom weighting is a composition choice: equal borders are valid and there is no mandatory 1–2 cm addition. The result is the mat size, not the outside of the moulding.",
    "howToUse": [
      "Enter the visible opening width and height in centimetres after choosing the overlap on the image.",
      "Set a positive top-and-side border for your design, rather than a fixed fraction of every photograph.",
      "Enter the bottom addition separately; zero makes all borders equal.",
      "Compare the outer mat with the frame fitting size; moulding, rebate, glass and assembly tolerances are not modelled."
    ],
    "howItWorks": "Width = w +2 b; height = h +2 b +e; bottom border = b +e. Border area =2 b(w+h)+4 b²+e(w+2 b), the outer rectangle minus the opening. This expanded form preserves narrow borders around large openings.",
    "example": "A 20×30 cm opening, 5 cm border and 1 cm bottom addition give a 30×41 cm mat, 6 cm bottom border and 630 cm² of borders. With zero addition the height is 40 cm.",
    "faq": [
      {
        "q": "Why is the bottom border wider?",
        "a": "A wider bottom is an optional composition technique, not a mandatory optical rule. Choose the addition for the image and framing; zero is also valid."
      },
      {
        "q": "How wide should the borders be?",
        "a": "Choose borders for the image, frame and intended appearance. A fraction of the shorter side is not a required rule or a calculator constraint."
      },
      {
        "q": "Should I allow for the mat overlap?",
        "a": "Yes: the inputs describe the visible opening. Choose image overlap separately for the mounting method; the physical print can be larger than the opening."
      },
      {
        "q": "Does this work for canvas?",
        "a": "The formula describes rectangular spacing. Canvas frames, stretchers and rebates need a separate construction plan; this number is not a finished moulding size."
      }
    ],
    "disclaimer": "Rectangular mat geometry. Composition, fitting allowances and materials are project choices; moulding outside dimensions and conservation outcomes are not calculated.",
    "shortDescription": "Outer mat dimensions and border area from a visible image opening.",
    "seoDescription": "Calculate outer mat dimensions and border area from the visible opening, equal side borders and an optional bottom addition."
  },
  "uk": {
    "longDescription": "Обчислює зовнішній прямокутник паспарту за видимим вікном зображення, рівними верхнім і бічними полями та окремою добавкою знизу. Обважнення — вибір композиції: рівні поля допустимі, а обов’язкової добавки 1–2 см немає. Результат стосується паспарту, не зовнішніх країв багета.",
    "howToUse": [
      "Введіть ширину й висоту видимого вікна в сантиметрах після обраного перекриття зображення.",
      "Задайте додатне верхнє й бічне поле під ваше оформлення, а не фіксовану частку будь-якого фото.",
      "Введіть нижню добавку окремо; нуль залишає всі поля рівними.",
      "Звірте зовнішній розмір паспарту з посадкою рами; профіль, фальц, скло й монтажні допуски не моделюються."
    ],
    "howItWorks": "Ширина = w +2 b; висота = h +2 b +e; нижнє поле = b +e. Площа полів =2 b(w+h)+4 b²+e(w+2 b), тобто зовнішній прямокутник мінус вікно. Розгорнута форма зберігає вузькі поля навколо великих вікон.",
    "example": "Вікно 20×30 см, поле 5 см і нижня добавка 1 см дають паспарту 30×41 см, нижнє поле 6 см і 630 см² полів. За добавки 0 висота стане 40 см.",
    "faq": [
      {
        "q": "Навіщо нижнє поле ширше?",
        "a": "Ширше нижнє поле — можливий композиційний прийом, а не обов’язкова оптична норма. Добавку обирають під зображення й оформлення; нуль також допустимий."
      },
      {
        "q": "Якої ширини робити поле?",
        "a": "Ширину обирають під зображення, раму й бажаний вигляд. Частка меншої сторони не є обов’язковим правилом чи межею калькулятора."
      },
      {
        "q": "Чи потрібне паспарту взагалі?",
        "a": "Потреба залежить від способу оформлення й матеріалів. Цей інструмент розраховує геометрію полів, а не необхідність паспарту або захист поверхні від скла."
      },
      {
        "q": "Як обрати колір паспарту?",
        "a": "Колір — окремий вибір композиції. Можна порівняти зразки поруч із роботою; модель не оцінює кольори й не визначає найкращий відтінок."
      }
    ],
    "disclaimer": "Геометрія прямокутного паспарту. Композиція, монтажні припуски й матеріали залежать від проєкту; зовнішній розмір багета та збереження зображення не розраховуються.",
    "shortDescription": "Зовнішній розмір паспарту та площа полів за видимим вікном зображення.",
    "seoDescription": "Зовнішній розмір паспарту й площа полів за видимим вікном, однаковими бічними полями та окремою добавкою знизу."
  },
  "de": {
    "longDescription": "Berechnet das äußere Rechteck des Passepartouts aus dem sichtbaren Bildausschnitt, gleichen oberen und seitlichen Rändern sowie einer unteren Zugabe. Die Zugabe ist eine Gestaltungswahl: gleiche Ränder sind gültig, 1–2 cm sind nicht allgemein vorgeschrieben. Das Ergebnis betrifft das Passepartout, nicht die Außenkanten der Rahmenleiste.",
    "howToUse": [
      "Sichtbare Ausschnittbreite und -höhe nach Wahl der Bildüberdeckung in Zentimetern eingeben.",
      "Einen positiven oberen und seitlichen Rand für die Gestaltung wählen, keinen festen Anteil jedes Fotos.",
      "Untere Zugabe gesondert eingeben; null ergibt überall gleiche Ränder.",
      "Außenmaß des Passepartouts mit dem Einlegemaß prüfen; Profil, Falz, Glas und Montagetoleranzen fehlen im Modell."
    ],
    "howItWorks": "Breite = w +2 b; Höhe = h +2 b +e; unterer Rand = b +e. Randfläche =2 b(w+h)+4 b²+e(w+2 b), äußeres Rechteck minus Ausschnitt. Die ausmultiplizierte Form bewahrt schmale Ränder bei großen Bildern.",
    "example": "Ausschnitt 20×30 cm, Rand 5 cm und untere Zugabe 1 cm ergeben 30×41 cm Passepartout, 6 cm unteren Rand und 630 cm² Randfläche. Ohne Zugabe beträgt die Höhe 40 cm.",
    "faq": [
      {
        "q": "Warum ist der untere Rand breiter?",
        "a": "Ein breiterer unterer Rand ist eine mögliche Gestaltung, keine zwingende optische Regel. Die Zugabe hängt vom Bild und Rahmen ab; null ist ebenfalls möglich."
      },
      {
        "q": "Wie breit sollen die Ränder sein?",
        "a": "Randbreite nach Bild, Rahmen und gewünschter Wirkung wählen. Ein Anteil der kürzeren Seite ist weder Vorschrift noch Rechengrenze."
      },
      {
        "q": "Muss ich die Überdeckung berücksichtigen?",
        "a": "Ja: die Eingaben sind der sichtbare Ausschnitt. Überdeckung nach Befestigung separat wählen; der tatsächliche Abzug kann größer sein."
      },
      {
        "q": "Funktioniert das auch für Leinwand?",
        "a": "Die Formel beschreibt rechteckige Abstände. Leinwandrahmen, Keilrahmen und Falz benötigen eigene Konstruktionsplanung; das Ergebnis ist kein fertiges Leistenaußenmaß."
      }
    ],
    "disclaimer": "Geometrie eines rechteckigen Passepartouts. Gestaltung, Einlegezugaben und Materialien sind Projektentscheidungen; äußere Leistenmaße und konservatorische Ergebnisse werden nicht berechnet.",
    "shortDescription": "Außenmaß des Passepartouts und Randfläche aus dem sichtbaren Bildausschnitt.",
    "seoDescription": "Außenmaß und Randfläche des Passepartouts aus sichtbarem Ausschnitt, gleichen Seitenrändern und gesonderter unterer Zugabe."
  },
  "es": {
    "longDescription": "Calcula el rectángulo exterior del paspartú a partir de la ventana visible, márgenes superiores y laterales iguales y una adición inferior. Esta adición es una elección de composición: los márgenes iguales son válidos y no hay 1–2 cm obligatorios. El resultado es del paspartú, no del exterior de la moldura.",
    "howToUse": [
      "Introduce ancho y alto de la ventana visible en centímetros después de elegir el solape sobre la imagen.",
      "Elige un margen superior y lateral positivo para tu composición, no una fracción fija de cualquier foto.",
      "Introduce aparte la adición inferior; cero deja todos los márgenes iguales.",
      "Comprueba el paspartú con la medida de encaje; moldura, rebaje, vidrio y tolerancias de montaje no se modelan."
    ],
    "howItWorks": "Ancho = w +2 b; alto = h +2 b +e; margen inferior = b +e. Área de márgenes =2 b(w+h)+4 b²+e(w+2 b), rectángulo exterior menos ventana. La expansión conserva márgenes estrechos alrededor de ventanas grandes.",
    "example": "Ventana 20×30 cm, margen 5 cm y adición inferior 1 cm dan un paspartú 30×41 cm, margen inferior 6 cm y 630 cm² de márgenes. Con adición 0 el alto es 40 cm.",
    "faq": [
      {
        "q": "¿Por qué el margen inferior es más ancho?",
        "a": "Un margen inferior mayor es una técnica opcional de composición, no una norma óptica obligatoria. Elige la adición según la imagen y el montaje; cero también vale."
      },
      {
        "q": "¿De qué anchura deben ser los márgenes?",
        "a": "Elige los márgenes según la imagen, el marco y la apariencia buscada. Una fracción del lado corto no es una regla exigida ni una restricción del cálculo."
      },
      {
        "q": "¿Debo prever el solape del paspartú?",
        "a": "Sí: los campos describen la ventana visible. Elige aparte el solape según la fijación; la copia física puede ser mayor que la ventana."
      },
      {
        "q": "¿Vale para un lienzo?",
        "a": "La fórmula describe separaciones rectangulares. Marcos para lienzos, bastidores y rebajes requieren un plan constructivo propio; el número no es el exterior final de la moldura."
      }
    ],
    "disclaimer": "Geometría de un paspartú rectangular. Composición, holguras y materiales dependen del proyecto; no se calculan el exterior de la moldura ni resultados de conservación.",
    "shortDescription": "Dimensiones exteriores del paspartú y área de márgenes según la ventana visible.",
    "seoDescription": "Calcula el tamaño exterior y el área del paspartú según la abertura visible, los márgenes laterales y un extra inferior."
  }
};
