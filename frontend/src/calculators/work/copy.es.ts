import type { CalculatorCopy } from '../../lib/platform/types';

export const workCopyEs: CalculatorCopy = {
  "name": "Calculadora de trabajo",
  "slug": "calculadora-de-trabajo",
  "shortDescription": "Trabajo de una fuerza a lo largo de un desplazamiento, con el ángulo entre ambos.",
  "seoTitle": "Calculadora de trabajo — W = F · s · cos θ",
  "seoDescription": "Calcula el trabajo mecánico de una fuerza a lo largo de un desplazamiento, con el ángulo entre ambos.",
  "h1": "Calculadora de trabajo",
  "keywords": [
    "calculadora de trabajo",
    "trabajo mecánico",
    "trabajo de una fuerza",
    "w = fs cos theta"
  ],
  "longDescription": "Calcula el trabajo de una fuerza constante a partir de su módulo, el módulo del desplazamiento y el ángulo entre ambos vectores, o despeja el módulo del desplazamiento. El trabajo admite signo negativo también en el modo inverso. El desplazamiento une las posiciones inicial y final, no mide una trayectoria sinuosa. Una fuerza variable exige sumar contribuciones pequeñas o integrar, algo que esta forma no calcula.",
  "howToUse": [
    "Elige trabajo o módulo del desplazamiento.",
    "Introduce fuerza en N y módulo del desplazamiento en m no negativos; el trabajo conocido en J puede ser negativo.",
    "Usa un ángulo de 0 a 180 grados entre fuerza y desplazamiento.",
    "En el modo inverso, la fuerza debe ser positiva, el ángulo distinto de 90° y el signo del trabajo no nulo igual al del coseno."
  ],
  "howItWorks": "W = F s cos θ para una fuerza constante en módulo y dirección. F ≥ 0, s ≥ 0 y θ está en grados. Con F y s no nulos, el trabajo es positivo por debajo de 90°, cero a 90° y negativo por encima. s = W/(F cos θ) exige denominador no nulo y resultado no negativo.",
  "example": "10 N y 5 m dan 50 J a 0°, 25 J a 60° y −50 J a 180°. A la inversa, −50 J, 10 N y 180° dan 5 m. A 90° el trabajo vale 0 para cualquier desplazamiento, por lo que no se puede recuperar su módulo.",
  "faq": [
    {
      "q": "¿Por qué el trabajo es cero a 90°?",
      "a": "Fuerza y desplazamiento son perpendiculares y su producto escalar es cero. Solo se anulan los 90° exactos; un ángulo cercano conserva un trabajo pequeño con signo."
    },
    {
      "q": "¿El ángulo para el trabajo va en grados o radianes?",
      "a": "En grados, de 0 a 180. La conversión a radianes es interna."
    },
    {
      "q": "¿Qué significan 180° y trabajo negativo?",
      "a": "La fuerza se opone al desplazamiento, por lo que W = −Fs. Es el trabajo de esa fuerza; el cambio de energía cinética depende del trabajo total de todas las fuerzas."
    },
    {
      "q": "¿Por qué no puedo hallar el desplazamiento a 90°?",
      "a": "Si W = 0 sirve cualquier módulo y si W ≠ 0 hay contradicción. Una fuerza cero tampoco permite determinar el desplazamiento."
    },
    {
      "q": "¿Hace trabajo la fuerza que sostiene una carga inmóvil?",
      "a": "Su trabajo mecánico sobre la carga es cero porque no hay desplazamiento. Eso no implica consumo fisiológico nulo ni calcula la potencia."
    }
  ],
  "disclaimer": "Trabajo de una fuerza constante; desplazamiento no equivale a longitud de trayectoria y no se calcula el trabajo total ni el gasto fisiológico."
};
