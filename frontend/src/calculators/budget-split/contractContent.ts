import type { CalculatorDef } from '../../lib/types';
type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Берёт одну сумму и делит её между людьми — поровну или пропорционально тому, кто сколько зарабатывает. Каждая строка содержит имя и доход: последнее число читается как доход, всё перед ним — имя, поэтому «Иван Петров 90000» допустимо. Денежные доли распределяются в целых копейках методом наибольших остатков: даже пять копеек на десятерых не превращают чей-либо взнос в отрицательный. Таблица сверяет сумму всех взносов с округлённым общим бюджетом.",
    "howToUse": [
      "Введите сумму, которую нужно поделить.",
      "Перечислите участников по одному в строке: имя и доход. Доход пишите одним числом без пробелов между цифрами.",
      "Выберите деление поровну или пропорционально доходу.",
      "Сверьтесь с таблицей: взносы сходятся с суммой точно."
    ],
    "howItWorks": "Поровну: идеальная доля = сумма / число участников. По доходу: доля = сумма × доход участника / суммарный доход. Сначала общая сумма округляется до копеек; идеальные доли в копейках округляются вниз. Оставшиеся копейки по одной получают участники с наибольшими дробными остатками; при равенстве действует порядок строк. Так сумма сохраняется без отрицательных взносов.",
    "example": "60 000 при доходах 80 000 и 120 000 дают 24 000 и 36 000.",
    "faq": [
      {
        "q": "Кому достаётся остаток округления?",
        "a": "Идеальные доли в копейках округляются вниз, затем оставшиеся копейки получают наибольшие дробные остатки. При равенстве действует порядок строк. Сто рублей на троих дают 33,34; 33,33; 33,33. Пять копеек на десятерых дают первым пяти по одной, остальным ноль."
      },
      {
        "q": "Можно делить поровну, не вводя доходы?",
        "a": "Введите любое неотрицательное число как доход: в режиме «поровну» вес дохода не используется, но его числовое значение показывается в таблице. Формат строки остаётся «имя число»."
      },
      {
        "q": "Что если у кого-то дохода нет?",
        "a": "В режиме «поровну» это нормально. В пропорциональном режиме человек с нулевым доходом получит нулевую долю, а если дохода нет ни у кого — расчёт остановится, а не станет делить на ноль."
      },
      {
        "q": "Могут ли имена содержать пробелы?",
        "a": "Да. Доходом читается только последнее число строки, всё перед ним — имя, поэтому «Иван Петров 90000» разберётся верно."
      },
      {
        "q": "Это то же самое, что бюджет 50/30/20?",
        "a": "Нет. Тот делит доход одного человека между статьями расходов. Этот делит одну сумму между несколькими людьми."
      }
    ],
    "disclaimer": "Это распределение общей суммы, а не определение справедливых обязанностей. Сумма округляется до сотой части денежной единицы и должна содержать хотя бы одну такую часть; число этих частей должно быть точным безопасным целым. Доход в каждой строке — одно число без разделителей тысяч."
  },
  "en": {
    "longDescription": "Takes one amount and divides it between people equally or in proportion to income. Each line contains a name and an income: the last number is income and everything before it is the name, so names may contain spaces. Whole cents are allocated by largest fractional remainders: even five cents split ten ways cannot produce a negative contribution. The table checks all contributions against the rounded total budget.",
    "howToUse": [
      "Enter the amount you need to split.",
      "List the participants one per line: a name and an income. Write each income as one number without spaces between digits.",
      "Choose whether to split equally or in proportion to income.",
      "Check the table: the contributions add up to the amount exactly."
    ],
    "howItWorks": "Equal split: the ideal share is the total divided by the participant count. Income split: total × individual income / combined income. Round the total to cents, then round each ideal share of cents down. Distribute the remaining cents one at a time to the largest fractional remainders; ties follow line order. This preserves the total without negative contributions.",
    "example": "60,000 split between incomes of 80,000 and 120,000 comes to 24,000 and 36,000.",
    "faq": [
      {
        "q": "Who receives the rounding remainder?",
        "a": "Round ideal shares of cents down, then give the remaining cents to the largest fractional remainders. Ties use line order. A hundred split three ways gives 33.34, 33.33 and 33.33; five cents split ten ways gives the first five one cent each and the others zero."
      },
      {
        "q": "Can I split equally without entering incomes?",
        "a": "Enter any non-negative income number: equal mode ignores its weight but still displays the numerical income in the table. The line format remains name followed by one number."
      },
      {
        "q": "What if someone earns nothing?",
        "a": "In equal mode that is fine. In proportional mode a person with zero income gets a zero share, and if everyone earns nothing the calculation stops rather than dividing by zero."
      },
      {
        "q": "Can names contain spaces?",
        "a": "Yes. Only the last number on the line is read as the income; everything before it is the name, so «John Smith 90000» parses correctly."
      },
      {
        "q": "Is this the same as a 50/30/20 budget?",
        "a": "No. That one splits one person's income between categories of spending. This one splits one amount between several people."
      }
    ],
    "disclaimer": "This allocates a total rather than deciding fair obligations. The total is rounded to one hundredth of the currency unit and must contain at least one such unit; its count must be an exactly representable safe integer. Each income is one number without thousands separators."
  },
  "uk": {
    "longDescription": "Бере одну суму й ділить її між людьми порівну або пропорційно доходам. Кожен рядок містить ім’я та дохід: останнє число є доходом, усе перед ним — ім’ям, тож пробіли в імені допустимі. Цілі копійки розподіляються за найбільшими дробовими залишками: навіть п’ять копійок на десятьох не дають від’ємного внеску. Таблиця звіряє суму внесків із округленим спільним бюджетом.",
    "howToUse": [
      "Введіть суму, яку потрібно поділити.",
      "Перелічіть учасників по одному в рядку: ім'я і дохід. Дохід пишіть одним числом без пробілів між цифрами.",
      "Оберіть поділ порівну або пропорційно доходу.",
      "Перевірте таблицю: внески сходяться з сумою точно."
    ],
    "howItWorks": "Порівну: ідеальна частка = сума / кількість учасників. За доходом: сума × дохід учасника / сумарний дохід. Спершу загальна сума округлюється до копійок, а ідеальні частки в копійках — униз. Решту копійок по одній отримують найбільші дробові залишки; за рівності діє порядок рядків. Сума зберігається без від’ємних внесків.",
    "example": "60 000 між доходами 80 000 і 120 000 дають 24 000 і 36 000.",
    "faq": [
      {
        "q": "Кому дістається залишок округлення?",
        "a": "Ідеальні частки в копійках округлюються вниз, решту отримують найбільші дробові залишки. За рівності діє порядок рядків. Сто на трьох дають 33,34; 33,33; 33,33. П’ять копійок на десятьох — першим п’ятьом по одній, решті нуль."
      },
      {
        "q": "Чи можна ділити порівну, не вводячи доходи?",
        "a": "Введіть будь-яке невід’ємне число доходу: режим «порівну» не використовує його вагу, але показує числовий дохід у таблиці. Формат рядка лишається «ім’я число»."
      },
      {
        "q": "Що як хтось не має доходу?",
        "a": "У режимі «порівну» це нормально. У пропорційному режимі людина з нульовим доходом отримає нульову частку, а якщо доходу немає ні в кого — розрахунок зупиниться, а не ділитиме на нуль."
      },
      {
        "q": "Чи можуть імена містити пробіли?",
        "a": "Так. Як дохід читається лише останнє число рядка, все перед ним це ім'я, тож «Іван Петров 90000» розбереться правильно."
      },
      {
        "q": "Це те саме, що бюджет 50/30/20?",
        "a": "Ні. Той ділить дохід однієї людини між статтями витрат. Цей ділить одну суму між кількома людьми."
      }
    ],
    "disclaimer": "Це розподіл загальної суми, а не визначення справедливих зобов’язань. Сума округлюється до сотої частини грошової одиниці й має містити хоча б одну таку частину; їхня кількість має бути точним безпечним цілим. Дохід у рядку — одне число без розділювачів тисяч."
  },
  "de": {
    "longDescription": "Teilt einen Gesamtbetrag gleichmäßig oder im Verhältnis der Einkommen auf Personen auf. Jede Zeile enthält Namen und Einkommen: die letzte Zahl ist das Einkommen, davor steht der Name, auch mit Leerzeichen. Ganze Cent werden nach den größten Nachkommaresten verteilt; selbst fünf Cent für zehn Personen führen nicht zu negativen Beiträgen. Die Tabelle vergleicht alle Beiträge mit dem gerundeten Gesamtbudget.",
    "howToUse": [
      "Trage den Betrag ein, den du teilen musst.",
      "Liste die Beteiligten je Zeile auf: ein Name und ein Einkommen. Schreibe Einkommen als eine Zahl ohne Leerzeichen zwischen Ziffern.",
      "Wähle, ob zu gleichen Teilen oder im Verhältnis der Einkommen geteilt wird.",
      "Prüfe die Tabelle: die Beiträge ergeben genau den Betrag."
    ],
    "howItWorks": "Gleich verteilt ist der ideale Anteil der Gesamtbetrag geteilt durch die Zahl der Beteiligten; nach Einkommen ist er Gesamtbetrag × individuelles Einkommen / Gesamteinkommen. Der Gesamtbetrag wird auf Cent gerundet, die idealen Centanteile werden abgerundet. Übrige Cent gehen einzeln an die größten Nachkommareste, bei Gleichstand in Zeilenreihenfolge. So bleiben alle Beiträge nicht negativ und ergeben die Summe.",
    "example": "1200 € geteilt zwischen Einkommen von 2400 € und 3600 € ergeben 480 € und 720 €.",
    "faq": [
      {
        "q": "Wer erhält den Rundungsrest?",
        "a": "Ideale Centanteile werden abgerundet; übrige Cent gehen an die größten Nachkommareste, bei Gleichstand in Zeilenreihenfolge. Hundert für drei Personen ergeben 33,34; 33,33; 33,33. Fünf Cent für zehn Personen geben den ersten fünf je einen Cent, den anderen null."
      },
      {
        "q": "Kann ich zu gleichen Teilen teilen, ohne Einkommen einzutragen?",
        "a": "Trage ein nicht negatives Einkommen ein: im gleichmäßigen Modus wird dessen Gewicht nicht verwendet, die Zahl steht aber in der Tabelle. Das Format bleibt Name gefolgt von einer Zahl."
      },
      {
        "q": "Was, wenn jemand nichts verdient?",
        "a": "Im gleichmäßigen Modus ist das in Ordnung. Im anteiligen Modus bekommt eine Person ohne Einkommen einen Anteil von null, und verdient niemand etwas, hält die Rechnung an, statt durch null zu teilen."
      },
      {
        "q": "Dürfen Namen Leerzeichen enthalten?",
        "a": "Ja. Nur die letzte Zahl der Zeile wird als Einkommen gelesen; alles davor ist der Name, „Anna Maria Schmidt 3200“ wird also richtig verstanden."
      },
      {
        "q": "Ist das dasselbe wie ein 50-30-20-Budget?",
        "a": "Nein. Jenes teilt das Einkommen einer Person zwischen Ausgabenkategorien auf. Dieses teilt einen Betrag zwischen mehreren Personen."
      }
    ],
    "disclaimer": "Hier wird eine Summe verteilt, keine gerechte Verpflichtung festgelegt. Der Betrag wird auf ein Hundertstel der Währungseinheit gerundet und muss mindestens eines enthalten; die Anzahl muss eine exakt darstellbare sichere ganze Zahl sein. Einkommen je Zeile ist eine Zahl ohne Tausendertrennzeichen."
  },
  "es": {
    "longDescription": "Divide un importe entre personas por igual o en proporción a sus ingresos. Cada línea contiene nombre e ingresos: el último número es el ingreso y todo lo anterior el nombre, que puede llevar espacios. Los céntimos enteros se asignan a los mayores restos decimales: cinco céntimos entre diez personas no generan ninguna aportación negativa. La tabla compara la suma de las aportaciones con el presupuesto total redondeado.",
    "howToUse": [
      "Introduce el importe que necesitas repartir.",
      "Enumera a los participantes, uno por línea: un nombre y unos ingresos. Escribe cada ingreso como un número sin espacios entre cifras.",
      "Elige si repartir a partes iguales o en proporción a los ingresos.",
      "Comprueba la tabla: las aportaciones suman el importe exactamente."
    ],
    "howItWorks": "A partes iguales, la cuota ideal es el total dividido entre participantes; según ingresos, total × ingresos individuales / ingresos conjuntos. Se redondea el total a céntimos y cada cuota ideal en céntimos hacia abajo. Los céntimos pendientes se asignan uno a uno a los mayores restos decimales; los empates siguen el orden de las líneas. Se conserva el total sin aportaciones negativas.",
    "example": "600 repartidos entre unos ingresos de 800 y 1200 salen a 240 y 360.",
    "faq": [
      {
        "q": "¿Quién recibe el resto del redondeo?",
        "a": "Se redondean hacia abajo las cuotas ideales en céntimos y se asignan los restantes a los mayores restos decimales. Los empates siguen el orden de las líneas. Cien entre tres da 33,34; 33,33; 33,33. Cinco céntimos entre diez da uno a cada una de las primeras cinco personas y cero a las otras."
      },
      {
        "q": "¿Puedo repartir a partes iguales sin introducir ingresos?",
        "a": "Introduce un ingreso no negativo: el modo igual ignora su peso, pero muestra ese valor numérico en la tabla. El formato sigue siendo nombre y un número."
      },
      {
        "q": "¿Y si alguien no gana nada?",
        "a": "En el modo a partes iguales no hay problema. En el modo proporcional, una persona con ingresos cero recibe una parte cero, y si nadie gana nada el cálculo se detiene en lugar de dividir entre cero."
      },
      {
        "q": "¿Los nombres pueden llevar espacios?",
        "a": "Sí. Solo el último número de la línea se lee como los ingresos; todo lo anterior es el nombre, así que «Juan Pérez 90000» se interpreta bien."
      },
      {
        "q": "¿Es lo mismo que un presupuesto 50/30/20?",
        "a": "No. Aquel reparte los ingresos de una persona entre categorías de gasto. Este reparte un importe entre varias personas."
      }
    ],
    "disclaimer": "Se reparte un total, sin decidir obligaciones justas. El total se redondea a una centésima de la moneda y debe incluir al menos una; su cantidad debe ser un entero seguro representable exactamente. Cada ingreso es un número sin separadores de miles."
  }
};
