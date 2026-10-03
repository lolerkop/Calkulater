// Complete subject copy; metadata and published locale routes are preserved.
import type { CalculatorCopy } from '../../lib/platform/types';

import { contractContent } from './contractContent';

export const dayOfWeekCopyEs: CalculatorCopy = {
  name: "Calculadora del día de la semana",
  slug: "dia-de-la-semana",
  shortDescription: "En qué día de la semana cae una fecha.",
  seoTitle: "Calculadora del día de la semana — el día de cualquier fecha",
  seoDescription: "Obtén el día de la semana y del año de una fecha gregoriana, y el número y año de la semana ISO. Fin de semana marca sábado y domingo sin festivos.",
  h1: "Calculadora del día de la semana",
  keywords: ["día de la semana", "qué día fue", "calculadora de día de la semana"],
  ...contractContent.es,
};
