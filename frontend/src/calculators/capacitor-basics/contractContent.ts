import type { CalculatorCopy } from '../../lib/platform/types';

type Body = Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'> & Partial<Pick<CalculatorCopy, 'seoDescription'>>;

export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Body> = {
  "ru": {
    "longDescription": "Три направления расчёта одного идеального линейного конденсатора: заряд, напряжение или положительная ёмкость. Q обозначает подписанный заряд выбранной обкладки, а U — разность потенциалов той же обкладки относительно другой. Ёмкость в мкФ и заряд в мкКл согласованы: мкФ·В = мкКл. На корпусе обычно указывают ёмкость и допустимое напряжение, а не текущий заряд.",
    "howToUse": [
      "Выберите искомую величину и заполните два видимых известных поля; ответ находится в результате.",
      "Задавайте C в мкФ, U в В и Q в мкКл; C должна быть положительной.",
      "Сохраняйте одну ориентацию напряжения и знака заряда. Для вычисления C нужны ненулевые U и Q одного знака.",
      "Энергия указана в Дж. Рабочее напряжение и порядок разряда проверяйте отдельно по документации."
    ],
    "howItWorks": "Q = C·U; U = Q/C; C = Q/U. В выбранных микроединицах множитель для заряда не нужен. Энергия E = C·U²/(2·10⁶) Дж переводит мкФ в Ф. При смене знака U меняется знак Q, но E остаётся неотрицательной. При U = 0 и известном C получаются Q = E = 0; из пары Q = U = 0 определить C нельзя.",
    "example": "100 мкФ при 12 В: Q = 1 200 мкКл и E = 0,0072 Дж. При −12 В заряд −1 200 мкКл, энергия та же. При 24 В заряд 2 400 мкКл, энергия 0,0288 Дж — вчетверо больше.",
    "faq": [
      {
        "q": "Чем фарады отличаются от ампер-часов?",
        "a": "Фарад описывает заряд на единицу напряжения: Ф = Кл/В. Ампер-час — единица заряда, 1 А·ч = 3 600 Кл. Сравнить заряд можно при заданном напряжении, но напрямую приравнивать ёмкость в Ф и А·ч нельзя."
      },
      {
        "q": "Почему при удвоении напряжения энергия увеличивается вчетверо?",
        "a": "Q линейно зависит от U, а E = C·U²/2 квадратично. Эта зависимость предполагает постоянную ёмкость; реальные напряжённостные и температурные зависимости здесь отсутствуют."
      },
      {
        "q": "Разрешены ли отрицательные заряд и напряжение?",
        "a": "Да, если выбранная обкладка и направление напряжения согласованы. Для положительного C знаки Q и U совпадают. Заряды двух идеальных обкладок противоположны; их суммарный заряд не равен Q."
      },
      {
        "q": "Проверяет ли расчёт допустимое напряжение и соединения?",
        "a": "Нет: рассчитывается один идеальный конденсатор. Рабочее напряжение, полярность, ESR и безопасный разряд требуют данных конкретного компонента. Группы конденсаторов рассчитываются отдельным инструментом."
      }
    ],
    "disclaimer": "Идеальный линейный конденсатор. Расчёт не устанавливает безопасность прикосновения, время разряда или допустимые условия эксплуатации."
  },
  "en": {
    "longDescription": "Solve for charge, voltage or positive capacitance of one ideal linear capacitor. Q is the signed charge on the chosen plate; U is that plate's potential relative to the other plate. Capacitance in µF and charge in µC are consistent because µF·V = µC. Component markings normally give capacitance and voltage rating, rather than the current stored charge.",
    "howToUse": [
      "Choose the unknown and fill the two visible known fields; read the answer in the result.",
      "Use C in µF, U in V and Q in µC, with positive C.",
      "Keep the same plate and voltage orientation. Solving C requires nonzero U and Q with matching signs.",
      "Energy is in J. Check voltage rating and discharge procedures separately in the component documentation."
    ],
    "howItWorks": "Q = C·U; U = Q/C; C = Q/U. These micro-units need no charge conversion factor. Energy E = C·U²/(2·10⁶) J converts µF into F. Reversing U reverses Q but leaves energy nonnegative. At U = 0 with known C, Q = E = 0; the pair Q = U = 0 cannot determine C.",
    "example": "100 µF at 12 V gives Q = 1 200 µC and E = 0.0072 J. At −12 V, charge is −1 200 µC and energy is unchanged. At 24 V, charge is 2 400 µC and energy is 0.0288 J, four times larger.",
    "faq": [
      {
        "q": "How do farads differ from amp-hours?",
        "a": "A farad is charge per voltage: F = C/V. An amp-hour is charge, with 1 Ah = 3 600 C. Charge can be compared at a given voltage, but capacitance in F cannot be equated directly to Ah."
      },
      {
        "q": "Why does doubling voltage quadruple energy?",
        "a": "Q depends linearly on U, whereas E = C·U²/2 is quadratic. This assumes constant capacitance; real voltage and temperature dependence are absent."
      },
      {
        "q": "Can charge and voltage be negative?",
        "a": "Yes, with a consistent plate and voltage orientation. Positive C requires matching Q and U signs. The ideal plates carry opposite charges; their combined charge is not Q."
      },
      {
        "q": "Does this check voltage ratings or connections?",
        "a": "No: this is one ideal capacitor. Voltage rating, polarity, ESR and safe discharge need actual component data. Capacitor groups have a separate tool."
      }
    ],
    "disclaimer": "Ideal linear capacitor. The calculation does not establish touch safety, discharge time or permissible operating conditions."
  },
  "uk": {
    "longDescription": "Розрахунок заряду, напруги або додатної ємності одного ідеального лінійного конденсатора. Q — заряд зі знаком вибраної обкладки, U — її потенціал відносно іншої обкладки. Ємність у мкФ і заряд у мкКл узгоджені: мкФ·В = мкКл. На корпусі зазвичай зазначають ємність і допустиму напругу, а не поточний заряд.",
    "howToUse": [
      "Оберіть шукану величину та заповніть два видимі відомі поля; відповідь з'явиться в результаті.",
      "Задавайте C у мкФ, U у В і Q у мкКл; C має бути додатною.",
      "Збережіть одну обкладку та напрям напруги. Для обчислення C потрібні ненульові U та Q одного знака.",
      "Енергія вказана у Дж. Робочу напругу й порядок розряджання перевіряйте окремо за документацією."
    ],
    "howItWorks": "Q = C·U; U = Q/C; C = Q/U. Для цих мікроодиниць множник заряду не потрібен. E = C·U²/(2·10⁶) Дж переводить мкФ у Ф. Зміна знака U змінює знак Q, але енергія лишається невід'ємною. За U = 0 та відомого C маємо Q = E = 0; пара Q = U = 0 не визначає C.",
    "example": "100 мкФ за 12 В: Q = 1 200 мкКл, E = 0,0072 Дж. За −12 В заряд −1 200 мкКл, енергія та сама. За 24 В заряд 2 400 мкКл, енергія 0,0288 Дж — учетверо більша.",
    "faq": [
      {
        "q": "Чим фаради відрізняються від ампер-годин?",
        "a": "Фарад — заряд на одиницю напруги: Ф = Кл/В. Ампер-година — одиниця заряду, 1 А·год = 3 600 Кл. Заряд можна порівнювати за заданої напруги, але ємність у Ф не дорівнює напряму А·год."
      },
      {
        "q": "Чому подвоєння напруги збільшує енергію вчетверо?",
        "a": "Q лінійно залежить від U, а E = C·U²/2 — квадратично. Це передбачає сталу ємність; залежності від напруги й температури не моделюються."
      },
      {
        "q": "Чи допустимі від'ємні заряд і напруга?",
        "a": "Так, за узгодженої обкладки й напряму напруги. Додатне C вимагає однакових знаків Q та U. Заряди ідеальних обкладок протилежні; їх сумарний заряд не є Q."
      },
      {
        "q": "Чи перевіряються допустима напруга та з'єднання?",
        "a": "Ні: тут один ідеальний конденсатор. Робоча напруга, полярність, ESR і безпечне розряджання потребують даних компонента. Для груп є окремий інструмент."
      }
    ],
    "disclaimer": "Ідеальний лінійний конденсатор. Розрахунок не встановлює безпечність дотику, час розряджання чи допустимі умови експлуатації."
  },
  "de": {
    "longDescription": "Berechnet Ladung, Spannung oder positive Kapazität eines idealen linearen Kondensators. Q ist die vorzeichenbehaftete Ladung der gewählten Platte; U deren Potential gegenüber der anderen Platte. µF und µC passen zusammen: µF·V = µC. Auf Bauteilen stehen üblicherweise Kapazität und Spannungsfestigkeit, nicht die aktuell gespeicherte Ladung.",
    "howToUse": [
      "Wähle die gesuchte Größe und fülle die zwei sichtbaren bekannten Felder aus; lies den gesuchten Wert im Ergebnis.",
      "Verwende C in µF, U in V und Q in µC; C muss positiv sein.",
      "Behalte Platte und Spannungsrichtung bei. Für C müssen U und Q ungleich null sein und dasselbe Vorzeichen haben.",
      "Die Energie steht in J. Spannungsfestigkeit und Entladeverfahren prüfst du getrennt anhand der Bauteildaten."
    ],
    "howItWorks": "Q = C·U; U = Q/C; C = Q/U. Für diese Mikroeinheiten ist kein Ladungsfaktor nötig. E = C·U²/(2·10⁶) J rechnet µF in F um. Eine Umkehr von U kehrt Q um, während E nichtnegativ bleibt. Bei U = 0 und bekanntem C gilt Q = E = 0; Q = U = 0 bestimmt C nicht.",
    "example": "100 µF bei 12 V ergeben Q = 1 200 µC und E = 0,0072 J. Bei −12 V beträgt Q −1 200 µC, die Energie bleibt gleich. Bei 24 V sind es 2 400 µC und 0,0288 J, also vierfache Energie.",
    "faq": [
      {
        "q": "Wie unterscheiden sich Farad und Amperestunden?",
        "a": "Farad ist Ladung je Spannung: F = C/V. Eine Amperestunde ist Ladung, 1 Ah = 3 600 C. Bei vorgegebener Spannung lassen sich Ladungen vergleichen, aber Kapazität in F ist nicht direkt Ah gleichzusetzen."
      },
      {
        "q": "Warum vervierfacht sich die Energie bei doppelter Spannung?",
        "a": "Q hängt linear von U ab, E = C·U²/2 dagegen quadratisch. Vorausgesetzt wird konstante Kapazität; reale Spannungs- und Temperaturabhängigkeit fehlen."
      },
      {
        "q": "Dürfen Ladung und Spannung negativ sein?",
        "a": "Ja, bei einheitlicher Platte und Spannungsrichtung. Positives C verlangt gleiche Vorzeichen von Q und U. Die idealen Platten tragen entgegengesetzte Ladungen; ihre Gesamtladung ist nicht Q."
      },
      {
        "q": "Prüft der Rechner Spannungsfestigkeit und Verbindungen?",
        "a": "Nein, er beschreibt einen idealen Kondensator. Spannungsfestigkeit, Polarität, ESR und sicheres Entladen erfordern Bauteildaten. Für Kondensatorgruppen gibt es einen eigenen Rechner."
      }
    ],
    "disclaimer": "Idealer linearer Kondensator. Berührungssicherheit, Entladezeit und zulässige Betriebsbedingungen werden nicht bestimmt."
  },
  "es": {
    "longDescription": "Calcula carga, tensión o capacidad positiva de un condensador ideal lineal. Q es la carga con signo de la placa elegida y U su potencial respecto de la otra. µF y µC son coherentes: µF·V = µC. El marcado suele indicar capacidad y tensión admisible, no la carga almacenada actualmente.",
    "howToUse": [
      "Elige la incógnita y completa los dos campos conocidos visibles; lee la respuesta en el resultado.",
      "Usa C en µF, U en V y Q en µC, con C positiva.",
      "Mantén la misma placa y orientación de tensión. Para calcular C, U y Q deben ser no nulos y del mismo signo.",
      "La energía está en J. Comprueba tensión admisible y procedimiento de descarga en la documentación del componente."
    ],
    "howItWorks": "Q = C·U; U = Q/C; C = Q/U. Estas microunidades no necesitan factor para la carga. E = C·U²/(2·10⁶) J convierte µF a F. Invertir U invierte Q pero mantiene E no negativa. Con U = 0 y C conocida, Q = E = 0; la pareja Q = U = 0 no determina C.",
    "example": "100 µF a 12 V dan Q = 1 200 µC y E = 0,0072 J. A −12 V, Q es −1 200 µC y la energía no cambia. A 24 V, Q es 2 400 µC y E = 0,0288 J, cuatro veces mayor.",
    "faq": [
      {
        "q": "¿En qué se diferencian faradios y amperios-hora?",
        "a": "Un faradio es carga por tensión: F = C/V. Un amperio-hora mide carga, 1 Ah = 3 600 C. Las cargas se pueden comparar a una tensión dada, pero la capacidad en F no se iguala directamente a Ah."
      },
      {
        "q": "¿Por qué duplicar tensión cuadruplica energía?",
        "a": "Q depende linealmente de U, mientras que E = C·U²/2 es cuadrática. Se presupone capacidad constante; no se modelan dependencias reales de tensión o temperatura."
      },
      {
        "q": "¿Se admiten carga y tensión negativas?",
        "a": "Sí, con placa y orientación de tensión coherentes. C positiva exige el mismo signo de Q y U. Las placas ideales llevan cargas opuestas; su carga conjunta no es Q."
      },
      {
        "q": "¿Se comprueban tensión admisible y conexiones?",
        "a": "No: se calcula un condensador ideal. Tensión admisible, polaridad, ESR y descarga segura requieren datos del componente. Hay otro calculador para grupos de condensadores."
      }
    ],
    "disclaimer": "Condensador lineal ideal. No determina seguridad al tocarlo, tiempo de descarga ni condiciones admisibles de funcionamiento."
  }
};
