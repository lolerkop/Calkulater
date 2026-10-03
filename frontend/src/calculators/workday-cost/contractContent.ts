import type { CalculatorDef } from '../../lib/types';

type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
// Starts from the five actual145 public bodies; bounded model corrections
// and independently checked examples are authored per subject and locale.
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Переводит месячный оклад в стоимость дня и часа — величину, которой удобно мерить и отгул, и переработку, и время, потраченное на дорогу. Число рабочих дней и часов в дне остаются обычными полями со значениями по умолчанию: в разных месяцах и графиках они разные, поэтому производственный календарь здесь не зашит и ничего не решает за вас.",
    "howToUse": [
      "Введите месячный оклад.",
      "Укажите число рабочих дней в этом месяце и длину смены.",
      "Прочитайте стоимость дня и часа."
    ],
    "howItWorks": "Оклад делится на число рабочих дней — получается стоимость дня; она же, делённая на длину смены, даёт стоимость часа. Оба числа считаются от той цифры, которую вы ввели: калькулятор не подставляет норму за месяц сам. Дни — целое число от 1 до 31, часы смены могут быть дробными в пределах более 0 до 24. Месячное время = дни × часы без округления до целого. Это среднее распределение введённого оклада по выбранным дням, а не расчёт удержаний, отгула, сверхурочных или полной стоимости сотрудника для работодателя.",
    "example": "Оклад 100 000 при 21 рабочем дне и восьмичасовой смене даёт 4 761,90 за день и 595,24 за час. При окладе 1575, 21 дне и смене 7,5 часа получается 75 за день, 10 за час и 157,5 часа за месяц. Дробное время сохраняется; 21,5 рабочего дня не принимается.",
    "faq": [
      {
        "q": "Почему число рабочих дней нужно вводить вручную?",
        "a": "Потому что оно меняется от месяца к месяцу и от графика к графику. Подставить одно число за все случаи означало бы выдать удобное допущение за факт."
      },
      {
        "q": "Оклад брать до вычета налога или после?",
        "a": "Как удобнее считать. Расчёт линейный, поэтому стоимость дня получится в том же виде, в каком введён оклад — «грязная» или «на руки»."
      },
      {
        "q": "Подходит ли это для расчёта переработки?",
        "a": "Только как выбранная средняя стоимость часа. Юридическая база оплаты сверхурочных может отличаться от этого среднего, а коэффициенты, пороги и право на доплату нужно определить отдельно."
      },
      {
        "q": "Как учесть отпуск и больничные?",
        "a": "Для оценки времени можно распределить ту же сумму по фактически выбранным дням: меньше дней даст более высокое среднее. Но это не правило расчёта оклада, отпускных или больничных; если выплата тоже меняется, введите её отдельно."
      }
    ],
    "disclaimer": "Средняя стоимость времени использует введённый оклад и выбранный график. Это не зарплатное начисление, оплата отсутствия или полные расходы работодателя; налоги и взносы не добавляются."
  },
  "en": {
    "longDescription": "Turns a monthly salary into the price of a day and of an hour — a figure that makes a day off, an hour of overtime and the daily commute all comparable. The number of working days and the length of a shift stay ordinary fields with sensible defaults: they differ between months and between schedules, so no working calendar is baked in to decide for you.",
    "howToUse": [
      "Enter the monthly salary.",
      "Give the number of working days this month and the shift length.",
      "Read the cost of a day and of an hour."
    ],
    "howItWorks": "The salary is divided by the number of working days to give the cost of a day; dividing that by the shift length gives the cost of an hour. Both follow the figures you entered — no monthly norm is substituted behind your back. Days are a whole number from 1 to 31; shift hours may be fractional above 0 and up to 24. Monthly hours = days × hours without whole-hour rounding. This averages the entered salary across chosen days; it does not calculate deductions, time-off pay, overtime or the employer total cost.",
    "example": "A salary of 100 000 across 21 working days of eight hours gives 4 761.90 per day and 595.24 per hour. Pay 1575, 21 days and 7.5-hour shifts give 75 per day, 10 per hour and 157.5 monthly hours. Fractional time is preserved; 21.5 working days is rejected.",
    "faq": [
      {
        "q": "Why must the number of working days be entered by hand?",
        "a": "Because it changes from month to month and from schedule to schedule. Fixing one number for every case would present a convenient assumption as a fact."
      },
      {
        "q": "Gross or net salary?",
        "a": "Whichever you prefer to reason about. The calculation is linear, so the cost of a day comes back in the same terms as the salary you entered."
      },
      {
        "q": "Is this suitable for costing overtime?",
        "a": "Only as the chosen average hourly cost. The legal overtime-pay base may differ from this average; multipliers, thresholds and entitlement need separate determination."
      },
      {
        "q": "How do I account for holidays and sick leave?",
        "a": "For a time-cost estimate, the same amount can be spread over the chosen actual days: fewer days give a higher average. This is not a payroll, holiday-pay or sick-pay rule. If the payment also changes, enter that amount separately."
      }
    ],
    "disclaimer": "Average time cost uses the entered salary and chosen schedule. It is not payroll, absence pay or total employer cost; taxes and contributions are not added."
  },
  "uk": {
    "longDescription": "Вартість робочого дня ділить оклад на кількість робочих днів у місяці, а вартість години — ще й на тривалість зміни. Це базове число для оцінки будь-якої витрати часу: наскільки дорого обходиться день простою, зустріч чи поїздка.",
    "howToUse": [
      "Введіть місячний оклад.",
      "Введіть кількість робочих днів у місяці.",
      "Задайте тривалість зміни в годинах."
    ],
    "howItWorks": "Оклад ділиться на кількість робочих днів — виходить вартість дня; вона ж, поділена на тривалість зміни, дає вартість години. Кількість робочих днів береться фактична для конкретного місяця, а не усереднена. Дні — ціле число від 1 до 31, години зміни можуть бути дробовими понад 0 і до 24. Місячний час = дні × години без округлення до цілої години. Це середній розподіл введеного окладу за обраними днями, не розрахунок утримань, відгулу, надурочних чи повної вартості працівника для роботодавця.",
    "example": "Оклад 100 000 ₴ за 21 робочого дня й восьмигодинної зміни дає 4761,90 ₴ за день і 595,24 ₴ за годину. За окладу 1575, 21 дня та зміни 7,5 години виходить 75 за день, 10 за годину й 157,5 години за місяць. Дробовий час зберігається; 21,5 робочого дня не приймається.",
    "faq": [
      {
        "q": "Навіщо знати вартість години?",
        "a": "Вона переводить час у вибрану грошову базу. Наприклад, тригодинна зустріч чотирьох людей становить 12 людино-годин, а не один восьмигодинний день. Вартість для людей з різними ставками потрібно підсумовувати окремо."
      },
      {
        "q": "Чи це справжня вартість для компанії?",
        "a": "Ні. Це розподіл введеної зарплати, нарахованої або чистої. Внески роботодавця, обладнання й накладні витрати тут не додаються; універсального множника 1,5 модель не встановлює."
      },
      {
        "q": "Скільки робочих днів брати?",
        "a": "Число для обраного місяця й графіка, ціле від 1 до 31. Значення 21 є лише початковим прикладом; інший календар або режим може дати інше число днів. Автоматичного календаря тут немає."
      },
      {
        "q": "Чи враховано відпустку?",
        "a": "Окремо задайте дні та суму для потрібної оцінки. Менше фактичних днів за тієї самої суми підвищує середній показник, але не визначає належну виплату відпускних, лікарняних чи утримання зарплати."
      }
    ],
    "disclaimer": "Середня вартість часу бере введений оклад і обраний графік. Це не зарплатне нарахування, оплата відсутності чи повні витрати роботодавця; податки та внески не додаються."
  },
  "de": {
    "longDescription": "Macht aus einem Monatsgehalt den Preis eines Tages und einer Stunde — eine Zahl, die einen freien Tag, eine Überstunde und den täglichen Arbeitsweg vergleichbar macht. Die Zahl der Arbeitstage und die Länge einer Schicht bleiben gewöhnliche Felder mit sinnvollen Vorgaben: beide unterscheiden sich von Monat zu Monat und von Modell zu Modell, deshalb ist kein Arbeitskalender fest eingebaut, der für dich entscheidet.",
    "howToUse": [
      "Trage das Monatsgehalt ein.",
      "Gib die Zahl der Arbeitstage in diesem Monat und die Länge der Schicht an.",
      "Lies den Wert eines Tages und einer Stunde ab."
    ],
    "howItWorks": "Das Gehalt wird durch die Zahl der Arbeitstage geteilt und ergibt den Wert eines Tages; dieser geteilt durch die Länge der Schicht ergibt den Wert einer Stunde. Beides folgt deinen Eingaben — es wird keine Monatsnorm hinter deinem Rücken eingesetzt. Tage sind ganzzahlig von 1 bis 31; Schichtstunden dürfen gebrochen sein, über 0 bis 24. Monatsstunden = Tage × Stunden ohne Ganzstundenrundung. Dies verteilt das eingegebene Gehalt im Mittel auf gewählte Tage; Abzüge, Freizeitausgleich, Überstunden und gesamte Arbeitgeberkosten werden nicht berechnet.",
    "example": "Ein Gehalt von 3600 € auf 21 Arbeitstage zu acht Stunden ergibt 171,43 € je Tag und 21,43 € je Stunde. Bei Gehalt 1575, 21 Tagen und 7,5-Stunden-Schichten ergeben sich 75 je Tag, 10 je Stunde und 157,5 Monatsstunden. Gebrochene Zeit bleibt erhalten; 21,5 Arbeitstage werden abgelehnt.",
    "faq": [
      {
        "q": "Warum muss die Zahl der Arbeitstage von Hand eingetragen werden?",
        "a": "Weil sie sich von Monat zu Monat und von Arbeitszeitmodell zu Arbeitszeitmodell ändert. Eine feste Zahl für alle Fälle gäbe eine bequeme Annahme als Tatsache aus."
      },
      {
        "q": "Brutto- oder Nettogehalt?",
        "a": "Was immer dir zum Nachdenken lieber ist. Die Rechnung ist linear, der Wert eines Tages kommt also in derselben Größe zurück wie das eingetragene Gehalt."
      },
      {
        "q": "Taugt das zur Bewertung von Überstunden?",
        "a": "Nur als gewählter durchschnittlicher Stundenwert. Die rechtliche Basis der Überstundenvergütung kann davon abweichen; Faktoren, Schwellen und Anspruch sind gesondert zu bestimmen."
      },
      {
        "q": "Wie berücksichtige ich Feiertage und Krankheit?",
        "a": "Für eine Zeitkostenschätzung kann derselbe Betrag auf gewählte tatsächliche Tage verteilt werden: weniger Tage erhöhen den Durchschnitt. Das ist keine Regel für Gehalt, Urlaubs- oder Krankengeld. Ändert sich die Zahlung, ist dieser Betrag getrennt einzugeben."
      }
    ],
    "disclaimer": "Der durchschnittliche Zeitwert nutzt Gehalt und gewählten Plan. Das ist keine Lohnabrechnung, Abwesenheitsvergütung oder gesamte Arbeitgeberkosten; Steuern und Beiträge werden nicht addiert."
  },
  "es": {
    "longDescription": "Convierte un salario mensual en el precio de un día y de una hora, una cifra que hace comparables un día libre, una hora extra y el trayecto diario al trabajo. El número de días laborables y la duración de la jornada siguen siendo campos corrientes con valores por defecto razonables: cambian de un mes a otro y de una jornada a otra, así que aquí no hay ningún calendario laboral incorporado que decida por ti.",
    "howToUse": [
      "Introduce el salario mensual.",
      "Indica el número de días laborables de este mes y la duración de la jornada.",
      "Consulta el coste de un día y de una hora."
    ],
    "howItWorks": "El salario se divide entre el número de días laborables para dar el coste de un día; dividir eso entre la duración de la jornada da el coste de una hora. Ambos siguen las cifras que has introducido: no se sustituye ninguna jornada mensual a tus espaldas. Los días son enteros entre 1 y 31; las horas pueden ser fraccionarias, mayores que 0 y hasta 24. Horas mensuales = días × horas, sin redondeo entero. Se reparte el salario introducido entre días elegidos; no se calculan deducciones, permisos, horas extra ni coste total empresarial.",
    "example": "Un salario de 1000 en 21 días laborables de ocho horas da 47,62 por día y 5,95 por hora. Con salario 1575, 21 días y jornadas de 7,5 horas, son 75 al día, 10 por hora y 157,5 horas mensuales. Se conserva el tiempo fraccionario; se rechazan 21,5 días laborables.",
    "faq": [
      {
        "q": "¿Por qué hay que introducir a mano el número de días laborables?",
        "a": "Porque cambia de un mes a otro y de una jornada a otra. Fijar un número para todos los casos presentaría una suposición cómoda como un hecho."
      },
      {
        "q": "¿Salario bruto o neto?",
        "a": "El que prefieras usar para razonar. El cálculo es lineal, así que el coste de un día vuelve en los mismos términos que el salario que introdujiste."
      },
      {
        "q": "¿Sirve para valorar horas extra?",
        "a": "Solo como coste horario medio elegido. La base legal para horas extra puede diferir; multiplicadores, umbrales y derecho al recargo deben determinarse aparte."
      },
      {
        "q": "¿Cómo tengo en cuenta los festivos y las bajas?",
        "a": "Para valorar tiempo puedes repartir el mismo importe entre los días efectivos elegidos: menos días dan una media mayor. No es una regla de nómina, vacaciones o bajas. Si cambia el pago, introduce ese importe aparte."
      }
    ],
    "disclaimer": "El coste medio de tiempo usa salario y jornada elegidos. No es nómina, pago de ausencias ni coste empresarial total; no añade impuestos ni cotizaciones."
  }
};
