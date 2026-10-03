import type { CalculatorCopy } from '../../lib/platform/types';

// Actual 145 native body individually reviewed; scoped model and input corrections. Agent review is not human approval.
export const buildingWave13ContractContent = {
  "ru": {
    "longDescription": "Складывает объёмы одинаковых цилиндрических свай и прямоугольного ростверка, затем добавляет выбранный запас бетона. Диаметр и глубина задаются в метрах. Это геометрическая смета, а не проект фундамента: число свай, несущая способность, грунт, нагрузки и армирование здесь не определяются. Общие зоны пересечения объёмов автоматически не вычитаются.",
    "howItWorks": "Одна свая V₁=πD²h/4; все сваи Vп=n·V₁; ростверк Vр=L·B·H. Чистый объём V=Vп+Vр, итог V·(1+w/100), запас V·w/100. n — положительное безопасное целое; D и h положительны, размеры ростверка неотрицательны, все числа конечны. Ноль в любом размере ростверка даёт Vр=0; w от 0 до 50 %.",
    "howToUse": [
      "Введите число свай по плану, их диаметр и глубину.",
      "Введите размеры ростверка или нули, если его нет.",
      "Добавьте запас на потери при доставке и заливке.",
      "Сравните отдельно объём свай и ростверка; цена и несущая способность не рассчитываются."
    ],
    "example": "Двенадцать свай по 300 мм глубиной 1,8 м с ростверком 32 м требуют 6,979 м³ бетона. Ростверк имеет ширину и высоту 0,4 м, запас 5 %, без пересечения объёмов.",
    "faq": [
      {
        "q": "Почему ростверк больше свай?",
        "a": "Это не общее правило: соотношение зависит от размеров. В примере 12 свай D=0,3 м, h=1,8 м дают 1,527 м³; ростверк 32×0,4×0,4 м — 5,12 м³. С другими размерами соотношение изменится."
      },
      {
        "q": "Что если ростверка нет?",
        "a": "Задайте ноль хотя бы в одном его размере. Объём ростверка станет нулём; это условие ввода и не заключение о том, допустим ли фундамент без ростверка."
      },
      {
        "q": "Глубина — это вся свая или только часть в грунте?",
        "a": "То, что вы зальёте. Если свая выступает над землёй, учтите и эту часть — она тоже берёт бетон."
      },
      {
        "q": "Учтено ли армирование?",
        "a": "Нет. Каркасы свай и арматура ростверка зависят от проекта и считаются отдельно."
      },
      {
        "q": "Почему не взять калькулятор ленточного фундамента?",
        "a": "Потому что лента — это одна сплошная траншея бетона, а здесь дискретные столбы плюс балка поверх. Обе части считаются раздельно, и полезно как раз их соотношение."
      }
    ],
    "disclaimer": "Только геометрический объём; несущая способность и проектная пригодность фундамента не проверяются."
  },
  "en": {
    "longDescription": "Adds equal cylindrical pile volumes and a rectangular grillage volume, then includes your chosen concrete allowance. Diameter and depth are entered in metres. This is a geometric budget, not foundation design: pile count, bearing capacity, soil, loads and reinforcement are not determined. Overlapping volumes are not automatically subtracted.",
    "howItWorks": "One pile V₁=πD²h/4; piles Vp=n·V₁; grillage Vg=L·B·H. Net V=Vp+Vg, total V·(1+w/100), allowance V·w/100. n is a positive safe integer; D and h are positive, grillage dimensions nonnegative, all numbers finite. A zero in any grillage dimension gives Vg=0; w is 0–50%.",
    "howToUse": [
      "Enter how many piles the plan has, and their diameter and depth.",
      "Enter the grillage beam dimensions, or zeros if there is none.",
      "Add an allowance for what is lost in delivery and pouring.",
      "Compare pile and grillage volumes separately; cost and load capacity are not calculated."
    ],
    "example": "Twelve 300 mm piles 1.8 m deep with a 32 m grillage need 6.979 m³ of concrete. Grillage width and height are 0.4 m, allowance 5%, with no overlapping volumes.",
    "faq": [
      {
        "q": "Why is the grillage bigger than the piles?",
        "a": "It is not a general rule: the ratio depends on dimensions. In the example, 12 piles with D=0.3 m and h=1.8 m give 1.527 m³; a 32×0.4×0.4 m grillage gives 5.12 m³. Other dimensions change the ratio."
      },
      {
        "q": "What if I have no grillage?",
        "a": "Set at least one grillage dimension to zero. Its volume becomes zero; this is an input convention, not a conclusion that a foundation without grillage is appropriate."
      },
      {
        "q": "Does depth mean the whole pile or the part in the ground?",
        "a": "Whatever you will pour. If the pile stands proud of the ground, include that part — it takes concrete too."
      },
      {
        "q": "Is the reinforcement included?",
        "a": "No. Pile cages and grillage bars depend on the design and are a separate count."
      },
      {
        "q": "Why not just use the strip foundation calculator?",
        "a": "Because a strip is one continuous trench of concrete, while this is discrete columns plus a beam on top. The two parts are counted separately here, and their ratio is the useful part."
      }
    ],
    "disclaimer": "Geometric volume only; foundation capacity and design suitability are not checked."
  },
  "uk": {
    "longDescription": "Складає об’єми однакових циліндричних паль і прямокутного ростверку та додає вибраний запас бетону. Діаметр і глибина задаються в метрах. Це геометрична оцінка, а не проєкт фундаменту: число паль, несуча здатність, ґрунт, навантаження та армування не визначаються. Перетини об’ємів автоматично не віднімаються.",
    "howItWorks": "Одна паля V₁=πD²h/4; усі палі Vп=n·V₁; ростверк Vр=L·B·H. Чистий об’єм V=Vп+Vр, підсумок V·(1+w/100), запас V·w/100. n — додатне безпечне ціле; D і h додатні, розміри ростверку невід’ємні, усі числа скінченні. Нуль у будь-якому розмірі ростверку дає Vр=0; w від 0 до 50 %.",
    "howToUse": [
      "Введіть кількість паль за планом, їхній діаметр і глибину.",
      "Введіть розміри ростверку або нулі, якщо його немає.",
      "Додайте запас на втрати при доставці й заливанні.",
      "Порівняйте окремо об’єми паль і ростверку; ціна й несуча здатність не рахуються."
    ],
    "example": "Дванадцять паль по 300 мм завглибшки 1,8 м із ростверком 32 м потребують 6,979 м³ бетону. Ширина й висота ростверку 0,4 м, запас 5 %, без перетину об’ємів.",
    "faq": [
      {
        "q": "Чому ростверк більший за палі?",
        "a": "Це не загальне правило: відношення залежить від розмірів. У прикладі 12 паль D=0,3 м, h=1,8 м дають 1,527 м³; ростверк 32×0,4×0,4 м — 5,12 м³. За інших розмірів відношення зміниться."
      },
      {
        "q": "Що як ростверку немає?",
        "a": "Задайте нуль хоча б в одному розмірі ростверку. Його об’єм стане нульовим; це умова вводу, а не висновок про допустимість фундаменту без ростверку."
      },
      {
        "q": "Глибина це вся паля чи лише частина в ґрунті?",
        "a": "Те, що ви заллєте. Якщо паля виступає над землею, врахуйте і цю частину — вона теж бере бетон."
      },
      {
        "q": "Чи враховано армування?",
        "a": "Ні. Каркаси паль і арматура ростверку залежать від проєкту і рахуються окремо."
      },
      {
        "q": "Чому не взяти калькулятор стрічкового фундаменту?",
        "a": "Бо стрічка це одна суцільна траншея бетону, а тут дискретні стовпи плюс балка згори. Обидві частини рахуються окремо, і корисним є саме їхнє співвідношення."
      }
    ],
    "disclaimer": "Лише геометричний об’єм; несуча здатність і проєктна придатність фундаменту не перевіряються."
  },
  "de": {
    "longDescription": "Addiert die Volumen gleicher zylindrischer Pfähle und eines rechteckigen Rosts und ergänzt den gewählten Betonzuschlag. Durchmesser und Tiefe stehen in Metern. Es ist eine geometrische Mengenabschätzung, keine Fundamentplanung: Pfahlzahl, Tragfähigkeit, Boden, Lasten und Bewehrung werden nicht bestimmt. Überlappende Volumen werden nicht automatisch abgezogen.",
    "howItWorks": "Ein Pfahl V₁=πD²h/4; Pfähle Vp=n·V₁; Rost Vr=L·B·H. Netto V=Vp+Vr, Gesamt V·(1+w/100), Zuschlag V·w/100. n ist eine positive sichere ganze Zahl; D und h sind positiv, Rostmaße nichtnegativ und alle Werte endlich. Null in einem Rostmaß ergibt Vr=0; w liegt bei 0–50 %.",
    "howToUse": [
      "Trage ein, wie viele Pfähle der Plan vorsieht, und ihren Durchmesser und ihre Tiefe.",
      "Trage die Maße des Rosts ein oder Nullen, wenn es keinen gibt.",
      "Ergänze einen Zuschlag für das, was bei Anlieferung und Einbau verloren geht.",
      "Vergleiche Pfahl- und Rostvolumen getrennt; Kosten und Tragfähigkeit werden nicht berechnet."
    ],
    "example": "Zwölf Pfähle mit 300 mm und 1,8 m Tiefe brauchen mit einem Rost von 32 m 6,979 m³ Beton. Rostbreite und -höhe jeweils 0,4 m, Zuschlag 5 %, ohne Volumenüberschneidung.",
    "faq": [
      {
        "q": "Warum ist der Rost größer als die Pfähle?",
        "a": "Das ist keine allgemeine Regel; das Verhältnis hängt von den Maßen ab. Im Beispiel ergeben 12 Pfähle mit D=0,3 m und h=1,8 m 1,527 m³; ein Rost 32×0,4×0,4 m ergibt 5,12 m³. Andere Maße verändern das Verhältnis."
      },
      {
        "q": "Was, wenn ich keinen Rost habe?",
        "a": "Setze mindestens ein Rostmaß auf null. Das Rostvolumen ist dann null; diese Eingabekonvention bestätigt nicht, dass ein Fundament ohne Rost zulässig ist."
      },
      {
        "q": "Meint die Tiefe den ganzen Pfahl oder den Teil im Boden?",
        "a": "Das, was du vergießen wirst. Steht der Pfahl über den Boden hinaus, rechne diesen Teil mit — er braucht ebenfalls Beton."
      },
      {
        "q": "Ist die Bewehrung enthalten?",
        "a": "Nein. Bewehrungskörbe und Roststäbe hängen an der Planung und sind eine eigene Zählung."
      },
      {
        "q": "Warum nicht einfach den Rechner für das Streifenfundament nehmen?",
        "a": "Weil ein Streifen ein durchgehender Graben aus Beton ist, während dies einzelne Säulen plus einen Balken darüber sind. Die beiden Teile werden hier getrennt gezählt, und ihr Verhältnis ist der nützliche Teil."
      }
    ],
    "disclaimer": "Nur geometrisches Volumen; Tragfähigkeit und planerische Eignung des Fundaments werden nicht geprüft."
  },
  "es": {
    "longDescription": "Suma los volúmenes de pilotes cilíndricos iguales y un encepado rectangular, y añade el margen de hormigón elegido. Diámetro y profundidad se introducen en metros. Es una estimación geométrica, no un proyecto de cimentación: no determina número de pilotes, capacidad, suelo, cargas ni armaduras. No resta automáticamente volúmenes superpuestos.",
    "howItWorks": "Un pilote V₁=πD²h/4; pilotes Vp=n·V₁; encepado Ve=L·B·H. Neto V=Vp+Ve, total V·(1+w/100), margen V·w/100. n es un entero positivo seguro; D y h son positivos, las medidas del encepado no negativas y todo finito. Cero en cualquier medida del encepado da Ve=0; w va de 0 a 50%.",
    "howToUse": [
      "Introduce cuántos pilotes tiene el plano, y su diámetro y su profundidad.",
      "Introduce las dimensiones del encepado, o ceros si no lo hay.",
      "Añade un margen por lo que se pierde en el suministro y el vertido.",
      "Compara por separado pilotes y encepado; no se calculan precio ni capacidad."
    ],
    "example": "Doce pilotes de 300 mm y 1,8 m de profundidad con un encepado de 32 m necesitan 6,979 m³ de hormigón. Ancho y alto del encepado 0,4 m, margen 5%, sin volúmenes superpuestos.",
    "faq": [
      {
        "q": "¿Por qué el encepado es mayor que los pilotes?",
        "a": "No es una regla general: depende de las dimensiones. En el ejemplo, 12 pilotes con D=0,3 m y h=1,8 m dan 1,527 m³; un encepado de 32×0,4×0,4 m da 5,12 m³. Otras dimensiones cambian la proporción."
      },
      {
        "q": "¿Y si no tengo encepado?",
        "a": "Pon al menos una medida del encepado a cero. Su volumen será cero; es una convención de entrada, no una conclusión de que una cimentación sin encepado sea adecuada."
      },
      {
        "q": "¿La profundidad es todo el pilote o solo la parte enterrada?",
        "a": "Lo que vayas a hormigonar. Si el pilote sobresale del terreno, inclúyelo: también lleva hormigón."
      },
      {
        "q": "¿Se incluye la armadura?",
        "a": "No. Las jaulas de los pilotes y las barras del encepado dependen del proyecto y se cuentan aparte."
      },
      {
        "q": "¿Por qué no usar sin más la calculadora de zapata corrida?",
        "a": "Porque una zapata corrida es una única zanja continua de hormigón, mientras que esto son pilares discretos más una viga encima. Aquí las dos partes se cuentan por separado, y su relación es lo útil."
      }
    ],
    "disclaimer": "Solo volumen geométrico; no se comprueban capacidad ni idoneidad del proyecto de cimentación."
  }
} satisfies Record<'ru'|'en'|'uk'|'de'|'es', Partial<CalculatorCopy>>;
