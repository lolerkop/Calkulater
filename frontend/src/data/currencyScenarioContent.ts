import { currencyByCode, ratesToUSD, sourcesForCurrencies, type CurrencyCode } from './currencies';
import type { CalculatorDef } from '../lib/types';

// Numerical examples follow the saved data, without pretending that a past
// amount is a current quote. Expected values use source coefficients directly,
// independently of the calculator implementation.
export const currencyTeachingScenarios = {
  'currency-converter': { amount: 250, from: 'GBP', to: 'RON' },
  'usd-to-eur': { amount: 100, from: 'USD', to: 'EUR' },
  'eur-to-mdl': { amount: 200, from: 'EUR', to: 'MDL' },
  'usd-to-mdl': { amount: 100, from: 'USD', to: 'MDL' },
} satisfies Record<string, { amount: number; from: CurrencyCode; to: CurrencyCode }>;

type CurrencyId = keyof typeof currencyTeachingScenarios;
type Language = 'ru' | 'en' | 'uk' | 'de' | 'es';
const methods: Record<Language, Record<CurrencyId, string>> = {
  ru: {
    'currency-converter': 'Для каждой валюты сохранён коэффициент b — количество её единиц за 1 USD. Результат = сумма × b целевой валюты / b исходной валюты. Коэффициенты округлены при сохранении, результат обычно показан до двух знаков. Источники и даты разных валют могут различаться: сравнивайте их отдельно. Это справочная оценка без спреда и комиссий.',
    'usd-to-eur': 'USD — общая база с коэффициентом 1. Сумма EUR = сумма USD × сохранённый коэффициент EUR. Для данных ЕЦБ коэффициент EUR получен обращением опубликованного значения USD за 1 EUR. Сохранённый коэффициент округлён, итог обычно показан до двух знаков; он не является ценой продажи евро клиенту.',
    'eur-to-mdl': 'Сумма MDL = сумма EUR × b MDL / b EUR, где b означает единицы валюты за 1 USD. Это кросс-курс двух сохранённых коэффициентов, а не прямая публикация Национального банка Молдовы для пары EUR/MDL. Даты и источники EUR и MDL указаны отдельно; для отчётности потребуется правило и курс именно вашей операции.',
    'usd-to-mdl': 'USD имеет коэффициент 1, поэтому сумма MDL = сумма USD × сохранённый коэффициент MDL. Фактический источник лея и дата показаны в результате; при резервном источнике он отмечается отдельно. Итог обычно округлён до двух знаков и не включает разницу покупки и продажи или сборы.',
  },
  en: {
    'currency-converter': 'Each saved coefficient b is the number of currency units per 1 USD. Result = amount × target b / source b. Saved coefficients are rounded, and the result normally shows two decimals. Different currencies may have different source dates; check each separately. This is a reference estimate without a spread or fees.',
    'usd-to-eur': 'USD is the common base with coefficient 1. EUR amount = USD amount × the saved EUR coefficient. For ECB data, that coefficient is the reciprocal of the published USD per 1 EUR. The saved coefficient is rounded and the result normally shows two decimals; it is not a customer sale price for euros.',
    'eur-to-mdl': 'MDL amount = EUR amount × MDL b / EUR b, where b means currency units per 1 USD. This is a cross-rate from two saved coefficients, rather than a direct National Bank of Moldova EUR/MDL publication. EUR and MDL source dates are shown separately; accounting needs the rule and rate applicable to your transaction.',
    'usd-to-mdl': 'USD has coefficient 1, so MDL amount = USD amount × the saved MDL coefficient. The actual source and date for the leu are shown in the result, including an explicitly marked fallback when used. The result normally rounds to two decimals and excludes buy/sell spreads and charges.',
  },
  uk: {
    'currency-converter': 'Коефіцієнт b — кількість одиниць валюти за 1 USD. Результат = сума × b цільової валюти / b вихідної валюти. Збережені коефіцієнти округлені, результат зазвичай має два десяткові знаки. Джерела та дати різних валют можуть відрізнятися: перевіряйте кожне окремо. Це довідкова оцінка без спреда та комісій.',
    'usd-to-eur': 'USD — спільна база з коефіцієнтом 1. Сума EUR = сума USD × збережений коефіцієнт EUR. Для даних ЄЦБ цей коефіцієнт — обернене значення опублікованих USD за 1 EUR. Коефіцієнт округлений, а результат зазвичай має два знаки; це не ціна продажу євро клієнту.',
    'eur-to-mdl': 'Сума MDL = сума EUR × b MDL / b EUR, де b — одиниці валюти за 1 USD. Це крос-курс двох збережених коефіцієнтів, а не пряма публікація Національного банку Молдови для EUR/MDL. Дати та джерела обох валют показані окремо; для звітності потрібні правило й курс саме вашої операції.',
    'usd-to-mdl': 'USD має коефіцієнт 1, тому сума MDL = сума USD × збережений коефіцієнт MDL. Фактичне джерело лея та дату показано в результаті; резервне джерело позначається окремо. Результат зазвичай округлений до двох знаків і не враховує різницю купівлі та продажу чи збори.',
  },
  de: {
    'currency-converter': 'Jeder gespeicherte Koeffizient b ist die Zahl der Währungseinheiten je 1 USD. Ergebnis = Betrag × Ziel-b / Ausgangs-b. Gespeicherte Koeffizienten sind gerundet; das Ergebnis zeigt normalerweise zwei Dezimalstellen. Währungen können unterschiedliche Quellen und Kursdaten haben: prüfe jedes einzeln. Dies ist eine Referenzschätzung ohne Spread und Gebühren.',
    'usd-to-eur': 'USD ist die gemeinsame Basis mit Koeffizient 1. EUR-Betrag = USD-Betrag × gespeicherter EUR-Koeffizient. Bei EZB-Daten ist dieser Koeffizient der Kehrwert der veröffentlichten USD je 1 EUR. Der Koeffizient ist gerundet, das Ergebnis zeigt normalerweise zwei Dezimalstellen und ist kein Verkaufspreis für Bankkunden.',
    'eur-to-mdl': 'MDL-Betrag = EUR-Betrag × MDL-b / EUR-b; b bedeutet Währungseinheiten je 1 USD. Dies ist ein Kreuzkurs aus zwei gespeicherten Koeffizienten, keine direkte EUR/MDL-Veröffentlichung der Nationalbank Moldaus. Quellen und Kursdaten beider Währungen werden getrennt gezeigt; für die Buchhaltung brauchst du die für deinen Vorgang geltende Regel und den passenden Kurs.',
    'usd-to-mdl': 'USD hat Koeffizient 1: MDL-Betrag = USD-Betrag × gespeicherter MDL-Koeffizient. Quelle und Datum für den Leu stehen im Ergebnis; eine Ersatzquelle wird gesondert markiert. Das Ergebnis wird normalerweise auf zwei Dezimalstellen gerundet und enthält weder An- und Verkaufsspanne noch Gebühren.',
  },
  es: {
    'currency-converter': 'Cada coeficiente guardado b es el número de unidades de moneda por 1 USD. Resultado = importe × b de destino / b de origen. Los coeficientes están redondeados y el resultado suele mostrar dos decimales. Las monedas pueden tener distintas fuentes y fechas; comprueba cada una por separado. Es una estimación de referencia sin diferencial ni comisiones.',
    'usd-to-eur': 'USD es la base común, con coeficiente 1. Importe EUR = importe USD × coeficiente EUR guardado. En los datos del BCE, ese coeficiente es el inverso del valor publicado de USD por 1 EUR. Está redondeado y el resultado suele mostrar dos decimales; no es un precio de venta de euros a clientes.',
    'eur-to-mdl': 'Importe MDL = importe EUR × b MDL / b EUR, donde b significa unidades de moneda por 1 USD. Es un tipo cruzado de dos coeficientes guardados, no una publicación directa EUR/MDL del Banco Nacional de Moldavia. Las fuentes y fechas de ambas monedas se muestran por separado; la contabilidad requiere la regla y el tipo aplicables a tu operación.',
    'usd-to-mdl': 'USD tiene coeficiente 1: importe MDL = importe USD × coeficiente MDL guardado. La fuente real y la fecha del leu aparecen en el resultado; se identifica por separado cualquier fuente de reserva. El resultado suele redondearse a dos decimales y no incluye diferencial entre compra y venta ni cargos.',
  },
};

