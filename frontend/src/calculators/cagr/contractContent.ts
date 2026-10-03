import type { CalculatorDef } from '../../lib/types';
type Copy = Pick<CalculatorDef, 'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq' | 'disclaimer'>;
export const contractContent: Record<'ru' | 'en' | 'uk' | 'de' | 'es', Copy> = {
  "ru": {
    "longDescription": "Среднегодовой темп роста распределяет общий рост равномерно по сроку, поэтому удвоение за пять лет читается одним годовым числом, а не общей суммой. Это делает вложения разной длительности сопоставимыми. Вводите положительные значения одной валюты и одной базы оценки: рост счёта из-за пополнений нельзя целиком считать доходностью вложения. CAGR описывает только начальную и конечную точки, не обещает такой темп в будущем.",
    "howToUse": [
      "Введите положительную начальную и конечную стоимость в одной валюте.",
      "Задайте положительный срок в годах; 18 месяцев — это 1,5 года.",
      "Проверьте общий рост и годовой темп: это разные показатели.",
      "При пополнениях или снятиях используйте расчёт доходности по денежным потокам."
    ],
    "howItWorks": "CAGR = [(конечная/начальная)^(1/лет)−1]×100 %. Общий рост = (конечная/начальная−1)×100 %. Срок допускает дробные годы без округления до месяцев. Обе стоимости должны быть положительными; падение к положительной стоимости даёт отрицательный CAGR. Это эквивалентный постоянный темп, а не среднее арифметическое неизвестных годовых доходностей.",
    "example": "Рост со 100 000 до 200 000 денежных единиц за пять лет — 14,87 % в год и 100 % за весь срок. Падение с 200 000 до 100 000 за четыре года даёт −15,91 % в год. При равных положительных значениях CAGR равен 0 %.",
    "faq": [
      {
        "q": "Почему нельзя просто разделить общий рост на годы?",
        "a": "Так теряется сложный процент. Удвоение за пять лет — это 14,87 % в год, а не 20 %: каждый год растёт поверх предыдущего."
      },
      {
        "q": "Бывает ли CAGR отрицательным?",
        "a": "Да. Снижение даёт отрицательный годовой темп — это честный способ описать падающую стоимость."
      },
      {
        "q": "Показывает ли CAGR колебания?",
        "a": "Нет, это сглаженное среднее. У двух вложений с одинаковыми началом, концом и сроком CAGR совпадёт, как бы по-разному они ни двигались внутри срока."
      },
      {
        "q": "Что делать, если срок не целое число лет?",
        "a": "Введите дробное значение: полтора года — это 1,5."
      },
      {
        "q": "Почему пополнение счёта искажает CAGR вложения?",
        "a": "Конечная стоимость включает внесённые деньги, но у этого расчёта нет полей для них. Датированные взносы и снятия требуют денежно-потоковой методики, например XIRR; CAGR без них не определяет доходность капитала."
      }
    ],
    "disclaimer": "Рост между двумя положительными значениями. Пополнения, снятия, комиссии, налоги, валютные изменения и инфляция автоматически не выделяются; история риска и будущая доходность не определяются."
  },
  "en": {
    "longDescription": "The compound annual growth rate spreads total growth evenly across the period, so a five-year doubling reads as one annual figure instead of a lump sum. It makes investments of different lengths comparable. Use positive endpoints on one currency and valuation basis: a balance increase from contributions is not entirely investment return. CAGR describes the endpoints and does not promise the same future growth.",
    "howToUse": [
      "Enter positive starting and ending values in one currency.",
      "Supply a positive duration in years; 18 months is 1.5 years.",
      "Compare overall growth with annual growth; they measure different spans.",
      "If money was added or withdrawn, use a cash-flow return method."
    ],
    "howItWorks": "CAGR = [(ending/starting)^(1/years)−1]×100%. Overall growth = (ending/starting−1)×100%. Fractional years are used directly, without rounding to months. Both values must be positive; a decline to a positive value gives a negative CAGR. It is an equivalent constant rate, rather than the arithmetic mean of unknown yearly returns.",
    "example": "Growing from 100,000 to 200,000 monetary units over five years gives 14.87% annually and 100% overall. Falling from 200,000 to 100,000 over four years gives −15.91% annually. Equal positive endpoints give CAGR 0%.",
    "faq": [
      {
        "q": "Why not just divide total growth by years?",
        "a": "That ignores compounding. Doubling over five years is 14.87% a year, not 20% — each year grows on top of the previous one."
      },
      {
        "q": "Can CAGR be negative?",
        "a": "Yes. A decline gives a negative annual rate, which is the honest way to describe a shrinking value."
      },
      {
        "q": "Does it show volatility?",
        "a": "No. CAGR is a smoothed average — two investments with the same start, end and duration share a CAGR however differently they moved in between."
      },
      {
        "q": "What if the period is not whole years?",
        "a": "Enter fractional years. Eighteen months is 1.5."
      },
      {
        "q": "Why do account contributions distort investment CAGR?",
        "a": "The ending balance includes added money, but this calculator has no cash-flow inputs. Dated contributions and withdrawals need a cash-flow method such as XIRR; endpoint CAGR alone does not identify the investment return."
      }
    ],
    "disclaimer": "Growth between two positive endpoints. Contributions, withdrawals, fees, taxes, currency changes and inflation are not separated automatically; risk history and future returns are not determined."
  },
  "uk": {
    "longDescription": "Середньорічний темп зростання приводить будь-яке зростання до однієї порівнянної цифри — річної. Це середнє геометричне, а не арифметичне: воно враховує складний процент, тому подвоєння за п’ять років дає не 20 % на рік, а 14,87 %. Вводьте додатні вартості в одній валюті та на одній базі оцінки. Поповнення рахунку не є доходом від вкладення. CAGR описує крайні точки, а не гарантує майбутнє зростання.",
    "howToUse": [
      "Введіть додатну початкову й кінцеву вартість в одній валюті.",
      "Задайте додатний строк у роках: 18 місяців — 1,5 року.",
      "Порівняйте загальне зростання з річним темпом.",
      "За поповнень або зняття коштів потрібна методика грошових потоків."
    ],
    "howItWorks": "CAGR = [(кінцева/початкова)^(1/років)−1]×100 %. Загальне зростання = (кінцева/початкова−1)×100 %. Дробові роки використовуються без округлення до місяців. Обидві вартості мають бути додатними; зменшення до додатної вартості дає від’ємний CAGR. Це еквівалентний сталий темп, а не середнє арифметичне невідомих річних доходностей.",
    "example": "Зростання зі 100 000 до 200 000 грошових одиниць за п’ять років — 14,87 % щорічно та 100 % загалом. Падіння з 200 000 до 100 000 за чотири роки — −15,91 % щорічно. Рівні додатні вартості дають CAGR 0 %.",
    "faq": [
      {
        "q": "Чому не можна поділити загальне зростання на роки?",
        "a": "Бо зростання складне: кожен рік відсоток нараховується на вже збільшену суму. Подвоєння за п’ять років — це 14,87 % на рік, а не 20 %."
      },
      {
        "q": "Чи показує CAGR реальну динаміку?",
        "a": "Ні, він згладжує її повністю. Актив міг впасти вдвічі, а потім вирости вчетверо — CAGR покаже рівний темп, ніби нічого не відбувалося. Для оцінки ризику потрібна волатильність."
      },
      {
        "q": "Чи працює для від’ємного зростання?",
        "a": "Так, якщо кінцева вартість більша за нуль. Темп вийде від’ємним і покаже середню річну швидкість спаду."
      },
      {
        "q": "Чим CAGR відрізняється від ROI?",
        "a": "CAGR приводить результат до року й дозволяє порівнювати вкладення різної тривалості. ROI показує загальний результат без урахування строку."
      },
      {
        "q": "Чому поповнення рахунку спотворює CAGR вкладення?",
        "a": "Кінцева вартість містить внесені гроші, але полів для потоків тут немає. Датовані внески та зняття потребують, наприклад, XIRR; сам CAGR крайніх точок не визначає дохідність капіталу."
      }
    ],
    "disclaimer": "Зростання між двома додатними значеннями. Внески, зняття, комісії, податки, валютні зміни й інфляція автоматично не відокремлюються; історія ризику та майбутня дохідність не визначаються."
  },
  "de": {
    "longDescription": "Die mittlere jährliche Wachstumsrate verteilt das Gesamtwachstum gleichmäßig über den Zeitraum, eine Verdopplung über fünf Jahre liest sich also als eine Jahreszahl statt als Klumpen. Sie macht Anlagen verschiedener Länge vergleichbar. Verwende positive Werte in derselben Währung und auf gleicher Bewertungsbasis: Einzahlungen sind kein Anlageertrag. Die CAGR beschreibt die Endpunkte und garantiert kein künftiges Wachstum.",
    "howToUse": [
      "Gib positive Anfangs- und Endwerte in derselben Währung ein.",
      "Setze eine positive Dauer in Jahren an; 18 Monate sind 1,5 Jahre.",
      "Unterscheide Gesamtwachstum und jährliche Rate.",
      "Bei Ein- oder Auszahlungen brauchst du eine Zahlungsstrommethode."
    ],
    "howItWorks": "CAGR = [(Endwert/Anfangswert)^(1/Jahre)−1]×100 %. Gesamtwachstum = (Endwert/Anfangswert−1)×100 %. Gebrochene Jahre werden ohne Monatsrundung verwendet. Beide Werte müssen positiv sein; ein Rückgang zu einem positiven Endwert ergibt eine negative CAGR. Sie ist eine äquivalente konstante Rate, kein arithmetischer Mittelwert unbekannter Jahresrenditen.",
    "example": "Von 100.000 auf 200.000 Geldeinheiten in fünf Jahren: 14,87 % jährlich und 100 % insgesamt. Von 200.000 auf 100.000 in vier Jahren: −15,91 % jährlich. Gleiche positive Endpunkte ergeben CAGR 0 %.",
    "faq": [
      {
        "q": "Warum nicht einfach das Gesamtwachstum durch die Jahre teilen?",
        "a": "Das lässt die Aufzinsung außer Acht. Eine Verdopplung über fünf Jahre sind 14,87 % im Jahr und nicht 20 % — jedes Jahr wächst auf dem vorigen auf."
      },
      {
        "q": "Kann die CAGR negativ sein?",
        "a": "Ja. Ein Rückgang ergibt eine negative Jahresrate, und das ist die ehrliche Art, einen schrumpfenden Wert zu beschreiben."
      },
      {
        "q": "Zeigt sie die Schwankungen?",
        "a": "Nein. Die CAGR ist ein geglätteter Mittelwert — zwei Anlagen mit gleichem Anfang, Ende und Zeitraum teilen eine CAGR, wie verschieden sie sich dazwischen auch bewegt haben."
      },
      {
        "q": "Was, wenn der Zeitraum keine ganzen Jahre umfasst?",
        "a": "Trage gebrochene Jahre ein. Achtzehn Monate sind 1,5."
      },
      {
        "q": "Warum verfälschen Einzahlungen die Anlage-CAGR?",
        "a": "Der Endwert enthält zusätzliches Geld, doch Zahlungsströme sind keine Eingaben. Datierte Ein- und Auszahlungen benötigen etwa XIRR; die CAGR der Endpunkte allein bestimmt keinen Kapitalertrag."
      }
    ],
    "disclaimer": "Wachstum zwischen zwei positiven Werten. Einzahlungen, Entnahmen, Gebühren, Steuern, Währungseffekte und Inflation werden nicht automatisch getrennt; Risikoverlauf und künftige Rendite bleiben offen."
  },
  "es": {
    "longDescription": "La tasa de crecimiento anual compuesta reparte el crecimiento total de forma uniforme a lo largo del periodo, así que duplicarse en cinco años se lee como una cifra anual en lugar de como un salto. Hace comparables inversiones de distinta duración. Usa valores positivos con la misma moneda y base de valoración: un aumento por aportaciones no es íntegramente rentabilidad. El CAGR describe los extremos y no garantiza ese ritmo futuro.",
    "howToUse": [
      "Introduce valores inicial y final positivos en una misma moneda.",
      "Indica una duración positiva en años; 18 meses son 1,5 años.",
      "Distingue crecimiento total y ritmo anual.",
      "Con aportaciones o retiradas, usa un método basado en flujos."
    ],
    "howItWorks": "CAGR = [(final/inicial)^(1/años)−1]×100 %. Crecimiento total = (final/inicial−1)×100 %. Se usan años fraccionarios sin redondear a meses. Ambos valores deben ser positivos; una caída hasta un valor positivo da CAGR negativo. Es un ritmo constante equivalente, no la media aritmética de rentabilidades anuales desconocidas.",
    "example": "Pasar de 100.000 a 200.000 unidades monetarias en cinco años da 14,87 % anual y 100 % total. Bajar de 200.000 a 100.000 en cuatro años da −15,91 % anual. Dos valores positivos iguales dan CAGR 0 %.",
    "faq": [
      {
        "q": "¿Por qué no dividir sin más el crecimiento total entre los años?",
        "a": "Eso ignora la capitalización. Duplicarse en cinco años es un 14,87 % anual y no un 20 %: cada año crece sobre el anterior."
      },
      {
        "q": "¿El CAGR puede ser negativo?",
        "a": "Sí. Un descenso da una tasa anual negativa, que es la manera honesta de describir un valor que mengua."
      },
      {
        "q": "¿Muestra la volatilidad?",
        "a": "No. El CAGR es una media suavizada: dos inversiones con el mismo inicio, final y duración comparten CAGR por distinto que fuera su recorrido intermedio."
      },
      {
        "q": "¿Y si el periodo no son años enteros?",
        "a": "Introduce años fraccionarios. Dieciocho meses son 1,5."
      },
      {
        "q": "¿Por qué las aportaciones distorsionan el CAGR de una inversión?",
        "a": "El saldo final contiene dinero añadido, pero no hay entradas para esos flujos. Aportaciones y retiradas fechadas requieren, por ejemplo, XIRR; el CAGR de los extremos no identifica por sí solo la rentabilidad del capital."
      }
    ],
    "disclaimer": "Crecimiento entre dos valores positivos. No separa automáticamente aportaciones, retiradas, gastos, impuestos, cambios de moneda ni inflación; no determina riesgo histórico ni rentabilidad futura."
  }
};
