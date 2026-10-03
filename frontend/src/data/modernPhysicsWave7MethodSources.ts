import type { EditorialSource } from './calculatorEditorial';

// Scientific method references; no publisher source is a product approval.
const records = {
  "constants": {
    "href": "https://physics.nist.gov/cuu/Constants/Table/allascii.txt",
    "names": [
      "NIST CODATA 2022: точные h, c, e и измеренная ε₀",
      "NIST CODATA 2022: exact h, c, e and measured ε₀",
      "NIST CODATA 2022: точні h, c, e та виміряна ε₀",
      "NIST CODATA 2022: exakte h, c, e und gemessene ε₀",
      "NIST CODATA 2022: h, c, e exactas y ε₀ medida"
    ]
  },
  "photon": {
    "href": "https://openstax.org/books/university-physics-volume-3/pages/6-2-photoelectric-effect",
    "names": [
      "OpenStax §6.2: энергия одного фотона и порог фотоэффекта",
      "OpenStax §6.2: single-photon energy and photoelectric threshold",
      "OpenStax §6.2: енергія фотона та поріг фотоефекту",
      "OpenStax §6.2: Photonenenergie und Photoeffektschwelle",
      "OpenStax §6.2: energía del fotón y umbral fotoeléctrico"
    ]
  },
  "matter": {
    "href": "https://openstax.org/books/university-physics-volume-3/pages/6-5-de-broglies-matter-waves",
    "names": [
      "OpenStax §6.5: λ=h/p, предел p=mv и частота волны материи",
      "OpenStax §6.5: λ=h/p, limits of p=mv and matter-wave frequency",
      "OpenStax §6.5: λ=h/p, межі p=mv і частота хвилі матерії",
      "OpenStax §6.5: λ=h/p, Grenzen von p=mv und Materiewellenfrequenz",
      "OpenStax §6.5: λ=h/p, límites de p=mv y frecuencia de materia"
    ]
  },
  "rest": {
    "href": "https://openstax.org/books/university-physics-volume-3/pages/5-9-relativistic-energy",
    "names": [
      "OpenStax §5.9: энергия покоя и энергия изменения массы",
      "OpenStax §5.9: rest energy and energy associated with a mass change",
      "OpenStax §5.9: енергія спокою та енергія зміни маси",
      "OpenStax §5.9: Ruheenergie und Energie einer Massenänderung",
      "OpenStax §5.9: energía en reposo y energía de un cambio de masa"
    ]
  },
  "energyUnits": {
    "href": "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8",
    "names": [
      "NIST SP811, приложение B.8: кВт·ч и условный тротиловый эквивалент",
      "NIST SP811 Appendix B.8: kWh and conventional TNT energy equivalent",
      "NIST SP811, додаток B.8: кВт·год і умовний тротиловий еквівалент",
      "NIST SP811 Anhang B.8: kWh und konventionelles TNT-Energieäquivalent",
      "NIST SP811 apéndice B.8: kWh y equivalente energético convencional de TNT"
    ]
  },
  "dilation": {
    "href": "https://openstax.org/books/university-physics-volume-3/pages/5-3-time-dilation",
    "names": [
      "OpenStax §5.3: собственный интервал и t=γτ в инерциальной системе",
      "OpenStax §5.3: proper interval and t=γτ in an inertial frame",
      "OpenStax §5.3: власний інтервал і t=γτ в інерціальній системі",
      "OpenStax §5.3: Eigenzeitintervall und t=γτ im Inertialsystem",
      "OpenStax §5.3: intervalo propio y t=γτ en un sistema inercial"
    ]
  },
  "length": {
    "href": "https://openstax.org/books/university-physics-volume-3/pages/5-4-length-contraction",
    "names": [
      "OpenStax §5.4: оставшаяся продольная длина L/L₀=1/γ",
      "OpenStax §5.4: remaining longitudinal length L/L₀=1/γ",
      "OpenStax §5.4: залишкова поздовжня довжина L/L₀=1/γ",
      "OpenStax §5.4: verbleibende Längenausdehnung L/L₀=1/γ",
      "OpenStax §5.4: longitud longitudinal restante L/L₀=1/γ"
    ]
  },
  "coulomb": {
    "href": "https://openstax.org/books/university-physics-volume-2/pages/5-3-coulombs-law",
    "names": [
      "OpenStax §5.3: электростатическая сила точечных зарядов",
      "OpenStax §5.3: electrostatic force between point charges",
      "OpenStax §5.3: електростатична сила точкових зарядів",
      "OpenStax §5.3: elektrostatische Kraft zwischen Punktladungen",
      "OpenStax §5.3: fuerza electrostática entre cargas puntuales"
    ]
  },
  "decay": {
    "href": "https://openstax.org/books/university-physics-volume-3/pages/10-3-radioactive-decay",
    "names": [
      "OpenStax §10.3: экспоненциальная модель и период полураспада",
      "OpenStax §10.3: exponential decay model and half-life",
      "OpenStax §10.3: експоненціальна модель і період напіврозпаду",
      "OpenStax §10.3: exponentielles Zerfallsmodell und Halbwertszeit",
      "OpenStax §10.3: modelo exponencial y semivida"
    ]
  },
  "intensity": {
    "href": "https://openstax.org/books/university-physics-volume-1/pages/17-3-sound-intensity",
    "names": [
      "OpenStax §17.3: обратные квадраты линейной интенсивности и логарифмические дБ",
      "OpenStax §17.3: inverse-square linear intensity and logarithmic dB",
      "OpenStax §17.3: обернені квадрати лінійної інтенсивності та логарифмічні дБ",
      "OpenStax §17.3: lineare Intensität im Abstandsquadrat und logarithmische dB",
      "OpenStax §17.3: intensidad lineal inversa al cuadrado y dB logarítmicos"
    ]
  },
  "wave": {
    "href": "https://openstax.org/books/university-physics-volume-1/pages/16-1-traveling-waves",
    "names": [
      "OpenStax §16.1: скорость, длина волны, частота и период",
      "OpenStax §16.1: speed, wavelength, frequency and period",
      "OpenStax §16.1: швидкість, довжина хвилі, частота й період",
      "OpenStax §16.1: Geschwindigkeit, Wellenlänge, Frequenz und Periodendauer",
      "OpenStax §16.1: velocidad, longitud de onda, frecuencia y periodo"
    ]
  },
  "field": {
    "href": "https://openstax.org/books/university-physics-volume-2/pages/5-4-electric-field",
    "names": [
      "OpenStax §5.4: поле источника независимо от пробного заряда",
      "OpenStax §5.4: source field independent of the test charge",
      "OpenStax §5.4: поле джерела не залежить від пробного заряду",
      "OpenStax §5.4: Quellenfeld unabhängig von der Probeladung",
      "OpenStax §5.4: campo de la fuente independiente de la carga de prueba"
    ]
  },
  "potential": {
    "href": "https://openstax.org/books/university-physics-volume-2/pages/7-1-electric-potential-energy",
    "names": [
      "OpenStax §7.1: энергия пары зарядов с нулём на бесконечности",
      "OpenStax §7.1: energy of a charge pair with zero at infinity",
      "OpenStax §7.1: енергія пари зарядів з нулем на нескінченності",
      "OpenStax §7.1: Energie eines Ladungspaars mit Nullpunkt im Unendlichen",
      "OpenStax §7.1: energía de un par de cargas con cero en el infinito"
    ]
  }
} as const;
const byId: Record<string, readonly (keyof typeof records)[]> = {
  "photon-energy": [
    "photon",
    "constants"
  ],
  "de-broglie": [
    "matter",
    "constants"
  ],
  "mass-energy": [
    "rest",
    "constants",
    "energyUnits"
  ],
  "relativity-dilation": [
    "dilation",
    "length",
    "constants"
  ],
  "coulomb": [
    "coulomb",
    "field",
    "potential",
    "constants"
  ],
  "half-life": [
    "decay"
  ],
  "inverse-square": [
    "intensity"
  ],
  "wave": [
    "wave",
    "matter"
  ]
};

export function getModernPhysicsWave7MethodSources(id: string, locale: string): EditorialSource[] {
  const index = ({ ru: 0, en: 1, uk: 2, de: 3, es: 4 } as Record<string, number>)[locale] ?? 1;
  return (byId[id] ?? []).map(key => ({ href: records[key].href, label: records[key].names[index] }));
}
