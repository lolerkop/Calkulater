import type { CalculatorCopy } from '../../lib/platform/types';

export const fractionArithCopyEs: CalculatorCopy = {
  "name": "Calculadora de fracciones",
  "slug": "calculadora-de-fracciones",
  "shortDescription": "Suma, resta, multiplica y divide fracciones con simplificación exacta.",
  "seoTitle": "Calculadora de fracciones — sumar, restar, multiplicar, dividir",
  "seoDescription": "Suma, resta, multiplica y divide fracciones con resultado exacto y simplificación automática.",
  "h1": "Calculadora de fracciones",
  "keywords": [
    "calculadora de fracciones",
    "sumar fracciones",
    "dividir fracciones",
    "simplificar fracción"
  ],
  "longDescription": "Suma, resta, multiplica y divide dos fracciones manteniendo numeradores y denominadores enteros hasta la simplificación. Un tercio no tiene representación decimal finita; redondear valores decimales intermedios puede cambiar una respuesta. Exactamente, 1/3 + 2/3 es 1, pero no todos los métodos numéricos devuelven necesariamente 0,99999… La fila decimal es una referencia redondeada; el resultado principal es la fracción exacta simplificada.",
  "howItWorks": "La suma y la resta pasan por el denominador común b·d; la multiplicación multiplica numeradores y denominadores, y la división multiplica por la inversa de la segunda fracción. El resultado se simplifica por el MCD y el signo se lleva en el numerador.",
  "example": "1/2 + 1/3 = 5/6, de forma exacta y sin redondeos intermedios.",
  "howToUse": [
    "Elige la operación.",
    "Introduce los numeradores y denominadores de ambas fracciones.",
    "Consulta el resultado exacto y simplificado."
  ],
  "faq": [
    {
      "q": "¿Por qué no sumar directamente los valores decimales?",
      "a": "Una fracción conserva una razón exacta entre enteros. Por ejemplo, redondear 1/3 y 2/3 a 0,33 y 0,67 pierde precisión en cada sumando, aunque su suma siga siendo 1 por casualidad. Aquí se simplifica antes de mostrar el decimal."
    },
    {
      "q": "¿El resultado se simplifica solo?",
      "a": "Sí, por el máximo común divisor del numerador y el denominador. 6/12 se muestra como 1/2, y el factor por el que se simplificó aparece en su propia línea."
    },
    {
      "q": "¿Dónde va el signo menos?",
      "a": "En el numerador. −1/2 y 1/−2 significan lo mismo, así que el denominador se normaliza siempre a positivo."
    },
    {
      "q": "¿Hay un límite para el tamaño de los números?",
      "a": "Sí: un millón en valor absoluto para cada uno. Así todos los productos intermedios se quedan dentro del rango entero exacto y el resultado no puede perder precisión en silencio."
    }
  ],
  "disclaimer": "Cada numerador y denominador debe ser un entero con valor absoluto máximo de 1000000. Ambos denominadores deben ser no nulos; al dividir, también el segundo numerador. Se admiten numeradores cero. La fracción exacta no se redondea. El decimal usa hasta seis decimales; para 0 < |x| < 10⁻⁶ se emplea notación científica con siete cifras significativas."
};
