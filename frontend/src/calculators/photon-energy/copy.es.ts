import type { CalculatorCopy } from '../../lib/platform/types';
import { photonEnergyContractContent } from './contractContent';

export const photonEnergyCopyEs: CalculatorCopy = {
  name: "Calculadora de energía de un fotón",
  slug: "energia-de-un-foton",
  shortDescription: "Energía y frecuencia de un fotón a partir de la longitud de onda.",
  seoTitle: "Calculadora de energía de un fotón — por longitud de onda",
  seoDescription: "Calcula la energía de un fotón en julios y electronvoltios, además de la frecuencia y el número de onda, a partir de la longitud de onda.",
  h1: "Calculadora de energía de un fotón",
  keywords: ["energía de un fotón", "constante de Planck", "longitud de onda de la luz", "electronvoltio"],
  ...photonEnergyContractContent.es,
};
