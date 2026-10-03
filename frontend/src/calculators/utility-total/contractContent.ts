import type { CalculatorCopy } from '../../lib/platform/types';

type ContractContent = Pick<CalculatorCopy, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

export const contractContent = {
  "ru": {
    "longDescription": "Суммирует расход за выбранный месяц по каждой услуге и её цену за единицу, затем добавляет постоянные начисления. В строке обязательны название, расход и тариф; последние два числа относятся к расходу и цене, а весь текст перед ними — к названию. Вводите расход периода, то есть разницу показаний, а не накопленный счётчик. Переменная и постоянная части показываются отдельно, чтобы обнаружить ошибку единицы или повторный сбор.",
    "howToUse": [
      "Введите строку «Название расход тариф»; десятичная точка и запятая допустимы, разделители тысяч не используйте.",
      "Последние два числа строки — расход и цена за единицу.",
      "Начисления без счётчика впишите в поле постоянной части.",
      "Сравните переменную и постоянную части в результате."
    ],
    "howItWorks": "В каждой непустой строке нужны название услуги и два числа: расход u и тариф p. Читаются последние два токена; всё перед ними — название. Пробел или точка с запятой разделяет токены, точка и запятая внутри числа означают десятичную часть, без разделителей тысяч. Переменная сумма Σu×p, итог=она+фиксированная часть. Год=12 одинаковых месяцев; доли услуг отдельно не выводятся. Все суммы задавайте в одной валюте и на одной налоговой базе.",
    "example": "Электричество, вода и газ на 2 023 плюс 1 200 постоянных дают 3 223 в месяц. Строка «вода 0 6» и фиксированная часть 0 дают 0,00 за месяц и за год.",
    "faq": [
      {
        "q": "Что считать постоянным начислением?",
        "a": "Всё, что выставляют одинаково каждый месяц независимо от расхода: содержание дома, вывоз мусора, домофон, аренда счётчика. У них нет ни расхода, ни тарифа, поэтому в таблице им не место."
      },
      {
        "q": "В каких единицах вводить расход?",
        "a": "В тех, за которые назначен тариф. Электричество по кВт·ч — вводите киловатт-часы; вода по кубометру — кубометры."
      },
      {
        "q": "Как ввести двухтарифный счётчик электричества?",
        "a": "Двумя строками — день и ночь — каждая со своим расходом и тарифом. В таблице будет видно, какая из них дороже."
      },
      {
        "q": "Почему годовая сумма — это просто двенадцать месяцев?",
        "a": "Потому что это проекция текущего месяца, а не прогноз. Отопление и кондиционирование делают настоящий год неровным, и калькулятор не притворяется, будто знает ваш сезон."
      },
      {
        "q": "Это то же, что калькулятор расхода электроэнергии?",
        "a": "Тот берёт мощность и часы, чтобы оценить энергию. Этот берёт уже известный расход периода — разницу показаний — и тариф. Накопленный показатель счётчика не подставляйте вместо расхода."
      }
    ]
  },
  "en": {
    "longDescription": "Sum each service’s consumption for the selected month times its unit tariff, then add fixed charges. Every line needs a name, usage and tariff: the last two numbers are usage and price, and preceding text is the name. Enter period consumption, meaning the difference of meter readings, rather than a cumulative reading. Variable and fixed parts remain separate so unit errors or duplicate fees are visible.",
    "howToUse": [
      "Enter “Name usage tariff”; decimal dot or comma is accepted, but do not use thousands separators.",
      "The last two numbers on the line are the usage and the price per unit.",
      "Put charges without a meter into the fixed field.",
      "Compare the metered part with the fixed part in the result."
    ],
    "howItWorks": "Each nonblank line needs a service name and two numbers: usage u and tariff p. The last two tokens are read; everything before them is the name. Spaces or semicolons separate tokens; a dot or comma inside a number is decimal, with no thousands separators. Metered sum=Σu×p; total adds fixed charges. Year=12 identical months; service percentages are not rendered. Use one currency and one tax basis throughout.",
    "example": "Electricity, water and gas at 2,023 plus 1,200 of fixed charges come to 3,223 a month. Line “water 0 6” with fixed charge 0 gives 0.00 for both month and year.",
    "faq": [
      {
        "q": "What counts as a fixed charge?",
        "a": "Anything billed the same every month regardless of use: building maintenance, waste collection, the entryphone, a rented meter. They have no usage and no tariff, so they do not belong in the table."
      },
      {
        "q": "Which units should usage be in?",
        "a": "Whatever the tariff is per. If electricity is priced per kWh, enter kilowatt-hours; if water is priced per cubic metre, enter cubic metres."
      },
      {
        "q": "How do I enter a two-rate electricity meter?",
        "a": "As two lines — day and night — each with its own usage and tariff. The table will show which of the two costs more."
      },
      {
        "q": "Why is the yearly figure just twelve times the month?",
        "a": "Because it is a projection of this month, not a forecast. Heating and air conditioning make real years uneven; the calculator does not pretend to know your season."
      },
      {
        "q": "Is this the same as the electricity usage calculator?",
        "a": "The other tool estimates energy from power and hours. This one uses known period consumption—the difference of readings—and its tariff. Do not substitute the cumulative meter reading for usage."
      }
    ],
    "disclaimer": "Results are reference estimates. Verify the inputs before making important decisions."
  },
  "uk": {
    "longDescription": "Підсумовує витрату за обраний місяць для кожної послуги та її ціну за одиницю, потім додає постійні нарахування. Рядок обов’язково має назву, витрату й тариф; останні два числа є витратою та ціною, а весь попередній текст — назвою. Вводьте витрату періоду, тобто різницю показань, не накопичений лічильник. Змінна й постійна частини видимі окремо, щоб знайти помилку одиниць або повторний збір.",
    "howToUse": [
      "Введіть рядок «Назва витрата тариф»; десяткова крапка й кома допустимі, роздільники тисяч не використовуйте.",
      "Останні два числа рядка це витрата і ціна за одиницю.",
      "Нарахування без лічильника впишіть у поле постійної частини.",
      "Порівняйте лічильникову і постійну частини в результаті."
    ],
    "howItWorks": "Кожен непорожній рядок містить назву послуги та два числа: витрату u й тариф p. Читаються останні два токени; усе перед ними — назва. Пробіл чи крапка з комою розділяє токени; крапка й кома всередині числа — десяткові, без розділювачів тисяч. Змінна сума Σu×p, підсумок додає постійну частину. Рік=12 однакових місяців; частки послуг не виводяться. Валюта й податкова база всюди однакові.",
    "example": "Електрика, вода і газ на 2 023 плюс 1 200 постійних дають 3 223 на місяць. Рядок «вода 0 6» і постійна частина 0 дають 0,00 за місяць і рік.",
    "faq": [
      {
        "q": "Що вважати постійним нарахуванням?",
        "a": "Усе, що виставляють однаково щомісяця незалежно від споживання: утримання будинку, вивезення сміття, домофон, оренда лічильника. У них немає ні витрати, ні тарифу, тож у таблиці їм не місце."
      },
      {
        "q": "У яких одиницях вводити витрату?",
        "a": "У тих, за які встановлено тариф. Якщо електрика за кВт·год — вводьте кіловат-години; якщо вода за кубометр — кубометри."
      },
      {
        "q": "Як ввести двозонний лічильник електрики?",
        "a": "Двома рядками — день і ніч — кожен зі своєю витратою і тарифом. У таблиці буде видно, який із них дорожчий."
      },
      {
        "q": "Чому річна сума це просто дванадцять місяців?",
        "a": "Бо це проєкція цього місяця, а не прогноз. Опалення і кондиціонування роблять реальний рік нерівним, і калькулятор не вдає, ніби знає ваш сезон."
      },
      {
        "q": "Це те саме, що калькулятор витрати електроенергії?",
        "a": "Той оцінює енергію з потужності й годин. Цей бере відому витрату періоду — різницю показань — і тариф. Не підставляйте накопичений показник замість споживання."
      }
    ],
    "disclaimer": "Результати є орієнтовними оцінками. Перед важливими рішеннями перевіряйте вихідні дані."
  },
  "de": {
    "longDescription": "Eine Monatsabrechnung verbindet verbrauchsabhängige Positionen und feste Gebühren. Jede Zeile braucht Name, Verbrauch und Tarif; die letzten zwei Zahlen sind Verbrauch und Preis, der vorherige Text ist der Name. Verbrauch ist die Differenz der Zählerstände, nicht der kumulative Stand. Der Rechner multipliziert jede Position, addiert Festbeträge und zeigt beide Teile getrennt, ohne Steuer oder Prozentsätze selbst hinzuzufügen.",
    "howToUse": [
      "Je Zeile „Name Verbrauch Tarif“ eingeben; Dezimalpunkt oder Komma sind zulässig, keine Tausendertrennzeichen.",
      "Verwende für jede Sparte eine eigene Zeile — Strom, Wasser, Gas.",
      "Trage die Summe der festen Grundgebühren in das dafür vorgesehene Feld ein.",
      "Lies die Monatssumme ab und prüfe in der Tabelle, welche Position am stärksten wiegt."
    ],
    "howItWorks": "Jede nichtleere Zeile braucht Bezeichnung und zwei Zahlen: Verbrauch u und Tarif p. Die letzten zwei Tokens werden gelesen, davor steht der Name. Leerzeichen oder Semikolon trennen Tokens; Punkt oder Komma innerhalb einer Zahl sind Dezimalzeichen, ohne Tausendertrennzeichen. Verbrauchssumme=Σu×p, Gesamtsumme plus Festbetrag. Jahr=12 gleiche Monate; Positionsanteile werden nicht ausgegeben. Einheitliche Währung und Steuerbasis verwenden.",
    "example": "Zeilen „Strom 250 0,32“, „Wasser 6 4,10“ und „Gas 80 0,11“ ergeben 80,00+24,60+8,80=113,40. Mit 18,50 Festgebühren sind das 131,90 im Monat und 1582,80 als zwölfmal derselbe Monat. Grenze: „Stand 0 2“ und 0 Festgebühren ergeben 0,00;0 Verbrauch ist erlaubt.",
    "faq": [
      {
        "q": "Wie ermittle ich den Verbrauch aus zwei Zählerständen?",
        "a": "Der Verbrauch ist der aktuelle Zählerstand minus dem vorherigen. Trage in die Zeile diese Differenz ein, nicht den abgelesenen Stand selbst."
      },
      {
        "q": "Gehört die Grundgebühr in die Zeilen?",
        "a": "Nein. Sie fällt unabhängig vom Verbrauch an und gehört in das eigene Feld. In einer Zeile mit Tarif würde sie fälschlich mit dem Verbrauch multipliziert."
      },
      {
        "q": "Kann ich mit gemischten Einheiten rechnen?",
        "a": "Ja, solange Verbrauch und Tarif in einer Zeile zusammenpassen — Kilowattstunden mit dem Preis je Kilowattstunde, Kubikmeter mit dem Preis je Kubikmeter."
      },
      {
        "q": "Ist die Umsatzsteuer enthalten?",
        "a": "Das hängt von den eingetragenen Tarifen ab. Trägst du Bruttopreise ein, ist die Summe brutto; bei Nettopreisen ist sie netto."
      }
    ],
    "disclaimer": "Die Ergebnisse sind Orientierungswerte. Prüfe die Eingaben vor wichtigen Entscheidungen."
  },
  "es": {
    "longDescription": "Suma el consumo del mes elegido de cada servicio por su tarifa unitaria y añade cargos fijos. Cada línea necesita nombre, consumo y tarifa: las dos últimas cifras son consumo y precio, y el texto anterior es el nombre. Introduce consumo del periodo, diferencia entre lecturas, no una lectura acumulada. Las partes variable y fija quedan separadas para detectar errores de unidades o cargos duplicados.",
    "howToUse": [
      "Introduce «Nombre consumo tarifa»; se admite punto o coma decimal, sin separadores de miles.",
      "Los dos últimos números de la línea son el consumo y el precio por unidad.",
      "Los cargos sin contador van en el campo de cargos fijos.",
      "Compara en el resultado la parte medida con la parte fija."
    ],
    "howItWorks": "Cada línea no vacía necesita nombre y dos números: consumo u y tarifa p. Se leen los dos últimos tokens; lo anterior es el nombre. Espacios o punto y coma separan tokens; punto o coma dentro del número son decimales, sin separadores de miles. Parte variable=Σu×p; total añade cargos fijos. Año=12 meses iguales; no se muestran porcentajes por suministro. Usa la misma moneda y base fiscal en todo.",
    "example": "Luz, agua y gas por 2.023 más 1.200 de cargos fijos suman 3.223 al mes. Línea «agua 0 6» y fijo 0 dan 0,00 al mes y al año.",
    "faq": [
      {
        "q": "¿Qué cuenta como cargo fijo?",
        "a": "Todo lo que se factura igual cada mes independientemente del consumo: mantenimiento del edificio, recogida de basuras, el portero automático, el alquiler del contador. No tienen consumo ni tarifa, así que no van en la tabla."
      },
      {
        "q": "¿En qué unidades va el consumo?",
        "a": "En aquellas a las que se refiera la tarifa. Si la luz se cobra por kWh, escribe kilovatios hora; si el agua se cobra por metro cúbico, escribe metros cúbicos."
      },
      {
        "q": "¿Cómo se introduce un contador de luz con dos tarifas?",
        "a": "Como dos líneas —punta y valle—, cada una con su consumo y su tarifa. La tabla mostrará cuál de las dos sale más cara."
      },
      {
        "q": "¿Por qué la cifra anual es doce veces la del mes?",
        "a": "Porque es una proyección de este mes, no una previsión. La calefacción y el aire acondicionado hacen que los años reales sean desiguales; la calculadora no presume de conocer tu estación."
      },
      {
        "q": "¿Es lo mismo que la calculadora de consumo eléctrico?",
        "a": "La otra herramienta estima energía con potencia y horas. Esta usa consumo conocido del periodo, diferencia de lecturas, y tarifa. No sustituyas consumo por lectura acumulada."
      }
    ],
    "disclaimer": "Los resultados son estimaciones orientativas. Verifica los datos de partida antes de tomar decisiones importantes."
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', ContractContent>;
