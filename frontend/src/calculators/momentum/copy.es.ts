import type { CalculatorCopy } from '../../lib/platform/types';

export const momentumCopyEs: CalculatorCopy = {
  "name": "Calculadora de momento lineal",
  "slug": "momento-lineal",
  "shortDescription": "Momento lineal, masa o velocidad a partir de p = m · v.",
  "seoTitle": "Calculadora de momento lineal — p = m · v",
  "seoDescription": "Calcula el momento lineal de un cuerpo, su masa o su velocidad a partir de p = m · v en unidades del SI.",
  "h1": "Calculadora de momento lineal",
  "keywords": [
    "calculadora de momento lineal",
    "cantidad de movimiento",
    "calculadora p = mv"
  ],
  "longDescription": "Calcula la componente del momento lineal de un cuerpo sobre un eje elegido y despeja velocidad o masa en p = mv. Velocidad y momento pueden ser negativos: el signo expresa el sentido y se conserva con masa positiva. La energía cinética adicional sigue siendo no negativa. Es un modelo clásico de un cuerpo, no una solución completa de choques multidimensionales ni del movimiento relativista.",
  "howToUse": [
    "Elige momento lineal, velocidad o masa.",
    "Introduce masa positiva en kg, velocidad en m/s y momento en kg·m/s con signo sobre un mismo eje.",
    "Para hallar la masa, velocidad y momento deben ser no nulos y tener el mismo signo.",
    "La velocidad cero da momento cero, pero p = v = 0 no determina la masa."
  ],
  "howItWorks": "p = mv, v = p/m y m = p/v. Con m > 0, p y v tienen igual signo. Eₖ = mv²/2 = pv/2 ≥ 0. Con masa fija, duplicar la rapidez duplica el módulo del momento y cuadruplica la energía cinética.",
  "example": "3 kg a +4 m/s dan p = +12 kg·m/s y Eₖ = 24 J; a −4 m/s dan p = −12 kg·m/s con los mismos 24 J. p = −18 kg·m/s y v = −9 m/s implican m = 2 kg.",
  "faq": [
    {
      "q": "¿En qué se diferencia el momento lineal de la energía cinética?",
      "a": "El momento es un vector proporcional a la velocidad y la energía un escalar proporcional al cuadrado de la rapidez. Momentos opuestos pueden cancelarse mientras las energías cinéticas se suman."
    },
    {
      "q": "¿Por qué importa el momento en los choques?",
      "a": "El momento vectorial total se conserva si el sistema elegido no recibe impulso externo. El de cada cuerpo puede cambiar y un choque inelástico puede transformar energía cinética en calor y deformación."
    },
    {
      "q": "¿Qué significa una velocidad cero?",
      "a": "Con masa positiva da p = 0 y Eₖ = 0 en el sistema de referencia elegido. En el modo inverso, p = v = 0 admite cualquier masa positiva."
    },
    {
      "q": "¿Se tiene en cuenta el sentido del momento?",
      "a": "Sí, sobre un eje con un sentido positivo común para p y v. El movimiento en dos o tres dimensiones necesita componentes que esta forma no pide."
    },
    {
      "q": "¿El momento determina la fuerza de frenado?",
      "a": "El cambio de momento es la integral temporal de la fuerza externa resultante. Sin tiempo, modelo de fuerza y otras condiciones no determina fuerza ni distancia de frenado."
    }
  ],
  "disclaimer": "Componentes en un eje, masa positiva constante y velocidades clásicas; la conservación exige que el sistema no reciba impulso externo. El movimiento se considera a lo largo de un eje; si solo se introduce una componente de una velocidad tridimensional, la fila de energía no da la energía cinética total del cuerpo."
};
