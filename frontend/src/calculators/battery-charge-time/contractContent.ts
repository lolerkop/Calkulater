import type { CalculatorCopy } from '../../lib/platform/types';

type Body = Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer' | 'seoDescription'>;

export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Body> = {
  "ru": {
    "longDescription": "Оценка времени пополнения заданного количества заряда при постоянном токе, а не прогноз полного цикла конкретного зарядного устройства. Введите ампер-часы, которые нужно добавить: по умолчанию это вся указанная ёмкость. Коэффициент η здесь означает долю поданного заряда, сохранённую батареей, а не энергетический КПД зарядного устройства. Стадии постоянного напряжения, ограничение тока и исходный уровень заряда отдельно не моделируются.",
    "howToUse": [
      "Укажите добавляемый заряд в А·ч; для частичной зарядки сами рассчитайте оставшиеся А·ч.",
      "Введите постоянный ток, поступающий именно в батарею, в амперах.",
      "Задайте η от 1 до 100 % по данным батареи и режима зарядки. 100 % — идеальная модель сохранения заряда.",
      "Сравните расчётные часы с описанием стадий зарядки у производителя; часы и минуты округляются до минуты."
    ],
    "howItWorks": "За t часов ток I передаёт I·t А·ч. Сохранённый заряд C = I·t·η/100, поэтому t = 100C/(Iη). Заряд, отданный устройством, равен 100C/η. Напряжение в эту модель не входит: расчёт в А·ч не описывает потери энергии в Вт·ч.",
    "example": "100 А·ч при 10 А и η = 100 % дают 10 ч. При η = 80 % потребуется 125 А·ч от источника и 12 ч 30 мин. Если нужно добавить только 50 А·ч, при 10 А и 100 % получится 5 ч.",
    "faq": [
      {
        "q": "Почему время зарядки отличается от времени работы?",
        "a": "Зарядка использует ток и добавляемый заряд в А·ч. Время работы при заданной мощности требует энергии в Вт·ч, поэтому там дополнительно нужны напряжение, глубина разряда и потери преобразования."
      },
      {
        "q": "На сколько увеличить время из-за последней стадии зарядки?",
        "a": "Универсального множителя нет. Ток во время абсорбции или стадии постоянного напряжения зависит от химии батареи и алгоритма зарядного устройства; эта страница не интегрирует такой профиль."
      },
      {
        "q": "Можно ли подставить энергетический КПД зарядного устройства?",
        "a": "Не напрямую: здесь η — отношение сохранённых А·ч к поданным А·ч. Энергетический КПД сравнивает энергии и может учитывать разные напряжения. Для η нет универсального значения для всех батарей."
      },
      {
        "q": "Учитывается ли остаточный заряд и нулевой ток?",
        "a": "Исходный уровень заряда не вводится. Для частичного пополнения задайте нужные А·ч. Добавляемый заряд и ток должны быть положительными; при нулевом токе конечное время пополнения получить нельзя."
      }
    ],
    "disclaimer": "Линейная модель постоянного тока. Она не определяет допустимый зарядный ток, напряжение, температуру или момент завершения зарядки; эти параметры задаются изготовителем конкретной батареи.",
    "seoDescription": "Оцените время пополнения заряда в А·ч при постоянном токе и заданной доле сохранённого заряда. Стадии реального зарядного устройства не моделируются."
  },
  "en": {
    "longDescription": "Estimate the time to add a specified amount of charge at a constant battery current. This is a charge balance, rather than a prediction of a particular charger's complete cycle. Enter the amp-hours still needed; the default treats the entire stated capacity as needing replenishment. Here η is the fraction of supplied charge retained by the battery, not the charger's energy efficiency. Initial state of charge, voltage stages and current taper are not separate inputs.",
    "howToUse": [
      "Enter the charge to add in Ah; calculate the remaining Ah yourself for a partial recharge.",
      "Enter the constant current actually reaching the battery in A.",
      "Use η between 1 and 100% for this battery and charging regime. 100% represents ideal charge retention.",
      "Compare the calculated hours with the manufacturer's charging stages; the hours-and-minutes display rounds to a minute."
    ],
    "howItWorks": "A current I supplies I·t Ah in t hours. Retained charge is C = I·t·η/100, so t = 100C/(Iη). Charge supplied by the charger is 100C/η. Voltage is absent from this model: an Ah balance does not describe energy losses in Wh.",
    "example": "Adding 100 Ah at 10 A with η = 100% takes 10 h. At η = 80%, the source supplies 125 Ah over 12 h 30 min. Adding only 50 Ah at 10 A and 100% takes 5 h.",
    "faq": [
      {
        "q": "How does charging time differ from battery run time?",
        "a": "Charging uses current and charge to add in Ah. Run time at a specified power uses energy in Wh, so it also needs voltage, depth of discharge and conversion losses."
      },
      {
        "q": "How much time should I add for the final charging stage?",
        "a": "There is no universal multiplier. Current during absorption or constant-voltage charging depends on battery chemistry and the charger's algorithm. This page does not integrate that current profile."
      },
      {
        "q": "Can I enter the charger's energy efficiency?",
        "a": "Not directly. η here compares retained Ah with supplied Ah. Energy efficiency compares energies and may involve different voltages. No single charge-retention value applies to every battery."
      },
      {
        "q": "Are the starting charge and a zero current handled?",
        "a": "Starting state of charge is not an input. Enter the Ah still needed for a partial recharge. Charge to add and current must be positive; zero current cannot give a finite replenishment time."
      }
    ],
    "disclaimer": "Constant-current charge model. It does not determine permissible charging current, voltage, temperature or termination; use the specifications for the actual battery.",
    "seoDescription": "Estimate the time to add charge in Ah at constant current and a specified retained-charge fraction. Actual charger stages are not modelled."
  },
  "uk": {
    "longDescription": "Оцінка часу додавання заданої кількості заряду за сталого струму в батареї. Це баланс заряду, а не прогноз повного циклу конкретного зарядного пристрою. Введіть ампер-години, яких бракує; типово поповнюється вся вказана ємність. η тут означає частку поданого заряду, збережену батареєю, а не енергетичний ККД пристрою. Початковий рівень заряду, стадії напруги та спад струму окремо не моделюються.",
    "howToUse": [
      "Введіть заряд, який потрібно додати, в А·год; для часткового заряджання самостійно визначте решту А·год.",
      "Укажіть сталий струм, що надходить саме до батареї, в амперах.",
      "Задайте η від 1 до 100 % за даними батареї та режиму. 100 % означає ідеальне збереження заряду.",
      "Зіставте розрахункові години з етапами заряджання виробника; години й хвилини округлюються до хвилини."
    ],
    "howItWorks": "За t годин струм I передає I·t А·год. Збережений заряд C = I·t·η/100, звідси t = 100C/(Iη). Пристрій віддає 100C/η А·год. Напруга не входить до формули: баланс А·год не описує втрати енергії у Вт·год.",
    "example": "100 А·год за струму 10 А та η = 100 % дають 10 год. За η = 80 % джерело має подати 125 А·год протягом 12 год 30 хв. Для додавання лише 50 А·год за 10 А та 100 % потрібно 5 год.",
    "faq": [
      {
        "q": "Чим час заряджання відрізняється від часу роботи?",
        "a": "Заряджання використовує струм і додаваний заряд в А·год. Час роботи за заданої потужності потребує енергії у Вт·год, тому додатково потрібні напруга, глибина розряду та втрати перетворення."
      },
      {
        "q": "Скільки часу додавати на завершальний етап заряджання?",
        "a": "Універсального множника немає. Струм під час абсорбції чи сталої напруги залежить від хімії батареї та алгоритму пристрою. Тут такий профіль не інтегрується."
      },
      {
        "q": "Чи можна ввести енергетичний ККД зарядного пристрою?",
        "a": "Не напряму: η тут порівнює збережені й подані А·год. Енергетичний ККД порівнює енергії та може враховувати різні напруги. Єдиного значення для всіх батарей немає."
      },
      {
        "q": "Чи враховані початковий заряд і нульовий струм?",
        "a": "Початковий рівень заряду не задається. Для часткового поповнення введіть потрібні А·год. Додаваний заряд і струм мають бути додатними; нульовий струм не дає скінченного часу поповнення."
      }
    ],
    "disclaimer": "Лінійна модель сталого струму. Допустимі струм заряджання, напругу, температуру та умови завершення визначає виробник конкретної батареї.",
    "seoDescription": "Оцініть час додавання заряду в А·год за сталого струму та заданої частки збереженого заряду. Стадії реального пристрою не моделюються."
  },
  "de": {
    "longDescription": "Schätzt die Zeit, um bei konstantem Batteriestrom eine vorgegebene Ladungsmenge hinzuzufügen. Es handelt sich um eine Ladungsbilanz, nicht um den vollständigen Ladezyklus eines bestimmten Geräts. Gib die noch benötigten Amperestunden ein; standardmäßig wird die gesamte angegebene Kapazität aufgefüllt. η bezeichnet hier den gespeicherten Anteil der zugeführten Ladung, nicht den energetischen Wirkungsgrad des Ladegeräts. Anfangsladezustand, Spannungsphasen und abnehmender Strom werden nicht einzeln modelliert.",
    "howToUse": [
      "Gib die hinzuzufügende Ladung in Ah an; berechne bei einer Teilladung die fehlenden Ah selbst.",
      "Trage den konstanten Strom ein, der tatsächlich in die Batterie fließt, in A.",
      "Verwende η zwischen 1 und 100 % gemäß Batterie und Ladeverfahren. 100 % bedeutet ideale Ladungsspeicherung.",
      "Vergleiche die berechneten Stunden mit den Ladephasen des Herstellers; Stunden und Minuten werden auf eine Minute gerundet."
    ],
    "howItWorks": "Der Strom I liefert in t Stunden I·t Ah. Gespeichert wird C = I·t·η/100, also t = 100C/(Iη). Das Ladegerät liefert 100C/η Ah. Die Spannung kommt nicht vor: Eine Ah-Bilanz beschreibt keine Energieverluste in Wh.",
    "example": "100 Ah bei 10 A und η = 100 % ergeben 10 h. Bei η = 80 % liefert die Quelle 125 Ah in 12 h 30 min. Für nur 50 Ah bei 10 A und 100 % sind es 5 h.",
    "faq": [
      {
        "q": "Wie unterscheidet sich die Ladezeit von der Akkulaufzeit?",
        "a": "Beim Laden zählen Strom und hinzuzufügende Ladung in Ah. Die Laufzeit bei vorgegebener Leistung benötigt Energie in Wh, also zusätzlich Spannung, Entladetiefe und Umwandlungsverluste."
      },
      {
        "q": "Wie viel Zeit kommt für die letzte Ladephase hinzu?",
        "a": "Dafür gibt es keinen allgemeinen Faktor. Der Strom während Absorption oder Konstantspannungsphase hängt von Zellchemie und Ladealgorithmus ab. Dieser Rechner integriert keinen solchen Stromverlauf."
      },
      {
        "q": "Kann ich den energetischen Wirkungsgrad des Ladegeräts eingeben?",
        "a": "Nicht unmittelbar. η vergleicht hier gespeicherte mit zugeführten Ah. Der energetische Wirkungsgrad vergleicht Energien und kann unterschiedliche Spannungen berücksichtigen. Ein einheitlicher Wert für alle Batterien existiert nicht."
      },
      {
        "q": "Werden Anfangsladung und ein Strom von null berücksichtigt?",
        "a": "Der Anfangsladezustand ist kein eigenes Eingabefeld. Gib bei einer Teilladung die fehlenden Ah ein. Ladungsmenge und Strom müssen positiv sein; ohne Strom gibt es keine endliche Auffüllzeit."
      }
    ],
    "disclaimer": "Lineares Konstantstrommodell. Zulässigen Ladestrom, Spannung, Temperatur und Ladeende entnimmst du den Angaben für die konkrete Batterie.",
    "seoDescription": "Zeit zum Hinzufügen von Ladung in Ah bei konstantem Strom und angegebenem gespeichertem Ladungsanteil schätzen. Ladephasen werden nicht modelliert."
  },
  "es": {
    "longDescription": "Estima el tiempo para añadir una cantidad de carga con corriente constante en la batería. Es un balance de carga, no la predicción del ciclo completo de un cargador concreto. Introduce los amperios-hora que faltan; por defecto se repone toda la capacidad indicada. Aquí η es la fracción de la carga suministrada que queda almacenada, no la eficiencia energética del cargador. El estado inicial, las etapas de tensión y la reducción de corriente no se modelan por separado.",
    "howToUse": [
      "Introduce la carga que falta en Ah; calcula tú los Ah restantes para una recarga parcial.",
      "Indica la corriente constante que llega realmente a la batería en A.",
      "Usa η entre el 1 y el 100 % según la batería y el régimen de carga. El 100 % representa retención ideal de carga.",
      "Compara las horas calculadas con las etapas descritas por el fabricante; horas y minutos se redondean al minuto."
    ],
    "howItWorks": "Una corriente I suministra I·t Ah en t horas. La carga almacenada es C = I·t·η/100, por lo que t = 100C/(Iη). El cargador entrega 100C/η Ah. La tensión no entra en esta fórmula: un balance de Ah no describe pérdidas de energía en Wh.",
    "example": "Añadir 100 Ah a 10 A con η = 100 % requiere 10 h. Con η = 80 %, la fuente entrega 125 Ah en 12 h 30 min. Añadir solo 50 Ah a 10 A y al 100 % requiere 5 h.",
    "faq": [
      {
        "q": "¿En qué se diferencia del tiempo de autonomía?",
        "a": "La carga usa corriente y Ah que añadir. La autonomía a una potencia dada usa energía en Wh y necesita además tensión, profundidad de descarga y pérdidas de conversión."
      },
      {
        "q": "¿Cuánto tiempo debo añadir por la etapa final de carga?",
        "a": "No hay un multiplicador universal. La corriente durante absorción o tensión constante depende de la química y del algoritmo del cargador. Esta página no integra ese perfil."
      },
      {
        "q": "¿Puedo introducir la eficiencia energética del cargador?",
        "a": "No directamente. Aquí η compara Ah almacenados con Ah suministrados. La eficiencia energética compara energías y puede incluir tensiones distintas. No existe un único valor para todas las baterías."
      },
      {
        "q": "¿Se incluyen la carga inicial y la corriente cero?",
        "a": "El estado inicial no es una entrada independiente. Para una recarga parcial, introduce los Ah que faltan. Carga y corriente deben ser positivas; con corriente cero no hay un tiempo finito de reposición."
      }
    ],
    "disclaimer": "Modelo lineal de corriente constante. La corriente, tensión y temperatura admisibles y el fin de carga dependen de las especificaciones de la batería concreta.",
    "seoDescription": "Estima el tiempo para añadir carga en Ah con corriente constante y una fracción de carga retenida indicada. No se modelan las etapas reales del cargador."
  }
};
