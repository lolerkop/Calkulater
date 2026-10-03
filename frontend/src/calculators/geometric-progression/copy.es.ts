import type { CalculatorCopy } from '../../lib/platform/types';

export const geometricProgressionCopyEs: CalculatorCopy = {
  "name": "Calculadora de progresión geométrica",
  "slug": "progresion-geometrica",
  "shortDescription": "El n-ésimo término, la suma de la serie y los propios términos.",
  "seoTitle": "Calculadora de progresión geométrica: n-ésimo término y suma",
  "seoDescription": "Calcula el término n y la suma finita de una progresión geométrica, y su suma infinita para |r| < 1. Consulta los primeros veinte términos.",
  "h1": "Calculadora de progresión geométrica",
  "keywords": [
    "calculadora de progresión geométrica",
    "n-ésimo término de una sucesión geométrica",
    "suma de una serie geométrica",
    "serie geométrica infinita"
  ],
  "longDescription": "Calcula el término n y la suma de los primeros n términos cuando cada término se multiplica por r para obtener el siguiente. Esta página admite a₁ finito, r finito distinto de cero y n entero entre 1 y 50. a₁ puede ser negativo o cero; r negativo alterna los signos de los términos no nulos. La tabla muestra veinte términos. Si |r| < 1, también aparece la suma infinita. Los términos binarios intermedios y la suma finita se conservan exactamente hasta el redondeo final.",
  "howItWorks": "aₙ = a₁rⁿ⁻¹. Para r ≠ 1, Sₙ = a₁(1−rⁿ)/(1−r); para r = 1, Sₙ = na₁. Esta implementación suma términos binarios intermedios exactos y evita restar potencias casi iguales cuando r está cerca de 1. Para |r| < 1, S∞ = a₁/(1−r).",
  "example": "Empezando en 2 con razón 3, el décimo término es 39 366 y la serie suma 59 048.",
  "howToUse": [
    "Introduce el primer término: puede ser negativo.",
    "Introduce la razón: 2 duplica en cada paso y 0,5 reduce a la mitad.",
    "Introduce cuántos términos necesitas, hasta cincuenta.",
    "La tabla enumera los veinte primeros términos."
  ],
  "faq": [
    {
      "q": "¿Por qué se rechaza una razón de cero?",
      "a": "Es una restricción de esta página. La recurrencia a₁, 0, 0, … con r = 0 tiene sentido matemático, pero esta herramienta mantiene su regla de razón no nula."
    },
    {
      "q": "¿Cuándo existe la suma infinita?",
      "a": "Con primer término no nulo, la serie converge si |r| < 1 y S∞ = a₁/(1−r). La página muestra esa fila solo bajo esta condición. Si a₁ = 0 la sucesión es cero incluso con otras razones, pero no se añade una fila especial de suma infinita."
    },
    {
      "q": "¿La razón puede ser negativa?",
      "a": "Sí. Con a₁ no nulo los signos alternan y se aplican las mismas fórmulas de suma. Si a₁ = 0, todos los términos permanecen en cero."
    },
    {
      "q": "¿Por qué cincuenta términos y no más?",
      "a": "El intervalo 1–50 es un límite de la página, no de la fórmula matemática. Además, |aₙ| y |Sₙ| deben ser menores que 10¹⁵. Estos límites acotan el cálculo y la salida."
    },
    {
      "q": "¿Una progresión es lo mismo que el interés compuesto?",
      "a": "Con una tasa constante por período, r = 1 + tasa y una cantidad sin pagos adicionales crece geométricamente. Los períodos deben coincidir; las calculadoras financieras modelan por separado aportaciones, capitalización y redondeo monetario."
    }
  ],
  "disclaimer": "El límite 10¹⁵ se aplica al valor absoluto del término n y de la suma finita, no a la suma infinita adicional. Todo valor mostrado debe ser finito y conservar los valores no nulos sin convertirlos en cero. Las entradas decimales y la presentación están redondeadas."
};
