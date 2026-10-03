// Complete subject copy; metadata and published locale routes are preserved.
import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const differenceAbsRelCopyEs: CalculatorCopy = {
  name: "Diferencia absoluta y relativa",
  slug: "diferencia-absoluta-y-relativa",
  shortDescription: "Cuánto se diferencian dos valores, en unidades y en porcentaje.",
  seoTitle: "Calculadora de diferencia absoluta y relativa",
  seoDescription: "Calcula la diferencia con signo y la relativa respecto al valor absoluto inicial. Se admiten bases negativas; la base cero no tiene porcentaje relativo.",
  h1: "Diferencia absoluta y relativa",
  keywords: ["diferencia absoluta", "diferencia relativa", "diferencia en porcentaje"],
  ...contractContent.es,
};
