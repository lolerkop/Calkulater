import type { CalculatorCopy } from '../../lib/platform/types';
type ContractContent = Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

export const contractContent = {
  "ru": {
    "longDescription": "Переводит объём напитка и крепость ABV в миллилитры и граммы этанола, затем делит массу на выбранное число граммов в стандартной единице. Это удобный способ сравнить указанные количества разных напитков при одной договорённости о единице. Определения различаются: американский standard drink содержит около 14 г, британская unit означает 10 мл, приблизительно 8 г. Сохранённые 10 г в поле — выбранный пример, а не британская норма и не универсальная безопасная порция.",
    "howItWorks": "Чистый спирт, мл = объём напитка × ABV/100; масса, г = этот объём × 0,789 г/мл; единицы = масса ÷ выбранные граммы на единицу. Плотность — фиксированное приближение модели. Объём и масса единицы должны быть положительными, ABV допускается от 0 до 100%. Британский подсчёт по 10 мл не совпадает точно с приближением по 8 г.",
    "example": "150 мл напитка крепостью 12% содержат 18 мл, или 14,202 г этанола: при единице 10 г выходит 1,42. При ABV 0% результат равен 0. При 8 г на единицу та же порция даёт 1,78 по массе; британская формула по объёму даёт 1,8.",
    "howToUse": [
      "Введите фактический объём напитка в миллилитрах и ABV в процентах.",
      "Выберите граммы на единицу по нужному определению; язык страницы не выбирает страну.",
      "Для нескольких напитков посчитайте каждый и сложите результаты при одинаковом определении.",
      "Миллилитры напитка, миллилитры этанола и граммы этанола — разные величины."
    ],
    "faq": [
      {
        "q": "Почему норму единицы надо вводить самому?",
        "a": "Единица задаётся соглашением: в США это около 14 г, британская unit — 10 мл или приблизительно 8 г. Здесь расчёт идёт через массу; значение 10 г в поле не утверждает норму для всех стран."
      },
      {
        "q": "Показывает ли это опьянение?",
        "a": "Нет. Модель не использует время употребления, массу тела и прочие факторы для оценки концентрации алкоголя в крови. Число единиц не разрешает вождение и не задаёт безопасное потребление."
      },
      {
        "q": "Почему масса и объём спирта различаются?",
        "a": "Объём измеряется в миллилитрах, масса — в граммах. Здесь они связаны выбранной приближённой плотностью 0,789 г/мл; число граммов не обязано совпадать с числом миллилитров."
      },
      {
        "q": "Как считать вечер целиком?",
        "a": "Рассчитайте каждый напиток отдельно с одной и той же массой стандартной единицы и сложите единицы или граммы. Это сумма количества этанола, без оценки его выведения."
      }
    ],
    "disclaimer": "Расчёт количества этанола не оценивает опьянение, концентрацию в крови, срок выведения или допустимость вождения; он не является медицинской рекомендацией."
  },
  "en": {
    "longDescription": "Converts drink volume and ABV into millilitres and grams of ethanol, then divides the mass by the selected grams per standard unit. It compares stated drink quantities under one unit definition. Definitions vary: a US standard drink contains about 14 g, whereas a UK unit is 10 mL, approximately 8 g. The retained 10 g field value is a chosen illustration, not the UK definition or a universal safe serving.",
    "howItWorks": "Ethanol mL = drink mL × ABV/100; grams = ethanol mL × 0.789 g/mL; units = grams ÷ selected grams per unit. Density is a fixed approximation. Drink volume and unit mass must be positive; ABV may range from 0 to 100%. The UK volume calculation using 10 mL does not exactly equal the approximation using 8 g.",
    "example": "150 mL at 12% ABV contains 18 mL or 14.202 g of ethanol: a 10 g unit gives 1.42 units. At 0% ABV the result is zero. An 8 g unit gives 1.78 by this mass model; the UK volume formula gives 1.8.",
    "howToUse": [
      "Enter the drink’s actual volume in millilitres and its ABV percentage.",
      "Choose grams per unit for your intended definition; page language does not select a country.",
      "For several drinks, calculate each and add results using the same unit definition.",
      "Drink volume, ethanol volume and ethanol mass are different quantities."
    ],
    "faq": [
      {
        "q": "Why enter the unit definition myself?",
        "a": "Definitions are conventions: the US uses about 14 g, while a UK unit is 10 mL or approximately 8 g. This tool divides ethanol mass; its initial 10 g value does not assert an international standard."
      },
      {
        "q": "Does this show intoxication?",
        "a": "No. Time, body weight and other factors needed for estimating blood alcohol are absent. The unit count neither permits driving nor defines a safe amount to consume."
      },
      {
        "q": "Why do mass and volume of alcohol differ?",
        "a": "Volume is measured in millilitres, mass in grams. The model relates them using the chosen approximate density of 0.789 g/mL; their numerical values need not be equal."
      },
      {
        "q": "How do I count a whole evening?",
        "a": "Calculate each drink with the same grams-per-unit value, then add units or grams. The sum records ethanol quantity without estimating elimination."
      }
    ],
    "disclaimer": "Ethanol quantity is not an assessment of intoxication, blood alcohol, elimination time or fitness to drive, and supplies no medical consumption recommendation."
  },
  "uk": {
    "longDescription": "Переводить об’єм напою та ABV у мілілітри й грами етанолу, після чого ділить масу на обрані грами в стандартній одиниці. Визначення різні: американський standard drink містить близько 14 г, британська unit — 10 мл, приблизно 8 г. Початкові 10 г — обраний приклад, а не британська норма чи безпечна порція. Порівняння напоїв коректне лише за однакового визначення одиниці.",
    "howItWorks": "Етанол, мл = об’єм напою × ABV/100; маса, г = цей об’єм × 0,789 г/мл; одиниці = маса ÷ обрані грами на одиницю. Густина є фіксованим наближенням. Об’єм і маса одиниці мають бути додатними, ABV допускається від 0 до 100%. Британський підрахунок за 10 мл не тотожний наближенню за 8 г.",
    "example": "150 мл за ABV 12% містять 18 мл, або 14,202 г етанолу: за одиниці 10 г виходить 1,42. За 0% результат нульовий. За одиниці 8 г виходить 1,78 за масою, а британська формула за об’ємом дає 1,8. Пиво 500 мл 5% містить 25 мл етанолу — більше, ніж ця порція вина.",
    "howToUse": [
      "Введіть фактичний об’єм у мілілітрах та ABV у відсотках.",
      "Оберіть грами на одиницю за потрібним визначенням, а не за мовою сторінки.",
      "Для кількох напоїв підсумовуйте окремі розрахунки з однаковою одиницею.",
      "Не плутайте об’єм напою з об’ємом чи масою чистого етанолу."
    ],
    "faq": [
      {
        "q": "Чому норма одиниці різна в різних країнах?",
        "a": "Одиниця є домовленістю, а не природною сталою. США використовують близько 14 г, британська unit — 10 мл або приблизно 8 г. Це масовий розрахунок, тому для об’ємної британської формули можливе невелике розходження."
      },
      {
        "q": "Навіщо взагалі рахувати одиниці?",
        "a": "Щоб зіставити кількість етанолу за одним визначенням. 500 мл пива 5% дають 19,725 г, тоді як 150 мл вина 12% — 14,202 г; ці порції не однакові за алкоголем."
      },
      {
        "q": "Звідки береться густина 0,789?",
        "a": "0,789 г/мл — фіксоване наближення густини етанолу в цій моделі. Воно переводить введений об’єм чистого спирту в масу, без температурного перерахунку."
      },
      {
        "q": "Чи враховує розрахунок швидкість виведення?",
        "a": "Ні. Час, особисті характеристики й швидкість метаболізму не вводяться. Розрахунок не визначає концентрацію в крові, час виведення або можливість керувати автомобілем."
      }
    ],
    "disclaimer": "Кількість етанолу не оцінює сп’яніння, алкоголь у крові, час виведення чи допустимість водіння і не задає медичної норми споживання."
  },
  "de": {
    "longDescription": "Rechnet Getränkevolumen und Alkoholanteil ABV in Milliliter und Gramm Ethanol um und teilt die Masse durch die gewählten Gramm pro Standardeinheit. So lassen sich angegebene Getränkemengen mit derselben Definition vergleichen. Ein US-standard drink enthält etwa 14 g, eine britische unit dagegen 10 ml beziehungsweise ungefähr 8 g. Die erhaltene Vorgabe von 10 g ist ein gewähltes Beispiel, keine britische Definition und keine allgemein sichere Portion.",
    "howItWorks": "Ethanol in ml = Getränkevolumen × ABV/100; Masse in g = Ethanolvolumen × 0,789 g/ml; Einheiten = Masse ÷ gewählte Gramm je Einheit. Die Dichte ist eine feste Näherung. Volumen und Einheitsmasse müssen positiv sein; ABV darf 0 bis 100% betragen. Die britische Volumenformel mit 10 ml ist nicht exakt dieselbe wie die Näherung mit 8 g.",
    "example": "150 ml mit 12% ABV enthalten 18 ml beziehungsweise 14,202 g Ethanol: bei 10 g je Einheit ergeben sich 1,42. Bei 0% ergibt sich null. Mit 8 g ergeben sich nach dieser Massenrechnung 1,78 Einheiten; die britische Volumenformel ergibt 1,8.",
    "howToUse": [
      "Tatsächliches Getränkevolumen in Millilitern und ABV in Prozent eintragen.",
      "Gramm je Einheit nach der gewünschten Definition wählen; die Sprache legt kein Land fest.",
      "Mehrere Getränke einzeln berechnen und bei derselben Definition addieren.",
      "Getränkevolumen, Ethanolvolumen und Ethanolmasse unterscheiden."
    ],
    "faq": [
      {
        "q": "Warum trage ich die Festlegung der Einheit selbst ein?",
        "a": "Die Einheit beruht auf einer Festlegung: USA etwa 14 g, britische unit 10 ml oder ungefähr 8 g. Hier wird Ethanolmasse geteilt; die Vorgabe 10 g behauptet keinen internationalen Standard."
      },
      {
        "q": "Zeigt das den Rausch an?",
        "a": "Nein. Zeit, Körpergewicht und weitere Faktoren für Blutalkohol fehlen. Die Einheitenzahl erlaubt weder das Fahren noch definiert sie eine sichere Trinkmenge."
      },
      {
        "q": "Warum unterscheiden sich Masse und Volumen des Alkohols?",
        "a": "Volumen steht in Millilitern, Masse in Gramm. Das Modell verbindet sie mit der gewählten Näherung 0,789 g/ml; die Zahlenwerte müssen nicht gleich sein."
      },
      {
        "q": "Wie zähle ich einen ganzen Abend?",
        "a": "Jedes Getränk mit derselben Einheitsmasse berechnen, dann Einheiten oder Gramm addieren. Die Summe beschreibt Ethanolmenge ohne eine Abbauprognose."
      }
    ],
    "disclaimer": "Die Ethanolmenge beurteilt weder Rausch, Blutalkohol, Abbauzeit noch Fahrtüchtigkeit und ist keine medizinische Empfehlung zum Konsum."
  },
  "es": {
    "longDescription": "Convierte el volumen de bebida y el ABV en mililitros y gramos de etanol y divide la masa entre los gramos elegidos por unidad estándar. Permite comparar cantidades declaradas con una misma definición. Un standard drink de Estados Unidos contiene unos 14 g; una unit británica es 10 ml, aproximadamente 8 g. Los 10 g iniciales son un ejemplo elegido, no la definición británica ni una ración universalmente segura.",
    "howItWorks": "Etanol en ml = volumen de bebida × ABV/100; gramos = volumen de etanol × 0,789 g/ml; unidades = gramos ÷ gramos elegidos por unidad. La densidad es una aproximación fija. Volumen y masa de la unidad deben ser positivos; ABV admite de 0 a 100%. La fórmula británica por 10 ml no coincide exactamente con la aproximación por 8 g.",
    "example": "150 ml al 12% contienen 18 ml o 14,202 g de etanol: con una unidad de 10 g salen 1,42. Al 0% el resultado es cero. Una unidad de 8 g da 1,78 según este modelo de masa; la fórmula británica de volumen da 1,8.",
    "howToUse": [
      "Introduce el volumen real en mililitros y el ABV en porcentaje.",
      "Elige gramos por unidad según la definición deseada, no según el idioma de la página.",
      "Calcula cada bebida por separado y suma usando la misma definición.",
      "Distingue volumen de bebida, volumen de etanol y masa de etanol."
    ],
    "faq": [
      {
        "q": "¿Por qué tengo que introducir yo la definición de unidad?",
        "a": "La unidad es una convención: Estados Unidos usa unos 14 g, mientras la unit británica es 10 ml o aproximadamente 8 g. Esta herramienta divide masa; sus 10 g iniciales no afirman una norma internacional."
      },
      {
        "q": "¿Indica el grado de embriaguez?",
        "a": "No. Faltan tiempo, peso corporal y otros factores necesarios para estimar alcohol en sangre. El recuento no autoriza conducir ni establece una cantidad segura de consumo."
      },
      {
        "q": "¿Por qué difieren la masa y el volumen de alcohol?",
        "a": "El volumen se expresa en mililitros y la masa en gramos. El modelo los relaciona mediante la aproximación elegida de 0,789 g/ml; los valores numéricos no tienen que ser iguales."
      },
      {
        "q": "¿Cómo cuento toda una velada?",
        "a": "Calcula cada bebida con los mismos gramos por unidad y suma unidades o gramos. La suma registra cantidad de etanol sin predecir su eliminación."
      }
    ],
    "disclaimer": "La cantidad de etanol no evalúa embriaguez, alcohol en sangre, tiempo de eliminación ni aptitud para conducir; no es una recomendación médica de consumo."
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', ContractContent>;
