import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const convertEnergyCopyEs: CalculatorCopy = {
  "name": "Conversor de energía",
  "slug": "conversor-de-energia",
  "shortDescription": "Convierte energía entre julios, kilovatios hora, calorías y BTU.",
  "seoTitle": "Conversor de energía — julios, kWh, calorías y BTU",
  "seoDescription": "Convierte energía entre julios, kilovatios hora, calorías, kilocalorías, BTU y electronvoltios.",
  "h1": "Conversor de energía",
  "keywords": [
    "conversor de energía",
    "kwh a julios",
    "calorías a julios",
    "BTU"
  ],
  "longDescription": "Convierte energía entre julios, kilojulios, megajulios, vatios hora, kilovatios hora, calorías, kilocalorías, BTU y electronvoltios. Los kilovatios hora aparecen en la factura de la luz, las kilocalorías en el etiquetado de los alimentos y los BTU en los equipos de calefacción y aire acondicionado.",
  "howToUse": [
    "Introduce el valor.",
    "Elige la unidad de origen.",
    "Elige la unidad de destino."
  ],
  "howItWorks": "Cada unidad se convierte a través del julio con factores exactos definidos.",
  "example": "Un kilovatio hora son exactamente 3.600.000 julios, y una kilocaloría, exactamente 4184 julios.",
  "faq": [
    {
      "q": "¿Por qué un kilovatio hora son 3.600.000 julios?",
      "a": "Un vatio es un julio por segundo, así que un kilovatio durante una hora son 1000 × 3600 julios."
    },
    {
      "q": "¿La caloría de los alimentos es la misma que la de aquí?",
      "a": "La «Caloría» de los alimentos es una kilocaloría. Elige kcal para el etiquetado nutricional y cal para la caloría termoquímica pequeña, de 4,184 J."
    },
    {
      "q": "¿Qué BTU se utiliza?",
      "a": "El BTU de la International Table: 1 BTU = 1055,05585262 J. El BTU termoquímico es otra unidad, de unos 1054,350 J; también difieren las definiciones asociadas a temperaturas. Comprueba la definición de la fuente."
    },
    {
      "q": "¿Por qué el electronvoltio aparece en notación exponencial?",
      "a": "Porque son unos 1,6 × 10⁻¹⁹ julios, y la notación posicional necesitaría diecinueve ceros a la izquierda."
    }
  ],
  "disclaimer": "El resultado es una conversión de unidades redondeada. Comprueba el valor introducido y las unidades elegidas."
};
