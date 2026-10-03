import type { EditorialSource } from './calculatorEditorial';
type Labels = Record<'ru' | 'en' | 'uk' | 'de' | 'es', string>;
const weighted = {
  href: 'https://registrar.illinois.edu/courses-grades/calculate-your-gpa/',
  label: {
    ru: 'University of Illinois: взвешивание оценок кредитами; собственные правила вуза отличаются от этой общей модели',
    en: 'University of Illinois: credit-weighted grades; institutional rules differ from this general model',
    uk: 'University of Illinois: оцінки з вагами кредитів; правила закладу відрізняються від цієї загальної моделі',
    de: 'University of Illinois: nach Leistungspunkten gewichtete Noten; Hochschulregeln unterscheiden sich von diesem allgemeinen Modell',
    es: 'University of Illinois: notas ponderadas por créditos; las reglas institucionales difieren de este modelo general',
  } satisfies Labels,
};
const properties = {
  href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape',
  label: {
    ru: 'MDN: свойства Unicode для букв и цифр; правило соединения слов выбрано для этого счётчика',
    en: 'MDN: Unicode letter and digit properties; word-joining rules are this counter’s convention',
    uk: 'MDN: властивості Unicode для літер і цифр; правила з’єднання слів обрано для цього лічильника',
    de: 'MDN: Unicode-Eigenschaften von Buchstaben und Ziffern; Wortverbindungen sind eine Regel dieses Zählers',
    es: 'MDN: propiedades Unicode de letras y cifras; la unión de palabras es un convenio de este contador',
  } satisfies Labels,
};
const codePoints = {
  href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator',
  label: {
    ru: 'MDN: итерация строки по кодовым точкам, а не по визуальным символам',
    en: 'MDN: string iteration counts code points rather than visual characters',
    uk: 'MDN: ітерація рядка за кодовими точками, а не візуальними символами',
    de: 'MDN: Zeichenketteniteration über Codepunkte statt sichtbarer Zeichen',
    es: 'MDN: la iteración de cadenas usa puntos de código, no caracteres visuales',
  } satisfies Labels,
};
// Basic ratios and the weighted-final formula are stated directly on the page;
// they do not need decorative citations or unsupported speed norms.
export function getEducationWave8MethodSources(id: string, locale: string): EditorialSource[] {
  const records = id === 'gpa' ? [weighted] : id === 'text-reading-time' ? [properties]
    : id === 'text-word-char-count' ? [properties, codePoints] : [];
  return records.map(source => ({href: source.href, label: source.label[locale as keyof Labels] ?? source.label.en}));
}
