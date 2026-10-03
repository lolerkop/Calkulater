// Reviewed model parameters; human editorial review pending.
export const contract = {
  "ru": {
    "longDescription": "Оцените температуру кипения чистой воды по высоте −430…9000 м. Давление берётся из стандартного первого слоя атмосферы, затем применяется приближение Клаузиуса—Клапейрона с постоянной молярной теплотой парообразования. Реальное местное давление форма не измеряет.",
    "howToUse": [
      "Введите высоту в метрах;0 м возвращает принятую опорную точку.",
      "Отрицательная строка «ниже 100» означает температуру выше 100 °C.",
      "Для измерительной задачи нужны фактическое давление и проверенные свойства воды; время приготовления здесь не рассчитывается."
    ],
    "howItWorks": "p(h)=101325·(1−0,0065 h/288,15)^(gM/(RL)), g=9,80665, M=0,0289644, R=8,314462618, L=0,0065. Затем 1/Tb=1/373,15−R·ln(p/101325)/40660; Tb в K, итог в °C. При h=0 опорная точка равна 100 °C.",
    "example": "На 1500 м: p≈84,556 кПа, Tb≈94,919 °C — на 5,081 °C ниже 100 °C. На −430 м та же модель даёт≈101,450 °C; это пример нижней границы продукта, не текущий уровень конкретного озера.",
    "faq": [
      {
        "q": "Почему в горах вода кипит холоднее?",
        "a": "Кипение начинается, когда давление насыщенного пара сравнивается с внешним. Наверху воздух разрежен, сравняться удаётся раньше — при меньшей температуре. Это то же самое, что происходит в вакуумной камере, только мягче."
      },
      {
        "q": "Почему еда готовится дольше, если вода всё равно кипит?",
        "a": "Скорость готовки задаёт температура воды, а не факт кипения. На трёх километрах кипяток около 90 °C, и белки сворачиваются медленнее. Помогает скороварка: она поднимает давление и вместе с ним температуру кипения."
      },
      {
        "q": "Насколько точен расчёт в реальную погоду?",
        "a": "Чистая вода, выбранная опорная точка и постоянные 40660 Дж/моль; это приближение, а не таблица свойств пара. Солёность, растворённые вещества, погода и давление скороварки не вводятся. Границы высоты — ограничения продукта внутри принятой модели, не гарантированный диапазон точности."
      },
      {
        "q": "Почему нижняя граница −430 метров?",
        "a": "На 1500 м: p≈84,556 кПа, Tb≈94,919 °C — на 5,081 °C ниже 100 °C. На −430 м та же модель даёт≈101,450 °C; это пример нижней границы продукта, не текущий уровень конкретного озера."
      }
    ],
    "disclaimer": "Чистая вода, выбранная опорная точка и постоянные 40660 Дж/моль; это приближение, а не таблица свойств пара. Солёность, растворённые вещества, погода и давление скороварки не вводятся. Границы высоты — ограничения продукта внутри принятой модели, не гарантированный диапазон точности. Используется округлённое R=8,314462618, поэтому это не буквальное воспроизведение всех констант таблицы 1976 года."
  },
  "en": {
    "longDescription": "Estimate pure-water boiling temperature from height −430 to 9000 m. Pressure comes from the first standard-atmosphere layer, followed by a constant-latent-heat Clausius–Clapeyron approximation. The form does not measure actual local pressure.",
    "howToUse": [
      "Enter height in metres;0 m returns the adopted reference point.",
      "A negative “below 100” difference means boiling above 100 °C.",
      "Measurement work requires actual pressure and verified water properties; cooking time is not calculated."
    ],
    "howItWorks": "p(h)=101325·(1−0.0065 h/288.15)^(gM/(RL)), g=9.80665, M=0.0289644, R=8.314462618, L=0.0065. Then 1/Tb=1/373.15−R·ln(p/101325)/40660; Tb is kelvin, output Celsius. h=0 is the 100 °C reference point.",
    "example": "At 1500 m: p≈84.556 kPa and Tb≈94.919 °C,5.081 °C below 100 °C. At −430 m the model gives≈101.450 °C; this illustrates the product’s lower bound, not a lake’s current level.",
    "faq": [
      {
        "q": "Why does water boil cooler in the mountains?",
        "a": "Boiling starts when the saturated vapour pressure matches the surrounding pressure. High up the air is thin, so the match happens sooner — at a lower temperature. The same thing happens in a vacuum chamber, only more sharply."
      },
      {
        "q": "Why does food take longer if the water still boils?",
        "a": "Cooking speed is set by the water temperature, not by the fact of boiling. At three kilometres the boiling water is about 90 °C and proteins denature more slowly. A pressure cooker fixes it: raising the pressure raises the boiling point with it."
      },
      {
        "q": "How accurate is this in real weather?",
        "a": "Pure water, the stated reference point and constant 40660 J/mol: an approximation, not a steam-property table. Salinity, solutes, weather and pressure-cooker pressure are not entered. Height bounds are product limits within the adopted model, not a guaranteed accuracy range."
      },
      {
        "q": "Why is the lower bound −430 metres?",
        "a": "At 1500 m: p≈84.556 kPa and Tb≈94.919 °C,5.081 °C below 100 °C. At −430 m the model gives≈101.450 °C; this illustrates the product’s lower bound, not a lake’s current level."
      }
    ],
    "disclaimer": "Pure water, the stated reference point and constant 40660 J/mol: an approximation, not a steam-property table. Salinity, solutes, weather and pressure-cooker pressure are not entered. Height bounds are product limits within the adopted model, not a guaranteed accuracy range. The adopted rounded R=8.314462618 means this does not literally reproduce every constant in the 1976 tables."
  },
  "uk": {
    "longDescription": "Оцініть температуру кипіння чистої води за висотою −430…9000 м. Тиск береться з першого стандартного шару атмосфери, далі використано наближення Клаузіуса—Клапейрона зі сталою молярною теплотою пароутворення. Реальний місцевий тиск форма не вимірює.",
    "howToUse": [
      "Введіть висоту в метрах;0 м повертає прийняту опорну точку.",
      "Від’ємне «нижче 100» означає кипіння вище 100 °C.",
      "Для вимірювання потрібні фактичний тиск і перевірені властивості води; час готування не обчислюється."
    ],
    "howItWorks": "p(h)=101325·(1−0,0065 h/288,15)^(gM/(RL)), g=9,80665, M=0,0289644, R=8,314462618, L=0,0065. Далі 1/Tb=1/373,15−R·ln(p/101325)/40660; Tb у K, результат у °C. h=0 є опорною точкою 100 °C.",
    "example": "На 1500 м: p≈84,556 кПа та Tb≈94,919 °C, на 5,081 °C нижче 100 °C. На −430 м модель дає≈101,450 °C; це приклад нижньої межі продукту, не поточний рівень конкретного озера.",
    "faq": [
      {
        "q": "Чому в горах їжа вариться довше?",
        "a": "Бо вода закипає за нижчої температури, а швидкість готування визначає саме температура, а не факт кипіння. На трьох кілометрах вода кипить близько 90 °C, і крупи доводиться варити помітно довше."
      },
      {
        "q": "Чи можна закип’ятити воду за кімнатної температури?",
        "a": "Так, якщо достатньо знизити тиск. Під вакуумним ковпаком вода кипить і за 20 °C — але така «кипляча» вода холодна й нічого не зварить."
      },
      {
        "q": "Чому скороварка прискорює готування?",
        "a": "Скороварка підвищує тиск і температуру кипіння. Значення залежать від її робочого тиску;120 °C та скорочення часу вдвічі не є універсальними. Ця форма не моделює пристрій або час готування."
      },
      {
        "q": "Чи впливає на кипіння солоність води?",
        "a": "Розчинені речовини можуть підвищувати температуру кипіння. Кількісна зміна залежить від речовини, концентрації та властивостей розчину; об’єм каструлі й кількість солі тут не вводяться. Модель розрахована на чисту воду."
      }
    ],
    "disclaimer": "Чиста вода, задана опорна точка й сталі 40660 Дж/моль: наближення, не таблиця властивостей пари. Солоність, розчинені речовини, погода й тиск скороварки не вводяться. Межі висоти є обмеженнями продукту, не гарантованим діапазоном точності. Використано округлене R=8,314462618, тому це не буквальне відтворення всіх сталих таблиць 1976 року."
  },
  "de": {
    "longDescription": "Schätze die Siedetemperatur reinen Wassers aus −430 bis 9000 m Höhe. Der Druck folgt der ersten Standardatmosphärenschicht; anschließend wird Clausius–Clapeyron mit konstanter molarer Verdampfungsenthalpie verwendet. Der tatsächliche lokale Druck wird nicht gemessen.",
    "howToUse": [
      "Gib die Höhe in Metern ein;0 m ergibt den angenommenen Bezug.",
      "Eine negative Differenz „unter 100“ bedeutet Sieden über 100 °C.",
      "Für Messaufgaben braucht man tatsächlichen Druck und geprüfte Wassereigenschaften; Garzeit wird nicht berechnet."
    ],
    "howItWorks": "p(h)=101325·(1−0,0065 h/288,15)^(gM/(RL)), g=9,80665, M=0,0289644, R=8,314462618, L=0,0065. Danach 1/Tb=1/373,15−R·ln(p/101325)/40660; Tb in Kelvin, Ausgabe in Celsius. h=0 ist der Bezug 100 °C.",
    "example": "Bei 1500 m: p≈84,556 kPa und Tb≈94,919 °C, also 5,081 °C unter 100 °C. Bei −430 m liefert das Modell≈101,450 °C; das ist die Produktuntergrenze, kein aktueller Seespiegel.",
    "faq": [
      {
        "q": "Warum siedet Wasser in den Bergen kühler?",
        "a": "Sieden beginnt, wenn der Sättigungsdampfdruck den umgebenden Druck erreicht. Oben ist die Luft dünn, das Zusammentreffen geschieht also früher — bei niedrigerer Temperatur. In einer Vakuumkammer passiert dasselbe, nur ausgeprägter."
      },
      {
        "q": "Warum dauert Garen länger, wenn das Wasser doch kocht?",
        "a": "Die Garzeit hängt an der Wassertemperatur und nicht daran, dass es kocht. Auf drei Kilometern hat das kochende Wasser rund 90 °C, und Eiweiße gerinnen langsamer. Ein Schnellkochtopf behebt das: höherer Druck hebt den Siedepunkt mit."
      },
      {
        "q": "Wie genau ist das bei wirklichem Wetter?",
        "a": "Reines Wasser, vorgegebener Bezug und konstante 40660 J/mol: eine Näherung, keine Dampftafel. Salzgehalt, gelöste Stoffe, Wetter und Schnellkochtopfdruck fehlen. Höhenbegrenzungen sind Produktgrenzen im Modell, kein garantierter Genauigkeitsbereich."
      },
      {
        "q": "Warum liegt die untere Grenze bei −430 Metern?",
        "a": "Bei 1500 m: p≈84,556 kPa und Tb≈94,919 °C, also 5,081 °C unter 100 °C. Bei −430 m liefert das Modell≈101,450 °C; das ist die Produktuntergrenze, kein aktueller Seespiegel."
      }
    ],
    "disclaimer": "Reines Wasser, vorgegebener Bezug und konstante 40660 J/mol: eine Näherung, keine Dampftafel. Salzgehalt, gelöste Stoffe, Wetter und Schnellkochtopfdruck fehlen. Höhenbegrenzungen sind Produktgrenzen im Modell, kein garantierter Genauigkeitsbereich. Das verwendete gerundete R=8,314462618 reproduziert nicht sämtliche Konstanten der Tabellen von 1976 wörtlich."
  },
  "es": {
    "longDescription": "Estima la ebullición del agua pura entre −430 y 9000 m. La presión procede de la primera capa atmosférica estándar y se aplica Clausius–Clapeyron con calor molar de vaporización constante. El formulario no mide presión local real.",
    "howToUse": [
      "Introduce altura en metros;0 m devuelve la referencia adoptada.",
      "Una diferencia negativa «por debajo de 100» significa ebullición por encima de 100 °C.",
      "Para medir se necesitan presión real y propiedades verificadas del agua; no se calcula tiempo de cocción."
    ],
    "howItWorks": "p(h)=101325·(1−0,0065 h/288,15)^(gM/(RL)), g=9,80665, M=0,0289644, R=8,314462618, L=0,0065. Después 1/Tb=1/373,15−R·ln(p/101325)/40660; Tb en K, salida en °C. h=0 es la referencia 100 °C.",
    "example": "A 1500 m: p≈84,556 kPa y Tb≈94,919 °C,5,081 °C por debajo de 100 °C. A −430 m da≈101,450 °C: es el límite inferior del producto, no el nivel actual de un lago.",
    "faq": [
      {
        "q": "¿Por qué el agua hierve más fría en la montaña?",
        "a": "La ebullición empieza cuando la presión de vapor saturante iguala a la presión circundante. Arriba el aire es tenue, así que la igualdad llega antes, a menor temperatura. En una campana de vacío ocurre lo mismo, solo que de forma más brusca."
      },
      {
        "q": "¿Por qué la comida tarda más si el agua sigue hirviendo?",
        "a": "La velocidad de cocción la marca la temperatura del agua, no el hecho de que hierva. A tres kilómetros el agua hirviendo está a unos 90 °C y las proteínas se desnaturalizan más despacio. La olla a presión lo resuelve: al subir la presión sube con ella el punto de ebullición."
      },
      {
        "q": "¿Qué precisión tiene con el tiempo real?",
        "a": "Agua pura, referencia declarada y 40660 J/mol constantes: una aproximación, no una tabla de vapor. No se introducen salinidad, solutos, tiempo ni presión de olla. Las alturas son límites del producto en el modelo, no un intervalo de precisión garantizada."
      },
      {
        "q": "¿Por qué el límite inferior son −430 metros?",
        "a": "A 1500 m: p≈84,556 kPa y Tb≈94,919 °C,5,081 °C por debajo de 100 °C. A −430 m da≈101,450 °C: es el límite inferior del producto, no el nivel actual de un lago."
      }
    ],
    "disclaimer": "Agua pura, referencia declarada y 40660 J/mol constantes: una aproximación, no una tabla de vapor. No se introducen salinidad, solutos, tiempo ni presión de olla. Las alturas son límites del producto en el modelo, no un intervalo de precisión garantizada. El R redondeado 8,314462618 adoptado no reproduce literalmente todas las constantes de las tablas de 1976."
  }
};
