import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const convertTorqueCopyEs: CalculatorCopy = {
  "name": "Conversor de par",
  "slug": "conversor-de-par",
  "shortDescription": "Convierte el par entre N·m, kgf·m y libras-fuerza pie.",
  "seoTitle": "Conversor de par — N·m, kgf·m y lbf·ft",
  "seoDescription": "Convierte el par entre newton metro, kilogramo-fuerza metro, libra-fuerza pie y libra-fuerza pulgada.",
  "h1": "Conversor de par",
  "keywords": [
    "conversor de par",
    "nm a lb-ft",
    "par de apriete",
    "newton metro"
  ],
  "longDescription": "Convierte el par entre newton metro, kilonewton metro, newton centímetro, kilogramo-fuerza metro, libra-fuerza pie, libra-fuerza pulgada y onza-fuerza pulgada.",
  "howToUse": [
    "Introduce el valor.",
    "Elige la unidad de origen.",
    "Elige la unidad de destino."
  ],
  "howItWorks": "Cada unidad se convierte a través del newton metro con factores exactos de fuerza y longitud.",
  "example": "Un par de apriete de 100 N·m son unas 73,76 libras-fuerza pie.",
  "faq": [
    {
      "q": "¿En qué se diferencian el par y la fuerza?",
      "a": "El par es fuerza por brazo de palanca, así que su unidad es compuesta: un newton multiplicado por un metro."
    },
    {
      "q": "¿Es exacta la conversión de la libra-fuerza pie?",
      "a": "El factor procede de la libra internacional, el pie internacional y g₀ estándar: 1 lbf·ft ≈ 1,3558179483314 N·m. Las definiciones son exactas, pero este decimal y la pantalla están redondeados."
    },
    {
      "q": "¿Qué es una onza-fuerza pulgada?",
      "a": "Una unidad estadounidense pequeña, para mecánica de precisión: la dieciseisava parte de una libra-fuerza pulgada."
    },
    {
      "q": "¿Se puede convertir par en energía?",
      "a": "No. Un newton metro de par y un julio de energía comparten dimensiones, pero son magnitudes distintas."
    }
  ],
  "disclaimer": "El resultado es una conversión de unidades redondeada. Comprueba el valor introducido y las unidades elegidas."
};
