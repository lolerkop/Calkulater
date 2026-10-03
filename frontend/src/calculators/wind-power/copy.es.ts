import type { CalculatorCopy } from '../../lib/platform/types';
import { contract } from './contractContent';
export const windPowerCopyEs: CalculatorCopy = {
 ...{
  "name": "Calculadora de energía eólica",
  "slug": "energia-eolica",
  "shortDescription": "Potencia del viento y potencia que puede extraer un rotor, frente al límite de Betz.",
  "seoTitle": "Calculadora de energía eólica — potencia del viento y producción de la turbina",
  "seoDescription": "Potencia mecánica instantánea del rotor, límite Betz exacto 16/27 y energía en 24 horas con condiciones constantes.",
  "h1": "Calculadora de energía eólica",
  "keywords": [
    "energía eólica",
    "aerogenerador",
    "límite de Betz",
    "área barrida"
  ]
},
 ...contract.es,
};
