import type { CalculatorCopy } from '../../lib/platform/types';
// Individually read actual immutable145 body; agent-authored amendment is not human approval.
export const buildingWave16ContractContent = {
  "ru": {
    "longDescription": "Переводит объём древесины в массу по одному из шести фиксированных параметров плотности и выбранной линейной поправке влажности. В самой модели дуб при 12 % имеет 700 кг/м³, ель — 450 кг/м³: разница около 55,6 %, а не треть. Использованная плотность показана отдельной строкой. Реальный вид, влажность, изменение объёма и партия могут дать другую массу; модель не подтверждает допустимую загрузку транспорта.",
    "howItWorks": "Фиксированные параметры при 12 %: сосна 520, ель 450, берёза 650, дуб 700, лиственница 660, осина 490 кг/м³. Выбранная модель ρ = ρ12·(1 + (M − 12)/100), масса = V·ρ. M — масса воды относительно массы абсолютно сухой древесины в процентах. В продукте поддерживается 0–100 %; это не физический максимум влажности. V положителен и конечен. Шесть параметров и линейная поправка не подтверждены как универсальные видовые плотности; изменение объёма, точный ботанический вид и разброс партии не моделируются.",
    "howToUse": [
      "Введите фактический объём в м³.",
      "Выберите один из фиксированных параметров породы и проверьте показанную плотность.",
      "Введите влажность по массе абсолютно сухой древесины; технический диапазон здесь 0–100 %.",
      "Для фактической массы партии используйте измерения, а не только выбранный параметр."
    ],
    "example": "Один кубометр сосны при влажности 12 % весит 520 кг.",
    "faq": [
      {
        "q": "Почему влажность так сильно меняет вес?",
        "a": "Потому что вода — это часть того, что вы поднимаете. Свежесрубленная хвоя может быть наполовину водой по весу: именно поэтому сырое бревно и высушенное того же размера ощущаются как разные предметы."
      },
      {
        "q": "Откуда взялись 12 %?",
        "a": "12 % — выбранное состояние этих параметров, не гарантированная влажность любой комнатной древесины. Равновесная влажность зависит от температуры и относительной влажности воздуха. Указывайте измеренную влажность и не смешивайте её с долей воды в общей сырой массе."
      },
      {
        "q": "Точен ли линейный пересчёт?",
        "a": "Это сохранённое упрощение продукта, не проверенная закономерность для всех пород. Влажность меняет и массу, и объём древесины, а модель меняет только плотность по заданной прямой. Для ответственной оценки партии нужны её измерения; численный результат не доказывает пригодность для погрузки."
      },
      {
        "q": "Работает ли это для досок, а не только для брёвен?",
        "a": "Да, если ввести настоящий объём. Калькулятор кубатуры досок даст это число по размерам и количеству."
      },
      {
        "q": "Почему моей породы нет в списке?",
        "a": "Список ограничен шестью фиксированными параметрами продукта. Название породы не задаёт точный ботанический вид и плотность конкретной партии. Для другого материала не подставляйте ближайшее название как подтверждённую плотность."
      }
    ],
    "disclaimer": "Масса — оценка по фиксированным параметрам и линейной поправке. Для партии и допустимой нагрузки нужны фактические измерения; источник о свойствах древесины не подтверждает шесть параметров модели."
  },
  "en": {
    "longDescription": "Converts timber volume to mass using six fixed density parameters and a chosen linear moisture adjustment. Within this model, oak at 12% is 700 kg/m³ and spruce 450 kg/m³, a difference of about 55.6%, not one third. The density used is shown separately. Actual species, moisture, volume change and batch variation can give a different mass; this model does not approve a vehicle load.",
    "howItWorks": "Fixed parameters at 12%: pine 520, spruce 450, birch 650, oak 700, larch 660 and aspen 490 kg/m³. The chosen model is ρ = ρ12·(1 + (M − 12)/100), mass = V·ρ. M is water mass relative to oven-dry wood mass, as a percentage. This product supports 0–100%; that is not a physical maximum moisture content. V is positive and finite. The six parameters and linear correction are not verified as universal species densities; volume change, precise botanical species and batch variation are not modeled.",
    "howToUse": [
      "Enter actual volume in m³.",
      "Choose a fixed species parameter and check the displayed density.",
      "Enter moisture relative to oven-dry wood mass; this product range is 0–100%.",
      "Use measurements for actual batch mass rather than the selected parameter alone."
    ],
    "example": "One cubic metre of pine at 12 % moisture weighs 520 kg.",
    "faq": [
      {
        "q": "Why does moisture change the weight so much?",
        "a": "Because water is part of what you are lifting. Freshly felled softwood can be half water by weight, which is why a green log and a seasoned one of the same size feel like different objects."
      },
      {
        "q": "Where does 12 % come from?",
        "a": "12% is the selected reference state of these parameters, not a guaranteed indoor timber moisture level. Equilibrium moisture depends on air temperature and relative humidity. Enter measured moisture and do not confuse it with water as a fraction of total wet mass."
      },
      {
        "q": "Is the linear adjustment accurate?",
        "a": "It is a retained product simplification, not a verified law for every species. Moisture changes both timber mass and volume; this model changes density only along its chosen line. A consequential batch estimate needs measurements; a computed number does not establish loading suitability."
      },
      {
        "q": "Does this work for boards as well as logs?",
        "a": "Yes, if you enter the actual volume. The board volume calculator will give you that figure from dimensions and count."
      },
      {
        "q": "Why is my species not listed?",
        "a": "The list is limited to six fixed product parameters. A species name does not identify the precise botanical species or batch density. Do not treat the nearest listed name as a verified density for another material."
      }
    ],
    "disclaimer": "Mass is an estimate from fixed parameters and a linear correction. Actual batch measurements are needed for loads; the wood-properties source does not verify the six model parameters."
  },
  "uk": {
    "longDescription": "Переводить об’єм деревини в масу за одним із шести фіксованих параметрів густини та обраною лінійною поправкою вологості. У самій моделі дуб за 12 % має 700 кг/м³, ялина — 450 кг/м³: різниця близько 55,6 %, а не третина. Використана густина показана окремо. Реальний вид, вологість, зміна об’єму та партія можуть дати іншу масу; модель не підтверджує допустиме завантаження транспорту.",
    "howItWorks": "Фіксовані параметри за 12 %: сосна 520, ялина 450, береза 650, дуб 700, модрина 660, осика 490 кг/м³. Обрана модель ρ = ρ12·(1 + (M − 12)/100), маса = V·ρ. M — маса води відносно маси абсолютно сухої деревини у відсотках. Продукт підтримує 0–100 %; це не фізична межа вологості. V додатний і скінченний. Шість параметрів та лінійну поправку не підтверджено як універсальні видові густини; зміну об’єму, точний ботанічний вид і розкид партії не змодельовано.",
    "howToUse": [
      "Введіть фактичний об’єм у м³.",
      "Оберіть фіксований параметр породи та перевірте показану густину.",
      "Введіть вологість відносно абсолютно сухої маси; технічний діапазон тут 0–100 %.",
      "Для фактичної маси партії використовуйте вимірювання, а не лише параметр."
    ],
    "example": "Один кубометр сосни за вологості 12 % важить 520 кг.",
    "faq": [
      {
        "q": "Чому вологість так сильно змінює вагу?",
        "a": "Бо вода це частина того, що ви піднімаєте. Свіжозрубана хвоя може бути наполовину водою за вагою — саме тому сира колода і висушена того ж розміру відчуваються як різні предмети."
      },
      {
        "q": "Звідки взялися 12 %?",
        "a": "12 % — обраний стан цих параметрів, не гарантована вологість будь-якої деревини в приміщенні. Рівноважна вологість залежить від температури й відносної вологості повітря. Вводьте виміряну вологість і не плутайте її з часткою води в загальній сирій масі."
      },
      {
        "q": "Чи точний лінійний перерахунок?",
        "a": "Це збережене спрощення продукту, не перевірений закон для всіх порід. Вологість змінює і масу, і об’єм деревини, а модель змінює лише густину за обраною прямою. Для відповідальної оцінки партії потрібні її вимірювання; число не підтверджує придатність до навантаження."
      },
      {
        "q": "Чи працює це для дощок, а не лише для колод?",
        "a": "Так, якщо ввести справжній об’єм. Калькулятор кубатури дощок дасть це число за розмірами і кількістю."
      },
      {
        "q": "Чому моєї породи немає в списку?",
        "a": "Список обмежено шістьма фіксованими параметрами продукту. Назва породи не визначає точний ботанічний вид та густину партії. Не сприймайте найближчу назву як підтверджену густину іншого матеріалу."
      }
    ],
    "disclaimer": "Маса — оцінка за фіксованими параметрами та лінійною поправкою. Для партії й допустимого навантаження потрібні фактичні вимірювання; джерело про деревину не підтверджує шість параметрів моделі."
  },
  "de": {
    "longDescription": "Rechnet Holzvolumen anhand von sechs festen Dichteparametern und einer gewählten linearen Feuchtekorrektur in Masse um. Im Modell hat Eiche bei 12 % 700 kg/m³, Fichte 450 kg/m³: etwa 55,6 % Unterschied statt eines Drittels. Die verwendete Dichte steht separat. Tatsächliche Art, Feuchte, Volumenänderung und Charge können eine andere Masse ergeben; eine Fahrzeugbeladung wird damit nicht freigegeben.",
    "howItWorks": "Feste Parameter bei 12 %: Kiefer 520, Fichte 450, Birke 650, Eiche 700, Lärche 660 und Espe 490 kg/m³. Gewähltes Modell: ρ = ρ12·(1 + (M − 12)/100), Masse = V·ρ. M ist die Wassermasse relativ zur darrtrockenen Holzmasse in Prozent. Das Produkt unterstützt 0–100 %; dies ist keine physikalische Feuchtegrenze. V ist positiv und endlich. Die sechs Parameter und die lineare Korrektur sind nicht als universelle Artendichten bestätigt; Volumenänderung, genaue botanische Art und Chargenstreuung fehlen.",
    "howToUse": [
      "Tatsächliches Volumen in m³ eintragen.",
      "Festen Artparameter wählen und angezeigte Dichte prüfen.",
      "Feuchte relativ zur darrtrockenen Masse eingeben; Produktbereich hier 0–100 %.",
      "Für die tatsächliche Chargenmasse Messungen statt nur des Parameters verwenden."
    ],
    "example": "Ein Kubikmeter Kiefer bei 12 % Feuchte wiegt 520 kg.",
    "faq": [
      {
        "q": "Warum ändert die Feuchte das Gewicht so stark?",
        "a": "Weil das Wasser Teil dessen ist, was du hebst. Frisch geschlagenes Nadelholz kann zur Hälfte aus Wasser bestehen, weshalb ein frischer und ein abgelagerter Stamm gleicher Größe sich wie verschiedene Dinge anfühlen."
      },
      {
        "q": "Woher kommen die 12 %?",
        "a": "12 % ist der gewählte Bezugszustand dieser Parameter, keine garantierte Innenraum-Holzfeuchte. Gleichgewichtsfeuchte hängt von Lufttemperatur und relativer Feuchte ab. Gemessene Feuchte eingeben, nicht den Wasseranteil an der gesamten nassen Masse."
      },
      {
        "q": "Ist die lineare Anpassung genau?",
        "a": "Es ist eine beibehaltene Produktvereinfachung, kein bestätigtes Gesetz für alle Arten. Feuchte ändert Masse und Volumen; das Modell ändert nur die Dichte entlang seiner gewählten Geraden. Für eine belastbare Chargenschätzung sind Messungen nötig; das Rechenergebnis bestätigt keine Beladungseignung."
      },
      {
        "q": "Gilt das für Bretter ebenso wie für Stämme?",
        "a": "Ja, wenn du das tatsächliche Volumen einträgst. Der Rechner für das Volumen von Brettern liefert dir diesen Wert aus Maßen und Anzahl."
      },
      {
        "q": "Warum steht meine Holzart nicht in der Liste?",
        "a": "Die Liste umfasst sechs feste Produktparameter. Der Artname bestimmt weder die genaue botanische Art noch die Chargendichte. Den nächstliegenden Namen nicht als bestätigte Dichte eines anderen Materials verwenden."
      }
    ],
    "disclaimer": "Die Masse ist eine Schätzung aus festen Parametern und linearer Korrektur. Für Chargen und zulässige Lasten sind Messungen nötig; die Holzquelle bestätigt die sechs Modellparameter nicht."
  },
  "es": {
    "longDescription": "Convierte volumen de madera en masa con seis parámetros fijos de densidad y un ajuste lineal de humedad elegido. En el modelo, el roble al 12 % tiene 700 kg/m³ y la pícea 450 kg/m³: una diferencia aproximada del 55,6 %, no de un tercio. La densidad usada se muestra por separado. La especie real, humedad, cambio de volumen y lote pueden dar otra masa; el modelo no aprueba la carga de un vehículo.",
    "howItWorks": "Parámetros fijos al 12 %: pino 520, pícea 450, abedul 650, roble 700, alerce 660 y álamo temblón 490 kg/m³. Modelo elegido: ρ = ρ12·(1 + (M − 12)/100), masa = V·ρ. M es la masa de agua relativa a la masa de madera seca en estufa, en porcentaje. El producto admite 0–100 %; no es el máximo físico de humedad. V es positivo y finito. Los seis parámetros y el ajuste lineal no están verificados como densidades universales por especie; no modela cambios de volumen, especie botánica precisa ni variación del lote.",
    "howToUse": [
      "Introduce el volumen real en m³.",
      "Elige un parámetro fijo de especie y comprueba la densidad mostrada.",
      "Introduce humedad relativa a la masa seca en estufa; el intervalo del producto es 0–100 %.",
      "Usa mediciones para la masa real del lote, no solo el parámetro elegido."
    ],
    "example": "Un metro cúbico de pino al 12 % de humedad pesa 520 kg.",
    "faq": [
      {
        "q": "¿Por qué la humedad cambia tanto el peso?",
        "a": "Porque el agua forma parte de lo que levantas. Una conífera recién talada puede ser agua en la mitad de su peso, y por eso un tronco verde y otro seco del mismo tamaño parecen objetos distintos."
      },
      {
        "q": "¿De dónde sale el 12 %?",
        "a": "El 12 % es la referencia elegida de estos parámetros, no la humedad garantizada de cualquier madera interior. La humedad de equilibrio depende de temperatura y humedad relativa del aire. Usa humedad medida, sin confundirla con el agua como fracción de la masa húmeda total."
      },
      {
        "q": "¿El ajuste lineal es exacto?",
        "a": "Es una simplificación conservada del producto, no una ley verificada para todas las especies. La humedad cambia masa y volumen; el modelo solo ajusta densidad según su recta elegida. Una estimación importante del lote requiere mediciones; el número no establece idoneidad para cargar."
      },
      {
        "q": "¿Vale para tablas además de para troncos?",
        "a": "Sí, si introduces el volumen real. La calculadora de volumen de tablas te da esa cifra a partir de las dimensiones y el número."
      },
      {
        "q": "¿Por qué no aparece mi especie?",
        "a": "La lista se limita a seis parámetros fijos del producto. El nombre no identifica la especie botánica precisa ni la densidad del lote. No uses el nombre más próximo como densidad verificada de otro material."
      }
    ],
    "disclaimer": "La masa es una estimación con parámetros fijos y corrección lineal. Para lote y carga admisible hacen falta mediciones; la fuente sobre madera no verifica los seis parámetros del modelo."
  }
} satisfies Record<'ru'|'en'|'uk'|'de'|'es',Partial<CalculatorCopy>>;
