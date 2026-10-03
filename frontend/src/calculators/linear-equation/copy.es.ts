import type { CalculatorCopy } from '../../lib/platform/types';

export const linearEquationCopyEs: CalculatorCopy = {
  "name": "Calculadora de ecuaciones lineales",
  "slug": "ecuacion-lineal",
  "shortDescription": "Resuelve ax + b = c y muestra cada paso.",
  "seoTitle": "Calculadora de ecuaciones lineales — resolver ax + b = c",
  "seoDescription": "Resuelve una ecuación lineal de la forma ax + b = c con los pasos a la vista y la respuesta comprobada por sustitución.",
  "h1": "Calculadora de ecuaciones lineales",
  "keywords": [
    "calculadora de ecuaciones lineales",
    "despejar x",
    "ax + b = c"
  ],
  "longDescription": "Resuelve la ecuación numérica ax + b = c: pasa b al otro lado, divide entre a y muestra la sustitución del x calculado. Si a = 0, queda b = c: si es cierto, sirve cualquier x real; en caso contrario no hay solución. Ambos casos se muestran como respuestas con significado. Si hay x en ambos lados, reúna primero los coeficientes.",
  "howItWorks": "x = (c − b) ÷ a siempre que a no sea cero; si a vale cero, la ecuación se reduce a comparar b con c.",
  "example": "Para 3x + 5 = 20, pasar el 5 da 3x = 15 y dividir da x = 5.",
  "howToUse": [
    "Introduce el coeficiente que acompaña a x.",
    "Introduce el término independiente y el lado derecho.",
    "Consulta la raíz y los pasos."
  ],
  "faq": [
    {
      "q": "¿Qué pasa cuando el coeficiente es cero?",
      "a": "El término en x desaparece y la ecuación queda como b = c. Si eso es cierto, cualquier número es raíz; si no, no hay ninguna."
    },
    {
      "q": "¿Admite coeficientes negativos?",
      "a": "Sí: los tres valores pueden ser negativos o decimales. El signo se arrastra a lo largo de la división."
    },
    {
      "q": "¿Para qué sirve la comprobación por sustitución?",
      "a": "Sustituir el x calculado ayuda a comprobar signos y transformaciones. La fila se redondea, así que la igualdad visible no prueba exactitud en la última cifra. Para una respuesta fraccionaria exacta, compruebe algebraicamente los coeficientes originales."
    },
    {
      "q": "¿Resuelve ecuaciones de segundo grado?",
      "a": "No, esto es solo de primer grado. Otra calculadora se encarga de las ecuaciones con un término en x al cuadrado."
    }
  ],
  "disclaimer": "Introduzca coeficientes numéricos finitos, incluidos ceros y negativos. Los pasos y la sustitución se redondean a seis cifras significativas; los valores pequeños y grandes usan notación científica. La sustitución es una comprobación numérica, no una prueba de exactitud del texto redondeado. El cálculo se detiene si un resultado intermedio mostrado o x quedan fuera del rango numérico."
};
