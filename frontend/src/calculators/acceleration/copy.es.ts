import type { CalculatorCopy } from '../../lib/platform/types';

export const accelerationCopyEs: CalculatorCopy = {
  "name": "Calculadora de aceleración",
  "slug": "calculadora-de-aceleracion",
  "shortDescription": "Aceleración a partir de un cambio de velocidad en el tiempo, o velocidad final a partir de la aceleración.",
  "seoTitle": "Calculadora de aceleración — velocidad, tiempo y distancia",
  "seoDescription": "Calcula la aceleración a partir de la velocidad inicial, la final y el tiempo, o la velocidad final a partir de la aceleración, junto con la distancia y el cambio de velocidad.",
  "h1": "Calculadora de aceleración",
  "keywords": [
    "calculadora de aceleración",
    "aceleración uniforme",
    "velocidad final",
    "distancia recorrida"
  ],
  "longDescription": "Calcula la aceleración media a partir del cambio de velocidad o la velocidad final con aceleración constante en una recta. Las velocidades son componentes con signo respecto de un mismo eje. Se muestran por separado el desplazamiento con signo y la distancia recorrida, siempre no negativa: volver al punto inicial no implica haber recorrido cero metros.",
  "howToUse": [
    "Elige aceleración o velocidad final e introduce un tiempo positivo en segundos.",
    "Usa velocidades en m/s respecto de un eje fijo; divide antes los km/h entre 3,6.",
    "Para hallar la velocidad final, introduce la aceleración con su signo.",
    "Los resultados de distancia y desplazamiento suponen aceleración constante durante todo el intervalo."
  ],
  "howItWorks": "a = (v − v₀)/t. Con a constante: v = v₀ + at y Δx = (v₀ + v)t/2. La distancia es L = ∫|v₀ + aτ|dτ. Sin cambio de sentido, L = |Δx|; con signos opuestos en los extremos, L = t(v₀² + v²)/(2(|v₀| + |v|)). Así se incluye la parada y el cambio de sentido dentro del intervalo.",
  "example": "De 0 a 27,8 m/s en 8,4 s: a = 3,3095… → 3,31 m/s² y tanto distancia como desplazamiento son 116,76 m. De +10 a −10 m/s en 4 s: a = −5 m/s², desplazamiento 0 m y distancia 20 m.",
  "faq": [
    {
      "q": "¿La aceleración puede ser negativa?",
      "a": "Sí. El signo indica un sentido del eje. Con v < 0 y a < 0 aumenta la rapidez; para frenar, velocidad y aceleración deben tener sentidos opuestos."
    },
    {
      "q": "¿Cómo convierto km/h a m/s?",
      "a": "Divide entre 3,6: 100 km/h = 27,777… m/s. Los 27,8 m/s del ejemplo están redondeados."
    },
    {
      "q": "¿Por qué la distancia difiere del desplazamiento tras cambiar de sentido?",
      "a": "El desplazamiento suma tramos con signo; la distancia suma sus longitudes. De +10 a −10 m/s en 4 s, se recorren dos tramos de 10 m."
    },
    {
      "q": "¿Sirve si la aceleración no es constante?",
      "a": "(v − v₀)/t sigue dando la aceleración media. La velocidad final, la distancia y el desplazamiento de este modelo suponen un cambio lineal de velocidad; dos valores extremos no reconstruyen un movimiento arbitrario."
    },
    {
      "q": "¿Qué introduzco si parte del reposo y se incluye la resistencia del aire?",
      "a": "Introduce 0 como velocidad inicial. No se calculan fuerzas ni resistencia del aire; se usan velocidades medidas o una aceleración constante que tú supones."
    }
  ],
  "disclaimer": "Modelo unidimensional de aceleración constante; las velocidades extremas no determinan la distancia real con aceleración arbitraria."
};
