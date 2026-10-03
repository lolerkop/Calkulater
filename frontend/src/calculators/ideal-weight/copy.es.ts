import type { CalculatorCopy } from '../../lib/platform/types';

export const idealWeightCopyEs: CalculatorCopy = {
  "name": "Calculadora de peso ideal",
  "slug": "peso-ideal",
  "shortDescription": "Compara Devine, Robinson, Miller y Hamwi con límites de IMC adulto, sin fijar un peso objetivo.",
  "longDescription": "Compara cuatro fórmulas históricas de peso de referencia: Devine (1974), Robinson y Miller (1983), Hamwi (1964). Usan estatura y constantes publicadas por sexo, sin composición corporal, enfermedades ni objetivos personales. La media es una cifra de comparación; la dispersión no es un intervalo de confianza. Los límites de peso para IMC 18,5 y 25 describen una categoría de cribado para adultos desde 20 años. Ni ese intervalo ni una fórmula puntual confirman salud o fijan un peso deseado.",
  "seoTitle": "Estimación de peso — Devine, Robinson, Miller y Hamwi",
  "seoDescription": "Compara Devine, Robinson, Miller y Hamwi con límites de IMC adulto, sin fijar un peso objetivo.",
  "h1": "Calculadora de peso ideal",
  "keywords": [
    "calculadora de peso ideal",
    "fórmula de Devine",
    "peso corporal ideal",
    "peso saludable para la estatura"
  ],
  "howToUse": [
    "Elige el conjunto publicado de constantes por sexo.",
    "Introduce 152,4–230 cm; aquí las fórmulas se usan desde cinco pies.",
    "Compara los métodos sin convertir la media en un plan para adelgazar.",
    "El límite superior del IMC está excluido: el peso debe ser menor."
  ],
  "howItWorks": "x = estatura/2,54 −60 pulgadas. Hombres: Devine 50+2,3 x; Robinson 52+1,9 x; Miller 56,2+1,41 x kg; Hamwi(106+6 x) lb. Mujeres: 45,5+2,3 x; 49+1,7 x; 53,1+1,36 x kg; (100+5 x) lb. 1 lb =0,45359237 kg. Media = suma/4. Con h en metros: 18,5 h² ≤ peso <25 h².",
  "example": "Hombre de 180 cm: Devine 74,992 kg, Miller 71,521 kg, Hamwi 77,654 kg; media 74,203 kg. Límites del IMC: 59,94 kg incluido y 81 kg excluido. Por debajo de 152,4 cm se muestra una limitación, no un peso constante.",
  "faq": [
    {
      "q": "¿Qué peso de referencia debo elegir como objetivo?",
      "a": "Ninguno automáticamente. Promediar cuatro estimaciones históricas no crea una recomendación personal. Se comparan métodos, sin calcular objetivos terapéuticos ni dosis de medicamentos."
    },
    {
      "q": "¿Por qué difieren los límites del IMC y las fórmulas de peso?",
      "a": "El IMC forma un intervalo con el cuadrado de la estatura; las fórmulas producen puntos lineales. A 180 cm, 81 kg es IMC 25 y queda fuera del intervalo indicado."
    },
    {
      "q": "¿Las fórmulas de peso tienen en cuenta los músculos?",
      "a": "No. Estatura y constantes no miden composición corporal. Mucha masa muscular puede explicar diferencias, pero no demuestra salud por sí sola."
    },
    {
      "q": "¿Por qué hay dos conjuntos de sexo en las fórmulas?",
      "a": "Así se publicaron las constantes. Elegirlas selecciona coeficientes, no determina identidad ni fisiología individual; aquí no existe un tercer conjunto validado."
    },
    {
      "q": "¿Cómo se diferencia esta comparación del IMC habitual?",
      "a": "El IMC habitual usa el peso real. Aquí se deriva peso de estatura. Niños, embarazo y tratamientos requieren otros métodos; igual estatura no implica iguales necesidades."
    }
  ],
  "disclaimer": "Comparación de fórmulas de referencia, no un objetivo personal, diagnóstico ni dosis. Límites de IMC para adultos desde 20 años, no normas infantiles ni del embarazo."
};
