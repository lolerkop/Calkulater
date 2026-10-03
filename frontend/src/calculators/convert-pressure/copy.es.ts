import type { CalculatorCopy } from '../../lib/platform/types';

// Complete subject copy belongs to this calculator; it does not fall back to central prose.
export const convertPressureCopyEs: CalculatorCopy = {
  "name": "Conversor de presión",
  "slug": "conversor-de-presion",
  "shortDescription": "Convierte presión entre pascales, bares, atmósferas y psi.",
  "seoTitle": "Conversor de presión — bar, atmósferas, psi y pascales",
  "seoDescription": "Convierte presión entre pascales, kilopascales, bares, atmósferas, psi y milímetros de mercurio.",
  "h1": "Conversor de presión",
  "keywords": [
    "conversor de presión",
    "bar a psi",
    "atmósferas",
    "mmHg"
  ],
  "longDescription": "Convierte presión entre pascales, bares, atmósferas, psi y milímetros de mercurio. En una misma lista se encuentran cuatro sistemas: los manómetros y los neumáticos usan bar o psi, los partes meteorológicos usan hectopascales y la medicina, milímetros de mercurio.",
  "howToUse": [
    "Introduce el valor.",
    "Elige la unidad de origen.",
    "Elige la unidad de destino."
  ],
  "howItWorks": "Cada unidad se convierte a través del pascal con factores exactos.",
  "example": "Un bar son 100.000 Pa y unas 14,5 psi.",
  "faq": [
    {
      "q": "¿Son lo mismo el bar y la atmósfera?",
      "a": "Casi: un bar son 100.000 Pa y una atmósfera, 101.325 Pa; se diferencian en torno a un 1,3 %."
    },
    {
      "q": "¿Qué presión deben tener los neumáticos?",
      "a": "El conversor no elige la presión de los neumáticos. Usa el valor y las condiciones de medida indicados para tu vehículo y convierte después la unidad especificada."
    },
    {
      "q": "¿Por qué la medicina usa milímetros de mercurio?",
      "a": "Es una unidad histórica del manómetro de mercurio: 1 mmHg son exactamente 133,322387415 Pa. La atmósfera normal son 760 torr, que equivalen a 759,9999 milímetros convencionales: el torr y el mmHg están definidos de forma ligeramente distinta."
    },
    {
      "q": "¿Qué es el hectopascal de los partes meteorológicos?",
      "a": "Son 100 Pa, exactamente un milibar. Las dos unidades coinciden numéricamente."
    }
  ],
  "disclaimer": "El resultado es una conversión de unidades redondeada. Comprueba el valor introducido y las unidades elegidas."
};
