import type { CalculatorCopy } from '../../lib/platform/types';

export const maxHeartRateCopyEs: CalculatorCopy = {
  "name": "Calculadora de frecuencia cardíaca máxima",
  "slug": "frecuencia-cardiaca-maxima",
  "shortDescription": "Pulso estimado por edad y porcentajes del máximo o reserva, con límites de las poblaciones estudiadas.",
  "longDescription": "Muestra una estimación de frecuencia máxima por edad y rangos porcentuales aritméticos. Tanaka es una regresión para adultos sanos; Gulati describe el pico medio en mujeres sin síntomas. No es un límite cardíaco medido. Con frecuencia de reposo los porcentajes se aplican a la reserva; sin ella al máximo estimado. Los intervalos no fijan umbrales aeróbicos individuales, quema de grasa ni intensidad segura. 18–120 años es el rango del formulario, no prueba de igual precisión en toda edad.",
  "seoTitle": "Estimación de frecuencia cardíaca máxima — tres fórmulas",
  "seoDescription": "Pulso estimado por edad y porcentajes del máximo o reserva, con límites de las poblaciones estudiadas.",
  "h1": "Calculadora de frecuencia cardíaca máxima",
  "keywords": [
    "calculadora de frecuencia cardíaca máxima",
    "zonas de frecuencia cardíaca",
    "fórmula de Karvonen",
    "reserva cardíaca"
  ],
  "howToUse": [
    "Introduce una edad adulta entera y elige la población estudiada pertinente.",
    "Para reserva introduce el reposo medido; vacío o 0 significa no indicado.",
    "Comprueba la columna: porcentaje del máximo y de la reserva dan límites distintos.",
    "Compara modelos y acuerda por separado un plan personal de ejercicio."
  ],
  "howItWorks": "HRmax: 220−edad; Tanaka 208−0,7×edad; Gulati 206−0,88×edad. Con reposo R: límite =R+p(HRmax−R), p de 0,5 a 1. Sin R: límite =pHRmax. Solo la presentación se redondea a pulsaciones/min enteras.",
  "example": "35 años: 220−35=185/min. Reposo 60 da reserva 125; 70–80%: 60+0,7×125=147,5→148 y 60+0,8×125=160. Sin reposo, 70–80% del máximo da 130–148. A 60 años: fórmula convencional 160, Tanaka 166/min.",
  "faq": [
    {
      "q": "¿Qué precisión tiene el máximo cardíaco por edad?",
      "a": "Es una estimación poblacional. El máximo personal puede diferir; aquí no hay intervalo de error garantizado. Coincidir con la cifra no establece un diagnóstico."
    },
    {
      "q": "¿Qué implica elegir Tanaka o Gulati?",
      "a": "Tanaka 208−0,7×edad se estudió en adultos sanos. Gulati 206−0,88×edad describe el pico medio de mujeres sin síntomas. Frente a Tanaka, 220−edad es menor después de 40 años y mayor antes."
    },
    {
      "q": "¿Por qué introducir reposo para los rangos porcentuales?",
      "a": "Cambia la base del porcentaje. Con máximo 185 y reposo 60,70% de reserva da 147,5 y 70% del máximo 129,5. Son cálculos distintos, sin evaluar automáticamente la forma física."
    },
    {
      "q": "¿Cómo preparo el reposo para este cálculo?",
      "a": "Mídelo en condiciones tranquilas comparables en pulsaciones/min. Sueño, estrés y medicamentos pueden alterarlo. Debe ser menor que el máximo estimado; texto erróneo no equivale a cero."
    },
    {
      "q": "¿Puedo entrenar hasta la cifra más alta de la tabla?",
      "a": "La tabla no prescribe carga ni evalúa seguridad. Enfermedades y fármacos que alteran el pulso requieren orientación individual. No intentes alcanzar el máximo estimado solo para comprobarlo."
    }
  ],
  "disclaimer": "Estimación por edad para adultos, no un límite medido ni una prescripción de ejercicio. Los porcentajes fijos no determinan umbrales fisiológicos personales."
};
