import type { CalculatorDef } from '../../lib/types';

type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
// Starts from the five actual145 public bodies; bounded model corrections
// and independently checked examples are authored per subject and locale.
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Два направления нужны потому, что переговоры идут в процентах, а решения принимаются в деньгах. По новой сумме калькулятор возвращает процент, по проценту — сумму. Оба показывают рядом разницу в деньгах, и это то самое число, которое что-то меняет: десять процентов на маленькой зарплате и три на большой могут оказаться одинаковой суммой. Понижение показывается честным отрицательным процентом, а не прячется нулём: арифметика работает одинаково в обе стороны, и притворяться иначе значило бы неверно описать произошедшее.",
    "howToUse": [
      "Выберите, что вам известно: новая зарплата или процент.",
      "Введите прежнюю зарплату.",
      "Введите новую сумму либо процент повышения.",
      "Сравнивайте предложения по разнице в деньгах, а не по одному проценту."
    ],
    "howItWorks": "Процент = (стало ÷ было − 1) × 100. Обратный ход даёт стало = было × (1 + процент ÷ 100). Сравниваются положительные суммы за одинаковый период и на одной налоговой базе. Режим процента принимает значение строго выше −100%; режим новой суммы не использует скрытое поле процента. Инфляция и налоги не вычитаются автоматически. При одинаковых суммах изменение и разница равны 0.",
    "example": "Рост со 120 000 до 148 000 — это повышение на 23,33 % и 28 000 ₽ в месяц сверху. Понижение с 100 до 50 означает −50% и разницу −50; одинаковые суммы 100 и 100 дают 0%. Значение −100% в режиме процента не принимается, потому что модель требует положительную новую зарплату.",
    "faq": [
      {
        "q": "Процент считать от начисленной зарплаты или от суммы на руки?",
        "a": "Можно использовать начисленную или чистую сумму, но обе зарплаты должны относиться к одинаковому периоду и одной базе. Калькулятор не переводит начисленную сумму в чистую; изменение налогов может дать другой процент суммы на руки."
      },
      {
        "q": "Съедает ли инфляция повышение зарплаты?",
        "a": "Может: номинальные 5% повышения при росте цен на 8% означают реальное снижение примерно на 2,78%: 1,05/1,08−1. Этот калькулятор считает номинальное изменение; покупательная способность требует отдельной поправки на цены за тот же период."
      },
      {
        "q": "Почему понижение показано отрицательным процентом?",
        "a": "Потому что оно им и является. Обрезав его до нуля, мы спрятали бы направление изменения, а арифметика в обе стороны ведёт себя одинаково."
      },
      {
        "q": "Зачем показывать разницу в деньгах?",
        "a": "Потому что проценты скрывают базу. Три процента на большой зарплате бывают выгоднее десяти на маленькой, и увидеть это позволяет только денежная колонка."
      }
    ],
    "disclaimer": "Показано номинальное изменение двух сумм на одинаковой базе. Налоги, инфляция, валюта, изменение рабочего времени и обязательность повышения не определяются."
  },
  "en": {
    "longDescription": "The two directions matter because negotiations run in percentages while decisions are made in money. Given the new figure, the calculator returns the percentage; given the percentage, it returns the figure. Both show the difference in currency alongside, which is the number that actually changes anything: ten per cent on a small salary and three per cent on a large one can be the same amount of money. A decrease is shown honestly as a negative percentage rather than hidden as zero — the arithmetic works the same in both directions, and pretending otherwise would misdescribe what happened.",
    "howToUse": [
      "Choose whether you know the new salary or the percentage.",
      "Enter the previous salary.",
      "Enter either the new salary or the raise percentage.",
      "Compare offers on the difference in money, not on the percentage alone."
    ],
    "howItWorks": "Percentage = (new ÷ previous − 1) × 100. The reverse gives new = previous × (1 + percentage ÷ 100). Positive amounts must use the same period and tax basis. Percentage mode requires a value strictly above −100%; new-amount mode ignores the hidden percentage. Inflation and taxes are not deducted automatically. Equal salaries give zero change and zero difference.",
    "example": "Going from 120,000 to 148,000 is a 23.33% raise and 28,000 more a month. A decrease from 100 to 50 means −50% and difference −50; equal amounts 100 and 100 give 0%. Percentage −100% is rejected because this model requires positive new salary.",
    "faq": [
      {
        "q": "Should the percentage be taken from gross or net pay?",
        "a": "Either gross or net can be used, but both salaries must share the same period and basis. The calculator does not convert gross to net; changes in deductions can give take-home pay a different percentage change."
      },
      {
        "q": "Does this account for inflation?",
        "a": "No. A five per cent raise during eight per cent inflation is a pay cut in real terms, and comparing the two figures is a separate calculation."
      },
      {
        "q": "Why is a decrease shown as a negative percentage?",
        "a": "Because it is one. Clamping it to zero would hide the direction of the change, and the arithmetic behaves identically either way."
      },
      {
        "q": "Why show the difference in money as well?",
        "a": "Because percentages hide the base. Three per cent on a large salary can beat ten per cent on a small one, and only the money column makes that visible."
      }
    ],
    "disclaimer": "This shows nominal change between amounts on the same basis. Taxes, inflation, currency conversion, working-time changes and entitlement to a raise are not determined."
  },
  "uk": {
    "longDescription": "Підвищення зарплати рахується в обидва боки: за старою й новою сумою знаходиться відсоток, за відсотком — нова сума. Друге число тут важливіше за перше: приріст у відсотках звучить добре, а рішення приймаються за абсолютною сумою на місяць.",
    "howToUse": [
      "Виберіть напрямок розрахунку.",
      "Введіть поточну зарплату.",
      "Введіть нову зарплату або бажаний відсоток."
    ],
    "howItWorks": "Відсоток рахується як (стало ÷ було − 1) × 100. Зворотний хід дає стало = було × (1 + відсоток ÷ 100). Поруч виводиться абсолютна різниця на місяць — саме вона й відчувається у бюджеті. Порівнюються додатні суми за однаковий період і на одній податковій базі. Режим відсотка приймає значення строго понад −100%; режим нової суми не використовує прихований відсоток. Інфляція й податки не віднімаються автоматично. Однакові суми дають нульову зміну й різницю.",
    "example": "Зростання зі 120 000 ₴ до 148 000 ₴ — це підвищення на 23,33 % і 28 000 ₴ на місяць понад попереднє. Зниження зі 100 до 50 означає −50% і різницю −50; однакові суми 100 та 100 дають 0%. Відсоток −100% не приймається, бо модель потребує додатної нової зарплати.",
    "faq": [
      {
        "q": "Чи достатньо підвищення, щоб покрити інфляцію?",
        "a": "Порівнюйте відсоток підвищення з річною інфляцією. Приріст на 8 % за інфляції 10 % означає реальне зниження доходу, хоча номінально зарплата зросла."
      },
      {
        "q": "Чому відсоток від меншої суми більший?",
        "a": "Бо база менша: приріст 10 000 ₴ до 50 000 ₴ дає 20%, а до 150 000 ₴ — близько 6,7%. Обидва відсотки правильні; для порівняння підвищень корисно показувати також абсолютну різницю й однаковий період."
      },
      {
        "q": "Рахувати до податків чи після?",
        "a": "Використовуйте одну базу й однаковий період для обох сум: нараховані або чисті. Відсотки збігатимуться лише за однакової пропорційної частки утримань. Податки та внески тут не обчислюються."
      },
      {
        "q": "Як порахувати підвищення за кілька років?",
        "a": "Для n років і додатних сум середньорічний темп дорівнює ((нова/стара)^(1/n)−1)×100. Просте ділення сумарного приросту на роки не відтворює складний темп. Тут n не вводиться: калькулятор показує лише зміну між двома сумами."
      }
    ],
    "disclaimer": "Показано номінальну зміну двох сум на однаковій базі. Податки, інфляція, конвертація, зміна часу та право на підвищення не визначаються."
  },
  "de": {
    "longDescription": "Die beiden Richtungen zählen, weil Verhandlungen in Prozent geführt und Entscheidungen in Geld getroffen werden. Ist die neue Zahl bekannt, liefert der Rechner den Prozentsatz; ist der Prozentsatz bekannt, liefert er die Zahl. Beide zeigen den Unterschied in Euro daneben, und das ist die Zahl, die wirklich etwas ändert: zehn Prozent auf ein kleines Gehalt und drei Prozent auf ein großes können derselbe Betrag sein. Eine Kürzung wird ehrlich als negativer Prozentsatz ausgewiesen und nicht als null versteckt — die Rechnung läuft in beide Richtungen gleich, und alles andere beschriebe das Geschehene falsch.",
    "howToUse": [
      "Wähle, ob du das neue Gehalt oder den Prozentsatz kennst.",
      "Trage das bisherige Gehalt ein.",
      "Trage entweder das neue Gehalt oder den Prozentsatz der Erhöhung ein.",
      "Vergleiche Angebote am Unterschied in Geld und nicht am Prozentsatz allein."
    ],
    "howItWorks": "Prozentsatz = (neu ÷ bisher − 1) × 100. Umgekehrt gilt neu = bisher × (1 + Prozentsatz ÷ 100). Positive Beträge müssen denselben Zeitraum und dieselbe Steuerbasis verwenden. Der Prozentmodus verlangt einen Wert strikt über −100%; der neue Betragsmodus ignoriert das ausgeblendete Prozentfeld. Inflation und Steuern werden nicht automatisch abgezogen. Gleiche Gehälter ergeben null Änderung und Differenz.",
    "example": "Von 3400 € auf 3750 € sind 10,29 % und 350 € mehr im Monat. Eine Kürzung von 100 auf 50 bedeutet −50% und Differenz −50; gleiche Beträge 100 und 100 ergeben 0%. −100% wird abgelehnt, weil das Modell ein positives neues Gehalt verlangt.",
    "faq": [
      {
        "q": "Wird der Prozentsatz vom Brutto- oder Nettogehalt genommen?",
        "a": "Brutto oder netto ist möglich, aber beide Gehälter müssen denselben Zeitraum und dieselbe Basis verwenden. Brutto wird nicht in netto umgerechnet; geänderte Abzüge können einen anderen Nettoprozentsatz ergeben."
      },
      {
        "q": "Ist die Inflation berücksichtigt?",
        "a": "Nein. Eine Erhöhung um fünf Prozent bei acht Prozent Inflation ist real eine Kürzung, und dieser Vergleich ist eine eigene Rechnung."
      },
      {
        "q": "Warum wird eine Kürzung als negativer Prozentsatz angezeigt?",
        "a": "Weil sie eine ist. Bei null abzuschneiden verbärge die Richtung der Veränderung, und die Rechnung verhält sich in beide Richtungen gleich."
      },
      {
        "q": "Wozu zusätzlich der Unterschied in Geld?",
        "a": "Weil Prozentangaben die Bezugsgröße verbergen. Drei Prozent auf ein großes Gehalt können zehn Prozent auf ein kleines schlagen, und erst die Spalte in Euro macht das sichtbar."
      }
    ],
    "disclaimer": "Gezeigt wird die nominale Änderung zweier Beträge gleicher Basis. Steuern, Inflation, Währungsumrechnung, Arbeitszeitänderung und Erhöhungsanspruch werden nicht bestimmt."
  },
  "es": {
    "longDescription": "Los dos sentidos importan porque las negociaciones van en porcentajes mientras que las decisiones se toman en dinero. Si das la cifra nueva, la calculadora devuelve el porcentaje; si das el porcentaje, devuelve la cifra. Ambos muestran al lado la diferencia en moneda, que es el número que de verdad cambia algo: un diez por ciento sobre un salario pequeño y un tres por ciento sobre uno grande pueden ser el mismo dinero. Una bajada se muestra con honestidad como un porcentaje negativo en lugar de esconderse como un cero: la aritmética funciona igual en los dos sentidos, y fingir lo contrario describiría mal lo ocurrido.",
    "howToUse": [
      "Elige si conoces el salario nuevo o el porcentaje.",
      "Introduce el salario anterior.",
      "Introduce el salario nuevo o el porcentaje de subida.",
      "Compara las ofertas por la diferencia en dinero y no solo por el porcentaje."
    ],
    "howItWorks": "Porcentaje = (nuevo ÷ anterior − 1) × 100. El sentido inverso da nuevo = anterior × (1 + porcentaje ÷ 100). Los importes positivos deben tener igual periodo y base fiscal. El modo porcentual exige valor estrictamente superior a −100%; el modo de importe nuevo ignora el porcentaje oculto. No se restan automáticamente inflación ni impuestos. Sueldos iguales dan cambio y diferencia cero.",
    "example": "Pasar de 1200 a 1480 es una subida del 23,33 % y 280 más al mes. Bajar de 100 a 50 supone −50% y diferencia −50; importes iguales 100 y 100 dan 0%. Se rechaza −100% porque el modelo exige un salario nuevo positivo.",
    "faq": [
      {
        "q": "¿El porcentaje se toma del salario bruto o del neto?",
        "a": "Puede usarse bruto o neto, pero ambos salarios deben tener el mismo periodo y base. No se convierte bruto en neto; cambios en deducciones pueden dar otro porcentaje de variación del neto."
      },
      {
        "q": "¿Tiene en cuenta la inflación?",
        "a": "No. Una subida del cinco por ciento con una inflación del ocho es una bajada en términos reales, y comparar ambas cifras es un cálculo aparte."
      },
      {
        "q": "¿Por qué una bajada se muestra como un porcentaje negativo?",
        "a": "Porque lo es. Recortarla a cero escondería el sentido del cambio, y la aritmética se comporta igual en los dos casos."
      },
      {
        "q": "¿Por qué se muestra también la diferencia en dinero?",
        "a": "Porque los porcentajes esconden la base. Un tres por ciento sobre un salario grande puede ganar a un diez por ciento sobre uno pequeño, y solo la columna del dinero lo hace visible."
      }
    ],
    "disclaimer": "Muestra cambio nominal entre importes de igual base. No determina impuestos, inflación, cambio de moneda, variación de jornada ni derecho a subida."
  }
};
