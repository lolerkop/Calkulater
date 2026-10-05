import type { CalculatorDef } from '../../lib/types';

// Reviewed original public145 bodies are retained where factual. Native corrections
// are AI authored; human subject and language review remains pending.
type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Стоимость сотрудника в этой модели складывается из начисленного оклада до личных удержаний, расходов работодателя по введённой ставке и накладных за тот же период. Ставка 30 % добавляет ровно 30 % оклада, а не треть. Множитель показывает отношение выбранных расходов к окладу; он зависит от ваших данных и не является отраслевой нормой. Калькулятор не определяет зарплату на руки, действующие ставки взносов, налоговые пределы или стоимость фактически отработанного часа.",
    "howItWorks": "Взносы = оклад × ставка ÷ 100. Итого = оклад + взносы + накладные. Множитель — это итог, делённый на оклад. Оклад и накладные должны относиться к одному месяцу или году. Для прогрессивных ставок, предельных баз и льгот сначала рассчитайте соответствующие расходы отдельно. Деление общей суммы на часы здесь не выполняется. Введённая ставка поддерживается в исходном диапазоне поля 0–200 %, который не является нормой взносов.",
    "example": "Оклад 180 000 ₽ при взносах 30 % и накладных 25 000 ₽ обходится в 259 000 ₽ — 1,44 оклада. Без дополнительных расходов: оклад 100, ставка 0 % и накладные 0 дают итог 100 и множитель 1.",
    "howToUse": [
      "Введите начисленный оклад за период.",
      "Укажите ставку взносов работодателя сверх оклада.",
      "Накладные расходы за тот же период введите суммой.",
      "Период должен быть один и тот же везде — месяц или год, но не вперемешку.",
      "Избегайте двойного учёта льгот и отпускных в окладе и накладных; фиксированный расход нельзя без проверки переносить как процент."
    ],
    "faq": [
      {
        "q": "Взносы прибавляются к окладу или удерживаются из него?",
        "a": "В этой модели ставка относится к дополнительным расходам работодателя поверх начисленного оклада. Личные удержания работника не вычитаются. Реальные правила налогов, взносов и отражения в расчётном листке зависят от места и договора."
      },
      {
        "q": "Что относить к накладным расходам?",
        "a": "Рабочее место, технику, лицензии на программы, обучение, подбор, разнесённый на срок работы. Всё, что бизнес перестал бы платить, если бы должность исчезла."
      },
      {
        "q": "Чем полезен множитель к окладу?",
        "a": "Он показывает относительный бюджет при той же ставке и той же структуре расходов. Например, 259 000/180 000 = 1,4389… . Фиксированные накладные означают, что при другом окладе множитель нужно пересчитать, а не переносить автоматически."
      },
      {
        "q": "Учитывается ли оплачиваемый отпуск?",
        "a": "Отпуск отдельно не моделируется. Если годовой оклад уже включает оплату отсутствий, не добавляйте её повторно. Чтобы оценить стоимость продуктивного часа, разделите годовые расходы на обоснованное число рабочих часов; универсального соотношения «12 оплаченных месяцев за 11 рабочих» нет."
      }
    ],
    "disclaimer": "Плановый оклад плюс введённая ставка и накладные в одной валюте. Без автоматических местных тарифов, предельных баз и расчёта зарплаты на руки."
  },
  "en": {
    "longDescription": "This planning model adds gross salary before employee deductions, employer costs at the supplied rate and overhead for the same period. A 30% rate adds exactly 30% of salary, not one third. The multiple compares included costs with salary and depends on your inputs; it is not an industry norm. The tool does not determine take-home pay, current contribution rates, tax ceilings or cost per productive hour.",
    "howItWorks": "Contributions = salary × rate ÷ 100. Total = salary + contributions + overhead. The multiple is the total divided by the salary. Salary and overhead must use the same month or year. Calculate tiered rates, assessment ceilings and exemptions separately before entering an effective rate. The tool does not divide the total by working hours. The supplied rate retains the original field range 0–200%, which is not a contribution benchmark.",
    "example": "A salary of 180,000 with 30% contributions and 25,000 of overhead costs 259,000 — 1.44 times the salary. With no added costs, salary 100, rate 0% and overhead 0 give total 100 and multiple 1.",
    "howToUse": [
      "Enter the gross salary for the period.",
      "Enter the employer contribution rate that applies on top of it.",
      "Enter overhead for the same period as an amount.",
      "Use the same period throughout — monthly or yearly, not mixed.",
      "Avoid counting benefits or paid leave in both salary and overhead; a fixed expense cannot be carried over as a percentage without checking."
    ],
    "faq": [
      {
        "q": "Are contributions added to the salary or taken out of it?",
        "a": "The entered rate represents employer costs added to gross salary. Employee deductions are not subtracted. Actual tax, contribution and payslip rules depend on jurisdiction and contract."
      },
      {
        "q": "What belongs in overhead?",
        "a": "Desk space, equipment, software licences, training, recruitment amortised over the stay. Anything the business would stop paying if the role disappeared."
      },
      {
        "q": "Why is the multiple useful?",
        "a": "It shows the relative budget under the same rate and cost structure: 259,000/180,000 = 1.4389… . Fixed overhead means the multiple must be recalculated for a different salary rather than carried over automatically."
      },
      {
        "q": "Does this include paid leave?",
        "a": "Leave is not modelled separately. If annual salary already includes paid absences, do not add them again. Productive-hour cost requires dividing annual included costs by a justified working-hour estimate; there is no universal twelve-paid-months-for-eleven-worked rule."
      }
    ],
    "disclaimer": "Planned gross salary plus supplied rate and overhead in one currency. No automatic local rates, assessment ceilings or take-home payroll calculation."
  },
  "uk": {
    "longDescription": "Модель додає нарахований оклад до особистих утримань, витрати роботодавця за введеною ставкою й накладні за той самий період. Ставка 30 % додає рівно 30 % окладу, а не третину. Множник порівнює обрані витрати з окладом і залежить від ваших даних, а не від універсальної норми. Калькулятор не визначає зарплату на руки, чинні ставки внесків, податкові межі або вартість фактично відпрацьованої години.",
    "howItWorks": "Внески рахуються як оклад × ставка ÷ 100 і додаються зверху, а не віднімаються. Разом дорівнює оклад + внески + накладні. Множник — це підсумок, поділений на оклад: це безрозмірне співвідношення витрат та окладу за той самий період, а не вартість години. Оклад і накладні мають стосуватися того самого місяця або року. Ступінчасті ставки, граничні бази й пільги розрахуйте окремо до вводу ефективної ставки. Загальна сума тут не ділиться на години. Введена ставка має початковий діапазон поля 0–200 %, що не є нормативом внесків.",
    "example": "Оклад 180 000 ₴ за внесків 30 % і накладних 25 000 ₴ обходиться в 259 000 ₴ — 1,44 окладу. Саме це число, а не оклад, треба закладати в собівартість проєкту. Без додаткових витрат: оклад 100, ставка 0 % і накладні 0 дають разом 100 і множник 1.",
    "howToUse": [
      "Введіть оклад співробітника.",
      "Введіть ставку внесків роботодавця у відсотках.",
      "Додайте накладні витрати: робоче місце, обладнання, програми.",
      "Не рахуйте виплати й відпустку двічі в окладі та накладних; сталу суму не можна без перевірки переносити як відсоток."
    ],
    "faq": [
      {
        "q": "Чому внески нараховуються зверху?",
        "a": "У цій моделі введена ставка стосується додаткових витрат роботодавця поверх нарахованого окладу. Особисті утримання працівника не віднімаються. Реальні правила податків, внесків і розрахункового листка залежать від юрисдикції та договору."
      },
      {
        "q": "Що включати в накладні?",
        "a": "Робоче місце, обладнання, ліцензії на програми, навчання, частку адміністративних витрат. Усе, що з’являється саме через наявність цього співробітника."
      },
      {
        "q": "Навіщо потрібен множник?",
        "a": "Він показує співвідношення бюджету й окладу за тієї самої структури витрат: 259 000/180 000 = 1,4389… . За іншого окладу й незмінних накладних множник треба перерахувати. Для вартості години потрібні ще фактичні години."
      },
      {
        "q": "Чи входить сюди відпустка?",
        "a": "Відпустка окремо не моделюється. Якщо річний оклад уже включає оплачену відсутність, не додавайте її повторно. Для вартості продуктивної години потрібен обґрунтований фонд робочих годин; універсального співвідношення 12 оплачених місяців до 11 робочих немає."
      }
    ],
    "disclaimer": "Плановий оклад плюс введені ставка й накладні в одній валюті. Без автоматичних місцевих тарифів, граничних баз і зарплати на руки."
  },
  "de": {
    "longDescription": "Das Planungsmodell addiert Bruttogehalt vor persönlichen Abzügen, Arbeitgeberkosten mit dem eingegebenen Satz und Gemeinkosten desselben Zeitraums. Ein Satz von 30 % ergänzt genau 30 % des Gehalts, kein Drittel. Der Faktor vergleicht einbezogene Kosten mit dem Gehalt und folgt deinen Eingaben, keinem Branchenstandard. Nettogehalt, aktuelle Beitragssätze, Bemessungsgrenzen und Kosten je produktiver Stunde werden nicht bestimmt.",
    "howItWorks": "Beiträge = Gehalt × Satz ÷ 100. Gesamt = Gehalt + Beiträge + Gemeinkosten. Der Faktor ist das Gesamte geteilt durch das Gehalt. Gehalt und Gemeinkosten müssen denselben Monat oder dasselbe Jahr betreffen. Staffelungen, Bemessungsgrenzen und Befreiungen sind vor Eingabe eines effektiven Satzes separat zu bestimmen. Die Summe wird hier nicht durch Arbeitsstunden geteilt. Der eingegebene Satz behält den ursprünglichen Feldbereich 0–200 %, keine Beitragsnorm.",
    "example": "Ein Gehalt von 4500 € mit 21 % Beiträgen und 600 € Gemeinkosten kostet 6045 € — das 1,34-Fache des Gehalts. Ohne Zusatzkosten ergeben Gehalt 100, Satz 0 % und Gemeinkosten 0 die Summe 100 und Faktor 1.",
    "howToUse": [
      "Trage das Bruttogehalt für den Zeitraum ein.",
      "Trage den Satz der Arbeitgeberbeiträge ein, der obendrauf kommt.",
      "Trage die Gemeinkosten desselben Zeitraums als Betrag ein.",
      "Nimm durchgehend denselben Zeitraum — monatlich oder jährlich, nicht gemischt.",
      "Zähle Leistungen und Urlaub nicht doppelt in Gehalt und Gemeinkosten; feste Beträge lassen sich nicht ungeprüft als Prozentsatz übertragen."
    ],
    "faq": [
      {
        "q": "Kommen die Beiträge auf das Gehalt obendrauf oder werden sie abgezogen?",
        "a": "Der eingegebene Satz steht hier für Arbeitgeberkosten zusätzlich zum Bruttogehalt. Persönliche Arbeitnehmerabzüge werden nicht abgezogen. Tatsächliche Steuer-, Beitrags- und Abrechnungsregeln hängen von Land und Vertrag ab."
      },
      {
        "q": "Was gehört in die Gemeinkosten?",
        "a": "Arbeitsplatz, Ausstattung, Softwarelizenzen, Weiterbildung, die auf die Verweildauer verteilte Personalsuche. Alles, was der Betrieb nicht mehr zahlen würde, wenn die Stelle wegfiele."
      },
      {
        "q": "Wozu der Faktor?",
        "a": "Er zeigt das Verhältnis von Budget und Gehalt bei derselben Kostenstruktur: 259 000/180 000 = 1,4389… . Bei festem Gemeinkostenbetrag muss er für ein anderes Gehalt neu berechnet werden, statt unverändert übernommen zu werden."
      },
      {
        "q": "Ist bezahlter Urlaub enthalten?",
        "a": "Urlaub wird nicht getrennt modelliert. Enthält das Jahresgehalt bereits bezahlte Abwesenheit, füge sie nicht doppelt hinzu. Kosten je produktiver Stunde benötigen eine begründete Arbeitsstundenzahl; zwölf bezahlte Monate für elf Arbeitsmonate sind keine allgemeine Regel."
      }
    ],
    "disclaimer": "Geplantes Bruttogehalt plus eingegebener Satz und Gemeinkosten in einer Währung; keine automatischen örtlichen Sätze, Grenzen oder Nettolohnrechnung."
  },
  "es": {
    "longDescription": "Este modelo suma salario bruto antes de deducciones personales, costes del empleador al tipo introducido y gastos generales del mismo periodo. Un tipo del 30% añade exactamente el 30% del salario, no un tercio. El múltiplo compara costes incluidos con salario y depende de los datos, no de una norma sectorial. No calcula sueldo neto, tipos vigentes, límites de cotización ni coste por hora productiva.",
    "howItWorks": "Cotizaciones = salario × tipo ÷ 100. Total = salario + cotizaciones + gastos generales. El múltiplo es el total dividido entre el salario. Salario y gastos generales deben referirse al mismo mes o año. Calcula aparte tramos, límites y exenciones antes de introducir un tipo efectivo. Aquí no se divide el total entre horas trabajadas. El tipo introducido conserva el rango original del campo 0–200%, no una norma de aportaciones.",
    "example": "Un salario de 1800 con un 30 % de cotizaciones y 250 de gastos generales cuesta 2590: 1,44 veces el salario. Sin costes añadidos, salario 100, tipo 0% y gastos 0 dan total 100 y múltiplo 1.",
    "howToUse": [
      "Introduce el salario bruto del periodo.",
      "Introduce el tipo de cotización a cargo de la empresa que se aplica encima.",
      "Introduce los gastos generales del mismo periodo como importe.",
      "Usa el mismo periodo en todo: mensual o anual, sin mezclar.",
      "Evita duplicar prestaciones o vacaciones entre salario y gastos generales; no traslades un importe fijo como porcentaje sin comprobarlo."
    ],
    "faq": [
      {
        "q": "¿Las cotizaciones se suman al salario o se sacan de él?",
        "a": "El tipo introducido representa costes del empleador añadidos al salario bruto. No se restan deducciones del empleado. Las reglas fiscales, de cotización y de nómina dependen del lugar y del contrato."
      },
      {
        "q": "¿Qué entra en los gastos generales?",
        "a": "El espacio de trabajo, los equipos, las licencias de software, la formación y la selección repartida a lo largo de la permanencia. Todo lo que la empresa dejaría de pagar si el puesto desapareciera."
      },
      {
        "q": "¿Para qué sirve el múltiplo?",
        "a": "Muestra presupuesto relativo con el mismo tipo y estructura: 259 000/180 000 = 1,4389… . Con gastos generales fijos, hay que recalcular el múltiplo para otro salario, no trasladarlo automáticamente."
      },
      {
        "q": "¿Incluye las vacaciones retribuidas?",
        "a": "Las vacaciones no se modelan aparte. Si el salario anual incluye ausencias pagadas, no las añadas de nuevo. El coste por hora productiva necesita horas de trabajo justificadas; no existe una regla universal de doce meses pagados por once trabajados."
      }
    ],
    "disclaimer": "Salario bruto previsto más tipo y gastos introducidos en una moneda; sin tipos locales automáticos, límites ni cálculo de sueldo neto."
  }
};
