import type { CalculatorCopy } from '../../lib/platform/types';

export const convertRadiationCopyEs: CalculatorCopy = {
  "name": "Conversor de dosis de radiación",
  "slug": "conversor-de-dosis-de-radiacion",
  "shortDescription": "Sieverts, milisieverts, microsieverts y rem, convertidos en ambos sentidos.",
  "seoTitle": "Conversor de dosis de radiación: sievert, milisievert y rem",
  "seoDescription": "Convierte entre sieverts, milisieverts, microsieverts, nanosieverts, rem y milirem.",
  "h1": "Conversor de dosis de radiación",
  "keywords": [
    "sievert a rem",
    "conversor de dosis de radiación",
    "mSv a µSv",
    "milirem"
  ],
  "longDescription": "Convierte unidades de dosis equivalente: Sv, mSv, µSv, nSv, rem y mrem. Mantén la misma magnitud dosimétrica y el periodo de exposición. La dosis absorbida en gray, la actividad en becquerel y la tasa de dosis en Sv/h quedan fuera de la lista.",
  "howItWorks": "1 mSv = 10⁻³ Sv; 1 µSv = 10⁻⁶ Sv; 1 nSv = 10⁻⁹ Sv; 1 rem = 0,01 Sv; 1 mrem = 10⁻⁵ Sv. Multiplica la entrada por la relación de factores de las unidades. Los factores son exactos; la aritmética informática y la visualización se redondean. Se admite entrada finita no negativa, incluido cero. Los valores pequeños usan notación científica; desbordar o perderse hasta cero produce un error.",
  "example": "1 mSv = 1000 µSv; 250 mrem = 2,5 mSv. 1 nSv = 1 × 10⁻⁹ Sv, no una dosis cero.",
  "howToUse": [
    "Introduce una dosis finita no negativa.",
    "Elige unidades de origen y destino de la misma magnitud dosimétrica.",
    "Lee el factor en la fila de relación; el periodo de exposición no cambia."
  ],
  "faq": [
    {
      "q": "¿Por qué no aparece Gy?",
      "a": "El gray mide energía absorbida por masa: 1 Gy = 1 J/kg. La dosis equivalente en Sv utiliza factores de ponderación de la radiación. La relación necesita un modelo de exposición, no un factor universal de unidades."
    },
    {
      "q": "¿Puede convertirse Bq en Sv?",
      "a": "No. El becquerel mide actividad de la fuente, no dosis. Calcular una dosis requiere propiedades de radiación, geometría y condiciones de exposición."
    },
    {
      "q": "¿Son intercambiables dosis equivalente y efectiva?",
      "a": "No, aunque ambas se expresan en Sv. La efectiva incorpora además ponderaciones de tejidos. El conversor cambia unidades, no el significado físico."
    },
    {
      "q": "¿Qué ocurre con µSv/h?",
      "a": "Es tasa de dosis, no dosis. Aquí no hay entrada de tiempo. Para obtener dosis se necesita otro modelo que integre la tasa durante el periodo."
    },
    {
      "q": "¿El resultado determina la seguridad?",
      "a": "No. Un número sin tipo de dosis, periodo y condiciones no evalúa riesgo. El conversor no establece límites médicos ni reglamentarios."
    }
  ],
  "disclaimer": "Solo cambian las unidades de una misma magnitud dosimétrica. No se convierten Gy, Bq ni tasas de dosis; no se evalúan riesgo ni admisibilidad. La visualización se redondea."
};
