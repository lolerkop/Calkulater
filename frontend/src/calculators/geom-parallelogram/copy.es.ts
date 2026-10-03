import type { CalculatorCopy } from '../../lib/platform/types';

export const geomParallelogramCopyEs: CalculatorCopy = {
  "name": "Calculadora de paralelogramo",
  "slug": "calculadora-de-paralelogramo",
  "shortDescription": "Área a partir de una base y su altura, o de dos lados y el ángulo entre ellos.",
  "seoTitle": "Calculadora de paralelogramo — área, perímetro y diagonales",
  "seoDescription": "Calcula el área de un paralelogramo a partir de una base y su altura o de dos lados y el ángulo, con el perímetro y las diagonales.",
  "h1": "Calculadora de paralelogramo",
  "keywords": [
    "calculadora de paralelogramo",
    "área de un paralelogramo",
    "diagonales del paralelogramo"
  ],
  "longDescription": "Resuelve un paralelogramo de dos maneras: a partir de una base con su altura y a partir de dos lados con el ángulo entre ellos. El segundo modo da además el perímetro, la altura y ambas diagonales; el primero da solo el área, porque el segundo lado no se deduce de una base y una altura, y en su lugar aparece un guion en vez de un perímetro verosímil. A 0 o a 180 grados la figura se degenera en una recta: esa entrada se rechaza en lugar de devolver un área de cero.",
  "howItWorks": "Con base a y altura perpendicular h: S = ah. Con lados adyacentes a, b y ángulo interior θ: S = ab sen θ, h = b sen θ, P = 2(a+b). θ se introduce en grados. Las diagonales ordenadas son Dmax/min = √[a²+b² ± 2ab|cos θ|]. Identidades equivalentes de ángulo mitad evitan perder la diagonal menor al restar términos cuadrados casi iguales.",
  "example": "Lados de 10 y 8 cm con un ángulo de 30° dan un área de 40 cm² y un perímetro de 36 cm.",
  "howToUse": [
    "Elige base y altura, o dos lados adyacentes y el ángulo entre ellos.",
    "Mide la altura perpendicular a la base.",
    "Introduce el ángulo en grados, estrictamente entre 0° y 180°.",
    "Las longitudes deben ser positivas y usar la misma unidad; base y altura no bastan para determinar perímetro ni diagonales."
  ],
  "faq": [
    {
      "q": "¿Por qué no se muestra el perímetro en el modo de la altura?",
      "a": "Porque el segundo lado no se deduce de una base y una altura: infinitos paralelogramos de distinta inclinación comparten la misma área. Dar un perímetro sería inventárselo."
    },
    {
      "q": "¿Qué ocurre a 90 grados?",
      "a": "El seno vale uno y el paralelogramo pasa a ser un rectángulo: el área es el producto de los lados."
    },
    {
      "q": "¿Por qué se rechazan los 180 grados?",
      "a": "Con ese ángulo la figura se degenera en una recta y deja de ser un paralelogramo. Un área de cero sería formalmente correcta pero no diría nada, así que la calculadora avisa del problema."
    },
    {
      "q": "¿En qué se diferencian un paralelogramo y un rombo?",
      "a": "El rombo tiene los cuatro lados iguales. Introduce el mismo valor en a y en b y el cálculo sigue valiendo para él."
    },
    {
      "q": "¿Cambia el área del paralelogramo al sustituir θ por 180°−θ?",
      "a": "No: sin(180°−θ) = sin θ. También coinciden altura, perímetro y las diagonales ordenadas por longitud; cambia la inclinación. Con θ = 90° las diagonales son iguales y la figura es un rectángulo."
    }
  ],
  "disclaimer": "Se suponen dos pares de lados paralelos en un plano. Se excluyen 0° y 180°; un ángulo pequeño positivo no se trata como cero. Altura y área no determinan de forma única la inclinación ni el otro lado; los resultados se redondean."
};