const scenarioIntro = {
  ru: 'Учебный пример на сохранённых данных', en: 'Teaching example using saved data', uk: 'Навчальний приклад на збережених даних', de: 'Rechenbeispiel mit gespeicherten Daten', es: 'Ejemplo didáctico con datos guardados',
};
const sourceLabel = { ru: 'Даты фактических источников', en: 'Actual source dates', uk: 'Дати фактичних джерел', de: 'Kursdaten der tatsächlichen Quellen', es: 'Fechas de las fuentes reales' };
const zeroLabel = { ru: 'При нулевой сумме', en: 'With a zero amount', uk: 'За нульової суми', de: 'Bei Betrag null', es: 'Con un importe de cero' };
const fallbackLabel = { ru: 'резервный источник', en: 'fallback source', uk: 'резервне джерело', de: 'Ersatzquelle', es: 'fuente de reserva' };

// These two locales previously repeated a travel/budget introduction and told
// visitors to select currencies on pages where that pair is actually pinned.
// The other locales retain their reviewed, subject-specific introductions.
const usage: Record<'en' | 'es', Record<CurrencyId, Pick<CalculatorDef, 'longDescription' | 'howToUse'>>> = {
  en: {
    'currency-converter': {
      longDescription: 'Compare a saved reference estimate between any two supported currencies. Choose both currencies, then inspect their individual source dates before using the result as a budget estimate.',
      howToUse: ['Enter a nonnegative amount in the source currency.', 'Choose both currencies; the result uses their saved coefficients relative to USD.', 'Check the source and date for each currency and compare a provider’s quote separately.'],
    },
    'usd-to-eur': {
      longDescription: 'Convert a USD amount into EUR using the saved reference coefficient. This page fixes the direction USD → EUR and shows the source date for the euro coefficient.',
      howToUse: ['Enter the amount in US dollars; the USD → EUR pair is fixed.', 'Read the reference amount in euros and the date of the saved EUR coefficient.', 'For an exchange, compare the provider’s EUR payout after its spread and fees.'],
    },
    'eur-to-mdl': {
      longDescription: 'Estimate Moldovan lei from euros using the saved EUR and MDL coefficients. Their cross-rate can differ from the National Bank of Moldova’s direct EUR/MDL rate, so check the two source dates and the purpose of your calculation.',
      howToUse: ['Enter the amount in euros; the EUR → MDL pair is fixed.', 'Check both the EUR and MDL source dates beside the reference result.', 'For accounting or an actual exchange, obtain the rate and fee rules applicable to that operation.'],
    },
    'usd-to-mdl': {
      longDescription: 'Estimate Moldovan lei from a USD amount using the saved MDL coefficient per US dollar. The displayed source and date identify the data used; a provider’s buy or sell quote may differ.',
      howToUse: ['Enter the amount in US dollars; the USD → MDL pair is fixed.', 'Read the reference amount in lei and the MDL source date, including any marked fallback.', 'Compare the reference result with the provider’s applicable buy or sell rate and charges.'],
    },
  },
  es: {
    'currency-converter': {
      longDescription: 'Compara una estimación de referencia guardada entre dos monedas admitidas. Elige ambas monedas y comprueba las fechas de sus fuentes antes de usar el resultado para un presupuesto.',
      howToUse: ['Introduce un importe no negativo en la moneda de origen.', 'Elige ambas monedas; el resultado utiliza sus coeficientes guardados respecto al USD.', 'Comprueba la fuente y la fecha de cada moneda y compara por separado la oferta de un proveedor.'],
    },
    'usd-to-eur': {
      longDescription: 'Convierte un importe en USD a EUR con el coeficiente de referencia guardado. Esta página fija la dirección USD → EUR e indica la fecha de la fuente del coeficiente del euro.',
      howToUse: ['Introduce el importe en dólares estadounidenses; el par USD → EUR está fijado.', 'Consulta el importe de referencia en euros y la fecha del coeficiente EUR guardado.', 'Para un cambio, compara los euros que entregaría el proveedor después del diferencial y las comisiones.'],
    },
    'eur-to-mdl': {
      longDescription: 'Estima lei moldavos a partir de euros con los coeficientes EUR y MDL guardados. Su tipo cruzado puede diferir del tipo EUR/MDL directo del Banco Nacional de Moldavia: comprueba ambas fechas y el propósito del cálculo.',
      howToUse: ['Introduce el importe en euros; el par EUR → MDL está fijado.', 'Comprueba las fechas de las fuentes EUR y MDL junto al resultado de referencia.', 'Para contabilidad o un cambio real, consulta el tipo y las comisiones aplicables a esa operación.'],
    },
    'usd-to-mdl': {
      longDescription: 'Estima lei moldavos a partir de USD con el coeficiente MDL guardado por dólar estadounidense. La fuente y la fecha identifican los datos utilizados; la oferta de compra o venta de un proveedor puede diferir.',
      howToUse: ['Introduce el importe en dólares estadounidenses; el par USD → MDL está fijado.', 'Consulta el importe de referencia en lei y la fecha de la fuente MDL, incluida cualquier fuente de reserva señalada.', 'Compara la referencia con el tipo de compra o venta y los cargos aplicables del proveedor.'],
    },
  },
};

