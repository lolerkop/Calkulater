import type { CalculatorCopy } from '../../lib/platform/types';

type Body = Pick<CalculatorCopy, 'shortDescription' | 'seoDescription' | 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

// Subject-specific retained and amended copy; source and calculation limits are explicit.
export const contractContent: Record<'ru'|'en'|'uk'|'de'|'es', Body> = {
  "ru": {
    "longDescription": "Прямой усечённый круговой конус описывается двумя концентрическими основаниями и перпендикулярной высотой. Его объём V = πh(R²+Rr+r²)/3 учитывает непрерывное изменение радиуса по высоте. Образующая l = √(h²+(R−r)²) идёт по боковой поверхности; подстановка h вместо l занижает её площадь. Здесь принята запись R > r ≥ 0: больший радиус вводится первым, а нулевой меньший радиус даёт обычный конус.",
    "howToUse": [
      "Выберите единицу длины.",
      "Введите больший радиус основания R.",
      "Введите меньший радиус r независимо от положения тела.",
      "Укажите высоту: это вертикаль между основаниями, а не образующая."
    ],
    "howItWorks": "Объём V = πh(R² + Rr + r²)/3. Образующая l = √(h² + (R − r)²). Боковая поверхность π(R + r)l, полная — она же плюс площади обоих оснований.",
    "example": "У усечённого конуса с радиусами 6 и 3 см и высотой 8 см объём равен 527,79 см³.",
    "faq": [
      {
        "q": "Чем высота отличается от образующей?",
        "a": "Высота h перпендикулярна основаниям, образующая l идёт по скату. При разных радиусах l > h, поэтому π(R+r)h меньше правильной боковой поверхности π(R+r)l."
      },
      {
        "q": "Откуда в формуле объёма берётся слагаемое Rr?",
        "a": "Радиус сечения меняется линейно, а площадь — как квадрат радиуса. Интегрирование π[R+(r−R)z/h]² от 0 до h даёт πh(R²+Rr+r²)/3. Простая средняя площадь оснований завышает объём на πh(R−r)²/6."
      },
      {
        "q": "Что будет, если верхний радиус равен нулю?",
        "a": "Получится обычный конус, и формула сводится к πR²h/3. Это удобная проверка правильности расчёта."
      },
      {
        "q": "Почему верхний радиус должен быть меньше нижнего?",
        "a": "Так задан порядок двух радиусов в этом инструменте, а не ограничение возможной ориентации тела. Введите больший радиус как R и меньший как r независимо от того, как стоит ёмкость. Равные радиусы здесь исключены; для них используйте цилиндр."
      },
      {
        "q": "Как посчитать, сколько войдёт в ведро?",
        "a": "Введите радиусы дна и верха и высоту по внутренней стороне. Объём в кубических сантиметрах, делённый на 1000, даст литры."
      }
    ],
    "shortDescription": "Объём, образующая и поверхности усечённого конуса по двум радиусам и высоте.",
    "seoDescription": "Рассчитайте объём, образующую, боковую и полную поверхность усечённого конуса по двум радиусам и высоте.",
    "disclaimer": "Прямой усечённый конус с параллельными круговыми основаниями и общей осью. Полная поверхность включает оба основания; стенки, бортик и частичное заполнение не моделируются. Для вместимости нужны внутренние размеры в одной выбранной единице."
  },
  "en": {
    "longDescription": "A right circular frustum has concentric parallel bases and a perpendicular height. Its volume V = πh(R²+Rr+r²)/3 accounts for a radius changing continuously with height. Slant height l = √(h²+(R−r)²) follows the lateral surface; substituting h for l understates that area. This tool uses R > r ≥ 0: enter the larger radius first, while a zero smaller radius gives a full cone.",
    "howToUse": [
      "Choose the length unit.",
      "Enter the larger base radius R.",
      "Enter the smaller radius r regardless of the solid’s orientation.",
      "Enter the height: the vertical distance between the bases, not the slant."
    ],
    "howItWorks": "Volume V = πh(R² + Rr + r²)/3. Slant height l = √(h² + (R − r)²). The lateral surface is π(R + r)l, and the total surface adds both bases.",
    "example": "A frustum with radii of 6 and 3 cm and a height of 8 cm has a volume of 527.79 cm³.",
    "faq": [
      {
        "q": "How is the height different from the slant height?",
        "a": "Height h is perpendicular to the bases; slant l follows the surface. With unequal radii l > h, so π(R+r)h is smaller than the correct lateral area π(R+r)l."
      },
      {
        "q": "Where does the Rr term in the volume come from?",
        "a": "Cross-section radius changes linearly, while its area is quadratic. Integrating π[R+(r−R)z/h]² from 0 to h gives πh(R²+Rr+r²)/3. Averaging the base areas instead overstates volume by πh(R−r)²/6."
      },
      {
        "q": "What happens if the top radius is zero?",
        "a": "You get an ordinary cone, and the formula reduces to πR²h/3. That makes a convenient check on the result."
      },
      {
        "q": "Why must the top radius be smaller than the bottom one?",
        "a": "That is this tool’s input order, not a restriction on how a solid can be oriented. Enter the larger radius as R and the smaller as r regardless of how the vessel stands. Equal radii are excluded here; use the cylinder calculator for that case."
      },
      {
        "q": "How do I work out what a bucket holds?",
        "a": "Enter the radii of the base and the rim and the inside height. The volume in cubic centimetres divided by 1000 gives litres."
      }
    ],
    "shortDescription": "Volume, slant height and surfaces of a truncated cone from two radii and the height.",
    "seoDescription": "Calculate the volume, slant height, lateral and total surface of a truncated cone from two radii and the height.",
    "disclaimer": "A right circular frustum with parallel circular bases and one common axis. Total surface includes both bases; wall thickness, rim and partial filling are not modelled. Capacity needs internal dimensions in one selected unit."
  },
  "uk": {
    "longDescription": "Прямий зрізаний круговий конус має концентричні паралельні основи й перпендикулярну висоту. Об’єм V = πh(R²+Rr+r²)/3 враховує неперервну зміну радіуса за висотою. Твірна l = √(h²+(R−r)²) проходить бічною поверхнею; підстановка h замість l занижує її площу. Тут прийнято R > r ≥ 0: більший радіус вводиться першим, а нульовий менший дає повний конус.",
    "howToUse": [
      "Виберіть одиницю довжини.",
      "Уведіть більший радіус основи R.",
      "Уведіть менший радіус r незалежно від положення тіла.",
      "Вкажіть висоту: це вертикаль між основами, а не твірна по схилу."
    ],
    "howItWorks": "Об’єм дорівнює πh(R² + Rr + r²)/3. Твірна рахується від різниці радіусів: l = √(h² + (R − r)²), бо бічна лінія нахилена рівно настільки, наскільки верхня основа вужча за нижню. Бічна поверхня дорівнює π(R + r)l, а повна додає до неї площі обох основ.",
    "example": "Зрізаний конус із R = 6 см, r = 3 см і h = 8 см має об’єм 168π ≈ 527,79 см³. Твірна √73 ≈ 8,544 см, бічна поверхня 9π√73 ≈ 241,58 см².",
    "faq": [
      {
        "q": "Чим висота відрізняється від твірної?",
        "a": "Висота h перпендикулярна основам, твірна l йде по схилу. За різних радіусів l > h, тому π(R+r)h менша за правильну бічну площу π(R+r)l."
      },
      {
        "q": "Звідки у формулі об’єму доданок Rr?",
        "a": "Радіус перерізу змінюється лінійно, площа — квадратично. Інтегрування π[R+(r−R)z/h]² від 0 до h дає πh(R²+Rr+r²)/3. Середня площа основ натомість завищує об’єм на πh(R−r)²/6."
      },
      {
        "q": "Що буде, якщо верхній радіус дорівнює нулю?",
        "a": "Вийде звичайний конус, і вираз зведеться до πR²h/3. Це зручна перевірка правильності розрахунку."
      },
      {
        "q": "Чому верхній радіус має бути меншим за нижній?",
        "a": "Це порядок радіусів у цьому інструменті, а не обмеження орієнтації тіла. Уведіть більший радіус як R та менший як r незалежно від положення ємності. Рівні радіуси тут виключені; для них використовуйте циліндр."
      },
      {
        "q": "Як порахувати, скільки ввійде у відро?",
        "a": "Введіть радіуси дна й верху та висоту по внутрішньому боці. Об’єм у кубічних сантиметрах, поділений на 1000, дасть літри."
      }
    ],
    "shortDescription": "Об’єм, твірна та поверхні зрізаного конуса за двома радіусами і висотою.",
    "seoDescription": "Розрахуйте об’єм, твірну, бічну та повну поверхню зрізаного конуса за двома радіусами і висотою.",
    "disclaimer": "Прямий зрізаний конус із паралельними круговими основами та спільною віссю. Повна поверхня містить обидві основи; стінки, бортик і часткове заповнення не моделюються. Для місткості потрібні внутрішні розміри в одній вибраній одиниці."
  },
  "de": {
    "longDescription": "Ein gerader Kegelstumpf hat konzentrische parallele Kreisflächen und eine senkrechte Höhe. Sein Volumen V = πh(R²+Rr+r²)/3 berücksichtigt den stetig veränderlichen Radius. Die Mantellinie l = √(h²+(R−r)²) verläuft schräg; h statt l einzusetzen ergibt eine zu kleine Mantelfläche. Hier gilt R > r ≥ 0: Der größere Radius kommt zuerst, der kleinere Radius null ergibt einen vollständigen Kegel.",
    "howToUse": [
      "Wähle die Längeneinheit.",
      "Gib den größeren Grundflächenradius R ein.",
      "Gib den kleineren Radius r unabhängig von der Lage des Körpers ein.",
      "Trage die Höhe ein: den senkrechten Abstand der Grundflächen, nicht die Schräge."
    ],
    "howItWorks": "Volumen V = πh(R² + Rr + r²)/3. Seitenhöhe l = √(h² + (R − r)²). Die Mantelfläche ist π(R + r)l, und die Gesamtoberfläche zählt beide Grundflächen dazu.",
    "example": "Ein Kegelstumpf mit den Radien 6 und 3 cm und der Höhe 8 cm hat ein Volumen von 527,79 cm³.",
    "faq": [
      {
        "q": "Wie unterscheidet sich die Höhe von der Seitenhöhe?",
        "a": "Die Höhe h steht senkrecht auf den Grundflächen, die Mantellinie l verläuft schräg. Bei ungleichen Radien ist l > h; deshalb ist π(R+r)h kleiner als die richtige Mantelfläche π(R+r)l."
      },
      {
        "q": "Woher kommt der Term Rr im Volumen?",
        "a": "Der Querschnittsradius ändert sich linear, seine Fläche quadratisch. Das Integral von π[R+(r−R)z/h]² über 0 bis h ergibt πh(R²+Rr+r²)/3. Der Mittelwert der Grundflächen setzt das Volumen um πh(R−r)²/6 zu hoch an."
      },
      {
        "q": "Was passiert bei einem oberen Radius von null?",
        "a": "Du bekommst einen gewöhnlichen Kegel, und die Formel geht in πR²h/3 über. Das ist eine bequeme Probe für das Ergebnis."
      },
      {
        "q": "Warum muss der obere Radius kleiner sein als der untere?",
        "a": "Das ist die Eingabereihenfolge dieses Rechners und keine Einschränkung der Körperorientierung. Gib den größeren Radius als R und den kleineren als r ein, unabhängig von der Lage des Behälters. Gleiche Radien sind hier ausgeschlossen; dafür eignet sich der Zylinderrechner."
      },
      {
        "q": "Wie ermittle ich, was ein Eimer fasst?",
        "a": "Trage die Radien von Boden und Rand und die Innenhöhe ein. Das Volumen in Kubikzentimetern geteilt durch 1000 ergibt Liter."
      }
    ],
    "shortDescription": "Volumen, Seitenhöhe und Flächen eines Kegelstumpfs aus zwei Radien und der Höhe.",
    "seoDescription": "Berechne Volumen, Seitenhöhe, Mantel- und Gesamtoberfläche eines Kegelstumpfs aus zwei Radien und der Höhe.",
    "disclaimer": "Gerader Kegelstumpf mit parallelen Kreisflächen und gemeinsamer Achse. Die Gesamtoberfläche enthält beide Grundflächen; Wandstärke, Rand und Teilfüllung werden nicht berechnet. Fassungsvermögen verlangt Innenmaße in einer gewählten Einheit."
  },
  "es": {
    "longDescription": "Un tronco de cono circular recto tiene bases paralelas concéntricas y altura perpendicular. El volumen V = πh(R²+Rr+r²)/3 incorpora el cambio continuo del radio con la altura. La generatriz l = √(h²+(R−r)²) sigue la superficie lateral; sustituirla por h subestima esa área. Aquí se usa R > r ≥ 0: se introduce primero el radio mayor y un valor cero para el radio menor da un cono completo.",
    "howToUse": [
      "Elige la unidad de longitud.",
      "Introduce el radio mayor de la base R.",
      "Introduce el radio menor r, independientemente de la orientación del sólido.",
      "Introduce la altura: la distancia vertical entre las bases, no la generatriz."
    ],
    "howItWorks": "Volumen V = πh(R² + Rr + r²)/3. Generatriz l = √(h² + (R − r)²). La superficie lateral es π(R + r)l, y la total añade ambas bases.",
    "example": "Un tronco de cono con radios de 6 y 3 cm y 8 cm de altura tiene un volumen de 527,79 cm³.",
    "faq": [
      {
        "q": "¿En qué se diferencian la altura y la generatriz?",
        "a": "La altura h es perpendicular a las bases y la generatriz l va por la superficie. Con radios distintos l > h, así que π(R+r)h es menor que el área lateral correcta π(R+r)l."
      },
      {
        "q": "¿De dónde sale el término Rr del volumen?",
        "a": "El radio de la sección cambia linealmente y su área, cuadráticamente. Integrar π[R+(r−R)z/h]² de 0 a h da πh(R²+Rr+r²)/3. Promediar las áreas de las bases sobrestima el volumen en πh(R−r)²/6."
      },
      {
        "q": "¿Qué ocurre si el radio superior es cero?",
        "a": "Sale un cono corriente, y la fórmula se reduce a πR²h/3. Eso sirve como comprobación cómoda del resultado."
      },
      {
        "q": "¿Por qué el radio superior debe ser menor que el inferior?",
        "a": "Es el orden de entrada de esta herramienta, no una limitación de orientación del sólido. Introduce el radio mayor como R y el menor como r, independientemente de la posición del recipiente. Aquí se excluyen radios iguales; usa el cilindro para ese caso."
      },
      {
        "q": "¿Cómo calculo lo que cabe en un cubo de obra?",
        "a": "Introduce los radios del fondo y del borde y la altura interior. El volumen en centímetros cúbicos dividido entre 1000 da litros."
      }
    ],
    "shortDescription": "Volumen, generatriz y superficies de un tronco de cono a partir de dos radios y la altura.",
    "seoDescription": "Calcula el volumen, la generatriz y las superficies lateral y total de un tronco de cono a partir de dos radios y la altura.",
    "disclaimer": "Tronco de cono recto con bases circulares paralelas y eje común. La superficie total incluye ambas bases; no se modelan espesor, borde ni llenado parcial. Para capacidad se necesitan medidas interiores en una unidad elegida."
  }
};
