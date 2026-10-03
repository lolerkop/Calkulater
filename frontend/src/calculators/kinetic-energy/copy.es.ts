import type { CalculatorCopy } from '../../lib/platform/types';

export const kineticEnergyCopyEs: CalculatorCopy = {
  name: "Calculadora de energía cinética",
  slug: "energia-cinetica",
  shortDescription: "Energía cinética, velocidad o masa a partir de E = ½mv².",
  seoTitle: "Calculadora de energía cinética — E = ½mv²",
  seoDescription: "Calcula la energía cinética, la velocidad o la masa a partir de E = ½mv² en unidades del SI.",
  h1: "Calculadora de energía cinética",
  keywords: ["calculadora de energía cinética", "energía del movimiento", "velocidad a partir de la energía cinética"],
  longDescription: "Calcula la energía cinética de traslación, la rapidez a partir de la energía o la masa a partir de energía y rapidez. Compara velocidades en el mismo sistema de referencia: la energía depende del movimiento respecto al observador. ½mv² es una fórmula clásica; no incluye rotación, deformación en impactos ni efectos relativistas. La energía por sí sola no determina la distancia de frenado.",
  howToUse: ["Elige la incógnita e introduce las otras magnitudes en kg, m/s y J.", "Introduce la rapidez, sin signo de dirección. Divide los km/h entre 3,6: 36 km/h = 10 m/s.", "La rapidez cero sirve para calcular energía, pero no permite hallar masa porque la división entre v² no está definida."],
  howItWorks: "E = m v²/2; v = √(2E/m); m = 2E/v². El cálculo directo exige masa positiva; rapidez y energía son no negativas. El resultado inverso es la rapidez, sin dirección. Duplicar la rapidez con la misma masa cuadruplica la energía.",
  example: "2 kg a 3 m/s: E = 2 × 3²/2 = 9 J. A 6 m/s el mismo cuerpo tiene 36 J. A la inversa, E = 100 J y m = 8 kg dan √25 = 5 m/s; E = 50 J y v = 10 m/s dan m = 1 kg.",
  faq: [{"q": "¿Se admite una velocidad negativa?", "a": "El campo usa la rapidez. Los movimientos opuestos +v y −v tienen la misma energía debido al cuadrado."}, {"q": "¿Es la energía total de una rueda?", "a": "No. La parte de traslación es mv²/2 y la rotación añade Iω²/2. Aquí no se introduce el momento de inercia."}, {"q": "¿Obtengo distancia de frenado o fuerza de impacto?", "a": "No. El frenado necesita fuerzas y condiciones; la fuerza media de impacto necesita distancia o tiempo de parada y un modelo de colisión."}, {"q": "¿Cómo introduzco energía expresada en kilojulios?", "a": "El campo usa julios: 1 kJ = 1000 J. Para 1 kJ y 80 kg introduce 1000 y 80: v = √(2000/80) = 5 m/s. Introducir 1 en vez de 1000 cambia el cálculo, no solo la etiqueta."}],
  disclaimer: "Energía cinética clásica de traslación. Para velocidades comparables a la de la luz hace falta un cálculo relativista.",
};
