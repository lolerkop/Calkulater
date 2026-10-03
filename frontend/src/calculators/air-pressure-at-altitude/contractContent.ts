// Reviewed model parameters; human editorial review pending.
export const contract = {
  "ru": {
    "longDescription": "Получите модельные давление, температуру и плотность в первом слое стандартной атмосферы по высоте от −430 до 11000 м. Это согласованный расчёт с заданными константами, а не прогноз погоды или измерение давления на маршруте.",
    "howToUse": [
      "Введите высоту в метрах относительно принятого уровня моря.",
      "Для фактического давления используйте барометр; эта форма не принимает погодную поправку.",
      "Сравнивайте строки давления в кПа и мм рт.ст. как разные единицы одного результата."
    ],
    "howItWorks": "T=288,15−0,0065 h K; p=101325·(1−0,0065 h/288,15)^(9,80665·0,0289644/(8,314462618·0,0065)) Па. Плотность ρ=p·0,0289644/(8,314462618·T). Это степенная зависимость для линейного температурного градиента, не изотермическая экспонента.",
    "example": "На 2000 м модель даёт 79,496 кПа, 596,27 мм рт.ст., 2 °C и около 1,006 кг/м³. При h=0 возвращаются 101,325 кПа до округления и 15 °C.",
    "faq": [
      {
        "q": "Почему давление падает не пропорционально высоте?",
        "a": "T=288,15−0,0065 h K; p=101325·(1−0,0065 h/288,15)^(9,80665·0,0289644/(8,314462618·0,0065)) Па. Плотность ρ=p·0,0289644/(8,314462618·T). Это степенная зависимость для линейного температурного градиента, не изотермическая экспонента."
      },
      {
        "q": "Меняется ли доля кислорода с высотой?",
        "a": "Нет, она остаётся около двадцати одного процента вплоть до очень больших высот. Меняется общее число молекул в том же объёме — именно поэтому на высоте не хватает кислорода при неизменном его проценте."
      },
      {
        "q": "Почему верхняя граница 11 километров?",
        "a": "Высота — координата принятой стандартной модели; геометрическую высоту отдельно в геопотенциальную не пересчитываем. Граница 11000 м относится к модели слоя, а не к постоянной тропопаузе любой погоды. Влажность, сезон и фактические изменения давления не учитываются."
      },
      {
        "q": "Насколько это совпадает с барометром?",
        "a": "Барометр измеряет фактическое давление. Отклонение от стандартной модели не является барической тенденцией: тенденция означает изменение давления со временем. Эта форма не содержит времени или погодных наблюдений."
      }
    ],
    "disclaimer": "Высота — координата принятой стандартной модели; геометрическую высоту отдельно в геопотенциальную не пересчитываем. Граница 11000 м относится к модели слоя, а не к постоянной тропопаузе любой погоды. Влажность, сезон и фактические изменения давления не учитываются. Используется округлённое R=8,314462618, поэтому это не буквальное воспроизведение всех констант таблицы 1976 года."
  },
  "en": {
    "longDescription": "Obtain model pressure, temperature and density in the first standard-atmosphere layer for heights −430 to 11000 m. This is a consistent calculation with stated constants, not a weather forecast or measured route pressure.",
    "howToUse": [
      "Enter metres relative to the adopted sea-level datum.",
      "Use a barometer for actual pressure; this form has no weather correction.",
      "kPa and mmHg rows express the same model pressure in different units."
    ],
    "howItWorks": "T=288.15−0.0065 h K; p=101325·(1−0.0065 h/288.15)^(9.80665·0.0289644/(8.314462618·0.0065)) Pa. Density ρ=p·0.0289644/(8.314462618·T). This power law uses a linear temperature lapse, not an isothermal exponential.",
    "example": "At 2000 m the model gives 79.496 kPa,596.27 mmHg,2 °C and about 1.006 kg/m³. h=0 returns 101.325 kPa before rounding and 15 °C.",
    "faq": [
      {
        "q": "Why does pressure not fall in proportion to height?",
        "a": "T=288.15−0.0065 h K; p=101325·(1−0.0065 h/288.15)^(9.80665·0.0289644/(8.314462618·0.0065)) Pa. Density ρ=p·0.0289644/(8.314462618·T). This power law uses a linear temperature lapse, not an isothermal exponential."
      },
      {
        "q": "Does the oxygen fraction change with altitude?",
        "a": "No, it stays near twenty-one per cent up to very great heights. What changes is the number of molecules in the same volume — which is exactly why oxygen runs short while its percentage does not."
      },
      {
        "q": "Why is the upper bound eleven kilometres?",
        "a": "Height is the adopted standard-model coordinate; geometric height is not separately converted to geopotential height. The 11000 m boundary belongs to the model layer, not a fixed tropopause in all weather. Humidity, season and actual pressure changes are excluded."
      },
      {
        "q": "How does this compare with a barometer?",
        "a": "A barometer measures actual pressure. Departure from the standard model is not pressure tendency: tendency means change over time. This form has neither time nor weather observations."
      }
    ],
    "disclaimer": "Height is the adopted standard-model coordinate; geometric height is not separately converted to geopotential height. The 11000 m boundary belongs to the model layer, not a fixed tropopause in all weather. Humidity, season and actual pressure changes are excluded. The adopted rounded R=8.314462618 means this does not literally reproduce every constant in the 1976 tables."
  },
  "uk": {
    "longDescription": "Отримайте модельні тиск, температуру й густину в першому шарі стандартної атмосфери за висотою −430…11000 м. Це узгоджений розрахунок із заданими сталими, не прогноз погоди чи вимірювання на маршруті.",
    "howToUse": [
      "Введіть метри відносно прийнятого рівня моря.",
      "Фактичний тиск вимірюйте барометром; погодної поправки форма не має.",
      "Рядки в кПа й мм рт.ст. виражають один модельний тиск у різних одиницях."
    ],
    "howItWorks": "T=288,15−0,0065 h K; p=101325·(1−0,0065 h/288,15)^(9,80665·0,0289644/(8,314462618·0,0065)) Па. Густина ρ=p·0,0289644/(8,314462618·T). Це степенева залежність із лінійним градієнтом температури, не ізотермічна експонента.",
    "example": "На 2000 м модель дає 79,496 кПа,596,27 мм рт.ст.,2 °C і близько 1,006 кг/м³. h=0 повертає 101,325 кПа до округлення та 15 °C.",
    "faq": [
      {
        "q": "Чому падіння тиску не лінійне?",
        "a": "T=288,15−0,0065 h K; p=101325·(1−0,0065 h/288,15)^(9,80665·0,0289644/(8,314462618·0,0065)) Па. Густина ρ=p·0,0289644/(8,314462618·T). Це степенева залежність із лінійним градієнтом температури, не ізотермічна експонента."
      },
      {
        "q": "Що таке стандартна атмосфера?",
        "a": "Узгоджена модель із тиском 101 325 Па й температурою 15 °C на рівні моря та падінням 6,5 °C на кілометр. Реальна погода від неї відхиляється, але для розрахунків потрібна спільна відправна точка."
      },
      {
        "q": "Чому верхня межа 11 000 метрів?",
        "a": "Висота є координатою прийнятої стандартної моделі; геометричну висоту окремо в геопотенціальну не переводимо. Межа 11000 м стосується шару моделі, не сталої тропопаузи за будь-якої погоди. Вологість, сезон і фактичні зміни тиску не враховано."
      },
      {
        "q": "Чому в літаку закладає вуха?",
        "a": "Калькулятор не моделює тиск у салоні або зміни тиску з часом. Тиск у реальному салоні залежить від конструкції та режиму польоту; його не можна універсально ототожнити з висотою 2 км."
      }
    ],
    "disclaimer": "Висота є координатою прийнятої стандартної моделі; геометричну висоту окремо в геопотенціальну не переводимо. Межа 11000 м стосується шару моделі, не сталої тропопаузи за будь-якої погоди. Вологість, сезон і фактичні зміни тиску не враховано. Використано округлене R=8,314462618, тому це не буквальне відтворення всіх сталих таблиць 1976 року."
  },
  "de": {
    "longDescription": "Berechne Modelldruck, Temperatur und Dichte in der ersten Schicht der Standardatmosphäre für −430 bis 11000 m. Das ist eine Rechnung mit festgelegten Konstanten, keine Wettervorhersage oder Druckmessung entlang einer Route.",
    "howToUse": [
      "Gib Meter relativ zum angenommenen Meeresspiegel ein.",
      "Für tatsächlichen Druck dient ein Barometer; das Formular hat keine Wetterkorrektur.",
      "kPa und mmHg zeigen denselben Modelldruck in anderen Einheiten."
    ],
    "howItWorks": "T=288,15−0,0065 h K; p=101325·(1−0,0065 h/288,15)^(9,80665·0,0289644/(8,314462618·0,0065)) Pa. Dichte ρ=p·0,0289644/(8,314462618·T). Das Potenzgesetz nutzt einen linearen Temperaturgradienten, keine isotherme Exponentialfunktion.",
    "example": "Bei 2000 m liefert das Modell 79,496 kPa,596,27 mmHg,2 °C und etwa 1,006 kg/m³. h=0 ergibt vor Rundung 101,325 kPa und 15 °C.",
    "faq": [
      {
        "q": "Warum fällt der Druck nicht im Verhältnis zur Höhe?",
        "a": "T=288,15−0,0065 h K; p=101325·(1−0,0065 h/288,15)^(9,80665·0,0289644/(8,314462618·0,0065)) Pa. Dichte ρ=p·0,0289644/(8,314462618·T). Das Potenzgesetz nutzt einen linearen Temperaturgradienten, keine isotherme Exponentialfunktion."
      },
      {
        "q": "Ändert sich der Sauerstoffanteil mit der Höhe?",
        "a": "Nein, er bleibt bis in sehr große Höhen nahe einundzwanzig Prozent. Was sich ändert, ist die Zahl der Moleküle im selben Volumen — und genau deshalb wird der Sauerstoff knapp, während sein Prozentsatz es nicht wird."
      },
      {
        "q": "Warum liegt die obere Grenze bei elf Kilometern?",
        "a": "Die Höhe ist die Koordinate des verwendeten Standardmodells; geometrische Höhe wird nicht zusätzlich in geopotentielle Höhe umgerechnet.11000 m ist die Modellschichtgrenze, keine bei jedem Wetter feste Tropopause. Feuchte, Jahreszeit und tatsächliche Druckänderungen fehlen."
      },
      {
        "q": "Wie verhält sich das zu einem Barometer?",
        "a": "Ein Barometer misst tatsächlichen Druck. Abweichung vom Standardmodell ist keine Drucktendenz: Diese bezeichnet zeitliche Änderung. Zeit und Wetterbeobachtungen fehlen hier."
      }
    ],
    "disclaimer": "Die Höhe ist die Koordinate des verwendeten Standardmodells; geometrische Höhe wird nicht zusätzlich in geopotentielle Höhe umgerechnet.11000 m ist die Modellschichtgrenze, keine bei jedem Wetter feste Tropopause. Feuchte, Jahreszeit und tatsächliche Druckänderungen fehlen. Das verwendete gerundete R=8,314462618 reproduziert nicht sämtliche Konstanten der Tabellen von 1976 wörtlich."
  },
  "es": {
    "longDescription": "Obtén presión, temperatura y densidad del primer estrato de atmósfera estándar entre −430 y 11000 m. Es un cálculo con constantes declaradas, no un pronóstico meteorológico ni presión medida en una ruta.",
    "howToUse": [
      "Introduce metros respecto al nivel del mar adoptado.",
      "Usa un barómetro para presión real; el formulario no incluye corrección meteorológica.",
      "kPa y mmHg expresan la misma presión del modelo en unidades distintas."
    ],
    "howItWorks": "T=288,15−0,0065 h K; p=101325·(1−0,0065 h/288,15)^(9,80665·0,0289644/(8,314462618·0,0065)) Pa. Densidad ρ=p·0,0289644/(8,314462618·T). Es una ley de potencia con gradiente térmico lineal, no una exponencial isotérmica.",
    "example": "A 2000 m el modelo da 79,496 kPa,596,27 mmHg,2 °C y unos 1,006 kg/m³. h=0 devuelve 101,325 kPa antes del redondeo y 15 °C.",
    "faq": [
      {
        "q": "¿Por qué la presión no cae en proporción a la altura?",
        "a": "T=288,15−0,0065 h K; p=101325·(1−0,0065 h/288,15)^(9,80665·0,0289644/(8,314462618·0,0065)) Pa. Densidad ρ=p·0,0289644/(8,314462618·T). Es una ley de potencia con gradiente térmico lineal, no una exponencial isotérmica."
      },
      {
        "q": "¿Cambia la proporción de oxígeno con la altitud?",
        "a": "No, se mantiene cerca del veintiuno por ciento hasta alturas enormes. Lo que cambia es el número de moléculas en el mismo volumen, que es justo por lo que falta oxígeno aunque su porcentaje no baje."
      },
      {
        "q": "¿Por qué el límite superior son once kilómetros?",
        "a": "La altura es la coordenada del modelo estándar adoptado; no se convierte por separado altura geométrica a geopotencial.11000 m es el límite de la capa del modelo, no una tropopausa fija con todo tiempo. Se excluyen humedad, estación y variaciones reales de presión."
      },
      {
        "q": "¿Cómo se compara esto con un barómetro?",
        "a": "Un barómetro mide presión real. Desviación del modelo no es tendencia barométrica: tendencia significa cambio temporal. Aquí no hay tiempo ni observaciones meteorológicas."
      }
    ],
    "disclaimer": "La altura es la coordenada del modelo estándar adoptado; no se convierte por separado altura geométrica a geopotencial.11000 m es el límite de la capa del modelo, no una tropopausa fija con todo tiempo. Se excluyen humedad, estación y variaciones reales de presión. El R redondeado 8,314462618 adoptado no reproduce literalmente todas las constantes de las tablas de 1976."
  }
};
