import type { CalculatorCopy } from '../../lib/platform/types';

export const bikeWheelSizeCopyEs: CalculatorCopy = {
  "name": "Calculadora de tamaño de rueda de bicicleta",
  "slug": "tamano-de-rueda-de-bicicleta",
  "shortDescription": "Estima geometría por ETRTO o calcúlala con diámetro exterior medido.",
  "seoTitle": "Calculadora de tamaño de rueda de bicicleta: diámetro y perímetro",
  "seoDescription": "Estima geometría por ETRTO o calcúlala con diámetro exterior medido.",
  "h1": "Calculadora de tamaño de rueda de bicicleta",
  "keywords": [
    "perímetro de rueda de bicicleta",
    "calculadora ETRTO",
    "calculadora de tamaño de rueda",
    "tamaño de rueda para ciclocomputador"
  ],
  "longDescription": "ETRTO expresa anchura nominal de cubierta y diámetro de asiento del talón de la llanta. Aquí se estima diámetro exterior suponiendo altura=anchura, no como definición ETRTO. El modo pulgadas usa un diámetro exterior introducido como medida; el nombre histórico “26 pulgadas” no equivale necesariamente a ella.",
  "howToUse": [
    "Para 25-622 introduce anchura 25 y diámetro de asiento 622 mm.",
    "Trata el resultado ETRTO como una estimación geométrica inicial.",
    "En pulgadas introduce diámetro exterior medido, no solo nombre comercial.",
    "Para el ciclocomputador mide una vuelta cargada con presión de uso."
  ],
  "howItWorks": "Estimación ETRTO: D≈BSD+2W, con anchura W en lugar de altura radial. Pulgadas: D=d×25,4 mm. C=πD, radio=D/2, vueltas por km=1 000 000/C. Anchura cero describe una circunferencia de llanta, no una rueda utilizable.",
  "example": "25-622: D≈622+2×25=672 mm; C≈2111,15 mm=2,11115 m y unas 473,68 vueltas por km. Estima geometría, no mide rodamiento real.",
  "faq": [
    {
      "q": "¿Cómo leo un tamaño ETRTO de cubierta?",
      "a": "25-622 significa anchura nominal 25 mm y asiento 622 mm. Ayuda a comparar asiento, pero no verifica toda compatibilidad entre cubierta, llanta y cuadro."
    },
    {
      "q": "¿Por qué se duplica anchura en esta estimación?",
      "a": "La altura radial se añade arriba y abajo; se aproxima mediante anchura, aunque la forma real depende de cubierta y llanta."
    },
    {
      "q": "¿Por qué los nombres en pulgadas difieren de ETRTO?",
      "a": "Las etiquetas históricas son ambiguas:28 y 29 pueden usar asiento 622 mm;26 no identifica por sí solo un diámetro de asiento."
    },
    {
      "q": "¿Sirve la circunferencia estimada para el ciclocomputador?",
      "a": "Rodamiento cambia con construcción, llanta, presión y carga. Para calibrar, mide el recorrido de una vuelta cargada."
    },
    {
      "q": "¿Cómo paso circunferencia a la calculadora de transmisión?",
      "a": "Divide mm entre 1000:2111,15 mm → 2,11115 m. Prefiere rodamiento medido si lo tienes."
    }
  ],
  "disclaimer": "Geometría inicial con altura≈anchura. No confirma rodamiento exacto, ajuste, holguras ni instalación segura."
};
