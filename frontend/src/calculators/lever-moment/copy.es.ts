import type { CalculatorCopy } from '../../lib/platform/types';

export const leverMomentCopyEs: CalculatorCopy = {
  "name": "Calculadora de palanca y ventaja mecánica",
  "slug": "palanca-y-ventaja-mecanica",
  "shortDescription": "Equilibrio de una palanca: la fuerza en el segundo brazo y la ventaja obtenida.",
  "seoTitle": "Calculadora de palanca — fuerza en el brazo y ventaja mecánica",
  "seoDescription": "Calcula el equilibrio de una palanca: la fuerza en el segundo brazo o la longitud del brazo a partir de F₁·d₁ = F₂·d₂, más la ventaja mecánica.",
  "h1": "Calculadora de palanca y ventaja mecánica",
  "keywords": [
    "calculadora de palanca",
    "calculadora de ventaja mecánica",
    "ley de la palanca",
    "calculadora de punto de apoyo"
  ],
  "longDescription": "Resuelve el equilibrio de dos momentos opuestos en una palanca ideal sin masa. d₁ y d₂ son distancias perpendiculares positivas del apoyo a las líneas de acción, no necesariamente longitudes de la barra. F₁ es la fuerza de entrada y F₂ la de salida; la ventaja geométrica d₁/d₂ puede ser mayor o menor que uno. El apoyo proporciona el equilibrio de fuerzas, pero su reacción no se calcula.",
  "howToUse": [
    "Elige F₂ o d₂; no hace falta rellenar el campo calculado.",
    "Introduce F₁ no negativa en N y un brazo perpendicular d₁ positivo en m.",
    "Para F₂ usa d₂ > 0; para d₂ deben ser F₂ > 0 y F₁ > 0.",
    "Comprueba que los momentos sean opuestos; se excluyen peso de la palanca, rozamiento del apoyo y otros momentos."
  ],
  "howItWorks": "Con momentos opuestos, F₁d₁ = F₂d₂. Por tanto F₂ = F₁d₁/d₂ o d₂ = F₁d₁/F₂. Para fuerzas no nulas, la ventaja geométrica ideal F₂/F₁ = d₁/d₂. Si ambas fuerzas son cero, se muestra solo la relación de brazos, no 0/0.",
  "example": "F₁ = 100 N, d₁ = 2 m y d₂ = 0,5 m dan F₂ = 400 N, momento 200 N·m y ventaja 4. A la inversa, 400 N dan d₂ = 0,5 m. F₁ = 0 con brazos positivos da F₂ = 0; no equilibra una F₂ no nula en un brazo positivo.",
  "faq": [
    {
      "q": "¿En qué se diferencia el equilibrio de palanca del momento de una fuerza?",
      "a": "Un momento corresponde a una fuerza y su brazo. Aquí se igualan dos módulos de momentos opuestos; el apoyo también debe proporcionar equilibrio de fuerzas."
    },
    {
      "q": "¿Una palanca crea energía?",
      "a": "Una palanca ideal sin pérdidas intercambia fuerza y desplazamiento: mayor fuerza de salida conlleva menor desplazamiento. Rozamiento y deformación reducen el trabajo transmitido."
    },
    {
      "q": "¿Cómo se miden los brazos de la palanca?",
      "a": "Perpendicularmente desde el apoyo a cada línea de acción. Con una fuerza inclinada el brazo es menor que la distancia al punto de aplicación; no vuelvas a multiplicar un brazo perpendicular conocido por el seno."
    },
    {
      "q": "¿Y si las dos fuerzas están del mismo lado del apoyo?",
      "a": "Pueden equilibrarse si sus sentidos generan momentos opuestos, como en una palanca de segundo género. Estar del mismo lado no fija por sí solo el signo del momento."
    },
    {
      "q": "¿Se incluyen el peso de la palanca y los casos de fuerza cero?",
      "a": "El peso queda excluido; su momento y otras fuerzas necesitan el esquema completo de equilibrio. F₁ = 0 con F₂ > 0 daría brazo cero en el modo inverso, fuera del modelo de brazos positivos."
    }
  ],
  "disclaimer": "Palanca ideal sin masa con dos momentos opuestos y brazos positivos; no calcula rozamiento, reacción del apoyo, resistencia ni otras cargas."
};
