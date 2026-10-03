import type { CalculatorCopy } from '../../lib/platform/types';

export const divisorsCopyEs: CalculatorCopy = {
  "name": "Calculadora de divisores",
  "slug": "calculadora-de-divisores",
  "shortDescription": "Divisores positivos: los primeros 40, cantidad total, suma y suma de divisores propios.",
  "seoTitle": "Calculadora de divisores — todos los divisores, cantidad y suma",
  "seoDescription": "Encuentra los divisores positivos de un entero hasta 10¹²: los primeros 40, la cantidad total y las sumas total y de divisores propios.",
  "h1": "Calculadora de divisores",
  "keywords": [
    "calculadora de divisores",
    "divisores de un número",
    "suma de divisores"
  ],
  "longDescription": "Encuentra los divisores positivos de un entero n entre 1 y 1000000000000, su cantidad, su suma y la suma de divisores propios, excluido n. Cada divisor i hasta √n aporta su pareja n/i. En un cuadrado, la raíz coincidente se cuenta una sola vez. Los totales usan el conjunto completo; el resultado principal muestra solo los primeros 40 divisores. Para n = 1 el conjunto contiene únicamente el uno, que no es primo.",
  "howItWorks": "Cada i hasta la raíz cuadrada que divide a n aporta tanto i como n ÷ i; la pareja coincide en un cuadrado perfecto.",
  "example": "360 tiene 24 divisores que suman 1170.",
  "howToUse": [
    "Introduce un número entero de uno en adelante.",
    "Consulta los primeros 40 divisores; el recuento completo y las sumas se muestran por separado.",
    "Comprueba debajo la cantidad y la suma."
  ],
  "faq": [
    {
      "q": "¿En qué se diferencia de la factorización en primos?",
      "a": "La factorización da los ladrillos primos; esto da todos los números que dividen de forma exacta. Construir una lista a partir de la otra sigue costando trabajo."
    },
    {
      "q": "¿Por qué un cuadrado perfecto tiene una cantidad impar?",
      "a": "Su raíz cuadrada se empareja consigo misma, así que un divisor se queda sin pareja distinta y el total sale impar."
    },
    {
      "q": "¿Qué hace perfecto a un número?",
      "a": "Que sus divisores propios sumen el propio número. Seis es el más pequeño: uno más dos más tres."
    },
    {
      "q": "¿Por qué el límite está en el billón?",
      "a": "Para n ≤ 10¹², probar hasta √n requiere como máximo un millón de comprobaciones. Es el límite de trabajo de esta página; el tiempo real depende del dispositivo. Los enteros mayores también tienen divisores, pero esta herramienta no los admite."
    }
  ]
};
