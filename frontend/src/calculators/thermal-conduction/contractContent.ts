// Individually reviewed against all five actual188 native bodies; human editorial review pending.
export const contract = {
  "ru": {
    "longDescription": "Рассчитайте стационарный тепловой поток через один плоский однородный слой. Разность температур задаётся между его поверхностями, теплопроводность считается постоянной. Показанный коэффициент k/d относится только к слою, а не к полной стене или окну с поверхностным теплообменом. Суточная энергия предполагает неизменные условия все 24 часа.",
    "howToUse": [
      "Введите площадь конструкции.",
      "Задайте толщину слоя в метрах: 200 мм — это 0,2.",
      "Укажите теплопроводность: минвата 0,04, кирпич 0,7, стекло 1,0, дерево 0,15 Вт/(м·К).",
      "Задайте перепад температур между сторонами."
    ],
    "howItWorks": "Поток = теплопроводность × площадь × перепад ÷ толщину. Сопротивление слоя = толщина ÷ теплопроводность, а коэффициент теплопередачи — обратная ему величина.",
    "example": "Стена 10 м² с 200 мм минваты при перепаде 25 К пропускает 50 Вт.",
    "faq": [
      {
        "q": "Почему у стекла получается огромный поток?",
        "a": "Потому что считается только теплопроводность самого стекла, а его сопротивление ничтожно. Настоящее окно держит тепло плёнками воздуха у поверхностей и прослойкой стеклопакета."
      },
      {
        "q": "Как сложить несколько слоёв?",
        "a": "Для последовательных плоских слоёв одинаковой площади Rслоёв=Σdᵢ/kᵢ. Для полного коэффициента конструкции к сумме добавляют соответствующие поверхностные и контактные сопротивления. Их величина зависит от условий; здесь они не подставляются автоматически."
      },
      {
        "q": "Чем это отличается от расчёта мощности отопления?",
        "a": "Там считают, сколько тепла нужно подать в помещение по его объёму. Здесь считают, сколько уходит через конкретную конструкцию по её теплопроводности."
      },
      {
        "q": "Почему перепад можно задать отрицательным?",
        "a": "Потому что поток может идти внутрь: летом улица теплее помещения. Знак показывает направление, величина от этого не меняется."
      }
    ],
    "disclaimer": "Одномерная стационарная теплопроводность одного слоя с постоянным k. Плёнки у поверхностей, излучение, мостики холода, контактные сопротивления и накопление тепла исключены. Отрицательный ΔT меняет направление потока; нулевой даёт нулевой поток."
  },
  "en": {
    "longDescription": "Calculate steady heat flow through one flat uniform layer. Enter the temperature difference between its faces; conductivity is constant. The shown coefficient k/d belongs to this layer, not a complete wall or window with surface heat transfer. Daily energy assumes the same conditions for all 24 hours.",
    "howToUse": [
      "Enter the area of the construction.",
      "Set the layer thickness in metres: 200 mm is 0.2.",
      "Give the conductivity: mineral wool 0.04, brick 0.7, glass 1.0, timber 0.15 W/(m·K).",
      "Set the temperature difference across the layer."
    ],
    "howItWorks": "Flow = conductivity × area × temperature difference ÷ thickness. Thermal resistance = thickness ÷ conductivity, and the U-value is its reciprocal.",
    "example": "A 10 m² wall with 200 mm of mineral wool at a 25 K difference passes 50 W.",
    "faq": [
      {
        "q": "Why does glass give such an enormous flow?",
        "a": "Because only the conduction of the glass itself is counted, and its resistance is negligible. A real window holds heat through the air films at its surfaces and the cavity between panes."
      },
      {
        "q": "How do I combine several layers?",
        "a": "For plane layers in series with equal area, Rlayers=Σdᵢ/kᵢ. A complete assembly coefficient also needs the relevant surface and contact resistances. They depend on conditions and are not automatically inserted here."
      },
      {
        "q": "How is this different from a heating power calculator?",
        "a": "That works out how much heat a room needs from its volume. This works out how much escapes through one specific construction from its conductivity."
      },
      {
        "q": "Why can the difference be negative?",
        "a": "Because the flow can run inward: in summer the outside is warmer than the room. The sign shows direction; the magnitude is unchanged."
      }
    ],
    "disclaimer": "One-dimensional steady conduction through one layer with constant k. Surface films, radiation, thermal bridges, contact resistances and heat storage are excluded. Negative ΔT reverses flow; zero ΔT gives zero flow."
  },
  "uk": {
    "longDescription": "Розрахуйте стаціонарний тепловий потік через один плоский однорідний шар. Різниця температур задана між його поверхнями, теплопровідність стала. Коефіцієнт k/d стосується тільки шару, не повної стіни або вікна з поверхневим теплообміном. Добова енергія передбачає незмінні умови всі 24 години.",
    "howToUse": [
      "Введіть площу конструкції.",
      "Задайте товщину шару в метрах: 200 мм — це 0,2.",
      "Укажіть теплопровідність: мінвата 0,04, цегла 0,7, скло 1,0, дерево 0,15 Вт/(м·К).",
      "Введіть перепад температури між боками."
    ],
    "howItWorks": "Потік дорівнює теплопровідність × площа × перепад ÷ товщину. Термічний опір шару дорівнює товщина ÷ теплопровідність, а коефіцієнт теплопередачі — обернена до нього величина. Розрахунок стаціонарний: припускається, що температури вже усталилися.",
    "example": "Шар 10 м² завтовшки 0,2 м за k=0,04 Вт/(м·К) і ΔT=25 К пропускає 50 Вт. За k=0,7 за тих самих умов виходить 875 Вт; це порівняння шарів, не повних стін.",
    "faq": [
      {
        "q": "Що таке термічний опір R?",
        "a": "Для послідовних плоских шарів однакової площі Rшарів=Σdᵢ/kᵢ. Повний коефіцієнт конструкції потребує також відповідних поверхневих і контактних опорів. Вони залежать від умов і тут автоматично не додаються."
      },
      {
        "q": "Чому мінвата набагато краща за цеглу?",
        "a": "За ілюстративних k=0,04 і 0,7 Вт/(м·К) та однакової товщини опори відрізняються в 17,5 раза. Дійсна теплопровідність залежить від структури, вологості й температури; її беруть для конкретного матеріалу."
      },
      {
        "q": "Чи враховано тепловіддачу з поверхонь?",
        "a": "Ні. Температурна різниця задана між поверхнями самого шару. Для різниці температур між повітрям усередині й зовні потрібні поверхневі опори, які залежать від орієнтації, руху повітря та умов теплообміну."
      },
      {
        "q": "Чи працює розрахунок для нестаціонарного режиму?",
        "a": "Ні. Формула описує усталений стан. Для прогрівання конструкції після ввімкнення опалення потрібна теплоємність матеріалу, а не лише його провідність."
      }
    ],
    "disclaimer": "Одновимірна стаціонарна теплопровідність одного шару зі сталим k. Поверхневі плівки, випромінювання, теплові містки, контактні опори й накопичення тепла виключено. Від’ємне ΔT змінює напрямок потоку; нульове дає нульовий потік."
  },
  "de": {
    "longDescription": "Berechne den stationären Wärmestrom durch eine ebene homogene Schicht. Gib die Temperaturdifferenz zwischen ihren Oberflächen ein; die Wärmeleitfähigkeit ist konstant. Der Koeffizient k/d gehört nur zur Schicht, nicht zu einer vollständigen Wand oder einem Fenster mit Wärmeübergang. Die Tagesenergie setzt 24 Stunden unveränderte Bedingungen voraus.",
    "howToUse": [
      "Trage die Fläche des Bauteils ein.",
      "Setze die Schichtdicke in Metern: 200 mm sind 0,2.",
      "Gib die Leitfähigkeit an: Mineralwolle 0,04, Ziegel 0,7, Glas 1,0, Holz 0,15 W/(m·K).",
      "Setze den Temperaturunterschied über der Schicht."
    ],
    "howItWorks": "Strom = Leitfähigkeit × Fläche × Temperaturunterschied ÷ Dicke. Wärmedurchlasswiderstand = Dicke ÷ Leitfähigkeit, und der U-Wert ist sein Kehrwert.",
    "example": "Eine Wand von 10 m² mit 200 mm Mineralwolle lässt bei 25 K Unterschied 50 W durch.",
    "faq": [
      {
        "q": "Warum ergibt Glas einen so riesigen Strom?",
        "a": "Weil allein die Leitung des Glases selbst gezählt wird und sein Widerstand vernachlässigbar ist. Ein wirkliches Fenster hält die Wärme über die Luftschichten an seinen Oberflächen und den Zwischenraum zwischen den Scheiben."
      },
      {
        "q": "Wie füge ich mehrere Schichten zusammen?",
        "a": "Für ebene Schichten gleicher Fläche in Reihe gilt RSchichten=Σdᵢ/kᵢ. Der vollständige Bauteilkoeffizient benötigt zusätzlich die passenden Oberflächen- und Kontaktwiderstände. Sie sind bedingungsabhängig und werden hier nicht automatisch ergänzt."
      },
      {
        "q": "Wie unterscheidet sich das von einem Rechner für die Heizleistung?",
        "a": "Jener ermittelt aus dem Volumen, wie viel Wärme ein Raum braucht. Dieser ermittelt aus der Leitfähigkeit, wie viel durch ein bestimmtes Bauteil entweicht."
      },
      {
        "q": "Warum kann der Unterschied negativ sein?",
        "a": "Weil der Strom nach innen laufen kann: im Sommer ist es draußen wärmer als im Raum. Das Vorzeichen zeigt die Richtung; der Betrag bleibt derselbe."
      }
    ],
    "disclaimer": "Eindimensionale stationäre Wärmeleitung durch eine Schicht mit konstantem k. Oberflächenfilme, Strahlung, Wärmebrücken, Kontaktwiderstände und Wärmespeicherung sind ausgeschlossen. Negatives ΔT kehrt den Strom um; null ergibt keinen Strom."
  },
  "es": {
    "longDescription": "Calcula el flujo térmico estacionario por una capa plana uniforme. Introduce la diferencia de temperatura entre sus caras; la conductividad es constante. El coeficiente k/d corresponde solo a la capa, no a una pared o ventana completa con transferencia superficial. La energía diaria supone condiciones idénticas durante 24 horas.",
    "howToUse": [
      "Introduce el área del cerramiento.",
      "Fija el espesor de la capa en metros: 200 mm son 0,2.",
      "Indica la conductividad: lana mineral 0,04, ladrillo 0,7, vidrio 1,0, madera 0,15 W/(m·K).",
      "Fija la diferencia de temperatura a ambos lados de la capa."
    ],
    "howItWorks": "Flujo = conductividad × área × diferencia de temperatura ÷ espesor. Resistencia térmica = espesor ÷ conductividad, y la transmitancia es su inversa.",
    "example": "Un muro de 10 m² con 200 mm de lana mineral y una diferencia de 25 K deja pasar 50 W.",
    "faq": [
      {
        "q": "¿Por qué el vidrio da un flujo tan enorme?",
        "a": "Porque solo se cuenta la conducción del propio vidrio, y su resistencia es despreciable. Una ventana real retiene el calor gracias a las películas de aire de sus caras y a la cámara entre lunas."
      },
      {
        "q": "¿Cómo combino varias capas?",
        "a": "Para capas planas en serie con igual área, Rcapas=Σdᵢ/kᵢ. El coeficiente completo del cerramiento necesita además las resistencias superficiales y de contacto correspondientes. Dependen de las condiciones y aquí no se añaden automáticamente."
      },
      {
        "q": "¿En qué se diferencia de una calculadora de potencia de calefacción?",
        "a": "Aquella calcula cuánto calor necesita una habitación a partir de su volumen. Esta calcula cuánto se escapa por un cerramiento concreto a partir de su conductividad."
      },
      {
        "q": "¿Por qué la diferencia puede ser negativa?",
        "a": "Porque el flujo puede ir hacia dentro: en verano el exterior está más caliente que la habitación. El signo indica el sentido; el valor absoluto no cambia."
      }
    ],
    "disclaimer": "Conducción unidimensional estacionaria por una capa con k constante. Se excluyen películas superficiales, radiación, puentes térmicos, resistencias de contacto y acumulación de calor. ΔT negativo invierte el flujo; cero produce flujo nulo."
  }
};
