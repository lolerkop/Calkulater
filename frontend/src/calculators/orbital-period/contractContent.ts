// Individually reviewed against all five actual188 native bodies; human editorial review pending.
export const contract = {
  "ru": {
    "longDescription": "Найдите период и скорость круговой орбиты в поле сферического центрального тела. Радиус отсчитывается от центра: для высоты 400 км над условной Землёй радиусом 6371 км нужен r=6771 км. Масса спутника пренебрежимо мала относительно центральной. Строка оборотов в сутки использует 86 400 секунд, а не звёздные сутки и не расписание пролётов.",
    "howToUse": [
      "Масса центрального тела в единицах 10²⁴ кг: у Земли 5,972, у Солнца 1 989 100.",
      "Радиус орбиты отсчитывается от ЦЕНТРА тела, а не от поверхности: высота 400 км над Землёй — это 6771 км.",
      "Около 42 164 км от центра Земли период близок к звёздным суткам, примерно 23 ч 56 мин. Для геостационарности орбита также должна быть круговой, экваториальной и направленной по вращению Земли. По одному радиусу калькулятор эти условия не проверяет."
    ],
    "howItWorks": "T = 2π√(r³/GM), где G = 6,6743·10⁻¹¹, а орбитальная скорость v = √(GM/r).",
    "example": "Орбита радиусом 6771 км вокруг Земли даёт виток за 5545 секунд — около полутора часов.",
    "faq": [
      {
        "q": "Почему радиус считается от центра, а не от поверхности?",
        "a": "Потому что притяжение зависит от расстояния до центра масс. Спутник на высоте 400 км находится на радиусе 6371 + 400 = 6771 км, и подстановка одной высоты дала бы ошибку в несколько раз."
      },
      {
        "q": "Чем это отличается от центростремительной силы?",
        "a": "Та берёт период из заданной скорости. Здесь скорость не задаётся — она выводится из массы центрального тела, поэтому достаточно знать, вокруг чего и на каком радиусе летит тело."
      },
      {
        "q": "Почему геостационар именно на 42 164 км?",
        "a": "Около 42 164 км от центра Земли период близок к звёздным суткам, примерно 23 ч 56 мин. Для геостационарности орбита также должна быть круговой, экваториальной и направленной по вращению Земли. По одному радиусу калькулятор эти условия не проверяет."
      },
      {
        "q": "Учитывается ли масса спутника?",
        "a": "Отсутствие массы спутника — приближение малого тела. В двухтелесной модели T=2π√(a³/[G(M+m)]), где a — большая полуось относительной орбиты. Эта страница считает круговой случай при m≪M."
      }
    ],
    "disclaimer": "Круговая орбита вне сферического центрального тела, малая масса спутника, G=6,6743·10⁻¹¹. Эксцентриситет, наклонение, возмущения и атмосфера не задаются. Для сопоставимых масс двух тел период зависит от суммы масс."
  },
  "en": {
    "longDescription": "Find period and speed for a circular orbit around a spherical central body. Radius is measured from the centre: a 400 km altitude above the illustrative 6371 km Earth requires r=6771 km. Satellite mass is negligible compared with the central body. Orbits per day uses 86,400 seconds, not a sidereal day or a pass schedule.",
    "howToUse": [
      "Central body mass in units of 10²⁴ kg: Earth is 5.972, the Sun 1,989,100.",
      "The orbit radius is measured from the CENTRE of the body, not the surface: 400 km above Earth is 6771 km.",
      "Near 42,164 km from Earth’s centre the period is close to a sidereal day, about 23 h 56 min. A geostationary orbit must also be circular, equatorial and prograde. Radius alone does not let this calculator verify those conditions."
    ],
    "howItWorks": "T = 2π√(r³/GM) with G = 6.6743·10⁻¹¹, and the orbital speed is v = √(GM/r).",
    "example": "A 6771 km orbit around Earth takes 5545 seconds — about an hour and a half.",
    "faq": [
      {
        "q": "Why is the radius measured from the centre?",
        "a": "Because gravity depends on the distance to the centre of mass. A satellite 400 km up sits at a radius of 6371 + 400 = 6771 km, and substituting the altitude alone would be wrong by a factor of several."
      },
      {
        "q": "How does this differ from centripetal force?",
        "a": "That one takes the period from a given speed. Here the speed is derived from the central mass, so knowing what you orbit and at what radius is enough."
      },
      {
        "q": "Why is geostationary orbit at 42,164 km?",
        "a": "Near 42,164 km from Earth’s centre the period is close to a sidereal day, about 23 h 56 min. A geostationary orbit must also be circular, equatorial and prograde. Radius alone does not let this calculator verify those conditions."
      },
      {
        "q": "Does the satellite mass matter?",
        "a": "Omitting satellite mass is a small-body approximation. In the two-body model T=2π√(a³/[G(M+m)]), with a the semimajor axis of the relative orbit. This page calculates the circular case with m≪M."
      }
    ],
    "disclaimer": "Circular orbit outside a spherical central body, negligible satellite mass, G=6.6743·10⁻¹¹. Eccentricity, inclination, perturbations and atmosphere are not entered. For comparable masses, a two-body period depends on the sum of both masses."
  },
  "uk": {
    "longDescription": "Знайдіть період і швидкість колової орбіти в полі сферичного центрального тіла. Радіус відлічується від центра: для висоти 400 км над умовною Землею радіусом 6371 км потрібне r=6771 км. Маса супутника нехтовно мала відносно центрального тіла. Оберти за добу використовують 86 400 секунд, не зоряну добу й не розклад прольотів.",
    "howToUse": [
      "Введіть масу центрального тіла в одиницях 10²⁴ кг.",
      "Введіть радіус орбіти від центра тіла, а не від його поверхні.",
      "Біля 42 164 км від центра Землі період близький до зоряної доби, приблизно 23 год 56 хв. Для геостаціонарності орбіта також має бути коловою, екваторіальною та спрямованою за обертанням Землі. За самим радіусом калькулятор цих умов не перевіряє."
    ],
    "howItWorks": "Період рахується як T = 2π√(r³/GM), де G = 6,6743·10⁻¹¹, а орбітальна швидкість — як v = √(GM/r). Куб радіуса під коренем і є третім законом Кеплера: квадрат періоду пропорційний кубу радіуса орбіти.",
    "example": "Орбіта радіусом 6771 км навколо Землі дає виток за 5545 секунд — близько півтори години. Це типова низька навколоземна орбіта, приблизно 400 км над поверхнею.",
    "faq": [
      {
        "q": "Чому радіус береться від центра?",
        "a": "Бо тяжіння визначається відстанню до центра мас. Для орбіти 400 км над Землею радіус дорівнює 6371 + 400 = 6771 км, і підстановка самої висоти дала б безглузді значення."
      },
      {
        "q": "Чому супутник не падає?",
        "a": "Він падає — але горизонтальна швидкість така, що поверхня Землі викривляється під ним рівно з тією самою швидкістю. Орбіта і є нескінченним падінням повз планету."
      },
      {
        "q": "Що таке геостаціонарна орбіта?",
        "a": "Біля 42 164 км від центра Землі період близький до зоряної доби, приблизно 23 год 56 хв. Для геостаціонарності орбіта також має бути коловою, екваторіальною та спрямованою за обертанням Землі. За самим радіусом калькулятор цих умов не перевіряє."
      },
      {
        "q": "Чи залежить період від маси супутника?",
        "a": "Відсутність маси супутника є наближенням малого тіла. У двотіловій моделі T=2π√(a³/[G(M+m)]), де a — велика піввісь відносної орбіти. Ця сторінка рахує коловий випадок за m≪M."
      }
    ],
    "disclaimer": "Колова орбіта поза сферичним центральним тілом, мала маса супутника, G=6,6743·10⁻¹¹. Ексцентриситет, нахил, збурення й атмосферу не задано. Для співмірних мас двох тіл період залежить від суми мас."
  },
  "de": {
    "longDescription": "Berechne Periode und Geschwindigkeit einer Kreisbahn um einen kugelförmigen Zentralkörper. Der Radius wird vom Mittelpunkt gemessen: Bei 400 km Höhe über einer beispielhaften Erde mit 6371 km Radius ist r=6771 km nötig. Die Satellitenmasse ist gegenüber der Zentralmasse vernachlässigbar. Umläufe pro Tag verwenden 86 400 Sekunden, keinen Sterntag und keinen Überflugplan.",
    "howToUse": [
      "Masse des Zentralkörpers in Einheiten von 10²⁴ kg: die Erde hat 5,972, die Sonne 1 989 100.",
      "Der Bahnradius wird vom MITTELPUNKT des Körpers gemessen und nicht von der Oberfläche: 400 km über der Erde sind 6771 km.",
      "Bei etwa 42 164 km vom Erdmittelpunkt liegt die Periode nahe einem Sterntag, ungefähr 23 h 56 min. Eine geostationäre Bahn muss außerdem kreisförmig, äquatorial und gleichgerichtet zur Erdrotation sein. Der Radius allein erlaubt dem Rechner keine Prüfung dieser Bedingungen."
    ],
    "howItWorks": "T = 2π√(r³/GM) mit G = 6,6743·10⁻¹¹, und die Bahngeschwindigkeit ist v = √(GM/r).",
    "example": "Eine Bahn mit 6771 km um die Erde dauert 5545 Sekunden — rund anderthalb Stunden.",
    "faq": [
      {
        "q": "Warum wird der Radius vom Mittelpunkt gemessen?",
        "a": "Weil die Schwerkraft vom Abstand zum Massenmittelpunkt abhängt. Ein Satellit in 400 km Höhe sitzt auf einem Radius von 6371 + 400 = 6771 km, und allein die Höhe einzusetzen wäre um ein Mehrfaches falsch."
      },
      {
        "q": "Wie unterscheidet sich das von der Zentripetalkraft?",
        "a": "Jene nimmt die Umlaufzeit aus einer gegebenen Geschwindigkeit. Hier folgt die Geschwindigkeit aus der Zentralmasse, es genügt also zu wissen, was du umkreist und auf welchem Radius."
      },
      {
        "q": "Warum liegt die geostationäre Bahn bei 42 164 km?",
        "a": "Bei etwa 42 164 km vom Erdmittelpunkt liegt die Periode nahe einem Sterntag, ungefähr 23 h 56 min. Eine geostationäre Bahn muss außerdem kreisförmig, äquatorial und gleichgerichtet zur Erdrotation sein. Der Radius allein erlaubt dem Rechner keine Prüfung dieser Bedingungen."
      },
      {
        "q": "Zählt die Masse des Satelliten?",
        "a": "Das Weglassen der Satellitenmasse ist eine Kleinmassennäherung. Im Zweikörpermodell gilt T=2π√(a³/[G(M+m)]), wobei a die große Halbachse der relativen Bahn ist. Diese Seite berechnet die Kreisbahn mit m≪M."
      }
    ],
    "disclaimer": "Kreisbahn außerhalb eines kugelförmigen Zentralkörpers, vernachlässigbare Satellitenmasse, G=6,6743·10⁻¹¹. Exzentrizität, Neigung, Störungen und Atmosphäre werden nicht eingegeben. Bei vergleichbaren Massen hängt die Zweikörperperiode von ihrer Summe ab."
  },
  "es": {
    "longDescription": "Halla el periodo y la velocidad de una órbita circular alrededor de un cuerpo central esférico. El radio parte del centro: 400 km de altura sobre la Tierra ilustrativa de radio 6371 km requiere r=6771 km. La masa del satélite es despreciable frente a la central. Las vueltas por día usan 86 400 segundos, no un día sidéreo ni un horario de pasos.",
    "howToUse": [
      "Masa del cuerpo central en unidades de 10²⁴ kg: la Tierra es 5,972 y el Sol, 1 989 100.",
      "El radio de la órbita se mide desde el CENTRO del cuerpo, no desde la superficie: 400 km sobre la Tierra son 6771 km.",
      "Cerca de 42 164 km del centro terrestre el periodo se aproxima a un día sidéreo, unas 23 h 56 min. Una órbita geoestacionaria debe ser además circular, ecuatorial y prógrada. El radio por sí solo no permite verificar esas condiciones."
    ],
    "howItWorks": "T = 2π√(r³/GM) con G = 6,6743·10⁻¹¹, y la velocidad orbital es v = √(GM/r).",
    "example": "Una órbita de 6771 km alrededor de la Tierra dura 5545 segundos, alrededor de hora y media.",
    "faq": [
      {
        "q": "¿Por qué el radio se mide desde el centro?",
        "a": "Porque la gravedad depende de la distancia al centro de masas. Un satélite a 400 km de altura está a un radio de 6371 + 400 = 6771 km, y poner solo la altitud fallaría por un factor de varias veces."
      },
      {
        "q": "¿En qué se diferencia de la fuerza centrípeta?",
        "a": "Aquella deduce el periodo de una velocidad dada. Aquí la velocidad se deriva de la masa central, así que basta con saber alrededor de qué orbitas y a qué radio."
      },
      {
        "q": "¿Por qué la órbita geoestacionaria está a 42 164 km?",
        "a": "Cerca de 42 164 km del centro terrestre el periodo se aproxima a un día sidéreo, unas 23 h 56 min. Una órbita geoestacionaria debe ser además circular, ecuatorial y prógrada. El radio por sí solo no permite verificar esas condiciones."
      },
      {
        "q": "¿Importa la masa del satélite?",
        "a": "Omitir la masa del satélite es una aproximación de cuerpo pequeño. En el modelo de dos cuerpos T=2π√(a³/[G(M+m)]), donde a es el semieje mayor de la órbita relativa. Esta página calcula el caso circular con m≪M."
      }
    ],
    "disclaimer": "Órbita circular fuera de un cuerpo central esférico, masa despreciable del satélite, G=6,6743·10⁻¹¹. No se introducen excentricidad, inclinación, perturbaciones ni atmósfera. Con masas comparables, el periodo de dos cuerpos depende de la suma de sus masas."
  }
};
