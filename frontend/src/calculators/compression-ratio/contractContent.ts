import type { CalculatorCopy } from '../../lib/platform/types';

// Existing native content individually reviewed; scoped model and input corrections.
export const automotiveWave10ContractContent = {
  "ru": {
    "longDescription": "Геометрическая степень сжатия сравнивает полный объём одного цилиндра при нижней мёртвой точке с объёмом при верхней. Введите рабочий объём этого цилиндра и суммарный остаточный объём над поршнем в ВМТ. Последний включает не только камеру в головке, но и вклад прокладки, положения поршня и его формы. Полученное безразмерное отношение не является давлением компрессии и само по себе не задаёт мощность, октановое число или допустимый наддув.",
    "howItWorks": "CR = (Vₛ + V꜀)/V꜀ = 1 + Vₛ/V꜀. Оба объёма положительны и заданы в см³ для одного цилиндра; V꜀ — суммарный остаточный объём в ВМТ. При неизменном Vₛ уменьшение V꜀ увеличивает отношение. Показанные значения округлены; расчёт с непредставимыми выводимыми величинами отклоняется.",
    "howToUse": [
      "Введите рабочий объём одного цилиндра, а не всего двигателя, в см³.",
      "Введите суммарный остаточный объём над поршнем в ВМТ, включая все его геометрические составляющие, в см³.",
      "Прочитайте отношение CR и полный объём; не трактуйте CR как давление компрессометра."
    ],
    "example": "Цилиндр 454,17 см³ с камерой 45 см³ даёт степень сжатия 11,093.",
    "faq": [
      {
        "q": "Что даёт более высокая степень сжатия?",
        "a": "Отношение описывает геометрию сжатия. Оно может влиять на термодинамику двигателя, но реальная мощность и требования к топливу зависят также от наполнения, фаз, зажигания, температуры и конструкции. Калькулятор не подбирает топливо."
      },
      {
        "q": "Почему фрезеровка головки поднимает степень сжатия так сильно?",
        "a": "При уменьшении остаточного объёма знаменатель становится меньше. Например, при Vₛ = 454,17 см³ изменение V꜀ с 45 до 42 см³ повышает CR с 11,093 до 11,8136. Расчёт не переводит снятую толщину металла в объём и не проверяет механические зазоры."
      },
      {
        "q": "Чем отличается геометрическая степень сжатия от действительной?",
        "a": "Геометрическое отношение использует крайние положения поршня. Эффективное сжатие зависит, в частности, от момента закрытия впускного клапана и наполнения. Показание компрессометра — давление с отдельной единицей, а не число CR."
      },
      {
        "q": "Как влияет наддув?",
        "a": "Наддув не меняет заданные геометрические объёмы, но меняет состояние заряда. Калькулятор не оценивает давление, детонацию или безопасную степень сжатия при наддуве; нужны данные и ограничения конкретного двигателя."
      }
    ]
  },
  "en": {
    "longDescription": "The geometric compression ratio compares one cylinder’s volume at bottom dead centre with its volume at top dead centre. Enter that cylinder’s swept volume and the total clearance volume above the piston at TDC. Clearance includes the head chamber, gasket, piston position and piston shape. The dimensionless ratio is not a compression pressure and alone does not determine power, fuel octane or permissible boost.",
    "howItWorks": "CR = (Vₛ + V꜀)/V꜀ = 1 + Vₛ/V꜀. Both volumes are positive and in cm³ for one cylinder; V꜀ is the total clearance at TDC. For a fixed Vₛ, reducing V꜀ increases the ratio. Displayed values are rounded; unrepresentable output quantities cause an error.",
    "howToUse": [
      "Enter one cylinder’s swept volume in cm³, not the whole engine’s.",
      "Enter total clearance above the piston at TDC in cm³, including all its geometric contributions.",
      "Read CR and total volume; do not interpret CR as a compression-tester pressure."
    ],
    "example": "A 454.17 cm³ cylinder with a 45 cm³ chamber gives 11.093.",
    "faq": [
      {
        "q": "What does a higher compression ratio buy?",
        "a": "The ratio describes compression geometry. It can affect engine thermodynamics, but actual power and fuel requirements also depend on filling, valve timing, ignition, temperature and design. The calculator does not select fuel."
      },
      {
        "q": "Why does skimming the head raise it so much?",
        "a": "Reducing clearance makes the denominator smaller. At Vₛ = 454.17 cm³, changing V꜀ from 45 to 42 cm³ raises CR from 11.093 to 11.8136. The tool does not convert a machining depth into volume or check mechanical clearances."
      },
      {
        "q": "How does geometric differ from effective compression?",
        "a": "The geometric ratio uses the piston’s extreme positions. Effective compression also depends on intake-valve closing and cylinder filling. A compression tester reports a pressure with its own unit, not the CR number."
      },
      {
        "q": "What about forced induction?",
        "a": "Boost does not change the specified geometric volumes, but changes the charge conditions. The tool does not assess pressure, knock or a safe boost compression ratio; the particular engine’s data and limits are required."
      }
    ]
  },
  "uk": {
    "longDescription": "Геометричний ступінь стиснення порівнює повний об’єм одного циліндра в нижній мертвій точці з об’ємом у верхній. Введіть робочий об’єм цього циліндра та сумарний залишковий об’єм над поршнем у ВМТ. Він включає не лише камеру в головці, а й прокладку, положення та форму поршня. Безрозмірне відношення не є тиском компресії й саме по собі не визначає потужність, октанове число чи допустимий наддув.",
    "howItWorks": "CR = (Vₛ + V꜀)/V꜀ = 1 + Vₛ/V꜀. Обидва об’єми додатні та задані в см³ для одного циліндра; V꜀ — сумарний залишок у ВМТ. За незмінного Vₛ зменшення V꜀ збільшує відношення. Показані значення округлені; непредставимі вихідні величини спричиняють помилку.",
    "howToUse": [
      "Введіть робочий об’єм одного циліндра в см³, а не всього двигуна.",
      "Введіть сумарний залишковий об’єм над поршнем у ВМТ у см³, враховуючи всі його геометричні складові.",
      "Прочитайте CR і повний об’єм; не тлумачте CR як тиск компресометра."
    ],
    "example": "Циліндр 454,17 см³ із камерою 45 см³ дає ступінь стиснення 11,093.",
    "faq": [
      {
        "q": "Чому вища ступінь потребує кращого бензину?",
        "a": "Потрібне паливо визначається інструкцією конкретного двигуна, а не одним відношенням об’ємів. Калькулятор не оцінює детонацію, передчасне запалювання чи сумісність бензину; він не підбирає октанове число."
      },
      {
        "q": "Яка ступінь типова?",
        "a": "Єдиного типового значення для всіх бензинових, дизельних чи наддувних двигунів немає. Порівнюйте з технічними даними конкретної конструкції; цей геометричний розрахунок не задає допустимий діапазон переобладнання."
      },
      {
        "q": "Як змінюється ККД?",
        "a": "Формула тут рахує тільки відношення об’ємів. Вона не містить моделі ККД або приросту потужності, тому з її результату не можна отримати універсальний відсоток поліпшення роботи двигуна."
      },
      {
        "q": "Що станеться за неправильного палива?",
        "a": "Дотримуйтеся вимог виробника щодо палива й налаштувань. Невідповідне паливо може спричиняти проблеми горіння, але калькулятор об’ємів не визначає їхню ймовірність або безпечні режими."
      }
    ]
  },
  "de": {
    "longDescription": "Das geometrische Verdichtungsverhältnis vergleicht das Volumen eines Zylinders am unteren mit dem am oberen Totpunkt. Gib dessen Hubvolumen und das gesamte Restvolumen über dem Kolben am OT ein. Dazu gehören Brennraum, Dichtung, Kolbenlage und Kolbenform. Das dimensionslose Verhältnis ist kein Kompressionsdruck und bestimmt allein weder Leistung noch Oktanzahl oder zulässigen Ladedruck.",
    "howItWorks": "CR = (Vₛ + V꜀)/V꜀ = 1 + Vₛ/V꜀. Beide Volumina sind positiv und in cm³ für einen Zylinder angegeben; V꜀ ist das gesamte Restvolumen am OT. Bei festem Vₛ erhöht ein kleineres V꜀ das Verhältnis. Anzeigen werden gerundet; nicht darstellbare Ausgabewerte führen zu einem Fehler.",
    "howToUse": [
      "Gib das Hubvolumen eines Zylinders in cm³ ein, nicht das des ganzen Motors.",
      "Gib das gesamte Restvolumen über dem Kolben am OT in cm³ mit allen geometrischen Anteilen ein.",
      "Lies CR und Gesamtvolumen ab; CR ist kein gemessener Kompressionsdruck."
    ],
    "example": "Ein Zylinder mit 454,17 cm³ und einem Brennraum von 45 cm³ ergibt 11,093.",
    "faq": [
      {
        "q": "Was bringt ein höheres Verdichtungsverhältnis?",
        "a": "Das Verhältnis beschreibt die Verdichtungsgeometrie. Es kann die Thermodynamik beeinflussen, doch Leistung und Kraftstoffanforderungen hängen auch von Füllung, Steuerzeiten, Zündung, Temperatur und Bauart ab. Der Rechner wählt keinen Kraftstoff aus."
      },
      {
        "q": "Warum hebt das Planen des Kopfes es so stark?",
        "a": "Ein kleineres Restvolumen verkleinert den Nenner. Bei Vₛ = 454,17 cm³ steigt CR durch eine Änderung von V꜀ von 45 auf 42 cm³ von 11,093 auf 11,8136. Der Rechner setzt keine Bearbeitungstiefe in Volumen um und prüft keine mechanischen Abstände."
      },
      {
        "q": "Worin unterscheidet sich geometrische von effektiver Verdichtung?",
        "a": "Das geometrische Verhältnis nutzt die äußersten Kolbenstellungen. Die wirksame Verdichtung hängt unter anderem vom Schließen des Einlassventils und der Füllung ab. Ein Kompressionsprüfer misst Druck mit eigener Einheit, nicht die Zahl CR."
      },
      {
        "q": "Und bei Aufladung?",
        "a": "Aufladung ändert die eingegebenen geometrischen Volumina nicht, aber den Zustand der Ladung. Der Rechner bewertet weder Druck noch Klopfen oder eine sichere Verdichtung mit Ladedruck; erforderlich sind Daten und Grenzen des konkreten Motors."
      }
    ]
  },
  "es": {
    "longDescription": "La relación de compresión geométrica compara el volumen de un cilindro en el punto muerto inferior con el del superior. Introduce su cilindrada y el volumen total restante sobre el pistón en el PMS. Este incluye la cámara de la culata, la junta, la posición y la forma del pistón. La relación adimensional no es una presión de compresión ni determina por sí sola potencia, octanaje o sobrealimentación admisible.",
    "howItWorks": "CR = (Vₛ + V꜀)/V꜀ = 1 + Vₛ/V꜀. Ambos volúmenes son positivos y están en cm³ para un cilindro; V꜀ es todo el volumen restante en el PMS. Con Vₛ fijo, reducir V꜀ aumenta la relación. Los valores mostrados se redondean; una salida no representable genera un error.",
    "howToUse": [
      "Introduce la cilindrada de un cilindro en cm³, no la de todo el motor.",
      "Introduce el volumen total restante sobre el pistón en el PMS en cm³, con todas sus contribuciones geométricas.",
      "Consulta CR y volumen total; CR no es una presión de compresímetro."
    ],
    "example": "Un cilindro de 454,17 cm³ con una cámara de 45 cm³ da 11,093.",
    "faq": [
      {
        "q": "¿Qué aporta una relación de compresión mayor?",
        "a": "La relación describe la geometría de compresión. Puede afectar a la termodinámica, pero la potencia y el combustible exigido también dependen del llenado, la distribución, el encendido, la temperatura y el diseño. El calculador no elige combustible."
      },
      {
        "q": "¿Por qué rebajar la culata la sube tanto?",
        "a": "Al reducir el volumen restante disminuye el denominador. Con Vₛ = 454,17 cm³, pasar V꜀ de 45 a 42 cm³ eleva CR de 11,093 a 11,8136. La herramienta no convierte una profundidad de mecanizado en volumen ni comprueba holguras."
      },
      {
        "q": "¿En qué se diferencia la compresión geométrica de la efectiva?",
        "a": "La relación geométrica usa los extremos del recorrido del pistón. La compresión efectiva también depende del cierre de admisión y del llenado. Un compresímetro indica una presión con su unidad, no el número CR."
      },
      {
        "q": "¿Y en motores sobrealimentados?",
        "a": "La sobrealimentación no cambia los volúmenes geométricos indicados, pero sí el estado de la carga. La herramienta no evalúa presión, detonación ni una relación segura con sobrealimentación; hacen falta los datos y límites del motor concreto."
      }
    ]
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', Partial<CalculatorCopy>>;
