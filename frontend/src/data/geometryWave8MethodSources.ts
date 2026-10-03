import type { EditorialSource } from './calculatorEditorial';

// Primary bodies and the Optibelt formula page read by AI on 2026-10-01 UTC.
// These links support the stated identities or bounded models, not human approval.
// Local derivations: cone sector unrolling, polygon signed triangles/centroid,
// annulus factorisation, sectors as circle fractions and linearly varying frustum sections.
const sources = {
  "circles": {
    "href": "https://openstax.org/books/prealgebra/pages/9-5-solve-geometry-applications-circles-and-irregular-figures",
    "label": {
      "ru": "OpenStax: площадь круга и длина окружности",
      "en": "OpenStax: circle area and circumference",
      "uk": "OpenStax: площа круга та довжина кола",
      "de": "OpenStax: Kreisfläche und Kreisumfang",
      "es": "OpenStax: área y circunferencia del círculo"
    }
  },
  "solids": {
    "href": "https://openstax.org/books/prealgebra/pages/9-6-solve-geometry-applications-volume-and-surface-area",
    "label": {
      "ru": "OpenStax: объёмы тел и площади поверхностей",
      "en": "OpenStax: solid volumes and surface areas",
      "uk": "OpenStax: об’єми тіл і площі поверхонь",
      "de": "OpenStax: Körpervolumen und Oberflächen",
      "es": "OpenStax: volúmenes de sólidos y áreas de superficie"
    }
  },
  "slicing": {
    "href": "https://openstax.org/books/calculus-volume-2/pages/2-2-determining-volumes-by-slicing",
    "label": {
      "ru": "OpenStax: объём через интегрирование площадей сечений",
      "en": "OpenStax: volume by integrating cross-sectional areas",
      "uk": "OpenStax: об’єм через інтегрування площ перерізів",
      "de": "OpenStax: Volumen durch Integration der Querschnittsflächen",
      "es": "OpenStax: volumen integrando áreas de secciones"
    }
  },
  "rightTriangle": {
    "href": "https://openstax.org/books/precalculus-2e/pages/5-4-right-triangle-trigonometry",
    "label": {
      "ru": "OpenStax: синус и тангенс в прямоугольном треугольнике",
      "en": "OpenStax: sine and tangent in a right triangle",
      "uk": "OpenStax: синус і тангенс у прямокутному трикутнику",
      "de": "OpenStax: Sinus und Tangens im rechtwinkligen Dreieck",
      "es": "OpenStax: seno y tangente en un triángulo rectángulo"
    }
  },
  "green": {
    "href": "https://openstax.org/books/calculus-volume-3/pages/6-4-greens-theorem",
    "label": {
      "ru": "OpenStax: площадь простой замкнутой области через границу",
      "en": "OpenStax: area of a simple closed region from its boundary",
      "uk": "OpenStax: площа простої замкненої області через межу",
      "de": "OpenStax: Fläche eines einfachen geschlossenen Gebiets aus dem Rand",
      "es": "OpenStax: área de una región simple cerrada a partir del borde"
    }
  },
  "ellipseExact": {
    "href": "https://dlmf.nist.gov/19.30",
    "label": {
      "ru": "NIST DLMF: точная длина эллипса через эллиптический интеграл",
      "en": "NIST DLMF: exact ellipse length using an elliptic integral",
      "uk": "NIST DLMF: точна довжина еліпса через еліптичний інтеграл",
      "de": "NIST DLMF: exakte Ellipsenlänge mit einem elliptischen Integral",
      "es": "NIST DLMF: longitud exacta de una elipse mediante una integral elíptica"
    }
  },
  "ellipseApprox": {
    "href": "https://ramanujan.sirinudi.org/Volumes/published/ram06.html",
    "label": {
      "ru": "Рамануджан, 1914: первое приближение периметра эллипса",
      "en": "Ramanujan, 1914: first ellipse-perimeter approximation",
      "uk": "Рамануджан, 1914: перше наближення периметра еліпса",
      "de": "Ramanujan, 1914: erste Näherung des Ellipsenumfangs",
      "es": "Ramanujan, 1914: primera aproximación del perímetro de una elipse"
    }
  },
  "belt": {
    "href": "https://www.optibelt.com/fileadmin/pdf/produkte/zahnriemen-gummi/Optibelt-TM-Rubber-Timing-Belt-Drives.pdf",
    "label": {
      "ru": "Optibelt, §2.5: приближённая расчётная длина зубчатого ремня",
      "en": "Optibelt, §2.5: approximate timing-belt pitch length",
      "uk": "Optibelt, §2.5: наближена розрахункова довжина зубчастого паса",
      "de": "Optibelt, §2.5: angenäherte Wirklänge eines Zahnriemens",
      "es": "Optibelt, §2.5: longitud primitiva aproximada de una correa dentada"
    }
  },
  "golden": {
    "href": "https://mathcs.clarku.edu/~djoyce/elements/bookVI/propVI30.html",
    "label": {
      "ru": "Евклид VI.30: деление в крайнем и среднем отношении",
      "en": "Euclid VI.30: division in extreme and mean ratio",
      "uk": "Евклід VI.30: поділ у крайньому та середньому відношенні",
      "de": "Euklid VI.30: Teilung im äußeren und mittleren Verhältnis",
      "es": "Euclides VI.30: división en razón extrema y media"
    }
  }
};

const methods: Record<string, (keyof typeof sources)[]> = {
  "belt-length": [
    "belt",
    "rightTriangle"
  ],
  "geom-annulus": [
    "circles"
  ],
  "geom-cone": [
    "solids",
    "rightTriangle"
  ],
  "geom-cube": [
    "solids"
  ],
  "geom-cuboid": [
    "solids"
  ],
  "geom-cylinder": [
    "solids"
  ],
  "geom-ellipse": [
    "ellipseApprox",
    "ellipseExact",
    "green"
  ],
  "geom-frustum": [
    "slicing",
    "rightTriangle"
  ],
  "geom-polygon-coords": [
    "green"
  ],
  "geom-prism": [
    "rightTriangle",
    "solids"
  ],
  "geom-pyramid": [
    "slicing",
    "rightTriangle"
  ],
  "geom-regular-polygon": [
    "rightTriangle"
  ],
  "geom-sector": [
    "circles",
    "rightTriangle"
  ],
  "geom-sphere": [
    "solids"
  ],
  "golden-ratio": [
    "golden"
  ],
  "pyramid-frustum": [
    "slicing",
    "rightTriangle"
  ],
  "slope": [
    "rightTriangle"
  ]
};

export function getGeometryWave8MethodSources(id: string, locale: string): EditorialSource[] {
  return (Object.hasOwn(methods, id) ? methods[id] : []).map(key => ({ href: sources[key].href, label: sources[key].label[locale as keyof typeof sources[typeof key]['label']] ?? sources[key].label.en }));
}
