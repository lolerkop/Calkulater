import type { EditorialSource } from './calculatorEditorial';
type Locale = 'ru' | 'en' | 'uk' | 'de' | 'es';
type Source = 'arithmetic' | 'geometric' | 'sums' | 'fibonacci' | 'divisors' | 'primes' | 'counting' | 'ratios' | 'proportions';
// Publisher bodies read on 2026-10-01. These links support the stated
// mathematical definitions and methods, not app accuracy, product bounds,
// BigInt implementation or display precision. Counting supports the
// no-repetition formulas only; OEIS uses F(0)=0, while this page uses F₁=0.
const urls: Record<Source, string> = {
  arithmetic: 'https://openstax.org/books/college-algebra-2e/pages/9-2-arithmetic-sequences',
  geometric: 'https://openstax.org/books/college-algebra-2e/pages/9-3-geometric-sequences',
  sums: 'https://openstax.org/books/college-algebra-2e/pages/9-4-series-and-their-notations',
  fibonacci: 'https://oeis.org/A000045',
  divisors: 'https://openstax.org/books/prealgebra-2e/pages/2-4-find-multiples-and-factors',
  primes: 'https://openstax.org/books/prealgebra-2e/pages/2-5-prime-factorization-and-the-least-common-multiple',
  counting: 'https://openstax.org/books/college-algebra-2e/pages/9-5-counting-principles',
  ratios: 'https://openstax.org/books/prealgebra-2e/pages/5-6-ratios-and-rate',
  proportions: 'https://openstax.org/books/prealgebra-2e/pages/6-5-solve-proportions-and-their-applications',
};
const labels: Record<Locale, Record<Source, string>> = {
  ru: {
    arithmetic: 'OpenStax: постоянная разность и формула n-го члена арифметической прогрессии',
    geometric: 'OpenStax: постоянное отношение и формула n-го члена геометрической прогрессии',
    sums: 'OpenStax: конечные суммы прогрессий и бесконечная геометрическая сумма при |r| < 1',
    fibonacci: 'OEIS A000045: рекуррентное определение Фибоначчи и начало с индекса F(0) = 0',
    divisors: 'OpenStax: пары положительных делителей, простые числа и исключение единицы',
    primes: 'OpenStax: определение и единственность разложения на простые множители',
    counting: 'OpenStax: сочетания и упорядоченные выборки без повторений',
    ratios: 'OpenStax: отношения, согласованные единицы и сокращение эквивалентных дробей',
    proportions: 'OpenStax: равенство отношений с ненулевыми знаменателями',
  },
  en: {
    arithmetic: 'OpenStax: constant differences and the nth-term arithmetic-sequence formula',
    geometric: 'OpenStax: constant ratios and the nth-term geometric-sequence formula',
    sums: 'OpenStax: finite progression sums and the infinite geometric sum for |r| < 1',
    fibonacci: 'OEIS A000045: Fibonacci recurrence and indexing from F(0) = 0',
    divisors: 'OpenStax: positive factor pairs, prime numbers and why one is not prime',
    primes: 'OpenStax: definition and uniqueness of prime factorization',
    counting: 'OpenStax: combinations and ordered selections without repetition',
    ratios: 'OpenStax: ratios, consistent units and reduction of equivalent fractions',
    proportions: 'OpenStax: equal ratios with nonzero denominators',
  },
  uk: {
    arithmetic: 'OpenStax: стала різниця та формула n-го члена арифметичної прогресії',
    geometric: 'OpenStax: стале відношення та формула n-го члена геометричної прогресії',
    sums: 'OpenStax: скінченні суми прогресій і нескінченна геометрична сума за |r| < 1',
    fibonacci: 'OEIS A000045: рекурентне визначення Фібоначчі та нумерація від F(0) = 0',
    divisors: 'OpenStax: пари додатних дільників, прості числа та виключення одиниці',
    primes: 'OpenStax: визначення та єдиність розкладу на прості множники',
    counting: 'OpenStax: сполучення й упорядковані вибірки без повторень',
    ratios: 'OpenStax: відношення, узгоджені одиниці та скорочення еквівалентних дробів',
    proportions: 'OpenStax: рівність відношень із ненульовими знаменниками',
  },
  de: {
    arithmetic: 'OpenStax: konstante Differenz und Formel für das n-te Glied einer arithmetischen Folge',
    geometric: 'OpenStax: konstantes Verhältnis und Formel für das n-te Glied einer geometrischen Folge',
    sums: 'OpenStax: endliche Folgensummen und unendliche geometrische Summe für |r| < 1',
    fibonacci: 'OEIS A000045: Fibonacci-Rekursion und Nummerierung ab F(0) = 0',
    divisors: 'OpenStax: positive Teilerpaare, Primzahlen und warum eins nicht prim ist',
    primes: 'OpenStax: Definition und Eindeutigkeit der Primfaktorzerlegung',
    counting: 'OpenStax: Kombinationen und geordnete Auswahlen ohne Wiederholung',
    ratios: 'OpenStax: Verhältnisse, einheitliche Einheiten und Kürzen gleichwertiger Brüche',
    proportions: 'OpenStax: gleiche Verhältnisse mit Nennern ungleich null',
  },
  es: {
    arithmetic: 'OpenStax: diferencia constante y fórmula del término n de una sucesión aritmética',
    geometric: 'OpenStax: razón constante y fórmula del término n de una sucesión geométrica',
    sums: 'OpenStax: sumas finitas de progresiones y suma geométrica infinita para |r| < 1',
    fibonacci: 'OEIS A000045: recurrencia de Fibonacci e índices desde F(0) = 0',
    divisors: 'OpenStax: parejas de divisores positivos, números primos y exclusión del uno',
    primes: 'OpenStax: definición y unicidad de la factorización en primos',
    counting: 'OpenStax: combinaciones y selecciones ordenadas sin repetición',
    ratios: 'OpenStax: razones, unidades coherentes y reducción de fracciones equivalentes',
    proportions: 'OpenStax: igualdad de razones con denominadores no nulos',
  },
};
const ids: Record<string, Source[]> = {
  'arithmetic-progression': ['arithmetic', 'sums'],
  'geometric-progression': ['geometric', 'sums'],
  fibonacci: ['fibonacci'], divisors: ['divisors'], 'prime-factorization': ['primes'],
  combinatorics: ['counting'], ratio: ['ratios'], proportion: ['proportions'],
};
export function getMathWave6MethodSources(id: string, locale: string): EditorialSource[] {
  const language: Locale = locale === 'ru' || locale === 'uk' || locale === 'de' || locale === 'es' ? locale : 'en';
  const selected = Object.prototype.hasOwnProperty.call(ids, id) ? ids[id] : [];
  return selected.map(source => ({ label: labels[language][source], href: urls[source] }));
}
