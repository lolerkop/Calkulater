import type { CalculatorCopy } from '../../lib/platform/types';

export const cpaCplCpiCopyEs: CalculatorCopy = {
  "name": "Calculadora de CPA, CPL y CPI",
  "slug": "cpa-cpl-y-cpi",
  "shortDescription": "Coste por acción, por registro o por instalación a partir del presupuesto y el número de acciones.",
  "seoTitle": "Calculadora de CPA, CPL y CPI — coste por acción",
  "seoDescription": "Calcula el coste por acción, por registro o por instalación de aplicación a partir de un presupuesto publicitario y el número de acciones obtenidas.",
  "h1": "Calculadora de CPA, CPL y CPI",
  "keywords": [
    "calculadora de cpa",
    "coste por registro",
    "coste por instalación",
    "coste por acción"
  ],
  "longDescription": "CPA, CPL y CPI dividen el gasto entre un recuento de eventos, pero valoran resultados distintos: una conversión definida, un contacto confirmado o una instalación. Define el evento y la regla de duplicados antes de comparar campañas. Abrir un formulario no es enviarlo, y una instalación no demuestra uso activo. Aquí se introducen recuentos reales enteros; los créditos fraccionarios de atribución usan otra base de medición.",
  "howItWorks": "CPA, CPL o CPI = gasto ÷ acciones correspondientes. El selector cambia la etiqueta, no la división. «Por mil acciones» = coste por acción × 1 000: escala la misma métrica y no es el CPM de impresiones. Gasto y recuento deben ser positivos. Dos decimales monetarios no aportan precisión a los datos de origen; los importes muy pequeños siguen visibles.",
  "howToUse": [
    "Elige CPA para una conversión definida, CPL para un contacto o CPI para una instalación; fija el evento antes de contar.",
    "Introduce el gasto real y decide antes si incluye comisiones de agencia u otros costes.",
    "Indica un recuento entero positivo de la misma campaña, hasta 9 007 199 254 740 991.",
    "Alinea periodo, ventana de atribución y duplicados. Usa una sola moneda; no se aplica ningún tipo de cambio ni se estima beneficio."
  ],
  "example": "84 000 de gasto y 320 contactos dan CPL = 84 000 ÷ 320 = 262,50. Mil contactos a ese mismo coste medio costarían 262 500. Con cero contactos no se calcula el coste unitario. Un gasto de 10 000 con 100 aperturas de formulario da 100 por apertura, mientras que con 50 formularios enviados da 200 por contacto.",
  "faq": [
    {
      "q": "¿En qué se diferencian CPA, CPL y CPI?",
      "a": "El CPA valora la conversión definida, el CPL un contacto y el CPI una instalación. El CPA puede referirse a una compra u otra acción, por lo que no tiene por qué superar al CPL. Compara el coste del mismo evento definido."
    },
    {
      "q": "¿Debo incluir las comisiones de agencia?",
      "a": "Puedes medir solo inversión en medios o un gasto más amplio con comisiones y otros costes. Indica esa base y úsala en todas las campañas comparadas. La calculadora no decide el alcance de los costes."
    },
    {
      "q": "¿Por qué difieren la plataforma y el CRM?",
      "a": "Revisa ventana y modelo de atribución, fecha de clic o evento, confirmación, duplicados y costes incluidos. La diferencia puede ir en ambos sentidos; el CRM no siempre muestra un coste mayor."
    },
    {
      "q": "¿Un coste por acción menor siempre es mejor?",
      "a": "No. Los contactos baratos pueden convertirse en clientes de pago con menor frecuencia y las instalaciones no implican uso activo. Lee el CPL junto a la tasa de contactos que se vuelven clientes y el CPI junto a la retención. Aumentar el presupuesto no garantiza un coste medio mayor."
    }
  ],
  "disclaimer": "Coste medio de un evento definido a partir del gasto introducido. No estima beneficio, calidad de contactos, atribución ni cambio de divisas."
};
