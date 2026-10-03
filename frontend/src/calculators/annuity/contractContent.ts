import type { CalculatorDef } from '../../lib/types';
type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  ru: {
    longDescription: 'Аннуитет сохраняет регулярный платёж, пока ставка и срок не меняются. Таблица показывает начисленные на остаток проценты, погашение основного долга и новый остаток. В начале процентная часть выше, чем в конце, но она не обязательно занимает большую часть платежа: это зависит от ставки и срока. Здесь задана номинальная годовая ставка с ежемесячным начислением; комиссии и страхование в график не входят.',
    howToUse: ['Введите долг и номинальную годовую ставку в процентах.', 'Задайте целое число месяцев от 1 до 480.', 'Сопоставьте процентную и основную части первой строки с общим платежом.', 'Просмотрите последнюю строку: она закрывает остаток после округления. Все суммы относятся к одной валюте.'],
    howItWorks: 'Месячная ставка i = r/1200. Для n месяцев платёж A = S·i/[1−(1+i)^−n]; при r = 0 используется S/n. Регулярный платёж, проценты и погашение округляются до двух знаков. Каждый месяц проценты равны остатку × i, остальное уменьшает долг. В последнем месяце платёж равен остатку плюс проценты. Если округлённый платёж не уменьшает долг или значения выходят за числовую точность, расчёт сообщает ограничение.',
    example: 'Долг 1 000 000 денежных единиц, 12 % и 12 месяцев: платёж 88 848,79; первая строка — 10 000 процентов и 78 848,79 основного долга. Последний платёж 88 848,76, всего 1 066 185,45. При 120 000, ставке 0 % и 12 месяцах платёж 10 000 без процентов.',
    faq: [
      { q: 'Чем этот график отличается от кредитного калькулятора?', a: 'Он раскрывает одну аннуитетную схему по месяцам. Для разовой комиссии, доплаты или сравнения с дифференцированным погашением нужен соответствующий кредитный расчёт.' },
      { q: 'Откуда берётся разница последнего платежа в несколько копеек?', a: 'Помесячное округление накапливает небольшой остаток. Последняя строка погашает его целиком; умножение показанного регулярного платежа на срок поэтому может отличаться от суммы графика.' },
      { q: 'Всегда ли проценты преобладают в первом платеже аннуитета?', a: 'Нет. В примере на год они составляют 10 000 из 88 848,79. Их доля зависит от ставки и числа платежей; таблица показывает фактическое соотношение.' },
      { q: 'Как рассчитывается график при нулевой годовой ставке?', a: 'Долг делится на число месяцев. При неделимой до копейки сумме последняя строка учитывает округление, а процентная часть каждой строки равна нулю.' },
    ],
    disclaimer: 'Учебный график постоянной номинальной ставки и платежей в конце месяца. Банковские даты, дневная база, комиссии, страховка и договорные правила округления могут изменить фактический график.',
  },
  en: {
    longDescription: 'An annuity keeps the regular instalment fixed while its rate and term stay constant. Each row separates interest on the outstanding balance from principal repayment. Interest falls as the balance falls, but it need not dominate the first payment: the rate and term determine its share. This model uses a nominal annual rate divided into monthly periods and excludes fees and insurance.',
    howToUse: ['Enter the debt and nominal annual percentage rate.', 'Choose a whole term from 1 to 480 months.', 'Compare first-month interest and principal with the regular instalment.', 'Inspect the final row, which settles rounding differences. Use one currency throughout.'],
    howItWorks: 'Monthly rate i = r/1200 and payment A = S·i/[1−(1+i)^−n]; at r = 0, A = S/n. The regular payment, monthly interest and principal are rounded to two decimal places. Interest is balance × i; the remainder pays principal. The last instalment equals its remaining balance plus interest. A payment that cannot reduce principal at this precision, or an unrepresentable result, produces a range message.',
    example: 'A debt of 1,000,000 monetary units at 12% for 12 months gives 88,848.79 per month: first-month interest 10,000 and principal 78,848.79. The last instalment is 88,848.76 and total paid is 1,066,185.45. At 0%, a debt of 120,000 over 12 months gives 10,000 per month with no interest.',
    faq: [
      { q: 'How does this annuity schedule differ from the loan calculator?', a: 'It explains one repayment method month by month. Use the relevant loan model for an upfront fee, extra repayments or a comparison with equal-principal instalments.' },
      { q: 'Why does the last annuity instalment differ by a few cents?', a: 'Monthly rounding leaves a small adjustment. The last row settles it, so the displayed regular payment multiplied by the term can differ from the schedule total.' },
      { q: 'Does interest always dominate the first annuity instalment?', a: 'No. In the one-year example it is 10,000 out of 88,848.79. Its share depends on both rate and duration; the table supplies the actual split.' },
      { q: 'What does the annuity schedule show at a zero rate?', a: 'The debt is divided by the number of months. The last row absorbs any minor-unit rounding difference, and every interest entry is zero.' },
    ],
    disclaimer: 'Educational constant-rate model with month-end instalments. Actual payment dates, day-count conventions, fees, insurance and contractual rounding can change a lender’s schedule.',
  },
  uk: {
    longDescription: 'Ануїтет залишає регулярний платіж сталим за незмінної ставки й строку. Таблиця окремо показує відсотки на залишок, погашення основного боргу та новий залишок. Відсоткова частина зменшується, але не обов’язково переважає навіть у першому платежі. Вводиться номінальна річна ставка з щомісячним нарахуванням; комісії та страхування не включені.',
    howToUse: ['Введіть борг і номінальну річну ставку у відсотках.', 'Задайте цілий строк від 1 до 480 місяців.', 'Порівняйте відсотки й погашення боргу в першому рядку.', 'Перевірте останній рядок, який закриває залишок після округлення. Використовуйте одну валюту.'],
    howItWorks: 'Місячна ставка i = r/1200; платіж A = S·i/[1−(1+i)^−n], а за r = 0 — S/n. Регулярний платіж, відсотки та основний борг округлюються до двох знаків. Відсотки дорівнюють залишку × i, решта платежу зменшує борг. Останній платіж дорівнює залишку плюс відсотки. Якщо округлений платіж не зменшує борг або результат не підтримується числовою точністю, з’являється повідомлення про обмеження.',
    example: 'Борг 1 000 000 грошових одиниць, 12 % і 12 місяців: платіж 88 848,79, перші відсотки 10 000, погашення боргу 78 848,79. Останній платіж 88 848,76, загалом 1 066 185,45. За боргу 120 000, ставки 0 % і 12 місяців платіж становить 10 000 без відсотків.',
    faq: [
      { q: 'Чим ануїтетна таблиця відрізняється від кредитного калькулятора?', a: 'Вона розкриває одну схему помісячно. Для разової комісії, додаткового погашення чи порівняння з диференційованими платежами потрібна відповідна кредитна модель.' },
      { q: 'Чому останній ануїтетний платіж відрізняється на кілька копійок?', a: 'Помісячне округлення залишає невелику поправку. Останній рядок погашає її; добуток регулярного платежу на строк може відрізнятися від суми таблиці.' },
      { q: 'Чи завжди відсотки переважають на початку ануїтету?', a: 'Ні. У річному прикладі це 10 000 із 88 848,79. Частку визначають ставка і строк. Поділ номінальної ставки на 12 та корінь з ефективної ставки описують різні вхідні ставки, а не різну точність.' },
      { q: 'Що показує ануїтет за нульової ставки?', a: 'Борг ділиться на кількість місяців, відсотки дорівнюють нулю. Останній рядок враховує різницю округлення до найменшої грошової одиниці.' },
    ],
    disclaimer: 'Навчальний графік сталої номінальної ставки й платежів наприкінці місяця. Банківські дати, денна база, комісії, страхування та договірне округлення можуть змінити фактичний графік.',
  },
  de: {
    longDescription: 'Bei einer Annuität bleibt die regelmäßige Rate bei konstantem Zins und unveränderter Laufzeit gleich. Die Tabelle trennt Zinsen auf die Restschuld und Tilgung. Der Zinsanteil sinkt, muss anfangs aber nicht den größten Teil ausmachen. Eingabe ist ein nominaler Jahreszins mit monatlichen Perioden; Gebühren und Versicherungen fehlen in dieser Modellrechnung.',
    howToUse: ['Gib Darlehensbetrag und nominalen Jahreszins ein.', 'Wähle eine ganze Laufzeit zwischen 1 und 480 Monaten.', 'Vergleiche Zins und Tilgung der ersten Zeile.', 'Prüfe die Schlussrate für den Rundungsausgleich. Alle Beträge verwenden dieselbe Währung.'],
    howItWorks: 'Monatszins i = r/1200; Rate A = S·i/[1−(1+i)^−n], bei r = 0 dagegen S/n. Rate, Monatszins und Tilgung werden auf zwei Nachkommastellen gerundet. Zinsen = Restschuld × i; der Rest der Rate tilgt. Die Schlussrate zahlt die verbleibende Schuld samt Zinsen. Wenn Rundung keine Tilgung mehr zulässt oder das Ergebnis nicht darstellbar ist, erscheint eine Bereichsmeldung.',
    example: '200.000 Geldeinheiten, 4 % und 240 Monate ergeben 1.211,96 je Monat. Zuerst entfallen 666,67 auf Zinsen und 545,29 auf Tilgung. Die Schlussrate beträgt 1.212,34, die Zahlungssumme 290.870,78. Bei 120.000 zu 0 % für zwölf Monate beträgt die Rate 10.000 ohne Zinsen.',
    faq: [
      { q: 'Wozu dient die Annuitätentabelle neben einem Kreditrechner?', a: 'Sie zerlegt eine Tilgungsart monatlich. Einmalige Gebühren, zusätzliche Tilgung oder der Vergleich mit gleichbleibender Kapitaltilgung brauchen das passende Kreditmodell.' },
      { q: 'Warum weicht die Schlussrate der Annuität um Centbeträge ab?', a: 'Monatliches Runden erzeugt eine kleine Restdifferenz. Die Schlussrate gleicht sie aus; regelmäßige Rate mal Laufzeit kann deshalb von der Tabellensumme abweichen.' },
      { q: 'Ist der erste Zinsanteil einer Annuität immer größer als die Tilgung?', a: 'Nein. Zins und Laufzeit bestimmen das Verhältnis. Im Beispiel mit einer Million, 12 % und zwölf Monaten sind nur 10.000 von 88.848,79 Zinsen.' },
      { q: 'Wie behandelt die Annuitätentabelle einen Zins von null?', a: 'Sie teilt den Betrag durch die Monate. Jede Zinsposition ist null, und die letzte Zeile berücksichtigt eine mögliche Rundungsdifferenz.' },
    ],
    disclaimer: 'Lehrmodell mit konstantem nominalem Zins und Zahlungen am Monatsende. Vertragliche Termine, Tageszählung, Gebühren, Versicherungen und Rundung können den tatsächlichen Plan verändern.',
  },
  es: {
    longDescription: 'La cuota de una anualidad permanece constante si no cambian el tipo ni el plazo. La tabla separa intereses sobre el saldo y amortización de capital. La parte de intereses disminuye, pero no tiene por qué ser mayoritaria al principio: depende del tipo y del plazo. Se introduce un tipo nominal anual con periodos mensuales; no se incluyen comisiones ni seguros.',
    howToUse: ['Introduce la deuda y el tipo nominal anual en porcentaje.', 'Elige un plazo entero de 1 a 480 meses.', 'Compara intereses y capital en la primera fila.', 'Comprueba la última cuota, que ajusta el redondeo. Usa una sola moneda.'],
    howItWorks: 'Tipo mensual i = r/1200; cuota A = S·i/[1−(1+i)^−n], o S/n cuando r = 0. Cuota, intereses y capital se redondean a dos decimales. Intereses = saldo × i; el resto amortiza capital. La última cuota paga saldo e intereses pendientes. Si el redondeo impide reducir la deuda o el resultado no puede representarse, se muestra una limitación numérica.',
    example: 'Una deuda de 1.000.000 unidades monetarias, al 12 % durante 12 meses, da 88.848,79 por mes: 10.000 de intereses y 78.848,79 de capital en el primero. La última cuota es 88.848,76 y el total 1.066.185,45. Con 120.000 al 0 % durante 12 meses se pagan 10.000 mensuales sin intereses.',
    faq: [
      { q: '¿Qué aporta la tabla de anualidad frente al calculador de préstamos?', a: 'Desglosa un método de amortización mes a mes. Para comisiones iniciales, aportaciones adicionales o comparación con cuotas de capital constante hace falta el modelo correspondiente.' },
      { q: '¿Por qué cambia unos céntimos la última cuota de anualidad?', a: 'El redondeo mensual deja una pequeña diferencia. La última fila la liquida; cuota regular por plazo puede no coincidir con la suma de la tabla.' },
      { q: '¿Siempre predominan los intereses al iniciar una anualidad?', a: 'No. En el ejemplo de un año son 10.000 de 88.848,79. Su proporción depende del tipo y del número de cuotas.' },
      { q: '¿Cómo se muestra una anualidad con interés cero?', a: 'Se divide la deuda entre los meses. Todos los intereses son cero y la última cuota recoge cualquier ajuste de redondeo.' },
    ],
    disclaimer: 'Modelo educativo de tipo nominal constante y cuotas al final del mes. Fechas, cómputo de días, comisiones, seguros y redondeos del contrato pueden cambiar el calendario real.',
  },
};
