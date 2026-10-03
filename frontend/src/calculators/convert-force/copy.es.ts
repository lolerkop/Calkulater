import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const convertForceCopyEs: CalculatorCopy = {
  "name": "Conversor de fuerza",
  "slug": "conversor-de-fuerza",
  "shortDescription": "Convierte fuerza entre newtons, kilogramos-fuerza y libras-fuerza.",
  "seoTitle": "Conversor de fuerza — newtons, kilogramos-fuerza y libras-fuerza",
  "seoDescription": "Convierte fuerza entre newtons, kilonewtons, kilogramos-fuerza, toneladas-fuerza, libras-fuerza y dinas.",
  "h1": "Conversor de fuerza",
  "keywords": [
    "conversor de fuerza",
    "newton a kgf",
    "libra-fuerza",
    "dina"
  ],
  "longDescription": "Convierte fuerza entre newtons, kilonewtons, milinewtons, kilogramos-fuerza, toneladas-fuerza, libras-fuerza y dinas. El kilogramo-fuerza aparece en fichas técnicas de ingeniería y la libra-fuerza, en documentación estadounidense.",
  "howToUse": [
    "Introduce el valor.",
    "Elige la unidad de origen.",
    "Elige la unidad de destino."
  ],
  "howItWorks": "Cada unidad se convierte a través del newton con factores exactos definidos.",
  "example": "Un kilogramo-fuerza son 9,80665 newtons: el peso de un kilogramo bajo la gravedad normal.",
  "faq": [
    {
      "q": "¿En qué se diferencian el kilogramo-fuerza y el kilogramo?",
      "a": "El kilogramo mide masa; el kilogramo-fuerza mide fuerza: el peso de un kilogramo bajo la gravedad normal de 9,80665 m/s²."
    },
    {
      "q": "¿Es exacta la conversión de la libra-fuerza?",
      "a": "Sí. La libra está definida como 0,45359237 kg y la gravedad normal como 9,80665 m/s², de modo que una libra-fuerza son exactamente 4,4482216152605 N."
    },
    {
      "q": "¿Dónde se usa la dina?",
      "a": "En el sistema CGS y en referencias antiguas de física: una dina es la cienmilésima parte de un newton."
    },
    {
      "q": "¿Se puede convertir fuerza en masa?",
      "a": "No: son magnitudes distintas. El kilogramo-fuerza solo toma su nombre de la masa que lo produce bajo la gravedad normal."
    }
  ],
  "disclaimer": "El resultado es una conversión de unidades redondeada. Comprueba el valor introducido y las unidades elegidas."
};
