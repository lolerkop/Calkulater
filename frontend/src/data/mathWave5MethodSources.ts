import type { EditorialSource } from './calculatorEditorial';
type SourceLocale = 'ru' | 'en' | 'uk' | 'de' | 'es';
type SourceId = 'roots' | 'linear' | 'quadratic' | 'cramer' | 'remainder' | 'gcd' | 'lcm' | 'fractions' | 'factorial';

// Primary publisher/specification bodies read on 2026-10-01. Each label limits
// the claim to a definition or algebraic method. They do not certify this app,
// its numerical algorithms, product limits or display precision. TC39 is the
// living ECMAScript 2027 draft, not a claim of an adopted 2027 standard.
const urls: Record<SourceId, string> = {
  roots: 'https://openstax.org/books/college-algebra-2e/pages/1-3-radicals-and-rational-exponents',
  linear: 'https://openstax.org/books/college-algebra-2e/pages/2-2-linear-equations-in-one-variable',
  quadratic: 'https://openstax.org/books/college-algebra-2e/pages/2-5-quadratic-equations',
  cramer: 'https://openstax.org/books/college-algebra-2e/pages/7-8-solving-systems-with-cramers-rule',
  remainder: 'https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-numeric-types-bigint-remainder',
  gcd: 'https://openstax.org/books/elementary-algebra-2e/pages/7-1-greatest-common-factor-and-factor-by-grouping',
  lcm: 'https://openstax.org/books/prealgebra-2e/pages/2-5-prime-factorization-and-the-least-common-multiple',
  fractions: 'https://openstax.org/books/intermediate-algebra-2e/pages/1-3-fractions',
  factorial: 'https://openstax.org/books/college-algebra-2e/pages/9-5-counting-principles',
};
const labels: Record<SourceLocale, Record<SourceId, string>> = {
  ru: {
    roots: 'OpenStax: корни целой положительной степени и рациональные показатели',
    linear: 'OpenStax: линейное уравнение, тождество и отсутствие решений',
    quadratic: 'OpenStax: формула корней квадратного уравнения и классификация по дискриминанту',
    cramer: 'OpenStax: правило Крамера для двух уравнений при ненулевом определителе',
    remainder: 'ECMAScript, проект спецификации: усечение целого частного и знак остатка',
    gcd: 'OpenStax: определение наибольшего делителя, общего для всех чисел',
    lcm: 'OpenStax: определение наименьшего положительного общего кратного',
    fractions: 'OpenStax: четыре арифметические операции с дробями и ненулевые знаменатели',
    factorial: 'OpenStax: факториал в комбинаторике и соглашение 0! = 1',
  },
  en: {
    roots: 'OpenStax: positive integer-index roots and rational exponents',
    linear: 'OpenStax: linear equations, identities and no-solution cases',
    quadratic: 'OpenStax: quadratic formula and discriminant classification',
    cramer: 'OpenStax: Cramer’s rule for two equations with nonzero determinant',
    remainder: 'ECMAScript draft specification: integer quotient truncation and remainder sign',
    gcd: 'OpenStax: definition of the greatest factor common to all numbers',
    lcm: 'OpenStax: definition of the least positive common multiple',
    fractions: 'OpenStax: four fraction operations and nonzero denominators',
    factorial: 'OpenStax: factorials in counting and the convention 0! = 1',
  },
  uk: {
    roots: 'OpenStax: корені додатного цілого степеня й раціональні показники',
    linear: 'OpenStax: лінійне рівняння, тотожність і відсутність розв’язків',
    quadratic: 'OpenStax: формула коренів квадратного рівняння і класифікація за дискримінантом',
    cramer: 'OpenStax: правило Крамера для двох рівнянь за ненульового визначника',
    remainder: 'ECMAScript, проєкт специфікації: усікання цілої частки та знак остачі',
    gcd: 'OpenStax: визначення найбільшого дільника, спільного для всіх чисел',
    lcm: 'OpenStax: визначення найменшого додатного спільного кратного',
    fractions: 'OpenStax: чотири арифметичні дії з дробами й ненульові знаменники',
    factorial: 'OpenStax: факторіал у комбінаториці та угода 0! = 1',
  },
  de: {
    roots: 'OpenStax: Wurzeln mit positivem ganzzahligem Grad und rationale Exponenten',
    linear: 'OpenStax: lineare Gleichungen, Identitäten und Fälle ohne Lösung',
    quadratic: 'OpenStax: quadratische Lösungsformel und Einteilung nach Diskriminante',
    cramer: 'OpenStax: Cramersche Regel für zwei Gleichungen mit Determinante ungleich null',
    remainder: 'ECMAScript-Spezifikationsentwurf: Abschneiden des ganzzahligen Quotienten und Restvorzeichen',
    gcd: 'OpenStax: Definition des größten Teilers, der allen Zahlen gemeinsam ist',
    lcm: 'OpenStax: Definition des kleinsten positiven gemeinsamen Vielfachen',
    fractions: 'OpenStax: vier Rechenarten mit Brüchen und Nenner ungleich null',
    factorial: 'OpenStax: Fakultät in der Kombinatorik und die Konvention 0! = 1',
  },
  es: {
    roots: 'OpenStax: raíces de índice entero positivo y exponentes racionales',
    linear: 'OpenStax: ecuaciones lineales, identidades y casos sin solución',
    quadratic: 'OpenStax: fórmula cuadrática y clasificación por discriminante',
    cramer: 'OpenStax: regla de Cramer para dos ecuaciones con determinante no nulo',
    remainder: 'Borrador de especificación ECMAScript: truncamiento del cociente entero y signo del resto',
    gcd: 'OpenStax: definición del mayor divisor común a todos los números',
    lcm: 'OpenStax: definición del mínimo común múltiplo positivo',
    fractions: 'OpenStax: cuatro operaciones con fracciones y denominadores no nulos',
    factorial: 'OpenStax: factorial en combinatoria y convenio 0! = 1',
  },
};
const sourceIds: Record<string, SourceId[]> = {
  'power-root': ['roots'], 'quadratic-equation': ['quadratic'], 'linear-equation': ['linear'],
  'linear-system': ['cramer'], modulo: ['remainder'], 'gcd-lcm': ['gcd', 'lcm'],
  'fraction-arith': ['fractions'], factorial: ['factorial'],
};
export function getMathWave5MethodSources(id: string, locale: string): EditorialSource[] {
  const language: SourceLocale = locale === 'ru' || locale === 'uk' || locale === 'de' || locale === 'es' ? locale : 'en';
  const ids = Object.prototype.hasOwnProperty.call(sourceIds, id) ? sourceIds[id] : [];
  return ids.map(source => ({ label: labels[language][source], href: urls[source] }));
}
