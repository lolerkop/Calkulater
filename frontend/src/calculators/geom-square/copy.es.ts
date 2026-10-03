import type { CalculatorCopy } from '../../lib/platform/types';

export const geomSquareCopyEs: CalculatorCopy = {
  "name": "Calculadora de cuadrado",
  "slug": "calculadora-de-cuadrado",
  "shortDescription": "Área, perímetro y diagonal de un cuadrado a partir de cualquiera de ellos.",
  "seoTitle": "Calculadora de cuadrado — área, perímetro y diagonal",
  "seoDescription": "Calcula el área, el perímetro y la diagonal de un cuadrado a partir de su lado, su área o su perímetro.",
  "h1": "Calculadora de cuadrado",
  "keywords": [
    "calculadora de cuadrado",
    "área de un cuadrado",
    "perímetro de un cuadrado",
    "diagonal del cuadrado"
  ],
  "longDescription": "Resuelve un cuadrado a partir del valor que tengas a mano: el lado, el área o el perímetro. Las cuatro magnitudes vuelven juntas, así que un suelo de 49 m² te dice de inmediato la pared de 7 m junto a la que discurre y la diagonal de 9,9 m que medirías al atravesarlo. La unidad de longitud se elige una vez y no se convierte: el área simplemente se da en su cuadrado.",
  "howItWorks": "S = a², P = 4a y d = a√2. En los modos inversos a = √S o a = P/4; después se calculan las demás dimensiones. El área usa el cuadrado de la unidad de longitud elegida.",
  "example": "Una habitación cuadrada de 5 m de lado tiene un área de 25 m², un perímetro de 20 m y una diagonal de 7,071 m.",
  "howToUse": [
    "Selecciona lado, área o perímetro del cuadrado como dato conocido.",
    "Las longitudes usan la unidad elegida y el área usa su cuadrado.",
    "Introduce un valor positivo.",
    "Para pasar de cm² a m² divide el área entre 10 000 antes de introducirla; seleccionar metros no la convierte."
  ],
  "faq": [
    {
      "q": "¿Puedo introducir el área en lugar del lado?",
      "a": "Sí. Elige el modo del área y el lado se recupera como su raíz cuadrada; el perímetro y la diagonal salen después de él."
    },
    {
      "q": "¿Por qué el área aparece en unidades cuadradas?",
      "a": "Porque eso es un área. Si has introducido centímetros, el área va en centímetros cuadrados: multiplicar por un factor lineal para cambiar de unidad sería un error."
    },
    {
      "q": "¿Se admite un lado de cero?",
      "a": "No. Un cuadrado sin lado no es una figura, así que la calculadora avisa del problema en lugar de devolver un cero verosímil."
    },
    {
      "q": "¿Cómo se halla la diagonal?",
      "a": "Por el teorema de Pitágoras sobre dos lados iguales, lo que se reduce a d = a√2."
    },
    {
      "q": "¿Qué cambia al duplicar el lado de un cuadrado?",
      "a": "Perímetro y diagonal se duplican, mientras que el área se cuadruplica: (2a)² = 4a². Un factor aplicado a la longitud tiene otro efecto sobre el área."
    }
  ],
  "disclaimer": "El modelo supone cuatro lados iguales y cuatro ángulos rectos. El área por sí sola no demuestra que una parcela sea cuadrada. Los resultados se redondean; un cuadrado degenerado con lado cero queda fuera del cálculo."
};
