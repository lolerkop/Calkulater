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
    howItWorks: "La calculadora obtiene un tipo cruzado de los tipos de referencia guardados. El resultado muestra la fuente y la fecha de cada tipo usado, incluida cualquier fuente de reserva.",
    example: "Convierte 100 USD a EUR para estimar un presupuesto de viaje.",
    faq: [
      { q: "¿Cómo se calcula una conversión entre dos monedas?", a: "Se obtiene un tipo cruzado a partir de los tipos de referencia guardados y se aplica al importe introducido." },
      { q: "¿Dónde veo la fecha y la fuente de los tipos?", a: "La página muestra la fecha y la información sobre la fuente de los tipos usados en la estimación." },
      { q: "¿Recibiré exactamente ese importe en un banco?", a: "No necesariamente. Los bancos y las casas de cambio pueden usar tipos de compra y venta distintos y añadir comisiones." },
    ],
  },
  "usd-to-eur": {
    longDescription: "Usa este conversor de USD a EUR para estimar importes en euros a partir de dólares estadounidenses.",
    howToUse: [
      "Introduce el importe en USD.",
      "Deja EUR como moneda de destino.",
      "Revisa el importe convertido.",
    ],
    howItWorks: "El conversor obtiene el tipo cruzado USD/EUR de los datos guardados; el resultado muestra la fuente y la fecha del tipo EUR.",
    example: "Convierte 100 USD a EUR antes de un viaje o de una compra.",
    faq: [
      { q: "¿Qué introduzco para convertir USD a EUR?", a: "Escribe el importe en dólares estadounidenses; se aplica el tipo cruzado de referencia USD/EUR guardado para estimar los euros." },
      { q: "¿Qué fecha tienen los tipos utilizados?", a: "La fecha que aparece en la página de divisas corresponde a los tipos guardados usados en el cálculo." },
      { q: "¿Por qué puede diferir del cambio de un banco?", a: "Los tipos de referencia no son precios de compra o venta para clientes. Cada entidad puede aplicar un margen y comisiones." },
    ],
  },
  "eur-to-mdl": {
    longDescription: "Usa este conversor de EUR a MDL para estimar importes en lei moldavos a partir de euros.",
    howToUse: [
      "Introduce el importe en EUR.",
      "Deja MDL como moneda de destino.",
      "Revisa el importe convertido.",
    ],
    howItWorks: "El conversor obtiene el tipo cruzado EUR/MDL de los datos guardados; el resultado muestra la fuente y la fecha reales de cada moneda.",
    example: "Convierte 100 EUR a MDL para una estimación rápida de presupuesto.",
    faq: [
      { q: "¿Qué introduzco para convertir EUR a MDL?", a: "Escribe el importe en euros; se aplica el tipo cruzado EUR/MDL guardado para estimar los leus moldavos." },
      { q: "¿Dónde compruebo la fuente del tipo EUR/MDL?", a: "Consulta la fecha y la fuente mostradas junto al resultado, incluida cualquier fuente de reserva identificada por separado." },
      { q: "¿Es el resultado de EUR a MDL una oferta de cambio?", a: "No. Es una estimación de referencia; un proveedor puede ofrecer otro tipo y cobrar comisiones." },
    ],
  },
  "usd-to-mdl": {
    longDescription: "Usa este conversor de USD a MDL para estimar importes en lei moldavos a partir de dólares estadounidenses.",
    howToUse: [
      "Introduce el importe en USD.",
      "Deja MDL como moneda de destino.",
      "Revisa el importe convertido.",
    ],
    howItWorks: "El conversor obtiene el tipo cruzado USD/MDL de los datos guardados; el resultado muestra la fuente y la fecha reales del tipo MDL.",
    example: "Convierte 100 USD a MDL para una estimación rápida de presupuesto.",
    faq: [
      { q: "¿Qué introduzco para convertir USD a MDL?", a: "Escribe el importe en dólares estadounidenses; se aplica el tipo cruzado USD/MDL guardado para estimar los leus moldavos." },
      { q: "¿Dónde compruebo la fuente del tipo USD/MDL?", a: "Consulta la fecha y la fuente mostradas junto al resultado, incluida cualquier fuente de reserva identificada por separado." },
      { q: "¿Es el resultado de USD a MDL una oferta de cambio?", a: "No. Es una estimación de referencia; un proveedor puede ofrecer otro tipo y cobrar comisiones." },
    ],
  },
};
