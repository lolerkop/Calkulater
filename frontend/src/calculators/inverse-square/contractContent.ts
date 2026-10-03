import type { CalculatorCopy } from '../../lib/platform/types';

// Owned native explanations reviewed against this calculator’s model.
// Human editorial review is still pending; this file makes no publication claim.
export const inverseSquareContractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq'>> = {
  "ru": {
    "longDescription": "Интенсивность точечного источника при неизменной мощности падает как 1/r². Введите линейную интенсивность I₁ и два положительных расстояния в одинаковых единицах. Результат сохраняет единицу I₁ и показывает отношение интенсивностей. Модель относится к одному направлению при неизменной диаграмме излучения, без поглощения и отражений; для протяжного источника вблизи она может не работать.",
    "howToUse": [
      "В поле интенсивности вводится линейная величина, например Вт/м² или освещённость в лк при тех же условиях наблюдения. Не вводите уровень в дБ: это логарифм, который нельзя умножать на квадрат расстояний.",
      "Оба расстояния должны иметь одну единицу; перевод интенсивности между единицами не выполняется."
    ],
    "howItWorks": "Геометрический множитель G=(d₁/d₂)², а I₂=I₁G. Он определён при положительных расстояниях даже при нулевой I₁: тогда I₂=0. Отношение I₂/I₁ равно G только при I₁>0; при I₁=0 это отношение не определено.",
    "example": "1000 люксов на метре превращаются в 111,11 люкса на трёх метрах.",
    "faq": [
      {
        "q": "Почему именно квадрат?",
        "a": "Источник светит во все стороны, и вся его энергия проходит через сферу вокруг него. Площадь сферы равна 4πr², то есть растёт как квадрат радиуса, — на единицу площади остаётся во столько же раз меньше."
      },
      {
        "q": "Подчиняется ли направленный источник этому закону?",
        "a": "Направленность сама по себе не отменяет 1/r²: площадь сечения пучка с постоянным телесным углом тоже растёт как r². Для прожектора или лазера нужны фактическая геометрия пучка и расстояние; здесь не учитываются фокусировка и близкая к источнику зона."
      },
      {
        "q": "Как связаны интенсивность звука и децибелы?",
        "a": "При свободном распространении и прочих одинаковых условиях удвоение расстояния даёт четверть интенсивности. Разность уровней равна 10 log₁₀(1/4)≈−6,0206 дБ. Исходный уровень в дБ не является линейным I₁."
      },
      {
        "q": "Что если новое расстояние меньше исходного?",
        "a": "По этой модели интенсивность увеличится. Оба расстояния должны быть положительными и соответствовать области применимости; приближение вплотную к протяжному источнику нельзя оценивать только этим отношением."
      }
    ]
  },
  "en": {
    "longDescription": "At constant source power, point-source intensity falls as 1/r². Enter linear intensity I₁ and two positive distances in matching units. The result retains the unit of I₁ and reports the intensity ratio. The model follows one direction with an unchanged radiation pattern, without absorption or reflections; it may fail close to an extended source.",
    "howToUse": [
      "Use a linear intensity such as W/m², or illuminance in lux under otherwise matching observation conditions. Do not enter a dB level: it is logarithmic and cannot be multiplied by the squared distance ratio.",
      "Both distances must share a unit; intensity-unit conversion is not performed."
    ],
    "howItWorks": "The geometric factor is G=(d₁/d₂)², and I₂=I₁G. Positive distances define G even when I₁=0, which gives I₂=0. The ratio I₂/I₁ equals G only for I₁>0; that ratio is not defined when I₁=0.",
    "example": "1000 lux at one metre becomes 111.11 lux at three metres.",
    "faq": [
      {
        "q": "Why a square specifically?",
        "a": "The source shines in every direction, and all its energy crosses a sphere around it. A sphere's area is 4πr², growing as the square of the radius — so each unit of area is left with that much less."
      },
      {
        "q": "Does a directional source follow this law?",
        "a": "Directionality alone does not remove 1/r²: a beam with a fixed solid angle also has a cross-sectional area proportional to r². For a spotlight or laser, actual beam geometry and distance matter; this model has no focusing or near-source calculation."
      },
      {
        "q": "How are sound intensity and decibels related?",
        "a": "For free propagation with other conditions unchanged, doubling distance leaves one quarter of the intensity. The level difference is 10 log₁₀(1/4)≈−6.0206 dB. An initial dB level is not a linear I₁."
      },
      {
        "q": "What if the new distance is smaller?",
        "a": "This model gives a greater intensity. Both distances must be positive and within the model’s applicable region; moving very close to an extended source cannot be evaluated from this ratio alone."
      }
    ]
  },
  "uk": {
    "longDescription": "Інтенсивність точкового джерела за сталої потужності спадає як 1/r². Введіть лінійну інтенсивність I₁ та дві додатні відстані в однакових одиницях. Результат зберігає одиницю I₁ та показує відношення інтенсивностей. Модель стосується одного напрямку за незмінної діаграми випромінювання, без поглинання та відбиття; поблизу протяжного джерела вона може не працювати.",
    "howToUse": [
      "Вводьте лінійну інтенсивність, наприклад Вт/м², або освітленість у лк за решти однакових умов спостереження. Не вводьте рівень у дБ: це логарифм, який не можна множити на квадрат відношення відстаней.",
      "Обидві відстані мають одну одиницю; перетворення одиниць інтенсивності немає."
    ],
    "howItWorks": "Геометричний множник G=(d₁/d₂)², а I₂=I₁G. За додатних відстаней G визначений навіть за I₁=0: тоді I₂=0. Відношення I₂/I₁ дорівнює G лише за I₁>0; за I₁=0 це відношення не визначене.",
    "example": "1000 люксів на метрі перетворюються на 111,11 люкса на трьох метрах — у дев’ять разів менше. На двох метрах лишилося б 250 люксів.",
    "faq": [
      {
        "q": "Чому саме квадрат?",
        "a": "Бо енергія від точкового джерела розподіляється по поверхні сфери, а її площа дорівнює 4πr². Удвічі більший радіус дає вчетверо більшу площу й, отже, вчетверо меншу інтенсивність."
      },
      {
        "q": "Чи діє закон для спрямованого джерела?",
        "a": "Спрямованість сама по собі не скасовує 1/r²: площа перерізу пучка зі сталим тілесним кутом також росте як r². Для прожектора чи лазера потрібні фактична геометрія та відстань; фокусування й близька зона тут не враховані."
      },
      {
        "q": "Як пов’язані інтенсивність звуку та децибели?",
        "a": "За вільного поширення та однакових інших умов подвоєння відстані залишає чверть інтенсивності. Різниця рівнів дорівнює 10 log₁₀(1/4)≈−6,0206 дБ. Початковий рівень у дБ не є лінійною I₁."
      },
      {
        "q": "Що буде за меншої нової відстані?",
        "a": "За цією моделлю інтенсивність зросте. Обидві відстані мають бути додатними та відповідати області застосовності; наближення впритул до протяжного джерела не оцінюється лише цим відношенням."
      }
    ]
  },
  "de": {
    "longDescription": "Bei konstanter Quellenleistung sinkt die Intensität einer Punktquelle wie 1/r². Gib eine lineare Intensität I₁ und zwei positive Abstände in derselben Einheit ein. Das Ergebnis behält die Einheit von I₁ und zeigt das Intensitätsverhältnis. Betrachtet wird dieselbe Richtung bei unveränderter Abstrahlung, ohne Absorption oder Reflexionen; nahe einer ausgedehnten Quelle kann das Modell ungeeignet sein.",
    "howToUse": [
      "Verwende eine lineare Intensität wie W/m² oder Beleuchtungsstärke in Lux bei sonst gleichen Beobachtungsbedingungen. Gib keinen dB-Pegel ein: Er ist logarithmisch und darf nicht mit dem quadratischen Abstandsverhältnis multipliziert werden.",
      "Beide Abstände brauchen dieselbe Einheit; Intensitätseinheiten werden nicht umgerechnet."
    ],
    "howItWorks": "Der geometrische Faktor ist G=(d₁/d₂)², und I₂=I₁G. Bei positiven Abständen ist G auch für I₁=0 definiert; dann gilt I₂=0. Das Verhältnis I₂/I₁ entspricht G nur für I₁>0. Bei I₁=0 ist dieses Verhältnis nicht definiert.",
    "example": "1000 Lux in einem Meter werden in drei Metern zu 111,11 Lux.",
    "faq": [
      {
        "q": "Warum gerade ein Quadrat?",
        "a": "Die Quelle strahlt in alle Richtungen, und ihre ganze Energie durchquert eine Kugel um sie herum. Die Fläche einer Kugel ist 4πr² und wächst mit dem Quadrat des Radius — jeder Flächeneinheit bleibt also um so viel weniger."
      },
      {
        "q": "Gilt das Gesetz für eine gerichtete Quelle?",
        "a": "Richtwirkung allein hebt 1/r² nicht auf: Ein Strahl mit konstantem Raumwinkel hat ebenfalls eine Querschnittsfläche proportional zu r². Bei Scheinwerfern und Lasern sind tatsächliche Strahlgeometrie und Abstand wichtig. Fokussierung und Nahbereich werden hier nicht berechnet."
      },
      {
        "q": "Wie hängen Schallintensität und Dezibel zusammen?",
        "a": "Bei freier Ausbreitung und sonst gleichen Bedingungen bleibt beim doppelten Abstand ein Viertel der Intensität. Die Pegeldifferenz ist 10 log₁₀(1/4)≈−6,0206 dB. Ein ursprünglicher dB-Pegel ist kein linearer I₁-Wert."
      },
      {
        "q": "Was geschieht bei einem kleineren neuen Abstand?",
        "a": "Das Modell ergibt eine höhere Intensität. Beide Abstände müssen positiv und im gültigen Bereich sein; unmittelbar an einer ausgedehnten Quelle reicht dieses Verhältnis allein nicht aus."
      }
    ]
  },
  "es": {
    "longDescription": "Con potencia constante, la intensidad de una fuente puntual disminuye como 1/r². Introduce intensidad lineal I₁ y dos distancias positivas en unidades iguales. El resultado conserva la unidad de I₁ y muestra la razón de intensidades. El modelo sigue una misma dirección con patrón de emisión constante, sin absorción ni reflexiones; puede fallar cerca de una fuente extensa.",
    "howToUse": [
      "Utiliza intensidad lineal, como W/m², o iluminancia en lux con las demás condiciones de observación iguales. No introduzcas un nivel en dB: es logarítmico y no se puede multiplicar por el cuadrado de la razón de distancias.",
      "Ambas distancias deben compartir unidad; no se convierten unidades de intensidad."
    ],
    "howItWorks": "El factor geométrico es G=(d₁/d₂)², e I₂=I₁G. Con distancias positivas, G está definido incluso si I₁=0, y entonces I₂=0. La razón I₂/I₁ equivale a G solo para I₁>0; con I₁=0 esa razón no está definida.",
    "example": "1000 lux a un metro se convierten en 111,11 lux a tres metros.",
    "faq": [
      {
        "q": "¿Por qué un cuadrado precisamente?",
        "a": "La fuente ilumina en todas las direcciones, y toda su energía atraviesa una esfera a su alrededor. La superficie de una esfera es 4πr², que crece con el cuadrado del radio, así que a cada unidad de superficie le toca esa fracción menos."
      },
      {
        "q": "¿Se aplica a una fuente direccional?",
        "a": "La dirección del haz no elimina por sí sola 1/r²: un haz con ángulo sólido constante también tiene área transversal proporcional a r². En focos y láseres importan geometría real y distancia; el modelo no calcula enfoque ni zona próxima a la fuente."
      },
      {
        "q": "¿Cómo se relacionan intensidad sonora y decibelios?",
        "a": "En propagación libre y con las demás condiciones iguales, duplicar distancia deja un cuarto de la intensidad. La diferencia de niveles es 10 log₁₀(1/4)≈−6,0206 dB. El nivel inicial en dB no es una I₁ lineal."
      },
      {
        "q": "¿Qué ocurre con una distancia nueva menor?",
        "a": "El modelo da una intensidad mayor. Las dos distancias deben ser positivas y estar en la región de aplicabilidad; acercarse a una fuente extensa no se evalúa solo con esa razón."
      }
    ]
  }
};
