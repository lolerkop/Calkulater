// Individual subject copy; native human editorial review pending.
export const contract = {
  "ru": {
    "longDescription": "Складывает три внешних размера и сравнивает сумму только с введённым пределом. Например, 78×50×30 и 55×50×53 см дают одинаковые 158 см; это не означает одинаковую допустимость у перевозчика. Отдельные стороны, масса, форма, маршрут и тариф здесь не проверяются.",
    "howToUse": [
      "Измерьте внешние длину, ширину и высоту в сантиметрах, включая выступающие колёса, ручки и карманы.",
      "Введите предел суммы из условий именно вашего перевозчика и рейса; 158 см — исходный пример, а не универсальная норма.",
      "Отрицательный запас означает превышение введённой суммы. Доплаты или разрешение на перевозку калькулятор не определяет.",
      "Дюймы — точный перевод сантиметров; объём — объём прямоугольной коробки по внешним размерам, не полезная вместимость."
    ],
    "howItWorks": "Сумма S = l + w + h. Запас = предел − S; дюймы = S / 2,54; литры внешней коробки = lwh / 1000. Статус относится только к введённому пределу суммы. Уменьшение любой стороны на 1 см уменьшает S на один и тот же 1 см. Сумма и запас до предела сравниваются по кратким десятичным представлениям введённых чисел до округления результата.",
    "example": "55×40×23 см дают 118 см, запас 40 см при введённых 158 см и коробку 50,6 л. 62 дюйма точно равны 157,48 см; 158 см равны примерно 62,205 дюйма.",
    "faq": [
      {
        "q": "Почему считают сумму, а не каждую сторону?",
        "a": "Некоторые правила используют сумму, другие — отдельные размеры, а иногда оба ограничения. При одинаковой сумме этот инструмент даёт одинаковый статус независимо от формы; другие условия нужно проверять отдельно."
      },
      {
        "q": "Входят ли колёса и ручка?",
        "a": "Для внешних габаритов измеряйте самые выступающие точки, включая колёса и ручку. Не заменяйте реальный замер размером корпуса из карточки товара."
      },
      {
        "q": "Что такое 62 linear inches?",
        "a": "62 линейных дюйма — сумма трёх внешних сторон в дюймах. Точное преобразование даёт 157,48 см; перевозчик может публиковать округлённую пару «62 in / 158 cm», которую следует читать как его правило, а не тождество единиц."
      },
      {
        "q": "Что делать при превышении?",
        "a": "Проверьте правила рейса: возможны переупаковка, доплата или отказ. Каждый сантиметр на любой стороне меняет сумму одинаково; самая длинная сторона не даёт арифметического преимущества."
      }
    ],
    "disclaimer": "Проверка одного вручную введённого ограничения. Она не подтверждает принятие багажа и не заменяет действующие условия перевозчика.",
    "seoDescription": "Сравните сумму внешних сторон багажа с введённым пределом перевозчика, рассчитайте дюймы, запас и объём внешней коробки."
  },
  "en": {
    "longDescription": "Adds three outside dimensions and compares the sum only with your entered limit. A 78×50×30 cm case and a 55×50×53 cm case both total 158 cm; that does not establish equal acceptance by an airline. Individual sides, weight, shape, route and fare are not checked.",
    "howToUse": [
      "Measure outside length, width and height in centimetres, including protruding wheels, handles and pockets.",
      "Enter the sum limit from the rules for your carrier and flight; 158 cm is a starting example, not a universal allowance.",
      "A negative margin exceeds the entered sum limit. The calculator does not decide fees or carriage permission.",
      "Inches convert the centimetres; volume describes an outside rectangular box, not usable packing capacity."
    ],
    "howItWorks": "Sum S = l + w + h. Margin = limit − S; inches = S / 2.54; outer box litres = lwh / 1000. The status concerns only the entered sum limit. Removing 1 cm from any side reduces S by the same 1 cm. The sum and remaining allowance are compared using the shortest decimal representations of parsed inputs before display rounding.",
    "example": "55×40×23 cm totals 118 cm, leaving 40 cm against an entered 158 cm, with a 50.6 L box. Exactly 62 inches is 157.48 cm; 158 cm is approximately 62.205 inches.",
    "faq": [
      {
        "q": "Why a sum rather than each side?",
        "a": "Some rules use a sum, others individual sides, and some use both. Equal sums give equal status in this tool regardless of shape; check other requirements separately."
      },
      {
        "q": "Do wheels and the handle count?",
        "a": "For outside dimensions, measure the outermost points including wheels and handles. A listed body size is not a substitute for measuring the bag."
      },
      {
        "q": "What are 62 linear inches?",
        "a": "62 linear inches means the sum of the three outside sides in inches. The exact conversion is 157.48 cm. A carrier may publish the rounded policy pair “62 in /158 cm”; that is its rule, not an exact unit identity."
      },
      {
        "q": "What to do when over?",
        "a": "Check your flight’s rules: repacking, a fee or refusal may apply. One centimetre removed from any side has the same arithmetic effect; the longest side has no special advantage."
      }
    ],
    "disclaimer": "Checks one manually entered restriction. It does not confirm baggage acceptance or replace the operating carrier’s current rules.",
    "seoDescription": "Compare the outside-dimension sum of a bag with an entered carrier limit; calculate inches, margin and outer box volume."
  },
  "uk": {
    "longDescription": "Додає три зовнішні розміри й порівнює суму лише з введеною межею. Валізи 78×50×30 і 55×50×53 см мають однакові 158 см, але це не гарантує однакового прийняття перевізником. Окремі сторони, маса, форма, маршрут і тариф не перевіряються.",
    "howToUse": [
      "Виміряйте зовнішні довжину, ширину й висоту в сантиметрах разом із колесами, ручками й виступними кишенями.",
      "Введіть межу суми з правил вашого перевізника та рейсу; 158 см — початковий приклад, а не загальна норма.",
      "Від’ємний запас означає перевищення введеної межі; доплату або дозвіл на перевезення модель не визначає.",
      "Дюйми — перетворення сантиметрів; об’єм стосується зовнішньої прямокутної коробки, а не корисної місткості."
    ],
    "howItWorks": "Сума S = l + w + h. Запас = межа − S; дюйми = S /2,54; літри коробки = lwh /1000. Статус перевіряє тільки введену сумарну межу. Зменшення будь-якої сторони на 1 см однаково зменшує суму. Сума й запас до межі порівнюються за короткими десятковими поданнями введених чисел до округлення результату.",
    "example": "55×40×23 см дають 118 см, запас 40 см за введених 158 см і коробку 50,6 л. 62 дюйми точно дорівнюють 157,48 см, а 158 см — приблизно 62,205 дюйма.",
    "faq": [
      {
        "q": "Чи включати колеса й ручку?",
        "a": "Так, для зовнішніх розмірів вимірюйте найвиступніші точки, включно з колесами та ручкою. Розмір корпусу в описі товару може відрізнятися від повного габариту."
      },
      {
        "q": "Яка типова норма?",
        "a": "Звірте конкретні правила рейсу, а не загальне число. 158 см — приклад у полі; 62 дюйми математично дорівнюють 157,48 см, хоча перевізник може опублікувати округлену пару 62 in /158 cm."
      },
      {
        "q": "Що буде за перевищення?",
        "a": "Наслідки залежать від перевізника, рейсу та інших обмежень: можливі доплата, перепакування або відмова. Цей інструмент їх не прогнозує."
      },
      {
        "q": "Чи важлива форма валізи?",
        "a": "За однакової суми модель дає однаковий результат незалежно від форми. Але перевізник може додатково обмежувати окремі сторони, масу або відповідність калібратору."
      }
    ],
    "disclaimer": "Перевірка одного введеного вручну обмеження. Вона не підтверджує прийняття багажу й не замінює чинних правил перевізника.",
    "seoDescription": "Порівняйте суму зовнішніх сторін багажу з введеною межею перевізника, розрахуйте дюйми, запас і об’єм зовнішньої коробки."
  },
  "de": {
    "longDescription": "Addiert drei Außenmaße und vergleicht die Summe nur mit der eingegebenen Grenze. 78×50×30 und 55×50×53 cm ergeben beide 158 cm; eine gleiche Annahme durch die Fluggesellschaft folgt daraus nicht. Einzelmaße, Gewicht, Form, Strecke und Tarif werden nicht geprüft.",
    "howToUse": [
      "Äußere Länge, Breite und Höhe in Zentimetern einschließlich Rollen, Griffen und vorstehenden Taschen messen.",
      "Summengrenze aus den Regeln Ihres Fluges eingeben; 158 cm ist ein Ausgangsbeispiel, keine allgemeine Freigrenze.",
      "Eine negative Reserve überschreitet die eingegebene Summe. Gebühren oder Beförderungserlaubnis werden nicht bestimmt.",
      "Zoll sind umgerechnete Zentimeter; das Volumen gilt für einen äußeren Quader, nicht für nutzbaren Stauraum."
    ],
    "howItWorks": "Summe S = l + w + h. Reserve = Grenze − S; Zoll = S /2,54; Quaderliter = lwh /1000. Der Status betrifft allein die eingegebene Summengrenze. 1 cm weniger an jeder beliebigen Seite senkt S um denselben 1 cm. Summe und Rest bis zur Grenze werden anhand der kürzesten Dezimaldarstellungen der Eingaben vor der Anzeigerundung verglichen.",
    "example": "55×40×23 cm ergeben 118 cm, 40 cm Reserve bei eingegebenen 158 cm und 50,6 l Quadergröße. 62 Zoll sind exakt 157,48 cm; 158 cm entsprechen etwa 62,205 Zoll.",
    "faq": [
      {
        "q": "Warum eine Summe und nicht jede Seite einzeln?",
        "a": "Manche Regeln verwenden die Summe, andere einzelne Seiten und manche beides. Gleiche Summen ergeben hier unabhängig von der Form denselben Status; weitere Bedingungen separat prüfen."
      },
      {
        "q": "Zählen Rollen und Griff mit?",
        "a": "Für Außenmaße die äußersten Punkte einschließlich Rollen und Griffen messen. Eine angegebene Gehäusegröße ersetzt die Messung des ganzen Gepäckstücks nicht."
      },
      {
        "q": "Was sind 62 linear inches?",
        "a": "62 linear inches sind die Summe der drei äußeren Seiten in Zoll. Exakt umgerechnet sind es 157,48 cm. Eine veröffentlichte gerundete Regel 62 in /158 cm ist keine exakte Einheitengleichung."
      },
      {
        "q": "Was tun bei Überschreitung?",
        "a": "Die Flugregeln prüfen: Umpacken, Gebühren oder Ablehnung sind möglich. Jeder entfernte Zentimeter wirkt an allen Seiten gleich; die längste Seite bietet keinen rechnerischen Vorteil."
      }
    ],
    "disclaimer": "Prüfung einer manuell eingegebenen Grenze. Keine Bestätigung der Gepäckannahme und kein Ersatz für die aktuellen Regeln der ausführenden Fluggesellschaft.",
    "seoDescription": "Vergleiche die Summe der äußeren Gepäckmaße mit einer eingegebenen Grenze; berechne Zoll, Rest und äußeres Kastenvolumen."
  },
  "es": {
    "longDescription": "Suma tres medidas exteriores y compara el resultado solo con el límite introducido. 78×50×30 y 55×50×53 cm suman los mismos 158 cm; eso no garantiza la misma aceptación por una aerolínea. No verifica lados individuales, peso, forma, ruta ni tarifa.",
    "howToUse": [
      "Mide largo, ancho y alto exteriores en centímetros, incluidas ruedas, asas y bolsillos salientes.",
      "Introduce el límite de suma de tu compañía y vuelo; 158 cm es un ejemplo inicial, no una franquicia universal.",
      "Un margen negativo supera la suma introducida. La calculadora no determina cargos ni autorización de transporte.",
      "Las pulgadas convierten los centímetros; el volumen corresponde a una caja rectangular exterior, no a la capacidad útil."
    ],
    "howItWorks": "Suma S = l + w + h. Margen = límite − S; pulgadas = S /2,54; litros de caja = lwh /1000. El estado se refiere solo al límite de suma introducido. Quitar 1 cm a cualquier lado reduce S en el mismo 1 cm. La suma y el margen restante se comparan con las representaciones decimales más cortas de los datos antes de redondear la salida.",
    "example": "55×40×23 cm suman 118 cm, dejan 40 cm frente a 158 cm introducidos y forman una caja de 50,6 l. 62 pulgadas son exactamente 157,48 cm; 158 cm equivalen aproximadamente a 62,205 pulgadas.",
    "faq": [
      {
        "q": "¿Por qué una suma y no cada lado?",
        "a": "Hay reglas por suma, por lados separados y por ambas. Con igual suma, este instrumento da el mismo estado sin importar la forma; comprueba otras restricciones aparte."
      },
      {
        "q": "¿Cuentan las ruedas y el asa?",
        "a": "Para las medidas exteriores, toma los puntos más salientes, incluidas ruedas y asas. El tamaño del cuerpo anunciado no sustituye la medición de toda la maleta."
      },
      {
        "q": "¿Qué son 62 pulgadas lineales?",
        "a": "62 pulgadas lineales son la suma de los tres lados exteriores en pulgadas. La conversión exacta es 157,48 cm. Una compañía puede publicar la pareja redondeada 62 in /158 cm como regla, no como identidad exacta."
      },
      {
        "q": "¿Qué hago si me paso?",
        "a": "Consulta las reglas del vuelo: pueden exigir cambiar el embalaje, pagar o rechazarlo. Cada centímetro eliminado tiene el mismo efecto en cualquier lado; el más largo no tiene una ventaja aritmética."
      }
    ],
    "disclaimer": "Comprueba una restricción introducida manualmente. No confirma la aceptación del equipaje ni sustituye las condiciones actuales de la compañía operadora.",
    "seoDescription": "Compara la suma de dimensiones exteriores del equipaje con un límite introducido y calcula pulgadas, margen y volumen exterior."
  }
};
