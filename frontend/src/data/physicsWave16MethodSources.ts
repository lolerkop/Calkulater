import type { EditorialSource } from './calculatorEditorial';
// Actual primary bodies read2026-10-02; report records boundaries and one independent peerPDF read. No human approval claim.
const primary:Record<string,{href:string;label:Record<string,string>}[]> = {
  "centripetal-force": [
    {
      "href": "https://openstax.org/books/university-physics-volume-1/pages/6-3-centripetal-force",
      "label": {
        "ru": "OpenStax: радиальная сила при круговом движении",
        "en": "OpenStax: radial force in circular motion",
        "uk": "OpenStax: радіальна сила за колового руху",
        "de": "OpenStax: Radialkraft bei Kreisbewegung",
        "es": "OpenStax: fuerza radial en movimiento circular"
      }
    }
  ],
  "buoyancy": [
    {
      "href": "https://openstax.org/books/university-physics-volume-1/pages/14-4-archimedes-principle-and-buoyancy",
      "label": {
        "ru": "OpenStax: вес вытесненной жидкости",
        "en": "OpenStax: displaced-fluid weight",
        "uk": "OpenStax: вага витісненої рідини",
        "de": "OpenStax: Gewicht verdrängter Flüssigkeit",
        "es": "OpenStax: peso del fluido desplazado"
      }
    }
  ],
  "carnot": [
    {
      "href": "https://openstax.org/books/university-physics-volume-2/pages/4-5-the-carnot-cycle",
      "label": {
        "ru": "OpenStax: обратимый предел Карно",
        "en": "OpenStax: reversible Carnot bound",
        "uk": "OpenStax: оборотна межа Карно",
        "de": "OpenStax: reversible Carnot-Grenze",
        "es": "OpenStax: límite reversible de Carnot"
      }
    }
  ],
  "pendulum": [
    {
      "href": "https://openstax.org/books/university-physics-volume-1/pages/15-4-pendulums",
      "label": {
        "ru": "OpenStax: маятник при малых углах",
        "en": "OpenStax: small-angle pendulum",
        "uk": "OpenStax: маятник за малих кутів",
        "de": "OpenStax: Pendel bei kleinen Winkeln",
        "es": "OpenStax: péndulo a ángulos pequeños"
      }
    }
  ],
  "doppler": [
    {
      "href": "https://openstax.org/books/university-physics-volume-1/pages/17-7-the-doppler-effect",
      "label": {
        "ru": "OpenStax: звуковой эффект Доплера в среде",
        "en": "OpenStax: sound Doppler effect in a medium",
        "uk": "OpenStax: звуковий ефект Доплера в середовищі",
        "de": "OpenStax: Schall-Dopplereffekt im Medium",
        "es": "OpenStax: Doppler sonoro en un medio"
      }
    }
  ],
  "hooke-law": [
    {
      "href": "https://openstax.org/books/university-physics-volume-1/pages/15-1-simple-harmonic-motion",
      "label": {
        "ru": "OpenStax: линейная пружина и возвращающая сила",
        "en": "OpenStax: linear spring and restoring force",
        "uk": "OpenStax: лінійна пружина й повертальна сила",
        "de": "OpenStax: lineare Feder und Rückstellkraft",
        "es": "OpenStax: muelle lineal y fuerza restauradora"
      }
    }
  ],
  "hydrostatic-pressure": [
    {
      "href": "https://openstax.org/books/university-physics-volume-1/pages/14-2-measuring-pressure",
      "label": {
        "ru": "OpenStax: гидростатика и шкалы давления",
        "en": "OpenStax: hydrostatics and pressure references",
        "uk": "OpenStax: гідростатика й шкали тиску",
        "de": "OpenStax: Hydrostatik und Druckbezüge",
        "es": "OpenStax: hidrostática y referencias de presión"
      }
    }
  ],
  "free-fall": [
    {
      "href": "https://openstax.org/books/university-physics-volume-1/pages/3-5-free-fall",
      "label": {
        "ru": "OpenStax: свободное падение без сопротивления",
        "en": "OpenStax: free fall without drag",
        "uk": "OpenStax: вільне падіння без опору",
        "de": "OpenStax: freier Fall ohne Widerstand",
        "es": "OpenStax: caída libre sin resistencia"
      }
    }
  ],
  "gravitational-force": [
    {
      "href": "https://openstax.org/books/university-physics-volume-1/pages/13-1-newtons-law-of-universal-gravitation",
      "label": {
        "ru": "OpenStax: гравитация точечных масс",
        "en": "OpenStax: point-mass gravitation",
        "uk": "OpenStax: гравітація точкових мас",
        "de": "OpenStax: Gravitation von Punktmassen",
        "es": "OpenStax: gravitación de masas puntuales"
      }
    }
  ],
  "specific-heat": [
    {
      "href": "https://openstax.org/books/university-physics-volume-2/pages/1-4-heat-transfer-specific-heat-and-calorimetry",
      "label": {
        "ru": "OpenStax: теплоёмкость без фазового перехода",
        "en": "OpenStax: heat capacity without phase change",
        "uk": "OpenStax: теплоємність без фазового переходу",
        "de": "OpenStax: Wärmekapazität ohne Phasenwechsel",
        "es": "OpenStax: capacidad térmica sin cambio de fase"
      }
    }
  ],
  "escape-velocity": [
    {
      "href": "https://openstax.org/books/university-physics-volume-1/pages/13-3-gravitational-potential-energy-and-total-energy",
      "label": {
        "ru": "OpenStax: энергия и скорость ухода",
        "en": "OpenStax: energy and escape speed",
        "uk": "OpenStax: енергія та швидкість відльоту",
        "de": "OpenStax: Energie und Fluchtgeschwindigkeit",
        "es": "OpenStax: energía y velocidad de escape"
      }
    }
  ],
  "orbital-period": [
    {
      "href": "https://openstax.org/books/university-physics-volume-1/pages/13-4-satellite-orbits-and-energy",
      "label": {
        "ru": "OpenStax: круговая орбита и период",
        "en": "OpenStax: circular orbit and period",
        "uk": "OpenStax: колова орбіта й період",
        "de": "OpenStax: Kreisbahn und Umlaufzeit",
        "es": "OpenStax: órbita circular y periodo"
      }
    }
  ],
  "moment-of-inertia": [
    {
      "href": "https://openstax.org/books/university-physics-volume-1/pages/10-5-calculating-moments-of-inertia",
      "label": {
        "ru": "OpenStax: момент инерции и выбранная ось",
        "en": "OpenStax: inertia and the specified axis",
        "uk": "OpenStax: момент інерції й обрана вісь",
        "de": "OpenStax: Trägheit und gewählte Achse",
        "es": "OpenStax: inercia y eje elegido"
      }
    }
  ],
  "pipe-flow": [
    {
      "href": "https://openstax.org/books/university-physics-volume-1/pages/14-5-fluid-dynamics",
      "label": {
        "ru": "OpenStax: расход и средняя скорость",
        "en": "OpenStax: volume flow and mean speed",
        "uk": "OpenStax: витрата й середня швидкість",
        "de": "OpenStax: Volumenstrom und mittlere Geschwindigkeit",
        "es": "OpenStax: caudal y velocidad media"
      }
    }
  ],
  "thermal-conduction": [
    {
      "href": "https://openstax.org/books/university-physics-volume-2/pages/1-6-mechanisms-of-heat-transfer",
      "label": {
        "ru": "OpenStax: стационарная теплопроводность слоя",
        "en": "OpenStax: steady conduction through a layer",
        "uk": "OpenStax: стаціонарна теплопровідність шару",
        "de": "OpenStax: stationäre Wärmeleitung einer Schicht",
        "es": "OpenStax: conducción estacionaria de una capa"
      }
    }
  ],
  "bernoulli": [
    {
      "href": "https://openstax.org/books/university-physics-volume-1/pages/14-6-bernoullis-equation",
      "label": {
        "ru": "OpenStax: энергия вдоль линии тока",
        "en": "OpenStax: energy along a streamline",
        "uk": "OpenStax: енергія вздовж лінії течії",
        "de": "OpenStax: Energie entlang einer Stromlinie",
        "es": "OpenStax: energía en una línea de corriente"
      }
    }
  ],
  "stress-strain": [
    {
      "href": "https://openstax.org/books/university-physics-volume-1/pages/12-3-stress-strain-and-elastic-modulus",
      "label": {
        "ru": "OpenStax: линейное осевое напряжение и деформация",
        "en": "OpenStax: linear axial stress and strain",
        "uk": "OpenStax: лінійне осьове напруження й деформація",
        "de": "OpenStax: lineare axiale Spannung und Dehnung",
        "es": "OpenStax: tensión y deformación axial lineal"
      }
    }
  ],
  "thin-lens": [
    {
      "href": "https://openstax.org/books/university-physics-volume-3/pages/2-4-thin-lenses",
      "label": {
        "ru": "OpenStax: знаки тонкой линзы и изображение на бесконечности",
        "en": "OpenStax: thin-lens signs and image at infinity",
        "uk": "OpenStax: знаки тонкої лінзи й зображення на нескінченності",
        "de": "OpenStax: Dünnlinsenvorzeichen und Bild im Unendlichen",
        "es": "OpenStax: signos de lente delgada e imagen al infinito"
      }
    }
  ],
  "projectile-motion": [
    {
      "href": "https://openstax.org/books/university-physics-volume-1/pages/4-3-projectile-motion",
      "label": {
        "ru": "OpenStax: независимые компоненты движения без сопротивления",
        "en": "OpenStax: independent motion components without drag",
        "uk": "OpenStax: незалежні складові руху без опору",
        "de": "OpenStax: unabhängige Bewegungskomponenten ohne Widerstand",
        "es": "OpenStax: componentes independientes sin resistencia"
      }
    }
  ],
  "terminal-velocity": [
    {
      "href": "https://openstax.org/books/university-physics-volume-1/pages/6-4-drag-force-and-terminal-speed",
      "label": {
        "ru": "OpenStax: квадратичное сопротивление и предельная скорость",
        "en": "OpenStax: quadratic drag and terminal speed",
        "uk": "OpenStax: квадратичний опір і гранична швидкість",
        "de": "OpenStax: quadratischer Widerstand und Grenzgeschwindigkeit",
        "es": "OpenStax: resistencia cuadrática y velocidad límite"
      }
    }
  ],
  "air-density": [
    {
      "href": "https://caps.ou.edu/ARPS/arpsbrowser/arps5.2.8browser/html_code/adas/mthermo.f90.html",
      "label": {
        "ru": "OU CAPS: коэффициенты Тетенса над жидкой водой",
        "en": "OU CAPS: liquid-water Tetens coefficients",
        "uk": "OU CAPS: коефіцієнти Тетенса над рідкою водою",
        "de": "OU CAPS: Tetens-Koeffizienten über flüssigem Wasser",
        "es": "OU CAPS: coeficientes Tetens sobre agua líquida"
      }
    }
  ],
  "humidity-convert": [
    {
      "href": "https://caps.ou.edu/ARPS/arpsbrowser/arps5.2.8browser/html_code/adas/mthermo.f90.html",
      "label": {
        "ru": "OU CAPS: коэффициенты Тетенса над жидкой водой",
        "en": "OU CAPS: liquid-water Tetens coefficients",
        "uk": "OU CAPS: коефіцієнти Тетенса над рідкою водою",
        "de": "OU CAPS: Tetens-Koeffizienten über flüssigem Wasser",
        "es": "OU CAPS: coeficientes Tetens sobre agua líquida"
      }
    }
  ],
  "air-pressure-at-altitude": [
    {
      "href": "https://ntrs.nasa.gov/api/citations/19770009539/downloads/19770009539.pdf",
      "label": {
        "ru": "NASA/NOAA 1976: стандартный слой и геопотенциальная высота; константы отличаются",
        "en": "NASA/NOAA 1976: standard layer and geopotential height; constants differ",
        "uk": "NASA/NOAA 1976: стандартний шар і геопотенціальна висота; сталі відрізняються",
        "de": "NASA/NOAA 1976: Standardschicht und geopotentielle Höhe; Konstanten weichen ab",
        "es": "NASA/NOAA 1976: capa estándar y altura geopotencial; constantes distintas"
      }
    }
  ],
  "boiling-point": [
    {
      "href": "https://ntrs.nasa.gov/api/citations/19770009539/downloads/19770009539.pdf",
      "label": {
        "ru": "NASA/NOAA 1976: стандартный слой и геопотенциальная высота; константы отличаются",
        "en": "NASA/NOAA 1976: standard layer and geopotential height; constants differ",
        "uk": "NASA/NOAA 1976: стандартний шар і геопотенціальна висота; сталі відрізняються",
        "de": "NASA/NOAA 1976: Standardschicht und geopotentielle Höhe; Konstanten weichen ab",
        "es": "NASA/NOAA 1976: capa estándar y altura geopotencial; constantes distintas"
      }
    },
    {
      "href": "https://openstax.org/books/chemistry-2e/pages/10-3-phase-transitions",
      "label": {
        "ru": "OpenStax: Клаузиус—Клапейрон с постоянной теплотой",
        "en": "OpenStax: constant-latent-heat Clausius–Clapeyron",
        "uk": "OpenStax: Клаузіус—Клапейрон зі сталою теплотою",
        "de": "OpenStax: Clausius–Clapeyron mit konstanter Verdampfungsenthalpie",
        "es": "OpenStax: Clausius–Clapeyron con calor constante"
      }
    }
  ],
  "dew-point": [
    {
      "href": "https://standards.transport.nsw.gov.au/_entity/annotation/81aefbc1-b635-ed11-9db1-000d3ae011f9",
      "label": {
        "ru": "TfNSW R 272: пара 17,27/237,7 в дорожном контракте, не гарантия общей точности",
        "en": "TfNSW R 272:17.27/237.7 pair in a road contract, not general accuracy assurance",
        "uk": "TfNSW R 272: пара 17,27/237,7 у дорожньому контракті, не гарантія загальної точності",
        "de": "TfNSW R 272: Paar 17,27/237,7 im Straßenvertrag, keine allgemeine Genauigkeitszusage",
        "es": "TfNSW R 272: par 17,27/237,7 en contrato vial, sin garantía general de precisión"
      }
    }
  ],
  "heat-index": [
    {
      "href": "https://www.weather.gov/ctp/heat",
      "label": {
        "ru": "NWS: регрессия, отдельные поправки и ограничения",
        "en": "NWS: regression, separate adjustments and limitations",
        "uk": "NWS: регресія, окремі поправки й обмеження",
        "de": "NWS: Regression, separate Korrekturen und Grenzen",
        "es": "NWS: regresión, ajustes separados y límites"
      }
    }
  ],
  "wind-chill": [
    {
      "href": "https://www.weather.gov/safety/cold-wind-chill-chart",
      "label": {
        "ru": "NWS: модель открытой кожи и границы в°F/милях в час",
        "en": "NWS: exposed-skin model and °F/mph bounds",
        "uk": "NWS: модель відкритої шкіри й межі у°F/милях за годину",
        "de": "NWS: Modell offener Haut und Grenzen in°F/mph",
        "es": "NWS: modelo de piel expuesta y límites en°F/mph"
      }
    }
  ],
  "wind-power": [
    {
      "href": "https://www.energy.gov/cmei/systems/windexchange/small-wind-guidebook",
      "label": {
        "ru": "DOE: точный предел 16/27 и смысл Cp",
        "en": "DOE: exact 16/27 bound and Cp meaning",
        "uk": "DOE: точна межа 16/27 і зміст Cp",
        "de": "DOE: exakte Grenze 16/27 und Bedeutung von Cp",
        "es": "DOE: límite exacto 16/27 y significado de Cp"
      }
    }
  ],
  "speed-of-sound": [
    {
      "href": "https://www.grc.nasa.gov/www/k-12/BGP/snddrv.html",
      "label": {
        "ru": "NASA: скорость звука в идеальном газе",
        "en": "NASA: ideal-gas sound speed",
        "uk": "NASA: швидкість звуку в ідеальному газі",
        "de": "NASA: Schallgeschwindigkeit im idealen Gas",
        "es": "NASA: sonido en gas ideal"
      }
    }
  ],
  "mach-number": [
    {
      "href": "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/role-of-the-mach-number/",
      "label": {
        "ru": "NASA: воздушная скорость и граница M=1",
        "en": "NASA: airspeed and M=1 boundary",
        "uk": "NASA: повітряна швидкість і межа M=1",
        "de": "NASA: Luftgeschwindigkeit und Grenze M=1",
        "es": "NASA: velocidad respecto al aire y frontera M=1"
      }
    }
  ],
  "decibel": [
    {
      "href": "https://openstax.org/books/university-physics-volume-1/pages/17-3-sound-intensity",
      "label": {
        "ru": "OpenStax: логарифмические уровни и квадрат амплитуды",
        "en": "OpenStax: logarithmic levels and amplitude squared",
        "uk": "OpenStax: логарифмічні рівні й квадрат амплітуди",
        "de": "OpenStax: logarithmische Pegel und Amplitudenquadrat",
        "es": "OpenStax: niveles logarítmicos y amplitud al cuadrado"
      }
    }
  ]
};
export function getPhysicsWave16MethodSources(id:string,locale:string):EditorialSource[]{
 return (Object.hasOwn(primary,id)?primary[id]:[]).map(s=>({href:s.href,label:s.label[locale]??s.label.en}));
}
