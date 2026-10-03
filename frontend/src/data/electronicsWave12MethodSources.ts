import type { EditorialSource } from './calculatorEditorial';

// Primary bodies read2026-10-02; links support the stated model boundaries, not device ratings.
const primary: Record<string, {href:string;label:Record<string,string>}[]> = {
  "coaxial-cable-impedance": [
    {
      "href": "https://eng.libretexts.org/Bookshelves/Electrical_Engineering/Electronics/Microwave_and_RF_Design_II_-_Transmission_Lines_(Steer)/02:_Transmission_Lines/2.02:_Transmission_Line_Theory",
      "label": {
        "ru": "Steer: коаксиальный TEM и общая RLGC-модель",
        "en": "Steer: coaxial TEM and general RLGC model",
        "uk": "Steer: коаксіальний TEM і загальна RLGC-модель",
        "de": "Steer: koaxialer TEM und allgemeines RLGC-Modell",
        "es": "Steer: TEM coaxial y modelo RLGC general"
      }
    }
  ],
  "headphone-power": [
    {
      "href": "https://openstax.org/books/university-physics-volume-1/pages/17-3-sound-intensity",
      "label": {
        "ru": "OpenStax: логарифмические уровни и отношение интенсивностей",
        "en": "OpenStax: logarithmic levels and intensity ratios",
        "uk": "OpenStax: логарифмічні рівні та відношення інтенсивностей",
        "de": "OpenStax: logarithmische Pegel und Intensitätsverhältnisse",
        "es": "OpenStax: niveles logarítmicos y relación de intensidades"
      }
    },
    {
      "href": "https://openstax.org/books/university-physics-volume-2/pages/15-4-power-in-an-ac-circuit",
      "label": {
        "ru": "OpenStax: RMS и активная мощность с cosφ",
        "en": "OpenStax: RMS and active power with cosφ",
        "uk": "OpenStax: діючі значення й активна потужність із cosφ",
        "de": "OpenStax: Effektivwerte und Wirkleistung mit cosφ",
        "es": "OpenStax: RMS y potencia activa con cosφ"
      }
    }
  ],
  "inverter-power": [
    {
      "href": "https://www.victronenergy.com/media/pg/Sun_Inverter/en/technical-specifications.html",
      "label": {
        "ru": "Victron Sun: максимум КПД и отдельный холостой ход — конкретное устройство",
        "en": "Victron Sun: maximum efficiency and separate idle consumption — specified product",
        "uk": "Victron Sun: максимальний ККД та окремий холостий хід — конкретний пристрій",
        "de": "Victron Sun: maximaler Wirkungsgrad und separater Leerlauf — konkretes Gerät",
        "es": "Victron Sun: rendimiento máximo y consumo en vacío — producto concreto"
      }
    }
  ],
  "lc-resonance": [
    {
      "href": "https://openstax.org/books/university-physics-volume-2/pages/14-5-oscillations-in-an-lc-circuit",
      "label": {
        "ru": "OpenStax: энергия и частота идеального LC",
        "en": "OpenStax: ideal LC energy and frequency",
        "uk": "OpenStax: енергія та частота ідеального LC",
        "de": "OpenStax: Energie und Frequenz des idealen LC-Kreises",
        "es": "OpenStax: energía y frecuencia del LC ideal"
      }
    },
    {
      "href": "https://openstax.org/books/university-physics-volume-2/pages/14-6-rlc-series-circuits",
      "label": {
        "ru": "OpenStax: свободные затухающие RLC-колебания",
        "en": "OpenStax: free damped RLC oscillation",
        "uk": "OpenStax: вільні загасаючі RLC-коливання",
        "de": "OpenStax: freie gedämpfte RLC-Schwingung",
        "es": "OpenStax: oscilación RLC libre amortiguada"
      }
    },
    {
      "href": "https://openstax.org/books/university-physics-volume-2/pages/15-5-resonance-in-an-ac-circuit",
      "label": {
        "ru": "OpenStax: резонанс вынужденного тока последовательного RLC",
        "en": "OpenStax: forced-current resonance in series RLC",
        "uk": "OpenStax: резонанс вимушеного струму послідовного RLC",
        "de": "OpenStax: erzwungene Stromresonanz beim Reihen-RLC",
        "es": "OpenStax: resonancia de corriente forzada en RLC serie"
      }
    }
  ],
  "led-resistor": [
    {
      "href": "https://openstax.org/books/university-physics-volume-2/pages/10-2-resistors-in-series-and-parallel",
      "label": {
        "ru": "OpenStax: общий последовательный ток и напряжение параллельных ветвей",
        "en": "OpenStax: common series current and parallel-branch voltage",
        "uk": "OpenStax: спільний послідовний струм і напруга паралельних гілок",
        "de": "OpenStax: gemeinsamer Reihenstrom und Parallelspannung",
        "es": "OpenStax: corriente común en serie y tensión en paralelo"
      }
    },
    {
      "href": "https://e2echina.ti.com/cfs-file/__key/telligent-evolution-components-attachments/13-107-00-00-00-01-00-92/slva325.pdf",
      "label": {
        "ru": "TI SLVA325: разброс LED I–V и потери балластных резисторов — другая схема с параллельными LED",
        "en": "TI SLVA325: LED I–V variation and ballast loss — separate parallel-LED circuit",
        "uk": "TI SLVA325: розкид LED I–V та втрати баласту — інша схема паралельних LED",
        "de": "TI SLVA325: LED-I–V-Streuung und Ballastverluste — andere Parallel-LED-Schaltung",
        "es": "TI SLVA325: variación LED I–V y pérdidas de lastre — otro circuito LED paralelo"
      }
    }
  ],
  "ne555-timer-astable": [
    {
      "href": "https://www.ti.com/lit/ds/symlink/ne555.pdf",
      "label": {
        "ru": "TI NE555 RevK: классическая схема, номинальные времена и доля высокого уровня",
        "en": "TI NE555 RevK: classic circuit, nominal times and waveform high-level fraction",
        "uk": "TI NE555 RevK: класична схема, номінальні часи та частка високого рівня",
        "de": "TI NE555 RevK: klassische Schaltung, nominale Zeiten und High-Anteil",
        "es": "TI NE555 RevK: circuito clásico, tiempos nominales y fracción alta"
      }
    }
  ],
  "rc-filter": [
    {
      "href": "https://openstax.org/books/university-physics-volume-2/pages/10-5-rc-circuits",
      "label": {
        "ru": "OpenStax: экспоненциальная зарядка и разрядка RC",
        "en": "OpenStax: exponential RC charge and discharge",
        "uk": "OpenStax: експоненційне заряджання й розряджання RC",
        "de": "OpenStax: exponentielles RC-Laden und Entladen",
        "es": "OpenStax: carga y descarga exponenciales RC"
      }
    }
  ],
  "resistor-color": [
    {
      "href": "https://www.vishay.com/docs/49411/resistor_color_code_calculator.pdf",
      "label": {
        "ru": "Vishay: таблица цифр, множителей и допусков цветового кода",
        "en": "Vishay: colour-code digits, multipliers and tolerances",
        "uk": "Vishay: цифри, множники й допуски колірного коду",
        "de": "Vishay: Farbcodetabelle für Ziffern, Multiplikatoren und Toleranzen",
        "es": "Vishay: cifras, multiplicadores y tolerancias del código de colores"
      }
    }
  ],
  "rms-voltage": [
    {
      "href": "https://openstax.org/books/university-physics-volume-2/pages/15-4-power-in-an-ac-circuit",
      "label": {
        "ru": "OpenStax: RMS и активная мощность с cosφ",
        "en": "OpenStax: RMS and active power with cosφ",
        "uk": "OpenStax: діючі значення й активна потужність із cosφ",
        "de": "OpenStax: Effektivwerte und Wirkleistung mit cosφ",
        "es": "OpenStax: RMS y potencia activa con cosφ"
      }
    },
    {
      "href": "https://www.fluke.com/en-gb/learn/blog/electrical/true-measurements-of-non-linear-loads-require-a-true-rms-measurement-tool",
      "label": {
        "ru": "Fluke: средневыпрямляющее и TrueRMS измерение",
        "en": "Fluke: average-responding and true-RMS measurement",
        "uk": "Fluke: середньовипрямлювальне та TrueRMS вимірювання",
        "de": "Fluke: mittelwertbildende und TrueRMS-Messung",
        "es": "Fluke: medición de respuesta media y TrueRMS"
      }
    }
  ],
  "transformer-ratio": [
    {
      "href": "https://openstax.org/books/university-physics-volume-2/pages/15-6-transformers",
      "label": {
        "ru": "OpenStax: идеальный трансформатор с активной нагрузкой и RMS",
        "en": "OpenStax: ideal transformer with resistive load and RMS",
        "uk": "OpenStax: ідеальний трансформатор з активним навантаженням і RMS",
        "de": "OpenStax: idealer Transformator mit ohmscher Last und Effektivwerten",
        "es": "OpenStax: transformador ideal con carga resistiva y RMS"
      }
    },
    {
      "href": "https://openstax.org/books/university-physics-volume-2/pages/15-4-power-in-an-ac-circuit",
      "label": {
        "ru": "OpenStax: RMS и активная мощность с cosφ",
        "en": "OpenStax: RMS and active power with cosφ",
        "uk": "OpenStax: діючі значення й активна потужність із cosφ",
        "de": "OpenStax: Effektivwerte und Wirkleistung mit cosφ",
        "es": "OpenStax: RMS y potencia activa con cosφ"
      }
    }
  ],
  "voltage-divider": [
    {
      "href": "https://openstax.org/books/university-physics-volume-2/pages/10-2-resistors-in-series-and-parallel",
      "label": {
        "ru": "OpenStax: общий последовательный ток и напряжение параллельных ветвей",
        "en": "OpenStax: common series current and parallel-branch voltage",
        "uk": "OpenStax: спільний послідовний струм і напруга паралельних гілок",
        "de": "OpenStax: gemeinsamer Reihenstrom und Parallelspannung",
        "es": "OpenStax: corriente común en serie y tensión en paralelo"
      }
    }
  ]
};

export function getElectronicsWave12MethodSources(id:string,locale:string):EditorialSource[]{
 return (Object.hasOwn(primary,id)?primary[id]:[]).map(s=>({href:s.href,label:s.label[locale]??s.label.en}));
}
