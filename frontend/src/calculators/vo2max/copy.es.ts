import type { CalculatorCopy } from '../../lib/platform/types';

export const vo2maxCopyEs: CalculatorCopy = {
  "name": "Calculadora de VO2 máx.",
  "slug": "vo2-max",
  "shortDescription": "Dos estimaciones empíricas de VO₂max con datos existentes de Cooper o pulso y límites de aplicación.",
  "longDescription": "Estima el consumo máximo relativo de oxígeno con dos modelos empíricos separados. Cooper usa una distancia ya obtenida en 12 minutos; el estudio original comparó carreras de 115 hombres de las Fuerzas Aéreas con pruebas de laboratorio. 15,3×HRmax/HRrest se validó inicialmente en 46 hombres entrenados de 21–51 años. Esos grupos no demuestran igual aplicabilidad a todas las personas. El análisis de gases espirados mide el consumo directamente; distancia o pulso no lo sustituyen.",
  "seoTitle": "Calculadora de VO2 máx. — test de Cooper y pulso",
  "seoDescription": "Dos estimaciones empíricas de VO₂max con datos existentes de Cooper o pulso y límites de aplicación.",
  "h1": "Calculadora de VO2 máx.",
  "keywords": [
    "calculadora de vo2 máx",
    "test de cooper",
    "consumo máximo de oxígeno",
    "forma aeróbica"
  ],
  "howToUse": [
    "Elige el método del que ya tienes datos apropiados.",
    "Introduce una distancia real de 12 minutos de una prueba adecuada; no se solicita empezar un esfuerzo máximo.",
    "En modo pulso indica reposo y máximo conocido; un máximo estimado por edad incorpora su propio error.",
    "Compara repeticiones del mismo método en condiciones parecidas."
  ],
  "howItWorks": "Estimación de distancia de uso habitual: VO₂max = (D−504,9)/44,73, D en metros. Por pulso: VO₂max =15,3×HRmax/HRrest. Resultado en ml oxígeno/kg/min. Si D≤504,9, la primera expresión no es positiva y la estimación no está disponible. Esa frontera matemática no valida cualquier distancia mayor.",
  "example": "2600 m en 12 min: (2600−504,9)/44,73=46,839 ml/kg/min. Modo pulso: máximo 190, reposo 60 →15,3×190/60=48,45. Con reposo 55 resulta 52,855. Los supuestos distintos no permiten validar una cifra con otra.",
  "faq": [
    {
      "q": "¿Qué estimación de VO₂max aquí es más fiable?",
      "a": "No hay un ganador universal. Distancia depende de condiciones y reparto del esfuerzo; proporción de pulsos, de mediciones y población estudiada. Los decimales no expresan precisión personal."
    },
    {
      "q": "¿Qué VO₂max calculado debe considerarse bueno?",
      "a": "No se fijan normas universales por edad o sexo. La interpretación depende de población y método; una cifra no es un diagnóstico ni un permiso para el esfuerzo."
    },
    {
      "q": "¿Debo buscar el pulso máximo específicamente para VO₂max?",
      "a": "No para este cálculo. Usa datos existentes de una evaluación apropiada. Los tests máximos requieren participantes adecuados; personas sin preparación necesitan una evaluación elegida individualmente."
    },
    {
      "q": "¿Puedo comparar Cooper y la proporción de pulsos?",
      "a": "Son dos modelos; coincidir no confirma consumo medido. La validación inicial del pulso incluyó hombres entrenados de 21–51, no un sustituto universalmente seguro de las pruebas."
    },
    {
      "q": "¿Cómo influye el error de distancia en Cooper?",
      "a": "Con esta fórmula 50 m cambian el valor 50/44,73≈1,118 ml/kg/min. Longitud de pista, última vuelta parcial y GPS importan incluso sin cambiar tu forma física."
    }
  ],
  "disclaimer": "Estimaciones empíricas, no diagnóstico ni prescripción de ejercicio. Cooper Institute describe pruebas para personas aparentemente sanas y activas regularmente. Enfermedades y fármacos que alteran el pulso limitan el modelo."
};
