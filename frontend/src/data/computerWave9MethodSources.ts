import type { EditorialSource } from './calculatorEditorial';
// Primary source bodies read by AI; human review remains pending.
// Arithmetic derivations and chosen scenario bounds are not source-certified recommendations.
const sources = {
  "binary": {
    "href": "https://physics.nist.gov/cuu/Units/binary.html",
    "label": {
      "ru": "NIST: десятичные и двоичные приставки",
      "en": "NIST: decimal and binary prefixes",
      "uk": "NIST: десяткові та двійкові приставки",
      "de": "NIST: dezimale und binäre Vorsätze",
      "es": "NIST: prefijos decimales y binarios"
    }
  },
  "cssUnits": {
    "href": "https://www.w3.org/TR/css-values-3/",
    "label": {
      "ru": "W3C CSS Values 3: базы em/rem и абсолютные единицы (проект)",
      "en": "W3C CSS Values 3: em/rem bases and absolute units (draft)",
      "uk": "W3C CSS Values 3: бази em/rem та абсолютні одиниці (проєкт)",
      "de": "W3C CSS Values 3: em/rem und absolute Einheiten (Entwurf)",
      "es": "W3C CSS Values 3: bases em/rem y unidades absolutas (borrador)"
    }
  },
  "cssColor": {
    "href": "https://www.w3.org/TR/css-color-4/",
    "label": {
      "ru": "W3C CSS Color 4: HEX и синтаксис HSL",
      "en": "W3C CSS Color 4: HEX and HSL syntax",
      "uk": "W3C CSS Color 4: HEX і синтаксис HSL",
      "de": "W3C CSS Color 4: HEX und HSL-Syntax",
      "es": "W3C CSS Color 4: HEX y sintaxis HSL"
    }
  },
  "rfc31": {
    "href": "https://www.rfc-editor.org/rfc/rfc3021",
    "label": {
      "ru": "RFC3021: префикс /31 на линии точка-точка",
      "en": "RFC3021: /31 on point-to-point links",
      "uk": "RFC3021: префікс /31 на лінії точка-точка",
      "de": "RFC3021: /31 bei Punkt-zu-Punkt-Verbindungen",
      "es": "RFC3021: /31 en enlaces punto a punto"
    }
  },
  "nistPassword": {
    "href": "https://pages.nist.gov/800-63-4/sp800-63b.html",
    "label": {
      "ru": "NIST SP800-63B-4: ограничения оценки паролей",
      "en": "NIST SP800-63B-4: limits of password assessment",
      "uk": "NIST SP800-63B-4: межі оцінювання паролів",
      "de": "NIST SP800-63B-4: Grenzen der Passwortbewertung",
      "es": "NIST SP800-63B-4: límites de evaluación de contraseñas"
    }
  },
  "raid": {
    "href": "https://cloud.ibm.com/docs/bare-metal?topic=bare-metal-bm-raid-levels",
    "label": {
      "ru": "IBM Cloud: зеркала, паритет и ограничения RAID",
      "en": "IBM Cloud: RAID mirroring, parity and limits",
      "uk": "IBM Cloud: дзеркала, паритет і межі RAID",
      "de": "IBM Cloud: RAID-Spiegelung, Parität und Grenzen",
      "es": "IBM Cloud: espejos, paridad y límites RAID"
    }
  },
  "date": {
    "href": "https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date-objects",
    "label": {
      "ru": "ECMAScript: Gregorian UTC, эпоха и годы 0–99 (проект)",
      "en": "ECMAScript: Gregorian UTC, epoch and years 0–99 (draft)",
      "uk": "ECMAScript: григоріанський UTC, епоха й роки 0–99 (проєкт)",
      "de": "ECMAScript: Gregorianisches UTC, Epoche und Jahre 0–99 (Entwurf)",
      "es": "ECMAScript: UTC gregoriano, época y años 0–99 (borrador)"
    }
  }
};
const methods: Record<string,(keyof typeof sources)[]> = {
  "aspect-ratio": [],
  "color-convert": [
    "cssColor"
  ],
  "css-units": [
    "cssUnits"
  ],
  "download-time": [
    "binary"
  ],
  "files-on-disk": [
    "binary"
  ],
  "fps-frametime": [],
  "internet-traffic": [
    "binary"
  ],
  "ipv4-subnet": [
    "rfc31"
  ],
  "modular-scale": [],
  "network-bandwidth": [],
  "password-entropy": [
    "nistPassword"
  ],
  "ppi-dpi": [],
  "raid": [
    "raid",
    "binary"
  ],
  "tv-monitor-viewing-distance": [],
  "unix-timestamp": [
    "date"
  ],
  "video-file-size": [
    "binary"
  ]
};
export function getComputerWave9MethodSources(id: string, locale: string): EditorialSource[] {
 const lang = locale === 'ru' || locale === 'uk' || locale === 'de' || locale === 'es' ? locale : 'en';
 return (methods[id] ?? []).map(key => ({ href:sources[key].href,label:sources[key].label[lang] }));
}
