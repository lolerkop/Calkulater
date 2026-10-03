import type { CalculatorDef } from '../../lib/types';
type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  ru: {
    longDescription: 'Этот пересчёт связывает номинальную годовую ставку и эффективную ставку, возникающую только из капитализации процентов. Частота начисления меняет годовой множитель даже при неизменной номинальной ставке. Названия APR и APY в заголовке не означают, что здесь рассчитывается установленная законом полная стоимость кредита: комиссии, даты денежных потоков и правила конкретной страны не заданы.',
    howToUse: ['Выберите направление и введите соответствующую годовую ставку от 0 %.','Задайте целое положительное число одинаковых периодов в году.','Для ежемесячного начисления используйте 12, для годового — 1.','Сравнивайте эти ставки при одинаковом понимании комиссий и капитализации; полную стоимость продукта проверяйте отдельно.'],
    howItWorks: 'Пусть j — номинальная ставка в долях, m — начислений в году. Эффективная e = (1+j/m)^m−1. Обратно j = m[(1+e)^(1/m)−1]. Ставка за период равна j/m, годовой множитель — 1+e. Для любой частоты нулевая ставка остаётся нулевой; при m = 1 обе ставки равны. Расчёт использует устойчивые логарифмы для малых ставок.',
    example: 'Номинальные 18 % с 12 начислениями: 1,50 % за месяц, 19,56 % эффективных годовых и годовой множитель 1,1956. При одном начислении 18 % остаются 18 %. При ставке 0 % и 365 начислениях обе ставки равны 0 %, множитель 1.',
    faq: [
      { q: 'Когда годовая эффективная ставка строго выше номинальной?', a: 'В этой модели — при положительной ставке и более чем одном начислении. При нулевой ставке или одном начислении они совпадают.' },
      { q: 'Совпадает ли ежедневное начисление с непрерывным?', a: 'Нет. Для номинальных 18 % ежедневная и непрерывная ставки обе округляются до 19,72 %, но точные значения различаются. Непрерывный предел равен exp(0,18)−1.' },
      { q: 'Можно ли считать этот перевод юридической ставкой APR?', a: 'Нет. Раскрытие стоимости кредита может включать комиссии и специальные правила денежных потоков. Например, пояснение CFPB относится к ипотечному APR в США; оно не задаёт правила для всех стран.' },
      { q: 'Какие расходы отсутствуют в пересчёте APR/APY?', a: 'Разовые и регулярные комиссии, обязательное страхование, налоги и фактические даты выплат. Одинаковая эффективная ставка капитализации сама по себе не делает предложения равноценными.' },
    ],
    disclaimer: 'Только пересчёт постоянной ставки и одинаковых периодов капитализации. Это не банковская котировка, полная стоимость кредита или юридическая APR/TAE.',
  },
  en: {
    longDescription: 'This conversion links a nominal annual rate to the annual effective rate produced by compounding alone. More frequent compounding changes the annual multiplier even if the nominal rate stays fixed. APR and APY in the title do not turn this calculation into a statutory credit-cost disclosure: fees, dated cash flows and jurisdiction-specific rules are not inputs.',
    howToUse: ['Choose a direction and enter the corresponding nonnegative annual rate.','Enter a positive whole number of equal compounding periods per year.','Use 12 for monthly compounding or 1 for annual compounding.','Compare rates on a consistent fee and compounding basis; review the full product cost separately.'],
    howItWorks: 'For nominal annual share j and m periods, effective annual share e = (1+j/m)^m−1. In reverse, j = m[(1+e)^(1/m)−1]. The periodic rate is j/m and yearly multiplier is 1+e. Zero stays zero at every frequency; at m = 1 both annual rates match. Stable logarithms retain very small rates.',
    example: 'Nominal 18% with 12 periods gives 1.50% per month, annual effective 19.56% and multiplier 1.1956. With one period, 18% remains 18%. At 0% with 365 periods, both annual rates are 0% and the multiplier is 1.',
    faq: [
      { q: 'When is the compounded annual rate strictly above nominal?', a: 'With a positive rate and more than one period in this model. At zero interest or one period, the rates are equal.' },
      { q: 'Is daily compounding identical to continuous compounding?', a: 'No. At nominal 18%, both round to 19.72%, but their exact values differ. The continuous limit is exp(0.18)−1.' },
      { q: 'Does this APR conversion calculate a regulated loan APR?', a: 'No. Credit disclosures may include fees and prescribed cash-flow rules. The CFPB mortgage APR explanation is specific to the United States, rather than a rule for every country.' },
      { q: 'Which costs are omitted from the APR/APY conversion?', a: 'Upfront and recurring fees, required insurance, taxes and actual payment dates. Equal compounding rates alone do not make two products equivalent.' },
    ],
    disclaimer: 'Constant-rate compounding conversion only. It is not a product quote, full borrowing cost or statutory APR disclosure.',
  },
  uk: {
    longDescription: 'Перерахунок пов’язує номінальну річну ставку з ефективною річною ставкою лише від капіталізації. Частота нарахування змінює річний множник за незмінної номінальної ставки. APR і APY у назві не означають розрахунок законодавчо визначеної повної вартості кредиту: комісії, дати грошових потоків та правила конкретної країни тут не задані.',
    howToUse: ['Оберіть напрям і введіть відповідну невід’ємну річну ставку.','Задайте додатну цілу кількість однакових періодів на рік.','Для щомісячної капіталізації використовуйте 12, для річної — 1.','Порівнюйте ставки за однакового розуміння комісій і капіталізації; повну вартість продукту перевіряйте окремо.'],
    howItWorks: 'За номінальної частки j і m періодів ефективна частка e = (1+j/m)^m−1. Зворотний перехід: j = m[(1+e)^(1/m)−1]. Ставка періоду — j/m, річний множник — 1+e. Нульова ставка залишається нульовою за будь-якої частоти; за m = 1 річні ставки збігаються. Стійкі логарифми зберігають малі ставки.',
    example: 'Номінальні 18 % і 12 нарахувань: 1,50 % на місяць, 19,56 % ефективних річних, множник 1,1956. За одного нарахування 18 % залишаються 18 %. За ставки 0 % і 365 нарахувань обидві ставки — 0 %, множник — 1.',
    faq: [
      { q: 'Коли ефективна річна ставка строго більша за номінальну?', a: 'За додатної ставки та більш ніж одного нарахування в цій моделі. За нульової ставки або одного періоду вони рівні.' },
      { q: 'Чи однакові щоденна й неперервна капіталізація?', a: 'Ні. Для номінальних 18 % обидва результати округлюються до 19,72 %, але точні значення різні. Неперервна межа дорівнює exp(0,18)−1.' },
      { q: 'Чи визначає цей перехід законодавчу ставку APR?', a: 'Ні. Розкриття вартості кредиту може включати комісії та спеціальні правила потоків. Наприклад, пояснення CFPB про іпотечний APR стосується США, а не всіх країн.' },
      { q: 'Які витрати не входять до перерахунку APR/APY?', a: 'Разові та регулярні комісії, обов’язкове страхування, податки й фактичні дати виплат. Рівні ставки капіталізації ще не означають рівноцінність продуктів.' },
    ],
    disclaimer: 'Лише перерахунок сталої ставки й однакових періодів капіталізації. Це не банківська пропозиція, повна вартість кредиту чи законодавчий APR/TAE.',
  },
  de: {
    longDescription: 'Die Umrechnung verbindet einen nominalen Jahreszins mit dem jährlichen Effekt aus Zinseszinsen. Häufigere Verzinsung verändert den Jahresfaktor bei gleichem Nominalzins. Die Bezeichnungen APR und APY machen daraus keine gesetzliche Kreditkostenangabe: Gebühren, Zahlungsdaten und landesspezifische Vorgaben fehlen als Eingaben.',
    howToUse: ['Wähle die Richtung und gib den passenden nichtnegativen Jahreszins ein.','Gib eine positive ganze Zahl gleich langer Zinsperioden je Jahr an.','Monatlich entspricht 12, jährlich entspricht 1.','Vergleiche nur eine einheitliche Gebühren- und Zinseszinsbasis; vollständige Produktkosten prüfst du separat.'],
    howItWorks: 'Für nominalen Jahresanteil j und m Perioden ist e = (1+j/m)^m−1. Umgekehrt j = m[(1+e)^(1/m)−1]. Der Periodenzins ist j/m, der Jahresfaktor 1+e. Null bleibt bei jeder Häufigkeit null; bei m = 1 sind die Jahreszinsen gleich. Stabile Logarithmen erhalten auch sehr kleine Zinssätze.',
    example: '18 % nominal bei zwölf Perioden ergeben monatlich 1,50 %, jährlich effektiv 19,56 % und Faktor 1,1956. Eine Periode lässt 18 % unverändert. Bei 0 % und 365 Perioden bleiben beide Jahreszinsen 0 % und der Faktor 1.',
    faq: [
      { q: 'Wann übersteigt der Jahreszins aus Zinseszinsen den Nominalzins?', a: 'Bei positivem Zins und mehr als einer Periode in diesem Modell. Bei null Zins oder nur einer Periode besteht Gleichheit.' },
      { q: 'Sind tägliche und stetige Verzinsung identisch?', a: 'Nein. Bei nominal 18 % runden beide auf 19,72 %, unterscheiden sich aber ungerundet. Die stetige Grenze ist exp(0,18)−1.' },
      { q: 'Berechnet diese APR-Umrechnung den gesetzlich vorgeschriebenen Effektivzins?', a: 'Nein. Eine Kreditkostenangabe kann Gebühren und vorgeschriebene Zahlungsregeln einschließen. Die verlinkte CFPB-Erklärung zum Hypotheken-APR gilt für die USA und nicht weltweit.' },
      { q: 'Welche Kosten fehlen bei der APR/APY-Umrechnung?', a: 'Einmalige und laufende Gebühren, erforderliche Versicherungen, Steuern und tatsächliche Zahlungstermine. Gleicher Zinseszins allein macht Angebote nicht gleichwertig.' },
    ],
    disclaimer: 'Umrechnung konstanter Zinsen mit gleich langen Perioden. Kein Angebot und keine vollständige oder gesetzliche Kreditkostenberechnung.',
  },
  es: {
    longDescription: 'Se convierte un tipo nominal anual en el tipo efectivo anual generado únicamente por capitalización. Cambiar la frecuencia cambia el factor anual sin cambiar el nominal. Aunque la página mencione TIN y TAE, este resultado sin gastos no certifica la TAE legal de un préstamo: faltan comisiones, fechas de flujos y reglas de la jurisdicción.',
    howToUse: ['Elige la dirección e introduce el tipo anual correspondiente, no negativo.','Indica un número entero positivo de periodos iguales por año.','Usa 12 para capitalización mensual y 1 para anual.','Compara una misma base de gastos y capitalización; revisa por separado el coste completo del producto.'],
    howItWorks: 'Para el nominal anual j y m periodos, el efectivo e = (1+j/m)^m−1. En sentido inverso, j = m[(1+e)^(1/m)−1]. El tipo de cada periodo es j/m y el factor anual 1+e. Con interés cero ambos son cero; con m = 1 coinciden. Los logaritmos estables conservan tipos muy pequeños.',
    example: 'Un nominal del 18 % con 12 periodos da 1,50 % mensual, 19,56 % efectivo anual y factor 1,1956. Con un periodo el 18 % sigue siendo 18 %. Al 0 % con 365 periodos ambos tipos son 0 % y el factor es 1.',
    faq: [
      { q: '¿Cuándo supera estrictamente el tipo compuesto anual al nominal?', a: 'Con tipo positivo y más de un periodo en este modelo. Con interés cero o un único periodo son iguales.' },
      { q: '¿La capitalización diaria equivale exactamente a la continua?', a: 'No. Para un nominal del 18 % ambas se redondean al 19,72 %, pero los valores exactos difieren. El límite continuo es exp(0,18)−1.' },
      { q: '¿Esta conversión calcula la TAE legal del crédito?', a: 'No. Una medida legal de coste puede incluir gastos y reglas de flujos. La explicación enlazada del CFPB sobre APR hipotecario se refiere a Estados Unidos, no establece la TAE de otros países.' },
      { q: '¿Qué gastos quedan fuera de la conversión nominal y efectiva?', a: 'Comisiones iniciales y periódicas, seguros exigidos, impuestos y fechas reales. Igualar el tipo de capitalización no basta para igualar el coste de dos ofertas.' },
    ],
    disclaimer: 'Conversión de capitalización a tipo constante y periodos iguales, sin gastos. No constituye una oferta ni certifica la TAE legal o el coste total del crédito.',
  },
};
