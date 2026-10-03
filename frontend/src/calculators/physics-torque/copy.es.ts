import type { CalculatorCopy } from '../../lib/platform/types';

export const physicsTorqueCopyEs: CalculatorCopy = {
  "name": "Calculadora de momento de una fuerza",
  "slug": "momento-de-una-fuerza",
  "shortDescription": "Módulo del momento con fuerza, distancia al punto de aplicación y ángulo.",
  "seoTitle": "Calculadora de momento de una fuerza — τ = F·r·sen θ",
  "seoDescription": "Calcula τ = Fr sen θ y el brazo efectivo; r llega al punto de aplicación y el ángulo se mide entre r y fuerza.",
  "h1": "Calculadora de momento de una fuerza",
  "keywords": [
    "calculadora de momento de una fuerza",
    "fórmula del par",
    "momento de una fuerza",
    "brazo de palanca"
  ],
  "longDescription": "Calcula el módulo del momento de una fuerza respecto de un punto elegido: τ = Fr sen θ. r llega al punto de aplicación; el brazo efectivo d es la distancia perpendicular a la línea de acción. Solo coinciden a 90°. Estos tres datos no determinan el sentido horario o antihorario; sumar momentos requiere asignar sus signos.",
  "howToUse": [
    "Introduce un módulo de fuerza no negativo en N.",
    "Introduce r en metros hasta el punto de aplicación, no un brazo perpendicular ya conocido.",
    "Usa 0–180° entre el vector r y la fuerza.",
    "Lee el momento en N·m y d = r sen θ en m; si ya conoces d, introduce r = d y 90°."
  ],
  "howItWorks": "El módulo de r × F es Fr sen θ. El brazo efectivo es d = r sen θ y τ = Fd. Con F y r fijos, el máximo corresponde a 90°. Los 0° y 180° exactos dan brazo y momento cero; los ángulos cercanos conservan valores pequeños no nulos.",
  "example": "50 N, r = 0,3 m y 90° dan d = 0,3 m y τ = 15 N·m. A 30° dan d = 0,15 m y τ = 7,5 N·m. A 180° el momento es 0, no −15 N·m: se muestra su módulo.",
  "faq": [
    {
      "q": "¿En qué se diferencia del conversor de momento?",
      "a": "El conversor cambia unidades de un momento conocido. Aquí se calcula con fuerza y geometría; N·m expresa momento y no implica por sí solo trabajo realizado en J."
    },
    {
      "q": "¿Por qué el momento es cero tanto a 0° como a 180°?",
      "a": "La línea de acción pasa por el punto de referencia y el brazo perpendicular es cero. Los ángulos extremos exactos no conservan un residuo numérico del seno."
    },
    {
      "q": "¿En qué se diferencia el brazo efectivo de r?",
      "a": "d es la distancia más corta a la línea de acción y r la distancia al punto de aplicación. A 30°, d = r sen θ es la mitad de r."
    },
    {
      "q": "¿Con qué ángulo es máximo el módulo del momento?",
      "a": "A 90° con F y r fijos. Aumentar fuerza o distancia aumenta el momento, pero esta forma no comprueba la resistencia de la herramienta."
    },
    {
      "q": "¿El resultado indica el sentido de giro?",
      "a": "No. El módulo no especifica la orientación espacial de r × F. Para sumar momentos necesitas signos coherentes, no sumar todos sus módulos."
    }
  ],
  "disclaimer": "Módulo del momento de una fuerza respecto de un punto elegido; no calcula sentido, momento total ni resistencia del mecanismo."
};
