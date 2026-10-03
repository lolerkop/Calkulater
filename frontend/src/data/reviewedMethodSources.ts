import type { EditorialSource } from './calculatorEditorial';

// These links have a subject-specific evidence record in the converter and
// health source reports. Listing a source does not certify every model, alias,
// numerical factor or real-world use of the calculator.
const sources = {
  si: { href: 'https://www.bipm.org/documents/d/guest/si-brochure-9-en-pdf', names: ['BIPM: система SI, версия 4.01 (2026)', 'BIPM: SI Brochure, version 4.01 (2026)', 'BIPM: система SI, версія 4.01 (2026)', 'BIPM: SI-Broschüre, Version 4.01 (2026)', 'BIPM: folleto del SI, versión 4.01 (2026)'] },
  factors: { href: 'https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b9', names: ['NIST: таблицы коэффициентов перевода, приложение B.9', 'NIST: conversion-factor tables, Appendix B.9', 'NIST: таблиці коефіцієнтів переведення, додаток B.9', 'NIST: Umrechnungsfaktoren, Anhang B.9', 'NIST: tablas de factores de conversión, apéndice B.9'] },
  noxHistorical: { href: 'https://vtda.org/pubs/InformationDisplay_SIDJournal/InformationDisplay_V02N03-1965%20MayJune.pdf', names: ['Luxenberg (1965): таблица I, исторический коэффициент nox', 'Luxenberg (1965): Table I, historical nox factor', 'Luxenberg (1965): таблиця I, історичний коефіцієнт nox', 'Luxenberg (1965): Tabelle I, historischer Nox-Faktor', 'Luxenberg (1965): tabla I, factor histórico de nox'] },
  noxArticle: { href: 'https://doi.org/10.1002/j.2637-496X.1965.tb05118.x', names: ['Luxenberg (1965): DOI статьи «Photometric Units»', 'Luxenberg (1965): DOI of the article “Photometric Units”', 'Luxenberg (1965): DOI статті «Photometric Units»', 'Luxenberg (1965): DOI des Artikels „Photometric Units“', 'Luxenberg (1965): DOI del artículo «Photometric Units»'] },
  decimal: { href: 'https://www.nist.gov/pml/owm/metric-si-prefixes', names: ['NIST: десятичные приставки SI', 'NIST: decimal SI prefixes', 'NIST: десяткові префікси SI', 'NIST: dezimale SI-Präfixe', 'NIST: prefijos decimales del SI'] },
  binary: { href: 'https://physics.nist.gov/cuu/Units/binary.html', names: ['NIST: двоичные приставки', 'NIST: binary prefixes', 'NIST: двійкові префікси', 'NIST: binäre Präfixe', 'NIST: prefijos binarios'] },
  foot: { href: 'https://www.nist.gov/pml/us-surveyfoot', names: ['NIST: международный и исторический геодезический фут', 'NIST: international and historical US survey foot', 'NIST: міжнародний та історичний геодезичний фут', 'NIST: internationaler Fuß und historischer US Survey Foot', 'NIST: pie internacional y pie topográfico histórico de EE. UU.'] },
  volume: { href: 'https://www.nist.gov/pml/owm/si-units-volume', names: ['NIST: единицы объёма SI', 'NIST: SI volume units', 'NIST: одиниці об’єму SI', 'NIST: SI-Volumeneinheiten', 'NIST: unidades de volumen del SI'] },
  temperature: { href: 'https://www.nist.gov/pml/owm/si-units-temperature', names: ['NIST: температурные шкалы', 'NIST: temperature scales', 'NIST: температурні шкали', 'NIST: Temperaturskalen', 'NIST: escalas de temperatura'] },
  fluid: { href: 'https://webbook.nist.gov/chemistry/fluid/', names: ['NIST: свойства жидкостей при заданной температуре и давлении', 'NIST: fluid properties at a specified temperature and pressure', 'NIST: властивості рідин за заданих температури й тиску', 'NIST: Stoffeigenschaften bei bestimmter Temperatur und bestimmtem Druck', 'NIST: propiedades de fluidos a una temperatura y presión determinadas'] },
} as const;

