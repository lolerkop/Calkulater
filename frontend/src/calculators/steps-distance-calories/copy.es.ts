import type { CalculatorCopy } from '../../lib/platform/types';

export const stepsDistanceCaloriesCopyEs: CalculatorCopy = {
  "name": "Calculadora de pasos a distancia y calorías",
  "slug": "de-pasos-a-distancia",
  "shortDescription": "Distancia desde pasos y longitud medida o estatura; energía con coeficiente visible editable.",
  "longDescription": "Convierte pasos contados en distancia usando la longitud de un solo paso. Sin medirla se usa la aproximación adoptada 0,415×estatura, no una relación universal validada. El modo de paso medido permite calibrar la distancia de tu marcha. La energía se calcula aparte con un coeficiente editable en kcal/kg/km, inicialmente 0,53. Su definición determina gasto total o adicional; sin tiempo ni origen del coeficiente no se puede descontar el reposo.",
  "seoTitle": "Pasos a distancia y calorías — longitud del paso y peso",
  "seoDescription": "Distancia desde pasos y longitud medida o estatura; energía con coeficiente visible editable.",
  "h1": "Calculadora de pasos a distancia y calorías",
  "keywords": [
    "de pasos a km",
    "de pasos a calorías",
    "calculadora de distancia del podómetro",
    "calculadora de longitud de zancada"
  ],
  "howToUse": [
    "Introduce un número entero de pasos; cero da distancia y energía cero.",
    "Mide, por ejemplo, 20 pasos y divide los centímetros recorridos entre 20.",
    "Indica un paso contado, no una zancada completa de dos pasos.",
    "Usa peso y un coeficiente con definición conocida; 0,53 es una suposición inicial."
  ],
  "howItWorks": "Modo estatura: L =0,415 H; modo medido: L indicada, longitudes en cm. D =N×L/100000 km. E =c×m×D kcal; c en kcal/kg/km, m en kg. Pasos por kilómetro =100000/L. Contador, longitud y coeficiente aportan incertidumbres separadas.",
  "example": "20 pasos en 14 m dan 70 cm/paso. 10000 pasos son 7 km; con 70 kg y c=0,53, 0,53×70×7=259,7 kcal antes de redondear, o 260 kcal en el resultado. 175 cm de estatura dan 72,625 cm, 7,263 km y 269 kcal.",
  "faq": [
    {
      "q": "¿Qué fiabilidad tiene el paso 0,415×estatura?",
      "a": "Es una aproximación inicial adoptada sin porcentaje universal de error. Ritmo, calzado, longitud de piernas y movimiento cambian el paso. Una medición personal comparable suele ser más útil."
    },
    {
      "q": "¿Cómo mido un paso para el podómetro?",
      "a": "Recorre una distancia conocida al ritmo habitual y divide entre pasos individuales contados. 14 m en 20 pasos son 70 cm. Una zancada del mismo pie al mismo pie contiene dos pasos."
    },
    {
      "q": "¿Por qué se puede cambiar el coeficiente de calorías de pasos?",
      "a": "Ritmo, pendiente y carga afectan la energía. 0,53 aquí es una suposición, no una norma demostrada para toda marcha. Usa unidades y condiciones claras."
    },
    {
      "q": "¿Las calorías de pasos incluyen el reposo?",
      "a": "Depende del coeficiente introducido. Uno total da energía total; uno adicional, energía adicional. Sin tiempo la calculadora no comprueba esto ni mide un déficit alimentario."
    },
    {
      "q": "¿En qué difiere el cálculo de pasos del MET?",
      "a": "Aquí se parte de distancia obtenida de pasos. MET usa actividad y duración. Los modelos pueden discrepar; mantén las mismas suposiciones al comparar paseos."
    }
  ],
  "disclaimer": "Estimación de distancia y energía con supuestos indicados, no una medida personal del metabolismo. La relación con estatura es una aproximación adulta, sin marcha infantil ni alteraciones de movimiento."
};
