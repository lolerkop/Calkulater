import type { CalculatorCopy } from '../../lib/platform/types';

type Body = Pick<CalculatorCopy, 'shortDescription' | 'seoDescription' | 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

// Subject-specific retained and amended copy; source and calculation limits are explicit.
export const contractContent: Record<'ru'|'en'|'uk'|'de'|'es', Body> = {
  "ru": {
    "longDescription": "Прямоугольный параллелепипед задаётся тремя взаимно перпендикулярными рёбрами. Калькулятор выводит объём, полную поверхность, пространственную диагональ и сумму длин двенадцати рёбер. Куб с тремя равными рёбрами считается той же формулой. Диагональ — максимальная длина прямого отрезка внутри коробки; для предмета с толщиной дополнительно проверяют поперечные размеры и проём. Длины вводятся в одной единице, площади — в её квадрате, объём — в кубе.",
    "howToUse": [
      "Выберите единицу длины.",
      "Введите три ребра.",
      "Прочитайте объём, поверхность и диагональ."
    ],
    "howItWorks": "V = abc; S = 2(ab + bc + ca); пространственная диагональ d = √(a² + b² + c²) по теореме Пифагора, применённой дважды. Сумма длин рёбер равна 4(a + b + c), потому что рёбер каждого направления по четыре.",
    "example": "Коробка 3 × 4 × 5 см имеет объём 60 см³, поверхность 94 см² и диагональ 7,071 см.",
    "faq": [
      {
        "q": "Что показывает пространственная диагональ?",
        "a": "Она соединяет противоположные вершины и равна √(a²+b²+c²). Предмет длиннее неё не поместится целиком внутри, а меньшая длина сама по себе не гарантирует размещение: важны толщина и путь через проём."
      },
      {
        "q": "Считается ли куб этим калькулятором?",
        "a": "Да. Куб — параллелепипед с тремя равными рёбрами: введите одно и то же значение трижды, и все формулы останутся верными."
      },
      {
        "q": "Почему объём в кубических единицах, а поверхность в квадратных?",
        "a": "Потому что объём измеряется в кубе выбранной единицы, а площадь — в её квадрате. Пересчитывать их линейным множителем при смене единицы нельзя."
      },
      {
        "q": "Как посчитать вес по объёму?",
        "a": "Масса m = ρV, если плотность и объём выражены в согласованных единицах: кг/м³ вместе с м³ дают кг. Например, 60 см³ = 0,00006 м³. Вес как сила дополнительно зависит от ускорения свободного падения и измеряется в ньютонах."
      }
    ],
    "shortDescription": "Объём, площадь поверхности и пространственная диагональ по трём рёбрам.",
    "seoDescription": "Рассчитайте объём, площадь поверхности и пространственную диагональ прямоугольного параллелепипеда по трём рёбрам.",
    "disclaimer": "Все три ребра положительны и взаимно перпендикулярны. Это замкнутая прямоугольная форма без вычитания стенок, отверстий или пустот. Выбор мм/см/м не выполняет автоматический перевод введённых размеров."
  },
  "en": {
    "longDescription": "A rectangular cuboid is specified by three mutually perpendicular edges. The calculator gives volume, total surface area, space diagonal and the combined length of its twelve edges. Three equal edges give a cube using the same formulas. The diagonal is the longest straight segment inside a box; a thick object also needs clearance for its cross-section and opening. Use one length unit, whose square measures area and whose cube measures volume.",
    "howToUse": [
      "Pick the length unit.",
      "Enter the three edges.",
      "Read the volume, the surface and the diagonal."
    ],
    "howItWorks": "V = abc; S = 2(ab + bc + ca); the space diagonal d = √(a² + b² + c²) follows from applying Pythagoras twice. The total edge length is 4(a + b + c), because there are four edges in each direction.",
    "example": "A 3 × 4 × 5 cm box has a volume of 60 cm³, a surface of 94 cm² and a diagonal of 7.071 cm.",
    "faq": [
      {
        "q": "What does the space diagonal tell me?",
        "a": "It joins opposite vertices and equals √(a²+b²+c²). An object longer than it cannot fit wholly inside; a shorter length alone does not guarantee a fit because thickness and access through the opening also matter."
      },
      {
        "q": "Does this handle a cube?",
        "a": "Yes. A cube is a cuboid with three equal edges: enter the same value three times and every formula still holds."
      },
      {
        "q": "Why is the volume in cubic units and the surface in square ones?",
        "a": "Because volume is measured in the cube of the chosen unit and area in its square. Converting either with a linear factor would be wrong."
      },
      {
        "q": "How do I get the weight from the volume?",
        "a": "Mass is m = ρV when density and volume use compatible units: kg/m³ with m³ gives kg. For example, 60 cm³ = 0.00006 m³. Weight as a force also depends on gravitational acceleration and is measured in newtons."
      }
    ],
    "shortDescription": "Volume, surface area and space diagonal from three edges.",
    "seoDescription": "Calculate the volume, surface area and space diagonal of a rectangular cuboid from its three edges.",
    "disclaimer": "All three edges are positive and mutually perpendicular. The model is a closed rectangular solid without subtracting walls, holes or voids. Choosing mm/cm/m does not automatically convert the entered dimensions."
  },
  "uk": {
    "longDescription": "Прямокутний паралелепіпед задається трьома взаємно перпендикулярними ребрами. Калькулятор показує об’єм, повну поверхню, просторову діагональ та суму довжин дванадцяти ребер. Куб із трьома рівними ребрами рахується тими самими формулами. Діагональ є найдовшим прямим відрізком усередині коробки; для предмета з товщиною додатково потрібні поперечні розміри й отвір. Довжини вводяться в одній одиниці, площі — в її квадраті, об’єм — у кубі.",
    "howToUse": [
      "Виберіть одиницю довжини.",
      "Введіть три ребра — порядок не має значення.",
      "Прочитайте об’єм, поверхню й діагональ."
    ],
    "howItWorks": "Об’єм дорівнює добутку трьох ребер: V = abc. Площа поверхні складається з трьох пар однакових граней: S = 2(ab + bc + ca). Просторова діагональ виводиться з теореми Піфагора, застосованої двічі: d = √(a² + b² + c²). Сума довжин ребер дорівнює 4(a + b + c), бо ребер кожного напрямку по чотири.",
    "example": "Коробка 3 × 4 × 5 см має об’єм 60 см³, поверхню 94 см² і діагональ 7,071 см. Сума довжин усіх дванадцяти ребер такої коробки — 48 см.",
    "faq": [
      {
        "q": "Навіщо потрібна просторова діагональ?",
        "a": "Вона сполучає протилежні вершини й дорівнює √(a²+b²+c²). Довший предмет не поміститься всередині; менша довжина сама не гарантує розміщення, бо важливі товщина та проходження через отвір."
      },
      {
        "q": "Чому в площі поверхні три доданки?",
        "a": "Бо граней шість, і вони утворюють три пари однакових прямокутників: ab, bc і ca. Кожна пара дає подвоєну площу однієї грані."
      },
      {
        "q": "Чи можна цим рахувати куб?",
        "a": "Так, введіть три однакові ребра. Але для куба зручніший окремий калькулятор: там за об’ємом чи площею одразу знаходиться ребро."
      },
      {
        "q": "Як порахувати об’єм у літрах?",
        "a": "Рахуйте в сантиметрах і діліть результат на 1000: у літрі рівно 1000 кубічних сантиметрів. Для великих ємностей рахуйте в метрах і множте на 1000."
      }
    ],
    "shortDescription": "Об’єм, площа поверхні та просторова діагональ за трьома ребрами.",
    "seoDescription": "Обчисліть об’єм, площу поверхні та просторову діагональ прямокутного паралелепіпеда за трьома ребрами.",
    "disclaimer": "Усі три ребра додатні та взаємно перпендикулярні. Модель є замкненим прямокутним тілом без віднімання стінок, отворів чи порожнин. Вибір мм/см/м не переводить уведені розміри автоматично."
  },
  "de": {
    "longDescription": "Ein Quader wird durch drei zueinander senkrechte Kanten bestimmt. Der Rechner liefert Volumen, Gesamtoberfläche, Raumdiagonale und die Gesamtlänge seiner zwölf Kanten. Drei gleiche Kanten ergeben mit denselben Formeln einen Würfel. Die Diagonale ist die längste gerade Strecke in einer Kiste; bei einem dicken Gegenstand müssen auch Querschnitt und Öffnung passen. Längen stehen in einer Einheit, Flächen in deren Quadrat und Volumen in deren dritter Potenz.",
    "howToUse": [
      "Wähle die Längeneinheit.",
      "Trage die drei Kanten ein.",
      "Lies Volumen, Oberfläche und Diagonale ab."
    ],
    "howItWorks": "V = abc; S = 2(ab + bc + ca); die Raumdiagonale d = √(a² + b² + c²) folgt aus zweimaliger Anwendung des Satzes von Pythagoras. Die Kantensumme ist 4(a + b + c), denn es gibt vier Kanten in jeder Richtung.",
    "example": "Eine Kiste mit 3 × 4 × 5 cm hat ein Volumen von 60 cm³, eine Oberfläche von 94 cm² und eine Diagonale von 7,071 cm.",
    "faq": [
      {
        "q": "Was sagt mir die Raumdiagonale?",
        "a": "Sie verbindet gegenüberliegende Ecken und beträgt √(a²+b²+c²). Ein längerer Gegenstand passt nicht vollständig hinein; eine kürzere Länge allein genügt nicht, weil Dicke und Zugang durch die Öffnung ebenfalls zählen."
      },
      {
        "q": "Deckt das auch einen Würfel ab?",
        "a": "Ja. Ein Würfel ist ein Quader mit drei gleichen Kanten: trage denselben Wert dreimal ein, und jede Formel gilt weiter."
      },
      {
        "q": "Warum steht das Volumen in Kubikeinheiten und die Oberfläche in Quadrateinheiten?",
        "a": "Weil das Volumen in der dritten Potenz der gewählten Einheit gemessen wird und die Fläche in der zweiten. Beides mit einem linearen Faktor umzurechnen wäre falsch."
      },
      {
        "q": "Wie komme ich vom Volumen zum Gewicht?",
        "a": "Die Masse ist m = ρV bei passenden Einheiten: kg/m³ zusammen mit m³ ergibt kg. Zum Beispiel sind 60 cm³ = 0,00006 m³. Gewichtskraft hängt zusätzlich von der Fallbeschleunigung ab und wird in Newton gemessen."
      }
    ],
    "shortDescription": "Volumen, Oberfläche und Raumdiagonale aus drei Kanten.",
    "seoDescription": "Berechne Volumen, Oberfläche und Raumdiagonale eines Quaders aus seinen drei Kanten.",
    "disclaimer": "Alle drei Kanten sind positiv und stehen senkrecht aufeinander. Das Modell ist ein geschlossener Quader ohne Abzug von Wänden, Öffnungen oder Hohlräumen. Die Wahl mm/cm/m rechnet Eingabemaße nicht automatisch um."
  },
  "es": {
    "longDescription": "Un ortoedro se define con tres aristas mutuamente perpendiculares. La calculadora muestra volumen, superficie total, diagonal espacial y suma de las doce aristas. Tres aristas iguales dan un cubo con las mismas fórmulas. La diagonal es el segmento recto más largo dentro de una caja; un objeto con grosor también exige espacio para su sección y para la abertura. Las longitudes usan una unidad, las áreas su cuadrado y el volumen su cubo.",
    "howToUse": [
      "Elige la unidad de longitud.",
      "Introduce las tres aristas.",
      "Consulta el volumen, la superficie y la diagonal."
    ],
    "howItWorks": "V = abc; S = 2(ab + bc + ca); la diagonal d = √(a² + b² + c²) sale de aplicar Pitágoras dos veces. La suma de las aristas es 4(a + b + c), porque hay cuatro aristas en cada dirección.",
    "example": "Una caja de 3 × 4 × 5 cm tiene un volumen de 60 cm³, una superficie de 94 cm² y una diagonal de 7,071 cm.",
    "faq": [
      {
        "q": "¿Qué me dice la diagonal del cuerpo?",
        "a": "Une vértices opuestos y vale √(a²+b²+c²). Un objeto más largo no cabe entero dentro; una longitud menor no garantiza que quepa, pues también importan el grosor y el acceso por la abertura."
      },
      {
        "q": "¿Sirve para un cubo?",
        "a": "Sí. Un cubo es un ortoedro con tres aristas iguales: introduce el mismo valor tres veces y todas las fórmulas siguen valiendo."
      },
      {
        "q": "¿Por qué el volumen va en unidades cúbicas y la superficie en cuadradas?",
        "a": "Porque el volumen se mide en el cubo de la unidad elegida y el área, en su cuadrado. Convertir cualquiera de los dos con un factor lineal sería un error."
      },
      {
        "q": "¿Cómo obtengo el peso a partir del volumen?",
        "a": "La masa es m = ρV con unidades compatibles: kg/m³ junto con m³ da kg. Por ejemplo, 60 cm³ = 0,00006 m³. El peso como fuerza depende además de la aceleración gravitatoria y se mide en newtons."
      }
    ],
    "shortDescription": "Volumen, superficie y diagonal a partir de tres aristas.",
    "seoDescription": "Calcula el volumen, la superficie y la diagonal de un ortoedro a partir de sus tres aristas.",
    "disclaimer": "Las tres aristas son positivas y mutuamente perpendiculares. El modelo es un sólido rectangular cerrado sin descontar paredes, huecos ni vacíos. Elegir mm/cm/m no convierte automáticamente las medidas introducidas."
  }
};
