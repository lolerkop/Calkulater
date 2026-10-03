import type { CalculatorCopy } from '../../lib/platform/types';

type Body = Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer' | 'seoDescription'>;

export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Body> = {
  "ru": {
    "longDescription": "Перевод полной мощности S в кВА и активной P в кВт через коэффициент мощности PF. Это расчёт одной нагрузки, а не паспортной отдачи генератора или ИБП: оборудование может иметь отдельные ограничения по ВА и Вт. Дополнительная реактивная мощность Q рассчитывается для синусоидального установившегося режима, где PF = cos φ; при искажённых формах тока такой треугольник не описывает всю неактивную мощность как Q.",
    "howToUse": [
      "Выберите искомые кВА или кВт и заполните одно видимое поле известной мощности.",
      "Введите неотрицательную мощность и PF больше 0 и не больше 1.",
      "Используйте измеренный или указанный для нагрузки PF; 0,8 в примере не является универсальным бытовым значением.",
      "Читайте Q как модуль в квар. Проверяйте ограничения оборудования по Вт и ВА отдельно."
    ],
    "howItWorks": "P = S·PF; S = P/PF. Для синусоидальных напряжения и тока Q² = S² − P², поэтому |Q| = S·√((1−PF)(1+PF)). Это не разность S−P. Знак индуктивной или ёмкостной реакции без фазовых данных не определяется. При PF = 1 имеем P = S и Q = 0.",
    "example": "10 кВт при PF = 0,8 соответствуют 12,5 кВА и 7,5 квар. Для 5 кВА и PF = 0,8 получаются 4 кВт и 3 квар, а не 1 квар. При PF = 1 те же 5 кВА соответствуют 5 кВт.",
    "faq": [
      {
        "q": "Всегда ли 5 кВА меньше 5 кВт?",
        "a": "Численно P = S·PF. При PF = 1 значения в кВт и кВА совпадают, при PF < 1 активная мощность меньше. Это не гарантия допустимой отдачи источника: учитываются отдельные паспортные ограничения."
      },
      {
        "q": "Что делать, если коэффициент мощности неизвестен?",
        "a": "Измерить его или найти данные конкретной нагрузки. PF зависит от режима и формы тока. Произвольные 0,8 могут дать лишь сценарий, а не проверенный перевод для оборудования."
      },
      {
        "q": "Почему реактивная мощность не равна оставшимся кВА?",
        "a": "Мощности образуют треугольник при синусоидальном режиме: S² = P² + Q². Ватты и вары не вычитаются линейно из вольт-ампер; при 5 кВА и 4 кВт модуль Q равен 3 квар."
      },
      {
        "q": "Нулевой PF физически невозможен?",
        "a": "Нет, идеальная чисто реактивная нагрузка может иметь PF = 0 и P = 0. Страница ограничена PF > 0, чтобы обратное вычисление S = P/PF было однозначным. Нулевая мощность с положительным PF разрешена как алгебраический нулевой случай."
      }
    ],
    "disclaimer": "Модель неотрицательных мощностей синусоидальной нагрузки. Не рассчитывает гармоники, знак Q, выбор защиты или допустимую мощность конкретного генератора и ИБП.",
    "seoDescription": "Переведите кВА в кВт и обратно по коэффициенту мощности. Для синусоидальной нагрузки рассчитайте модуль реактивной мощности в квар."
  },
  "en": {
    "longDescription": "Convert apparent power S in kVA and active power P in kW using power factor PF. This models a load, not a generator's or UPS's guaranteed output: equipment may have separate VA and W limits. The additional reactive power Q applies to a sinusoidal steady state, where PF = cos φ. With distorted current, the triangle does not identify all non-active power as Q.",
    "howToUse": [
      "Choose the unknown kVA or kW and fill the one visible known-power field.",
      "Enter nonnegative power and PF greater than 0 and at most 1.",
      "Use measured or specified load PF; the example's 0.8 is not a universal household value.",
      "Read Q as a magnitude in kvar. Check equipment W and VA limits separately."
    ],
    "howItWorks": "P = S·PF; S = P/PF. For sinusoidal voltage and current, Q² = S² − P², so |Q| = S·√((1−PF)(1+PF)). This is not S−P. Inductive or capacitive sign cannot be obtained without phase information. At PF = 1, P = S and Q = 0.",
    "example": "10 kW at PF = 0.8 corresponds to 12.5 kVA and 7.5 kvar. A 5 kVA load at PF = 0.8 gives 4 kW and 3 kvar, not 1 kvar. At PF = 1, the same 5 kVA corresponds to 5 kW.",
    "faq": [
      {
        "q": "Does 5 kVA always mean less than 5 kW?",
        "a": "Numerically P = S·PF. At PF = 1, kW and kVA values coincide; below 1, active power is smaller. This does not guarantee source capability: separate equipment limits still apply."
      },
      {
        "q": "What if the power factor is unknown?",
        "a": "Measure it or obtain the actual load specifications. PF depends on operating conditions and waveform. An assumed 0.8 produces a scenario, not a verified conversion for equipment."
      },
      {
        "q": "Why isn't reactive power the remaining kVA?",
        "a": "In a sinusoidal regime the powers form a triangle: S² = P² + Q². Watts and vars cannot be linearly subtracted from volt-amperes; 5 kVA with 4 kW gives a Q magnitude of 3 kvar."
      },
      {
        "q": "Is zero PF physically impossible?",
        "a": "No. An ideal purely reactive load can have PF = 0 and P = 0. This page requires PF > 0 so S = P/PF is determinate. Zero power with positive PF is accepted as an algebraic zero case."
      }
    ],
    "disclaimer": "Nonnegative-power sinusoidal load model. Harmonics, Q sign, protection sizing and actual generator or UPS output capability are not calculated.",
    "seoDescription": "Convert kVA to kW and back using power factor. Calculate reactive-power magnitude in kvar for a sinusoidal load."
  },
  "uk": {
    "longDescription": "Переведення повної потужності S у кВА та активної P у кВт через коефіцієнт потужності PF. Це модель навантаження, а не гарантованої віддачі генератора чи ДБЖ: обладнання може мати окремі межі у ВА та Вт. Додаткова реактивна Q стосується синусоїдального усталеного режиму, де PF = cos φ. За спотвореного струму цей трикутник не визначає всю неактивну потужність як Q.",
    "howToUse": [
      "Оберіть шукані кВА або кВт і заповніть одне видиме поле відомої потужності.",
      "Введіть невід'ємну потужність і PF понад 0 та до 1 включно.",
      "Використовуйте виміряний чи паспортний PF навантаження; 0,8 у прикладі не є універсальним побутовим значенням.",
      "Читайте Q як модуль у квар. Окремо перевіряйте обмеження обладнання у Вт та ВА."
    ],
    "howItWorks": "P = S·PF; S = P/PF. Для синусоїдальних напруги та струму Q² = S² − P², тому |Q| = S·√((1−PF)(1+PF)). Це не S−P. Індуктивний чи ємнісний знак без фазових даних не визначається. За PF = 1 маємо P = S і Q = 0.",
    "example": "10 кВт за PF = 0,8 відповідають 12,5 кВА та 7,5 квар. Для 5 кВА і PF = 0,8 маємо 4 кВт та 3 квар, а не 1 квар. За PF = 1 ті самі 5 кВА відповідають 5 кВт.",
    "faq": [
      {
        "q": "Чи 5 кВА завжди означає менше ніж 5 кВт?",
        "a": "Чисельно P = S·PF. За PF = 1 значення у кВт і кВА збігаються, за PF < 1 активна потужність менша. Це не гарантує можливості джерела: окремі паспортні межі лишаються чинними."
      },
      {
        "q": "Що робити, якщо коефіцієнт потужності невідомий?",
        "a": "Виміряти його чи знайти дані конкретного навантаження. PF залежить від режиму та форми струму. Припущення 0,8 дає сценарій, а не перевірене значення для обладнання."
      },
      {
        "q": "Чому реактивна потужність не дорівнює решті кВА?",
        "a": "За синусоїдального режиму діє трикутник S² = P² + Q². Вати й вари не віднімаються лінійно від вольт-ампер: для 5 кВА та 4 кВт модуль Q дорівнює 3 квар."
      },
      {
        "q": "Чи нульовий PF фізично неможливий?",
        "a": "Ні. Ідеальне суто реактивне навантаження може мати PF = 0 та P = 0. Сторінка вимагає PF > 0 для однозначного S = P/PF. Нульова потужність із додатним PF дозволена як алгебраїчний нульовий випадок."
      }
    ],
    "disclaimer": "Модель невід'ємних потужностей синусоїдального навантаження. Гармоніки, знак Q, вибір захисту та допустима віддача генератора чи ДБЖ не обчислюються.",
    "seoDescription": "Переведіть кВА у кВт і назад за коефіцієнтом потужності. Для синусоїдального навантаження обчисліть модуль реактивної потужності у квар."
  },
  "de": {
    "longDescription": "Rechnet Scheinleistung S in kVA und Wirkleistung P in kW über den Leistungsfaktor PF um. Das Modell beschreibt eine Last, nicht die garantierte Leistung eines Generators oder einer USV; Geräte können getrennte VA- und W-Grenzen haben. Die zusätzliche Blindleistung Q gilt für sinusförmige stationäre Größen mit PF = cos φ. Bei verzerrtem Strom bezeichnet das Dreieck nicht die gesamte nichtaktive Leistung als Q.",
    "howToUse": [
      "Wähle die gesuchten kVA oder kW und fülle das eine sichtbare Feld der bekannten Leistung aus.",
      "Gib nichtnegative Leistung und einen PF größer als 0 und höchstens 1 ein.",
      "Verwende gemessenen oder angegebenen Last-PF; 0,8 im Beispiel ist kein allgemeiner Haushaltswert.",
      "Lies Q als Betrag in kvar. Prüfe W- und VA-Grenzen des Geräts getrennt."
    ],
    "howItWorks": "P = S·PF; S = P/PF. Bei sinusförmiger Spannung und Strom gilt Q² = S² − P², also |Q| = S·√((1−PF)(1+PF)), nicht S−P. Das induktive oder kapazitive Vorzeichen folgt ohne Phaseninformation nicht. Bei PF = 1 gilt P = S und Q = 0.",
    "example": "10 kW bei PF = 0,8 entsprechen 12,5 kVA und 7,5 kvar. 5 kVA bei PF = 0,8 ergeben 4 kW und 3 kvar, nicht 1 kvar. Bei PF = 1 entsprechen dieselben 5 kVA genau 5 kW.",
    "faq": [
      {
        "q": "Bedeuten 5 kVA immer weniger als 5 kW?",
        "a": "Numerisch gilt P = S·PF. Bei PF = 1 stimmen kW- und kVA-Werte überein, darunter ist P kleiner. Das garantiert keine Quellenleistung; separate Gerätegrenzen gelten weiterhin."
      },
      {
        "q": "Was tun bei unbekanntem Leistungsfaktor?",
        "a": "Messen oder die Daten der konkreten Last verwenden. PF hängt von Betrieb und Stromform ab. Angenommene 0,8 ergeben ein Szenario, keine geprüfte Geräteumrechnung."
      },
      {
        "q": "Warum ist die Blindleistung nicht der Rest der kVA?",
        "a": "Für sinusförmige Größen gilt das Leistungsdreieck S² = P² + Q². Watt und var lassen sich nicht linear von Voltampere abziehen; 5 kVA und 4 kW ergeben einen Q-Betrag von 3 kvar."
      },
      {
        "q": "Ist PF gleich null physikalisch unmöglich?",
        "a": "Nein. Eine ideale rein reaktive Last kann PF = 0 und P = 0 haben. Die Seite verlangt PF > 0, damit S = P/PF eindeutig ist. Leistung null bei positivem PF ist als algebraischer Nullfall erlaubt."
      }
    ],
    "disclaimer": "Sinusförmiges Lastmodell mit nichtnegativen Leistungen. Oberschwingungen, Q-Vorzeichen, Schutzdimensionierung und konkrete Generator- oder USV-Leistungsgrenzen werden nicht berechnet.",
    "seoDescription": "kVA und kW über den Leistungsfaktor umrechnen. Für eine sinusförmige Last den Betrag der Blindleistung in kvar berechnen."
  },
  "es": {
    "longDescription": "Convierte potencia aparente S en kVA y activa P en kW mediante el factor de potencia PF. Describe una carga, no la salida garantizada de un generador o SAI, que puede tener límites independientes de VA y W. La potencia reactiva Q adicional se aplica al régimen sinusoidal permanente, donde PF = cos φ. Con corriente distorsionada, este triángulo no identifica toda la potencia no activa como Q.",
    "howToUse": [
      "Elige la incógnita kVA o kW y rellena el único campo visible de potencia conocida.",
      "Introduce potencia no negativa y PF mayor que 0 y como máximo 1.",
      "Usa el PF medido o especificado de la carga; 0,8 en el ejemplo no es un valor doméstico universal.",
      "Lee Q como módulo en kvar. Comprueba por separado los límites de W y VA del equipo."
    ],
    "howItWorks": "P = S·PF; S = P/PF. Con tensión y corriente sinusoidales, Q² = S² − P² y |Q| = S·√((1−PF)(1+PF)), no S−P. Sin información de fase no se determina el signo inductivo o capacitivo. Con PF = 1, P = S y Q = 0.",
    "example": "10 kW con PF = 0,8 corresponden a 12,5 kVA y 7,5 kvar. 5 kVA con PF = 0,8 dan 4 kW y 3 kvar, no 1 kvar. Con PF = 1, esos mismos 5 kVA corresponden a 5 kW.",
    "faq": [
      {
        "q": "¿5 kVA siempre significan menos de 5 kW?",
        "a": "Numéricamente P = S·PF. Con PF = 1 coinciden los valores en kW y kVA; por debajo de 1, P es menor. Esto no garantiza capacidad de la fuente: siguen vigentes sus límites independientes."
      },
      {
        "q": "¿Qué hacer si no conozco el factor de potencia?",
        "a": "Medirlo u obtener las especificaciones de la carga concreta. PF depende del régimen y la forma de corriente. Suponer 0,8 da un escenario, no una conversión verificada del equipo."
      },
      {
        "q": "¿Por qué la potencia reactiva no es el resto de kVA?",
        "a": "En régimen sinusoidal se cumple S² = P² + Q². Vatios y var no se restan linealmente de voltamperios; 5 kVA con 4 kW dan un módulo Q de 3 kvar."
      },
      {
        "q": "¿Es físicamente imposible un PF cero?",
        "a": "No: una carga ideal puramente reactiva puede tener PF = 0 y P = 0. Esta página exige PF > 0 para que S = P/PF sea determinado. Potencia cero con PF positivo se admite como caso algebraico nulo."
      }
    ],
    "disclaimer": "Modelo sinusoidal con potencias no negativas. No calcula armónicos, signo de Q, dimensionamiento de protección ni capacidad real de un generador o SAI.",
    "seoDescription": "Convierte kVA y kW mediante el factor de potencia. Calcula el módulo de potencia reactiva en kvar para una carga sinusoidal."
  }
};
