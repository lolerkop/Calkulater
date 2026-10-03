import type { CalculatorCopy } from '../../lib/platform/types';

// Existing native content individually reviewed; scoped model and input corrections.
export const automotiveWave10ContractContent = {
  "ru": {
    "longDescription": "Разделяет условный остановочный путь на движение за время реакции и торможение с постоянным замедлением. Введите скорость, время реакции, коэффициент сцепления и продольный уклон; положительный уклон означает подъём. Поправка уклона здесь линейная и рассчитана на приближение малых углов. Значения по умолчанию — сценарий, а не гарантированные свойства сухой дороги или водителя. Модель не определяет безопасную дистанцию и не заменяет дорожные нормы или испытания.",
    "howItWorks": "u = скорость, км/ч/3,6; G = уклон, %/100; a = 9,80665·(μ + G), м/с². Путь реакции = u·tᵣ, тормозной путь = u²/(2a), полный путь — их сумма; время торможения = u/a. Это линейное приближение уклона, не точная модель наклонной плоскости. Скорость и μ положительны, реакция неотрицательна, μ + G > 0. При неположительном a или непредставимых результатах выводится ошибка.",
    "howToUse": [
      "Введите положительную скорость в км/ч и неотрицательное время реакции в секундах.",
      "Задайте положительный μ для своего сценария; калькулятор не определяет его по типу покрытия.",
      "Введите уклон в процентах: подъём положительный, спуск отрицательный.",
      "Сравните путь реакции и тормозную часть, учитывая допущение постоянного замедления и линейного уклона."
    ],
    "example": "При скорости 90 км/ч, реакции 1 с, μ = 0,7 и уклоне 0 % модель даёт путь 70,52 м.",
    "faq": [
      {
        "q": "Почему тормозной путь растёт квадратично?",
        "a": "Потому что тормоза гасят кинетическую энергию, а она пропорциональна квадрату скорости. При удвоении скорости энергии вчетверо больше, и на том же сцеплении путь тоже вчетверо длиннее."
      },
      {
        "q": "Насколько опасно превышение?",
        "a": "При одном и том же замедлении тормозная часть на 120 км/ч в 1,44 раза длиннее, чем на 100 км/ч. Путь реакции растёт линейно, поэтому этот множитель относится не к полному пути. Здесь не моделируются столкновения или скорость удара."
      },
      {
        "q": "Как влияет уклон?",
        "a": "В этой модели подъём увеличивает μ + G, спуск уменьшает. Уклон вводится в процентах, а не градусах. При μ + G ≤ 0 модель не даёт положительного тормозного замедления и отклоняет ввод; это не универсальное утверждение о реальном автомобиле."
      },
      {
        "q": "Помогает ли ABS сократить путь?",
        "a": "ABS, состояние тормозов и шин не входят отдельными параметрами. Калькулятор не прогнозирует действие ABS или гарантированное уменьшение пути: всё торможение сведено к постоянному заданному замедлению."
      }
    ]
  },
  "en": {
    "longDescription": "Splits a conditional stopping distance into travel during reaction and braking at constant deceleration. Enter speed, reaction time, friction coefficient and longitudinal grade; positive grade means uphill. The grade correction is linear and uses a small-angle approximation. Defaults are a scenario, not guaranteed dry-road or driver properties. The model does not establish a safe following distance or replace road-design standards or testing.",
    "howItWorks": "u = speed in km/h divided by 3.6; G = grade in % divided by 100; a = 9.80665·(μ + G) m/s². Reaction travel = u·tᵣ, braking distance = u²/(2a), total is their sum; braking time = u/a. This is a linear grade approximation, not an exact inclined-plane model. Speed and μ are positive, reaction time is nonnegative and μ + G > 0. Nonpositive a or unrepresentable outputs cause an error.",
    "howToUse": [
      "Enter positive speed in km/h and nonnegative reaction time in seconds.",
      "Choose positive μ for your scenario; the tool does not determine it from a surface type.",
      "Enter grade as percent: uphill is positive, downhill negative.",
      "Compare reaction and braking distances under the constant-deceleration and linear-grade assumptions."
    ],
    "example": "At 90 km/h, reaction time 1 s, μ = 0.7 and grade 0%, the model gives 70.52 m.",
    "faq": [
      {
        "q": "Why does braking distance grow quadratically?",
        "a": "Because the brakes dissipate kinetic energy, which goes as the square of speed. Double the speed and there is four times the energy, so at the same grip the distance is four times as long."
      },
      {
        "q": "How dangerous is speeding?",
        "a": "At the same deceleration, the braking part at 120 km/h is 1.44 times its value at 100 km/h. Reaction travel grows linearly, so that multiplier does not apply to total stopping distance. Collisions or impact speed are not modelled."
      },
      {
        "q": "How does gradient matter?",
        "a": "In this model uphill increases μ + G and downhill reduces it. Enter grade as percent, not degrees. When μ + G ≤ 0 the model has no positive braking deceleration and rejects the input; this is not a universal statement about a real vehicle."
      },
      {
        "q": "Does ABS shorten the distance?",
        "a": "ABS, brake condition and tyres are not separate inputs. The calculator cannot predict ABS behaviour or a guaranteed shorter distance; all braking is reduced to the chosen constant deceleration."
      }
    ]
  },
  "uk": {
    "longDescription": "Розділяє умовний зупинний шлях на рух за час реакції та гальмування зі сталим уповільненням. Введіть швидкість, час реакції, коефіцієнт зчеплення й поздовжній ухил; додатний ухил означає підйом. Поправка ухилу тут лінійна, для наближення малих кутів. Типові значення в полях — сценарій, а не гарантовані властивості сухої дороги чи водія. Модель не визначає безпечну дистанцію й не замінює дорожніх норм або випробувань.",
    "howItWorks": "u = швидкість, км/год/3,6; G = ухил, %/100; a = 9,80665·(μ + G), м/с². Шлях реакції = u·tᵣ, гальмівний шлях = u²/(2a), повний шлях — їхня сума; час гальмування = u/a. Це лінійне наближення ухилу, а не точна модель похилої площини. Швидкість і μ додатні, реакція невід’ємна, μ + G > 0. Непозитивне a або непредставимі результати дають помилку.",
    "howToUse": [
      "Введіть додатну швидкість у км/год та невід’ємний час реакції в секундах.",
      "Задайте додатний μ для свого сценарію; інструмент не визначає його за типом покриття.",
      "Введіть ухил у відсотках: підйом додатний, спуск від’ємний.",
      "Порівняйте шлях реакції й гальмівну частину з урахуванням сталого уповільнення та лінійного ухилу."
    ],
    "example": "За швидкості 90 км/год, реакції 1 с, μ = 0,7 та ухилу 0 % модель дає шлях 70,52 м.",
    "faq": [
      {
        "q": "Чому гальмівний шлях росте як квадрат швидкості?",
        "a": "Бо гальма розсіюють кінетичну енергію, а вона пропорційна квадрату швидкості. Подвоєння швидкості означає вчетверо більше енергії й учетверо довший гальмівний шлях."
      },
      {
        "q": "Який час реакції брати?",
        "a": "Час реакції задає користувач для свого сценарію; 1 с у полі не є універсальною нормою. У дорожньому проєктуванні FHWA розглядає інші припущення, зокрема 2,5 с. Це відмінна задача й не підстава гарантувати дистанцію за поточними типовими значеннями."
      },
      {
        "q": "Наскільки гірше на мокрій дорозі?",
        "a": "Єдиного множника для мокрої дороги немає: стан поверхні, шин і швидкість впливають на зчеплення. Введіть сценарний μ, не трактуючи його як виміряну характеристику будь-якого покриття. Калькулятор не підбирає μ за словами «суха» чи «мокра»."
      },
      {
        "q": "Чи враховано стан гальм і шин?",
        "a": "Окремих параметрів стану гальм, шин або ABS немає. Усе гальмування зведене до заданого сталого уповільнення. Результат не підтверджує справність автомобіля або гарантований зупинний шлях."
      }
    ]
  },
  "de": {
    "longDescription": "Teilt einen bedingten Anhalteweg in die Strecke während der Reaktion und das Bremsen mit konstanter Verzögerung. Gib Geschwindigkeit, Reaktionszeit, Reibwert und Längsneigung ein; eine positive Neigung bedeutet bergauf. Die lineare Neigungskorrektur nutzt eine Kleinwinkelnäherung. Vorgaben sind ein Szenario, keine garantierten Eigenschaften trockener Straßen oder Fahrer. Das Modell bestimmt keinen sicheren Abstand und ersetzt weder Straßenbaunormen noch Tests.",
    "howItWorks": "u = Geschwindigkeit in km/h geteilt durch 3,6; G = Neigung in % geteilt durch 100; a = 9,80665·(μ + G) m/s². Reaktionsweg = u·tᵣ, Bremsweg = u²/(2a), Gesamtweg = deren Summe; Bremszeit = u/a. Das ist eine lineare Neigungsnäherung, kein exaktes Modell der schiefen Ebene. Geschwindigkeit und μ sind positiv, Reaktionszeit ist nichtnegativ und μ + G > 0. Nichtpositives a oder nicht darstellbare Ergebnisse führen zu einem Fehler.",
    "howToUse": [
      "Gib eine positive Geschwindigkeit in km/h und eine nichtnegative Reaktionszeit in Sekunden ein.",
      "Wähle einen positiven μ für dein Szenario; der Rechner bestimmt ihn nicht aus dem Fahrbahntyp.",
      "Gib die Neigung in Prozent ein: bergauf positiv, bergab negativ.",
      "Vergleiche Reaktions- und Bremsweg unter den Annahmen konstanter Verzögerung und linearer Neigung."
    ],
    "example": "Bei 90 km/h, 1 s Reaktionszeit, μ = 0,7 und 0 % Neigung ergibt das Modell 70,52 m.",
    "faq": [
      {
        "q": "Warum wächst der Bremsweg quadratisch?",
        "a": "Weil die Bremsen kinetische Energie abbauen, und die geht mit dem Quadrat der Geschwindigkeit. Doppelte Geschwindigkeit heißt vierfache Energie, also bei gleicher Haftung vierfacher Weg."
      },
      {
        "q": "Wie gefährlich ist zu schnelles Fahren?",
        "a": "Bei gleicher Verzögerung ist der Bremsanteil bei 120 km/h 1,44-mal so lang wie bei 100 km/h. Der Reaktionsweg wächst linear; der Faktor gilt daher nicht für den gesamten Anhalteweg. Kollisionen oder Aufprallgeschwindigkeiten werden nicht modelliert."
      },
      {
        "q": "Wie wirkt sich die Neigung aus?",
        "a": "Im Modell erhöht eine Steigung μ + G, ein Gefälle verringert es. Die Neigung wird in Prozent eingegeben, nicht in Grad. Bei μ + G ≤ 0 gibt es im Modell keine positive Bremsverzögerung, daher wird die Eingabe abgewiesen; das ist keine allgemeine Aussage über ein echtes Fahrzeug."
      },
      {
        "q": "Verkürzt ABS den Weg?",
        "a": "ABS, Bremszustand und Reifen sind keine getrennten Eingaben. Der Rechner sagt weder das ABS-Verhalten noch eine garantierte Verkürzung voraus; das gesamte Bremsen wird auf die gewählte konstante Verzögerung reduziert."
      }
    ]
  },
  "es": {
    "longDescription": "Divide una distancia de detención condicionada en recorrido durante la reacción y frenado con desaceleración constante. Introduce velocidad, tiempo de reacción, coeficiente de adherencia y pendiente longitudinal; positiva significa subida. La corrección lineal de pendiente usa una aproximación de ángulos pequeños. Los valores iniciales son un escenario, no propiedades garantizadas de carretera seca o conductor. El modelo no fija una distancia segura ni sustituye normas de diseño vial o ensayos.",
    "howItWorks": "u = velocidad en km/h dividida entre 3,6; G = pendiente en % dividida entre 100; a = 9,80665·(μ + G) m/s². Recorrido de reacción = u·tᵣ, frenado = u²/(2a), total = su suma; tiempo de frenado = u/a. Es una aproximación lineal de pendiente, no un modelo exacto de plano inclinado. Velocidad y μ son positivos, reacción no negativa y μ + G > 0. Un a no positivo o salidas no representables generan un error.",
    "howToUse": [
      "Introduce velocidad positiva en km/h y reacción no negativa en segundos.",
      "Elige μ positivo para tu escenario; la herramienta no lo obtiene del tipo de superficie.",
      "Introduce pendiente en porcentaje: subida positiva, bajada negativa.",
      "Compara reacción y frenado bajo los supuestos de desaceleración constante y pendiente lineal."
    ],
    "example": "Con 90 km/h, reacción de 1 s, μ = 0,7 y pendiente del 0 %, el modelo da 70,52 m.",
    "faq": [
      {
        "q": "¿Por qué la distancia de frenado crece de forma cuadrática?",
        "a": "Porque los frenos disipan la energía cinética, que va con el cuadrado de la velocidad. Al doble de velocidad hay cuatro veces la energía, así que con el mismo agarre la distancia es cuatro veces mayor."
      },
      {
        "q": "¿Cuánto peligro entraña pasarse de velocidad?",
        "a": "Con la misma desaceleración, la parte de frenado a 120 km/h es 1,44 veces la de 100 km/h. El recorrido de reacción crece linealmente, así que ese factor no se aplica a toda la distancia de detención. No se modelan colisiones ni velocidad de impacto."
      },
      {
        "q": "¿Cómo influye la pendiente?",
        "a": "En este modelo la subida aumenta μ + G y la bajada lo reduce. Introduce la pendiente en porcentaje, no en grados. Con μ + G ≤ 0 no hay desaceleración de frenado positiva en el modelo y se rechaza la entrada; no es una afirmación universal sobre un vehículo real."
      },
      {
        "q": "¿El ABS acorta la distancia?",
        "a": "ABS, estado de frenos y neumáticos no son entradas separadas. No se predice el efecto del ABS ni una reducción garantizada; todo el frenado se reduce a la desaceleración constante elegida."
      }
    ]
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', Partial<CalculatorCopy>>;
