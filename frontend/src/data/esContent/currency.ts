// Подробный испанский текст: раздел «currency».
//
// Смысл взят из английского слоя и самого расчёта; числа в примерах
// пересчитаны по формуле, а не перенесены из другой локали.

import type { EsDetailedContent } from './types';

export const esCurrencyContent: Partial<Record<string, EsDetailedContent>> = {
  "currency-converter": {
    longDescription: "Usa este conversor de divisas para estimaciones rápidas de viaje, compras y presupuesto entre monedas populares.",
    howToUse: [
      "Introduce el importe.",
      "Elige la moneda de origen y la de destino.",
      "Consulta el importe convertido.",
    ],
    howItWorks: "La calculadora deriva un tipo cruzado de los tipos de referencia oficiales de los bancos centrales publicados para la fecha mostrada.",
    example: "Convierte 100 USD a EUR para estimar un presupuesto de viaje.",
    faq: [
      { q: "¿Qué exactitud tiene este conversor de divisas?", a: "El resultado es una estimación práctica basada en los valores que introduces y en la fórmula que se muestra en la página." },
      { q: "¿Hace falta una cuenta para usar el conversor de divisas?", a: "No. La calculadora funciona en tu navegador y no exige registro." },
      { q: "¿Puedo compartir un resultado del conversor de divisas?", a: "Sí. Usa el enlace para copiar los datos actuales en la dirección de la página." },
    ],
  },
  "usd-to-eur": {
    longDescription: "Usa este conversor de USD a EUR para estimar importes en euros a partir de dólares estadounidenses.",
    howToUse: [
      "Introduce el importe en USD.",
      "Deja EUR como moneda de destino.",
      "Revisa el importe convertido.",
    ],
    howItWorks: "El conversor deriva el tipo cruzado USD/EUR de los tipos de referencia oficiales de la fecha mostrada.",
    example: "Convierte 100 USD a EUR antes de un viaje o de una compra.",
    faq: [
      { q: "¿Qué exactitud tiene este conversor de USD a EUR?", a: "El resultado es una estimación práctica basada en los valores que introduces y en la fórmula que se muestra en la página." },
      { q: "¿Hace falta una cuenta para usar el conversor de USD a EUR?", a: "No. La calculadora funciona en tu navegador y no exige registro." },
      { q: "¿Puedo compartir un resultado del conversor de USD a EUR?", a: "Sí. Usa el enlace para copiar los datos actuales en la dirección de la página." },
    ],
  },
  "eur-to-mdl": {
    longDescription: "Usa este conversor de EUR a MDL para estimar importes en lei moldavos a partir de euros.",
    howToUse: [
      "Introduce el importe en EUR.",
      "Deja MDL como moneda de destino.",
      "Revisa el importe convertido.",
    ],
    howItWorks: "El conversor deriva el tipo cruzado EUR/MDL de los tipos de referencia oficiales de la fecha mostrada.",
    example: "Convierte 100 EUR a MDL para una estimación rápida de presupuesto.",
    faq: [
      { q: "¿Qué exactitud tiene este conversor de EUR a MDL?", a: "El resultado es una estimación práctica basada en los valores que introduces y en la fórmula que se muestra en la página." },
      { q: "¿Hace falta una cuenta para usar el conversor de EUR a MDL?", a: "No. La calculadora funciona en tu navegador y no exige registro." },
      { q: "¿Puedo compartir un resultado del conversor de EUR a MDL?", a: "Sí. Usa el enlace para copiar los datos actuales en la dirección de la página." },
    ],
  },
  "usd-to-mdl": {
    longDescription: "Usa este conversor de USD a MDL para estimar importes en lei moldavos a partir de dólares estadounidenses.",
    howToUse: [
      "Introduce el importe en USD.",
      "Deja MDL como moneda de destino.",
      "Revisa el importe convertido.",
    ],
    howItWorks: "El conversor deriva el tipo cruzado USD/MDL de los tipos de referencia oficiales de la fecha mostrada.",
    example: "Convierte 100 USD a MDL para una estimación rápida de presupuesto.",
    faq: [
      { q: "¿Qué exactitud tiene este conversor de USD a MDL?", a: "El resultado es una estimación práctica basada en los valores que introduces y en la fórmula que se muestra en la página." },
      { q: "¿Hace falta una cuenta para usar el conversor de USD a MDL?", a: "No. La calculadora funciona en tu navegador y no exige registro." },
      { q: "¿Puedo compartir un resultado del conversor de USD a MDL?", a: "Sí. Usa el enlace para copiar los datos actuales en la dirección de la página." },
    ],
  },
};
