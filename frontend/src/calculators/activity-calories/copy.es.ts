import type { CalculatorCopy } from '../../lib/platform/types';

export const activityCaloriesCopyEs: CalculatorCopy = {
  "name": "Calculadora de calorías del ejercicio",
  "slug": "calorias-del-ejercicio",
  "shortDescription": "Calorías totales por MET, referencia 1 MET y diferencia durante el mismo tiempo.",
  "longDescription": "Estima la energía total de una sesión, incluido el gasto de reposo durante esos minutos. Los valores describen actividades concretas del 2024 Adult Compendium para 19–59 años: caminar por placer, ciclismo general, crol a ritmo medio y correr a unos 9,7–10,1 km/h. Son referencias de grupos, no una medida de tu metabolismo. Las filas adicionales muestran 1 MET y la diferencia respecto a él, para entender por qué una sesión no se suma automáticamente a un gasto diario que ya incluye actividad.",
  "seoTitle": "Calculadora de calorías del ejercicio — MET, peso y duración",
  "seoDescription": "Calorías totales por MET, referencia 1 MET y diferencia durante el mismo tiempo.",
  "h1": "Calculadora de calorías del ejercicio",
  "keywords": [
    "calculadora de calorías del ejercicio",
    "calorías quemadas corriendo",
    "calorías quemadas en bici",
    "calculadora de calorías met"
  ],
  "howToUse": [
    "Elige la descripción más próxima; usa MET propio para otro esfuerzo.",
    "Introduce kilogramos y minutos a esa intensidad.",
    "Calcula por separado los tramos con distintas intensidades y suma su energía.",
    "Compara el total con 1 MET en el mismo intervalo."
  ],
  "howItWorks": "E = MET ×3,5×m/200×t; m en kg, t en minutos, E en kcal. 1 MET estándar =3,5 ml de oxígeno/kg/min; se supone unos 5 kcal por litro de oxígeno. E₁ =3,5 mt/200; diferencia =E−E₁. Códigos: 17160 —3,5; 01014 —7; 18290 —8; 12050 —9,3 MET. El total principal y el gasto por hora se redondean a kcal enteras, salvo valores pequeños distintos de cero. Por debajo de 1 MET la diferencia frente a 1 MET es negativa: compara modelos, mientras el gasto total sigue siendo positivo.",
  "example": "Ciclismo: 70 kg, 45 min, 7 MET →386 kcal (385,875 sin redondear). 1 MET en ese tiempo son 55,125 kcal; la diferencia 330,75 kcal. Con 1 MET, 70 kg y 60 min el total es 73,5 kcal antes de redondear (se muestran 74 kcal) y la diferencia cero.",
  "faq": [
    {
      "q": "¿Qué significa MET para la energía de actividad?",
      "a": "Es una proporción respecto al reposo estándar. 7 MET significa siete veces ese gasto durante el mismo tiempo, no siete gastos adicionales al reposo."
    },
    {
      "q": "¿Por qué el peso multiplica la fórmula MET?",
      "a": "Con MET y tiempo fijos, pasar de 70 a 90 kg multiplica la estimación por 90/70. Es una relación del modelo, no una comprobación del gasto medido de dos personas."
    },
    {
      "q": "¿Cómo elijo MET para otro ritmo?",
      "a": "Compara velocidad, terreno, técnica y esfuerzo con la descripción. El crol 8 MET aquí es unos 45,7 m/min, no cualquier natación. No hay un porcentaje de error universal."
    },
    {
      "q": "¿El total de la sesión incluye el reposo?",
      "a": "Sí. La fila 1 MET muestra el reposo estándar durante esos minutos y la siguiente su diferencia. Tu gasto de reposo real puede ser distinto."
    },
    {
      "q": "¿Puedo sumar toda la sesión al gasto diario?",
      "a": "Revisa lo que ya incluye la estimación diaria. Sumar el total puede contar dos veces el reposo y la actividad habitual. La diferencia respecto a 1 MET tampoco mide un déficit alimentario."
    }
  ],
  "disclaimer": "Estimación MET para adultos; los valores 2024 cubren 19–59 años. No mide tu metabolismo ni prescribe alimentación o ejercicio."
};
