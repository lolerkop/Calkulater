import type { CalculatorCopy } from '../../lib/platform/types';

type Body = Pick<CalculatorCopy, 'shortDescription' | 'seoDescription' | 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

// Subject-specific retained and amended copy; source and calculation limits are explicit.
export const contractContent: Record<'ru'|'en'|'uk'|'de'|'es', Body> = {
  "ru": {
    "longDescription": "Решает шар от любой известной величины: радиуса, диаметра или самого объёма. Обратный ход нужен чаще, чем кажется — по объёму ёмкости узнают её радиус, чтобы понять, пройдёт ли она в люк. Объём выводится в кубе выбранной единицы, поверхность — в квадрате: это разные степени одной и той же длины, и переводить их одинаковым множителем нельзя.",
    "howToUse": [
      "Выберите единицу длины.",
      "Укажите, что известно: радиус, диаметр или объём.",
      "Введите значение и прочитайте остальные.",
      "В режиме объёма вводите куб выбранной единицы, например см³, а не литры. 1 л = 1000 см³. Радиус, диаметр и объём положительны; смена единицы не переводит введённое число."
    ],
    "howItWorks": "V = (4 ÷ 3) · π · r³ и S = 4 · π · r²; радиус по объёму находится как кубический корень из 3V ÷ (4π).",
    "example": "Шар радиусом 3 м имеет объём 113,097 м³ и поверхность 113,097 м².",
    "faq": [
      {
        "q": "Почему объём и поверхность при радиусе 3 совпали?",
        "a": "При числовом значении радиуса 3 в выбранной единице численные значения объёма и площади поверхности совпадают. Это не равенство физических величин: объём выражен в кубических единицах, площадь — в квадратных. Смена масштаба единицы меняет такое числовое совпадение."
      },
      {
        "q": "Как найти радиус, зная объём?",
        "a": "Выберите режим по объёму: радиус извлекается кубическим корнем из 3V ÷ (4π), после чего считается поверхность."
      },
      {
        "q": "Чем шар отличается от сферы?",
        "a": "Сфера — только поверхность, шар — тело вместе с внутренностью. Объём есть у шара, площадь поверхности — у ограничивающей его сферы."
      },
      {
        "q": "Учитывается ли толщина стенки ёмкости?",
        "a": "Нет. Расчёт идеальный: считается геометрическое тело, а не бак с материалом стенок."
      }
    ],
    "shortDescription": "Объём и поверхность шара по радиусу, диаметру или объёму.",
    "seoDescription": "Рассчитайте объём и площадь поверхности шара по радиусу, диаметру или известному объёму.",
    "disclaimer": "Идеальный шар; поверхность и объём не включают стенки и отверстия. Радиус от объёма определяет геометрический размер, но не наружный размер бака, если объём задан как вместимость. Все выходы округлены."
  },
  "en": {
    "longDescription": "Solves a sphere from whichever value you have: radius, diameter or the volume itself. The reverse direction comes up more often than expected — a tank volume tells you the radius, which tells you whether it fits through a hatch. The volume is reported in the cube of the chosen unit and the surface in its square: different powers of the same length, and they cannot share a conversion factor.",
    "howToUse": [
      "Choose the length unit.",
      "Say whether you know the radius, the diameter or the volume.",
      "Enter it and read the rest.",
      "In volume mode enter the cube of the selected unit, for example cm³, not litres. 1 L = 1000 cm³. Radius, diameter and volume are positive; changing the unit does not convert the entered number."
    ],
    "howItWorks": "V = (4 ÷ 3) · π · r³ and S = 4 · π · r²; the radius from a volume is the cube root of 3V ÷ (4π).",
    "example": "A sphere of radius 3 m has a volume of 113.097 m³ and a surface area of 113.097 m².",
    "faq": [
      {
        "q": "Why do the volume and surface match at radius 3?",
        "a": "When the numerical radius is 3 in the selected unit, the numerical volume and surface area coincide. The physical quantities are not equal: volume uses cubic units and area uses square units. Changing the unit scale changes that numerical coincidence."
      },
      {
        "q": "How do I find the radius from a volume?",
        "a": "Choose the volume mode: the radius is the cube root of 3V ÷ (4π), and the surface follows from it."
      },
      {
        "q": "What is the difference between a sphere and a ball?",
        "a": "A sphere is the surface only; a ball is the solid together with its interior. Volume belongs to the ball, surface area to the sphere bounding it."
      },
      {
        "q": "Is the wall thickness of a tank taken into account?",
        "a": "No. The calculation is ideal — a geometric solid, not a vessel with material walls."
      }
    ],
    "shortDescription": "Volume and surface area of a sphere from its radius, diameter or volume.",
    "seoDescription": "Calculate the volume and surface area of a sphere from its radius, diameter or a known volume.",
    "disclaimer": "An ideal ball; surface and volume do not include walls or openings. Radius recovered from volume gives a geometric size, not a tank’s outer size when the input is internal capacity. Outputs are rounded."
  },
  "uk": {
    "longDescription": "Калькулятор розв’язує кулю від будь-якої відомої величини: радіуса, діаметра або самого об’єму. Зворотний хід потрібен частіше, ніж здається, — за об’ємом ємності дізнаються її радіус, щоб зрозуміти, чи пройде вона в люк. Об’єм виходить у кубі вибраної одиниці, поверхня — у квадраті: це різні степені однієї довжини, і переводити їх однаковим множником не можна.",
    "howToUse": [
      "Виберіть одиницю довжини.",
      "Укажіть, що відомо: радіус, діаметр чи об’єм.",
      "Введіть відоме значення.",
      "Прочитайте решту величин — вони порахуються одразу.",
      "У режимі об’єму вводьте куб вибраної одиниці, наприклад см³, а не літри. 1 л = 1000 см³. Радіус, діаметр та об’єм додатні; зміна одиниці не переводить число."
    ],
    "howItWorks": "Об’єм дорівнює V = (4 ÷ 3) · π · r³, площа поверхні — S = 4 · π · r². У режимі за діаметром діаметр спершу ділиться навпіл, а в режимі за об’ємом виводиться кубічним коренем: r = ∛(3V ÷ 4π). Далі розрахунок в усіх режимах спільний.",
    "example": "Куля радіусом 3 м має об’єм 113,097 м³ і поверхню 113,097 м². Числа збіглися випадково: 4πr² і (4/3)πr³ рівні рівно за r = 3, а одиниці в них різні — квадрат і куб довжини.",
    "faq": [
      {
        "q": "Чому за радіуса 3 об’єм і поверхня збіглися?",
        "a": "За числового радіуса 3 у вибраній одиниці числові значення об’єму та площі поверхні збігаються. Фізичні величини не рівні: об’єм має кубічні одиниці, площа — квадратні. Зміна масштабу одиниці змінює такий числовий збіг."
      },
      {
        "q": "Як знайти радіус, знаючи об’єм?",
        "a": "Виберіть режим за об’ємом: радіус видобувається кубічним коренем із 3V ÷ 4π, після чого рахується поверхня. Робити це вручну незручно саме через кубічний корінь."
      },
      {
        "q": "Чим куля відрізняється від сфери?",
        "a": "Сфера — тільки поверхня, куля — тіло разом із внутрішністю. Об’єм є в кулі, площа поверхні — у сфери, що її обмежує."
      },
      {
        "q": "Чи враховується товщина стінки ємності?",
        "a": "Ні. Розрахунок ідеальний: рахується геометричне тіло, а не бак із матеріалом стінок. Для порожнистої кулі відніміть об’єм внутрішньої кулі від зовнішньої."
      },
      {
        "q": "У скільки разів зросте об’єм, якщо подвоїти радіус?",
        "a": "У вісім разів, а поверхня — учетверо. Об’єм росте як куб лінійного розміру, поверхня — як квадрат. Це геометричні множники; швидкість охолодження потребує додаткової фізичної моделі."
      }
    ],
    "shortDescription": "Об’єм і поверхня кулі за радіусом, діаметром або об’ємом.",
    "seoDescription": "Обчисліть об’єм і площу поверхні кулі за радіусом, діаметром або відомим об’ємом.",
    "disclaimer": "Ідеальна куля; поверхня й об’єм не включають стінки та отвори. Радіус за об’ємом дає геометричний розмір, а не зовнішній розмір бака, якщо ввід означає місткість. Виходи округлені."
  },
  "de": {
    "longDescription": "Löst eine Kugel aus dem Wert, den du gerade hast: Radius, Durchmesser oder das Volumen selbst. Die umgekehrte Richtung kommt häufiger vor als gedacht — ein Tankvolumen nennt dir den Radius, und der sagt dir, ob er durch eine Luke passt. Das Volumen wird in der dritten Potenz der gewählten Einheit ausgewiesen und die Oberfläche in ihrer zweiten: verschiedene Potenzen derselben Länge, und sie können keinen gemeinsamen Umrechnungsfaktor haben.",
    "howToUse": [
      "Wähle die Längeneinheit.",
      "Gib an, ob du den Radius, den Durchmesser oder das Volumen kennst.",
      "Trage ihn ein und lies den Rest ab.",
      "Im Volumenmodus gib die dritte Potenz der gewählten Einheit ein, zum Beispiel cm³ statt Liter. 1 L = 1000 cm³. Radius, Durchmesser und Volumen sind positiv; ein Einheitenwechsel rechnet die Zahl nicht um."
    ],
    "howItWorks": "V = (4 ÷ 3) · π · r³ und S = 4 · π · r²; der Radius aus einem Volumen ist die dritte Wurzel aus 3V ÷ (4π).",
    "example": "Eine Kugel mit dem Radius 3 m hat ein Volumen von 113,097 m³ und eine Oberfläche von 113,097 m².",
    "faq": [
      {
        "q": "Warum stimmen Volumen und Oberfläche beim Radius 3 überein?",
        "a": "Bei einem numerischen Radius von 3 in der gewählten Einheit stimmen die Zahlenwerte von Volumen und Oberfläche überein. Die physikalischen Größen sind nicht gleich: Volumen hat Kubikeinheiten, Fläche Quadrateinheiten. Eine andere Einheitenskala ändert diesen Zahlenzusammenfall."
      },
      {
        "q": "Wie finde ich den Radius aus einem Volumen?",
        "a": "Wähle den Modus für das Volumen: der Radius ist die dritte Wurzel aus 3V ÷ (4π), und die Oberfläche folgt daraus."
      },
      {
        "q": "Was ist der Unterschied zwischen Kugelfläche und Kugelkörper?",
        "a": "Die Kugelfläche ist allein die Oberfläche; der Kugelkörper ist der Körper samt seinem Inneren. Das Volumen gehört zum Körper, die Oberfläche zu der Fläche, die ihn begrenzt."
      },
      {
        "q": "Wird die Wandstärke eines Tanks berücksichtigt?",
        "a": "Nein. Die Rechnung ist ideal — ein geometrischer Körper und kein Behälter mit Wänden aus Werkstoff."
      }
    ],
    "shortDescription": "Volumen und Oberfläche einer Kugel aus Radius, Durchmesser oder Volumen.",
    "seoDescription": "Berechne Volumen und Oberfläche einer Kugel aus ihrem Radius, ihrem Durchmesser oder einem bekannten Volumen.",
    "disclaimer": "Idealer Kugelkörper; Wände und Öffnungen sind nicht enthalten. Der Radius aus dem Volumen ergibt eine geometrische Größe, nicht die äußere Tankgröße bei eingegebenem Innenvolumen. Ergebnisse sind gerundet."
  },
  "es": {
    "longDescription": "Resuelve una esfera a partir del valor que tengas: radio, diámetro o el propio volumen. El sentido inverso aparece más a menudo de lo que se cree: el volumen de un depósito da el radio, y el radio dice si pasa por una boca. El volumen se da en el cubo de la unidad elegida y la superficie, en su cuadrado: potencias distintas de la misma longitud, que no pueden compartir un factor de conversión.",
    "howToUse": [
      "Elige la unidad de longitud.",
      "Indica si conoces el radio, el diámetro o el volumen.",
      "Introdúcelo y consulta el resto.",
      "En modo de volumen introduce el cubo de la unidad elegida, por ejemplo cm³, no litros. 1 L = 1000 cm³. Radio, diámetro y volumen son positivos; cambiar la unidad no convierte el número."
    ],
    "howItWorks": "V = (4 ÷ 3) · π · r³ y S = 4 · π · r²; el radio a partir de un volumen es la raíz cúbica de 3V ÷ (4π).",
    "example": "Una esfera de 3 m de radio tiene un volumen de 113,097 m³ y una superficie de 113,097 m².",
    "faq": [
      {
        "q": "¿Por qué coinciden volumen y superficie con radio 3?",
        "a": "Con radio numérico 3 en la unidad elegida coinciden los valores numéricos de volumen y superficie. Las magnitudes físicas no son iguales: el volumen usa unidades cúbicas y el área, cuadradas. Cambiar la escala de unidad cambia esa coincidencia numérica."
      },
      {
        "q": "¿Cómo hallo el radio a partir de un volumen?",
        "a": "Elige el modo del volumen: el radio es la raíz cúbica de 3V ÷ (4π), y la superficie sale de él."
      },
      {
        "q": "¿Qué diferencia hay entre esfera y bola?",
        "a": "La esfera es solo la superficie; la bola es el cuerpo con su interior. El volumen pertenece a la bola y la superficie, a la esfera que la limita."
      },
      {
        "q": "¿Se tiene en cuenta el espesor de pared de un depósito?",
        "a": "No. El cálculo es ideal: un cuerpo geométrico, no un recipiente con paredes materiales."
      }
    ],
    "shortDescription": "Volumen y superficie de una esfera a partir del radio, el diámetro o el volumen.",
    "seoDescription": "Calcula el volumen y la superficie de una esfera a partir de su radio, su diámetro o un volumen conocido.",
    "disclaimer": "Bola ideal; superficie y volumen no incluyen paredes ni aberturas. El radio obtenido del volumen da un tamaño geométrico, no el tamaño exterior del depósito si la entrada es su capacidad interna. Los resultados se redondean."
  }
};