const converterSources: Record<string, readonly (keyof typeof sources)[]> = {
  'convert-angle': ['si'], 'convert-area': ['si', 'factors', 'foot'],
  'convert-cooking-volume': ['factors', 'volume'], 'convert-data-rate': ['decimal', 'binary'],
  'convert-density': ['volume', 'fluid'], 'convert-digital': ['decimal', 'binary'],
  'convert-energy': ['si', 'factors'], 'convert-flow': ['volume', 'factors'],
  'convert-force': ['factors'], 'convert-frequency': ['si', 'decimal'],
  'convert-illuminance': ['si', 'factors', 'noxHistorical', 'noxArticle'], 'convert-length': ['foot', 'factors', 'si'],
  'convert-mass': ['si', 'factors'], 'convert-power': ['factors'],
  'convert-pressure': ['si', 'factors'], 'convert-speed': ['si', 'factors'],
  'convert-temperature': ['temperature'], 'convert-time': ['si'],
  'convert-torque': ['factors', 'foot'], 'convert-volume': ['volume', 'factors'],
};

const healthSources: Record<string, (EditorialSource & { names: readonly [string, string, string, string, string] })[]> = {
  'activity-calories': [
    { label: '2024 Adult Compendium of Physical Activities: ages 19–59', href: 'https://pacompendium.com/adult-compendium/', names: ["2024 Adult Compendium of Physical Activities: возраст 19–59 лет", "2024 Adult Compendium of Physical Activities: ages 19–59", "2024 Adult Compendium of Physical Activities: вік 19–59 років", "2024 Adult Compendium of Physical Activities: Alter 19–59 Jahre", "2024 Adult Compendium of Physical Activities: edades de 19–59 años"] },
    { label: 'Compendium: walking code 17160', href: 'https://pacompendium.com/walking/', names: ["Compendium: ходьба, код 17160", "Compendium: walking code 17160", "Compendium: ходьба, код 17160", "Compendium: Gehen, Code 17160", "Compendium: caminar, código 17160"] },
    { label: 'Compendium: cycling code 01014', href: 'https://pacompendium.com/bicycling/', names: ["Compendium: езда на велосипеде, код 01014", "Compendium: cycling code 01014", "Compendium: їзда на велосипеді, код 01014", "Compendium: Radfahren, Code 01014", "Compendium: ciclismo, código 01014"] },
    { label: 'Compendium: running code 12050', href: 'https://pacompendium.com/running/', names: ["Compendium: бег, код 12050", "Compendium: running code 12050", "Compendium: біг, код 12050", "Compendium: Laufen, Code 12050", "Compendium: correr, código 12050"] },
    { label: 'Compendium: swimming code 18290', href: 'https://pacompendium.com/water-activities/', names: ["Compendium: плавание, код 18290", "Compendium: swimming code 18290", "Compendium: плавання, код 18290", "Compendium: Schwimmen, Code 18290", "Compendium: natación, código 18290"] },
  ],
  'ideal-weight': [
    { label: 'Peterson et al. (2016): Table 3, historical weight equations', href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4841935/', names: ["Peterson et al. (2016): таблица 3, исторические формулы массы тела", "Peterson et al. (2016): Table 3, historical weight equations", "Peterson et al. (2016): таблиця 3, історичні формули маси тіла", "Peterson et al. (2016): Tabelle 3, historische Körpergewichtsformeln", "Peterson et al. (2016): tabla 3, fórmulas históricas del peso corporal"] },
    { label: 'CDC: adult BMI categories, ages 20+', href: 'https://www.cdc.gov/bmi/adult-calculator/bmi-categories.html', names: ["CDC: категории ИМТ взрослых в возрасте от 20 лет", "CDC: adult BMI categories, ages 20+", "CDC: категорії ІМТ дорослих віком від 20 років", "CDC: BMI-Kategorien für Erwachsene ab 20 Jahren", "CDC: categorías de IMC para adultos de 20 años o más"] },
  ],
  'max-heart-rate': [
    { label: 'Tanaka et al. (2001): healthy adult population regression', href: 'https://pubmed.ncbi.nlm.nih.gov/11153730/', names: ["Tanaka et al. (2001): регрессия для выборки здоровых взрослых", "Tanaka et al. (2001): healthy adult population regression", "Tanaka et al. (2001): регресія для вибірки здорових дорослих", "Tanaka et al. (2001): Regression für eine Population gesunder Erwachsener", "Tanaka et al. (2001): regresión en una población de adultos sanos"] },
    { label: 'Gulati et al. (2010): peak heart rate in asymptomatic women', href: 'https://pubmed.ncbi.nlm.nih.gov/20585008/', names: ["Gulati et al. (2010): пиковая частота сердечных сокращений у женщин без симптомов", "Gulati et al. (2010): peak heart rate in asymptomatic women", "Gulati et al. (2010): пікова частота серцевих скорочень у жінок без симптомів", "Gulati et al. (2010): maximale Herzfrequenz bei asymptomatischen Frauen", "Gulati et al. (2010): frecuencia cardíaca máxima en mujeres asintomáticas"] },
  ],
  'vo2max': [
    { label: 'Uth et al. (2004): trained men aged 21–51', href: 'https://pubmed.ncbi.nlm.nih.gov/14624296/', names: ["Uth et al. (2004): тренированные мужчины в возрасте 21–51 года", "Uth et al. (2004): trained men aged 21–51", "Uth et al. (2004): треновані чоловіки віком 21–51 рік", "Uth et al. (2004): trainierte Männer im Alter von 21–51 Jahren", "Uth et al. (2004): hombres entrenados de 21–51 años"] },
    { label: 'Cooper (1968): original study and regression in miles', href: 'https://jamanetwork.com/journals/jama/article-abstract/337382', names: ['Cooper (1968): исходное исследование и регрессия в милях', 'Cooper (1968): original study and regression in miles', 'Cooper (1968): початкове дослідження та регресія в милях', 'Cooper (1968): Originalstudie und Regression in Meilen', 'Cooper (1968): estudio original y regresión en millas'] },
    { label: 'Soleimani et al. (2021), §2.6: use of (D−504.9)/44.73', href: 'https://onlinelibrary.wiley.com/doi/10.1002/fsn3.2319', names: ['Soleimani и др. (2021), §2.6: использование (D−504,9)/44,73', 'Soleimani et al. (2021), §2.6: use of (D−504.9)/44.73', 'Soleimani та ін. (2021), §2.6: використання (D−504,9)/44,73', 'Soleimani et al. (2021), §2.6: Verwendung von (D−504,9)/44,73', 'Soleimani y otros (2021), §2.6: uso de (D−504,9)/44,73'] },
    { label: 'The Cooper Institute: 12-minute test protocol and limitations', href: 'https://www.cooperinstitute.org/blog/50-years-of-the-cooper-12-minute-run', names: ["The Cooper Institute: протокол и ограничения 12-минутного теста", "The Cooper Institute: 12-minute test protocol and limitations", "The Cooper Institute: протокол та обмеження 12-хвилинного тесту", "The Cooper Institute: Protokoll und Grenzen des 12-Minuten-Tests", "The Cooper Institute: protocolo y limitaciones del test de 12 minutos"] },
  ],
  'water-intake': [{ label: 'EFSA (2010): total water from food and drinks; does not validate this heuristic', href: 'https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2010.1459', names: ["EFSA (2010): общее поступление воды из пищи и напитков; не подтверждает эту эвристическую формулу", "EFSA (2010): total water from food and drinks; does not validate this heuristic", "EFSA (2010): загальне надходження води з їжі та напоїв; не підтверджує цю евристичну формулу", "EFSA (2010): gesamte Wasserzufuhr aus Lebensmitteln und Getränken; bestätigt diese Faustformel nicht", "EFSA (2010): agua total de alimentos y bebidas; no valida esta regla aproximada"] }],
  'waist-ratio': [{ label: 'NICE NG246: adult central-adiposity screening and waist measurement', href: 'https://www.nice.org.uk/guidance/ng246/chapter/Identifying-and-assessing-overweight-obesity-and-central-adiposity', names: ["NICE NG246: скрининг центрального ожирения у взрослых и измерение талии", "NICE NG246: adult central-adiposity screening and waist measurement", "NICE NG246: скринінг центрального ожиріння в дорослих і вимірювання талії", "NICE NG246: Screening auf zentrale Adipositas bei Erwachsenen und Taillenmessung", "NICE NG246: cribado de adiposidad central en adultos y medición de cintura"] }],
  'calories-from-macros': [{ label: 'FDA / 21 CFR 101.9(c)(1)(i): general 4/4/9 energy factors', href: 'https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-101/subpart-A/section-101.9', names: ["FDA / 21 CFR 101.9(c)(1)(i): общие энергетические коэффициенты 4/4/9", "FDA / 21 CFR 101.9(c)(1)(i): general 4/4/9 energy factors", "FDA / 21 CFR 101.9(c)(1)(i): загальні енергетичні коефіцієнти 4/4/9", "FDA / 21 CFR 101.9(c)(1)(i): allgemeine Energiefaktoren 4/4/9", "FDA / 21 CFR 101.9(c)(1)(i): factores energéticos generales 4/4/9"] }],
};

export function getReviewedMethodSources(id: string, locale: string): EditorialSource[] {
  const index = ({ ru: 0, en: 1, uk: 2, de: 3, es: 4 } as Record<string, number>)[locale] ?? 1;
  return converterSources[id]?.map((key) => ({ href: sources[key].href, label: sources[key].names[index] }))
    ?? healthSources[id]?.map((source) => ({ href: source.href, label: source.names[index] })) ?? [];
}

// Documentary support remains bounded by the source: historical unit factor,
// original regression, or later experimental use is not universal validation.
export function getReviewedSourceCaveat(id: string, locale: string): string | undefined {
  if (id !== 'convert-illuminance' && id !== 'vo2max') return undefined;
  const text = {
    'convert-illuminance': {
      ru: 'Нокс — устаревшая единица: таблица I Luxenberg (1965) указывает 1 nox = 0,001 lx. Здесь используется это историческое соотношение. Оно не подтверждает включение nox в современную SI или нормативы освещения; ссылки BIPM и NIST относятся к остальным единицам.',
      en: 'Nox is an obsolete unit: Table I in Luxenberg (1965) gives 1 nox = 0.001 lx. This converter uses that historical factor. It does not establish current SI or lighting-standard acceptance of nox; the BIPM and NIST links support the other units.',
      uk: 'Нокс — застаріла одиниця: таблиця I Luxenberg (1965) вказує 1 nox = 0,001 lx. Тут використано це історичне співвідношення. Воно не підтверджує включення nox до сучасної SI чи нормативів освітлення; посилання BIPM і NIST стосуються інших одиниць.',
      de: 'Nox ist eine veraltete Einheit: Tabelle I bei Luxenberg (1965) nennt 1 nox = 0,001 lx. Dieser Rechner verwendet diesen historischen Faktor. Das belegt keine heutige Anerkennung von Nox im SI oder in Beleuchtungsnormen; die BIPM- und NIST-Links betreffen die anderen Einheiten.',
      es: 'Nox es una unidad obsoleta: la tabla I de Luxenberg (1965) indica 1 nox = 0,001 lx. Este conversor usa esa relación histórica. Esto no demuestra la aceptación actual de nox en el SI ni en normas de iluminación; los enlaces de BIPM y NIST respaldan las otras unidades.',
    },
    vo2max: {
      ru: 'Исходная регрессия Cooper (1968) выражена в милях: точный перевод опубликованных округлённых коэффициентов отличается от используемой здесь метрической формулы. Формула (D−504,9)/44,73 прямо использована в Soleimani и др. (2021), §2.6. Применение в этом исследовании не доказывает точность для всех людей и не заменяет лабораторное измерение VO₂max.',
      en: 'Cooper’s original 1968 regression uses miles: converting its published rounded coefficients exactly gives a different metric expression from this estimator. Soleimani et al. (2021), §2.6, explicitly use (D−504.9)/44.73. Use in that study does not establish accuracy for every population or replace laboratory VO₂max measurement.',
      uk: 'Початкова регресія Cooper (1968) виражена в милях: точне переведення опублікованих округлених коефіцієнтів відрізняється від використаної тут метричної формули. Формулу (D−504,9)/44,73 прямо використано в Soleimani та ін. (2021), §2.6. Застосування в цьому дослідженні не доводить точності для всіх людей і не замінює лабораторного вимірювання VO₂max.',
      de: 'Coopers ursprüngliche Regression von 1968 verwendet Meilen: Die exakte Umrechnung der veröffentlichten gerundeten Koeffizienten ergibt einen anderen metrischen Ausdruck als diese Schätzung. Soleimani et al. (2021), §2.6, verwenden ausdrücklich (D−504,9)/44,73. Die Verwendung in dieser Studie belegt keine Genauigkeit für jede Population und ersetzt keine Labormessung von VO₂max.',
      es: 'La regresión original de Cooper (1968) usa millas: la conversión exacta de sus coeficientes publicados y redondeados da una expresión métrica distinta de esta estimación. Soleimani y otros (2021), §2.6, usan explícitamente (D−504,9)/44,73. El uso en ese estudio no demuestra exactitud para todas las poblaciones ni sustituye la medición de VO₂max en laboratorio.',
    },
  };
  const caveat = text[id];
  return Object.hasOwn(caveat, locale) ? caveat[locale as keyof typeof caveat] : caveat.en;
}
