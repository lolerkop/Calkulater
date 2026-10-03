import type { CalculatorCopy } from '../../lib/platform/types';
// Individually read actual immutable145 body; agent-authored amendment is not human approval.
export const buildingWave16ContractContent = {
  "ru": {
    "longDescription": "Стропило симметричной двускатной крыши идёт от конька до опоры, поэтому в прямоугольном треугольнике используется половина пролёта. Полный пролёт завысил бы длину, но не обязательно ровно вдвое: результат зависит и от подъёма. Свес здесь измеряется вдоль наклонного стропила и прибавляется после гипотенузы. Рядом показаны угол и уклон в процентах, чтобы отличать две формы задания крутизны.",
    "howItWorks": "Симметричная двускатная крыша: заложение a = пролёт/2, длина l = √(a² + подъём²) + e, угол α = atan2(подъём, a), уклон = 100·подъём/a. e — длина свеса вдоль наклонного стропила, не горизонтальная проекция. Пролёт и подъём положительны, e ≥ 0; все значения конечны. Расчёт длины не подбирает сечение, шаг, узлы или несущую способность.",
    "howToUse": [
      "Введите пролёт здания между наружными стенами.",
      "Укажите подъём от мауэрлата до конька.",
      "Укажите длину свеса вдоль наклонного стропила, не горизонтальный вынос.",
      "Перед заказом бруса добавьте припуск на подрезку."
    ],
    "example": "Пролёт 8 м при подъёме 2,4 м и свесе 0,5 м требует стропила 5,165 м под углом 30,964°.",
    "faq": [
      {
        "q": "Пролёт мерить между стенами или по всему зданию?",
        "a": "По зданию, между наружными мауэрлатами. Расчёт делит его пополам, потому что одно стропило закрывает один скат."
      },
      {
        "q": "Почему свес прибавляется после гипотенузы?",
        "a": "Потому что поле задаёт именно длину вдоль наклонного стропила. Если измерен горизонтальный вынос eₓ, сначала переведите его в длину вдоль ската e = eₓ/cos α; подстановка eₓ в это поле занизит выбранную модель."
      },
      {
        "q": "Какой уклон кровли считается рабочим?",
        "a": "Минимум зависит от конкретного покрытия и системы его монтажа. Используйте действующие инструкции производителя и проект; калькулятор переводит заданную геометрию, но не назначает пригодный для покрытия уклон."
      },
      {
        "q": "Подходит ли расчёт для вальмовой крыши?",
        "a": "Нет, здесь двускатная крыша с двумя равными скатами. Накосные стропила вальмы идут по диагонали и длиннее полученного значения."
      }
    ],
    "disclaimer": "Это геометрический подсчёт в описанной модели. Он не подтверждает несущую способность, безопасность или соответствие требованиям проекта; конструктивные параметры проверяют отдельно."
  },
  "en": {
    "longDescription": "A symmetric gable rafter runs from ridge to support, so its right triangle uses half the span. Using the whole span would overestimate the length, but not necessarily double it: the rise also matters. The overhang here is measured along the inclined rafter and added after the hypotenuse. Angle and percentage slope are shown together to distinguish the two ways of describing pitch.",
    "howItWorks": "Symmetric gable model: run a = span/2, length l = √(a² + rise²) + e, angle α = atan2(rise, a), slope = 100·rise/a. e is the overhang length along the inclined rafter, not its horizontal projection. Span and rise are positive, e ≥ 0, and inputs are finite. Length does not determine section size, spacing, connections or load capacity.",
    "howToUse": [
      "Enter the span of the building between the outer walls.",
      "Enter the rise from the wall plate to the ridge.",
      "Enter the overhang length along the inclined rafter, not its horizontal projection.",
      "Add a cutting allowance before ordering timber."
    ],
    "example": "An 8 m span with a 2.4 m rise and 0.5 m overhang needs a 5.165 m rafter at 30.964 degrees.",
    "faq": [
      {
        "q": "Is the span measured between walls or across the whole building?",
        "a": "Across the building, between the outer wall plates. The calculation halves it, because one rafter covers one slope."
      },
      {
        "q": "Why add the overhang after the hypotenuse?",
        "a": "The field is the length along the inclined rafter. If you measured a horizontal projection eₓ, first convert it to along-slope length e = eₓ/cos α; entering eₓ directly would understate this model."
      },
      {
        "q": "What roof slope is usable?",
        "a": "The minimum depends on the specific covering and installation system. Use its current manufacturer instructions and the design; this calculator converts the chosen geometry and does not select a suitable covering pitch."
      },
      {
        "q": "Does this cover hip roofs?",
        "a": "No. This is a gable roof with two equal slopes. Hip rafters run diagonally and are longer than the figure here."
      }
    ],
    "disclaimer": "This is a geometric quantity calculation within the described model. It does not establish load capacity, safety or project compliance; check design parameters separately."
  },
  "uk": {
    "longDescription": "Кроква симетричного двосхилого даху йде від коника до опори, тому для її прямокутного трикутника береться половина прольоту. Підйом — вертикальна відстань від рівня опори до коника. Звис у цьому калькуляторі задається вздовж похилої крокви й додається до гіпотенузи; горизонтальний звис — інша величина. Кут і відсотковий ухил показані окремо.",
    "howItWorks": "Симетричний двосхилий дах: закладення a = проліт/2, довжина l = √(a² + підйом²) + e, кут α = atan2(підйом, a), ухил = 100·підйом/a. e — довжина звису вздовж похилої крокви, а не горизонтальна проєкція. Проліт і підйом додатні, e ≥ 0; значення скінченні. Довжина не визначає переріз, крок, вузли чи несучу здатність.",
    "howToUse": [
      "Введіть проліт — відстань між опорами.",
      "Введіть підйом — висоту коника над опорою.",
      "Введіть довжину звису вздовж похилої крокви, а не горизонтальний винос."
    ],
    "example": "Проліт 8 м за підйому 2,4 м і звису 0,5 м потребує крокву 5,165 м під кутом 30,964°.",
    "faq": [
      {
        "q": "Що таке закладення?",
        "a": "Горизонтальна проєкція крокви — половина прольоту для симетричного даху. Саме вона разом із підйомом утворює прямокутний трикутник, гіпотенуза якого і є кроквою."
      },
      {
        "q": "Навіщо потрібен звис?",
        "a": "Звис виносить край покрівлі за опору; його розмір задається проєктом. Тут потрібна довжина вздовж похилої крокви. Горизонтальний винос eₓ переводиться в неї як eₓ/cos α; універсального рекомендованого розміру калькулятор не задає."
      },
      {
        "q": "Який крок крокв обрати?",
        "a": "Крок залежить від навантажень, перерізу, матеріалу та вузлів. Геометрична довжина крокви не визначає цей крок; використовуйте розрахунок конструкції, а не типове число з калькулятора довжини."
      },
      {
        "q": "Чи враховано запил у місцях спирання?",
        "a": "Ні, рахується повна довжина. Запил під мауерлат і підрізання біля коника трохи зменшують корисну довжину, тому брус беруть із невеликим запасом."
      }
    ],
    "disclaimer": "Це геометричний підрахунок в описаній моделі. Він не підтверджує несучу здатність, безпечність чи відповідність проєктним вимогам; конструктивні параметри перевіряють окремо."
  },
  "de": {
    "longDescription": "Beim symmetrischen Satteldach läuft ein Sparren vom First zur Auflage; sein rechtwinkliges Dreieck verwendet deshalb die halbe Spannweite. Die volle Spannweite würde die Länge überschätzen, aber nicht zwingend verdoppeln, denn auch die Höhe wirkt mit. Der Überstand wird hier entlang des geneigten Sparrens gemessen und nach der Hypotenuse addiert. Winkel und Prozentgefälle erscheinen getrennt.",
    "howItWorks": "Symmetrisches Satteldach: waagerechte Ausladung a = Spannweite/2, Länge l = √(a² + Höhe²) + e, Winkel α = atan2(Höhe, a), Gefälle = 100·Höhe/a. e ist die Überstandslänge entlang des geneigten Sparrens, keine waagerechte Projektion. Spannweite und Höhe sind positiv, e ≥ 0; alle Eingaben sind endlich. Querschnitt, Abstand, Anschlüsse und Tragfähigkeit werden nicht bemessen.",
    "howToUse": [
      "Trage die Spannweite des Gebäudes zwischen den Außenwänden ein.",
      "Trage die Höhe von der Fußpfette bis zum First ein.",
      "Trage die Überstandslänge entlang des geneigten Sparrens ein, nicht den waagerechten Ausstand.",
      "Rechne vor der Holzbestellung einen Zuschnittzuschlag hinzu."
    ],
    "example": "Eine Spannweite von 8 m mit 2,4 m Firsthöhe und 0,5 m Überstand braucht einen Sparren von 5,165 m bei 30,964 Grad.",
    "faq": [
      {
        "q": "Wird die Spannweite zwischen den Wänden oder über das ganze Gebäude gemessen?",
        "a": "Über das Gebäude, zwischen den äußeren Fußpfetten. Die Rechnung halbiert sie, weil ein Sparren eine Dachfläche abdeckt."
      },
      {
        "q": "Warum kommt der Überstand nach der Hypotenuse hinzu?",
        "a": "Das Feld meint die Länge entlang des geneigten Sparrens. Einen waagerechten Ausstand eₓ zuerst in e = eₓ/cos α entlang des Sparrens umrechnen; eₓ direkt einzutragen würde das Modell unterschätzen."
      },
      {
        "q": "Welches Dachgefälle ist brauchbar?",
        "a": "Der Mindestwert hängt vom konkreten Deckprodukt und Montagesystem ab. Herstelleranleitung und Planung verwenden; der Rechner übersetzt die vorgegebene Geometrie und wählt keine zulässige Deckungsneigung."
      },
      {
        "q": "Deckt das Walmdächer ab?",
        "a": "Nein. Hier geht es um ein Satteldach mit zwei gleichen Flächen. Gratsparren laufen schräg und sind länger als der Wert hier."
      }
    ],
    "disclaimer": "Dies ist eine geometrische Mengenberechnung im beschriebenen Modell. Tragfähigkeit, Sicherheit und Planungskonformität werden damit nicht bestätigt; Konstruktionsparameter gesondert prüfen."
  },
  "es": {
    "longDescription": "El par de una cubierta simétrica a dos aguas va de la cumbrera al apoyo, por lo que su triángulo rectángulo usa la mitad de la luz. Usar la luz completa sobreestima la longitud, pero no necesariamente la duplica: también cuenta la altura. Aquí el vuelo se mide a lo largo del par inclinado y se suma a la hipotenusa. El ángulo y la pendiente porcentual aparecen por separado.",
    "howItWorks": "Modelo de cubierta simétrica a dos aguas: proyección a = luz/2, longitud l = √(a² + altura²) + e, ángulo α = atan2(altura, a), pendiente = 100·altura/a. e es la longitud del vuelo a lo largo del par inclinado, no su proyección horizontal. Luz y altura son positivas, e ≥ 0 y los valores son finitos. No dimensiona la sección, separación, uniones ni capacidad resistente.",
    "howToUse": [
      "Introduce la luz del edificio entre los muros exteriores.",
      "Introduce la altura desde la solera hasta la cumbrera.",
      "Introduce el vuelo a lo largo del par inclinado, no su proyección horizontal.",
      "Añade un margen de corte antes de pedir la madera."
    ],
    "example": "Una luz de 8 m con 2,4 m de altura de cumbrera y 0,5 m de vuelo necesita un par de 5,165 m a 30,964 grados.",
    "faq": [
      {
        "q": "¿La luz se mide entre muros o de todo el edificio?",
        "a": "De todo el edificio, entre las soleras de los muros exteriores. El cálculo la divide entre dos, porque un par cubre un faldón."
      },
      {
        "q": "¿Por qué el vuelo se suma después de la hipotenusa?",
        "a": "El campo representa la longitud a lo largo del par inclinado. Si mediste una proyección horizontal eₓ, conviértela antes mediante e = eₓ/cos α; introducir eₓ directamente subestima este modelo."
      },
      {
        "q": "¿Qué pendiente de cubierta es utilizable?",
        "a": "El mínimo depende del material concreto y de su sistema de instalación. Usa las instrucciones del fabricante y el proyecto; la calculadora convierte la geometría elegida, no selecciona una pendiente admisible."
      },
      {
        "q": "¿Vale para cubiertas a cuatro aguas?",
        "a": "No. Esto es una cubierta a dos aguas con dos faldones iguales. Los pares de limatesa van en diagonal y son más largos que la cifra de aquí."
      }
    ],
    "disclaimer": "Es un cálculo geométrico de cantidades en el modelo descrito. No acredita capacidad resistente, seguridad ni conformidad con el proyecto; comprueba aparte los parámetros de diseño."
  }
} satisfies Record<'ru'|'en'|'uk'|'de'|'es',Partial<CalculatorCopy>>;
