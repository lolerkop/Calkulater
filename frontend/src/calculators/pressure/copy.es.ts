import type { CalculatorCopy } from '../../lib/platform/types';

export const pressureCopyEs: CalculatorCopy = {
  "name": "Calculadora de presión",
  "slug": "calculadora-de-presion",
  "shortDescription": "Presión, fuerza o área a partir de p = F ÷ A.",
  "seoTitle": "Calculadora de presión — p = F ÷ A",
  "seoDescription": "Calcula la presión mecánica, la fuerza o el área de apoyo a partir de p = F ÷ A en pascales.",
  "h1": "Calculadora de presión",
  "keywords": [
    "calculadora de presión",
    "fuerza entre área",
    "calculadora de pascales",
    "área de apoyo"
  ],
  "longDescription": "Calcula la presión media con la componente normal de la fuerza y el área de contacto, o despeja fuerza o área. No obtiene la distribución superficial: los valores locales en los bordes pueden diferir de la media. La fila en atmósferas convierte unidades con 1 atm = 101 325 Pa, no añade presión ambiental. La presión admisible del terreno la introduces tú; no se comprueban resistencia ni asentamiento.",
  "howToUse": [
    "Elige presión, fuerza o área.",
    "Usa fuerza normal en N y área en m²; descompón primero una fuerza inclinada.",
    "Para hallar el área, fuerza y presión deben ser positivas; la pareja cero no determina el área.",
    "Multiplica los cm² por 0,0001 para obtener m²: 1 cm² = 0,0001 m²."
  ],
  "howItWorks": "p = Fₙ/A es presión normal media; Fₙ = pA y A = Fₙ/p. El área es positiva. Fuerza cero da presión cero, y presión cero con área conocida da fuerza cero. Hallar un área positiva exige Fₙ > 0 y p > 0. La presión en atm es p/101325.",
  "example": "1000 N sobre 2 m² dan 500 Pa. Los mismos 1000 N sobre 1 cm², es decir 0,0001 m², dan 10 000 000 Pa = 10 MPa. Con 2000 N y 100 000 Pa, el área es 0,02 m².",
  "faq": [
    {
      "q": "¿Por qué un apoyo ancho reduce la presión media?",
      "a": "Con fuerza normal fija, duplicar el área reduce F/A a la mitad. No describe picos locales ni cambios de las propiedades del terreno."
    },
    {
      "q": "¿Es presión manométrica o absoluta?",
      "a": "Se calcula Fₙ/A sin elegir una referencia de presión. Pasar de manométrica a absoluta requiere la presión ambiental real, que no tiene por qué ser 101 325 Pa."
    },
    {
      "q": "¿Cómo uso el cálculo inverso del área de apoyo?",
      "a": "Introduce fuerza y una presión media admisible justificada por separado. A = F/p da el área del modelo, no verifica una cimentación; excluye cargas no uniformes, estabilidad y asentamiento."
    },
    {
      "q": "¿Es la misma unidad que en neumáticos o tuberías?",
      "a": "Sí: Pa equivale a N/m². Un instrumento puede indicar presión absoluta, manométrica o diferencial; identifica su referencia antes de comparar."
    },
    {
      "q": "¿Por qué la fuerza puede ser cero y el área no?",
      "a": "Fuerza cero sobre área positiva da presión media cero. Área cero produce denominador cero; F = p = 0 no determina un área positiva."
    }
  ],
  "disclaimer": "Escenario de presión normal media no negativa; no calcula tensiones locales, resistencia del terreno ni conversiones automáticas de referencia de presión."
};
