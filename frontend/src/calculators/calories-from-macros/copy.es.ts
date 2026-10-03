import type { CalculatorCopy } from '../../lib/platform/types';

export const caloriesFromMacrosCopyEs: CalculatorCopy = {
  "name": "Calculadora de calorías de los macronutrientes",
  "slug": "calorias-de-los-macronutrientes",
  "shortDescription": "Energía de gramos de macros por 4/9/4 y proporciones calóricas, con límites de fibra y etiquetado.",
  "longDescription": "Calcula energía de gramos de proteínas, grasas e hidratos con factores generales 4/9/4 y aportes individuales. Es contabilidad de energía alimentaria, no medida de absorción personal ni un plan de dieta. Usa hidratos que deseas contar a 4 kcal/g; fibra y polioles pueden requerir otros factores y aquí no se calculan aparte. Las proporciones son porcentajes de energía, no masa. Gramos cero son válidos; negativos o erróneos necesitan corrección.",
  "seoTitle": "Calculadora de calorías de macronutrientes — proteínas, grasas e hidratos",
  "seoDescription": "Energía de gramos de macros por 4/9/4 y proporciones calóricas, con límites de fibra y etiquetado.",
  "h1": "Calculadora de calorías de los macronutrientes",
  "keywords": [
    "calorías de los macronutrientes",
    "calorías por macronutriente",
    "factores de Atwater"
  ],
  "howToUse": [
    "Introduce gramos no negativos de la misma ración o conjunto diario.",
    "Comprueba si el dato de hidratos incluye fibra o polioles.",
    "Compara kcal y proporciones energéticas; iguales gramos no dan igual energía.",
    "Revisa diferencias con envases por redondeo y composición, no como medición de laboratorio."
  ],
  "howItWorks": "Ep =4 P; Eg =9 F; Ec =4 C; E =Ep+Eg+Ec kcal. Proporción =100×energía del componente/E. Con E=0 la energía es 0, sin porcentajes disponibles. La energía habitual se redondea a kcal enteras; valores positivos menores que 1 kcal siguen fraccionarios. Las proporciones usan aritmética sin redondear.",
  "example": "100 g proteínas, 50 g grasas, 200 g hidratos: 400+450+800=1650 kcal. Proporciones 24,24%, 27,27%, 48,48%. 0,1 g proteína da 0,4 kcal y 100% energía proteica; todo cero da 0 kcal sin porcentajes.",
  "faq": [
    {
      "q": "¿Por qué la grasa da 9 kcal/g en este esquema?",
      "a": "Los factores generales de Atwater reflejan energías distintas: 4 para proteínas e hidratos, 9 para grasas. Son promedios, no composición molecular exacta ni una medida de tu cuerpo."
    },
    {
      "q": "¿Cómo cuento fibra y alcohol en calorías de macros?",
      "a": "No se aplican factores separados. No trates automáticamente fibra o polioles como 4 kcal/g; alcohol tampoco entra en los tres campos, pero su energía sigue en el alimento."
    },
    {
      "q": "¿Por qué difieren las calorías de macros del envase?",
      "a": "La etiqueta redondea gramos y calorías; algunos alimentos usan factores específicos, fibra o polioles. Composición y orden del redondeo explican diferencias sin error de multiplicación."
    },
    {
      "q": "¿En qué difiere la proporción de calorías de la de gramos?",
      "a": "10 g proteína y 10 g grasa dan 40 y 90 kcal. Las proporciones de masa son iguales; las de energía 30,77% y 69,23%. No se prescriben porcentajes objetivo de dieta."
    },
    {
      "q": "¿Qué significa energía cero de macros?",
      "a": "Tres ceros dan 0 kcal, pero no se puede dividir cada aporte entre 0 para obtener porcentajes. No es un error del producto. Gramos negativos se rechazan, no se sustituyen silenciosamente por cero."
    }
  ],
  "disclaimer": "Modelo general 4/9/4 de energía alimentaria, no dieta, evaluación de absorción ni recomendación de proporciones. Componentes especiales y factores específicos no se calculan aparte."
};
