import type { EditorialSource } from './calculatorEditorial';

// Primary pages read by AI on 2026-10-01. This is source evidence, not human review.
// Scope is stated in each calculator's owned method and disclaimer.
const book = 'https://openstax.org/books/university-physics-volume-1/pages/';
const nist = 'https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8';
const primary: Record<string, { href: string; label: Record<string, string> }[]> = {
  acceleration: [{ href: `${book}3-4-motion-with-constant-acceleration`, label: { ru: 'OpenStax: движение с постоянным ускорением', en: 'OpenStax: motion with constant acceleration', uk: 'OpenStax: рух зі сталим прискоренням', de: 'OpenStax: Bewegung mit konstanter Beschleunigung', es: 'OpenStax: movimiento con aceleración constante' } }],
  'newton-force': [
    { href: `${book}5-3-newtons-second-law`, label: { ru: 'OpenStax: равнодействующая и второй закон Ньютона', en: 'OpenStax: net force and Newton’s second law', uk: 'OpenStax: рівнодійна та другий закон Ньютона', de: 'OpenStax: resultierende Kraft und zweites Newtonsches Gesetz', es: 'OpenStax: fuerza resultante y segunda ley de Newton' } },
    { href: nist, label: { ru: 'NIST: условное стандартное ускорение 9,80665 м/с²', en: 'NIST: conventional standard gravity, 9.80665 m/s²', uk: 'NIST: умовне стандартне прискорення 9,80665 м/с²', de: 'NIST: konventionelle Normfallbeschleunigung 9,80665 m/s²', es: 'NIST: gravedad estándar convencional de 9,80665 m/s²' } },
  ],
  momentum: [
    { href: `${book}9-1-linear-momentum`, label: { ru: 'OpenStax: вектор импульса p = mv', en: 'OpenStax: vector momentum p = mv', uk: 'OpenStax: вектор імпульсу p = mv', de: 'OpenStax: Impulsvektor p = mv', es: 'OpenStax: momento vectorial p = mv' } },
    { href: `${book}9-3-conservation-of-linear-momentum`, label: { ru: 'OpenStax: условия сохранения импульса системы', en: 'OpenStax: conditions for conservation of system momentum', uk: 'OpenStax: умови збереження імпульсу системи', de: 'OpenStax: Bedingungen der Impulserhaltung im System', es: 'OpenStax: condiciones de conservación del momento del sistema' } },
  ],
  work: [{ href: `${book}7-1-work`, label: { ru: 'OpenStax: работа постоянной силы и скалярное произведение', en: 'OpenStax: work of constant force and the dot product', uk: 'OpenStax: робота сталої сили та скалярний добуток', de: 'OpenStax: Arbeit einer konstanten Kraft und Skalarprodukt', es: 'OpenStax: trabajo de una fuerza constante y producto escalar' } }],
  'physics-torque': [{ href: `${book}10-6-torque`, label: { ru: 'OpenStax: модуль момента и перпендикулярное плечо', en: 'OpenStax: torque magnitude and perpendicular moment arm', uk: 'OpenStax: модуль моменту та перпендикулярне плече', de: 'OpenStax: Drehmomentbetrag und senkrechter Hebelarm', es: 'OpenStax: módulo del momento y brazo perpendicular' } }],
  'lever-moment': [
    { href: `${book}12-1-conditions-for-static-equilibrium`, label: { ru: 'OpenStax: баланс сил и противоположных моментов', en: 'OpenStax: force balance and opposing torques', uk: 'OpenStax: баланс сил і протилежних моментів', de: 'OpenStax: Kräftegleichgewicht und entgegengesetzte Momente', es: 'OpenStax: equilibrio de fuerzas y momentos opuestos' } },
    { href: `${book}10-6-torque`, label: { ru: 'OpenStax: плечо до линии действия силы', en: 'OpenStax: arm to the force’s line of action', uk: 'OpenStax: плече до лінії дії сили', de: 'OpenStax: Hebelarm zur Wirkungslinie', es: 'OpenStax: brazo hasta la línea de acción' } },
  ],
  pressure: [
    { href: `${book}14-1-fluids-density-and-pressure`, label: { ru: 'OpenStax: среднее давление нормальной силы', en: 'OpenStax: mean pressure of normal force', uk: 'OpenStax: середній тиск нормальної сили', de: 'OpenStax: mittlerer Druck einer Normalkraft', es: 'OpenStax: presión media de la fuerza normal' } },
    { href: nist, label: { ru: 'NIST: 1 стандартная атмосфера = 101 325 Па', en: 'NIST: 1 standard atmosphere = 101,325 Pa', uk: 'NIST: 1 стандартна атмосфера = 101 325 Па', de: 'NIST: 1 Normatmosphäre = 101 325 Pa', es: 'NIST: 1 atmósfera estándar = 101 325 Pa' } },
  ],
  density: [{ href: `${book}14-1-fluids-density-and-pressure`, label: { ru: 'OpenStax: средняя массовая плотность и кг/м³ ↔ г/см³', en: 'OpenStax: average mass density and kg/m³ ↔ g/cm³', uk: 'OpenStax: середня масова густина та кг/м³ ↔ г/см³', de: 'OpenStax: mittlere Massendichte und kg/m³ ↔ g/cm³', es: 'OpenStax: densidad de masa media y kg/m³ ↔ g/cm³' } }],
};

export function getMechanicsWave4MethodSources(id: string, locale: string): EditorialSource[] {
  return (Object.hasOwn(primary, id) ? primary[id] : []).map(source => ({ href: source.href, label: source.label[locale] ?? source.label.en }));
}
