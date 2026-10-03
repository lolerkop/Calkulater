import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const convertTemperatureCopyEs: CalculatorCopy = {
  "name": "Conversor de temperatura",
  "slug": "conversor-de-temperatura",
  "shortDescription": "Convierte entre grados Celsius, Fahrenheit, kelvin y Rankine.",
  "seoTitle": "Conversor de temperatura — Celsius, Fahrenheit y kelvin",
  "seoDescription": "Convierte temperaturas entre grados Celsius, Fahrenheit, kelvin y Rankine con los puntos de referencia exactos de cada escala.",
  "h1": "Conversor de temperatura",
  "keywords": [
    "conversor de temperatura",
    "celsius a fahrenheit",
    "kelvin",
    "grados Rankine"
  ],
  "longDescription": "Convierte temperaturas entre grados Celsius, Fahrenheit, kelvin y Rankine. Las escalas de temperatura están desplazadas unas respecto de otras y no son simples múltiplos, y por eso convertir solo multiplicando da una respuesta equivocada. La conversión pasa siempre por el kelvin: cada escala aporta un factor y un desplazamiento, de modo que los cuatro sentidos se resuelven con la misma regla en lugar de con cuatro fórmulas sueltas.",
  "howToUse": [
    "Introduce la temperatura.",
    "Elige la escala de origen.",
    "Elige la escala de destino."
  ],
  "howItWorks": "Toda escala se convierte a través del kelvin con un factor y un desplazamiento: K = °C + 273,15 y K = (°F + 459,67) · 5/9. Desde el kelvin se vuelve a la escala de destino con la operación inversa.",
  "example": "0 °C son 32 °F, y 100 °C son 212 °F.",
  "faq": [
    {
      "q": "¿Por qué no basta un solo factor para convertir temperaturas?",
      "a": "Las escalas Celsius y Fahrenheit empiezan en puntos distintos, así que la conversión necesita un factor y un desplazamiento. Solo el kelvin y el Rankine comparten el cero absoluto."
    },
    {
      "q": "¿Dónde coinciden Celsius y Fahrenheit?",
      "a": "En −40. Es la única temperatura en la que ambas escalas dan el mismo número."
    },
    {
      "q": "¿Qué es el grado Rankine?",
      "a": "Una escala absoluta con grados del tamaño del Fahrenheit: 0 °Ra es el cero absoluto y 491,67 °Ra es el punto de congelación del agua."
    },
    {
      "q": "¿Se pueden introducir temperaturas por debajo del cero absoluto?",
      "a": "La conversión algebraica acepta valores finitos incluso por debajo de 0 K. Ese valor no representa una temperatura física ordinaria bajo el cero absoluto: 0 K = −273,15 °C = −459,67 °F. La herramienta no valida la aplicabilidad termodinámica."
    }
  ],
  "disclaimer": "El resultado es una conversión de unidades redondeada. Comprueba el valor introducido y las unidades elegidas."
};
