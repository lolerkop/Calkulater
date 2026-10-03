// Individually reviewed against all five actual188 native bodies; human editorial review pending.
export const contract = {
  "ru": {
    "longDescription": "Решите формулу тонкой линзы для действительного предмета с d₀>0. Все расстояния вводятся в сантиметрах: f>0 для собирающей линзы, f<0 для рассеивающей; dᵢ>0 для действительного изображения, dᵢ<0 для мнимого. Знак увеличения показывает ориентацию, модуль — отношение линейных размеров. Точка d₀=f не имеет конечного расстояния изображения.",
    "howToUse": [
      "Собирающая линза задаётся положительным фокусным расстоянием, рассеивающая — отрицательным.",
      "Положительное расстояние до изображения означает действительное изображение с другой стороны линзы, отрицательное — мнимое с той же стороны, что и предмет.",
      "Отрицательное увеличение означает перевёрнутое изображение, положительное — прямое; по модулю это во сколько раз изменился размер.",
      "Режим «фокусное расстояние» подбирает линзу, когда оба расстояния уже известны из схемы."
    ],
    "howItWorks": "1/f = 1/d₀ + 1/dᵢ, увеличение −dᵢ/d₀, оптическая сила 100/f в диоптриях.",
    "example": "Предмет в 30 см от линзы с фокусом 10 см даёт изображение в 15 см, уменьшенное вдвое и перевёрнутое.",
    "faq": [
      {
        "q": "Почему увеличение получается отрицательным?",
        "a": "Отрицательный знак показывает перевёрнутое изображение: −0,5 означает половину линейного размера. Это соглашение идеальной модели, а не описание каждого сложного объектива."
      },
      {
        "q": "Что происходит, когда предмет ровно в фокусе?",
        "a": "У собирающей линзы лучи от точки в фокальной плоскости выходят параллельно: говорят об изображении на бесконечности. На конечном экране оно не фокусируется. Числовая формула делит на d₀−f=0, поэтому конечный результат не выдаётся."
      },
      {
        "q": "Когда линза работает как лупа?",
        "a": "Для собирающей линзы при 0<d₀<f изображение мнимое, прямое и линейно увеличенное. Для рассеивающей линзы и действительного предмета оно тоже мнимое и прямое, но уменьшенное. Линейный коэффициент этой страницы не равен угловому увеличению наблюдения через лупу."
      },
      {
        "q": "Что такое оптическая сила в диоптриях?",
        "a": "Параксиальная тонкая линза с одинаковой внешней средой по обе стороны. Толщина, аберрации, сложные объективы, поле зрения и угловое увеличение лупы исключены. Диоптрии здесь — обратные метры, не подбор очков или медицинский рецепт."
      }
    ],
    "disclaimer": "Параксиальная тонкая линза с одинаковой внешней средой по обе стороны. Толщина, аберрации, сложные объективы, поле зрения и угловое увеличение лупы исключены. Диоптрии здесь — обратные метры, не подбор очков или медицинский рецепт."
  },
  "en": {
    "longDescription": "Solve the thin-lens equation for a real object with d₀>0. All distances are in centimetres: f>0 for a converging lens, f<0 for a diverging lens; dᵢ>0 for a real image, dᵢ<0 for a virtual image. Magnification sign gives orientation and its magnitude the ratio of linear sizes. At d₀=f there is no finite image distance.",
    "howToUse": [
      "A converging lens takes a positive focal length, a diverging lens a negative one.",
      "A positive image distance means a real image on the far side of the lens; a negative one means a virtual image on the same side as the object.",
      "Negative magnification means an inverted image, positive means upright; the absolute value is how many times the size changed.",
      "The \"focal length\" mode picks the lens when both distances are already fixed by the layout."
    ],
    "howItWorks": "1/f = 1/d₀ + 1/dᵢ, magnification −dᵢ/d₀, optical power 100/f in dioptres.",
    "example": "An object 30 cm from a lens with a 10 cm focus forms an image at 15 cm, half the size and inverted.",
    "faq": [
      {
        "q": "Why is the magnification negative?",
        "a": "The negative sign denotes inversion: −0.5 means half the linear size. This is the ideal model’s convention, not a description of every compound lens."
      },
      {
        "q": "What happens when the object sits exactly at the focus?",
        "a": "A converging lens sends rays from a focal-plane point out parallel: the image is described as being at infinity. It cannot be focused on a finite screen. The numerical formula divides by d₀−f=0, so no finite result is returned."
      },
      {
        "q": "When does a lens act as a magnifying glass?",
        "a": "For a converging lens with 0<d₀<f, the image is virtual, upright and enlarged linearly. A diverging lens and real object also give a virtual upright image, but diminished. This page’s linear ratio is not the angular magnification when viewing through a loupe."
      },
      {
        "q": "What is optical power in dioptres?",
        "a": "Paraxial thin lens with the same surrounding medium on both sides. Thickness, aberrations, compound lenses, field of view and a loupe’s angular magnification are excluded. Dioptres here mean reciprocal metres, not spectacle selection or a medical prescription."
      }
    ],
    "disclaimer": "Paraxial thin lens with the same surrounding medium on both sides. Thickness, aberrations, compound lenses, field of view and a loupe’s angular magnification are excluded. Dioptres here mean reciprocal metres, not spectacle selection or a medical prescription."
  },
  "uk": {
    "longDescription": "Розв’яжіть формулу тонкої лінзи для дійсного предмета з d₀>0. Усі відстані вводяться в сантиметрах: f>0 для збиральної лінзи, f<0 для розсіювальної; dᵢ>0 для дійсного зображення, dᵢ<0 для уявного. Знак збільшення задає орієнтацію, модуль — відношення лінійних розмірів. За d₀=f скінченної відстані зображення немає.",
    "howToUse": [
      "Збиральна лінза задається додатною фокусною відстанню, розсіювальна — від’ємною.",
      "Введіть відстань від предмета до лінзи.",
      "Додатна відстань до зображення означає дійсне зображення, від’ємна — уявне."
    ],
    "howItWorks": "Формула тонкої лінзи 1/f = 1/d₀ + 1/dᵢ пов’язує фокусну відстань із відстанями до предмета й зображення. Збільшення дорівнює −dᵢ/d₀: від’ємний знак означає перевернуте зображення. Оптична сила рахується як 100/f у діоптріях, якщо f задано в сантиметрах.",
    "example": "Предмет за 30 см від лінзи з фокусом 10 см дає зображення за 15 см, зменшене вдвічі та перевернуте. Той самий предмет за 5 см дав би уявне збільшене зображення — режим лупи.",
    "faq": [
      {
        "q": "Коли зображення виходить уявним?",
        "a": "Для збиральної лінзи за 0<d₀<f зображення уявне, пряме й лінійно збільшене. Розсіювальна лінза з дійсним предметом теж дає уявне пряме зображення, але зменшене. Лінійний коефіцієнт сторінки не є кутовим збільшенням під час спостереження крізь лупу."
      },
      {
        "q": "Що означає від’ємне збільшення?",
        "a": "Що зображення перевернуте. Модуль показує, у скільки разів воно більше чи менше за предмет: −0,5 означає вдвічі менше й догори дриґом."
      },
      {
        "q": "Що таке діоптрія?",
        "a": "Діоптрія — обернений метр: +2 дптр відповідають f=+50 см, −3 дптр — f≈−33,33 см. Знак від’ємної фокусної відстані означає розсіювальну лінзу. Це арифметичні приклади, не рецепт на окуляри."
      },
      {
        "q": "Наскільки точна модель тонкої лінзи?",
        "a": "Вона припускає, що товщина лінзи мала порівняно з фокусною відстанню, а промені йдуть близько до осі. Реальні об’єктиви мають аберації, і їх рахують складніше."
      }
    ],
    "disclaimer": "Параксіальна тонка лінза з однаковим зовнішнім середовищем по обидва боки. Товщину, аберації, складні об’єктиви, поле зору й кутове збільшення лупи виключено. Діоптрії тут є оберненими метрами, не підбором окулярів або медичним рецептом."
  },
  "de": {
    "longDescription": "Löse die Dünnlinsengleichung für einen reellen Gegenstand mit d₀>0. Alle Abstände sind Zentimeter: f>0 bei einer Sammellinse, f<0 bei einer Zerstreuungslinse; dᵢ>0 für ein reelles, dᵢ<0 für ein virtuelles Bild. Das Vorzeichen der Vergrößerung zeigt die Orientierung, ihr Betrag das lineare Größenverhältnis. Bei d₀=f existiert keine endliche Bildweite.",
    "howToUse": [
      "Eine Sammellinse hat eine positive Brennweite, eine Zerstreuungslinse eine negative.",
      "Eine positive Bildweite bedeutet ein reelles Bild auf der anderen Seite der Linse; eine negative ein virtuelles Bild auf derselben Seite wie der Gegenstand.",
      "Ein negativer Abbildungsmaßstab bedeutet ein umgekehrtes Bild, ein positiver ein aufrechtes; der Betrag sagt, um wie viel sich die Größe geändert hat.",
      "Der Modus „Brennweite“ wählt die Linse, wenn beide Abstände durch den Aufbau bereits feststehen."
    ],
    "howItWorks": "1/f = 1/g + 1/b, Abbildungsmaßstab −b/g, Brechkraft 100/f in Dioptrien.",
    "example": "Ein Gegenstand 30 cm vor einer Linse mit 10 cm Brennweite erzeugt ein Bild bei 15 cm, halb so groß und umgekehrt.",
    "faq": [
      {
        "q": "Warum ist der Abbildungsmaßstab negativ?",
        "a": "Ein negatives Vorzeichen bedeutet Umkehrung: −0,5 ist die halbe lineare Größe. Dies ist die Konvention des idealen Modells, keine Beschreibung jedes komplexen Objektivs."
      },
      {
        "q": "Was passiert, wenn der Gegenstand genau im Brennpunkt steht?",
        "a": "Eine Sammellinse lässt Strahlen von einem Punkt in der Brennebene parallel austreten: Das Bild liegt im Unendlichen. Es lässt sich auf keinem endlichen Schirm fokussieren. Die Formel dividiert durch d₀−f=0 und liefert daher kein endliches Ergebnis."
      },
      {
        "q": "Wann wirkt eine Linse als Lupe?",
        "a": "Bei einer Sammellinse mit 0<d₀<f ist das Bild virtuell, aufrecht und linear vergrößert. Eine Zerstreuungslinse mit reellem Gegenstand erzeugt ebenfalls ein virtuelles aufrechtes, jedoch verkleinertes Bild. Dieses lineare Verhältnis ist nicht die Winkelvergrößerung beim Blick durch eine Lupe."
      },
      {
        "q": "Was ist die Brechkraft in Dioptrien?",
        "a": "Paraxiale dünne Linse mit gleichem Außenmedium auf beiden Seiten. Dicke, Abbildungsfehler, zusammengesetzte Objektive, Sichtfeld und Winkelvergrößerung einer Lupe sind ausgeschlossen. Dioptrien bedeuten hier inverse Meter, keine Brillenauswahl oder ärztliche Verordnung."
      }
    ],
    "disclaimer": "Paraxiale dünne Linse mit gleichem Außenmedium auf beiden Seiten. Dicke, Abbildungsfehler, zusammengesetzte Objektive, Sichtfeld und Winkelvergrößerung einer Lupe sind ausgeschlossen. Dioptrien bedeuten hier inverse Meter, keine Brillenauswahl oder ärztliche Verordnung."
  },
  "es": {
    "longDescription": "Resuelve la ecuación de lente delgada para un objeto real con d₀>0. Todas las distancias se introducen en centímetros: f>0 para lente convergente, f<0 para divergente; dᵢ>0 para imagen real, dᵢ<0 para virtual. El signo del aumento indica orientación y el módulo la relación de tamaños lineales. En d₀=f no hay distancia finita de imagen.",
    "howToUse": [
      "Una lente convergente lleva distancia focal positiva y una divergente, negativa.",
      "Una distancia a la imagen positiva significa una imagen real al otro lado de la lente; una negativa, una imagen virtual del mismo lado que el objeto.",
      "Un aumento negativo significa imagen invertida y uno positivo, derecha; el valor absoluto es cuántas veces cambió el tamaño.",
      "El modo «distancia focal» elige la lente cuando ambas distancias ya vienen fijadas por el montaje."
    ],
    "howItWorks": "1/f = 1/d₀ + 1/dᵢ, aumento −dᵢ/d₀, potencia óptica 100/f en dioptrías.",
    "example": "Un objeto a 30 cm de una lente con foco de 10 cm forma una imagen a 15 cm, de la mitad de tamaño e invertida.",
    "faq": [
      {
        "q": "¿Por qué el aumento es negativo?",
        "a": "El signo negativo indica inversión: −0,5 significa la mitad del tamaño lineal. Es la convención del modelo ideal, no una descripción de todos los objetivos compuestos."
      },
      {
        "q": "¿Qué ocurre cuando el objeto está exactamente en el foco?",
        "a": "Una lente convergente hace salir paralelos los rayos de un punto del plano focal: se habla de imagen en el infinito. No se enfoca en una pantalla a distancia finita. La fórmula divide por d₀−f=0 y no devuelve un resultado finito."
      },
      {
        "q": "¿Cuándo actúa una lente como lupa?",
        "a": "En una lente convergente con 0<d₀<f, la imagen es virtual, derecha y ampliada linealmente. Una divergente con objeto real también produce una imagen virtual derecha, pero reducida. La relación lineal de esta página no es el aumento angular al mirar por una lupa."
      },
      {
        "q": "¿Qué es la potencia óptica en dioptrías?",
        "a": "Lente delgada paraxial con el mismo medio exterior a ambos lados. Se excluyen espesor, aberraciones, objetivos compuestos, campo visual y aumento angular de una lupa. Las dioptrías son metros inversos, no selección de gafas ni receta médica."
      }
    ],
    "disclaimer": "Lente delgada paraxial con el mismo medio exterior a ambos lados. Se excluyen espesor, aberraciones, objetivos compuestos, campo visual y aumento angular de una lupa. Las dioptrías son metros inversos, no selección de gafas ni receta médica."
  }
};
