import type { CalculatorCopy } from '../../lib/platform/types';

export const waistRatioCopyEs: CalculatorCopy = {
  "name": "Calculadora de índice cintura-estatura",
  "slug": "indice-cintura-estatura",
  "shortDescription": "WHtR y WHR con protocolo de medida y límites condicionados del cribado adulto NICE.",
  "longDescription": "Calcula dos índices adimensionales: cintura-estatura (WHtR) y cintura-cadera (WHR). La categoría solo se aplica a WHtR y describe cribado de adiposidad central, no salud general. Los límites NICE son para adultos con IMC inferior a 35: 0,4–<0,5 sin aumento, 0,5–<0,6 aumentado, desde 0,6 alto. El IMC no se calcula aquí; comprueba esa condición aparte. Menos de 0,4 queda fuera de esas tres categorías y no implica diagnóstico de bajo peso.",
  "seoTitle": "Calculadora de cintura-estatura y cintura-cadera",
  "seoDescription": "WHtR y WHR con protocolo de medida y límites condicionados del cribado adulto NICE.",
  "h1": "Calculadora de índice cintura-estatura",
  "keywords": [
    "índice cintura estatura",
    "índice cintura cadera",
    "calculadora ICE",
    "medida de cintura y salud"
  ],
  "howToUse": [
    "Localiza la parte inferior de costillas y superior de caderas; mide a mitad entre ellas tras espirar normalmente.",
    "Mantén la cinta horizontal sin comprimir piel ni meter el abdomen.",
    "Mide la circunferencia más amplia de caderas y estatura sin calzado; usa centímetros.",
    "Lee la categoría como cribado adulto condicionado a IMC<35, no un veredicto médico personal."
  ],
  "howItWorks": "WHtR = cintura/estatura; WHR = cintura/cadera. La categoría usa WHtR sin redondear: 0,4≤r<0,5; 0,5≤r<0,6; r≥0,6. Exactamente 0,5 y 0,6 entran al rango siguiente. El índice mostrado se redondea; el intervalo de categoría indica el lado usado de la frontera.",
  "example": "84 cm/178 cm=0,4719; 100 cm de cadera da WHR=0,84.80 cm/160 cm=0,5 ya entra al rango aumentado; 79 cm/160 cm=0,4938 queda debajo. Valores muy próximos pueden mostrarse iguales al redondear; la clasificación ocurre antes.",
  "faq": [
    {
      "q": "¿Dónde mido cintura para estos límites de WHtR?",
      "a": "NICE usa el punto medio entre costillas inferiores y caderas superiores tras una espiración natural. El lugar más estrecho o el ombligo pueden diferir; no mezcles protocolos."
    },
    {
      "q": "¿Por qué WHtR junto al IMC habitual?",
      "a": "El IMC relaciona peso y estatura; WHtR, perímetro abdominal y estatura. NICE lo usa como cribado adicional en adultos con IMC<35. Ninguna cifra confirma salud por sí sola."
    },
    {
      "q": "¿Los límites WHtR son iguales para distintas personas?",
      "a": "Estas categorías adultas NICE se aplican a sexos y etnias con IMC<35. No garantizan riesgo personal idéntico; embarazo y otros cambios de perímetro requieren contexto distinto."
    },
    {
      "q": "¿Por qué WHR aparece sin categoría por sexo?",
      "a": "Cintura-cadera es una medida distinta con otras condiciones y límites. La forma no pregunta sexo y solo muestra aritmética WHR, sin veredicto basado en un supuesto oculto."
    },
    {
      "q": "¿Qué sigue a una categoría de cintura aumentada?",
      "a": "Es motivo para conversar una evaluación posterior con un profesional sanitario, no un diagnóstico independiente ni plan de tratamiento. Una categoría sin aumento tampoco descarta otros riesgos."
    }
  ],
  "disclaimer": "Índices de perímetros y cribado adulto WHtR condicionado a IMC<35. No diagnóstico general; embarazo y cambios de perímetro abdominal requieren evaluación separada."
};
