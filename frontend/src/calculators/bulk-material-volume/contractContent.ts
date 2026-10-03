import type { CalculatorCopy } from '../../lib/platform/types';

// Actual 145 native body individually reviewed; scoped model and input corrections. Agent review is not human approval.
export const buildingWave13ContractContent = {
  "ru": {
    "longDescription": "Оценивает объём прямоугольного слоя сыпучего материала, массу по вашей насыпной плотности и условное число мешков по 25 кг. Насыпная плотность относится к материалу вместе с пустотами между зёрнами. Состояние слоя и плотность должны быть согласованы: выбранный процент запаса сам по себе не переводит рыхлый объём в уплотнённый.",
    "howItWorks": "V = L·B·h/100 при L и B в м, h в см. Требуемый объём = V·(1+w/100), масса в т = требуемый объём·ρ при ρ в т/м³. Мешков по 25 кг = ⌈масса·40⌉. Размеры и плотность положительны и конечны, w от 0 до 50 %. Целые мешки округляются вверх по десятичным входным размерам.",
    "howToUse": [
      "Введите длину, ширину и толщину слоя в заданных единицах.",
      "Задайте насыпную плотность материала для соответствующего состояния и влажности.",
      "Укажите свой запас 0–50 %; коэффициент уплотнения здесь не определяется."
    ],
    "example": "Площадка 5 × 4 м со слоем 10 см и запасом 5 % требует 2,1 м³ щебня — 3,36 тонны. Плотность в примере — 1,6 т/м³.",
    "faq": [
      {
        "q": "Какую плотность вводить?",
        "a": "Насыпную плотность для нужного состояния материала, а не плотность отдельного зерна. Получите её из измерений или данных поставщика; автоматического выбора материала нет."
      },
      {
        "q": "Что делает запас?",
        "a": "Умножает геометрический объём на 1+w/100. Он не устанавливает степень усадки, влажность или требуемый запас; эти условия задаёте вы."
      },
      {
        "q": "Это расчёт состава бетона?",
        "a": "Нет. Здесь один материал с заданной плотностью. Калькулятор бетона также считает геометрический объём форм, а не марку или состав смеси."
      },
      {
        "q": "Что означает число мешков?",
        "a": "Это масса с запасом, разделённая на 25 кг и округлённая вверх. Реальные размеры упаковки, доставка и цена не известны; вывод о более выгодном способе покупки не делается."
      }
    ]
  },
  "en": {
    "longDescription": "Estimates a rectangular bulk-material layer, mass from your bulk density and a theoretical count of 25 kg bags. Bulk density includes voids between grains. Layer state and density must be consistent: a chosen allowance percentage does not itself convert loose volume to compacted volume.",
    "howItWorks": "V = L·B·h/100 with L and B in m and h in cm. Required volume = V·(1+w/100); mass in tonnes = required volume·ρ with ρ in t/m³. 25 kg bags = ⌈mass·40⌉. Dimensions and density are positive and finite; w is 0–50%. Whole bags round upward using decimal input dimensions.",
    "howToUse": [
      "Enter length, width and thickness in the displayed units.",
      "Enter bulk density for the relevant material state and moisture.",
      "Choose an allowance of 0–50%; the calculator does not determine compaction."
    ],
    "example": "A 5 × 4 m area with a 10 cm layer and 5% allowance needs 2.1 m³ of gravel — 3.36 tonnes. The example density is 1.6 t/m³.",
    "faq": [
      {
        "q": "Which density should I enter?",
        "a": "Use bulk density for the relevant material condition, not individual-grain density. Obtain it from measurements or supplier data; there is no material selector."
      },
      {
        "q": "What does the allowance do?",
        "a": "It multiplies geometric volume by 1+w/100. It does not establish settlement, moisture or the required allowance; you provide those conditions."
      },
      {
        "q": "Does this calculate a concrete mix?",
        "a": "No. This is one material with a chosen density. The concrete calculator also computes geometric pour volumes, not mix grade or composition."
      },
      {
        "q": "What does the bag count mean?",
        "a": "It is mass including allowance divided by 25 kg, rounded up. Actual packaging, delivery and price are unknown, so no cheaper purchasing method is inferred."
      }
    ],
    "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
  },
  "uk": {
    "longDescription": "Оцінює прямокутний шар сипкого матеріалу, масу за вашою насипною густиною та умовне число мішків по 25 кг. Насипна густина враховує порожнини між зернами. Стан шару й густина мають узгоджуватися: заданий відсоток запасу сам по собі не переводить пухкий об’єм в ущільнений.",
    "howItWorks": "V = L·B·h/100 за L і B у м, h у см. Потрібний об’єм = V·(1+w/100), маса в т = потрібний об’єм·ρ за ρ у т/м³. Мішків по 25 кг = ⌈маса·40⌉. Розміри й густина додатні та скінченні, w від 0 до 50 %. Цілі мішки округлюються вгору за десятковими входами.",
    "howToUse": [
      "Введіть довжину, ширину й товщину в зазначених одиницях.",
      "Задайте насипну густину для відповідного стану й вологості матеріалу.",
      "Укажіть запас 0–50 %; коефіцієнт ущільнення тут не визначається."
    ],
    "example": "Майданчик 5 × 4 м із шаром 10 см і запасом 5 % потребує 2,1 м³ щебеню — 3,36 тонни. Густина прикладу — 1,6 т/м³.",
    "faq": [
      {
        "q": "Яку густину вводити?",
        "a": "Насипну густину для потрібного стану матеріалу, а не густину окремого зерна. Візьміть її з вимірювань або даних постачальника; вибору матеріалу в формі немає."
      },
      {
        "q": "Що робить запас?",
        "a": "Множить геометричний об’єм на 1+w/100. Не визначає усадку, вологість або потрібний запас; ці умови задаєте ви."
      },
      {
        "q": "Це розрахунок складу бетону?",
        "a": "Ні. Тут один матеріал із заданою густиною. Калькулятор бетону також рахує геометричні об’єми, а не марку чи склад суміші."
      },
      {
        "q": "Що означає число мішків?",
        "a": "Це маса із запасом, поділена на 25 кг та округлена вгору. Фактичне пакування, доставка й ціна невідомі; висновку про вигідніший спосіб покупки немає."
      }
    ],
    "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте дані."
  },
  "de": {
    "longDescription": "Schätzt eine rechteckige Schüttgutschicht, die Masse aus deiner Schüttdichte und eine theoretische Zahl von 25-kg-Säcken. Die Schüttdichte enthält die Zwischenräume der Körner. Schichtzustand und Dichte müssen zusammenpassen: Ein gewählter Zuschlag rechnet lockeres Volumen nicht automatisch in verdichtetes um.",
    "howItWorks": "V = L·B·h/100 mit L und B in m und h in cm. Benötigtes Volumen = V·(1+w/100); Masse in t = benötigtes Volumen·ρ bei ρ in t/m³. 25-kg-Säcke = ⌈Masse·40⌉. Maße und Dichte sind positiv und endlich, w liegt bei 0–50 %. Ganze Säcke werden anhand dezimaler Eingaben aufgerundet.",
    "howToUse": [
      "Gib Länge, Breite und Dicke in den angezeigten Einheiten ein.",
      "Trage die Schüttdichte für den passenden Materialzustand und Feuchtegehalt ein.",
      "Wähle 0–50 % Zuschlag; der Rechner bestimmt keine Verdichtung."
    ],
    "example": "Eine Fläche von 5 × 4 m mit 10 cm Schicht und 5 % Zuschlag braucht 2,1 m³ Schotter — 3,36 Tonnen. Die Beispieldichte beträgt 1,6 t/m³.",
    "faq": [
      {
        "q": "Welche Dichte soll ich eingeben?",
        "a": "Verwende die Schüttdichte des passenden Materialzustands, nicht die Dichte einzelner Körner. Nutze Messungen oder Lieferantendaten; eine Materialauswahl gibt es nicht."
      },
      {
        "q": "Was bewirkt der Zuschlag?",
        "a": "Er multipliziert das geometrische Volumen mit 1+w/100. Setzung, Feuchte und erforderliche Reserve werden nicht bestimmt; diese Bedingungen gibst du vor."
      },
      {
        "q": "Wird eine Betonmischung berechnet?",
        "a": "Nein. Hier wird ein Material mit vorgegebener Dichte gerechnet. Auch der Betonrechner liefert geometrische Gussvolumen, keine Festigkeitsklasse oder Rezeptur."
      },
      {
        "q": "Was bedeutet die Sackzahl?",
        "a": "Es ist die Masse mit Zuschlag geteilt durch 25 kg und aufgerundet. Verpackung, Lieferung und Preise sind unbekannt; eine günstigere Einkaufsart wird nicht abgeleitet."
      }
    ],
    "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
  },
  "es": {
    "longDescription": "Estima una capa rectangular de material a granel, la masa según tu densidad aparente y un número teórico de sacos de 25 kg. La densidad aparente incluye huecos entre granos. El estado de la capa y la densidad deben ser compatibles: un margen porcentual no convierte por sí solo el volumen suelto en compactado.",
    "howItWorks": "V = L·B·h/100 con L y B en m y h en cm. Volumen necesario = V·(1+w/100); masa en t = volumen necesario·ρ con ρ en t/m³. Sacos de 25 kg = ⌈masa·40⌉. Dimensiones y densidad son positivas y finitas; w va de 0 a 50%. Los sacos se redondean hacia arriba con entradas decimales.",
    "howToUse": [
      "Introduce largo, ancho y espesor en las unidades indicadas.",
      "Usa la densidad aparente del estado y la humedad correspondientes.",
      "Elige un margen de 0–50%; no se determina un coeficiente de compactación."
    ],
    "example": "Una superficie de 5 × 4 m con una capa de 10 cm y un 5 % de margen necesita 2,1 m³ de grava: 3,36 toneladas. La densidad del ejemplo es 1,6 t/m³.",
    "faq": [
      {
        "q": "¿Qué densidad debo introducir?",
        "a": "Usa la densidad aparente del estado correspondiente, no la del grano individual. Obtén el dato de mediciones o del proveedor; no hay selector de materiales."
      },
      {
        "q": "¿Qué hace el margen?",
        "a": "Multiplica el volumen geométrico por 1+w/100. No determina asentamiento, humedad ni margen necesario; tú defines esas condiciones."
      },
      {
        "q": "¿Calcula una mezcla de hormigón?",
        "a": "No. Aquí se calcula un material con densidad elegida. La calculadora de hormigón también calcula volúmenes geométricos, no clase ni composición de mezcla."
      },
      {
        "q": "¿Qué significa el número de sacos?",
        "a": "Es la masa con margen dividida entre 25 kg y redondeada hacia arriba. Se desconocen envases, transporte y precio reales; no se infiere una compra más económica."
      }
    ],
    "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
  }
} satisfies Record<'ru'|'en'|'uk'|'de'|'es', Partial<CalculatorCopy>>;
