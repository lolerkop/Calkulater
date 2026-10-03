import type { CalculatorCopy } from '../../lib/platform/types';

export const barbellPlatesCopyEs: CalculatorCopy = {
  "name": "Calculadora de discos de barra",
  "slug": "discos-de-barra",
  "shortDescription": "Qué discos poner en cada lado para llegar a un peso objetivo.",
  "seoTitle": "Calculadora de discos de barra: qué poner en cada lado",
  "seoDescription": "Calcula qué discos poner en cada lado de la barra para llegar a tu peso objetivo, usando los discos de que dispones.",
  "h1": "Calculadora de discos de barra",
  "keywords": [
    "calculadora de discos de barra",
    "qué discos poner",
    "cálculo de discos",
    "calculadora de carga de barra"
  ],
  "longDescription": "Busca una combinación simétrica: la mayor carga alcanzable sin superar el objetivo y después el menor número de discos para ella. Cada denominación dispone de pares ilimitados; no se introducen existencias reales. Comprueba los pares y el espacio de la barra.",
  "howToUse": [
    "Introduce objetivo total con barra y masa de barra con los collarines que cuentes.",
    "Separa denominaciones positivas por espacios o punto y coma; 2,5 es una denominación.",
    "Compara carga real y déficit total.",
    "Comprueba pares; se admiten hasta 1000 kg y tres decimales."
  ],
  "howItWorks": "Por lado: (objetivo−barra)/2. La programación dinámica en gramos enteros examina sumas alcanzables, elige la más cercana por debajo y el mínimo número de discos. Límites del producto: 32 denominaciones, objetivo/barra 0–1000 kg, discos 0,001–1000 kg con precisión 0,001 kg; no son normas deportivas.",
  "example": "100 kg con barra de 20 kg → 40 kg por lado: 25+15. Objetivo 32 kg, barra 20 kg, discos 4 y 3 kg → 6 kg por lado: 3+3 exactos; elegir 4 primero dejaría déficit.",
  "faq": [
    {
      "q": "¿Por qué se muestran discos de mayor a menor?",
      "a": "Es el orden de presentación. La búsqueda completa determina el mínimo número, no la regla de elegir siempre el mayor."
    },
    {
      "q": "¿Qué ocurre si no se alcanza el peso objetivo?",
      "a": "Se muestra la mayor carga alcanzable por debajo y el déficit total, sin redondear por encima."
    },
    {
      "q": "¿Las entradas de discos son por lado o totales?",
      "a": "Introduce cada denominación una vez. Su cantidad en el modelo es ilimitada; comprueba suficientes pares iguales."
    },
    {
      "q": "¿Cómo incluyo una barra diferente?",
      "a": "Introduce su masa real. Las barras IWF masculinas son de 20 kg y femeninas de 15 kg; no toda barra de gimnasio sigue esa norma."
    },
    {
      "q": "¿Cómo incluyo los collarines?",
      "a": "Suma la masa de ambos a la barra. Dos IWF de 2,5 kg añaden 5 kg; otros pueden pesar distinto."
    }
  ],
  "disclaimer": "Búsqueda de denominaciones con pares ilimitados, sin comprobar existencias, espacio de barra ni carga de entrenamiento segura."
};
