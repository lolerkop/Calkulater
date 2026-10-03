import type { CalculatorCopy } from '../../lib/platform/types';

export const phPohCopyEs: CalculatorCopy = {
  "name": "Calculadora de pH y pOH",
  "slug": "calculadora-de-ph-y-poh",
  "shortDescription": "pH a partir de la concentración de H⁺ y al revés, con el pOH y el medio.",
  "seoTitle": "Calculadora de pH y pOH — acidez de una disolución",
  "seoDescription": "Calcula el pH a partir de la concentración de iones hidrógeno o la concentración a partir del pH, junto con el pOH y el tipo de medio.",
  "h1": "Calculadora de pH y pOH",
  "keywords": [
    "calculadora de pH",
    "pH y pOH",
    "acidez de una disolución",
    "concentración de iones hidrógeno"
  ],
  "longDescription": "Cálculo educativo a partir de la concentración de H⁺ en mol/l o de un pH dado. El pH se define estrictamente mediante la actividad del ion hidrógeno. Aquí se aproxima con la concentración relativa a 1 mol/l, como suele hacerse en disoluciones suficientemente diluidas. Para pOH se adopta pKw = 14 a 25 °C. No se introducen temperatura ni coeficientes de actividad.",
  "howItWorks": "pH = −log₁₀ a(H⁺). El modelo usa a(H⁺) ≈ [H⁺]/c°, con c° = 1 mol/l; a la inversa, [H⁺] ≈ c° × 10⁻pH. pOH = 14 − pH. El punto neutro del modelo es pH 7. El producto acepta pH de 0 a 14 y las concentraciones positivas correspondientes. Son límites de la calculadora, no límites universales de la escala de pH.",
  "example": "Para [H⁺] = 10⁻³ mol/l, el modelo da pH 3,00 y pOH 11,00. Con pH 8,4 da aproximadamente 3,981 × 10⁻⁹ mol/l y pOH 5,60.",
  "howToUse": [
    "Elige concentración de H⁺ o pH.",
    "Introduce una concentración finita positiva en mol/l o pH de 0 a 14.",
    "Interpreta el resultado dentro de la aproximación a 25 °C."
  ],
  "faq": [
    {
      "q": "¿Siempre es pH + pOH = 14?",
      "a": "No. La suma es pKw y depende de temperatura y medio. Aquí se fija la hipótesis educativa pKw = 14 a 25 °C; no se calculan otras temperaturas."
    },
    {
      "q": "¿La concentración es la definición exacta de pH?",
      "a": "No. La definición utiliza actividad adimensional. La aproximación por concentración omite los coeficientes de actividad y puede ser inexacta en disoluciones concentradas."
    },
    {
      "q": "¿Puede estar el pH fuera de 0–14?",
      "a": "Sí, la escala sigue siendo significativa fuera de esos límites. Esta calculadora acepta deliberadamente solo 0–14 y no modela esas disoluciones."
    },
    {
      "q": "¿Por qué se rechaza concentración cero?",
      "a": "El logaritmo de cero no está definido. Los datos vacíos o incorrectos también producen un error en lugar de sustituirse por cero."
    }
  ],
  "disclaimer": "Se aproxima actividad mediante concentración; pKw = 14 a 25 °C. El intervalo del producto 0–14 no es un límite físico de pH. No se modelan fuerza iónica, temperatura ni correcciones de medida."
};
