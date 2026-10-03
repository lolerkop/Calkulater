import type { CalculatorCopy } from '../../lib/platform/types';

// Actual 145 native body individually reviewed; scoped model and input corrections. Agent review is not human approval.
export const buildingWave13ContractContent = {
  "ru": {
    "longDescription": "Оценивает максимальный прогиб в середине балки на двух шарнирных опорах. Поддерживает равномерную нагрузку по всему пролёту и одну силу в середине. Предполагаются постоянная жёсткость EI, линейная упругость и малые перемещения; ползучесть, сдвиг, динамика и устойчивость не проверяются. Единица нагрузки меняется вместе со схемой.",
    "howItWorks": "Равномерная нагрузка: δ = 5qL⁴/(384EI), q в кН/м. Центральная сила: δ = FL³/(48EI), F в кН. L в м, E в ГПа, I в см⁴; EI = 10·E·I в Н·м², прогиб выводится в мм. Все входы положительны и конечны. Относительный прогиб показан как 1/(L/δ); L/250 — только заданный числовой ориентир, не проверка нормы.",
    "howToUse": [
      "Выберите равномерную нагрузку в кН/м или центральную силу в кН.",
      "Введите пролёт в метрах, модуль упругости в ГПа и момент инерции в см⁴.",
      "Используйте характеристики нужной оси изгиба; собственный вес добавьте к распределённой нагрузке."
    ],
    "example": "При E = 10 ГПа, I = 1000 см⁴, L = 3 м и равномерной нагрузке q = 2 кН/м получаем EI = 100 000 Н·м² и прогиб 21,094 мм. Ориентир L/250 равен 12 мм; это сравнение чисел, а не заключение о пригодности балки.",
    "faq": [
      {
        "q": "Почему прогиб так резко растёт с пролётом?",
        "a": "При неизменных q, E и I прогиб от равномерной нагрузки растёт как L⁴: с 3 до 4 м — в (4/3)⁴ ≈ 3,16 раза. Для неизменной центральной силы действует L³. Увеличение I может компенсировать этот рост; у прямоугольника той же ширины I пропорционален h³."
      },
      {
        "q": "Что даёт увеличение высоты сечения?",
        "a": "Момент инерции растёт как куб высоты: доска 50×200 жёстче доски 50×150 в 2,37 раза. Поэтому балки ставят на ребро, а не плашмя — то же сечение работает во много раз лучше."
      },
      {
        "q": "Что означает 1/250?",
        "a": "Отношение здесь записано как 1/(L/δ): например, знаменатель 250 означает δ = L/250. Строка L/250 — фиксированный ориентир калькулятора; применимый предел зависит от проекта и требований к конструкции."
      },
      {
        "q": "Учитывается ли собственный вес балки?",
        "a": "Автоматически нет. Добавьте собственный вес к равномерной нагрузке, если он входит в рассматриваемую схему. Здесь нет плотности или площади сечения для его вычисления."
      }
    ],
    "disclaimer": "Предварительный расчёт указанной упругой модели. Не заменяет проверку конструкции по применимым требованиям, нагрузкам и свойствам материала."
  },
  "en": {
    "longDescription": "Estimates maximum midspan deflection of a simply supported beam. It supports a uniform load over the full span or one force at midspan, with constant EI, linear elasticity and small displacements. Creep, shear deformation, dynamics and stability are not checked. The load unit changes with the scheme.",
    "howItWorks": "Uniform load: δ = 5qL⁴/(384EI), with q in kN/m. Midspan force: δ = FL³/(48EI), with F in kN. L is in m, E in GPa and I in cm⁴; EI = 10·E·I in N·m², and deflection is shown in mm. Inputs are positive and finite. Relative deflection is 1/(L/δ); L/250 is a fixed numerical comparison, not a code check.",
    "howToUse": [
      "Choose uniform load in kN/m or a midspan force in kN.",
      "Enter span in metres, modulus in GPa and second moment of area in cm⁴.",
      "Use properties about the bending axis and add self-weight to distributed load."
    ],
    "example": "With E = 10 GPa, I = 1000 cm⁴, L = 3 m and uniform q = 2 kN/m, EI = 100,000 N·m² and deflection is 21.094 mm. L/250 is 12 mm; this compares numbers and does not establish beam suitability.",
    "faq": [
      {
        "q": "Why does deflection grow so sharply with span?",
        "a": "At unchanged q, E and I, uniform-load deflection scales with L⁴: from 3 to 4 m the factor is (4/3)⁴ ≈ 3.16. For an unchanged midspan force it scales with L³. Increasing I can offset this growth; for a rectangle of fixed width, I scales with h³."
      },
      {
        "q": "What does a deeper section buy?",
        "a": "The second moment of area grows as the cube of the depth: a 50×200 joist is 2.37 times stiffer than a 50×150. That is why beams are set on edge rather than flat — the same section works far harder."
      },
      {
        "q": "What does 1/250 mean?",
        "a": "The ratio is written as 1/(L/δ): a denominator of 250 means δ = L/250. The separate L/250 row is a fixed comparison in this calculator; the applicable limit depends on the project and structural requirements."
      },
      {
        "q": "Is the beam's own weight included?",
        "a": "Not automatically. Add self-weight to the uniform load when it belongs in your load case. Density and section area are not inputs here."
      }
    ],
    "disclaimer": "Preliminary calculation of the stated elastic model. It does not replace structural checks for applicable requirements, loads and material properties."
  },
  "uk": {
    "longDescription": "Оцінює найбільший прогин посередині балки на двох шарнірних опорах. Підтримує рівномірне навантаження по всьому прольоту або одну силу посередині за сталої жорсткості EI, лінійної пружності й малих переміщень. Повзучість, деформація зсуву, динаміка та стійкість не перевіряються. Одиниця навантаження змінюється зі схемою.",
    "howItWorks": "Рівномірне навантаження: δ = 5qL⁴/(384EI), q у кН/м. Центральна сила: δ = FL³/(48EI), F у кН. L у м, E у ГПа, I у см⁴; EI = 10·E·I у Н·м², прогин у мм. Усі входи додатні й скінченні. Відносний прогин показано як 1/(L/δ); L/250 — лише заданий числовий орієнтир, а не перевірка норми.",
    "howToUse": [
      "Оберіть рівномірне навантаження в кН/м або центральну силу в кН.",
      "Введіть проліт у метрах, модуль пружності в ГПа й момент інерції у см⁴.",
      "Використовуйте характеристики потрібної осі згину; власну вагу додайте до розподіленого навантаження."
    ],
    "example": "За E = 10 ГПа, I = 1000 см⁴, L = 3 м і рівномірного q = 2 кН/м маємо EI = 100 000 Н·м² та прогин 21,094 мм. Орієнтир L/250 дорівнює 12 мм; це порівняння чисел, а не висновок про придатність балки.",
    "faq": [
      {
        "q": "Який прогин допустимий?",
        "a": "Допустиме значення визначає застосовний проєкт і вимоги до конструкції. Рядок L/250 — лише числовий орієнтир калькулятора, не універсальна межа для перекриття чи стелі."
      },
      {
        "q": "Чому прогин важливіший за міцність?",
        "a": "Прогин і напруження — різні перевірки. Яка з них визначає конструкцію, залежить від навантажень, матеріалу, геометрії та застосовних критеріїв; ця сторінка не визначає запас міцності."
      },
      {
        "q": "Як зменшити прогин?",
        "a": "Збільшити висоту перерізу — вона входить у момент інерції в кубі. Подвоєння висоти зменшує прогин у вісім разів, тоді як подвоєння ширини — лише вдвічі."
      },
      {
        "q": "Що таке момент інерції?",
        "a": "Геометрична характеристика перерізу: для прямокутника він дорівнює b·h³/12. Разом із модулем пружності матеріалу він і задає жорсткість балки."
      }
    ],
    "disclaimer": "Попередній розрахунок зазначеної пружної моделі. Не замінює перевірку конструкції за застосовними вимогами, навантаженнями й властивостями матеріалу."
  },
  "de": {
    "longDescription": "Schätzt die maximale Durchbiegung in der Mitte eines gelenkig gelagerten Einfeldträgers. Unterstützt werden Gleichlast über die gesamte Stützweite und eine mittige Einzellast bei konstantem EI, linearer Elastizität und kleinen Verschiebungen. Kriechen, Schubverformung, Dynamik und Stabilität werden nicht geprüft. Die Lasteinheit wechselt mit dem Lastfall.",
    "howItWorks": "Gleichlast: δ = 5qL⁴/(384EI), q in kN/m. Mittige Einzellast: δ = FL³/(48EI), F in kN. L steht in m, E in GPa und I in cm⁴; EI = 10·E·I in N·m², die Durchbiegung in mm. Die Eingaben sind positiv und endlich. Die bezogene Durchbiegung lautet 1/(L/δ); L/250 ist ein fester Zahlenvergleich und kein Normnachweis.",
    "howToUse": [
      "Wähle Gleichlast in kN/m oder eine mittige Kraft in kN.",
      "Gib Stützweite in Metern, Elastizitätsmodul in GPa und Flächenträgheitsmoment in cm⁴ ein.",
      "Verwende die Werte um die Biegeachse und addiere das Eigengewicht zur Gleichlast."
    ],
    "example": "Für E = 10 GPa, I = 1000 cm⁴, L = 3 m und Gleichlast q = 2 kN/m ergeben sich EI = 100.000 N·m² und 21,094 mm Durchbiegung. L/250 beträgt 12 mm; dieser Zahlenvergleich bestätigt keine Eignung des Trägers.",
    "faq": [
      {
        "q": "Warum wächst die Durchbiegung so stark mit der Stützweite?",
        "a": "Bei gleichem q, E und I steigt die Durchbiegung unter Gleichlast mit L⁴: von 3 auf 4 m um (4/3)⁴ ≈ 3,16. Bei unveränderter mittiger Kraft gilt L³. Ein größeres I kann das ausgleichen; beim Rechteck gleicher Breite ist I proportional zu h³."
      },
      {
        "q": "Was bringt ein höherer Querschnitt?",
        "a": "Das Flächenträgheitsmoment wächst mit der dritten Potenz der Höhe: ein Balken 50×200 ist 2,37-mal steifer als einer mit 50×150. Deshalb werden Träger hochkant gestellt und nicht flach gelegt — derselbe Querschnitt arbeitet weit stärker."
      },
      {
        "q": "Was bedeutet 1/250?",
        "a": "Das Verhältnis wird als 1/(L/δ) geschrieben: Nenner 250 bedeutet δ = L/250. Die Zeile L/250 ist ein fester Vergleich im Rechner; der maßgebende Grenzwert hängt von Planung und Bauteilanforderungen ab."
      },
      {
        "q": "Ist das Eigengewicht des Trägers enthalten?",
        "a": "Nicht automatisch. Addiere das Eigengewicht zur Gleichlast, sofern es zum Lastfall gehört. Dichte und Querschnittsfläche sind hier keine Eingaben."
      }
    ],
    "disclaimer": "Vorläufige Rechnung des beschriebenen elastischen Modells. Sie ersetzt keine Bauteilprüfung mit geltenden Anforderungen, Lasten und Werkstoffeigenschaften."
  },
  "es": {
    "longDescription": "Estima la flecha máxima en el centro de una viga biapoyada. Admite una carga uniforme en toda la luz o una fuerza central, con EI constante, elasticidad lineal y desplazamientos pequeños. No comprueba fluencia, deformación por cortante, dinámica ni estabilidad. La unidad de carga cambia con el esquema.",
    "howItWorks": "Carga uniforme: δ = 5qL⁴/(384EI), q en kN/m. Fuerza central: δ = FL³/(48EI), F en kN. L está en m, E en GPa e I en cm⁴; EI = 10·E·I en N·m² y la flecha se muestra en mm. Los datos son positivos y finitos. La flecha relativa es 1/(L/δ); L/250 es una comparación numérica fija, no una comprobación normativa.",
    "howToUse": [
      "Elige carga uniforme en kN/m o una fuerza central en kN.",
      "Introduce luz en metros, módulo en GPa y momento de inercia en cm⁴.",
      "Usa las propiedades respecto al eje de flexión y añade el peso propio a la carga repartida."
    ],
    "example": "Con E = 10 GPa, I = 1000 cm⁴, L = 3 m y carga uniforme q = 2 kN/m, EI = 100.000 N·m² y la flecha es 21,094 mm. L/250 vale 12 mm; comparar ambos números no establece la idoneidad de la viga.",
    "faq": [
      {
        "q": "¿Por qué la flecha crece tanto con la luz?",
        "a": "Con q, E e I constantes, la flecha por carga uniforme crece con L⁴: de 3 a 4 m, (4/3)⁴ ≈ 3,16 veces. Para una fuerza central constante crece con L³. Aumentar I puede compensarlo; en un rectángulo de ancho fijo, I crece con h³."
      },
      {
        "q": "¿Qué se gana con un canto mayor?",
        "a": "El momento de inercia crece con el cubo del canto: una vigueta de 50×200 es 2,37 veces más rígida que una de 50×150. Por eso las vigas se colocan de canto y no planas: la misma sección trabaja mucho más."
      },
      {
        "q": "¿Qué significa 1/250?",
        "a": "La relación se escribe 1/(L/δ): un denominador de 250 significa δ = L/250. La fila L/250 es una comparación fija del cálculo; el límite aplicable depende del proyecto y de sus requisitos."
      },
      {
        "q": "¿Se incluye el peso propio de la viga?",
        "a": "No se añade automáticamente. Inclúyelo en la carga uniforme si corresponde al caso estudiado. Aquí no se introducen densidad ni superficie de sección."
      }
    ],
    "disclaimer": "Cálculo preliminar del modelo elástico indicado. No sustituye comprobaciones estructurales de requisitos, cargas y propiedades del material."
  }
} satisfies Record<'ru'|'en'|'uk'|'de'|'es', Partial<CalculatorCopy>>;
