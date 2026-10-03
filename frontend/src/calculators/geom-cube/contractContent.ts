import type { CalculatorCopy } from '../../lib/platform/types';

type Body = Pick<CalculatorCopy, 'shortDescription' | 'seoDescription' | 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

// Subject-specific retained and amended copy; source and calculation limits are explicit.
export const contractContent: Record<'ru'|'en'|'uk'|'de'|'es', Body> = {
  "ru": {
    "longDescription": "Куб определяется ребром, объёмом или полной площадью поверхности. В обратных режимах сначала находится ребро: a = ∛V или a = √(S/6), и оно становится главным результатом. Диагональ грани a√2 лежит в плоскости квадрата, пространственная диагональ a√3 соединяет противоположные вершины. Это разные длины; последняя ограничивает длину прямого отрезка внутри куба, но не гарантирует размещение предмета с толщиной.",
    "howToUse": [
      "Выберите единицу длины.",
      "Укажите, какая величина известна.",
      "Введите её значение.",
      "Остальные величины куба посчитаются сразу."
    ],
    "howItWorks": "Объём V = a³, площадь поверхности S = 6a², диагональ грани a√2, диагональ куба a√3, сумма рёбер 12a. В обратных режимах ребро восстанавливается как a = ∛V или a = √(S/6).",
    "example": "У куба с ребром 3 см объём равен 27 см³, площадь поверхности — 54 см², а диагональ — 5,196 см.",
    "faq": [
      {
        "q": "Чем диагональ куба отличается от диагонали грани?",
        "a": "Диагональ грани a√2 лежит в квадратной грани; диагональ тела a√3 соединяет противоположные вершины. Последняя — максимальная длина прямого отрезка внутри куба. Для предмета с толщиной дополнительно нужны его поперечные размеры и размеры проёма."
      },
      {
        "q": "Как найти ребро, если известен объём?",
        "a": "Извлечь кубический корень: a = ∛V. Для объёма 64 см³ ребро равно 4 см. Выберите режим «объём», и калькулятор сделает это сам."
      },
      {
        "q": "Зачем нужен куб, если есть калькулятор прямоугольного параллелепипеда?",
        "a": "Куб — его частный случай, но у куба одна величина вместо трёх, и от неё считаются обратные задачи: по объёму или площади сразу находится ребро. У общего случая такой однозначной обратной задачи нет."
      },
      {
        "q": "Во сколько раз вырастет объём, если удвоить ребро?",
        "a": "При удвоении ребра объём увеличивается в 8 раз, площадь поверхности — в 4 раза, а диагонали — в 2 раза. Эти множители следуют из степеней a в формулах; скорость охлаждения по одной геометрии не рассчитывается."
      },
      {
        "q": "Как перевести результат в другие единицы?",
        "a": "Выбор единицы задаёт смысл введённых чисел и не выполняет перевод. Перед сменой см на м разделите длину на 100, площадь на 10 000 или объём на 1 000 000. Например, 64 см³ = 0,000064 м³; ребро в обоих случаях описывает один куб."
      }
    ],
    "shortDescription": "Объём, площадь поверхности и диагонали куба по ребру, объёму или площади.",
    "seoDescription": "Рассчитайте объём, площадь поверхности, диагонали и сумму рёбер куба по ребру, объёму или площади поверхности.",
    "disclaimer": "Куб имеет шесть квадратных граней и положительное ребро. В режиме площади вводится полная поверхность, а не площадь одной грани. Обратные задачи возвращают ребро; объём и поверхность используют куб и квадрат выбранной единицы."
  },
  "en": {
    "longDescription": "A cube is determined by its edge, volume or total surface area. In the inverse modes the edge is found first, a = ∛V or a = √(S/6), and becomes the headline result. The face diagonal a√2 lies in a square face; the space diagonal a√3 joins opposite vertices. They are different lengths: the latter bounds a straight segment inside the cube and does not guarantee room for a thick object.",
    "howToUse": [
      "Choose the length unit.",
      "Select which quantity you know.",
      "Enter its value.",
      "The remaining properties are calculated at once."
    ],
    "howItWorks": "Volume V = a³, surface area S = 6a², face diagonal a√2, space diagonal a√3, total edge length 12a. In the reverse modes the edge comes from a = ∛V or a = √(S/6).",
    "example": "A cube with a 3 cm edge has a volume of 27 cm³, a surface area of 54 cm² and a diagonal of 5.196 cm.",
    "faq": [
      {
        "q": "How does the space diagonal differ from the face diagonal?",
        "a": "The face diagonal a√2 lies in a square face; the space diagonal a√3 joins opposite vertices. The latter is the longest straight segment inside the cube. A thick object also needs clearance for its cross-section and the opening."
      },
      {
        "q": "How do I find the edge from the volume?",
        "a": "Take the cube root: a = ∛V. For a volume of 64 cm³ the edge is 4 cm. Choose the «volume» mode and the calculator does it for you."
      },
      {
        "q": "Why have a cube calculator when there is one for a cuboid?",
        "a": "A cube is a special case of it, but a cube is described by one quantity instead of three, and that makes the reverse problems solvable: the edge follows directly from the volume or the surface area. The general case has no such unique inverse."
      },
      {
        "q": "How much does the volume grow if the edge doubles?",
        "a": "Doubling the edge multiplies volume by 8, surface area by 4 and diagonals by 2. Those factors follow from the powers of a in the formulas; geometry alone does not calculate a cooling rate."
      },
      {
        "q": "How do I convert the result into other units?",
        "a": "The unit selector sets the meaning of the entered numbers; it does not convert them. Before changing cm to m, divide a length by 100, an area by 10,000 or a volume by 1,000,000. For example, 64 cm³ = 0.000064 m³, describing the same cube."
      }
    ],
    "shortDescription": "Volume, surface area and diagonals of a cube from its edge, volume or surface area.",
    "seoDescription": "Calculate the volume, surface area, diagonals and total edge length of a cube from its edge, volume or surface area.",
    "disclaimer": "A cube has six square faces and a positive edge. Area mode expects total surface area, not one face. Inverse modes return the edge; volume and surface area use the cube and square of the selected unit."
  },
  "uk": {
    "longDescription": "Куб визначається ребром, об’ємом або повною площею поверхні. У зворотних режимах спершу знаходиться ребро: a = ∛V або a = √(S/6), і саме воно стає головним результатом. Діагональ грані a√2 лежить у квадратній грані, просторова діагональ a√3 сполучає протилежні вершини. Це різні довжини; друга обмежує прямий відрізок усередині куба, але не гарантує розміщення предмета з товщиною.",
    "howToUse": [
      "Виберіть одиницю довжини.",
      "Укажіть, яка величина відома: ребро, об’єм чи площа поверхні.",
      "Введіть її значення.",
      "Решта величин куба порахується одразу."
    ],
    "howItWorks": "Об’єм дорівнює V = a³, площа поверхні S = 6a², бо граней шість і кожна є квадратом. Діагональ грані становить a√2, діагональ куба — a√3, сума довжин ребер — 12a. У зворотних режимах ребро відновлюється як a = ∛V або a = √(S/6).",
    "example": "Куб із ребром 3 см має об’єм 27 см³, площу поверхні 54 см² і діагональ 5,196 см. Діагональ грані того самого куба дорівнює 4,243 см.",
    "faq": [
      {
        "q": "Чим діагональ куба відрізняється від діагоналі грані?",
        "a": "Діагональ грані a√2 лежить у квадратній грані; діагональ тіла a√3 сполучає протилежні вершини. Друга є найдовшим прямим відрізком усередині куба. Для предмета з товщиною треба додатково врахувати його поперечні розміри та отвір."
      },
      {
        "q": "Як знайти ребро, якщо відомий об’єм?",
        "a": "Видобути кубічний корінь: a = ∛V. Для об’єму 64 см³ ребро дорівнює 4 см. Виберіть режим «об’єм», і калькулятор зробить це сам."
      },
      {
        "q": "Навіщо окремий куб, якщо є паралелепіпед?",
        "a": "Куб — його окремий випадок, але в куба одна величина замість трьох, і від неї розв’язуються зворотні задачі: за об’ємом або площею одразу знаходиться ребро. У загального випадку такої однозначної зворотної задачі немає."
      },
      {
        "q": "У скільки разів зросте об’єм, якщо подвоїти ребро?",
        "a": "Подвоєння ребра збільшує об’єм у 8 разів, площу поверхні — у 4, діагоналі — у 2. Множники випливають зі степенів a у формулах; швидкість охолодження лише за геометрією не визначається."
      },
      {
        "q": "Як перевести результат в інші одиниці?",
        "a": "Вибір одиниці задає зміст уведених чисел і не виконує переведення. Перед зміною см на м поділіть довжину на 100, площу на 10 000 або об’єм на 1 000 000. Наприклад, 64 см³ = 0,000064 м³ описують той самий куб."
      }
    ],
    "shortDescription": "Об’єм, площа поверхні та діагоналі куба за ребром, об’ємом або площею.",
    "seoDescription": "Розрахуйте об’єм, площу поверхні, діагоналі та суму ребер куба за ребром, об’ємом або площею поверхні.",
    "disclaimer": "Куб має шість квадратних граней і додатне ребро. У режимі площі вводиться повна поверхня, а не площа однієї грані. Зворотні режими повертають ребро; об’єм і поверхня мають куб та квадрат вибраної одиниці."
  },
  "de": {
    "longDescription": "Ein Würfel wird durch Kante, Volumen oder Gesamtoberfläche bestimmt. In den Umkehrmodi wird zuerst die Kante a = ∛V oder a = √(S/6) ermittelt und als Hauptergebnis angezeigt. Die Flächendiagonale a√2 liegt in einer Quadratfläche, die Raumdiagonale a√3 verbindet gegenüberliegende Ecken. Letztere begrenzt eine gerade Strecke im Würfel, garantiert aber nicht den Platz für einen dicken Gegenstand.",
    "howToUse": [
      "Wähle die Längeneinheit.",
      "Wähle, welche Größe du kennst.",
      "Trage ihren Wert ein.",
      "Die übrigen Eigenschaften werden sofort berechnet."
    ],
    "howItWorks": "Volumen V = a³, Oberfläche S = 6a², Flächendiagonale a√2, Raumdiagonale a√3, Kantensumme 12a. In den umgekehrten Modi folgt die Kante aus a = ∛V oder a = √(S/6).",
    "example": "Ein Würfel mit 3 cm Kante hat ein Volumen von 27 cm³, eine Oberfläche von 54 cm² und eine Raumdiagonale von 5,196 cm.",
    "faq": [
      {
        "q": "Wie unterscheidet sich die Raumdiagonale von der Flächendiagonale?",
        "a": "Die Flächendiagonale a√2 liegt in einer Quadratfläche; die Raumdiagonale a√3 verbindet gegenüberliegende Ecken. Letztere ist die längste gerade Strecke im Würfel. Bei einem dicken Gegenstand müssen zusätzlich Querschnitt und Öffnung passen."
      },
      {
        "q": "Wie finde ich die Kante aus dem Volumen?",
        "a": "Zieh die dritte Wurzel: a = ∛V. Bei einem Volumen von 64 cm³ beträgt die Kante 4 cm. Wähle den Modus „das Volumen“, und der Rechner erledigt es für dich."
      },
      {
        "q": "Wozu ein Würfelrechner, wenn es einen für den Quader gibt?",
        "a": "Ein Würfel ist dessen Sonderfall, aber er wird durch eine Größe statt durch drei beschrieben, und das macht die umgekehrten Aufgaben lösbar: die Kante folgt unmittelbar aus dem Volumen oder der Oberfläche. Der allgemeine Fall hat keine solche eindeutige Umkehrung."
      },
      {
        "q": "Wie stark wächst das Volumen, wenn sich die Kante verdoppelt?",
        "a": "Eine doppelte Kante ergibt das achtfache Volumen, die vierfache Oberfläche und doppelte Diagonalen. Das folgt aus den Potenzen von a; allein die Geometrie berechnet keine Abkühlgeschwindigkeit."
      },
      {
        "q": "Wie rechne ich das Ergebnis in andere Einheiten um?",
        "a": "Die Einheit legt die Bedeutung der Eingabezahlen fest und rechnet sie nicht um. Vor cm → m teile eine Länge durch 100, eine Fläche durch 10 000 oder ein Volumen durch 1 000 000. So beschreiben 64 cm³ und 0,000064 m³ denselben Würfel."
      }
    ],
    "shortDescription": "Volumen, Oberfläche und Diagonalen eines Würfels aus Kante, Volumen oder Oberfläche.",
    "seoDescription": "Berechne Volumen, Oberfläche, Diagonalen und Kantensumme eines Würfels aus seiner Kante, seinem Volumen oder seiner Oberfläche.",
    "disclaimer": "Ein Würfel hat sechs Quadratflächen und eine positive Kante. Der Flächenmodus erwartet die Gesamtoberfläche, nicht eine Fläche. Umkehrmodi liefern die Kante; Volumen und Oberfläche verwenden dritte und zweite Potenz der gewählten Einheit."
  },
  "es": {
    "longDescription": "Un cubo queda determinado por su arista, volumen o superficie total. En los modos inversos se obtiene primero la arista, a = ∛V o a = √(S/6), que es el resultado principal. La diagonal de cara a√2 está en una cara cuadrada y la espacial a√3 une vértices opuestos. Son longitudes distintas: la segunda limita un segmento recto dentro del cubo, pero no garantiza espacio para un objeto con grosor.",
    "howToUse": [
      "Elige la unidad de longitud.",
      "Indica qué magnitud conoces.",
      "Introduce su valor.",
      "Las demás propiedades se calculan de una vez."
    ],
    "howItWorks": "Volumen V = a³, superficie S = 6a², diagonal de la cara a√2, diagonal del cubo a√3, suma de aristas 12a. En los modos inversos la arista sale de a = ∛V o a = √(S/6).",
    "example": "Un cubo de 3 cm de arista tiene un volumen de 27 cm³, una superficie de 54 cm² y una diagonal de 5,196 cm.",
    "faq": [
      {
        "q": "¿En qué se diferencian la diagonal del cubo y la de la cara?",
        "a": "La diagonal de cara a√2 está en una cara cuadrada; la espacial a√3 une vértices opuestos. Esta última es el segmento recto más largo dentro del cubo. Un objeto con grosor también necesita espacio para su sección y para la abertura."
      },
      {
        "q": "¿Cómo hallo la arista a partir del volumen?",
        "a": "Con la raíz cúbica: a = ∛V. Para un volumen de 64 cm³ la arista son 4 cm. Elige el modo «el volumen» y la calculadora lo hace por ti."
      },
      {
        "q": "¿Para qué una calculadora de cubo si existe la de ortoedro?",
        "a": "El cubo es un caso particular suyo, pero se describe con una sola magnitud en lugar de tres, y eso hace resolubles los problemas inversos: la arista sale directamente del volumen o de la superficie. El caso general no tiene ese inverso único."
      },
      {
        "q": "¿Cuánto crece el volumen si se dobla la arista?",
        "a": "Duplicar la arista multiplica el volumen por 8, la superficie por 4 y las diagonales por 2. Estos factores salen de las potencias de a; la geometría sola no calcula la velocidad de enfriamiento."
      },
      {
        "q": "¿Cómo paso el resultado a otras unidades?",
        "a": "El selector da significado a los números introducidos; no los convierte. Antes de pasar de cm a m, divide una longitud entre 100, un área entre 10 000 o un volumen entre 1 000 000. Así, 64 cm³ = 0,000064 m³ describe el mismo cubo."
      }
    ],
    "shortDescription": "Volumen, superficie y diagonales de un cubo a partir de su arista, volumen o superficie.",
    "seoDescription": "Calcula el volumen, la superficie, las diagonales y la suma de aristas de un cubo a partir de su arista, su volumen o su superficie.",
    "disclaimer": "Un cubo tiene seis caras cuadradas y arista positiva. El modo de área pide la superficie total, no una sola cara. Los modos inversos dan la arista; volumen y superficie usan el cubo y el cuadrado de la unidad elegida."
  }
};
