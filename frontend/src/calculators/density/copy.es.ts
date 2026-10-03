import type { CalculatorCopy } from '../../lib/platform/types';

export const densityCopyEs: CalculatorCopy = {
  "name": "Calculadora de densidad",
  "slug": "calculadora-de-densidad",
  "shortDescription": "Densidad, masa o volumen de una sustancia a partir de ρ = m ÷ V.",
  "seoTitle": "Calculadora de densidad — ρ = m ÷ V",
  "seoDescription": "Calcula la densidad de una sustancia, su masa o su volumen a partir de ρ = m ÷ V en unidades del SI.",
  "h1": "Calculadora de densidad",
  "keywords": [
    "calculadora de densidad",
    "densidad de una sustancia",
    "masa a partir de la densidad",
    "rho = m/v"
  ],
  "longDescription": "Relaciona masa, volumen ocupado y densidad de masa media. Las entradas siempre usan kg, m³ y kg/m³: introducir gramos no cambia la unidad. También se muestra la densidad en g/cm³. El volumen exterior de un cuerpo poroso incluye huecos, mientras el volumen del material los excluye; el resultado depende del volumen medido. Temperatura, presión, composición y porosidad no se asignan automáticamente.",
  "howToUse": [
    "Elige densidad, masa o volumen.",
    "Usa kg, m³ y kg/m³; por ejemplo, 2 litros = 0,002 m³.",
    "Para densidad y masa, el volumen debe ser positivo; la masa o la densidad pueden ser cero.",
    "Hallar un volumen positivo exige masa y densidad positivas; el valor tabulado debe corresponder a las condiciones."
  ],
  "howItWorks": "ρ = m/V, m = ρV y V = m/ρ. 1 g/cm³ = 1000 kg/m³, por lo que la fila en g/cm³ es ρ/1000. El volumen exterior incluye poros en el denominador, sin restarlos automáticamente. Masa cero en un volumen positivo dado produce densidad media cero.",
  "example": "1000 kg en 1 m³ dan 1000 kg/m³ = 1 g/cm³: es un ejemplo redondeado, no la densidad exacta del agua en toda condición. Una pieza de 5,4 kg y 0,002 m³ da 2700 kg/m³ = 2,7 g/cm³; con densidad 2700 y volumen 0,5 m³, la masa es 1350 kg.",
  "faq": [
    {
      "q": "¿En qué se diferencia del conversor de densidad?",
      "a": "El conversor cambia unidades de una densidad conocida. Aquí dos magnitudes relacionadas determinan la tercera y las entradas mantienen unidades del SI."
    },
    {
      "q": "¿Por qué mostrar g/cm³ y es el agua exactamente 1 g/cm³?",
      "a": "Es una unidad útil para materiales: 1000 kg/m³ equivale exactamente a 1 g/cm³. La densidad real del agua depende de temperatura, presión y composición; 1000 es un ejemplo redondeado."
    },
    {
      "q": "¿Puedo obtener la masa de una pieza a partir de su volumen?",
      "a": "Sí, m = ρV. Ambos deben describir la misma pieza: no combines densidad de material compacto con el volumen exterior de una pieza hueca sin considerar sus huecos."
    },
    {
      "q": "¿Cómo se incluyen huecos y porosidad?",
      "a": "Mediante el volumen que eliges. Masa dividida entre volumen exterior con poros da densidad media o aparente; la densidad del material sin poros es otra magnitud."
    },
    {
      "q": "¿En qué se diferencia la densidad del peso específico?",
      "a": "Densidad es masa por volumen en kg/m³. Peso específico es fuerza gravitatoria por volumen en N/m³, igual a ρg para la gravedad elegida."
    },
    {
      "q": "¿Cómo mido el volumen de un cuerpo irregular?",
      "a": "Un objeto impermeable permite medir líquido desplazado. Disolución, absorción, poros abiertos y burbujas pueden alterar la medida; usa un método apropiado al volumen buscado."
    }
  ],
  "disclaimer": "Densidad de masa media para condiciones y volumen elegidos; no modela por separado temperatura, presión, porosidad ni composición."
};
