import type { EditorialSource } from './calculatorEditorial';
type Locale = 'ru' | 'en' | 'uk' | 'de' | 'es';
// Primary bodies read on 2026-10-02. Formula scope only, not human review,
// product limits, BigInt implementation, legal rounding rules or numerical QA.
// Penn State body retrieved with curl after the web renderer timed out;
// NIST weighted-mean PDF formula visually read on page 1. R boxplot uses hinges
// which can differ from this tool's type 7; it supports whisker semantics only.
// Roman notation is an explicit product convention, with no decorative citation.
const urls = {
  "binomial": "https://www.itl.nist.gov/div898/handbook/eda/section3/eda366i.htm",
  "known-sigma": "https://www.itl.nist.gov/div898/handbook/prc/section1/prc14.htm",
  "unknown-sigma": "https://www.itl.nist.gov/div898/handbook/eda/section3/eda352.htm",
  "correlation": "https://www.itl.nist.gov/div898/software/dataplot/refman2/auxillar/correlat.htm",
  "equiprobability": "https://openstax.org/books/introductory-statistics-2e/pages/3-1-terminology",
  "probability-rules": "https://openstax.org/books/introductory-statistics-2e/pages/3-3-two-basic-rules-of-probability",
  "quantile": "https://stat.ethz.ch/R-manual/R-devel/library/stats/html/quantile.html",
  "whiskers": "https://stat.ethz.ch/R-manual/R-patched/library/grDevices/html/boxplot.stats.html",
  "rounding": "https://docs.python.org/3/library/decimal.html#rounding-modes",
  "sample-size": "https://online.stat.psu.edu/stat506/Lesson02",
  "proportion-normal": "https://openstax.org/books/introductory-statistics-2e/pages/8-3-a-population-proportion",
  "location": "https://www.itl.nist.gov/div898/handbook/eda/section3/eda351.htm",
  "scale": "https://www.itl.nist.gov/div898/handbook/eda/section3/eda356.htm",
  "weighted": "https://www.itl.nist.gov/div898/software/dataplot/refman2/ch2/weigmean.pdf",
  "z-score": "https://itl.nist.gov/div898/software/dataplot/refman2/auxillar/standard.htm",
  "normal": "https://www.itl.nist.gov/div898/handbook/eda/section3/eda3661.htm"
} as const;
type Source = keyof typeof urls;
const labels: Record<Locale, Record<Source,string>> = {
  "ru": {
    "binomial": "NIST: биномиальная PMF, накопленная вероятность, ожидание и отклонение",
    "known-sigma": "NIST: нормальный интервал среднего с известным σ и повторное покрытие",
    "unknown-sigma": "NIST: неизвестное σ требует t-метода; граница нормального приближения",
    "correlation": "NIST: коэффициент Пирсона по центрированным суммам парных данных",
    "equiprobability": "OpenStax: отношение числа исходов для равновероятной модели и честного кубика",
    "probability-rules": "OpenStax: независимое пересечение, объединение и отличие несовместных событий",
    "quantile": "R: линейная интерполяция квантилей type 7 и существование других методов",
    "whiskers": "R: концы усов — наблюдения внутри порогов; hinges могут отличаться от type 7",
    "rounding": "Python Decimal: ближайшее с половиной от нуля, вниз и вверх как правила округления",
    "sample-size": "Penn State STAT 506 §2.3: размер выборки доли, конечная поправка и p = 0,5",
    "proportion-normal": "OpenStax: нормальная оценка одной доли, планирование n и округление вверх",
    "location": "NIST: определения среднего, медианы и возможной множественной моды",
    "scale": "NIST: выборочная дисперсия, отклонение, размах и единицы разброса",
    "weighted": "NIST Dataplot: среднее Σ(wᵢxᵢ)/Σwᵢ — формула, не точность приложения",
    "z-score": "NIST: стандартизация вычитанием среднего и делением на отклонение",
    "normal": "NIST: нормальная плотность и CDF; процентное толкование требует нормальности"
  },
  "en": {
    "binomial": "NIST: binomial PMF, cumulative probability, mean and deviation",
    "known-sigma": "NIST: normal mean interval with known σ and repeated coverage",
    "unknown-sigma": "NIST: unknown σ calls for a t method; scope of the normal approximation",
    "correlation": "NIST: Pearson correlation from centered sums of paired data",
    "equiprobability": "OpenStax: outcome-count ratios for equiprobable models and fair dice",
    "probability-rules": "OpenStax: independent intersection, union and distinction from disjoint events",
    "quantile": "R: type 7 quantile interpolation and alternative definitions",
    "whiskers": "R: whisker ends are observations within fences; hinges can differ from type 7",
    "rounding": "Python Decimal: nearest with ties away, floor and ceiling rounding rules",
    "sample-size": "Penn State STAT 506 §2.3: proportion sample size, finite correction and p = 0.5",
    "proportion-normal": "OpenStax: normal approximation for one proportion, planning n and rounding upward",
    "location": "NIST: mean, median and possibly nonunique mode definitions",
    "scale": "NIST: sample variance, deviation, range and units of spread",
    "weighted": "NIST Dataplot: mean Σ(wᵢxᵢ)/Σwᵢ — formula, not app accuracy",
    "z-score": "NIST: standardization by subtracting the mean and dividing by deviation",
    "normal": "NIST: normal density and CDF; percentage interpretation requires normality"
  },
  "uk": {
    "binomial": "NIST: біноміальна PMF, накопичена ймовірність, сподівання та відхилення",
    "known-sigma": "NIST: нормальний інтервал середнього з відомим σ та повторне покриття",
    "unknown-sigma": "NIST: невідоме σ потребує t-методу; межа нормального наближення",
    "correlation": "NIST: коефіцієнт Пірсона за центрованими сумами парних даних",
    "equiprobability": "OpenStax: відношення кількості результатів для рівноймовірної моделі й чесного кубика",
    "probability-rules": "OpenStax: незалежний перетин, об’єднання й відмінність несумісних подій",
    "quantile": "R: лінійна інтерполяція квантилів type 7 та інші визначення",
    "whiskers": "R: кінці вусів — спостереження всередині порогів; hinges можуть відрізнятися від type 7",
    "rounding": "Python Decimal: найближче з половиною від нуля, вниз та вгору як правила округлення",
    "sample-size": "Penn State STAT 506 §2.3: обсяг вибірки частки, скінченна поправка та p = 0,5",
    "proportion-normal": "OpenStax: нормальна оцінка однієї частки, планування n та округлення вгору",
    "location": "NIST: визначення середнього, медіани та можливої множинної моди",
    "scale": "NIST: вибіркова дисперсія, відхилення, розмах та одиниці розкиду",
    "weighted": "NIST Dataplot: середнє Σ(wᵢxᵢ)/Σwᵢ — формула, не точність застосунку",
    "z-score": "NIST: стандартизація відніманням середнього й діленням на відхилення",
    "normal": "NIST: нормальна густина й CDF; відсоткове тлумачення потребує нормальності"
  },
  "de": {
    "binomial": "NIST: Binomial-PMF, kumulierte Wahrscheinlichkeit, Erwartungswert und Abweichung",
    "known-sigma": "NIST: normales Mittelwertintervall bei bekanntem σ und wiederholte Überdeckung",
    "unknown-sigma": "NIST: t-Verfahren bei unbekanntem σ; Grenze der Normalapproximation",
    "correlation": "NIST: Pearson-Korrelation aus zentrierten Summen gepaarter Daten",
    "equiprobability": "OpenStax: Ergebnisanzahl-Verhältnis bei gleich wahrscheinlichen Modellen und fairen Würfeln",
    "probability-rules": "OpenStax: unabhängiger Schnitt, Vereinigung und Unterschied zu disjunkten Ereignissen",
    "quantile": "R: Quantilinterpolation vom Typ 7 und alternative Definitionen",
    "whiskers": "R: Whisker-Enden sind Beobachtungen innerhalb der Grenzen; Hinges können von Typ 7 abweichen",
    "rounding": "Python Decimal: nächste Zahl mit Halbfällen weg von null, Floor und Ceiling",
    "sample-size": "Penn State STAT 506 §2.3: Umfang für Anteilschätzung, endliche Korrektur und p = 0,5",
    "proportion-normal": "OpenStax: Normalapproximation für einen Anteil, Planung von n und Aufrunden",
    "location": "NIST: Definitionen von Mittelwert, Median und möglicherweise mehreren Modalwerten",
    "scale": "NIST: Stichprobenvarianz, Abweichung, Spannweite und Streuungseinheiten",
    "weighted": "NIST Dataplot: Mittelwert Σ(wᵢxᵢ)/Σwᵢ — Formel, keine App-Genauigkeitsgarantie",
    "z-score": "NIST: Standardisierung durch Abziehen des Mittels und Teilen durch die Abweichung",
    "normal": "NIST: Normaldichte und CDF; Prozentinterpretation setzt Normalverteilung voraus"
  },
  "es": {
    "binomial": "NIST: PMF binomial, probabilidad acumulada, esperanza y desviación",
    "known-sigma": "NIST: intervalo normal de la media con σ conocida y cobertura repetida",
    "unknown-sigma": "NIST: método t con σ desconocida; alcance de la aproximación normal",
    "correlation": "NIST: correlación de Pearson con sumas centradas de datos emparejados",
    "equiprobability": "OpenStax: cocientes de recuentos para modelos equiprobables y dados equilibrados",
    "probability-rules": "OpenStax: intersección independiente, unión y diferencia de sucesos incompatibles",
    "quantile": "R: interpolación de cuantiles de tipo 7 y definiciones alternativas",
    "whiskers": "R: los bigotes terminan en observaciones dentro de los límites; hinges pueden diferir del tipo 7",
    "rounding": "Python Decimal: reglas al más cercano con mitades alejadas de cero, suelo y techo",
    "sample-size": "Penn State STAT 506 §2.3: tamaño para una proporción, corrección finita y p = 0,5",
    "proportion-normal": "OpenStax: aproximación normal de una proporción, planificación de n y redondeo hacia arriba",
    "location": "NIST: definiciones de media, mediana y moda no necesariamente única",
    "scale": "NIST: varianza muestral, desviación, rango y unidades de dispersión",
    "weighted": "NIST Dataplot: media Σ(wᵢxᵢ)/Σwᵢ — fórmula, no precisión de la aplicación",
    "z-score": "NIST: estandarización restando la media y dividiendo por la desviación",
    "normal": "NIST: densidad normal y CDF; la interpretación porcentual requiere normalidad"
  }
};
const ids: Record<string, readonly Source[]> = {
  "binomial-probability": [
    "binomial"
  ],
  "confidence-interval": [
    "known-sigma",
    "unknown-sigma"
  ],
  "correlation": [
    "correlation"
  ],
  "dice-probability": [
    "equiprobability",
    "probability-rules"
  ],
  "probability-basic": [
    "equiprobability",
    "probability-rules"
  ],
  "quartile": [
    "quantile",
    "whiskers"
  ],
  "roman-numerals": [],
  "rounding": [
    "rounding"
  ],
  "sample-size": [
    "sample-size",
    "proportion-normal"
  ],
  "stats-descriptive": [
    "location",
    "scale"
  ],
  "weighted-mean": [
    "weighted"
  ],
  "z-score": [
    "z-score",
    "normal"
  ]
};
export function getMathWave8MethodSources(id: string, locale: string): EditorialSource[] {
  const language: Locale = locale === 'ru' || locale === 'uk' || locale === 'de' || locale === 'es' ? locale : 'en';
  const selected = Object.prototype.hasOwnProperty.call(ids, id) ? ids[id] : [];
  return selected.map(source => ({ label: labels[language][source], href: urls[source] }));
}
