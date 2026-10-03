import type { CalculatorCopy } from '../../lib/platform/types';
import { buildingWave13ContractContent } from './contractContent';

const metadata = {
  "name": "Calculadora de resina epoxi",
  "slug": "resina-epoxi",
  "shortDescription": "Cuánta resina y cuánto endurecedor lleva un vertido.",
  "seoTitle": "Calculadora de resina epoxi — cuánta para un vertido",
  "seoDescription": "Calcula cuánta resina epoxi y cuánto endurecedor lleva un vertido a partir de sus dimensiones y el espesor de la capa.",
  "h1": "Calculadora de resina epoxi",
  "keywords": [
    "resina epoxi",
    "cantidad de resina",
    "proporción de endurecedor",
    "mesa de río"
  ]
};

export const epoxyVolumeCopyEs: CalculatorCopy = {
  ...metadata,
  ...buildingWave13ContractContent.es,
};
