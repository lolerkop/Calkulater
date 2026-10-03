import { expect, test, type Page } from '@playwright/test';
// Coherent188 snapshot only. No production compute or registry supplies expectations.
// Normal fixtures come from69 frozen independent Decimal210 proofs; all route/default data
// were captured before edits. This file does not imply browser verification until run.
type Sample={id:string,inputs:Record<string,string|number>,expected:number,proof:string,active:string,invalid:Record<string,string|number>,share:Record<string,string|null>,visible:string[],numericFields:string[],unitPower:number};
const samples:Sample[] = [
  {
    "id": "belt-length",
    "inputs": {
      "center": 300,
      "d1": 100,
      "d2": 200
    },
    "expected": 1079.5722313718022,
    "proof": "second-order pitch-length approximation; peer Decimal80 literal, not exact tangent length",
    "active": "center",
    "invalid": {
      "center": 0
    },
    "share": {
      "center": null,
      "d1": null,
      "d2": null
    },
    "visible": [
      "center",
      "d1",
      "d2"
    ],
    "numericFields": [
      "center",
      "d1",
      "d2"
    ],
    "unitPower": 1
  },
  {
    "id": "geom-annulus",
    "inputs": {
      "unit": "m",
      "R": 5,
      "r": 3
    },
    "expected": 50.26548245743669,
    "proof": "difference of disks; mean-radius circumference × width is an exact factorisation",
    "active": "R",
    "invalid": {
      "R": 0
    },
    "share": {
      "unit": "m",
      "R": "5",
      "r": "3"
    },
    "visible": [
      "unit",
      "R",
      "r"
    ],
    "numericFields": [
      "R",
      "r"
    ],
    "unitPower": 2
  },
  {
    "id": "geom-cone",
    "inputs": {
      "unit": "m",
      "r": 3,
      "h": 4
    },
    "expected": 37.69911184307752,
    "proof": "cross-section volume integral and sector-unrolled lateral area πrl",
    "active": "r",
    "invalid": {
      "r": 0
    },
    "share": {
      "unit": "m",
      "r": null,
      "h": null
    },
    "visible": [
      "unit",
      "r",
      "h"
    ],
    "numericFields": [
      "r",
      "h"
    ],
    "unitPower": 3
  },
  {
    "id": "geom-cube",
    "inputs": {
      "unit": "m",
      "mode": "side",
      "side": 4
    },
    "expected": 64.0,
    "proof": "cube forward and inverse identities; preserved known input is not recomputed from rounded inverse",
    "active": "side",
    "invalid": {
      "side": 0
    },
    "share": {
      "unit": "m",
      "mode": null,
      "side": "4"
    },
    "visible": [
      "unit",
      "mode",
      "side"
    ],
    "numericFields": [
      "side",
      "volume",
      "area"
    ],
    "unitPower": 3
  },
  {
    "id": "geom-cuboid",
    "inputs": {
      "unit": "m",
      "a": 2,
      "b": 3,
      "c": 4
    },
    "expected": 24.0,
    "proof": "three perpendicular edges; the finite abc case must survive an overflowing ab intermediate",
    "active": "a",
    "invalid": {
      "a": 0
    },
    "share": {
      "unit": "m",
      "a": "2",
      "b": "3",
      "c": "4"
    },
    "visible": [
      "unit",
      "a",
      "b",
      "c"
    ],
    "numericFields": [
      "a",
      "b",
      "c"
    ],
    "unitPower": 3
  },
  {
    "id": "geom-cylinder",
    "inputs": {
      "unit": "m",
      "r": 3,
      "h": 10
    },
    "expected": 282.7433388230814,
    "proof": "disk cross-section and closed cylinder surface, including both bases",
    "active": "r",
    "invalid": {
      "r": 0
    },
    "share": {
      "unit": "m",
      "r": null,
      "h": null
    },
    "visible": [
      "unit",
      "r",
      "h"
    ],
    "numericFields": [
      "r",
      "h"
    ],
    "unitPower": 3
  },
  {
    "id": "geom-ellipse",
    "inputs": {
      "unit": "m",
      "a": 5,
      "b": 3
    },
    "expected": 47.1238898038469,
    "proof": "FIRST Ramanujan model, not the exact elliptic-integral perimeter; circle f/e=0 is legitimate",
    "active": "a",
    "invalid": {
      "a": 0
    },
    "share": {
      "unit": "m",
      "a": null,
      "b": null
    },
    "visible": [
      "unit",
      "a",
      "b"
    ],
    "numericFields": [
      "a",
      "b"
    ],
    "unitPower": 2
  },
  {
    "id": "geom-frustum",
    "inputs": {
      "unit": "m",
      "R": 6,
      "r": 3,
      "h": 8
    },
    "expected": 527.7875658030853,
    "proof": "linear radius integrated as a square; r=0 cone limit",
    "active": "R",
    "invalid": {
      "R": 0
    },
    "share": {
      "unit": "m",
      "R": null,
      "r": null,
      "h": null
    },
    "visible": [
      "unit",
      "R",
      "r",
      "h"
    ],
    "numericFields": [
      "R",
      "r",
      "h"
    ],
    "unitPower": 3
  },
  {
    "id": "geom-polygon-coords",
    "inputs": {
      "points": "0 0\n4 0\n0 3"
    },
    "expected": 6.0,
    "proof": "independent signed-triangle moments, exact coordinates reconstructed before large products",
    "active": "points",
    "invalid": {
      "points": "0 0\n4 3\n0 3\n4 0"
    },
    "share": {
      "points": "0 0\n4 0\n0 3"
    },
    "visible": [
      "points"
    ],
    "numericFields": [
      "points"
    ],
    "unitPower": 0
  },
  {
    "id": "geom-prism",
    "inputs": {
      "unit": "m",
      "sides": 4,
      "side": 2,
      "height": 3
    },
    "expected": 12.0,
    "proof": "n equal triangles in a regular base, then extrusion along perpendicular height",
    "active": "side",
    "invalid": {
      "side": 0
    },
    "share": {
      "unit": "m",
      "sides": "4",
      "side": "2",
      "height": "3"
    },
    "visible": [
      "unit",
      "sides",
      "side",
      "height"
    ],
    "numericFields": [
      "sides",
      "side",
      "height"
    ],
    "unitPower": 3
  },
  {
    "id": "geom-pyramid",
    "inputs": {
      "unit": "m",
      "sides": 4,
      "side": 6,
      "height": 4
    },
    "expected": 48.0,
    "proof": "cross-sectional area integrates to Bh/3; right regular pyramid has one face slant height",
    "active": "side",
    "invalid": {
      "side": 0
    },
    "share": {
      "unit": "m",
      "sides": null,
      "side": null,
      "height": "4"
    },
    "visible": [
      "unit",
      "sides",
      "side",
      "height"
    ],
    "numericFields": [
      "sides",
      "side",
      "height"
    ],
    "unitPower": 3
  },
  {
    "id": "geom-regular-polygon",
    "inputs": {
      "unit": "m",
      "n": 3,
      "side": 2
    },
    "expected": 1.7320508075688772,
    "proof": "n is a bounded integer; apothem is the inradius, not the circumradius",
    "active": "side",
    "invalid": {
      "side": 0
    },
    "share": {
      "unit": "m",
      "n": "3",
      "side": null
    },
    "visible": [
      "unit",
      "n",
      "side"
    ],
    "numericFields": [
      "n",
      "side"
    ],
    "unitPower": 2
  },
  {
    "id": "geom-sector",
    "inputs": {
      "unit": "m",
      "radius": 5,
      "angle": 60
    },
    "expected": 13.089969389957473,
    "proof": "360° external boundary is only the circle; every smaller legitimate angle retains its chord",
    "active": "radius",
    "invalid": {
      "radius": 0
    },
    "share": {
      "unit": "m",
      "radius": null,
      "angle": null
    },
    "visible": [
      "unit",
      "radius",
      "angle"
    ],
    "numericFields": [
      "radius",
      "angle"
    ],
    "unitPower": 2
  },
  {
    "id": "geom-sphere",
    "inputs": {
      "unit": "m",
      "mode": "radius",
      "r": 3
    },
    "expected": 113.09733552923255,
    "proof": "scale the volume inverse before the cube root; positive MIN volume has a representable radius and area",
    "active": "r",
    "invalid": {
      "r": 0
    },
    "share": {
      "unit": "m",
      "mode": null,
      "r": null
    },
    "visible": [
      "unit",
      "mode",
      "r"
    ],
    "numericFields": [
      "r",
      "d",
      "volume"
    ],
    "unitPower": 3
  },
  {
    "id": "golden-ratio",
    "inputs": {
      "mode": "split",
      "total": 100
    },
    "expected": 61.80339887498948,
    "proof": "φ solves φ²−φ−1=0; grow outputs partners of a, not two portions of a",
    "active": "total",
    "invalid": {
      "total": 0
    },
    "share": {
      "mode": null,
      "total": null
    },
    "visible": [
      "mode",
      "total"
    ],
    "numericFields": [
      "total",
      "a"
    ],
    "unitPower": 0
  },
  {
    "id": "pyramid-frustum",
    "inputs": {
      "a": 10,
      "b": 6,
      "h": 8
    },
    "expected": 522.6666666666666,
    "proof": "similar square cross-sections; ab replaces unsafe sqrt(a²b²) exactly for positive sides",
    "active": "a",
    "invalid": {
      "a": 0
    },
    "share": {
      "a": null,
      "b": null,
      "h": null
    },
    "visible": [
      "a",
      "b",
      "h"
    ],
    "numericFields": [
      "a",
      "b",
      "h"
    ],
    "unitPower": 3
  },
  {
    "id": "slope",
    "inputs": {
      "rise": 3,
      "run": 4
    },
    "expected": 75.0,
    "proof": "signed one-axis gradient and principal atan angle; horizontal zero is a valid result",
    "active": "rise",
    "invalid": {
      "run": 0
    },
    "share": {
      "rise": "3",
      "run": "4"
    },
    "visible": [
      "rise",
      "run"
    ],
    "numericFields": [
      "rise",
      "run"
    ],
    "unitPower": 0
  }
];
const paths = {
  "belt-length": {
    "ru": "/ru/geometry/dlina-remnya/",
    "en": "/en/geometry/belt-length/",
    "uk": "/uk/heometriya/dovzhyna-remenya/",
    "de": "/de/geometrie/riemenlaenge-rechner/",
    "es": "/es/geometria/longitud-de-correa/"
  },
  "geom-annulus": {
    "ru": "/ru/geometry/geom-annulus/",
    "en": "/en/geometry/annulus-calculator/",
    "uk": "/uk/heometriya/kiltse/",
    "de": "/de/geometrie/kreisring-rechner/",
    "es": "/es/geometria/corona-circular/"
  },
  "geom-cone": {
    "ru": "/ru/geometry/cone/",
    "en": "/en/geometry/cone-calculator/",
    "uk": "/uk/heometriya/konus/",
    "de": "/de/geometrie/kegel-rechner/",
    "es": "/es/geometria/calculadora-de-cono/"
  },
  "geom-cube": {
    "ru": "/ru/geometry/geom-cube/",
    "en": "/en/geometry/cube-calculator/",
    "uk": "/uk/heometriya/kub/",
    "de": "/de/geometrie/wuerfel-rechner/",
    "es": "/es/geometria/calculadora-de-cubo/"
  },
  "geom-cuboid": {
    "ru": "/ru/geometry/cuboid/",
    "en": "/en/geometry/cuboid-calculator/",
    "uk": "/uk/heometriya/paralelepiped/",
    "de": "/de/geometrie/quader-rechner/",
    "es": "/es/geometria/calculadora-de-ortoedro/"
  },
  "geom-cylinder": {
    "ru": "/ru/geometry/cylinder/",
    "en": "/en/geometry/cylinder-calculator/",
    "uk": "/uk/heometriya/tsylindr/",
    "de": "/de/geometrie/zylinder-rechner/",
    "es": "/es/geometria/calculadora-de-cilindro/"
  },
  "geom-ellipse": {
    "ru": "/ru/geometry/geom-ellipse/",
    "en": "/en/geometry/ellipse-calculator/",
    "uk": "/uk/heometriya/elips/",
    "de": "/de/geometrie/ellipse-rechner/",
    "es": "/es/geometria/calculadora-de-elipse/"
  },
  "geom-frustum": {
    "ru": "/ru/geometry/geom-frustum/",
    "en": "/en/geometry/conical-frustum-calculator/",
    "uk": "/uk/heometriya/zrizanyy-konus/",
    "de": "/de/geometrie/kegelstumpf-rechner/",
    "es": "/es/geometria/tronco-de-cono/"
  },
  "geom-polygon-coords": {
    "ru": "/ru/geometry/mnogougolnik-po-koordinatam/",
    "en": "/en/geometry/polygon-area-coordinates/",
    "uk": "/uk/heometriya/bagatokutnyk-za-koordynatamy/",
    "de": "/de/geometrie/vieleckflaeche-koordinaten/",
    "es": "/es/geometria/area-de-poligono-por-coordenadas/"
  },
  "geom-prism": {
    "ru": "/ru/geometry/geom-prism/",
    "en": "/en/geometry/prism-calculator/",
    "uk": "/uk/heometriya/pryzma/",
    "de": "/de/geometrie/prisma-rechner/",
    "es": "/es/geometria/calculadora-de-prisma/"
  },
  "geom-pyramid": {
    "ru": "/ru/geometry/geom-pyramid/",
    "en": "/en/geometry/pyramid-calculator/",
    "uk": "/uk/heometriya/piramida/",
    "de": "/de/geometrie/pyramide-rechner/",
    "es": "/es/geometria/calculadora-de-piramide/"
  },
  "geom-regular-polygon": {
    "ru": "/ru/geometry/regular-polygon/",
    "en": "/en/geometry/regular-polygon-calculator/",
    "uk": "/uk/heometriya/pravylnyy-mnohokutnyk/",
    "de": "/de/geometrie/regelmaessiges-vieleck/",
    "es": "/es/geometria/poligono-regular/"
  },
  "geom-sector": {
    "ru": "/ru/geometry/sector/",
    "en": "/en/geometry/sector-calculator/",
    "uk": "/uk/heometriya/sektor-kola/",
    "de": "/de/geometrie/kreissektor-rechner/",
    "es": "/es/geometria/sector-circular/"
  },
  "geom-sphere": {
    "ru": "/ru/geometry/sphere/",
    "en": "/en/geometry/sphere-calculator/",
    "uk": "/uk/heometriya/kulya/",
    "de": "/de/geometrie/kugel-rechner/",
    "es": "/es/geometria/calculadora-de-esfera/"
  },
  "golden-ratio": {
    "ru": "/ru/geometry/golden-ratio/",
    "en": "/en/geometry/golden-ratio-calculator/",
    "uk": "/uk/heometriya/zolotyi-pereriz/",
    "de": "/de/geometrie/goldener-schnitt/",
    "es": "/es/geometria/proporcion-aurea/"
  },
  "pyramid-frustum": {
    "ru": "/ru/geometry/usechennaya-piramida/",
    "en": "/en/geometry/pyramid-frustum/",
    "uk": "/uk/heometriya/zrizana-piramida/",
    "de": "/de/geometrie/pyramidenstumpf-rechner/",
    "es": "/es/geometria/tronco-de-piramide/"
  },
  "slope": {
    "ru": "/ru/geometry/slope/",
    "en": "/en/geometry/slope-calculator/",
    "uk": "/uk/heometriya/ukhyl/",
    "de": "/de/geometrie/steigung-rechner/",
    "es": "/es/geometria/calculadora-de-pendiente/"
  }
};
const methods = {
  "belt-length": {
    "ru": "L ≈ 2C + π(D₁+D₂)/2 + (D₂−D₁)²/(4C), все размеры в мм. Для обхвата α = 180° − 2·arcsin(|D₂−D₁|/(2C))·180°/π. При D₁ = D₂ = D длина равна 2C + πD, обхват — 180°. Здесь требуется C > (D₁+D₂)/2: шкивы не должны касаться или пересекаться. Это строже условия существования касательных C > |D₂−D₁|/2.",
    "en": "L ≈ 2C + π(D₁+D₂)/2 + (D₂−D₁)²/(4C), with every input in mm. Wrap α = 180° − 2·arcsin(|D₂−D₁|/(2C))·180°/π. Equal diameters D give L = 2C + πD and 180° wrap. This tool requires C > (D₁+D₂)/2 so the pulleys neither touch nor overlap. That clearance condition is stricter than tangent existence, C > |D₂−D₁|/2.",
    "uk": "L ≈ 2C + π(D₁+D₂)/2 + (D₂−D₁)²/(4C), усі розміри в мм. Кут обхвату α = 180° − 2·arcsin(|D₂−D₁|/(2C))·180°/π. За D₁ = D₂ = D маємо L = 2C + πD та обхват 180°. Тут потрібне C > (D₁+D₂)/2: шківи не повинні торкатися чи перетинатися. Це сильніше за умову існування дотичних C > |D₂−D₁|/2.",
    "de": "L ≈ 2C + π(D₁+D₂)/2 + (D₂−D₁)²/(4C), alle Eingaben in mm. Umschlingung α = 180° − 2·arcsin(|D₂−D₁|/(2C))·180°/π. Gleiche Durchmesser D ergeben L = 2C + πD und 180° Umschlingung. Hier gilt C > (D₁+D₂)/2, damit sich die Scheiben weder berühren noch überlappen. Das ist strenger als die Bedingung für Tangenten C > |D₂−D₁|/2.",
    "es": "L ≈ 2C + π(D₁+D₂)/2 + (D₂−D₁)²/(4C), con todas las entradas en mm. El contacto es α = 180° − 2·arcsen(|D₂−D₁|/(2C))·180°/π. Diámetros iguales D dan L = 2C + πD y contacto de 180°. Aquí se exige C > (D₁+D₂)/2 para que las poleas no se toquen ni solapen. Es más estricto que la existencia de tangentes, C > |D₂−D₁|/2."
  },
  "geom-annulus": {
    "ru": "S = π(R²−r²) = π(R−r)(R+r). Разложение на множители избегает вычитания близких квадратов. Ширина R−r, окружности 2πR и 2πr, средний радиус (R+r)/2. При r = 0 внутренняя окружность равна нулю.",
    "en": "S = π(R²−r²) = π(R−r)(R+r). The factored form avoids subtracting nearly equal squares. Width is R−r, circumferences are 2πR and 2πr, and mean radius is (R+r)/2. At r = 0 the inner circumference is zero.",
    "uk": "S = π(R²−r²) = π(R−r)(R+r). Розкладання на множники уникає віднімання близьких квадратів. Ширина R−r, довжини кіл 2πR та 2πr, середній радіус (R+r)/2. За r = 0 внутрішнє коло має нульову довжину.",
    "de": "S = π(R²−r²) = π(R−r)(R+r). Die Produktform vermeidet die Subtraktion fast gleicher Quadrate. Breite R−r, Umfänge 2πR und 2πr, mittlerer Radius (R+r)/2. Bei r = 0 ist der innere Umfang null.",
    "es": "S = π(R²−r²) = π(R−r)(R+r). La forma factorizada evita restar cuadrados casi iguales. La anchura es R−r, las circunferencias son 2πR y 2πr y el radio medio, (R+r)/2. Con r = 0 la circunferencia interior es cero."
  },
  "geom-cone": {
    "ru": "V = π · r² · h ÷ 3, образующая l = √(r² + h²), боковая поверхность πrl, полная πr(r + l). Развёртка боковой поверхности — сектор радиуса l с дугой длиной 2πr, поэтому его площадь (2πr)l/2 = πrl.",
    "en": "V = π · r² · h ÷ 3, the slant height is l = √(r² + h²), the lateral surface is πrl and the total is πr(r + l). Unrolling the lateral surface gives a sector of radius l with arc length 2πr, so its area is (2πr)l/2 = πrl.",
    "uk": "Об’єм рахується як V = π · r² · h ÷ 3, тобто конус займає рівно третину циліндра з тією самою основою й тією самою висотою. Твірна виводиться з теореми Піфагора: l = √(r² + h²), бо радіус, висота й твірна утворюють прямокутний трикутник. Бічна поверхня дорівнює πrl, а повна додає до неї круг основи й дорівнює πr(r + l). Розгортка бічної поверхні є сектором радіуса l з дугою 2πr, тому його площа (2πr)l/2 = πrl.",
    "de": "V = π · r² · h ÷ 3, die Seitenhöhe ist l = √(r² + h²), die Mantelfläche ist πrl und die Gesamtoberfläche πr(r + l). Die abgewickelte Mantelfläche ist ein Sektor mit Radius l und Bogenlänge 2πr; seine Fläche ist daher (2πr)l/2 = πrl.",
    "es": "V = π · r² · h ÷ 3; la generatriz es l = √(r² + h²), la superficie lateral es πrl y la total, πr(r + l). Al desplegar la superficie lateral se obtiene un sector de radio l y arco 2πr; su área es (2πr)l/2 = πrl."
  },
  "geom-cube": {
    "ru": "Объём V = a³, площадь поверхности S = 6a², диагональ грани a√2, диагональ куба a√3, сумма рёбер 12a. В обратных режимах ребро восстанавливается как a = ∛V или a = √(S/6).",
    "en": "Volume V = a³, surface area S = 6a², face diagonal a√2, space diagonal a√3, total edge length 12a. In the reverse modes the edge comes from a = ∛V or a = √(S/6).",
    "uk": "Об’єм дорівнює V = a³, площа поверхні S = 6a², бо граней шість і кожна є квадратом. Діагональ грані становить a√2, діагональ куба — a√3, сума довжин ребер — 12a. У зворотних режимах ребро відновлюється як a = ∛V або a = √(S/6).",
    "de": "Volumen V = a³, Oberfläche S = 6a², Flächendiagonale a√2, Raumdiagonale a√3, Kantensumme 12a. In den umgekehrten Modi folgt die Kante aus a = ∛V oder a = √(S/6).",
    "es": "Volumen V = a³, superficie S = 6a², diagonal de la cara a√2, diagonal del cubo a√3, suma de aristas 12a. En los modos inversos la arista sale de a = ∛V o a = √(S/6)."
  },
  "geom-cuboid": {
    "ru": "V = abc; S = 2(ab + bc + ca); пространственная диагональ d = √(a² + b² + c²) по теореме Пифагора, применённой дважды. Сумма длин рёбер равна 4(a + b + c), потому что рёбер каждого направления по четыре.",
    "en": "V = abc; S = 2(ab + bc + ca); the space diagonal d = √(a² + b² + c²) follows from applying Pythagoras twice. The total edge length is 4(a + b + c), because there are four edges in each direction.",
    "uk": "Об’єм дорівнює добутку трьох ребер: V = abc. Площа поверхні складається з трьох пар однакових граней: S = 2(ab + bc + ca). Просторова діагональ виводиться з теореми Піфагора, застосованої двічі: d = √(a² + b² + c²). Сума довжин ребер дорівнює 4(a + b + c), бо ребер кожного напрямку по чотири.",
    "de": "V = abc; S = 2(ab + bc + ca); die Raumdiagonale d = √(a² + b² + c²) folgt aus zweimaliger Anwendung des Satzes von Pythagoras. Die Kantensumme ist 4(a + b + c), denn es gibt vier Kanten in jeder Richtung.",
    "es": "V = abc; S = 2(ab + bc + ca); la diagonal d = √(a² + b² + c²) sale de aplicar Pitágoras dos veces. La suma de las aristas es 4(a + b + c), porque hay cuatro aristas en cada dirección."
  },
  "geom-cylinder": {
    "ru": "V = π · r² · h, боковая поверхность 2πrh, полная 2πr(r + h) — то есть боковая плюс два основания.",
    "en": "V = π · r² · h, the lateral surface is 2πrh and the total is 2πr(r + h) — the lateral surface plus two bases.",
    "uk": "Об’єм дорівнює площі основи, помноженій на висоту: V = π · r² · h. Бічна поверхня — це розгортка стінки, звичайний прямокутник зі сторонами 2πr і h, тому вона дорівнює 2πrh. Повна поверхня додає до стінки два круги основ і дорівнює 2πr(r + h).",
    "de": "V = π · r² · h, die Mantelfläche ist 2πrh und die Gesamtoberfläche 2πr(r + h) — die Mantelfläche plus zwei Grundflächen.",
    "es": "V = π · r² · h; la superficie lateral es 2πrh y la total, 2πr(r + h): la lateral más las dos bases."
  },
  "geom-ellipse": {
    "ru": "Площадь S = πab. Периметр берётся по приближению Рамануджана π[3(a+b) − √((3a+b)(a+3b))]. Эксцентриситет e = √(1 − b²/a²) считается от большей полуоси, расстояние между фокусами 2√(a² − b²).",
    "en": "Area S = πab. The perimeter uses Ramanujan's approximation π[3(a+b) − √((3a+b)(a+3b))]. Eccentricity e = √(1 − b²/a²) is taken from the larger semi-axis, and the distance between the foci is 2√(a² − b²).",
    "uk": "Площа дорівнює S = πab. Периметр береться за наближенням Рамануджана π[3(a + b) − √((3a + b)(a + 3b))]. Ексцентриситет e = √(1 − b²/a²) рахується від більшої півосі, а відстань між фокусами дорівнює 2√(a² − b²).",
    "de": "Fläche S = πab. Der Umfang nutzt die Näherung von Ramanujan π[3(a+b) − √((3a+b)(a+3b))]. Die Exzentrizität e = √(1 − b²/a²) wird von der größeren Halbachse genommen, und der Abstand der Brennpunkte ist 2√(a² − b²).",
    "es": "Área S = πab. El perímetro usa la aproximación de Ramanujan π[3(a+b) − √((3a+b)(a+3b))]. La excentricidad e = √(1 − b²/a²) se toma desde el semieje mayor, y la distancia entre los focos es 2√(a² − b²)."
  },
  "geom-frustum": {
    "ru": "Объём V = πh(R² + Rr + r²)/3. Образующая l = √(h² + (R − r)²). Боковая поверхность π(R + r)l, полная — она же плюс площади обоих оснований.",
    "en": "Volume V = πh(R² + Rr + r²)/3. Slant height l = √(h² + (R − r)²). The lateral surface is π(R + r)l, and the total surface adds both bases.",
    "uk": "Об’єм дорівнює πh(R² + Rr + r²)/3. Твірна рахується від різниці радіусів: l = √(h² + (R − r)²), бо бічна лінія нахилена рівно настільки, наскільки верхня основа вужча за нижню. Бічна поверхня дорівнює π(R + r)l, а повна додає до неї площі обох основ.",
    "de": "Volumen V = πh(R² + Rr + r²)/3. Seitenhöhe l = √(h² + (R − r)²). Die Mantelfläche ist π(R + r)l, und die Gesamtoberfläche zählt beide Grundflächen dazu.",
    "es": "Volumen V = πh(R² + Rr + r²)/3. Generatriz l = √(h² + (R − r)²). La superficie lateral es π(R + r)l, y la total añade ambas bases."
  },
  "geom-polygon-coords": {
    "ru": "wᵢ = xᵢyᵢ₊₁ − xᵢ₊₁yᵢ, 2Aор = Σwᵢ, площадь = |Aор|. Центроид X = Σ(xᵢ+xᵢ₊₁)wᵢ/(6Aор), Y аналогично. Периметр — сумма расстояний между соседними вершинами, включая последнюю и первую. Знаки и произведения координат проверяются до округления, чтобы большой сдвиг начала координат не уничтожил малую площадь.",
    "en": "Let wᵢ = xᵢyᵢ₊₁ − xᵢ₊₁yᵢ and 2A_signed = Σwᵢ; area is |A_signed|. Centroid X = Σ(xᵢ+xᵢ₊₁)wᵢ/(6A_signed), with Y analogous. Perimeter sums neighbouring-vertex distances, including the closing edge. Coordinate products and signs are evaluated before rounding so a large origin shift does not destroy a small area.",
    "uk": "wᵢ = xᵢyᵢ₊₁ − xᵢ₊₁yᵢ, 2Aор = Σwᵢ, площа = |Aор|. Центроїд X = Σ(xᵢ+xᵢ₊₁)wᵢ/(6Aор), Y аналогічно. Периметр є сумою відстаней між сусідніми вершинами, включно з останньою та першою. Знаки й добутки координат перевіряються до округлення, щоб великий зсув початку координат не знищив малу площу.",
    "de": "Mit wᵢ = xᵢyᵢ₊₁ − xᵢ₊₁yᵢ gilt 2A_or = Σwᵢ und Fläche = |A_or|. Schwerpunkt X = Σ(xᵢ+xᵢ₊₁)wᵢ/(6A_or), Y entsprechend. Der Umfang summiert die Abstände benachbarter Punkte einschließlich der Schlusskante. Produkte und Vorzeichen werden vor dem Runden geprüft, damit eine große Ursprungsverschiebung keine kleine Fläche auslöscht.",
    "es": "Con wᵢ = xᵢyᵢ₊₁ − xᵢ₊₁yᵢ, 2A_or = Σwᵢ y área = |A_or|. El centroide X = Σ(xᵢ+xᵢ₊₁)wᵢ/(6A_or), y Y análogamente. El perímetro suma las distancias entre vértices contiguos, incluido el cierre. Los productos y signos se evalúan antes de redondear para que un desplazamiento grande del origen no elimine un área pequeña."
  },
  "geom-prism": {
    "ru": "Апофема = сторона ÷ (2 × tg(π ÷ n)). Площадь основания = периметр × апофема ÷ 2. Объём = площадь основания × высота, боковая поверхность = периметр × высота.",
    "en": "Apothem = side ÷ (2 × tan(π ÷ n)). Base area = perimeter × apothem ÷ 2. Volume = base area × height, and the lateral surface is perimeter × height.",
    "uk": "Апофема основи дорівнює a ÷ (2 · tg(π ÷ n)), а площа основи — периметр, помножений на апофему й поділений навпіл. Об’єм — це площа основи, помножена на висоту. Бічна поверхня дорівнює периметру, помноженому на висоту, бо розгортка бічних граней прямої призми є звичайним прямокутником.",
    "de": "Apothema = Seite ÷ (2 × tan(π ÷ n)). Grundfläche = Umfang × Apothema ÷ 2. Volumen = Grundfläche × Höhe, und die Mantelfläche ist Umfang × Höhe.",
    "es": "Apotema = lado ÷ (2 × tan(π ÷ n)). Área de la base = perímetro × apotema ÷ 2. Volumen = área de la base × altura, y la superficie lateral es perímetro × altura."
  },
  "geom-pyramid": {
    "ru": "Апофема основания = сторона ÷ (2 × tg(π ÷ n)). Апофема боковой грани — гипотенуза высоты и этой апофемы. Объём = площадь основания × высота ÷ 3.",
    "en": "Base apothem = side ÷ (2 × tan(π ÷ n)). Slant height is the hypotenuse of the height and that apothem. Volume = base area × height ÷ 3.",
    "uk": "Апофема основи дорівнює a ÷ (2 · tg(π ÷ n)). Апофема бічної грані є гіпотенузою висоти піраміди й цієї апофеми. Об’єм дорівнює площі основи, помноженій на висоту й поділеній на три: будь-яка піраміда займає рівно третину призми з тією самою основою й висотою.",
    "de": "Apothema der Grundfläche = Seite ÷ (2 × tan(π ÷ n)). Die Seitenhöhe ist die Hypotenuse aus Höhe und dieser Apothema. Volumen = Grundfläche × Höhe ÷ 3.",
    "es": "Apotema de la base = lado ÷ (2 × tan(π ÷ n)). La apotema lateral es la hipotenusa formada por la altura y esa apotema. Volumen = área de la base × altura ÷ 3."
  },
  "geom-regular-polygon": {
    "ru": "S = n · a² ÷ (4 · tg(π ÷ n)), периметр P = n · a, апофема m = a ÷ (2 · tg(π ÷ n)); внутренний угол равен (n − 2) · 180° ÷ n.",
    "en": "S = n · a² ÷ (4 · tan(π ÷ n)), P = n · a and the apothem is m = a ÷ (2 · tan(π ÷ n)); the interior angle is (n − 2) · 180° ÷ n.",
    "uk": "Площа дорівнює S = n · a² ÷ (4 · tg(π ÷ n)), периметр P = n · a, апофема m = a ÷ (2 · tg(π ÷ n)). Внутрішній кут рахується як (n − 2) · 180° ÷ n і виводиться в градусах, хоча тангенс у формулі площі береться від радіанів.",
    "de": "S = n · a² ÷ (4 · tan(π ÷ n)), P = n · a, und die Apothema ist m = a ÷ (2 · tan(π ÷ n)); der Innenwinkel ist (n − 2) · 180° ÷ n.",
    "es": "S = n · a² ÷ (4 · tan(π ÷ n)), P = n · a y la apotema es m = a ÷ (2 · tan(π ÷ n)); el ángulo interior es (n − 2) · 180° ÷ n."
  },
  "geom-sector": {
    "ru": "Угол переводится в радианы: θ = α·π/180. Площадь сектора S = ½r²θ, длина дуги L = rθ, хорда c = 2r·sin(θ/2).  Для 0° < α < 360° периметр L+2r; при α = 360° периметр L = 2πr. Доля круга α/360. Радианы нужны внутри формул, а ввод и подпись угла остаются в градусах.",
    "en": "The angle becomes radians as θ = α·π/180. The sector area is S = ½r²θ, the arc length L = rθ and the chord c = 2r·sin(θ/2).  For 0° < α < 360°, perimeter is L+2r; at α = 360° it is L = 2πr. The circle fraction is α/360. Formulas use radians internally, while input and angle labels stay in degrees.",
    "uk": "Кут переводиться в радіани: θ = α · π/180. Площа сектора дорівнює S = ½r²θ, довжина дуги L = rθ, хорда c = 2r · sin(θ/2).  Для 0° < α < 360° периметр L+2r; за α = 360° він дорівнює L = 2πr. Частка круга α/360. Усередині формул потрібні радіани, а ввід і підпис кута залишаються в градусах.",
    "de": "Der Winkel wird zu θ = α·π/180 im Bogenmaß. Die Fläche des Sektors ist S = ½r²θ, die Bogenlänge L = rθ und die Sehne c = 2r·sin(θ/2).  Für 0° < α < 360° gilt Umfang L+2r; bei α = 360° dagegen L = 2πr. Der Kreisanteil ist α/360. Die Formeln verwenden intern Bogenmaß; Eingabe und Winkelangaben bleiben in Grad.",
    "es": "El ángulo pasa a radianes como θ = α·π/180. El área del sector es S = ½r²θ, la longitud del arco L = rθ y la cuerda c = 2r·sen(θ/2).  Para 0° < α < 360°, el perímetro es L+2r; con α = 360° es L = 2πr. La fracción del círculo es α/360. Las fórmulas usan radianes internamente, pero la entrada y las etiquetas del ángulo siguen en grados."
  },
  "geom-sphere": {
    "ru": "V = (4 ÷ 3) · π · r³ и S = 4 · π · r²; радиус по объёму находится как кубический корень из 3V ÷ (4π).",
    "en": "V = (4 ÷ 3) · π · r³ and S = 4 · π · r²; the radius from a volume is the cube root of 3V ÷ (4π).",
    "uk": "Об’єм дорівнює V = (4 ÷ 3) · π · r³, площа поверхні — S = 4 · π · r². У режимі за діаметром діаметр спершу ділиться навпіл, а в режимі за об’ємом виводиться кубічним коренем: r = ∛(3V ÷ 4π). Далі розрахунок в усіх режимах спільний.",
    "de": "V = (4 ÷ 3) · π · r³ und S = 4 · π · r²; der Radius aus einem Volumen ist die dritte Wurzel aus 3V ÷ (4π).",
    "es": "V = (4 ÷ 3) · π · r³ y S = 4 · π · r²; el radio a partir de un volumen es la raíz cúbica de 3V ÷ (4π)."
  },
  "golden-ratio": {
    "ru": "φ = (1 + √5)/2 ≈ 1,618034. Отрезок делится так, что целое относится к большей части, как большая к меньшей: большая часть равна длине, делённой на φ. В режиме подбора известный размер умножается и делится на φ, давая обоих соседей по ряду.",
    "en": "φ = (1 + √5)/2 ≈ 1.618034. A segment is split so that the whole is to the larger part as the larger is to the smaller: the larger part is the length divided by φ. In partner mode the known size is multiplied and divided by φ, giving both of its neighbours in the series.",
    "uk": "Число φ = (1 + √5)/2 ≈ 1,618034. Відрізок ділиться так, що ціле відноситься до більшої частини, як більша до меншої: більша частина дорівнює довжині, поділеній на φ. У режимі добору відомий розмір множиться й ділиться на φ, даючи обох сусідів по ряду.",
    "de": "φ = (1 + √5)/2 ≈ 1,618034. Eine Strecke wird so geteilt, dass sich das Ganze zum größeren Teil verhält wie der größere zum kleineren: der größere Teil ist die Länge geteilt durch φ. Im Partnermodus wird die bekannte Größe mit φ multipliziert und durch φ geteilt, das ergibt beide Nachbarn in der Reihe.",
    "es": "φ = (1 + √5)/2 ≈ 1,618034. Un segmento se divide de modo que el todo sea a la parte mayor como la mayor es a la menor: la parte mayor es la longitud dividida entre φ. En el modo de la pareja, la medida conocida se multiplica y se divide por φ, lo que da sus dos vecinas en la serie."
  },
  "pyramid-frustum": {
    "ru": "Объём h/3·(S₁ + S₂ + √(S₁·S₂)); апофема √(h² + ((a−b)/2)²); боковая поверхность 2·(a+b)·апофема.",
    "en": "Volume h/3·(S₁ + S₂ + √(S₁·S₂)); slant height √(h² + ((a−b)/2)²); lateral area 2·(a+b)·slant height.",
    "uk": "Об’єм дорівнює h/3 · (S₁ + S₂ + √(S₁·S₂)), де S₁ і S₂ — площі нижньої та верхньої основ. Апофема бічної грані рахується за різницею половин сторін: √(h² + ((a − b)/2)²). Бічна поверхня дорівнює 2 · (a + b) · апофема.",
    "de": "Das Volumen ist V = h ÷ 3 × (a² + a × b + b²) mit den Kantenlängen a und b. Die Seitenhöhe folgt aus dem Satz des Pythagoras über der halben Kantendifferenz: m = √(h² + ((a − b) ÷ 2)²). Die Mantelfläche ist 2 × (a + b) × m, die Gesamtoberfläche zusätzlich um beide Quadrate größer.",
    "es": "Volumen h/3·(S₁ + S₂ + √(S₁·S₂)); apotema lateral √(h² + ((a−b)/2)²); superficie lateral 2·(a+b)·apotema lateral."
  },
  "slope": {
    "ru": "Уклон = подъём ÷ заложение × 100 процентов. Угол — арктангенс этого отношения, длина — гипотенуза подъёма и заложения.",
    "en": "Slope = rise ÷ run × 100 per cent. The angle is the arctangent of that ratio, and the length is the hypotenuse of rise and run.",
    "uk": "Ухил дорівнює підйом ÷ закладення × 100 відсотків. Кут — це арктангенс того самого відношення, переведений у градуси. Довжина схилу є гіпотенузою підйому й закладення, тому вона більша за закладення й саме її купують погонними метрами.",
    "de": "Steigung = Höhenunterschied ÷ waagerechte Strecke × 100 Prozent. Der Winkel ist der Arkustangens dieses Verhältnisses, und die Länge ist die Hypotenuse aus Höhenunterschied und waagerechter Strecke.",
    "es": "Pendiente = desnivel ÷ distancia horizontal × 100 por ciento. El ángulo es el arcotangente de esa relación, y la longitud es la hipotenusa del desnivel y la distancia."
  }
};
const alternatives:Record<string,{inputs:Record<string,string|number>,expected:number,known:string,hidden:string[]}[]> = {
  "geom-cube": [
    {
      "inputs": {
        "mode": "volume",
        "volume": 64
      },
      "expected": 4,
      "known": "volume",
      "hidden": [
        "side",
        "area"
      ]
    },
    {
      "inputs": {
        "mode": "area",
        "area": 96
      },
      "expected": 4,
      "known": "area",
      "hidden": [
        "side",
        "volume"
      ]
    }
  ],
  "geom-sphere": [
    {
      "inputs": {
        "mode": "diameter",
        "d": 6
      },
      "expected": 113.09733552923255,
      "known": "d",
      "hidden": [
        "r",
        "volume"
      ]
    },
    {
      "inputs": {
        "mode": "volume",
        "volume": 113.09733552923255
      },
      "expected": 113.09733552923255,
      "known": "volume",
      "hidden": [
        "r",
        "d"
      ]
    }
  ],
  "golden-ratio": [
    {
      "inputs": {
        "mode": "grow",
        "a": 10
      },
      "expected": 16.18033988749895,
      "known": "a",
      "hidden": [
        "total"
      ]
    }
  ]
};

