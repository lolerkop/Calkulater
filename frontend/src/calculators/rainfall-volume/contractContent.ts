import type { CalculatorCopy } from '../../lib/platform/types';

type ContractContent = Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

export const contractContent = {
  "ru": {
    "longDescription": "Переводит слой дождя над горизонтальной проекцией крыши в потенциальный объём:1 мм на 1 м² даёт 1 литр до потерь. Для 60 м² и 25 мм это 1500 л, а при выбранной доле сбора 0,9 —1350 л. Доля сбора остаётся вашим допущением, не нормативом материала. Отдельно показываются условные 200-литровые ёмкости; их число не учитывает свободное место, перелив и качество воды.",
    "howToUse": [
      "Возьмите горизонтальную проекцию крыши; вертикальный дождь — допущение модели.",
      "Введите слой в миллиметрах за выбранное событие, а не интенсивность без длительности.",
      "Укажите свою долю сбора;0,9 — пример, не норма материала.",
      "Сравните объём со свободной ёмкостью;200-литровые бочки округлены вверх условно."
    ],
    "howItWorks": "V=A×d×c литров: A — горизонтальная площадь сбора в м², d — выбранный слой осадков в мм, 0<c≤1 — доля, дошедшая до сборника. 1 м²×1 мм=0,001 м³=1 л. Потери=A×d×(1−c); бочки по 200 л=ceil(V/200). Это потенциальный объём при выбранном c; перелив, ограничение ёмкости, отдельный первый смыв и пригодность воды не вычисляются.",
    "example": "С крыши в 60 м² при дожде 25 мм и коэффициенте 0,9 соберётся 1350 литров. Для 10 м²,20 мм иc=1 получается 200 л, одна бочка, потери 0; вместимость реального бака не проверяется.",
    "faq": [
      {
        "q": "Почему площадь берётся в плане, а не по скату?",
        "a": "В этой модели дождь принимается вертикальным, поэтому используют горизонтальную проекцию. Ветер и ориентация могут изменить фактический сбор и здесь не моделируются. Для площади скатов сначала найдите соответствующую проекцию."
      },
      {
        "q": "Что такое коэффициент стока?",
        "a": "Долю исходного объёма, которая достигает сборника. Выбранное 0,9 означает 10% совокупных потерь, но не гарантируется для любого металла или черепицы. Учитывайте свои измерения, смачивание, отвод первой воды и потери тракта; переполнение хранилища отдельно не считается."
      },
      {
        "q": "Сколько воды даёт обычный дождь?",
        "a": "Нужен измеренный или прогнозный слой за конкретное событие. Одни миллиметры без длительности не определяют интенсивность «слабый/сильный». Например, выбранные 25 мм на 60 м² при 0,9 дают 1350 л независимо от словесного названия дождя."
      },
      {
        "q": "Можно ли пить такую воду?",
        "a": "Пригодность к питью объёмом не определяется. Вода с крыши может содержать микробы и химические загрязнения; фильтр и обеззараживание не гарантируют удаления всех веществ. Проверка и обработка должны отвечать конкретному использованию и местным требованиям, включая пищевые культуры."
      }
    ]
  },
  "en": {
    "longDescription": "Convert rainfall depth over the roof’s horizontal plan into potential volume:1 mm on 1 m² gives 1 litre before losses. For 60 m² and 25 mm that is 1500 L; an entered collection fraction 0.9 gives 1350 L. The fraction is your assumption, not a material standard. Separate 200-litre barrel equivalents do not account for available capacity, overflow or water quality.",
    "howToUse": [
      "Use the horizontal roof plan; vertical rain is a model assumption.",
      "Enter millimetres for the selected event, not intensity without duration.",
      "Enter your collection fraction;0.9 is an example, not a material standard.",
      "Compare volume with available storage;200-litre barrels are a rounded-up equivalent."
    ],
    "howItWorks": "V=A×d×c litres: A is horizontal collection area m², d is rainfall depth mm and 0<c≤1 is the share reaching storage. 1 m²×1 mm=0.001 m³=1 L. Losses=A×d×(1−c);200 L barrels=ceil(V/200). This is potential volume for selected c; overflow, storage capacity, separate first flush and water suitability are not calculated.",
    "example": "A 60 m² roof under 25 mm of rain with a coefficient of 0.9 collects 1350 litres. 10 m²,20 mm and c=1 yield 200 L, one barrel and zero loss; actual storage capacity is not checked.",
    "faq": [
      {
        "q": "Why the area in plan rather than the slope?",
        "a": "This model assumes vertical rain, so use horizontal plan area. Wind and orientation may change actual capture and are not modelled. Convert sloped surface area to its corresponding plan first."
      },
      {
        "q": "What is the runoff coefficient?",
        "a": "The fraction of initial volume reaching collection. An entered 0.9 means 10% combined losses, without guaranteeing that value for metal or tile. Use your measurements and allow for wetting, first flush and conveyance losses; storage overflow is not separately calculated."
      },
      {
        "q": "How much does ordinary rain give?",
        "a": "Use measured or forecast depth for a defined event. Millimetres alone without duration cannot classify intensity as light or heavy. For example, selected 25 mm over 60 m² at 0.9 gives 1350 L regardless of a verbal rain category."
      },
      {
        "q": "Is the water drinkable?",
        "a": "Volume does not establish drinking safety. Roof runoff may contain microbes and chemical contaminants; filtration and disinfection do not guarantee removal of everything. Testing and treatment must match the intended use and local requirements, including use on food crops."
      }
    ],
    "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
  },
  "uk": {
    "longDescription": "Переводить шар дощу над горизонтальною проєкцією даху в потенційний об’єм:1 мм на 1 м² дає 1 літр до втрат. Для 60 м² і 25 мм це 1500 л, а за обраної частки збору 0,9 —1350 л. Частка є вашим припущенням, не нормою покриття. Окремі еквіваленти 200-літрових бочок не враховують вільну місткість, перелив чи якість води.",
    "howToUse": [
      "Візьміть горизонтальну проєкцію даху; вертикальний дощ — припущення моделі.",
      "Введіть міліметри за обрану подію, не інтенсивність без тривалості.",
      "Задайте свою частку збору;0,9 — приклад, не норма матеріалу."
    ],
    "howItWorks": "V=A×d×c літрів: A — горизонтальна площа збору м², d — шар опадів мм, 0<c≤1 — частка, що доходить до збірника. 1 м²×1 мм=0,001 м³=1 л. Втрати=A×d×(1−c); бочки по 200 л=ceil(V/200). Це потенційний об’єм за обраним c; перелив, місткість, окремий перший змив і придатність води не визначаються.",
    "example": "З даху в 60 м² за дощу 25 мм і коефіцієнта 0,9 збереться 1350 літрів. 10 м²,20 мм іc=1 дають 200 л, одну бочку та втрати 0; місткість реального бака не перевіряється.",
    "faq": [
      {
        "q": "Яку площу брати — по схилу чи в проєкції?",
        "a": "Модель припускає вертикальний дощ, тому потрібна горизонтальна проєкція. Вітер та орієнтація можуть змінити фактичний збір і тут не моделюються. Площу схилів спочатку переведіть у проєкцію."
      },
      {
        "q": "Що враховує коефіцієнт стоку?",
        "a": "Частку початкового об’єму, що доходить до збірника. Обрані 0,9 означають 10% сукупних втрат, але не гарантуються для металу чи черепиці. Враховуйте вимірювання, змочування, відведення першої води й втрати тракту; перелив сховища окремо не рахується."
      },
      {
        "q": "Чому міліметр на метр квадратний дає рівно літр?",
        "a": "Бо 1 м²×0,001 м=0,001 м³=1 літр. Це точне співвідношення одиниць; коефіцієнт збору лише зменшує геометричний об’єм."
      },
      {
        "q": "Чи можна пити зібрану воду?",
        "a": "Об’єм не визначає придатності до пиття. Вода з даху може містити мікроби й хімічні забруднення; фільтрація та знезараження не гарантують видалення всього. Перевірка й обробка мають відповідати використанню та місцевим вимогам, зокрема для харчових культур."
      }
    ],
    "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте дані."
  },
  "de": {
    "longDescription": "Wandelt Niederschlag über der horizontalen Dachprojektion in potenzielles Volumen um:1 mm auf 1 m² ergibt 1 Liter vor Verlusten. Für 60 m² und 25 mm sind das 1500 l, bei gewähltem Sammelanteil 0,9 noch 1350 l. Der Anteil ist deine Annahme, keine Materialnorm. Die 200-Liter-Tonnenäquivalente berücksichtigen weder freie Kapazität noch Überlauf oder Wasserqualität.",
    "howToUse": [
      "Horizontale Dachprojektion nutzen; senkrechter Regen ist eine Modellannahme.",
      "Millimeter für das gewählte Ereignis eingeben, keine Intensität ohne Dauer.",
      "Eigenen Sammelanteil angeben;0,9 ist Beispiel, keine Materialnorm.",
      "Volumen mit freiem Speicher vergleichen;200-Liter-Tonnen sind ein aufgerundetes Äquivalent."
    ],
    "howItWorks": "V=A×d×c Liter: A ist die horizontale Sammelfläche m², d die Niederschlagshöhe mm und 0<c≤1 der Anteil am Speicher. 1 m²×1 mm=0,001 m³=1 l. Verluste=A×d×(1−c);200-l-Behälter=ceil(V/200). Dies ist das mögliche Volumen für c; Überlauf, Speicherkapazität, gesonderter Erstabfluss und Wasserqualität werden nicht berechnet.",
    "example": "Ein Dach von 60 m² sammelt bei 25 mm Regen und einem Beiwert von 0,9 genau 1350 Liter. 10 m²,20 mm und c=1 ergeben 200 l, einen Behälter und Verlust 0; reale Speicherkapazität wird nicht geprüft.",
    "faq": [
      {
        "q": "Warum die Fläche im Grundriss und nicht die Schräge?",
        "a": "Das Modell nimmt senkrechten Regen an, daher die horizontale Projektion. Wind und Ausrichtung können tatsächlichen Fang verändern und fehlen hier. Schräge Fläche zunächst in die passende Projektion umrechnen."
      },
      {
        "q": "Was ist der Abflussbeiwert?",
        "a": "Den Anteil des Ausgangsvolumens, der den Sammelpunkt erreicht. Gewählte 0,9 bedeuten 10% Gesamtverlust, ohne Garantie für Metall oder Ziegel. Messungen, Benetzung, Erstabfluss und Transport berücksichtigen; Speicherüberlauf wird nicht gesondert berechnet."
      },
      {
        "q": "Wie viel bringt gewöhnlicher Regen?",
        "a": "Gemessene oder vorhergesagte Höhe für ein bestimmtes Ereignis verwenden. Millimeter ohne Dauer bestimmen keine Intensität wie leicht oder stark. Gewählte 25 mm auf 60 m² bei 0,9 ergeben 1350 l unabhängig von einer Regenbezeichnung."
      },
      {
        "q": "Ist das Wasser trinkbar?",
        "a": "Das Volumen belegt keine Trinkwassersicherheit. Dachabfluss kann Keime und chemische Schadstoffe enthalten; Filterung und Desinfektion entfernen nicht garantiert alles. Prüfung und Behandlung müssen Nutzung und örtlichen Anforderungen entsprechen, auch bei Nahrungspflanzen."
      }
    ],
    "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
  },
  "es": {
    "longDescription": "Convierte lluvia sobre la proyección horizontal del tejado en volumen potencial:1 mm sobre 1 m² da 1 litro antes de pérdidas. Para 60 m² y 25 mm son 1500 l; con fracción elegida 0,9 se obtienen 1350 l. La fracción es tu supuesto, no una norma del material. Los equivalentes de barriles de 200 l no consideran capacidad libre, desbordamiento ni calidad del agua.",
    "howToUse": [
      "Usa la proyección horizontal; la lluvia vertical es un supuesto.",
      "Introduce milímetros del episodio elegido, no intensidad sin duración.",
      "Introduce tu fracción de captación;0,9 es un ejemplo, no norma del material.",
      "Compara volumen con espacio disponible; los barriles de 200 l son un equivalente redondeado hacia arriba."
    ],
    "howItWorks": "V=A×d×c litros: A es superficie horizontal de captación m², d precipitación mm y 0<c≤1 la fracción que llega al depósito. 1 m²×1 mm=0,001 m³=1 l. Pérdidas=A×d×(1−c); depósitos de 200 l=ceil(V/200). Es volumen potencial para c elegido; no calcula rebose, capacidad, primer lavado separado ni calidad del agua.",
    "example": "Un tejado de 60 m² bajo 25 mm de lluvia con un coeficiente de 0,9 recoge 1350 litros. 10 m²,20 mm y c=1 dan 200 l, un depósito y pérdidas 0; no se verifica la capacidad real.",
    "faq": [
      {
        "q": "¿Por qué la superficie en planta y no la del faldón?",
        "a": "El modelo supone lluvia vertical, por eso usa proyección horizontal. Viento y orientación pueden cambiar la captación real y no se modelan. Convierte primero la superficie inclinada a su proyección."
      },
      {
        "q": "¿Qué es el coeficiente de escorrentía?",
        "a": "La fracción del volumen inicial que llega al depósito. Elegir 0,9 significa 10% de pérdidas combinadas, sin garantía para metal o teja. Considera mediciones, mojado, primer lavado y conducción; no se calcula desbordamiento por separado."
      },
      {
        "q": "¿Cuánto da una lluvia corriente?",
        "a": "Usa profundidad medida o prevista de un episodio definido. Milímetros sin duración no clasifican intensidad débil o fuerte. Elegir 25 mm sobre 60 m² con 0,9 da 1350 l independientemente del nombre del episodio."
      },
      {
        "q": "¿El agua es potable?",
        "a": "El volumen no acredita seguridad potable. El agua del tejado puede contener microbios y contaminantes químicos; filtrar y desinfectar no garantiza eliminar todo. Ensayo y tratamiento deben corresponder al uso y requisitos locales, también para cultivos alimentarios."
      }
    ],
    "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', ContractContent>;
