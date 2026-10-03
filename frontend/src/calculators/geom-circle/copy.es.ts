import type { CalculatorCopy } from '../../lib/platform/types';

export const geomCircleCopyEs: CalculatorCopy = {
  "name": "Calculadora de círculo",
  "slug": "calculadora-de-circulo",
  "shortDescription": "Área, longitud, diámetro y radio a partir de cualquiera de ellos.",
  "seoTitle": "Calculadora de círculo — área, longitud, radio y diámetro",
  "seoDescription": "Calcula el área de un círculo, su longitud, su radio o su diámetro a partir de cualquier valor conocido.",
  "h1": "Calculadora de círculo",
  "keywords": [
    "calculadora de círculo",
    "área de un círculo",
    "longitud de la circunferencia",
    "radio a partir del área"
  ],
  "longDescription": "Resuelve un círculo a partir de lo que casualmente conozcas: radio, diámetro, longitud de la circunferencia o área. Eso importa más de lo que parece: una tubería o un bidón se describen normalmente por su diámetro, un parterre por la longitud de su borde y una pieza en bruto por su área, y cada caso se resuelve de una manera distinta a mano. Se usa Math.PI ≈ 3,141592653589793: una aproximación de máquina de π, no el número infinito exacto ni 3,14. Con r = 3 m, usar 3,14 reduciría la circunferencia unos 9,56 mm; los resultados finales se redondean.",
  "howItWorks": "S = πr², C = 2πr y d = 2r; el radio sale de la longitud como r = C ÷ 2π y del área como r = √(S ÷ π).",
  "example": "Un círculo de 3 m de radio tiene un área de 28,274 m² y una circunferencia de 18,85 m.",
  "howToUse": [
    "Elige una unidad de longitud común.",
    "En el modo de área introduce su cuadrado: cm² si eliges centímetros.",
    "Selecciona el dato conocido y rellena solo el campo visible.",
    "Radio, diámetro y circunferencia deben ser positivos; cambiar la unidad no convierte el número introducido."
  ],
  "faq": [
    {
      "q": "¿Qué valor de π se usa?",
      "a": "Se usa Math.PI ≈ 3,141592653589793: una aproximación de máquina de π, no el número infinito exacto ni 3,14. Con r = 3 m, usar 3,14 reduciría la circunferencia unos 9,56 mm; los resultados finales se redondean."
    },
    {
      "q": "¿En qué se diferencian radio y diámetro al introducirlos?",
      "a": "El diámetro es el doble del radio, así que confundirlos multiplica el área por cuatro. Por eso el dato conocido se elige de forma explícita."
    },
    {
      "q": "¿Se puede obtener el radio a partir del área?",
      "a": "Sí: elige ese modo; el radio es la raíz cuadrada del área dividida entre π."
    },
    {
      "q": "¿Qué significa aquí la longitud de la circunferencia?",
      "a": "La longitud de la línea cerrada que rodea el borde del círculo: lo que medirías con una cinta alrededor de una tubería o un bidón."
    },
    {
      "q": "¿Cómo convierto el área de un círculo de cm² a m²?",
      "a": "1 m = 100 cm, por lo que 1 m² = 10 000 cm². Por ejemplo, 100 cm² = 0,01 m². Elegir metros cambia la interpretación del número, sin convertirlo."
    }
  ],
  "disclaimer": "Modelo de un círculo plano de área positiva. π y los resultados son aproximaciones numéricas; el diámetro exterior de una tubería no determina su sección interior. Si algún resultado necesario queda fuera del rango numérico, se muestra un error."
};
