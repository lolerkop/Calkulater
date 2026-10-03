import type { CalculatorCopy } from '../../lib/platform/types';

export const bikeGearRatioCopyEs: CalculatorCopy = {
  "name": "Calculadora de desarrollo de bicicleta",
  "slug": "desarrollo-de-bicicleta",
  "shortDescription": "Relación de transmisión de una bicicleta y distancia recorrida por pedalada.",
  "seoTitle": "Calculadora de desarrollo de bicicleta — relación y desarrollo",
  "seoDescription": "Calcula la relación de transmisión de una bicicleta a partir del número de dientes y el desarrollo por vuelta de pedal.",
  "h1": "Calculadora de desarrollo de bicicleta",
  "keywords": [
    "calculadora de desarrollo de bicicleta",
    "relación de transmisión de bicicleta",
    "desarrollo métrico",
    "relación plato piñón"
  ],
  "longDescription": "El cociente de dientes delanteros y traseros describe la transmisión por cadena. Con accionamiento directo equivale a vueltas de rueda por vuelta de pedal; un buje interno necesita otra relación no incluida. La circunferencia en metros da el desarrollo, distancia por vuelta de pedal.",
  "howToUse": [
    "Introduce números enteros positivos de dientes.",
    "Para desarrollo usa el rodamiento medido en metros, por ejemplo 2,10.",
    "Vacío o cero deja solo la relación; circunferencia negativa o no numérica se rechaza.",
    "Comprueba que no haya una etapa interna adicional."
  ],
  "howItWorks": "R = dientes delanteros / traseros; desarrollo L = R×C con C en metros. Con transmisión directa y cadencia n rpm, velocidad km/h = L×n×0,06; aquí no se introduce cadencia.",
  "example": "50/25 = 2,00; C=2,10 m → L=4,20 m. A 90 rpm: 4,20×90×0,06 = 22,68 km/h, sin deslizamiento ni transmisión adicional.",
  "faq": [
    {
      "q": "¿Qué significa la relación de dientes de bicicleta?",
      "a": "R=2 da dos vueltas de rueda por vuelta de pedal solo con transmisión directa sin relación interna adicional."
    },
    {
      "q": "¿Por qué comparar el desarrollo de una marcha?",
      "a": "Incluye el tamaño de rueda: relaciones iguales pueden dar distancias diferentes por vuelta de pedal."
    },
    {
      "q": "¿Cómo mido la circunferencia para el desarrollo?",
      "a": "Con presión y carga de uso, marca la cubierta y mide una vuelta completa; divide milímetros entre 1000."
    },
    {
      "q": "¿Por qué los dientes deben ser enteros?",
      "a": "Son piezas contables; valores fraccionarios y no numéricos se rechazan."
    },
    {
      "q": "¿Qué marcha conviene para una subida?",
      "a": "Menor desarrollo requiere más vueltas para la misma distancia; depende de pendiente, carga y ciclista."
    },
    {
      "q": "¿Cómo se convierte cadencia en velocidad?",
      "a": "4 m × 90 rpm = 360 m/min = 21,6 km/h. No se prescribe una cadencia universal necesaria."
    },
    {
      "q": "¿El número de marchas determina el rango útil?",
      "a": "No. Las combinaciones no describen relaciones extremas, pasos duplicados ni marchas internas; compara desarrollos reales."
    }
  ],
  "disclaimer": "Modelo directo por cadena, sin buje interno, reductora, deslizamiento ni resistencia. No comprueba compatibilidad de componentes."
};
