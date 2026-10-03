import type { CalculatorCopy } from '../../lib/platform/types';

type ContractContent = Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

export const contractContent = {
  "ru": {
    "longDescription": "Показывает простую объёмную прикидку, сохраняя высоту потолка отдельным входом. При одинаковой площади изменение 2,7→3,2 м увеличивает объёмную часть примерно на 18,5%, а выбранного коэффициента 30→50 Вт/м³ — на 66,7%. Фиксированная добавка 100 Вт на окно — допущение формулы. Эти числа позволяют сравнивать свои сценарии; они не заменяют расчёт теплопотерь через ограждения и вентиляцию или подбор оборудования.",
    "howToUse": [
      "Введите площадь помещения и высоту потолка — расчёт идёт от объёма.",
      "Введите выбранный коэффициент Вт/м³;30,40 и 50 — сравниваемые предположения, не нормативные классы утепления.",
      "Укажите число окон — на каждое добавляется сто ватт.",
      "Сравните сценарии в киловаттах; подбор прибора требует отдельного расчёта теплопотерь."
    ],
    "howItWorks": "Сохранённая объёмная прикидка: объём V=A×H м³, мощность W=V×q+100×N ватт, где q — введённый коэффициент Вт/м³, N — целое неотрицательное число окон. В киловаттах W/1000. Прибавка 100 Вт — фиксированное допущение этой модели, а не измеренная потеря каждого окна. Теплопередача ограждений, температура улицы, инфильтрация и характеристики отопителя не рассчитываются.",
    "example": "Комната 20 м² с потолком 2,7 м и одним окном при норме 40 Вт/м³ требует 2,26 кВт. Та же комната без окон даёт 2,16 кВт; при одном окне 2,26 кВт сохраняются без автоматического округления вверх.",
    "faq": [
      {
        "q": "Почему расчёт идёт от объёма, а не от площади?",
        "a": "Так устроена эта прикидка: высота масштабирует объёмную часть. При 2,7→3,2 м она растёт на 18,5%, но итог с неизменной оконной добавкой растёт меньше. Реальная отопительная нагрузка определяется теплопотерями, а не только количеством воздуха."
      },
      {
        "q": "Какую удельную норму выбрать?",
        "a": "Значение для вашей прикидки, в Вт/м³.30,40 и 50 можно сравнить как сценарии, но здесь они не привязаны к подтверждённым классам зданий или местному климату. Для выбора оборудования нужен расчёт проектных теплопотерь."
      },
      {
        "q": "Откуда берётся сто ватт на окно?",
        "a": "Из сохранённого допущения модели: ровно 100 Вт на каждое введённое окно. Размер, остекление, температура и герметичность не заданы, поэтому это не измеренные потери и не универсальная инженерная норма."
      },
      {
        "q": "Подходит ли расчёт для тёплого пола?",
        "a": "Можно сравнить только оценку тепловой нагрузки. Расчёт не определяет допустимую теплоотдачу пола, температуры поверхности, контуры или шаг труб. Проверяйте отдельно соответствие конкретной системы проектной нагрузке."
      },
      {
        "q": "Нужен ли запас мощности?",
        "a": "Калькулятор не назначает запас. Его потребность зависит от проектной нагрузки и характеристик устройства; слишком большой номинал тоже может ухудшать работу. Произвольные 10–20% здесь не считаются правилом."
      }
    ]
  },
  "en": {
    "longDescription": "Show a simple volume-based estimate with ceiling height as a separate input. At the same floor area,2.7→3.2 m raises the volume term by about 18.5%; changing the selected coefficient 30→50 W/m³ raises it by 66.7%. The fixed 100 W per window is a formula assumption. These figures compare scenarios; they do not replace envelope and ventilation heat-loss calculations or equipment sizing.",
    "howToUse": [
      "Enter the floor area and the ceiling height — the calculation works from volume.",
      "Enter your chosen W/m³ coefficient;30,40 and 50 are comparison assumptions, not standard insulation classes.",
      "Enter the number of windows — each adds a hundred watts.",
      "Compare scenarios in kW; equipment sizing needs a separate heat-loss calculation."
    ],
    "howItWorks": "Preserved volume-based estimate: V=A×H m³ and W=V×q+100×N watts, with entered q W/m³ and nonnegative whole window count N. Kilowatts=W/1000. The 100 W addition is this model’s fixed assumption, not a measured loss for every window. Envelope transmission, outdoor temperature, infiltration and heater performance are not calculated.",
    "example": "A 20 m² room with a 2.7 m ceiling and one window at 40 W/m³ needs 2.26 kW. The same room without windows gives 2.16 kW; with one window 2.26 kW is retained without automatic rounding up.",
    "faq": [
      {
        "q": "Why work from volume rather than floor area?",
        "a": "That is how this estimate is defined: height scales the volume term. At 2.7→3.2 m it rises 18.5%, but the total with a fixed window addition rises less. Actual heating load depends on heat loss, not only the quantity of air."
      },
      {
        "q": "Which specific requirement should I choose?",
        "a": "Choose a value for your estimate in W/m³.30,40 and 50 may be compared as scenarios; they are not verified building classes or local climate requirements here. Equipment selection needs a design heat-loss calculation."
      },
      {
        "q": "Where does the hundred watts per window come from?",
        "a": "From the preserved model assumption: exactly 100 W per entered window. Size, glazing, temperature and air leakage are absent, so this is neither measured heat loss nor a universal engineering standard."
      },
      {
        "q": "Does this apply to underfloor heating?",
        "a": "Only the estimated heat load can be compared. The calculation does not determine allowed floor output, surface temperatures, circuits or pipe spacing. Check the actual system against design load separately."
      },
      {
        "q": "Should I allow spare capacity?",
        "a": "The calculator prescribes no spare capacity. Its need depends on design load and equipment characteristics; oversizing may also impair operation. An arbitrary 10–20% is not treated as a rule here."
      }
    ],
    "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
  },
  "uk": {
    "longDescription": "Показує просту об’ємну прикидку з окремою висотою стелі. За однакової площі 2,5→3,5 м збільшує об’ємну частину на 40%, а обраний коефіцієнт 30→50 Вт/м³ — на 66,7%. Фіксовані 100 Вт на вікно є припущенням формули. Числа допомагають порівнювати сценарії, але не замінюють розрахунок тепловтрат огороджень і вентиляції чи добір обладнання.",
    "howToUse": [
      "Введіть площу приміщення й висоту стелі.",
      "Введіть обраний коефіцієнт Вт/м³;30,40 та 50 — порівнювані припущення, не нормативні класи утеплення.",
      "Укажіть кількість вікон."
    ],
    "howItWorks": "Збережена об’ємна прикидка: V=A×H м³, W=V×q+100×N ватів, де q — введений коефіцієнт Вт/м³, N — ціле невід’ємне число вікон. Кіловати=W/1000. Додаток 100 Вт є фіксованим припущенням моделі, а не виміряною втратою кожного вікна. Теплопередача огороджень, вулична температура, інфільтрація й характеристики нагрівача не рахуються.",
    "example": "Кімната 20 м² зі стелею 2,7 м і одним вікном за норми 40 Вт/м³ потребує 2,26 кВт. Та сама кімната без вікон дає 2,16 кВт; з одним вікном 2,26 кВт без автоматичного округлення вгору.",
    "faq": [
      {
        "q": "Чому рахувати від об’єму, а не від площі?",
        "a": "Так задано прикидку: висота масштабує об’ємну частину. За 2,5→3,5 м вона росте на 40%, але підсумок зі сталою віконною добавкою — менше. Реальна потреба в опаленні залежить від тепловтрат, а не лише об’єму повітря."
      },
      {
        "q": "Яку питому норму брати?",
        "a": "Оберіть значення для своєї прикидки у Вт/м³.30,40 та 50 можна порівнювати як сценарії; вони тут не є підтвердженими класами будівель чи кліматичними нормами. Для обладнання потрібен розрахунок проєктних тепловтрат."
      },
      {
        "q": "Чому вікна враховуються окремо?",
        "a": "Це збережене припущення моделі: рівно 100 Вт на кожне введене вікно. Розмір, скління, температури та герметичність не задані, тому це не виміряні втрати й не універсальна інженерна норма."
      },
      {
        "q": "Це потужність радіатора чи котла?",
        "a": "Це груба оцінка потужності для кімнати, не паспортний номінал радіатора чи котла. Тепловіддачу приладу за робочих температур, інші кімнати й гарячу воду перевіряють окремо; універсальні додаткові 20–30% не закладаються."
      }
    ],
    "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте дані."
  },
  "de": {
    "longDescription": "Zeigt eine einfache Volumenabschätzung mit eigener Deckenhöhe. Bei gleicher Fläche steigert 2,7→3,2 m den Volumenanteil um etwa 18,5%; der gewählte Koeffizient 30→50 W/m³ erhöht ihn um 66,7%. Die festen 100 W je Fenster sind eine Formelannahme. Das vergleicht Szenarien, ersetzt aber keine Wärmeverlustrechnung für Gebäudehülle und Lüftung oder Geräteauslegung.",
    "howToUse": [
      "Trage Grundfläche und Raumhöhe ein — die Rechnung arbeitet mit dem Volumen.",
      "Gewählten Koeffizienten W/m³ eingeben;30,40 und 50 sind Vergleichsannahmen, keine genormten Dämmklassen.",
      "Trage die Zahl der Fenster ein — jedes bringt hundert Watt hinzu.",
      "Szenarien in kW vergleichen; Geräteauslegung braucht eine eigene Wärmeverlustrechnung."
    ],
    "howItWorks": "Erhaltene Volumenabschätzung: V=A×H m³, W=V×q+100×N Watt mit eingegebenem q W/m³ und nichtnegativer ganzer Fensterzahl N. Kilowatt=W/1000. Die 100 W sind eine feste Modellannahme und kein gemessener Verlust jedes Fensters. Transmission der Gebäudehülle, Außentemperatur, Luftundichtheit und Heizgerätedaten werden nicht berechnet.",
    "example": "Ein Raum von 20 m² mit 2,7 m Höhe und einem Fenster braucht bei 40 W/m³ 2,26 kW. Derselbe Raum ohne Fenster ergibt 2,16 kW; mit einem Fenster bleiben 2,26 kW ohne automatische Aufrundung.",
    "faq": [
      {
        "q": "Warum vom Volumen und nicht von der Grundfläche aus?",
        "a": "So ist die Abschätzung definiert: Die Höhe skaliert den Volumenanteil. Bei 2,7→3,2 m steigt er 18,5%, die Summe mit festem Fensterzuschlag aber weniger. Tatsächliche Heizlast hängt von Wärmeverlusten ab, nicht nur von Luftmenge."
      },
      {
        "q": "Welchen spezifischen Bedarf soll ich wählen?",
        "a": "Einen Wert für deine Abschätzung in W/m³ wählen.30,40 und 50 sind Vergleichsszenarien, hier keine belegten Gebäudeklassen oder örtlichen Klimavorgaben. Gerätewahl erfordert eine Berechnung der Auslegungswärmeverluste."
      },
      {
        "q": "Woher kommen die hundert Watt je Fenster?",
        "a": "Aus der erhaltenen Modellannahme: genau 100 W je eingegebenem Fenster. Größe, Verglasung, Temperatur und Undichtheit fehlen; es ist weder gemessener Verlust noch allgemeine Ingenieurnorm."
      },
      {
        "q": "Gilt das auch für eine Fußbodenheizung?",
        "a": "Nur die geschätzte Heizlast lässt sich vergleichen. Zulässige Bodenleistung, Oberflächentemperatur, Heizkreise und Rohrabstand werden nicht bestimmt. Die konkrete Anlage gesondert gegen die Auslegungslast prüfen."
      },
      {
        "q": "Soll ich eine Reserve einplanen?",
        "a": "Der Rechner schreibt keine Reserve vor. Ihr Bedarf hängt von Auslegungslast und Gerätedaten ab; Überdimensionierung kann ebenfalls schaden. Beliebige 10–20% gelten hier nicht als Regel."
      }
    ],
    "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
  },
  "es": {
    "longDescription": "Muestra una estimación volumétrica simple con altura de techo independiente. A igual superficie,2,7→3,2 m aumenta el término de volumen aproximadamente 18,5%; cambiar el coeficiente elegido 30→50 W/m³ lo aumenta 66,7%. Los 100 W fijos por ventana son un supuesto. Estos datos comparan escenarios, sin sustituir pérdidas por cerramientos y ventilación ni dimensionado del equipo.",
    "howToUse": [
      "Introduce la superficie y la altura del techo: el cálculo trabaja con el volumen.",
      "Introduce tu coeficiente W/m³;30,40 y 50 son supuestos comparables, no categorías normativas de aislamiento.",
      "Introduce el número de ventanas: cada una añade cien vatios.",
      "Compara escenarios en kW; dimensionar equipo requiere calcular pérdidas por separado."
    ],
    "howItWorks": "Estimación volumétrica conservada: V=A×H m³, W=V×q+100×N vatios, con q introducido en W/m³ y ventanas N enteras no negativas. Kilovatios=W/1000. Los 100 W son un supuesto fijo del modelo, no la pérdida medida de cada ventana. No se calculan transmisión de cerramientos, temperatura exterior, infiltración ni rendimiento del equipo.",
    "example": "Una habitación de 20 m² con techo de 2,7 m y una ventana, a 40 W/m³, necesita 2,26 kW. La misma habitación sin ventanas da 2,16 kW; con una ventana conserva 2,26 kW sin redondeo automático al alza.",
    "faq": [
      {
        "q": "¿Por qué se trabaja con el volumen y no con la superficie?",
        "a": "Así se define esta estimación: la altura escala el término volumétrico. De 2,7→3,2 m aumenta 18,5%, pero el total con suplemento fijo de ventanas aumenta menos. La carga real depende de pérdidas de calor, no solo del aire."
      },
      {
        "q": "¿Qué demanda específica debo elegir?",
        "a": "Elige un valor para tu estimación en W/m³.30,40 y 50 sirven como escenarios; aquí no son clases de edificios verificadas ni requisitos climáticos locales. Elegir equipo requiere calcular pérdidas de diseño."
      },
      {
        "q": "¿De dónde salen los cien vatios por ventana?",
        "a": "Del supuesto conservado: exactamente 100 W por ventana introducida. Faltan tamaño, acristalamiento, temperatura y fugas, por lo que no son pérdidas medidas ni una norma universal."
      },
      {
        "q": "¿Vale para suelo radiante?",
        "a": "Solo permite comparar una carga estimada. No determina emisión admisible del suelo, temperaturas superficiales, circuitos ni separación de tubos. Comprueba el sistema concreto frente a la carga de diseño por separado."
      },
      {
        "q": "¿Debo prever potencia de reserva?",
        "a": "La calculadora no prescribe reserva. Depende de carga de diseño y equipo; sobredimensionar también puede perjudicar el funcionamiento. Un 10–20% arbitrario no se presenta como regla."
      }
    ],
    "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', ContractContent>;
