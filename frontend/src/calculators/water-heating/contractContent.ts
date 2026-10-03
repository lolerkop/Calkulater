import type { CalculatorCopy } from '../../lib/platform/types';

type ContractContent = Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

export const contractContent = {
  "ru": {
    "longDescription": "Связывает объём жидкой воды, разницу температур и мощность с временем нагрева. Для 100 л с 10 до 60 °C полезное тепло равно 5,814 кВт·ч; при КПД 95% источник должен дать 6,120 кВт·ч, поэтому 2 кВт требуют 3,060 ч. Эти две энергии теперь показаны отдельно. Сохранённая модель принимает 1 л≈1 кг и постоянную теплоёмкость 4186 Дж/(кг·°C); она не считает лед, пар, нагрев бака и переменные потери.",
    "howToUse": [
      "Введите литры жидкой воды; модель приближённо считает 1 л равным 1 кг.",
      "Задайте температуры от 0 до 100 °C с конечной выше начальной; замерзание и пар не рассчитываются.",
      "Введите мощность источника и согласованный постоянный КПД, не выбирайте процент только по виду топлива.",
      "Для стоимости используйте «Энергию источника», а не полезное тепло; удержание температуры здесь не включено."
    ],
    "howItWorks": "Для жидкой воды принимаются 1 л≈1 кг и постоянное c≈4186 Дж/(кг·К). Полезное тепло Q=V×c×(Tкон−Tнач), η=КПД/100, полезная мощность P×1000×η ватт. Время Q/(P×1000×η) секунд. Строка «Энергия» — Q/3 600 000 кВт·ч, новая «Энергия источника» — Q/(η×3 600 000); для стоимости используют вторую. Область 0≤Tнач<Tкон≤100°C при приближении обычного давления, без плавления, испарения и нагрева бака.",
    "example": "Сто литров с 10 до 60 градусов при 2 кВт и КПД 95 % греются 3,06 часа. Полезное тепло 5,813889 кВт·ч; при 95% источник расходует 6,119883 кВт·ч. При 100% эти энергии совпадают.",
    "faq": [
      {
        "q": "Почему нагрев воды такой энергоёмкий?",
        "a": "В этой модели каждый килограмм и каждый градус требуют 4186 Дж. Поэтому 100 л и 50 °C дают 20,93 МДж полезного тепла, или 5,814 кВт·ч. Это принятое постоянное значение для жидкой воды, не точная теплоёмкость при любой температуре."
      },
      {
        "q": "Что даст вдвое более мощный нагреватель?",
        "a": "При том же объёме, перепаде температур и КПД время модели уменьшится ровно вдвое. Полезное тепло и энергия источника останутся прежними. Реальные потери могут зависеть от длительности; требования к подключению приборов этот расчёт не проверяет."
      },
      {
        "q": "Учитывать ли остывание?",
        "a": "Потери во времени отдельно не рассчитываются. Поле КПД применяет одну постоянную долю мощности на весь нагрев. Не считайте его автоматически достаточным для открытой ёмкости; тепло бака, остывание и поддержание температуры могут требовать отдельной модели."
      },
      {
        "q": "Почему у газовой колонки КПД ниже?",
        "a": "Часть энергии может уходить с дымовыми газами и через корпус, но процент зависит от устройства и режима. Здесь не задан универсальный КПД по топливу, не моделируются конденсация и теплота топлива. Введите согласованные данные конкретного нагрева."
      }
    ]
  },
  "en": {
    "longDescription": "Relate liquid-water volume, temperature rise and heater power to heating time. For 100 L from 10 to 60 °C, useful heat is 5.814 kWh; at 95% efficiency the source supplies 6.120 kWh, so 2 kW takes 3.060 hours. The two energy quantities are shown separately. The retained model takes 1 L≈1 kg and constant heat capacity 4186 J/(kg·°C); ice, steam, tank heating and changing losses are excluded.",
    "howToUse": [
      "Enter litres of liquid water; the model approximates 1 L as 1 kg.",
      "Set temperatures from 0 to 100 °C, final above initial; freezing and steam are excluded.",
      "Enter source power and a consistent fixed efficiency, not a percentage chosen solely by fuel type.",
      "Use source energy for cost, not useful heat; temperature maintenance is excluded."
    ],
    "howItWorks": "For liquid water assume 1 L≈1 kg and constant c≈4186 J/(kg·K). Useful heat Q=V×c×(T_end−T_start), η=efficiency/100 and useful power=P×1000×η watts. Time=Q/(P×1000×η) seconds. Energy reports Q/3600000 kWh; Source energy reports Q/(η×3600000), the value for costing. Domain 0≤T_start<T_end≤100°C at approximately ordinary pressure, without melting, vaporisation or vessel heating.",
    "example": "A hundred litres from 10 to 60 degrees at 2 kW and 95 % takes 3.06 hours. Useful heat is 5.813889 kWh; at 95% the source supplies 6.119883 kWh. At 100% they coincide.",
    "faq": [
      {
        "q": "Why is heating water so energy-hungry?",
        "a": "The model uses 4186 J per kg per degree. Thus 100 L and 50 °C require 20.93 MJ of useful heat, or 5.814 kWh. This is a chosen constant for liquid water, not its exact heat capacity at every temperature."
      },
      {
        "q": "What does twice the power buy?",
        "a": "With the same volume, temperature rise and efficiency, model time halves exactly. Useful heat and source energy stay unchanged. Actual losses can depend on duration; the tool does not assess connection requirements."
      },
      {
        "q": "Should cooling be accounted for?",
        "a": "Losses over time are not calculated separately. Efficiency applies one fixed fraction of power throughout heating. Do not assume it is sufficient for an open vessel; tank heat, cooling and temperature maintenance may need a separate model."
      },
      {
        "q": "Why is a gas heater less efficient?",
        "a": "Some energy may leave with exhaust or through the housing, but the fraction depends on the device and operating conditions. No universal fuel-based efficiency is assigned; condensation and fuel heating value are not modelled. Enter consistent data for the actual heating run."
      }
    ],
    "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
  },
  "uk": {
    "longDescription": "Пов’язує об’єм рідкої води, різницю температур і потужність із часом нагріву. Для 100 л з 10 до 60 °C корисне тепло 5,814 кВт·год; за ККД 95% джерело має дати 6,120 кВт·год, тому 2 кВт потребують 3,060 год. Дві енергії показані окремо. Збережена модель бере 1 л≈1 кг і сталу теплоємність 4186 Дж/(кг·°C); лід, пара, нагрів бака й змінні втрати не рахуються.",
    "howToUse": [
      "Введіть літри рідкої води; модель наближено бере 1 л за 1 кг.",
      "Задайте температури 0–100 °C, кінцеву вище початкової; лід і пара не рахуються.",
      "Введіть потужність джерела й узгоджений сталий ККД; енергію джерела використовуйте для вартості, не корисне тепло."
    ],
    "howItWorks": "Для рідкої води прийнято 1 л≈1 кг і стале c≈4186 Дж/(кг·К). Корисне тепло Q=V×c×(Tкін−Tпоч), η=ККД/100, корисна потужність P×1000×η ватів. Час Q/(P×1000×η) секунд. «Енергія» показує Q/3600000 кВт·год, «Енергія джерела» — Q/(η×3600000), саме її використовують для вартості. Область 0≤Tпоч<Tкін≤100°C за наближення звичайного тиску, без плавлення, випаровування та нагрівання бака.",
    "example": "Сто літрів з 10 до 60 градусів за 2 кВт і ККД 95 % гріються 3,06 години. Корисне тепло 5,813889 кВт·год; за 95% джерело витрачає 6,119883 кВт·год. За 100% вони однакові.",
    "faq": [
      {
        "q": "Чому нагрів води такий енергоємний?",
        "a": "Модель використовує 4186 Дж на кілограм і градус. Тому 100 л та 50 °C потребують 20,93 МДж корисного тепла, або 5,814 кВт·год. За ККД нижче 100% енергія джерела більша; порівняння з невідомим холодильником тут не визначається."
      },
      {
        "q": "Який ККД у бойлера?",
        "a": "Введіть ККД або ефективність саме вашого режиму з даних виробника чи вимірювань. Тип нагрівача сам не задає універсальні 95–99% чи 85–92%. Потрібно узгодити, які втрати включає показник, щоб не додати їх удруге."
      },
      {
        "q": "Чи враховано тепловтрати бака?",
        "a": "Окремо ні. Поле ККД застосовує одну сталу частку потужності впродовж нагріву. Нагрів самого бака, охолодження та підтримання температури не рахуються; універсальні додаткові 1–3 кВт·год за добу не задаються."
      },
      {
        "q": "Чому проточний нагрівач такий потужний?",
        "a": "За меншого часу потрібна більша теплова потужність. Для виміряних 6 л/хв та підвищення 30 °C модель із 1 л≈1 кг дає 12,558 кВт корисної потужності, а джерело —12,558/η. Це пояснювальний розрахунок потоку, не додатковий режим цього інструмента."
      }
    ],
    "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте дані."
  },
  "de": {
    "longDescription": "Verknüpft Flüssigwasservolumen, Temperaturanstieg und Heizleistung mit der Aufheizzeit. Für 100 l von 10 auf 60 °C beträgt Nutzwärme 5,814 kWh; bei 95% liefert die Quelle 6,120 kWh, weshalb 2 kW 3,060 Stunden benötigen. Beide Energiemengen erscheinen getrennt. Das erhaltene Modell nimmt 1 l≈1 kg und konstant 4186 J/(kg·°C) an; Eis, Dampf, Tankerwärmung und wechselnde Verluste fehlen.",
    "howToUse": [
      "Liter Flüssigwasser eingeben; näherungsweise gilt 1 l=1 kg.",
      "Temperaturen 0–100 °C wählen, Ziel über Start; Eis und Dampf sind ausgeschlossen.",
      "Quellenleistung und passenden festen Wirkungsgrad angeben, keinen allein nach Brennstoff gewählten Prozentsatz.",
      "Für Kosten die Quellenenergie statt Nutzwärme nehmen; Temperaturhaltung fehlt."
    ],
    "howItWorks": "Für flüssiges Wasser gelten näherungsweise 1 l≈1 kg und konstant c≈4186 J/(kg·K). Nutzwärme Q=V×c×(T_ende−T_start), η=Wirkungsgrad/100, Nutzleistung=P×1000×η Watt. Zeit=Q/(P×1000×η) Sekunden. Energie zeigt Q/3600000 kWh, Energiequelle Q/(η×3600000); letztere dient zur Kostenrechnung. Bereich 0≤T_start<T_ende≤100°C bei näherungsweise Normaldruck, ohne Schmelzen, Verdampfen oder Gefäßerwärmung.",
    "example": "Hundert Liter von 10 auf 60 Grad brauchen bei 2 kW und 95 % genau 3,06 Stunden. Nutzwärme 5,813889 kWh; bei 95% liefert die Quelle 6,119883 kWh. Bei 100% stimmen sie überein.",
    "faq": [
      {
        "q": "Warum ist das Erwärmen von Wasser so energiehungrig?",
        "a": "Das Modell verwendet 4186 J je kg und Grad.100 l und 50 °C erfordern damit 20,93 MJ Nutzwärme oder 5,814 kWh. Es ist eine gewählte Konstante für Flüssigwasser, nicht die exakte Wärmekapazität bei jeder Temperatur."
      },
      {
        "q": "Was bringt die doppelte Leistung?",
        "a": "Bei gleichem Volumen, Temperaturanstieg und Wirkungsgrad halbiert sich die Modellzeit exakt. Nutzwärme und Quellenenergie bleiben gleich. Tatsächliche Verluste können von der Dauer abhängen; Anschlussanforderungen prüft das Tool nicht."
      },
      {
        "q": "Soll das Abkühlen berücksichtigt werden?",
        "a": "Zeitliche Verluste werden nicht gesondert berechnet. Der Wirkungsgrad wendet einen festen Leistungsanteil während des Aufheizens an. Für ein offenes Gefäß ist er nicht automatisch ausreichend; Tankwärme, Abkühlung und Temperaturhaltung brauchen eventuell ein anderes Modell."
      },
      {
        "q": "Warum hat ein Gasgerät einen geringeren Wirkungsgrad?",
        "a": "Energie kann mit Abgas oder über das Gehäuse verloren gehen; der Anteil hängt von Gerät und Betrieb ab. Kein allgemeiner brennstoffabhängiger Wirkungsgrad wird gesetzt; Kondensation und Brennstoffheizwert fehlen. Konsistente Daten des konkreten Heizvorgangs eingeben."
      }
    ],
    "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
  },
  "es": {
    "longDescription": "Relaciona volumen de agua líquida, aumento de temperatura y potencia con tiempo de calentamiento. Para 100 l de 10 a 60 °C, calor útil 5,814 kWh; con 95% la fuente aporta 6,120 kWh, por lo que 2 kW tarda 3,060 horas. Ambas energías aparecen separadas. El modelo conservado supone 1 l≈1 kg y capacidad constante 4186 J/(kg·°C); excluye hielo, vapor, calentamiento del depósito y pérdidas variables.",
    "howToUse": [
      "Introduce litros de agua líquida; el modelo aproxima 1 l a 1 kg.",
      "Fija temperaturas 0–100 °C, final mayor; se excluyen hielo y vapor.",
      "Introduce potencia de la fuente y eficiencia fija coherente, no un porcentaje elegido solo por combustible.",
      "Para costes usa energía de la fuente, no calor útil; no se incluye mantenimiento de temperatura."
    ],
    "howItWorks": "Para agua líquida se aproxima 1 l≈1 kg y c≈4186 J/(kg·K) constante. Calor útil Q=V×c×(T_final−T_inicial), η=rendimiento/100, potencia útil=P×1000×η vatios. Tiempo=Q/(P×1000×η) segundos. Energía muestra Q/3600000 kWh; Energía de la fuente Q/(η×3600000), usada para el coste. Dominio 0≤T_inicial<T_final≤100°C a presión aproximadamente ordinaria, sin fusión, vaporización ni calentamiento del recipiente.",
    "example": "Cien litros de 10 a 60 grados con 2 kW y un 95 % tardan 3,06 horas. Calor útil 5,813889 kWh; a 95% la fuente aporta 6,119883 kWh. A 100% coinciden.",
    "faq": [
      {
        "q": "¿Por qué calentar agua consume tanta energía?",
        "a": "El modelo usa 4186 J por kg y grado. Así 100 l y 50 °C necesitan 20,93 MJ de calor útil, o 5,814 kWh. Es una constante elegida para agua líquida, no su capacidad exacta a cualquier temperatura."
      },
      {
        "q": "¿Qué se gana con el doble de potencia?",
        "a": "Con igual volumen, aumento y eficiencia, el tiempo del modelo se reduce exactamente a la mitad. Calor útil y energía de la fuente no cambian. Las pérdidas reales pueden depender de duración; no se comprueban requisitos de conexión."
      },
      {
        "q": "¿Hay que tener en cuenta el enfriamiento?",
        "a": "No se calculan pérdidas variables por separado. La eficiencia aplica una fracción constante de potencia durante todo el calentamiento. No supongas que basta para un recipiente abierto; depósito, enfriamiento y mantenimiento térmico pueden necesitar otro modelo."
      },
      {
        "q": "¿Por qué un calentador de gas tiene menos rendimiento?",
        "a": "Puede salir energía con gases o por la carcasa, pero la proporción depende del equipo y condiciones. No se fija eficiencia universal según combustible; condensación y poder calorífico no se modelan. Introduce datos coherentes del calentamiento concreto."
      }
    ],
    "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', ContractContent>;
