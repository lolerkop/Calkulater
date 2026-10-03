import type { CalculatorCopy } from '../../lib/platform/types';

export const ratioCopyEs: CalculatorCopy = {
  "name": "Calculadora de razones",
  "slug": "calculadora-de-razones",
  "shortDescription": "Simplifica una razón y reparte una cantidad en proporción.",
  "seoTitle": "Calculadora de razones: simplificar y repartir una cantidad",
  "seoDescription": "Simplifica una razón, consulta la parte de cada término en porcentaje y reparte una cantidad en la proporción indicada.",
  "h1": "Calculadora de razones",
  "keywords": [
    "calculadora de razones",
    "simplificar una razón",
    "repartir en proporción",
    "razón a porcentaje"
  ],
  "longDescription": "Simplifica una razón de partes positivas y reparte opcionalmente una cantidad en proporción a sus pesos. Admite de 2 a 1000 partes en un texto de hasta 20000 caracteres. Las partes enteras hasta 9007199254740991 se reducen mediante su MCD exacto. Las partes fraccionarias se muestran sin reducir, aunque matemáticamente una razón decimal puede escalarse a enteros. La suma de partes enteras conserva todas las cifras; los pesos fraccionarios y repartos usan precisión binaria finita. Una cantidad vacía o cero desactiva el reparto.",
  "howItWorks": "Las partes enteras se dividen entre su máximo común divisor: en eso consiste la simplificación. La proporción de cada parte = parte ÷ suma de las partes. Con una cantidad indicada, a cada parte le corresponde cantidad × parte ÷ suma de las partes.",
  "example": "La razón 2:3:5 aplicada a 6000 da 1200, 1800 y 3000, y la primera parte supone el 20 %.",
  "howToUse": [
    "Introduce de 2 a 1000 partes positivas separadas por espacios, dos puntos o punto y coma; no agrupes cifras con espacios dentro de un número.",
    "Deja la cantidad en cero para simplificar solo la razón.",
    "Introduce una cantidad para repartirla en esta proporción."
  ],
  "faq": [
    {
      "q": "¿En qué se diferencia de una proporción?",
      "a": "Una proporción resuelve una ecuación como a/b = c/d para el término que falta. Esto es otra tarea: simplificar una razón y repartir una cantidad entre sus partes, sin ninguna incógnita."
    },
    {
      "q": "¿Por qué no se simplifican las partes fraccionarias?",
      "a": "Es una decisión de la implementación, no una imposibilidad matemática. Multiplicar 1,5:2,5 por 2 permite reducirlo a 3:5. La página aplica el MCD exacto solo a partes enteras y conserva los pesos fraccionarios para calcular sus proporciones."
    },
    {
      "q": "¿Cuántas partes puedo introducir?",
      "a": "Introduce entre 2 y 1000 partes positivas finitas, en hasta 20000 caracteres. Sepáralas con espacios, dos puntos o punto y coma. Una coma sin espacio posterior es decimal; una coma seguida de espacio separa partes."
    },
    {
      "q": "¿Por qué la suma se toma de los valores introducidos?",
      "a": "Para que los porcentajes coincidan con lo que escribiste. Para 12:18 la suma de las partes es 30 y no 5, aunque la forma simplificada sea 2:3."
    },
    {
      "q": "¿Cómo reparto una cantidad de forma desigual?",
      "a": "Dando las partes en la proporción que quieras: 50:30:20 reparte una cantidad en esa razón, mientras que 1:1:1 la divide en tres partes iguales."
    }
  ],
  "disclaimer": "La cantidad debe ser finita y no negativa; una entrada negativa o incorrecta genera un error. Los porcentajes redondeados pueden no sumar exactamente el 100 %. El reparto no ajusta céntimos; los pagos requieren una política de redondeo aparte. Se rechaza la pérdida de una proporción o cantidad no nula al redondearse a cero."
};
