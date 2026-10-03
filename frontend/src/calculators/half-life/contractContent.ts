import type { CalculatorCopy } from '../../lib/platform/types';

// Owned native explanations reviewed against this calculator’s model.
// Human editorial review is still pending; this file makes no publication claim.
export const halfLifeContractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq'>> = {
  "ru": {
    "longDescription": "Два режима используют одну экспоненциальную модель распада: остаток исходного компонента через время и время до заданного остатка. Введите массу этого компонента в граммах и период полураспада в годах. Показываются оставшаяся и распавшаяся массы, доля остатка, число периодов и среднее время жизни. Модель предполагает постоянный период и отсутствие пополнения исходного компонента; продукты распада и их дальнейший распад не вычисляются.",
    "howToUse": [
      "В обоих режимах используйте годы. Для периода в сутках сначала переведите его и время в годы; автоматического переключения единиц нет. В обратном режиме допустимо 0<N≤N₀: N=N₀ означает нулевое время, а N=0 не достигается этой моделью за конечное время."
    ],
    "howItWorks": "N = N₀·(1/2)^(t/T); обратный режим t = T·ln(N₀/N)/ln 2; среднее время жизни τ = T/ln 2.",
    "example": "При заданном периоде 5730 лет за 11460 лет от 100 г исходного компонента остаётся 25 г. Это два периода:100·(1/2)²=25.",
    "faq": [
      {
        "q": "Почему модель не даёт точный ноль?",
        "a": "При постоянном периоде экспоненциальное среднее положительно при любом конечном времени. Это модель ожидаемого количества для большого ансамбля, а не расписание распада каждого атома. После 10 периодов доля равна 1/1024≈0,09765625%; допустимость пренебрежения зависит от задачи."
      },
      {
        "q": "Чем среднее время жизни отличается от периода полураспада?",
        "a": "Среднее время жизни — это период, делённый на натуральный логарифм двух, то есть примерно в 1,44 раза больше. Его легко перепутать, а в формуле активности стоит именно оно."
      },
      {
        "q": "Почему нельзя задать остаток больше исходного?",
        "a": "Потому что распад только уменьшает количество. Такая пара чисел означает опечатку, и отрицательное время в ответе было бы хуже отказа."
      },
      {
        "q": "Можно ли подставить другие единицы времени?",
        "a": "Само уравнение зависит от t/T, но интерфейс подписан в годах и выводит годы. Чтобы результаты и подписи совпадали, переводите исходные единицы в годы до ввода."
      },
      {
        "q": "Как трактовать сообщение о числовом диапазоне?",
        "a": "Положительный математический остаток может стать меньше минимального представимого числа. Тогда появляется сообщение о диапазоне вместо нулевой массы. Очень малая доля остатка отдельно может быть непредставимой при всё ещё представимой массе."
      }
    ]
  },
  "en": {
    "longDescription": "Both modes use one exponential decay model: the remaining parent component after a time, or the time to a chosen remainder. Enter the component’s mass in grams and half-life in years. The output includes remaining and decayed mass, remaining share, elapsed half-lives and mean lifetime. The model assumes constant half-life and no replenishment; decay products and their subsequent decay are not calculated.",
    "howToUse": [
      "Use years in both modes. Convert a half-life given in days and the elapsed time to years first; units do not switch automatically. In the inverse mode 0<N≤N₀: N=N₀ gives zero time, while N=0 cannot be reached in finite model time."
    ],
    "howItWorks": "N = N₀·(1/2)^(t/T); the inverse mode gives t = T·ln(N₀/N)/ln 2; mean lifetime τ = T/ln 2.",
    "example": "For an entered half-life of 5730 years, after 11460 years 100 g of the parent component leaves 25 g:100·(1/2)²=25.",
    "faq": [
      {
        "q": "Why does the model never reach exactly zero?",
        "a": "At constant half-life, the exponential mean is positive at every finite time. It models an expected amount for an ensemble, not each atom’s decay schedule. After 10 half-lives the share is 1/1024≈0.09765625%; whether it may be neglected depends on the task."
      },
      {
        "q": "How does mean lifetime differ from half-life?",
        "a": "The mean lifetime is the half-life divided by the natural logarithm of two, about 1.44 times longer. It is easy to confuse the two, and the activity formula uses the mean lifetime."
      },
      {
        "q": "Why can the remainder not exceed the initial amount?",
        "a": "Because decay only removes material. Such a pair of numbers means a typo, and a negative time in the answer would be worse than a refusal."
      },
      {
        "q": "Can I enter another time unit?",
        "a": "The equation depends on t/T, but the interface labels and outputs use years. Convert the original time units to years before entry so the numbers and labels agree."
      },
      {
        "q": "What does a numerical range message mean?",
        "a": "A mathematically positive remainder can be smaller than the smallest representable number. The page then shows a range message instead of a zero mass. A very small remaining fraction may separately be unrepresentable while the mass still fits."
      }
    ]
  },
  "uk": {
    "longDescription": "Два режими використовують одну експоненціальну модель розпаду: залишок вихідного компонента через час або час до обраного залишку. Введіть масу компонента в грамах і період напіврозпаду в роках. Показуються залишкова й розпала маси, частка залишку, кількість періодів та середній час життя. Період вважається сталим, поповнення компонента відсутнє; продукти розпаду та їхній подальший розпад не обчислюються.",
    "howToUse": [
      "В обох режимах використовуйте роки. Період у добах і минулий час спочатку переведіть у роки; автоматичної зміни одиниць немає. Для зворотного режиму 0<N≤N₀: N=N₀ дає нульовий час, N=0 не досягається за скінченний час моделі."
    ],
    "howItWorks": "Залишок рахується як N = N₀ · (1/2)^(t/T). У зворотному режимі час виводиться як t = T · ln(N₀/N)/ln 2. Середній час життя τ дорівнює T/ln 2 і приблизно в 1,44 раза більший за період напіврозпаду.",
    "example": "За заданого періоду 5730 років через 11460 років від 100 г вихідного компонента залишається 25 г:100·(1/2)²=25.",
    "faq": [
      {
        "q": "Чому модель не дає точного нуля?",
        "a": "За сталого періоду експоненціальне середнє додатне за будь-якого скінченного часу. Це очікувана кількість для ансамблю, а не розклад розпаду кожного атома. Після 10 періодів частка дорівнює 1/1024≈0,09765625%; можливість її знехтувати залежить від задачі."
      },
      {
        "q": "Чи залежить розпад від умов?",
        "a": "У цій моделі період вважається сталим. Вплив середовища, змішані ізотопи та ланцюжки дочірніх продуктів не розраховуються; значення періоду потрібно брати для обраного компонента."
      },
      {
        "q": "Чим середній час життя відрізняється від періоду напіврозпаду?",
        "a": "Середній час життя дорівнює T/ln 2 ≈ 1,44·T. Це середнє для окремого ядра, тоді як період напіврозпаду описує поведінку великої кількості ядер."
      },
      {
        "q": "Як працює радіовуглецеве датування?",
        "a": "Зворотне рівняння дає час у простій моделі зі сталим періодом і відомим початковим компонентом. Для реального датування потрібні вимірювання, початковий рівень, калібрування та перевірка забруднення; ця сторінка цього не виконує."
      },
      {
        "q": "Чи можна вводити інші одиниці часу?",
        "a": "Рівняння залежить від t/T, але поля й результати підписані в роках. Переведіть початкові одиниці в роки до вводу, щоб числа та підписи збігалися."
      },
      {
        "q": "Що означає повідомлення про числовий діапазон?",
        "a": "Математично додатний залишок може стати меншим за найменше доступне число. Тоді сторінка показує обмеження, а не нульову масу. Дуже мала частка залишку може не представлятися окремо, хоча сама маса ще представляється."
      }
    ]
  },
  "de": {
    "longDescription": "Beide Modi verwenden dasselbe exponentielle Zerfallsmodell: verbleibende Menge der Ausgangskomponente nach einer Zeit oder die Zeit bis zu einem gewählten Rest. Gib die Masse in Gramm und die Halbwertszeit in Jahren ein. Angezeigt werden Rest, zerfallene Masse, Restanteil, Halbwertszeiten und mittlere Lebensdauer. Die Halbwertszeit bleibt konstant, die Ausgangskomponente wird nicht aufgefüllt; Zerfallsprodukte und ihr weiterer Zerfall werden nicht berechnet.",
    "howToUse": [
      "Verwende in beiden Modi Jahre. Eine Halbwertszeit in Tagen und die verstrichene Zeit müssen zuerst in Jahre umgerechnet werden; die Einheit wechselt nicht automatisch. Im inversen Modus gilt 0<N≤N₀: N=N₀ ergibt Zeit null, N=0 wird in endlicher Modellzeit nicht erreicht."
    ],
    "howItWorks": "N = N₀·(1/2)^(t/T); der umgekehrte Modus ergibt t = T·ln(N₀/N)/ln 2; mittlere Lebensdauer τ = T/ln 2.",
    "example": "Bei einer eingegebenen Halbwertszeit von 5730 Jahren verbleiben nach 11460 Jahren von 100 g Ausgangskomponente 25 g:100·(1/2)²=25.",
    "faq": [
      {
        "q": "Warum erreicht das Modell nie genau null?",
        "a": "Bei konstanter Halbwertszeit bleibt der exponentielle Erwartungswert für jede endliche Zeit positiv. Dies ist eine erwartete Menge für ein Ensemble, kein Zerfallsplan einzelner Atome. Nach 10 Halbwertszeiten beträgt der Anteil 1/1024≈0,09765625%; ob er vernachlässigbar ist, hängt von der Aufgabe ab."
      },
      {
        "q": "Wie unterscheidet sich die mittlere Lebensdauer von der Halbwertszeit?",
        "a": "Die mittlere Lebensdauer ist die Halbwertszeit geteilt durch den natürlichen Logarithmus von zwei, also rund 1,44-mal länger. Beides wird leicht verwechselt, und die Formel für die Aktivität nutzt die mittlere Lebensdauer."
      },
      {
        "q": "Warum darf der Rest die Ausgangsmenge nicht übersteigen?",
        "a": "Weil der Zerfall nur Material entfernt. Ein solches Zahlenpaar bedeutet einen Tippfehler, und eine negative Zeit in der Antwort wäre schlechter als eine Verweigerung."
      },
      {
        "q": "Kann ich andere Zeiteinheiten eingeben?",
        "a": "Die Gleichung hängt von t/T ab, aber Eingaben und Ausgaben sind in Jahren beschriftet. Rechne die ursprünglichen Einheiten vor der Eingabe in Jahre um, damit Zahlen und Beschriftung übereinstimmen."
      },
      {
        "q": "Was bedeutet eine Zahlenbereichsmeldung?",
        "a": "Ein mathematisch positiver Rest kann kleiner als die kleinste darstellbare Zahl sein. Dann erscheint eine Bereichsmeldung statt einer Nullmasse. Ein sehr kleiner Restanteil kann separat außerhalb des Zahlenbereichs liegen, obwohl die Masse noch darstellbar ist."
      }
    ]
  },
  "es": {
    "longDescription": "Los dos modos usan un mismo modelo de desintegración exponencial: cantidad restante del componente inicial tras un tiempo, o tiempo hasta un resto elegido. Introduce la masa en gramos y la semivida en años. Se muestran masa restante y desintegrada, fracción restante, número de semividas y vida media. Se supone semivida constante y ausencia de aporte; no se calculan productos de desintegración ni su evolución posterior.",
    "howToUse": [
      "Utiliza años en ambos modos. Convierte primero a años una semivida dada en días y el tiempo transcurrido; no hay cambio automático de unidades. En el modo inverso 0<N≤N₀: N=N₀ da tiempo cero, N=0 no se alcanza en un tiempo finito del modelo."
    ],
    "howItWorks": "N = N₀·(1/2)^(t/T); el modo inverso da t = T·ln(N₀/N)/ln 2; vida media τ = T/ln 2.",
    "example": "Con una semivida introducida de 5730 años, tras 11460 años quedan 25 g de 100 g del componente inicial:100·(1/2)²=25.",
    "faq": [
      {
        "q": "¿Por qué el modelo nunca llega exactamente a cero?",
        "a": "Con semivida constante, la media exponencial es positiva para cualquier tiempo finito. Modela una cantidad esperada para un conjunto, no el instante de desintegración de cada átomo. Tras 10 semividas queda 1/1024≈0,09765625%; poder despreciarlo depende del problema."
      },
      {
        "q": "¿En qué se diferencia la vida media de la semivida?",
        "a": "La vida media es la semivida dividida entre el logaritmo natural de dos, alrededor de 1,44 veces más larga. Es fácil confundirlas, y la fórmula de la actividad usa la vida media."
      },
      {
        "q": "¿Por qué el resto no puede superar a la cantidad inicial?",
        "a": "Porque la desintegración solo quita material. Ese par de cifras significa una errata, y un tiempo negativo en la respuesta sería peor que una negativa."
      },
      {
        "q": "¿Puedo introducir otra unidad de tiempo?",
        "a": "La ecuación depende de t/T, pero los campos y las salidas están rotulados en años. Convierte las unidades originales a años antes de introducirlas para que números y rótulos coincidan."
      },
      {
        "q": "¿Qué significa un aviso de rango numérico?",
        "a": "Un resto matemáticamente positivo puede ser menor que el mínimo número representable. En ese caso aparece un aviso en lugar de una masa cero. Una fracción muy pequeña puede quedar fuera de rango por separado, aunque la masa siga siendo representable."
      }
    ]
  }
};
