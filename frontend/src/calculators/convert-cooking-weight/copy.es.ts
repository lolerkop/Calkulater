import type { CalculatorCopy } from '../../lib/platform/types';

export const convertCookingWeightCopyEs: CalculatorCopy = {
  "name": "Conversor de peso en cocina",
  "slug": "conversor-de-peso-en-cocina",
  "shortDescription": "Tazas, cucharadas y mililitros a gramos —y al revés— para un producto concreto.",
  "seoTitle": "Conversor de peso en cocina: tazas y cucharadas a gramos",
  "seoDescription": "Convierte tazas, cucharadas y mililitros a gramos para harina, azúcar, miel y otros productos, y a la inversa.",
  "h1": "Conversor de peso en cocina",
  "keywords": [
    "tazas a gramos",
    "conversor de peso en cocina",
    "cucharada a gramos",
    "volumen a peso en cocina"
  ],
  "longDescription": "Convierte el volumen de cocina elegido en masa aproximada y al revés con una densidad asignada al producto. La densidad se muestra; no es una medición de tu porción. Esta calculadora usa una taza de 240 ml. Comprueba el recipiente y la convención de la receta.",
  "howToUse": [
    "Elige el producto: la densidad es lo que convierte volumen en peso.",
    "Elige la unidad en la que estás midiendo.",
    "Introduce la cantidad.",
    "Cambia el sentido si tienes gramos y necesitas volumen."
  ],
  "howItWorks": "La cantidad se pasa a mililitros con el factor de la unidad y se multiplica por la densidad del producto. En sentido contrario, los gramos se dividen entre la densidad y luego se convierten a la unidad elegida.",
  "example": "Con la densidad de harina supuesta de 0,53 g/ml, una taza de 240 ml da una estimación de 127,2 g.",
  "faq": [
    {
      "q": "¿Cómo se interpretan las masas de agua, harina y miel?",
      "a": "Son estimaciones con las densidades del modelo: una taza de 240 ml da 240 g de agua a 1 g/ml, 127,2 g de harina a 0,53 g/ml y 340,8 g de miel a 1,42 g/ml. La masa real de la porción puede variar."
    },
    {
      "q": "¿Qué exactitud tienen las densidades?",
      "a": "Son valores aproximados fijos, no una comprobación del ingrediente concreto. La composición, la humedad y la forma de llenar el recipiente cambian la masa de la porción; pesarla da mayor precisión."
    },
    {
      "q": "¿Qué taza se utiliza?",
      "a": "Se han elegido 240 ml, una convención usada por ejemplo en el etiquetado nutricional de la FDA. Difiere de una taza métrica de 250 ml y de una taza estadounidense habitual de unos 236,59 ml; la palabra cup por sí sola no fija el volumen."
    },
    {
      "q": "¿Puedo convertir gramos otra vez en tazas?",
      "a": "Sí, cambia el sentido. Se usa la misma densidad, así que ir y volver devuelve el número de partida."
    },
    {
      "q": "¿Por qué no usar sin más una balanza?",
      "a": "Úsala si la tienes. Esto es para recetas escritas en tazas cuando tienes gramos, o al revés."
    }
  ],
  "disclaimer": "Conversión aproximada con densidades fijas. La taza elegida es de 240 ml; pesa el ingrediente para obtener una masa precisa."
};
