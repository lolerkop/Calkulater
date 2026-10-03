// Subject copy reviewed against the actual fields, formula and result rows.
import type { CalculatorDef } from '../../lib/types';

type ContractCopy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;

export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', ContractCopy> = {
  "ru": {
    "longDescription": "Делит годовую выручку на целое число сотрудников. Показатель зависит от отрасли, состава команды и выбранного правила подсчёта сотрудников; он не измеряет прибыль, зарплату или личный вклад человека. Месячная строка — годовой результат, делённый на 12, без сезонного графика.",
    "howToUse": [
      "Введите годовую выручку организации.",
      "Введите положительное целое число сотрудников по выбранному правилу учёта; эта форма не принимает дробные FTE.",
      "Прочитайте выручку на сотрудника; месячная строка является годовым средним, делённым на 12."
    ],
    "howItWorks": "Годовая выручка на сотрудника = годовая выручка ÷ число сотрудников. Месячное среднее = этот результат ÷ 12. Число сотрудников в этой форме — положительное целое; дробные полные эквиваленты занятости (FTE) не поддерживаются и не округляются молча.",
    "example": "Годовая выручка 12 000 000 и 20 сотрудников: 600 000 на сотрудника за год, в среднем 50 000 в месяц. Нулевая выручка даёт ноль; 2,5 сотрудника отвергается, а не округляется.",
    "faq": [
      {
        "q": "Учитывать ли частичную занятость?",
        "a": "Можно включать людей с частичной занятостью в целое число сотрудников по выбранному правилу. Дробные FTE — другая база и здесь не принимаются; не округляйте их ради прохождения проверки, это изменит показатель."
      },
      {
        "q": "Включать ли подрядчиков?",
        "a": "Это ваш выбор, но держите его одинаковым по годам, иначе динамика перестанет что-либо значить."
      },
      {
        "q": "Какое значение считать хорошим?",
        "a": "Универсального хорошего числа нет: учитывайте отрасль, маржу и правило подсчёта команды. Калькулятор делит введённые значения и не сравнивает их с отраслевыми нормативами."
      },
      {
        "q": "Зачем показан месячный показатель?",
        "a": "Это годовая выручка на сотрудника, делённая на 12. Она не учитывает сезонность и не является фактической выручкой каждого месяца, зарплатой или доступной прибылью."
      }
    ],
    "disclaimer": "Не рассчитывает прибыль, зарплату, сезонность или дробные FTE. Для сравнения периодов нужны одинаковые правила подсчёта команды."
  },
  "en": {
    "longDescription": "Divides annual revenue by a whole employee count. The ratio depends on industry, team composition and the headcount convention; it does not measure profit, wages or an individual’s contribution. The monthly row is the annual result divided by 12, without a seasonal schedule.",
    "howToUse": [
      "Enter the organisation’s annual revenue.",
      "Enter a positive whole employee count using your chosen headcount convention; this form does not accept fractional FTE.",
      "Read revenue per employee; the monthly row is the annual average divided by 12."
    ],
    "howItWorks": "Annual revenue per employee = annual revenue ÷ employee count. Monthly average = that result ÷ 12. This form requires a positive whole headcount; fractional full-time equivalents (FTE) are not supported or silently rounded.",
    "example": "Annual revenue 12,000,000 and 20 employees: 600,000 per employee per year, averaging 50,000 per month. Zero revenue gives zero; 2.5 employees is rejected rather than rounded.",
    "faq": [
      {
        "q": "Should part-time staff be counted?",
        "a": "Part-time people can be included in a whole headcount under your chosen policy. Fractional FTE use a different basis and are not accepted here; rounding them to pass validation changes the ratio."
      },
      {
        "q": "Are contractors included?",
        "a": "That is your choice, but keep it the same across years or the trend stops meaning anything."
      },
      {
        "q": "What is a good figure?",
        "a": "There is no universal good value: consider industry, margin and headcount policy. The calculator divides your inputs without industry benchmark comparisons."
      },
      {
        "q": "Why is the monthly figure shown?",
        "a": "It is annual revenue per employee divided by 12. It does not model seasonality and is not each month’s actual revenue, a wage or available profit."
      }
    ],
    "disclaimer": "Does not calculate profit, wages, seasonality or fractional FTE. Period comparisons require consistent headcount conventions."
  },
  "uk": {
    "longDescription": "Ділить річний виторг на цілу кількість працівників. Показник залежить від галузі, складу команди та правила підрахунку працівників; він не вимірює прибуток, зарплату чи особистий внесок людини. Місячний рядок — річний результат, поділений на 12, без сезонного графіка.",
    "howToUse": [
      "Введіть річний виторг організації.",
      "Введіть додатну цілу кількість працівників за обраним правилом обліку; ця форма не приймає дробові FTE.",
      "Прочитайте виторг на працівника; місячний рядок є річним середнім, поділеним на 12."
    ],
    "howItWorks": "Річний виторг на працівника = річний виторг ÷ кількість працівників. Місячне середнє = цей результат ÷ 12. Ця форма вимагає додатної цілої кількості працівників; дробові еквіваленти повної зайнятості (FTE) не підтримуються й не округлюються мовчки.",
    "example": "Річний виторг 12 000 000 і 20 працівників: 600 000 на працівника за рік, у середньому 50 000 на місяць. Нульовий виторг дає нуль; 2,5 працівника відхиляється без округлення.",
    "faq": [
      {
        "q": "Чому показник не порівнюють між галузями?",
        "a": "Галузі мають різні структури виторгу, маржі й зайнятості. Високий оборот із малою командою не обов’язково означає більшу ефективність. Порівняння потребує однакової бази й бізнес-моделі."
      },
      {
        "q": "Чи враховувати підрядників?",
        "a": "Це залежить від меж аналізу. Включайте або виключайте підрядників послідовно та зазначайте правило поруч із показником; інакше зміна способу обліку виглядатиме як зміна ефективності."
      },
      {
        "q": "Чим прибуток на співробітника кращий?",
        "a": "Прибуток враховує витрати, тому відповідає на інше питання. Виторг і прибуток на працівника корисно розглядати разом; ця форма приймає саме виторг і не віднімає витрати."
      },
      {
        "q": "Яка чисельність береться?",
        "a": "Форма використовує введене додатне ціле число, без автоматичного усереднення. Зазначайте, чи це штат на дату або інша ціла база. Якщо середня чисельність чи FTE дробові, не підміняйте їх округленим числом: потрібен інший розрахунок."
      }
    ],
    "disclaimer": "Не розраховує прибуток, зарплату, сезонність чи дробові FTE. Порівняння періодів потребує однакового правила підрахунку команди."
  },
  "de": {
    "longDescription": "Teilt den Jahresumsatz durch eine ganze Mitarbeiterzahl. Die Kennzahl hängt von Branche, Team und Zählregel ab; sie misst weder Gewinn noch Gehalt oder den Beitrag einer einzelnen Person. Die Monatszeile ist das Jahresergebnis geteilt durch 12, ohne saisonalen Verlauf.",
    "howToUse": [
      "Trage den Jahresumsatz der Organisation ein.",
      "Trage eine positive ganze Mitarbeiterzahl nach deiner gewählten Zählregel ein; dieses Formular nimmt keine gebrochenen FTE an.",
      "Lies den Umsatz pro Mitarbeiter ab; die Monatszeile ist der Jahresdurchschnitt geteilt durch 12."
    ],
    "howItWorks": "Jahresumsatz pro Mitarbeiter = Jahresumsatz ÷ Mitarbeiterzahl. Monatsdurchschnitt = dieses Ergebnis ÷ 12. Dieses Formular verlangt eine positive ganze Mitarbeiterzahl; gebrochene Vollzeitäquivalente (FTE) werden weder unterstützt noch still gerundet.",
    "example": "Jahresumsatz 12 000 000 und 20 Mitarbeiter: 600 000 pro Mitarbeiter und Jahr, im Schnitt 50 000 pro Monat. Null Umsatz ergibt null; 2,5 Mitarbeiter werden abgewiesen und nicht gerundet.",
    "faq": [
      {
        "q": "Sollen Teilzeitkräfte mitgezählt werden?",
        "a": "Teilzeitkräfte können nach deiner Zählregel zur ganzen Kopfzahl gehören. Gebrochene FTE sind eine andere Basis und werden hier nicht angenommen; Rundung zur Validierung verändert die Kennzahl."
      },
      {
        "q": "Sind freie Mitarbeiter enthalten?",
        "a": "Das entscheidest du, aber halte es über die Jahre gleich, sonst verliert der Verlauf seine Aussage."
      },
      {
        "q": "Was ist ein guter Wert?",
        "a": "Es gibt keinen universell guten Wert: Branche, Marge und Zählregel sind wichtig. Der Rechner teilt die Eingaben und vergleicht sie nicht mit Branchenstandards."
      },
      {
        "q": "Warum wird der Monatswert angezeigt?",
        "a": "Es ist der Jahresumsatz pro Mitarbeiter geteilt durch 12. Saisonverläufe werden nicht berücksichtigt; der Wert ist weder der tatsächliche Monatsumsatz noch Gehalt oder verfügbarer Gewinn."
      }
    ],
    "disclaimer": "Berechnet weder Gewinn noch Gehalt, Saisonverlauf oder gebrochene FTE. Zeitvergleiche benötigen gleiche Zählregeln."
  },
  "es": {
    "longDescription": "Divide los ingresos anuales entre una plantilla entera. El cociente depende del sector, del equipo y del criterio de recuento; no mide beneficio, salario ni contribución individual. La fila mensual divide el resultado anual entre 12, sin un calendario estacional.",
    "howToUse": [
      "Introduce los ingresos anuales de la organización.",
      "Introduce una plantilla entera positiva según el criterio elegido; este formulario no admite FTE fraccionarios.",
      "Consulta los ingresos por empleado; la fila mensual es la media anual dividida entre 12."
    ],
    "howItWorks": "Ingresos anuales por empleado = ingresos anuales ÷ número de empleados. Media mensual = ese resultado ÷ 12. Este formulario exige una plantilla entera positiva; no admite ni redondea en silencio equivalentes a jornada completa (FTE) fraccionarios.",
    "example": "Ingresos anuales 12 000 000 y 20 empleados: 600 000 por empleado al año, de media 50 000 al mes. Ingresos cero dan cero; 2,5 empleados se rechazan sin redondeo.",
    "faq": [
      {
        "q": "¿Debo contar al personal a tiempo parcial?",
        "a": "Las personas a tiempo parcial pueden incluirse en una plantilla entera según tu criterio. Los FTE fraccionarios son otra base y no se admiten aquí; redondearlos para pasar la validación cambia el cociente."
      },
      {
        "q": "¿Se incluyen los colaboradores externos?",
        "a": "Eso lo eliges tú, pero mantenlo igual entre años o la tendencia deja de significar nada."
      },
      {
        "q": "¿Qué cifra es buena?",
        "a": "No hay una cifra buena universal: considera sector, margen y criterio de plantilla. La calculadora divide tus datos sin compararlos con referencias sectoriales."
      },
      {
        "q": "¿Por qué se muestra la cifra mensual?",
        "a": "Son los ingresos anuales por empleado divididos entre 12. No modela la estacionalidad ni equivale a los ingresos reales de cada mes, al salario o al beneficio disponible."
      }
    ],
    "disclaimer": "No calcula beneficio, salario, estacionalidad ni FTE fraccionarios. Comparar periodos exige el mismo criterio de plantilla."
  }
};
