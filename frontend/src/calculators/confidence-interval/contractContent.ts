import type { CalculatorCopy } from '../../lib/platform/types';

// Individually reviewed existing native body, with scoped subject corrections.
export const mathWave8ContractContent = {
  "ru": {
    "longDescription": "Строит двусторонний нормальный Z-интервал для среднего: x̄ ± z·σ/√n. Для независимых наблюдений из нормальной совокупности этот метод предполагает известное стандартное отклонение σ. Если вместо него подставить выборочное s, получится нормальное приближение, а не точный интервал Стьюдента для малой выборки. Ширина зависит от стандартной ошибки среднего: при неизменном отклонении уменьшение ширины вдвое требует увеличить n вчетверо. Уровень доверия описывает повторяемую процедуру, а не гарантирует истинное среднее внутри конкретного интервала.",
    "howItWorks": "SE = σ/√n; E = z·SE; границы = x̄ − E и x̄ + E. Здесь z = 1,645 для 90 %, 1,96 для 95 % и 2,576 для 99 % — сохранённые округлённые нормальные квантили. α = 1 − уровень доверия; половина α относится к каждому хвосту. Калькулятор принимает целое n от 2 до 9007199254740991 и σ ≥ 0. Среднее, σ, SE, E и границы имеют одинаковую единицу данных; z и α безразмерны. Если ненулевая ширина неразличима при числовом представлении границ, возвращается ошибка диапазона. Различимые узкие границы показываются с дополнительными значащими цифрами.",
    "howToUse": [
      "Введите выборочное среднее — оно может быть и отрицательным.",
      "Укажите известное σ или осознанно выбранное приближение с выборочным s; единица та же, что у среднего.",
      "Задайте объём выборки: он должен быть не меньше двух.",
      "Выберите уровень доверия — чем он выше, тем шире интервал."
    ],
    "example": "Среднее 100 при отклонении 15 и выборке 36 даёт интервал 95,1 … 104,9 на уровне 95 %.",
    "faq": [
      {
        "q": "Почему объём выборки входит через корень?",
        "a": "Потому что усреднение снижает разброс пропорционально корню из числа наблюдений. Чтобы сузить интервал вдвое, выборку нужно увеличить вчетверо."
      },
      {
        "q": "Используется ли распределение Стьюдента?",
        "a": "Нет. При неизвестном σ и нормальных данных точный метод использует s и квантиль t с n−1 степенями свободы. Здесь рассчитывается Z-интервал: известное σ либо явно выбранное нормальное приближение с s. Для малой выборки разницу нельзя считать обязательно небольшой."
      },
      {
        "q": "Почему выборка из одного наблюдения отклоняется?",
        "a": "Это ограничение данного калькулятора: n ≥ 2. По одному наблюдению выборочное s действительно не оценить, но при внешне известном σ нормальная формула математически существует и для n = 1. Отказ здесь не означает, что любой такой интервал невозможен."
      },
      {
        "q": "Что означает уровень доверия 95 %?",
        "a": "Что при многократном повторении опыта примерно 95 % таких интервалов накрыли бы истинное среднее. Это свойство метода, а не вероятность для одного конкретного интервала."
      },
      {
        "q": "Можно ли задать нулевое отклонение?",
        "a": "Формально да: подстановка σ = 0 даёт SE = E = 0 и точечный интервал. Однако одинаковые наблюдения и выборочное s = 0 сами по себе не доказывают нулевую дисперсию совокупности или достоверность точечного вывода."
      }
    ]
  },
  "en": {
    "longDescription": "Constructs a two-sided normal Z interval for a mean: x̄ ± z·σ/√n. For independent observations from a normal population, this method assumes a known population standard deviation σ. Substituting a sample deviation s gives a normal approximation, not the exact small-sample Student t interval. With the deviation fixed, halving the width requires four times the sample size. Confidence describes repeated use of the procedure and does not guarantee that this particular interval contains the population mean.",
    "howItWorks": "SE = σ/√n; E = z·SE; the bounds are x̄ − E and x̄ + E. The preserved rounded normal quantiles are z = 1.645 for 90%, 1.96 for 95% and 2.576 for 99%. α = 1 − confidence level, split equally between the two tails. This calculator accepts integer n from 2 to 9007199254740991 and σ ≥ 0. The mean, σ, SE, E and bounds share the data unit; z and α are dimensionless. If a nonzero width cannot be resolved in the numeric bounds, a range error is returned. Resolvable narrow bounds are displayed with additional significant digits.",
    "howToUse": [
      "Enter the sample mean — it may be negative.",
      "Enter known σ or deliberately use sample s as an approximation, in the same unit as the mean.",
      "Enter the sample size; it must be at least two.",
      "Choose the confidence level — a higher level gives a wider interval."
    ],
    "example": "A mean of 100 with a deviation of 15 over a sample of 36 gives 95.1 … 104.9 at the 95% level.",
    "faq": [
      {
        "q": "Why does sample size enter through a square root?",
        "a": "Because averaging reduces spread in proportion to the root of the number of observations. Halving the interval takes four times the sample."
      },
      {
        "q": "Is the Student distribution used?",
        "a": "No. With unknown σ and normal data, the exact method uses s and a t quantile with n−1 degrees of freedom. This tool calculates a Z interval using known σ or an explicitly chosen normal approximation with s. The small-sample difference need not be slight."
      },
      {
        "q": "Why is a sample of one rejected?",
        "a": "This calculator requires n ≥ 2. One observation cannot estimate a sample s, although the normal formula is mathematically defined at n = 1 when σ is known externally. The product restriction does not make every such interval impossible."
      },
      {
        "q": "What does a 95% confidence level mean?",
        "a": "That across repeated experiments about 95% of such intervals would contain the true mean. It is a property of the method, not a probability for one particular interval."
      },
      {
        "q": "Can the deviation be zero?",
        "a": "Formally yes: σ = 0 gives SE = E = 0 and a point interval. Identical observed values and a sample s of zero do not by themselves establish zero population variance or justify certainty about the population mean."
      }
    ]
  },
  "uk": {
    "longDescription": "Будує двосторонній нормальний Z-інтервал для середнього: x̄ ± z·σ/√n. Для незалежних спостережень із нормальної сукупності метод передбачає відоме стандартне відхилення σ. Підстановка вибіркового s дає нормальне наближення, а не точний інтервал Стьюдента для малої вибірки. За незмінного відхилення звуження інтервалу вдвічі потребує вчетверо більшого n. Рівень довіри характеризує повторювану процедуру й не гарантує, що конкретний інтервал містить істинне середнє.",
    "howItWorks": "SE = σ/√n; E = z·SE; межі = x̄ − E та x̄ + E. Тут z = 1,645 для 90 %, 1,96 для 95 % і 2,576 для 99 % — збережені округлені нормальні квантилі. α = 1 − рівень довіри; половина α припадає на кожен хвіст. Калькулятор приймає ціле n від 2 до 9007199254740991 та σ ≥ 0. Середнє, σ, SE, E і межі мають однакову одиницю даних; z і α безрозмірні. Якщо ненульова ширина не розрізняється в числовому поданні меж, повертається помилка діапазону. Розрізнювані вузькі межі показуються з додатковими значущими цифрами.",
    "howToUse": [
      "Введіть вибіркове середнє — воно може бути й від’ємним.",
      "Укажіть відоме σ або свідомо вибране наближення з вибірковим s; одиниця та сама, що й у середнього.",
      "Задайте обсяг вибірки: він має бути не меншим за два.",
      "Виберіть рівень довіри — що він вищий, то ширший інтервал."
    ],
    "example": "Середнє 100 за відхилення 15 і вибірки 36 дає інтервал 95,1 … 104,9 на рівні 95 %. Щоб звузити його вдвічі, знадобилося б 144 спостереження замість 36.",
    "faq": [
      {
        "q": "Чому вибірку треба збільшувати вчетверо?",
        "a": "Бо в знаменнику стоїть корінь з обсягу. Щоб зменшити стандартну похибку вдвічі, корінь має вирости вдвічі, а сам обсяг — учетверо. Це головна причина, чому точні опитування дорогі."
      },
      {
        "q": "Що означає рівень 95 %?",
        "a": "Що за багаторазового повторення вибірки приблизно 95 % таких інтервалів накриють істинне середнє. Це властивість процедури, а не твердження про конкретний інтервал."
      },
      {
        "q": "Чому вищий рівень дає ширший інтервал?",
        "a": "Бо росте критичне значення: з 1,96 для 95 % до 2,576 для 99 %. Більша впевненість купується меншою точністю — інакше й бути не може."
      },
      {
        "q": "Чому взято нормальний розподіл, а не Стьюдента?",
        "a": "Ні. За невідомого σ і нормальних даних точний метод використовує s та квантиль t з n−1 ступенями свободи. Тут рахується Z-інтервал із відомим σ або явно вибране нормальне наближення з s. Для малої вибірки різниця не обов’язково мала."
      },
      {
        "q": "Чому вибірка з одного спостереження відхиляється?",
        "a": "Калькулятор обмежений n ≥ 2. За одним спостереженням вибіркове s не оцінити, але за відомого ззовні σ нормальна формула математично існує й для n = 1. Це межа продукту, а не заборона всіх таких інтервалів."
      },
      {
        "q": "Чи можна задати нульове відхилення?",
        "a": "Формально так: σ = 0 дає SE = E = 0 та точковий інтервал. Однакові спостереження й вибіркове s = 0 самі собою не доводять нульову дисперсію сукупності або достовірність точкового висновку."
      }
    ]
  },
  "de": {
    "longDescription": "Berechnet ein zweiseitiges normales Z-Intervall für den Mittelwert: x̄ ± z·σ/√n. Bei unabhängigen Beobachtungen aus einer normalverteilten Population setzt die Methode die bekannte Populationsstandardabweichung σ voraus. Wird stattdessen die Stichprobenabweichung s eingesetzt, entsteht eine Normalapproximation und kein exaktes Student-t-Intervall für kleine Stichproben. Bei fester Abweichung erfordert die halbe Breite ein viermal so großes n. Das Konfidenzniveau beschreibt wiederholte Anwendungen des Verfahrens, keine Garantie für dieses einzelne Intervall.",
    "howItWorks": "SE = σ/√n; E = z·SE; die Grenzen sind x̄ − E und x̄ + E. Verwendet werden die bisherigen gerundeten Normalquantile z = 1,645 für 90 %, 1,96 für 95 % und 2,576 für 99 %. α = 1 − Konfidenzniveau wird gleich auf beide Verteilungsschwänze aufgeteilt. Zulässig sind ganzzahlige n von 2 bis 9007199254740991 und σ ≥ 0. Mittelwert, σ, SE, E und Grenzen haben dieselbe Dateneinheit; z und α sind dimensionslos. Ist eine Breite ungleich null in den numerischen Grenzen nicht auflösbar, erscheint ein Bereichsfehler. Auflösbare schmale Grenzen werden mit zusätzlichen signifikanten Stellen dargestellt.",
    "howToUse": [
      "Trage das Stichprobenmittel ein — es darf negativ sein.",
      "Gib bekanntes σ oder bewusst als Näherung verwendetes s in derselben Einheit wie den Mittelwert ein.",
      "Trage den Stichprobenumfang ein; er muss mindestens zwei betragen.",
      "Wähle das Konfidenzniveau — ein höheres Niveau ergibt ein breiteres Intervall."
    ],
    "example": "Ein Mittelwert von 100 mit einer Abweichung von 15 über eine Stichprobe von 36 ergibt 95,1 … 104,9 auf dem Niveau von 95 %.",
    "faq": [
      {
        "q": "Warum geht der Stichprobenumfang über eine Wurzel ein?",
        "a": "Weil Mitteln die Streuung im Verhältnis zur Wurzel der Zahl der Beobachtungen senkt. Das Intervall zu halbieren braucht die vierfache Stichprobe."
      },
      {
        "q": "Wird die t-Verteilung verwendet?",
        "a": "Nein. Bei unbekanntem σ und normalverteilten Daten verwendet das exakte Verfahren s und ein t-Quantil mit n−1 Freiheitsgraden. Hier wird ein Z-Intervall mit bekanntem σ oder eine ausdrücklich gewählte Normalapproximation mit s berechnet. Der Unterschied bei kleinen Stichproben muss nicht gering sein."
      },
      {
        "q": "Warum wird eine Stichprobe von eins abgewiesen?",
        "a": "Dieser Rechner verlangt n ≥ 2. Aus einer Beobachtung lässt sich s nicht schätzen; bei extern bekanntem σ ist die Normalformel mathematisch auch für n = 1 definiert. Die Produktgrenze bedeutet nicht, dass jedes solche Intervall unmöglich wäre."
      },
      {
        "q": "Was bedeutet ein Konfidenzniveau von 95 %?",
        "a": "Dass über wiederholte Versuche hinweg rund 95 % solcher Intervalle den wahren Mittelwert enthielten. Es ist eine Eigenschaft des Verfahrens und keine Wahrscheinlichkeit für ein einzelnes Intervall."
      },
      {
        "q": "Darf die Abweichung null sein?",
        "a": "Formal ja: σ = 0 ergibt SE = E = 0 und ein Punktintervall. Gleiche beobachtete Werte und s = 0 belegen für sich weder eine Populationsvarianz von null noch Gewissheit über den Populationsmittelwert."
      }
    ]
  },
  "es": {
    "longDescription": "Construye un intervalo Z normal bilateral para la media: x̄ ± z·σ/√n. Para observaciones independientes de una población normal, el método supone conocida la desviación estándar poblacional σ. Sustituirla por la desviación muestral s da una aproximación normal, no el intervalo exacto de Student para una muestra pequeña. Con la desviación fija, reducir la anchura a la mitad exige cuadruplicar n. La confianza describe la repetición del procedimiento y no garantiza que este intervalo concreto contenga la media poblacional.",
    "howItWorks": "SE = σ/√n; E = z·SE; los límites son x̄ − E y x̄ + E. Se conservan los cuantiles normales redondeados z = 1,645 para el 90 %, 1,96 para el 95 % y 2,576 para el 99 %. α = 1 − nivel de confianza se reparte entre las dos colas. Se admite n entero entre 2 y 9007199254740991 y σ ≥ 0. La media, σ, SE, E y los límites tienen la misma unidad de los datos; z y α no tienen dimensión. Si una anchura distinta de cero no puede distinguirse en los límites numéricos, se devuelve un error de intervalo. Los límites estrechos distinguibles se muestran con más cifras significativas.",
    "howToUse": [
      "Introduce la media muestral: puede ser negativa.",
      "Introduce σ conocida o usa s muestral conscientemente como aproximación, en la misma unidad que la media.",
      "Introduce el tamaño de la muestra; debe ser al menos dos.",
      "Elige el nivel de confianza: un nivel mayor da un intervalo más ancho."
    ],
    "example": "Una media de 100 con una desviación de 15 sobre una muestra de 36 da 95,1 … 104,9 al nivel del 95 %.",
    "faq": [
      {
        "q": "¿Por qué el tamaño de la muestra entra por una raíz cuadrada?",
        "a": "Porque promediar reduce la dispersión en proporción a la raíz del número de observaciones. Reducir el intervalo a la mitad exige cuadruplicar la muestra."
      },
      {
        "q": "¿Se usa la distribución t de Student?",
        "a": "No. Con σ desconocida y datos normales, el método exacto usa s y un cuantil t con n−1 grados de libertad. Esta herramienta calcula un intervalo Z con σ conocida o una aproximación normal elegida expresamente con s. La diferencia para muestras pequeñas no tiene por qué ser pequeña."
      },
      {
        "q": "¿Por qué se rechaza una muestra de uno?",
        "a": "Esta calculadora exige n ≥ 2. Una observación no permite estimar s, pero con σ conocida externamente la fórmula normal también está definida para n = 1. Es una limitación del producto, no una imposibilidad de todos esos intervalos."
      },
      {
        "q": "¿Qué significa un nivel de confianza del 95 %?",
        "a": "Que a lo largo de experimentos repetidos alrededor del 95 % de esos intervalos contendrían la media verdadera. Es una propiedad del método, no una probabilidad para un intervalo concreto."
      },
      {
        "q": "¿La desviación puede ser cero?",
        "a": "Formalmente sí: σ = 0 da SE = E = 0 y un intervalo puntual. Que los valores observados coincidan y s sea cero no demuestra por sí solo una varianza poblacional nula ni certeza sobre la media poblacional."
      }
    ]
  }
} satisfies Record<'ru' | 'en' | 'uk' | 'de' | 'es', Partial<CalculatorCopy>>;
