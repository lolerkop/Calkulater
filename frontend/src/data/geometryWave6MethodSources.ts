import type { EditorialSource } from './calculatorEditorial';

// Primary text bodies read by AI on 2026-10-01; this does not represent human review.
// Derived inverse formulas and rhombus/diagonal identities are explained in owned copy.
const prealgebra = 'https://openstax.org/books/prealgebra-2e/pages/';
const labels = (ru: string, en: string, uk: string, de: string, es: string) => ({ ru, en, uk, de, es });
const rectangles = { href: `${prealgebra}9-4-use-properties-of-rectangles-triangles-and-trapezoids`, label: labels('OpenStax: площадь, периметр и квадратные единицы', 'OpenStax: area, perimeter and squared units', 'OpenStax: площа, периметр і квадратні одиниці', 'OpenStax: Fläche, Umfang und Quadrateinheiten', 'OpenStax: área, perímetro y unidades cuadradas') };
const pythagoras = { href: `${prealgebra}9-3-use-properties-of-angles-triangles-and-the-pythagorean-theorem`, label: labels('OpenStax: теорема Пифагора для прямоугольного треугольника', 'OpenStax: Pythagorean theorem for a right triangle', 'OpenStax: теорема Піфагора для прямокутного трикутника', 'OpenStax: Satz des Pythagoras im rechtwinkligen Dreieck', 'OpenStax: teorema de Pitágoras para un triángulo rectángulo') };
const primary: Record<string, { href: string; label: Record<string, string> }[]> = {
  'geom-circle': [{ href: `${prealgebra}9-5-solve-geometry-applications-circles-and-irregular-figures`, label: labels('OpenStax: радиус, диаметр, длина окружности и площадь', 'OpenStax: radius, diameter, circumference and area', 'OpenStax: радіус, діаметр, довжина кола та площа', 'OpenStax: Radius, Durchmesser, Umfang und Fläche', 'OpenStax: radio, diámetro, circunferencia y área') }],
  'geom-square': [rectangles, pythagoras],
  'geom-rectangle': [rectangles, pythagoras],
  'geom-triangle': [rectangles, { href: 'https://people.eecs.berkeley.edu/~wkahan/Triangle.pdf', label: labels('У. Кэхэн: численные ошибки формулы Герона у узких треугольников — учебные заметки', 'W. Kahan: numerical errors of Heron’s formula for needle-like triangles — lecture notes', 'В. Каган: числові похибки формули Герона у вузьких трикутників — навчальні нотатки', 'W. Kahan: numerische Fehler der Heron-Formel bei schmalen Dreiecken — Vorlesungsnotizen', 'W. Kahan: errores numéricos de Herón en triángulos estrechos — apuntes de clase') }],
  'geom-right-triangle': [pythagoras],
  'geom-parallelogram': [{ href: 'https://openstax.org/books/precalculus-2e/pages/8-1-non-right-triangles-law-of-sines', label: labels('OpenStax: высота b sin θ и площадь треугольника ab sin θ/2', 'OpenStax: height b sin θ and triangle area ab sin θ/2', 'OpenStax: висота b sin θ та площа трикутника ab sin θ/2', 'OpenStax: Höhe b sin θ und Dreiecksfläche ab sin θ/2', 'OpenStax: altura b sin θ y área triangular ab sin θ/2') }, { href: 'https://mathcs.clarku.edu/~djoyce/elements/bookI/propI34.html', label: labels('Евклид I.34: диагональ делит площадь параллелограмма пополам', 'Euclid I.34: a diagonal bisects a parallelogram’s area', 'Евклід I.34: діагональ ділить площу паралелограма навпіл', 'Euklid I.34: eine Diagonale halbiert die Parallelogrammfläche', 'Euclides I.34: una diagonal divide el área del paralelogramo en dos') }],
  'geom-trapezoid': [{ href: rectangles.href, label: labels('OpenStax: площадь трапеции и перпендикулярная высота', 'OpenStax: trapezoid area and perpendicular height', 'OpenStax: площа трапеції та перпендикулярна висота', 'OpenStax: Trapezfläche und senkrechte Höhe', 'OpenStax: área del trapecio y altura perpendicular') }, pythagoras],
  'geom-rhombus': [pythagoras],
};

export function getGeometryWave6MethodSources(id: string, locale: string): EditorialSource[] {
  return (Object.hasOwn(primary, id) ? primary[id] : []).map(source => ({ href: source.href, label: source.label[locale] ?? source.label.en }));
}
