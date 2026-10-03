import type { CalculatorCopy } from '../../lib/platform/types';

export const inclinedPlaneCopyEs: CalculatorCopy = {
  name: "Calculadora de plano inclinado",
  slug: "plano-inclinado",
  shortDescription: "Fuerza a lo largo de la pendiente, rozamiento y aceleración.",
  seoTitle: "Calculadora de plano inclinado — fuerza en la pendiente y rozamiento",
  seoDescription: "Calcula la fuerza a lo largo de la pendiente, la fuerza normal, el rozamiento y la aceleración de un cuerpo sobre un plano inclinado.",
  h1: "Calculadora de plano inclinado",
  keywords: ["plano inclinado", "fuerza en la pendiente", "coeficiente de rozamiento", "ángulo de una rampa"],
  longDescription: "Calcula las fuerzas sobre un cuerpo que ya se desliza cuesta abajo por una rampa recta. El peso se divide en componentes paralela y normal, y se resta el rozamiento cinético. El sentido positivo es hacia abajo: una aceleración positiva aumenta la rapidez y una negativa la reduce hasta detenerse. El inicio del movimiento requiere otro modelo de rozamiento estático.",
  howToUse: ["Introduce la masa en kilogramos y el ángulo respecto a la horizontal en grados, no la pendiente porcentual.", "Usa el coeficiente de rozamiento cinético de las superficies reales; 0,2 es un ejemplo, no una constante universal del material.", "Interpreta los signos con el sentido positivo cuesta abajo. La aceleración negativa solo se aplica mientras el cuerpo sigue bajando."],
  howItWorks: "Con g = 9,80665 m/s²: F∥ = mg sen α, N = mg cos α, Fr = μN, Fneta = F∥ − Fr, a = Fneta/m. μ no tiene unidad. Se suponen deslizamiento hacia abajo, μ constante y ausencia de tracción, rodadura y resistencia del aire. A 90°, N = 0 es un caso límite.",
  example: "50 kg, 30°, μ = 0,2: F∥ = 245,17 N; N = 424,64 N; rozamiento = 84,928 N; fuerza neta = 160,24 N; a = 3,205 m/s². En horizontal con la misma masa y μ: a = −1,961 m/s². El cuerpo en movimiento se frena; no es un «margen de estabilidad».",
  faq: [{"q": "¿Por qué se cancela la masa en la aceleración?", "a": "Ambas fuerzas contienen m: a = g(sen α − μ cos α). Con las mismas superficies, más masa aumenta las fuerzas, pero no esta aceleración."}, {"q": "¿Empezará a deslizarse una caja en reposo?", "a": "Esta herramienta no lo determina. Hace falta mg sen α > μs mg cos α con el coeficiente estático μs. El coeficiente introducido describe el deslizamiento."}, {"q": "¿Sirve para subir por la rampa o rodar?", "a": "No. Al subir se invierte la dirección del rozamiento; la rodadura necesita además una dinámica de rotación."}, {"q": "¿Cómo convierto la pendiente porcentual al ángulo del campo?", "a": "Para una subida Δh y distancia horizontal L, la pendiente p = 100Δh/L y el ángulo α = arctan(p/100). Una pendiente del 100 % equivale a 45°, no a 90°. Introduce el ángulo convertido en grados."}],
  disclaimer: "Modelo de deslizamiento descendente, no un cálculo de sujeción de cargas o estabilidad estructural. El estado de las superficies modifica el rozamiento.",
};
