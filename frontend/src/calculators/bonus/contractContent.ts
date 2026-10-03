import type { CalculatorDef } from '../../lib/types';
type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Премия в процентах от оклада задаёт начисление до удержания: 35% от 145 000 — это 50 750. Полученная сумма зависит ещё от введённого процента удержания, поэтому калькулятор показывает обе величины и удержанную сумму рядом. Здесь рассчитывается именно премия, без прибавления оклада. Налоговый режим не определяется: постоянный процент является условием задачи, а ступени, вычеты и обязательные взносы требуют отдельного расчёта.",
    "howToUse": [
      "Введите оклад, от которого считается премия.",
      "Укажите премию в процентах от этого оклада.",
      "Укажите применяемую ставку налога на доходы.",
      "Процент премии может превышать 100%: он задаёт размер выплаты относительно оклада, а не ставку удержания."
    ],
    "howItWorks": "Премия до удержания = оклад × процент премии / 100. Удержание = премия × заданная ставка / 100; остаток = премия − удержание. Ставка — постоянное допущение пользователя от 0 до менее 100%, а не определяемая здесь налоговая обязанность.",
    "example": "Премия 35 % при окладе 145 000 ₽ — это 50 750 ₽ начисления и 44 152,50 ₽ на руки после 13 %.",
    "faq": [
      {
        "q": "Облагается ли премия налогом иначе, чем оклад?",
        "a": "Налоговый режим здесь не определяется: остаток рассчитывается только после введённого постоянного процента удержания. Показывается только премия после одного заданного удержания. Налоговые ступени, вычеты, социальные взносы и правила конкретной страны не рассчитываются. 13% в примере — условие задачи, не ставка для всех работников."
      },
      {
        "q": "От какого оклада считать процент — до налога или после?",
        "a": "В расчёте процент применяется к введённому окладу до выбранного удержания. Договор может задавать другую базу; проверьте её до ввода. Взносы работодателя и удержания работника здесь отдельно не считаются."
      },
      {
        "q": "Почему моя премия отличается от расчёта?",
        "a": "Обычные причины — страховые взносы сверх налога на доходы, премия, пропорциональная отработанному времени, или база, включающая надбавки, о которых расчёт не знает."
      },
      {
        "q": "Может ли процент премии быть больше ста?",
        "a": "Да, и для годовых выплат так бывает часто: тринадцатая зарплата — это по определению сто процентов. Расчёт принимает любой неотрицательный процент."
      }
    ],
    "disclaimer": "Показывается только премия после одного заданного удержания. Налоговые ступени, вычеты, социальные взносы и правила конкретной страны не рассчитываются. 13% в примере — условие задачи, не ставка для всех работников."
  },
  "en": {
    "longDescription": "A bonus expressed as a percentage of salary gives the amount before withholding: 35% of 145,000 is 50,750. The amount received also depends on the supplied withholding rate, so the tool displays both amounts and the deduction together. It calculates the bonus itself without adding the salary. The constant percentage is an input assumption; tax bands, allowances and mandatory contributions need a separate calculation.",
    "howToUse": [
      "Enter the base salary the bonus is calculated from.",
      "Enter the bonus as a percentage of that salary.",
      "Enter the income tax rate that applies.",
      "The bonus percentage can exceed 100%: it expresses the payment relative to salary, not a withholding rate."
    ],
    "howItWorks": "Bonus before withholding = salary × bonus percentage / 100. Withholding = bonus × the supplied rate / 100; the remainder is bonus minus withholding. The constant rate must be at least zero and below 100%; this model does not determine the tax you legally owe.",
    "example": "A 35% bonus on a salary of 145,000 is 50,750 before tax and 44,152.50 after 13%.",
    "faq": [
      {
        "q": "Is a bonus taxed differently from salary?",
        "a": "This does not determine a tax regime: the remainder follows only the constant withholding percentage you enter. Only the bonus after one supplied withholding is shown. Tax bands, allowances, social contributions and country-specific rules are not calculated. The example’s 13% is an assumption, not a universal employee tax rate."
      },
      {
        "q": "Should the percentage be taken from gross or net salary?",
        "a": "The entered salary is the base before the chosen withholding. A contract may define a different bonus base; check it first. Employer contributions and employee deductions are not calculated separately."
      },
      {
        "q": "Why does my bonus differ from this figure?",
        "a": "Common reasons are social contributions on top of income tax, a bonus prorated for time worked, or a base that includes allowances the calculation here does not know about."
      },
      {
        "q": "Can the bonus percentage exceed one hundred?",
        "a": "Yes, and for annual awards it often does — a thirteenth salary is a hundred per cent by definition. The calculation handles any non-negative percentage."
      }
    ],
    "disclaimer": "Only the bonus after one supplied withholding is shown. Tax bands, allowances, social contributions and country-specific rules are not calculated. The example’s 13% is an assumption, not a universal employee tax rate."
  },
  "uk": {
    "longDescription": "Премія рахується у відсотках від окладу, і різниця між нарахуванням і сумою на руки — це податок на доходи. Розрахунок показує обидва числа: домовляються зазвичай про перше, а планують життя за другим. Податковий режим тут не визначається: залишок рахується лише після введеного сталого відсотка утримання.",
    "howToUse": [
      "Введіть оклад.",
      "Введіть розмір премії у відсотках.",
      "Задайте ставку податку."
    ],
    "howItWorks": "Премія до утримання = оклад × відсоток премії / 100. Утримання = премія × задана ставка / 100; залишок = премія − утримання. Постійна ставка від 0 до менш ніж 100% є припущенням користувача, а не визначеною тут податковою вимогою.",
    "example": "Премія 35 % за окладу 145 000 ₴ — це 50 750 ₴ нарахування і 44 152,50 ₴ на руки після 13 %.",
    "faq": [
      {
        "q": "Про яку суму домовлятися?",
        "a": "Уточнюйте, про нараховану чи про суму на руки. Різниця становить ставку податку, і за великих премій це помітні гроші."
      },
      {
        "q": "Чи входять сюди внески роботодавця?",
        "a": "Розрахунок не включає внесків роботодавця й окремих утримань працівника. Їхній вплив залежить від правил країни та договору, а не від мови сторінки."
      },
      {
        "q": "Чи оподатковується премія інакше за оклад?",
        "a": "Податковий режим тут не визначається: залишок рахується лише після введеного сталого відсотка утримання. Показано лише премію після одного заданого утримання. Податкові ступені, пільги, соціальні внески та правила конкретної країни не розраховуються. 13% у прикладі — умова, а не ставка для всіх працівників."
      },
      {
        "q": "Чи впливає премія на відпускні?",
        "a": "Цей калькулятор не розраховує відпускні та не визначає, чи включати премію до середнього заробітку. Це залежить від застосовних правил і виду виплати; мова сторінки не задає юрисдикцію."
      }
    ],
    "disclaimer": "Показано лише премію після одного заданого утримання. Податкові ступені, пільги, соціальні внески та правила конкретної країни не розраховуються. 13% у прикладі — умова, а не ставка для всіх працівників."
  },
  "de": {
    "longDescription": "Ein Bonus als Prozentsatz des Gehalts bestimmt den Betrag vor Abzügen: 35% von 4500 sind 1575. Die Auszahlung hängt zusätzlich vom eingegebenen Abzugssatz ab; deshalb stehen Bruttobonus, Abzug und verbleibender Betrag nebeneinander. Das Gehalt wird nicht zum Bonus addiert. Der konstante Satz ist eine Modellannahme; Steuerstufen, Freibeträge und Pflichtbeiträge erfordern eine gesonderte Rechnung.",
    "howToUse": [
      "Trage das Grundgehalt ein, aus dem der Bonus berechnet wird.",
      "Trage den Bonus als Prozentsatz dieses Gehalts ein.",
      "Trage den geltenden Steuersatz ein.",
      "Der Bonus kann über 100% liegen: gemeint ist die Zahlung relativ zum Gehalt, nicht der Abzugssatz."
    ],
    "howItWorks": "Bonus vor Abzug = Grundgehalt × Bonusprozentsatz / 100. Abzug = Bonus × eingegebener Satz / 100; verbleibender Bonus = Bonus − Abzug. Der konstante Satz von mindestens 0 und unter 100% ist eine Annahme; der Rechner bestimmt keine gesetzliche Steuerpflicht.",
    "example": "Ein Bonus von 35 % auf ein Gehalt von 4500 € sind 1575 € vor Steuer und bei 30 % Steuersatz 1102,50 € netto.",
    "faq": [
      {
        "q": "Wird ein Bonus anders besteuert als das Gehalt?",
        "a": "Der Steuerstatus wird hier nicht ermittelt: der Rest folgt ausschließlich dem eingegebenen konstanten Abzugssatz. Gezeigt wird nur der Bonus nach einem eingegebenen Abzug. Steuerstufen, Freibeträge, Sozialbeiträge und Regeln eines Landes werden nicht ermittelt. Die 13% im Beispiel sind eine Annahme, kein allgemeiner Steuersatz für Beschäftigte."
      },
      {
        "q": "Soll der Prozentsatz vom Brutto- oder vom Nettogehalt genommen werden?",
        "a": "Das eingegebene Gehalt ist die Grundlage vor dem gewählten Abzug. Ein Vertrag kann eine andere Bonusgrundlage festlegen; prüfe sie zuerst. Arbeitgeberbeiträge und Abzüge des Beschäftigten werden nicht gesondert gerechnet."
      },
      {
        "q": "Warum weicht mein Bonus von dieser Zahl ab?",
        "a": "Häufige Gründe sind Sozialabgaben zusätzlich zur Lohnsteuer, ein anteilig nach Arbeitszeit gekürzter Bonus oder eine Bemessungsgrundlage mit Zulagen, die diese Rechnung nicht kennt."
      },
      {
        "q": "Kann der Bonusprozentsatz hundert übersteigen?",
        "a": "Ja, und bei Jahresprämien tut er das oft — ein dreizehntes Gehalt sind definitionsgemäß hundert Prozent. Die Rechnung kommt mit jedem nicht negativen Prozentsatz zurecht."
      }
    ],
    "disclaimer": "Gezeigt wird nur der Bonus nach einem eingegebenen Abzug. Steuerstufen, Freibeträge, Sozialbeiträge und Regeln eines Landes werden nicht ermittelt. Die 13% im Beispiel sind eine Annahme, kein allgemeiner Steuersatz für Beschäftigte."
  },
  "es": {
    "longDescription": "Un bonus expresado como porcentaje del salario determina el importe antes de la retención: 35% de 1450 son 507,50. Lo recibido depende además del porcentaje de retención introducido, por lo que se muestran el bonus devengado, la retención y el resto. El salario no se suma al bonus. El porcentaje constante es un supuesto; los tramos fiscales, deducciones y cotizaciones requieren otro cálculo.",
    "howToUse": [
      "Introduce el salario base sobre el que se calcula el bonus.",
      "Introduce el bonus como porcentaje de ese salario.",
      "Introduce el tipo de retención que se aplica.",
      "El bonus puede superar el 100%: expresa la paga respecto al salario, no el porcentaje de retención."
    ],
    "howItWorks": "Bonus antes de retención = salario × porcentaje del bonus / 100. Retención = bonus × tipo indicado / 100; el resto es bonus menos retención. El tipo constante, desde cero hasta menos del 100%, es una hipótesis del usuario; aquí no se determina la obligación fiscal legal.",
    "example": "Un bonus del 35 % sobre un salario de 1450 son 507,50 antes de impuestos y 441,53 tras un 13 %.",
    "faq": [
      {
        "q": "¿Un bonus tributa de forma distinta al salario?",
        "a": "No se determina un régimen fiscal: el resto resulta únicamente del porcentaje constante de retención que indiques. Solo se muestra el bonus después de una retención indicada. No se calculan tramos, deducciones, cotizaciones ni normas de un país. El 13% del ejemplo es una hipótesis, no un tipo universal para trabajadores."
      },
      {
        "q": "¿El porcentaje se toma del salario bruto o del neto?",
        "a": "El salario introducido es la base antes de la retención elegida. El contrato puede fijar otra base; compruébala primero. No se calculan aparte cotizaciones del empleador ni deducciones del trabajador."
      },
      {
        "q": "¿Por qué mi bonus difiere de esta cifra?",
        "a": "Los motivos habituales son las cotizaciones sociales además de la retención, un bonus prorrateado por el tiempo trabajado o una base que incluye complementos que este cálculo no conoce."
      },
      {
        "q": "¿El porcentaje del bonus puede pasar de cien?",
        "a": "Sí, y en las pagas anuales ocurre a menudo: una paga extra es un cien por cien por definición. El cálculo admite cualquier porcentaje no negativo."
      }
    ],
    "disclaimer": "Solo se muestra el bonus después de una retención indicada. No se calculan tramos, deducciones, cotizaciones ni normas de un país. El 13% del ejemplo es una hipótesis, no un tipo universal para trabajadores."
  }
};
