import type { CalculatorCopy } from '../../lib/platform/types';
type Body=Pick<CalculatorCopy,'longDescription'|'howToUse'|'howItWorks'|'example'|'faq'>;
export const contractContent:Record<'ru' | 'en' | 'uk' | 'de' | 'es',Body> = {
  "ru": {
    "longDescription": "Плотность бумаги выражают массой на площадь в г/м². Этот калькулятор использует номинальные размеры A 0–A 6 в целых миллиметрах по таблице ISO 216: для A 4 это 210×297мм. Площадь такого листа 0,06237м²; при 80г/м² получается 4,9896г, а 500 листов дают 2,4948кг, на экране 2,495кг. Это расчёт бумаги без упаковки; действительная масса зависит от размеров, фактической плотности и условий хранения.",
    "howToUse": [
      "Выберите доступный формат A 0–A 6; нестандартный размер в этой форме не задаётся.",
      "Введите указанную производителем плотность в г/м² и целое положительное число листов.",
      "Прочитайте расчётную массу без обёртки. Для отправки взвесьте готовую посылку; совместимость бумаги с принтером проверяйте по его руководству."
    ],
    "howItWorks": "Площадь = ширина × высота / 1 000 000 в м²; масса пачки = площадь × г/м² × листы /1000 в кг. Идея A-серии — деление пополам при сохранении отношения сторон; идеальная площадь A 0 равна 1м², но табличные размеры округлены до миллиметров, поэтому здесь не используется точное 1/16м² для A 4. Плотность должна быть положительной, число листов — целым от 1 до 9 007 199 254 740 991. Масса и обратное число листов округляются на выводе; последнее может быть дробным. Числовой предел отмечается отдельно.",
    "example": "A 4:210×297мм ×80г/м² ×500 листов =2,4948кг, показ 2,495кг без упаковки.",
    "faq": [
      {
        "q": "Почему A 4 получается чуть легче 2,5кг?",
        "a": "Номинальные 210×297мм дают площадь 0,06237м², а не точно 1/16м². Поэтому 500 листов при 80г/м² дают 2,4948кг; при 64г/м² —1,99584кг. Округлённый расчёт не заменяет взвешивание."
      },
      {
        "q": "Плотность и толщина — одно и то же?",
        "a": "Нет. Граммы на квадратный метр задают массу на площадь; толщина зависит от материала и структуры. По одному этому значению калькулятор толщину или пригодность для принтера не определяет."
      },
      {
        "q": "Что учитывать для посылки?",
        "a": "Масса бумаги не включает конверт, коробку, клей и другие вложения. Перед выбором тарифа взвесьте готовую посылку: номинальный расчёт не гарантирует соблюдение весового порога."
      },
      {
        "q": "Что означает листов в килограмме?",
        "a": "Это 1000г, делённые на расчётную массу одного листа. Значение может быть дробным; оно показывает теоретическое отношение, а не целое количество листов для точного килограмма."
      }
    ]
  },
  "en": {
    "longDescription": "Grammage is mass per area in g/m². This calculator uses the nominal whole-millimetre A 0–A 6 dimensions in the ISO 216 table: A 4 is 210×297mm. That sheet has area 0.06237m²; at 80g/m² it weighs 4.9896g, and 500 sheets give 2.4948kg, displayed as 2.495kg. The estimate excludes packaging; actual mass depends on the dimensions, actual grammage and storage conditions.",
    "howToUse": [
      "Choose an available A 0–A 6 size; this form does not accept custom dimensions.",
      "Enter the manufacturer’s grammage in g/m² and a positive whole sheet count.",
      "Read the estimated mass without wrapping. Weigh the finished parcel for shipping; check printer compatibility in its manual."
    ],
    "howItWorks": "Area = width × height /1,000,000 in m²; ream mass = area × g/m² × sheets /1000 in kg. The A-series design halves area while retaining aspect ratio; ideal A 0 has area 1m², but table dimensions round to whole millimetres, so this calculator does not use exactly 1/16m² for A 4. Grammage must be positive and sheet count an integer from 1 to 9,007,199,254,740,991. Masses and the inverse sheet count round only for display; the inverse may be fractional. Numeric range limits are marked separately.",
    "example": "A 4:210×297mm ×80g/m² ×500 sheets =2.4948kg, displayed as 2.495kg without packaging.",
    "faq": [
      {
        "q": "Why is A 4 slightly below 2.5kg?",
        "a": "Nominal 210×297mm gives 0.06237m² rather than exactly 1/16m². Thus 500 sheets at 80g/m² give 2.4948kg; at 64g/m² they give 1.99584kg. A rounded estimate does not replace weighing."
      },
      {
        "q": "Are grammage and thickness the same?",
        "a": "No. Grams per square metre specify mass per area; thickness depends on material and structure. This input alone does not determine thickness or printer suitability."
      },
      {
        "q": "What counts for a parcel?",
        "a": "Paper mass excludes the envelope, box, glue and other contents. Weigh the finished parcel before selecting postage: the nominal estimate does not guarantee staying below a weight threshold."
      },
      {
        "q": "What does sheets per kilogram mean?",
        "a": "It is 1000g divided by estimated sheet mass. The answer may be fractional; it is a theoretical ratio rather than a whole sheet count producing exactly one kilogram."
      }
    ]
  },
  "uk": {
    "longDescription": "Щільність паперу в г/м² — це маса на площу. Калькулятор використовує номінальні розміри A 0–A 6 у цілих міліметрах із таблиці ISO 216: для A 4 це 210×297мм. Площа аркуша 0,06237м²; при 80г/м² виходить 4,9896г, а 500 аркушів дають 2,4948кг, на екрані 2,495кг. Пакування не враховано; фактична маса залежить від розмірів, справжньої щільності й умов зберігання.",
    "howToUse": [
      "Виберіть доступний формат A 0–A 6; нестандартний розмір у цій формі не задається.",
      "Введіть щільність виробника в г/м² і цілу додатну кількість аркушів.",
      "Прочитайте розрахункову масу без обгортки. Для відправлення зважте готову посилку; сумісність паперу з принтером перевіряйте за його інструкцією."
    ],
    "howItWorks": "Площа = ширина × висота /1 000 000 у м²; маса пачки = площа × г/м² × аркуші /1000 у кг. Принцип A-серії — поділ площі навпіл зі збереженням пропорцій; ідеальна площа A 0 дорівнює 1м², але табличні розміри округлено до цілих міліметрів, тому точне 1/16м² для A 4 тут не використовується. Щільність має бути додатною, кількість аркушів — цілою від 1 до 9 007 199 254 740 991. Маса й обернена кількість аркушів округлюються лише на показі; обернена кількість може бути дробовою. Числові межі позначаються окремо.",
    "example": "A 4:210×297мм ×80г/м² ×500 аркушів =2,4948кг, показ 2,495кг без пакування. A 3 при 120г/м² і 1000 аркушах дає 14,9688кг.",
    "faq": [
      {
        "q": "Чому A 4 виходить трохи легшим за 2,5кг?",
        "a": "Номінальні 210×297мм дають 0,06237м², а не точно 1/16м². Тому 500 аркушів при 80г/м² дають 2,4948кг; при 64г/м² —1,99584кг. Округлений розрахунок не замінює зважування."
      },
      {
        "q": "Щільність і товщина — це одне?",
        "a": "Ні. Грами на квадратний метр задають масу на площу; товщина залежить від матеріалу й структури. За цим значенням калькулятор не визначає товщину чи придатність для принтера."
      },
      {
        "q": "Що враховувати для посилки?",
        "a": "Маса паперу не включає конверт, коробку, клей та інші вкладення. Перед вибором тарифу зважте готову посилку: номінальний розрахунок не гарантує дотримання вагового порога."
      },
      {
        "q": "Що означає аркушів у кілограмі?",
        "a": "Це 1000г, поділені на розрахункову масу одного аркуша. Відповідь може бути дробовою; це теоретичне співвідношення, а не ціла кількість аркушів, що дає рівно кілограм."
      }
    ]
  },
  "de": {
    "longDescription": "Die Grammatur ist Masse je Fläche in g/m². Der Rechner verwendet die nominalen ganzzahligen Millimetermaße A 0–A 6 aus der Tabelle von ISO 216: A 4 ist 210×297mm. Die Fläche beträgt 0,06237m²; bei 80g/m² ergeben sich 4,9896g je Blatt und 2,4948kg für 500 Blatt, angezeigt als 2,495kg. Verpackung ist ausgeschlossen; die tatsächliche Masse hängt von den Maßen, der tatsächlichen Grammatur und den Lagerbedingungen ab.",
    "howToUse": [
      "Wähle ein verfügbares Format A 0–A 6; freie Maße lassen sich hier nicht eingeben.",
      "Trage die Herstellergrammatur in g/m² und eine positive ganze Blattzahl ein.",
      "Lies die geschätzte Masse ohne Verpackung ab. Ein fertiges Versandpaket wiegen; Druckerkompatibilität im Gerätehandbuch prüfen."
    ],
    "howItWorks": "Fläche = Breite × Höhe /1 000 000 in m²; Paketmasse = Fläche × g/m² × Blattzahl /1000 in kg. Die A-Reihe halbiert die Fläche bei gleichem Seitenverhältnis; das ideale A 0 hat 1m², die Tabellenmaße sind jedoch auf ganze Millimeter gerundet. Daher wird für A 4 nicht exakt 1/16m² verwendet. Die Grammatur muss positiv, die Blattzahl eine ganze Zahl von 1 bis 9 007 199 254 740 991 sein. Massen und umgekehrte Blattzahl werden erst für die Anzeige gerundet; die umgekehrte Zahl darf gebrochen sein. Grenzen des Zahlenbereichs werden gesondert angezeigt.",
    "example": "A 4:210×297mm ×80g/m² ×500 Blatt =2,4948kg, angezeigt als 2,495kg ohne Verpackung.",
    "faq": [
      {
        "q": "Warum liegt A 4 knapp unter 2,5kg?",
        "a": "Nominale 210×297mm ergeben 0,06237m² statt exakt 1/16m².500 Blatt bei 80g/m² ergeben somit 2,4948kg, bei 64g/m²1,99584kg. Eine gerundete Schätzung ersetzt kein Wiegen."
      },
      {
        "q": "Sind Grammatur und Dicke dasselbe?",
        "a": "Nein. Gramm je Quadratmeter beschreiben Masse je Fläche; die Dicke hängt von Material und Struktur ab. Dieser Wert allein bestimmt weder die Dicke noch die Druckereignung."
      },
      {
        "q": "Was zählt für ein Versandpaket?",
        "a": "Die Papiermasse enthält keinen Umschlag, Karton, Klebstoff oder andere Inhalte. Das fertige Paket vor der Tarifwahl wiegen: Die nominale Schätzung garantiert keinen Gewichtsschwellenwert."
      },
      {
        "q": "Was bedeutet Blatt je Kilogramm?",
        "a": "Das sind 1000g geteilt durch die berechnete Blattmasse. Die Antwort darf gebrochen sein; sie ist ein theoretisches Verhältnis, keine ganze Blattzahl für exakt ein Kilogramm."
      }
    ]
  },
  "es": {
    "longDescription": "El gramaje es masa por superficie en g/m². La calculadora usa las dimensiones nominales A 0–A 6 en milímetros enteros de la tabla ISO 216: A 4 mide 210×297mm. La superficie es 0,06237m²; con 80g/m² son 4,9896g por hoja y 2,4948kg por 500 hojas, que se muestran como 2,495kg. No incluye embalaje; la masa real depende de las dimensiones, el gramaje real y las condiciones de almacenamiento.",
    "howToUse": [
      "Elige un formato disponible A 0–A 6; el formulario no admite dimensiones personalizadas.",
      "Introduce el gramaje del fabricante en g/m² y un número entero positivo de hojas.",
      "Lee la masa estimada sin envoltorio. Pesa el paquete terminado para enviarlo; consulta la compatibilidad del papel en el manual de la impresora."
    ],
    "howItWorks": "Superficie = ancho × alto /1 000 000 en m²; masa de la resma = superficie × g/m² × hojas /1000 en kg. La serie A divide la superficie por dos manteniendo la proporción; el A 0 ideal tiene 1m², pero la tabla redondea a milímetros enteros. Aquí no se usa exactamente 1/16m² para A 4. El gramaje debe ser positivo y las hojas un entero de 1 a 9 007 199 254 740 991. La masa y el número inverso de hojas solo se redondean al mostrarlos; el inverso puede ser fraccionario. Los límites numéricos se señalan por separado.",
    "example": "A 4:210×297mm ×80g/m² ×500 hojas =2,4948kg, mostrado como 2,495kg sin embalaje.",
    "faq": [
      {
        "q": "¿Por qué A 4 queda algo por debajo de 2,5kg?",
        "a": "Las dimensiones nominales 210×297mm dan 0,06237m² y no exactamente 1/16m².500 hojas de 80g/m² dan 2,4948kg; de 64g/m²,1,99584kg. Una estimación redondeada no sustituye el pesaje."
      },
      {
        "q": "¿Gramaje y espesor son lo mismo?",
        "a": "No. Los gramos por metro cuadrado indican masa por superficie; el espesor depende del material y la estructura. Este dato por sí solo no determina espesor ni compatibilidad con una impresora."
      },
      {
        "q": "¿Qué cuenta en un paquete?",
        "a": "La masa del papel excluye sobre, caja, pegamento y otros contenidos. Pesa el paquete terminado antes de elegir tarifa: el cálculo nominal no garantiza respetar un umbral de peso."
      },
      {
        "q": "¿Qué significa hojas por kilogramo?",
        "a": "Es 1000g dividido por la masa estimada de una hoja. Puede ser fraccionario; expresa una relación teórica y no un número entero de hojas que produzca exactamente un kilogramo."
      }
    ]
  }
};