const locales=['ru','en','uk','de','es'] as const;
const widths=[390,1365] as const;
function numeric(text:string,locale:string):number{
 const read=(s:string)=>Number(locale==='en'?s.replace(/[\s\u00a0\u202f,]/g,''):s.replace(/[\s\u00a0\u202f.]/g,'').replace(',','.'));
 const exp=text.match(/([-−]?\d[\d\s\u00a0\u202f.,]*)·10\^(-?\d+)/);
 if(exp)return read(exp[1].replace('−','-'))*10**Number(exp[2]);
 const token=text.match(/[-−]?\d[\d\s\u00a0\u202f.,]*/)?.[0];
 return token?read(token.replace('−','-')):NaN; // transient errors must retry, not throw
}
async function value(page:Page,locale:string,expected:number,id:string){
 const tolerance=id==='golden-ratio'?0.000051:Math.abs(expected)>=100?0.0051:Math.abs(expected)>=1?0.00051:Math.abs(expected)>=.01?0.000051:0.00000051;
 await expect(page.getByTestId('calc-result-primary')).toBeVisible();
 await expect.poll(async()=>Math.abs(numeric(await page.getByTestId('calc-result-primary').innerText(),locale)-expected)).toBeLessThan(tolerance);
}
async function invalid(page:Page){
 await expect.poll(async()=>await page.locator('[data-testid^="field-error-"]:visible').count()>0||(await page.getByTestId('calc-result-primary').allTextContents()).some(v=>v.trim()==='—')).toBe(true);
 await expect(page.locator('main')).not.toContainText(/NaN|Infinity|undefined/);
}
async function native(page:Page,locale:string){
 const result=page.getByTestId('calc-result');await expect(result).not.toContainText(/NaN|Infinity|undefined/);
 if(locale!=='ru')await expect(result).not.toContainText(locale==='uk'?/[ЁёЫыЭэЪъ]/u:/[А-Яа-яЁё]/u);
}
async function layout(page:Page,width:number){
 expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(width+1);
 for(const row of await page.getByTestId('calc-result').locator('[data-testid^="calc-result-row-"]').all()){
  const dt=await row.locator('dt').boundingBox(),dd=await row.locator('dd').boundingBox();expect(dt).not.toBeNull();expect(dd).not.toBeNull();
  if(width===390){expect(dt!.width).toBeGreaterThanOrEqual(240);expect(dd!.width).toBeGreaterThanOrEqual(240);expect(dd!.y).toBeGreaterThanOrEqual(dt!.y+dt!.height-1);}
  else{expect(dt!.width).toBeGreaterThanOrEqual(140);expect(dd!.width).toBeGreaterThanOrEqual(160);}
 }
}
const query=(values:Record<string,string|number>)=>new URLSearchParams(Object.entries(values).map(([k,v])=>[k,String(v)]));
const put=async(page:Page,name:string,value:string|number)=>{const control=page.getByTestId(`field-${name}`);if(await control.evaluate(el=>el.tagName==='SELECT'))await control.selectOption(String(value));else await control.fill(String(value));};
for(const width of widths)test.describe(`GeometryWave8/${width}px`,()=>{
 test.use({viewport:{width,height:width===390?844:900}});
 for(const sample of samples)for(const locale of locales){
  const path=paths[sample.id as keyof typeof paths][locale];
  test(`${locale}/${sample.id}: independent result, units, known fieldsets and reload`,async({page})=>{
   const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
   await page.goto(`${path}?${query(sample.inputs)}`);await value(page,locale,sample.expected,sample.id);
   await expect(page.locator('main')).toContainText(methods[sample.id as keyof typeof methods][locale]);
   for(const name of sample.numericFields)if(sample.visible.includes(name))await expect(page.getByTestId(`field-${name}`)).toBeVisible();else await expect(page.getByTestId(`field-${name}`)).toHaveCount(0);
   if('unit'in sample.inputs){const m=locale==='ru'||locale==='uk'?'м':'m';await expect(page.getByTestId(`field-label-${sample.active}`)).toContainText(`(${m})`);if(sample.unitPower)await expect(page.getByTestId('calc-result-primary')).toContainText(` ${m}${sample.unitPower===3?'³':sample.unitPower===2?'²':''}`);
    await page.getByTestId('field-unit').selectOption('cm');await value(page,locale,sample.expected,sample.id);const cm=locale==='ru'||locale==='uk'?'см':'cm';await expect(page.getByTestId(`field-label-${sample.active}`)).toContainText(`(${cm})`);await page.getByTestId('field-unit').selectOption('m');await value(page,locale,sample.expected,sample.id);
   }
   await native(page,locale);await layout(page,width);await page.reload();await value(page,locale,sample.expected,sample.id);
   for(const alternate of alternatives[sample.id]??[]){for(const [k,v]of Object.entries(alternate.inputs))await put(page,k,v);await value(page,locale,alternate.expected,sample.id);await expect(page.getByTestId(`field-${alternate.known}`)).toBeVisible();for(const hidden of alternate.hidden)await expect(page.getByTestId(`field-${hidden}`)).toHaveCount(0);await native(page,locale);}
   expect(errors).toEqual([]);
  });
  test(`${locale}/${sample.id}: real invalid/blank recovery and exact clipboard/default-omission reload`,async({page})=>{
   const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
   await page.addInitScript(()=>Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async(text:string)=>{(window as Window&{geometry8Share?:string}).geometry8Share=text;}}}));
   await page.goto(`${path}?${query({...sample.inputs,...sample.invalid})}`);await invalid(page);
   await page.goto(`${path}?${query(sample.inputs)}`);await value(page,locale,sample.expected,sample.id);
   await page.getByTestId(`field-${sample.active}`).fill('');await invalid(page);
   await page.getByTestId(`field-${sample.active}`).fill(String(sample.inputs[sample.active as keyof typeof sample.inputs]));await value(page,locale,sample.expected,sample.id);await native(page,locale);
   await page.getByTestId('calc-share-btn').click();await expect.poll(async()=>page.evaluate(()=>(window as Window&{geometry8Share?:string}).geometry8Share??'')).not.toBe('');
   const shared=await page.evaluate(()=>(window as Window&{geometry8Share?:string}).geometry8Share!);const url=new URL(shared);expect(url.pathname).toBe(path);
   for(const[key,expected]of Object.entries(sample.share))expect(url.searchParams.get(key)).toBe(expected);
   await page.goto(shared);await value(page,locale,sample.expected,sample.id);await expect(page.getByTestId(`field-${sample.active}`)).toHaveValue(String(sample.inputs[sample.active as keyof typeof sample.inputs]));
   await page.reload();await value(page,locale,sample.expected,sample.id);await expect(page.getByTestId(`field-${sample.active}`)).toHaveValue(String(sample.inputs[sample.active as keyof typeof sample.inputs]));await native(page,locale);expect(errors).toEqual([]);
  });
 }
});