export function currencyExpectedExample(id: CurrencyId): string {
  const { amount, from, to } = currencyTeachingScenarios[id];
  const number = amount * ratesToUSD[to] / ratesToUSD[from];
  return new Intl.NumberFormat('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(number) + ' ' + currencyByCode[to].symbol;
}

export function getCurrencyScenarioCopy(id: string, locale: string): (Pick<CalculatorDef, 'howItWorks' | 'example'> & Partial<Pick<CalculatorDef, 'longDescription' | 'howToUse'>>) | undefined {
  if (!Object.hasOwn(currencyTeachingScenarios, id)) return undefined;
  const key = id as CurrencyId;
  const lang: Language = locale === 'ru' || locale === 'uk' || locale === 'de' || locale === 'es' ? locale : 'en';
  const { amount, from, to } = currencyTeachingScenarios[key];
  const number = (value: number, digits = 8) => new Intl.NumberFormat(lang, { maximumFractionDigits: digits }).format(value);
  const result = number(amount * ratesToUSD[to] / ratesToUSD[from], 2);
  const dates = sourcesForCurrencies([from, to]).map((source) => `${source.id.toUpperCase()} ${source.date}${source.fallback ? ` (${fallbackLabel[lang]})` : ''}`).join('; ');
  return { ...(lang === 'en' || lang === 'es' ? usage[lang][key] : {}), howItWorks: methods[lang][key], example: `${scenarioIntro[lang]}: ${number(amount)} ${from} × ${number(ratesToUSD[to])} / ${number(ratesToUSD[from])} = ${result} ${to}. ${sourceLabel[lang]}: ${dates}. ${zeroLabel[lang]}: 0 ${from} = 0 ${to}.` };
}
