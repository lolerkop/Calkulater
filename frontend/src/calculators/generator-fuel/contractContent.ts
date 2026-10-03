import type { CalculatorCopy } from '../../lib/platform/types';

type ContractContent = Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

export const contractContent = {
  "ru": {
    "longDescription": "Оценивает топливо для выбранной постоянной нагрузки: нагрузка в кВт умножается на удельный расход и часы. Сохранённые 0,3 л/(кВт·ч) — входной пример, а не универсальная характеристика дизеля или бензинового генератора. Данные производителя или измеренный расход должны соответствовать вашей нагрузке. Необязательная цена добавляет стоимость рассчитанного объёма; прогрев и холостой ход требуют отдельных данных.",
    "howToUse": [
      "Введите фактическую нагрузку в киловаттах, а не номинал генератора.",
      "Укажите удельный расход из паспорта машины.",
      "Задайте время работы и, если нужно, цену топлива."
    ],
    "howItWorks": "При постоянной нагрузке P кВт и выбранном удельном расходе s л/(кВт·ч) расход в час F=P×s, за t часов — F×t. Цена за литр умножает этот объём; пустая цена или 0 скрывает стоимость. P,s,t>0, цена≥0. Для меняющейся нагрузки считайте участки отдельно с подходящим s; нулевой электрической нагрузке эта линейная модель не назначает нулевой расход холостого хода.",
    "example": "Генератор под нагрузкой 5 кВт при расходе 0,3 л/кВт·ч за восемь часов сожжёт 12 литров — при цене 60 ₽ это 720 ₽. За 0,5 кВт×0,4 л/(кВт·ч)×2,5 ч получается 0,5 л; цена 0 скрывает стоимость.",
    "faq": [
      {
        "q": "Откуда взять удельный расход?",
        "a": "Из данных именно вашей машины при нужной нагрузке. Если паспорт даёт литры в час, разделите их на вырабатываемые кВт, чтобы получить л/(кВт·ч). Сохранённые 0,3 — пример, который нужно заменить подходящим значением."
      },
      {
        "q": "Нагрузку или номинальную мощность вводить?",
        "a": "Фактическую электрическую нагрузку, согласованную с удельным расходом. Номинал обозначает возможности машины, а не текущую выработку. Из линейной формулы нельзя определить топливо холостого хода."
      },
      {
        "q": "Почему расход на малой нагрузке невыгоден?",
        "a": "Двигатель расходует топливо и на собственную работу, поэтому л/(кВт·ч) могут меняться с нагрузкой. Размер изменения зависит от машины: берите её кривую, а не общий множитель 1,5–2."
      },
      {
        "q": "Учитывается ли прогрев и холостой ход?",
        "a": "Нет. Холостой ход считайте отдельно по измеренным литрам в час или данным производителя. Простое увеличение часов при прежней нагрузке не воспроизводит другой режим и может завысить или занизить результат."
      }
    ]
  },
  "en": {
    "longDescription": "Estimate fuel for a selected constant load by multiplying kW, specific consumption and operating hours. The retained 0.3 L/(kWh) is an input example, not a universal diesel or petrol rating. Manufacturer data or measured consumption must match your load. An optional price adds the cost of that volume; warm-up and idling need separate data.",
    "howToUse": [
      "Enter the actual load in kilowatts, not the generator rating.",
      "Give the specific consumption from the machine data sheet.",
      "Set the running time and, if you need it, the fuel price."
    ],
    "howItWorks": "At constant load P kW and entered specific use s L/(kWh), hourly fuel F=P×s and total fuel F×t for t hours. Price per litre multiplies that volume; blank or 0 omits cost. P,s,t>0 and price≥0. Split changing loads into stages with suitable s; this linear model cannot infer idle fuel from zero electrical load.",
    "example": "A generator under a 5 kW load at 0.3 L/kWh burns 12 litres over eight hours — at 60 per litre that is 720. 0.5 kW×0.4 L/(kWh)×2.5 h gives 0.5 L; price 0 omits cost.",
    "faq": [
      {
        "q": "Where does the specific consumption come from?",
        "a": "From your machine’s data at the relevant load. If it gives litres per hour, divide by delivered kW to obtain L/(kWh). The retained 0.3 is an example to replace with a suitable value."
      },
      {
        "q": "Do I enter the load or the rated power?",
        "a": "Actual electrical load, consistent with the specific consumption. The rating states machine capacity, not current output. Idle fuel cannot be inferred from this linear formula."
      },
      {
        "q": "Why is low load inefficient?",
        "a": "The engine also consumes fuel for its own operation, so L/(kWh) can change with load. The size of the change is machine-specific; use its curve rather than a universal 1.5–2 multiplier."
      },
      {
        "q": "Are warm-up and idling included?",
        "a": "No. Calculate idling separately using measured litres per hour or manufacturer data. Simply extending hours at the same load does not reproduce a different operating mode and can overstate or understate fuel."
      }
    ],
    "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
  },
  "uk": {
    "longDescription": "Оцінює пальне для обраного сталого навантаження: кіловати множаться на питому витрату й години. Збережені 0,3 л/(кВт·год) — вхідний приклад, а не загальна характеристика дизельного чи бензинового генератора. Паспортні дані або виміряна витрата мають відповідати вашому режиму. Необов’язкова ціна додає вартість об’єму; прогрів і холостий хід потребують окремих даних.",
    "howToUse": [
      "Введіть фактичне навантаження в кіловатах.",
      "Введіть питому витрату — літрів на кіловат-годину.",
      "Введіть час роботи й ціну палива."
    ],
    "howItWorks": "За сталої потужності P кВт і обраної питомої витрати s л/(кВт·год) витрата за годину F=P×s, за t годин — F×t. Ціна за літр множить цей об’єм; порожня ціна чи 0 приховує вартість. P,s,t>0, ціна≥0. Змінне навантаження рахуйте ділянками з відповідним s; модель не визначає витрату холостого ходу за нульового електричного навантаження.",
    "example": "Генератор під навантаженням 5 кВт за витрати 0,3 л/кВт·год за вісім годин спалить 12 літрів. 0,5 кВт×0,4 л/(кВт·год)×2,5 год дає 0,5 л; ціна 0 приховує вартість.",
    "faq": [
      {
        "q": "Яку питому витрату брати?",
        "a": "З даних саме вашої машини за потрібного навантаження. Якщо зазначено літри за годину, поділіть їх на вироблені кВт, щоб отримати л/(кВт·год). Збережені 0,3 — приклад для заміни відповідним значенням."
      },
      {
        "q": "Чому не рахувати від максимальної потужності?",
        "a": "Фактичне електричне навантаження, узгоджене з питомою витратою. Номінал описує можливості машини, а не поточну вироблену потужність. Паливо холостого ходу ця лінійна формула не визначає."
      },
      {
        "q": "Яке навантаження оптимальне?",
        "a": "Його задають характеристики виробника й вимоги вашої роботи. Цей калькулятор не оцінює ресурс або перегрів і не оголошує 50–75% оптимумом для всіх машин. Перевіряйте допустиме тривале навантаження конкретної моделі."
      },
      {
        "q": "Скільки паливо можна зберігати?",
        "a": "Строк залежить від виду пального, складу, тари й умов; калькулятор його не визначає. Дотримуйтеся інструкцій постачальника пального та виробника генератора. Універсальний строк 3–6 місяців тут не встановлюється."
      }
    ],
    "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте дані."
  },
  "de": {
    "longDescription": "Schätzt Kraftstoff bei gewählter konstanter Last aus kW, spezifischem Verbrauch und Stunden. Die erhaltenen 0,3 l/(kWh) sind ein Eingabebeispiel, kein allgemeiner Diesel- oder Benzinwert. Herstellerdaten oder Messungen müssen zur Last passen. Ein optionaler Preis liefert die Mengenkosten; Aufwärmen und Leerlauf brauchen eigene Verbrauchsdaten.",
    "howToUse": [
      "Trage die tatsächliche Last in Kilowatt ein, nicht die Nennleistung des Erzeugers.",
      "Gib den spezifischen Verbrauch aus dem Datenblatt der Maschine an.",
      "Setze die Laufzeit und, wenn du sie brauchst, den Kraftstoffpreis."
    ],
    "howItWorks": "Bei konstanter Last P kW und eingegebenem Verbrauch s l/(kWh) gilt stündlich F=P×s und für t Stunden F×t. Der Literpreis multipliziert diese Menge; leer oder 0 blendet Kosten aus. P,s,t>0 und Preis≥0. Wechselnde Lasten in Abschnitten mit passendem s rechnen; aus elektrischer Nulllast lässt diese lineare Rechnung keinen Leerlaufverbrauch ableiten.",
    "example": "Ein Stromerzeuger unter 5 kW Last bei 0,3 l/kWh verbrennt über acht Stunden 12 Liter — bei 1,60 € je Liter also 19,20 €. 0,5 kW×0,4 l/(kWh)×2,5 h ergeben 0,5 l; Preis 0 blendet Kosten aus.",
    "faq": [
      {
        "q": "Woher kommt der spezifische Verbrauch?",
        "a": "Aus den Daten deiner Maschine bei passender Last. Liter pro Stunde durch abgegebene kW teilen, um l/(kWh) zu erhalten. Die erhaltenen 0,3 sind ein Beispiel und durch einen passenden Wert zu ersetzen."
      },
      {
        "q": "Trage ich die Last oder die Nennleistung ein?",
        "a": "Die tatsächliche elektrische Last passend zum spezifischen Verbrauch. Nennleistung beschreibt die Fähigkeit der Maschine, nicht die aktuelle Abgabe. Leerlaufkraftstoff ist aus dieser linearen Formel nicht ableitbar."
      },
      {
        "q": "Warum ist geringe Last unwirtschaftlich?",
        "a": "Der Motor braucht auch Kraftstoff für seinen Eigenbetrieb; l/(kWh) können daher mit der Last variieren. Die Änderung ist maschinenspezifisch: Kennlinie nutzen statt eines allgemeinen Faktors 1,5–2."
      },
      {
        "q": "Sind Warmlaufen und Leerlauf enthalten?",
        "a": "Nein. Leerlauf gesondert mit gemessenen Litern pro Stunde oder Herstellerdaten rechnen. Nur die Stunden bei derselben Last zu verlängern bildet einen anderen Betriebszustand nicht ab und kann den Verbrauch falsch schätzen."
      }
    ],
    "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
  },
  "es": {
    "longDescription": "Estima combustible para una carga constante elegida multiplicando kW, consumo específico y horas. El 0,3 l/(kWh) conservado es un ejemplo de entrada, no una característica universal del diésel o la gasolina. Datos del fabricante o mediciones deben corresponder a tu carga. Un precio opcional calcula el coste del volumen; calentamiento y ralentí necesitan datos separados.",
    "howToUse": [
      "Introduce la carga real en kilovatios, no la potencia nominal del generador.",
      "Indica el consumo específico según la ficha técnica de la máquina.",
      "Fija el tiempo de funcionamiento y, si lo necesitas, el precio del combustible."
    ],
    "howItWorks": "Con carga constante P kW y consumo específico s l/(kWh), combustible horario F=P×s y total F×t para t horas. El precio por litro multiplica ese volumen; en blanco o 0 se omite el coste. P,s,t>0 y precio≥0. Divide cargas variables en tramos con s adecuado; el modelo lineal no deduce consumo de ralentí a partir de carga eléctrica cero.",
    "example": "Un generador con una carga de 5 kW a 0,3 l/kWh quema 12 litros en ocho horas: a 1,60 el litro son 19,20. 0,5 kW×0,4 l/(kWh)×2,5 h dan 0,5 l; precio 0 omite coste.",
    "faq": [
      {
        "q": "¿De dónde sale el consumo específico?",
        "a": "De los datos de tu equipo para esa carga. Si dan litros por hora, divide entre los kW entregados para obtener l/(kWh). El 0,3 conservado es un ejemplo que debes sustituir por un valor adecuado."
      },
      {
        "q": "¿Introduzco la carga o la potencia nominal?",
        "a": "La carga eléctrica real, coherente con el consumo específico. La potencia nominal describe capacidad, no producción actual. Esta fórmula lineal no permite deducir combustible al ralentí."
      },
      {
        "q": "¿Por qué la carga baja es poco eficiente?",
        "a": "El motor consume también para funcionar, por lo que l/(kWh) puede variar con la carga. La variación depende del equipo: usa su curva, no un multiplicador universal de 1,5–2."
      },
      {
        "q": "¿Se incluyen el calentamiento y el ralentí?",
        "a": "No. Calcula el ralentí por separado con litros por hora medidos o datos del fabricante. Alargar horas con la misma carga no representa otro modo de operación y puede sobrestimar o subestimar combustible."
      }
    ],
    "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', ContractContent>;
