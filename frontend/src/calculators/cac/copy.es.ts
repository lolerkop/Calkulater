import type { CalculatorCopy } from '../../lib/platform/types';

export const cacCopyEs: CalculatorCopy = {
  "name": "Calculadora del coste de adquisición de clientes",
  "slug": "coste-de-adquisicion-de-clientes",
  "shortDescription": "Gasto medio por cliente nuevo y relación entre ingresos de toda su vida y CAC.",
  "seoTitle": "Calculadora de CAC — coste de adquisición y relación LTV/CAC",
  "seoDescription": "Calcula gasto por cliente nuevo e ingresos de vida divididos entre CAC, sin calificación de rentabilidad.",
  "h1": "Calculadora del coste de adquisición de clientes",
  "keywords": [
    "coste de adquisición de clientes",
    "CAC",
    "LTV CAC",
    "captación de clientes"
  ],
  "longDescription": "El CAC mide el gasto medio para captar un cliente nuevo. Compara canales con el mismo alcance de costes y la misma definición de cliente nuevo. El campo opcional representa aquí los ingresos esperados durante toda la relación con el cliente. Dividirlos entre el CAC indica cobertura por ingresos, pero no demuestra beneficio: 9 000 de ingresos y un CAC de 2 000 dan 4,5 sin considerar producción, atención, devoluciones ni el momento de los cobros.",
  "howItWorks": "CAC = gasto de captación ÷ clientes nuevos. Con CAC e ingresos de vida positivos, la relación = ingresos de vida por cliente ÷ CAC. No se estiman retención, margen ni descuento financiero. Un gasto cero con clientes da CAC 0; la relación exigiría dividir entre cero. Un ingreso vacío o 0 omite la fila adicional. Los importes habituales de CAC se redondean a unidades monetarias enteras y los inferiores a una unidad se muestran con decimales.",
  "howToUse": [
    "Relaciona los costes con los clientes de la misma cohorte; considera el retraso entre gasto y cierre si el ciclo de venta es largo.",
    "Introduce un gasto no negativo y un número entero positivo de clientes, hasta 9 007 199 254 740 991.",
    "Si lo necesitas, añade los ingresos de un cliente durante toda la relación, no solo los de un mes.",
    "Usa una sola moneda para todos los importes. El símbolo local es una convención visual; no se aplica ningún tipo de cambio. La relación no recibe una calificación de saludable."
  ],
  "example": "100 000 de gasto para 50 clientes nuevos dan CAC = 100 000 ÷ 50 = 2 000. Unos ingresos de vida de 9 000 dan 9 000 ÷ 2 000 = 4,50 : 1. Con gasto cero y los mismos 50 clientes, el CAC es 0 y no se calcula la relación.",
  "faq": [
    {
      "q": "¿Qué costes entran en el gasto de captación?",
      "a": "Define el alcance: publicidad, comisiones de agencia, sueldos y herramientas del trabajo de marketing y ventas que capta clientes nuevos. Atender a clientes existentes tiene otra base de costes. Compara canales con el mismo alcance."
    },
    {
      "q": "¿Una relación de 3 : 1 demuestra rentabilidad?",
      "a": "No. El numerador contiene ingresos de toda la vida del cliente, no beneficio ni margen de contribución. Incluso una relación alta puede no cubrir producción y atención. La calculadora no aplica un umbral universal de 3 : 1."
    },
    {
      "q": "¿Cómo tratar un ciclo de venta largo?",
      "a": "Relaciona los costes con la cohorte de clientes con el retraso adecuado. Dividir el gasto de este mes entre clientes de una campaña anterior puede desviar el CAC en ambos sentidos; coincidir en las fechas del calendario no basta."
    },
    {
      "q": "¿Se incluyen los clientes orgánicos?",
      "a": "Para un CAC combinado, incluye todos los clientes nuevos y sus costes. Para un canal de pago, usa sus clientes y costes. Ambas medidas sirven, pero no deben mezclarse al comparar."
    },
    {
      "q": "¿Qué significa un CAC cero?",
      "a": "El gasto introducido es cero. No demuestra captación gratuita si faltan costes. Con ingresos positivos, la relación queda en «—» porque exigiría dividir entre cero."
    },
    {
      "q": "¿Puedo introducir fracciones de clientes de la atribución?",
      "a": "Esta herramienta acepta el recuento real y entero de clientes nuevos. Los créditos fraccionarios de atribución tienen otra base y no deben redondearse silenciosamente a personas."
    }
  ],
  "disclaimer": "Coste de captación y relación con ingresos de vida introducidos. No calcula beneficio, plazo de recuperación ni cambio de divisas."
};
