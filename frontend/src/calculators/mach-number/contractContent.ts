// Individually reviewed against all five actual188 native bodies; human editorial review pending.
export const contract = {
  "ru": {
    "longDescription": "Найдите отношение скорости относительно воздуха к местной скорости звука для приближённой модели сухого воздуха. Путевую скорость относительно земли нельзя автоматически подставлять вместо воздушной при наличии ветра. M=1 — звуковая граница;0,8–1,2 — условная околозвуковая полоса.",
    "howToUse": [
      "Введите скорость относительно окружающего воздуха в км/ч.",
      "Возьмите температуру воздуха в точке расчёта, не температуру поверхности аппарата.",
      "M=0 допустим; M>1 означает сверхзвуковую скорость набегающего потока даже внутри подписанной переходной полосы."
    ],
    "howItWorks": "c=331,3√(1+t/273,15) м/с; M=(v/3,6)/c, v в км/ч. Модель связывает c с температурой при фиксированных составе и отношении теплоёмкостей; полоса 0,8–1,2 не меняет математическую границу M=1.",
    "example": "При 900 км/ч и −50 °C: c≈299,447 м/с, M≈0,8349, условная полоса околозвука. При 20 °C те же 900 км/ч дают M≈0,7284. Разница вызвана заданной температурой, а не высотой как отдельным входом.",
    "faq": [
      {
        "q": "Почему число Маха зависит от температуры?",
        "a": "c=331,3√(1+t/273,15) м/с; M=(v/3,6)/c, v в км/ч. Модель связывает c с температурой при фиксированных составе и отношении теплоёмкостей; полоса 0,8–1,2 не меняет математическую границу M=1."
      },
      {
        "q": "Что означает полоса 0,8–1,2 Маха?",
        "a": "Найдите отношение скорости относительно воздуха к местной скорости звука для приближённой модели сухого воздуха. Путевую скорость относительно земли нельзя автоматически подставлять вместо воздушной при наличии ветра. M=1 — звуковая граница;0,8–1,2 — условная околозвуковая полоса."
      },
      {
        "q": "На какой высоте какая температура?",
        "a": "По стандартной атмосфере температура падает примерно на 6,5 градуса на километр до одиннадцати километров и дальше держится около −56,5 °C. Для точного расчёта возьмите фактическую температуру из сводки."
      },
      {
        "q": "Годится ли это для воды?",
        "a": "Нет. В воде звук идёт около 1500 м/с, и формула для воздуха там неприменима. Этот расчёт рассчитан на воздух."
      }
    ],
    "disclaimer": "Температура −80…80 °C, неотрицательная воздушная скорость, фиксированная приближённая модель сухого воздуха. Локальный поток на поверхности, ударные волны, влажность и другие среды не рассчитываются. Подпись режима — широкая классификация, не результат аэродинамического анализа."
  },
  "en": {
    "longDescription": "Find speed relative to air divided by local sound speed in an approximate dry-air model. Ground speed cannot automatically replace airspeed when there is wind. M=1 is the sonic boundary;0.8–1.2 is a conventional transonic band.",
    "howToUse": [
      "Enter speed relative to surrounding air in km/h.",
      "Use local air temperature, not vehicle surface temperature.",
      "M=0 is allowed; M>1 means supersonic free-stream speed even within the labelled transition band."
    ],
    "howItWorks": "c=331.3√(1+t/273.15) m/s; M=(v/3.6)/c, v in km/h. The model links c to temperature for fixed composition and heat-capacity ratio; the 0.8–1.2 band does not change the mathematical boundary M=1.",
    "example": "At 900 km/h and −50 °C: c≈299.447 m/s,M≈0.8349, within the conventional transonic band. At 20 °C the same 900 km/h gives M≈0.7284. The entered temperature causes the difference; altitude is not another input.",
    "faq": [
      {
        "q": "Why does the Mach number depend on temperature?",
        "a": "c=331.3√(1+t/273.15) m/s; M=(v/3.6)/c, v in km/h. The model links c to temperature for fixed composition and heat-capacity ratio; the 0.8–1.2 band does not change the mathematical boundary M=1."
      },
      {
        "q": "What does the 0.8–1.2 Mach band mean?",
        "a": "Find speed relative to air divided by local sound speed in an approximate dry-air model. Ground speed cannot automatically replace airspeed when there is wind. M=1 is the sonic boundary;0.8–1.2 is a conventional transonic band."
      },
      {
        "q": "What temperature is there at what altitude?",
        "a": "In the standard atmosphere the temperature falls about 6.5 degrees per kilometre up to eleven kilometres and then holds near −56.5 °C. For an exact figure take the actual temperature from the report."
      },
      {
        "q": "Does this work for water?",
        "a": "No. Sound travels at about 1500 m/s in water, and the air formula does not apply there. This calculation is meant for air."
      }
    ],
    "disclaimer": "Temperature −80 to 80 °C, nonnegative airspeed and a fixed approximate dry-air model. Surface flow, shocks, humidity and other media are not calculated. The regime label is a broad classification, not aerodynamic analysis."
  },
  "uk": {
    "longDescription": "Знайдіть відношення швидкості відносно повітря до місцевої швидкості звуку в наближеній моделі сухого повітря. За вітру шляхову швидкість відносно землі не можна автоматично підставляти як повітряну. M=1 — звукова межа;0,8–1,2 — умовна навколозвукова смуга.",
    "howToUse": [
      "Введіть швидкість відносно навколишнього повітря у км/год.",
      "Використайте місцеву температуру повітря, не поверхні апарата.",
      "M=0 допустиме; M>1 означає надзвукову швидкість набіжного потоку навіть у позначеній перехідній смузі."
    ],
    "howItWorks": "c=331,3√(1+t/273,15) м/с; M=(v/3,6)/c, v у км/год. Модель пов’язує c з температурою за сталих складу й відношення теплоємностей; смуга 0,8–1,2 не змінює межу M=1.",
    "example": "За 900 км/год і −50 °C: c≈299,447 м/с,M≈0,8349, умовна навколозвукова смуга. За 20 °C ті самі 900 км/год дають M≈0,7284. Різницю задає температура, не висота як окремий вхід.",
    "faq": [
      {
        "q": "Що означає число Маха 1?",
        "a": "c=331,3√(1+t/273,15) м/с; M=(v/3,6)/c, v у км/год. Модель пов’язує c з температурою за сталих складу й відношення теплоємностей; смуга 0,8–1,2 не змінює межу M=1."
      },
      {
        "q": "Чому на висоті Мах більший за тієї самої швидкості?",
        "a": "Бо там холодніше, а швидкість звуку падає з температурою. На ешелоні 11 км за −56 °C звук іде близько 295 м/с проти 343 м/с біля землі."
      },
      {
        "q": "Який режим називають навколозвуковим?",
        "a": "Знайдіть відношення швидкості відносно повітря до місцевої швидкості звуку в наближеній моделі сухого повітря. За вітру шляхову швидкість відносно землі не можна автоматично підставляти як повітряну. M=1 — звукова межа;0,8–1,2 — умовна навколозвукова смуга."
      },
      {
        "q": "Чи впливає висота напряму?",
        "a": "Температура −80…80 °C, невід’ємна повітряна швидкість і стала наближена модель сухого повітря. Поверхнева течія, ударні хвилі, вологість та інші середовища не обчислюються. Режим — широка класифікація, не аеродинамічний аналіз."
      }
    ],
    "disclaimer": "Температура −80…80 °C, невід’ємна повітряна швидкість і стала наближена модель сухого повітря. Поверхнева течія, ударні хвилі, вологість та інші середовища не обчислюються. Режим — широка класифікація, не аеродинамічний аналіз."
  },
  "de": {
    "longDescription": "Bestimme Geschwindigkeit relativ zur Luft geteilt durch die lokale Schallgeschwindigkeit im trockenen Luftmodell. Bei Wind ersetzt Bodengeschwindigkeit nicht automatisch Luftgeschwindigkeit. M=1 ist die Schallgrenze;0,8–1,2 ein konventionelles transsonisches Band.",
    "howToUse": [
      "Gib Geschwindigkeit relativ zur Umgebungsluft in km/h ein.",
      "Nutze lokale Lufttemperatur, nicht Fahrzeugoberflächentemperatur.",
      "M=0 ist zulässig; M>1 bedeutet Überschall der Anströmung, auch innerhalb des bezeichneten Übergangsbandes."
    ],
    "howItWorks": "c=331,3√(1+t/273,15) m/s; M=(v/3,6)/c, v in km/h. Zusammensetzung und Wärmekapazitätsverhältnis bleiben fest; das Band 0,8–1,2 verschiebt die mathematische Grenze M=1 nicht.",
    "example": "Bei 900 km/h und −50 °C: c≈299,447 m/s,M≈0,8349, im konventionellen transsonischen Band. Bei 20 °C liefern dieselben 900 km/h M≈0,7284. Die Eingabetemperatur verursacht die Differenz; Höhe ist kein eigener Eingang.",
    "faq": [
      {
        "q": "Warum hängt die Mach-Zahl von der Temperatur ab?",
        "a": "c=331,3√(1+t/273,15) m/s; M=(v/3,6)/c, v in km/h. Zusammensetzung und Wärmekapazitätsverhältnis bleiben fest; das Band 0,8–1,2 verschiebt die mathematische Grenze M=1 nicht."
      },
      {
        "q": "Was bedeutet das Mach-Band 0,8–1,2?",
        "a": "Bestimme Geschwindigkeit relativ zur Luft geteilt durch die lokale Schallgeschwindigkeit im trockenen Luftmodell. Bei Wind ersetzt Bodengeschwindigkeit nicht automatisch Luftgeschwindigkeit. M=1 ist die Schallgrenze;0,8–1,2 ein konventionelles transsonisches Band."
      },
      {
        "q": "Welche Temperatur herrscht in welcher Höhe?",
        "a": "In der Normatmosphäre fällt die Temperatur bis elf Kilometer um rund 6,5 Grad je Kilometer und bleibt danach nahe −56,5 °C. Für einen genauen Wert nimm die gemeldete Temperatur."
      },
      {
        "q": "Gilt das auch für Wasser?",
        "a": "Nein. In Wasser läuft der Schall mit rund 1500 m/s, und die Formel für Luft gilt dort nicht. Diese Rechnung ist für Luft gedacht."
      }
    ],
    "disclaimer": "Temperatur −80 bis 80 °C, nichtnegative Luftgeschwindigkeit und festes angenähertes Trockenluftmodell. Oberflächenströmung, Stoßwellen, Feuchte und andere Medien fehlen. Die Regimebezeichnung ist eine grobe Klassifikation, keine aerodynamische Analyse."
  },
  "es": {
    "longDescription": "Halla velocidad respecto al aire dividida por sonido local en un modelo aproximado de aire seco. Con viento, la velocidad sobre el suelo no sustituye automáticamente la velocidad aerodinámica. M=1 es la frontera sónica;0,8–1,2 una banda transónica convencional.",
    "howToUse": [
      "Introduce velocidad respecto al aire circundante en km/h.",
      "Usa temperatura local del aire, no de la superficie del vehículo.",
      "M=0 es válido; M>1 significa flujo incidente supersónico incluso dentro de la banda de transición indicada."
    ],
    "howItWorks": "c=331,3√(1+t/273,15) m/s; M=(v/3,6)/c, v en km/h. Se fijan composición y razón de capacidades térmicas; la banda 0,8–1,2 no cambia la frontera matemática M=1.",
    "example": "Con 900 km/h y −50 °C: c≈299,447 m/s,M≈0,8349, banda transónica convencional. A 20 °C los mismos 900 km/h dan M≈0,7284. La diferencia viene de la temperatura introducida; la altura no es otra entrada.",
    "faq": [
      {
        "q": "¿Por qué el número de Mach depende de la temperatura?",
        "a": "c=331,3√(1+t/273,15) m/s; M=(v/3,6)/c, v en km/h. Se fijan composición y razón de capacidades térmicas; la banda 0,8–1,2 no cambia la frontera matemática M=1."
      },
      {
        "q": "¿Qué significa la banda Mach 0,8–1,2?",
        "a": "Halla velocidad respecto al aire dividida por sonido local en un modelo aproximado de aire seco. Con viento, la velocidad sobre el suelo no sustituye automáticamente la velocidad aerodinámica. M=1 es la frontera sónica;0,8–1,2 una banda transónica convencional."
      },
      {
        "q": "¿Qué temperatura hay a cada altitud?",
        "a": "En la atmósfera estándar la temperatura cae unos 6,5 grados por kilómetro hasta once kilómetros y luego se mantiene cerca de −56,5 °C. Para una cifra exacta, toma la temperatura real del parte."
      },
      {
        "q": "¿Vale para el agua?",
        "a": "No. En el agua el sonido viaja a unos 1500 m/s, y la fórmula del aire no se aplica allí. Este cálculo está pensado para el aire."
      }
    ],
    "disclaimer": "Temperatura −80…80 °C, velocidad respecto al aire no negativa y modelo fijo aproximado de aire seco. No se calculan flujo superficial, choques, humedad ni otros medios. El régimen es una clasificación amplia, no un análisis aerodinámico."
  }
};
