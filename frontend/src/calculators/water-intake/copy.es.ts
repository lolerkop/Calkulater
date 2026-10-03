import type { CalculatorCopy } from '../../lib/platform/types';

export const waterIntakeCopyEs: CalculatorCopy = {
  "name": "Calculadora de estimación de líquidos",
  "slug": "consumo-de-agua",
  "shortDescription": "Estimación educativa de líquidos por supuestos de peso, actividad y calor, no necesidad de bebida.",
  "longDescription": "Muestra un escenario educativo con tres coeficientes adoptados: 33 ml/kg, 350 ml por 30 minutos de actividad y 10% añadido a toda la suma con calor. No se ha establecido validación primaria de esta combinación exacta; se presenta como estimación del modelo, no necesidad diaria de bebida. EFSA describe como contexto agua total de comida y bebidas: 2 L para mujeres adultas y 2,5 L para hombres con temperatura y actividad moderadas. Son referencias poblacionales, no la fórmula del cálculo ni una prescripción personal.",
  "seoTitle": "Calculadora de estimación de líquidos — peso, actividad y calor",
  "seoDescription": "Estimación educativa de líquidos por supuestos de peso, actividad y calor, no necesidad de bebida.",
  "h1": "Calculadora de estimación de líquidos",
  "keywords": [
    "calculadora de consumo de agua",
    "cuánta agua beber",
    "hidratación diaria",
    "agua al día"
  ],
  "howToUse": [
    "Introduce kilogramos y minutos de actividad no negativos.",
    "Selecciona calor para ver el multiplicador fijo del modelo.",
    "Lee por separado las partes de peso, actividad y calor.",
    "No conviertas litros o vasos en agua pura obligatoria; considera alimentos y restricciones personales."
  ],
  "howItWorks": "B =0,033 m L; A =0,35 t/30 L; Q =(B+A)×k, k=1 sin calor o 1,1 con calor. Incremento =(B+A)×0,1. Vasos =Q/0,25. Los factores son supuestos; no se mide sudor ni reposición de electrolitos.",
  "example": "72 kg, 45 min: B=2,376 L, A=0,525 L, total 2,901 L y 11,604 vasos equivalentes. Calor: 2,901×1,1=3,191 L (3,1911 sin redondear), incremento 0,2901 L. Actividad cero deja solo la parte de peso.",
  "faq": [
    {
      "q": "¿El té y el café cuentan para el agua total?",
      "a": "Sí, bebidas y humedad de alimentos forman parte del total. Esto no valida los factores 33/350/1,1 ni prescribe cuánto tomar de una bebida específica."
    },
    {
      "q": "¿Por qué el calor multiplica todo el modelo?",
      "a": "Es una regla adoptada del escenario, no una relación fisiológica medida. 10% se aplica a peso más actividad; las pérdidas reales dependen de condiciones y persona."
    },
    {
      "q": "¿Debo beber más que el líquido calculado?",
      "a": "No se fija mínimo ni máximo ni se recomienda beber por obligación. Con restricciones de líquidos prescritas, sigue instrucciones personales en vez de este modelo."
    },
    {
      "q": "¿Qué respaldo tienen 33 ml de agua por kilogramo?",
      "a": "Aquí son un supuesto inicial sin precisión universal confirmada. Las necesidades no se deducen solo de peso; edad, dieta, salud y actividad también importan."
    },
    {
      "q": "¿Cómo interpreto el número mostrado de vasos de agua?",
      "a": "Solo convierte litros a porciones de 250 ml. 11,604 vasos equivalen aritméticamente a 2,901 L, no obligan a beber esa agua pura además de comida y bebidas."
    }
  ],
  "disclaimer": "Escenario educativo, no una necesidad de bebida ni un consejo terapéutico. Infancia, embarazo, lactancia y restricciones de líquidos requieren otra evaluación; el modelo no las considera."
};
