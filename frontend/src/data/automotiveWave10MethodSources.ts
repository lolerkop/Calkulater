import type { EditorialSource } from './calculatorEditorial';
type Locale = 'ru' | 'en' | 'uk' | 'de' | 'es';
// Primary passages read on 2026-10-02; source scope is not human or numerical approval.
// NIST B8 factors are tabulated rounded values, not proof of every digit of an exact convention.
// The quarter-mile link supports horsepower units only, NOT preset 5.825/234 or its calibration.
// Bare algebraic budgeting and cylinder geometry need no decorative method source.
const urls = {
  "nasa": "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/compression-and-expansion/",
  "nist": "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8",
  "kia": "https://static.nhtsa.gov/odi/tsbs/2012/SB-10090125-5448.pdf",
  "mix": "https://www.stihlusa.com/en/guides-projects/how-to-use-start/mixing-oil-and-gasoline",
  "fourmix": "https://www.stihl.co.uk/en/stihl-technology/engine-technology",
  "fuel": "https://www.stihlusa.com/en/support-events/frequently-asked-questions/products/fuel",
  "motion": "https://openstax.org/books/college-physics-2e/pages/2-5-motion-equations-for-constant-acceleration-in-one-dimension",
  "fhwa": "https://highways.dot.gov/safety/speed-management/speed-concepts-informational-guide/chapter-4-engineering-and-technical",
  "michelin": "https://middle-east.michelin.com/en/auto/advice/tyre-basics/tyre-markings-explained",
  "wheel": "https://www.mickeythompsontires.com/tech-bulletins/backspacing-and-offset"
} as const;
type Source = keyof typeof urls;
const labels: Record<Locale, Record<Source,string>> = {
  "ru": {
    "nasa": "NASA Glenn: отношение объёмов поршневого цилиндра при сжатии; не подбор топлива",
    "nist": "NIST SP 811 B8: единицы и различие метрической PS и механической hp; коэффициенты таблицы округлены",
    "kia": "Kia GEN017: измерение расхода по заправкам и пробегу; данные производителя, размещённые NHTSA",
    "mix": "STIHL: приготовление смеси по руководству конкретного двигателя; не универсальная пропорция",
    "fourmix": "STIHL 4-MIX: четырёхтактный принцип с бензино-масляной смесью",
    "fuel": "STIHL: продуктовые ограничения этанола и хранения; обычное топливо и MotoMix различаются",
    "motion": "OpenStax §2.5: путь, средняя скорость и остановка при постоянном замедлении",
    "fhwa": "FHWA: условия дорожного проектирования и время реакции; не норматив для текущих значений модели",
    "michelin": "Michelin: номинальная ширина, процент профиля и диаметр диска в маркировке",
    "wheel": "Mickey Thompson: знак ET, backspacing и номинальная добавка к ширине; не разрешение установки"
  },
  "en": {
    "nasa": "NASA Glenn: piston-cylinder volume ratio during compression, not fuel selection",
    "nist": "NIST SP 811 B8: units and metric PS versus mechanical hp; tabulated factors are rounded",
    "kia": "Kia GEN017: refill-and-distance fuel measurement; manufacturer bulletin hosted by NHTSA",
    "mix": "STIHL: mix preparation under the particular engine manual, not a universal ratio",
    "fourmix": "STIHL 4-MIX: four-stroke principle using a petrol-oil mixture",
    "fuel": "STIHL: product-specific ethanol and storage limits; ordinary fuel and MotoMix differ",
    "motion": "OpenStax §2.5: displacement, average velocity and stopping at constant deceleration",
    "fhwa": "FHWA: road-design conditions and reaction time, not a standard for this model’s current inputs",
    "michelin": "Michelin: nominal width, aspect percentage and rim diameter in tyre markings",
    "wheel": "Mickey Thompson: signed ET, backspacing and nominal width allowance, not fitment approval"
  },
  "uk": {
    "nasa": "NASA Glenn: відношення об’ємів поршневого циліндра при стисненні, не вибір палива",
    "nist": "NIST SP 811 B8: одиниці та відмінність метричної PS від механічної hp; табличні коефіцієнти округлені",
    "kia": "Kia GEN017: вимірювання витрати за заправками й пробігом; бюлетень виробника на NHTSA",
    "mix": "STIHL: приготування суміші за інструкцією конкретного двигуна, не універсальна пропорція",
    "fourmix": "STIHL 4-MIX: чотиритактний принцип із бензино-мастильною сумішшю",
    "fuel": "STIHL: продуктові межі етанолу й зберігання; звичайне пальне та MotoMix різняться",
    "motion": "OpenStax §2.5: шлях, середня швидкість і зупинка за сталого уповільнення",
    "fhwa": "FHWA: умови дорожнього проєктування й час реакції, не норма для поточних вводів моделі",
    "michelin": "Michelin: номінальна ширина, відсоток профілю й діаметр диска в маркуванні",
    "wheel": "Mickey Thompson: знак ET, backspacing і номінальний припуск ширини, не дозвіл встановлення"
  },
  "de": {
    "nasa": "NASA Glenn: Volumenverhältnis eines Kolbenzylinders bei Verdichtung, keine Kraftstoffwahl",
    "nist": "NIST SP 811 B8: Einheiten und metrische PS gegenüber mechanischen hp; Tabellenfaktoren sind gerundet",
    "kia": "Kia GEN017: Verbrauchsmessung durch Tankfüllungen und Strecke; Herstellerbulletin bei NHTSA",
    "mix": "STIHL: Gemischzubereitung nach der konkreten Motoranleitung, kein allgemeines Mischverhältnis",
    "fourmix": "STIHL 4-MIX: Viertaktprinzip mit Benzin-Öl-Gemisch",
    "fuel": "STIHL: produktspezifische Ethanol- und Lagergrenzen; normaler Kraftstoff und MotoMix unterscheiden sich",
    "motion": "OpenStax §2.5: Weg, mittlere Geschwindigkeit und Anhalten bei konstanter Verzögerung",
    "fhwa": "FHWA: Straßenentwurfsbedingungen und Reaktionszeit, keine Norm für aktuelle Modelleingaben",
    "michelin": "Michelin: nominelle Breite, Höhenverhältnis und Felgendurchmesser in der Kennzeichnung",
    "wheel": "Mickey Thompson: ET-Vorzeichen, Rückmaß und nomineller Breitenzuschlag, keine Einbaufreigabe"
  },
  "es": {
    "nasa": "NASA Glenn: relación de volúmenes del cilindro al comprimir, no selección de combustible",
    "nist": "NIST SP 811 B8: unidades y PS métricos frente a hp mecánicos; factores tabulados redondeados",
    "kia": "Kia GEN017: consumo mediante repostajes y distancia; boletín del fabricante alojado por NHTSA",
    "mix": "STIHL: preparación según el manual del motor concreto, no una proporción universal",
    "fourmix": "STIHL 4-MIX: principio de cuatro tiempos con mezcla de gasolina y aceite",
    "fuel": "STIHL: límites de etanol y conservación según el producto; combustible corriente y MotoMix difieren",
    "motion": "OpenStax §2.5: desplazamiento, velocidad media y detención con desaceleración constante",
    "fhwa": "FHWA: condiciones de diseño vial y reacción, no una norma para las entradas actuales del modelo",
    "michelin": "Michelin: anchura nominal, perfil porcentual y diámetro de llanta en la inscripción",
    "wheel": "Mickey Thompson: signo de ET, backspacing y margen nominal de anchura, no autorización de montaje"
  }
};
const sourcesById: Record<string, readonly Source[]> = {
  "car-depreciation": [],
  "compression-ratio": [
    "nasa"
  ],
  "engine-displacement": [],
  "fuel-consumption": [
    "kia"
  ],
  "fuel-oil-mix": [
    "mix",
    "fourmix",
    "fuel"
  ],
  "power-to-weight": [
    "nist"
  ],
  "quarter-mile-elapsed-time": [
    "nist"
  ],
  "speed-distance-time": [
    "motion"
  ],
  "stopping-distance": [
    "motion",
    "fhwa"
  ],
  "tire-size": [
    "michelin",
    "nist"
  ],
  "trip-cost": [],
  "wheel-offset": [
    "wheel"
  ]
};
export function getAutomotiveWave10MethodSources(id: string, locale: string): EditorialSource[] {
 const language: Locale = locale === 'ru' || locale === 'uk' || locale === 'de' || locale === 'es' ? locale : 'en';
 return (sourcesById[id] ?? []).map(key => ({label:labels[language][key], href:urls[key]}));
}
