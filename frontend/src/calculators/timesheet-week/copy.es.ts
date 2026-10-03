import type { CalculatorCopy } from '../../lib/platform/types';
import { contractContent } from './contractContent';

export const timesheetWeekCopyEs: CalculatorCopy = {
  "name": "Calculadora de parte de horas semanal",
  "slug": "parte-de-horas-semanal",
  "shortDescription": "Horas semanales a partir del inicio, el fin y el descanso de cada turno, con horas extra y salario bruto.",
  "seoTitle": "Calculadora de parte de horas semanal — horas, extras y salario",
  "seoDescription": "Suma las horas semanales de turnos con descansos, obtén las horas extra por encima de la jornada estándar y el salario bruto.",
  "h1": "Calculadora de parte de horas semanal",
  "keywords": [
    "parte de horas",
    "horas trabajadas",
    "horas extra",
    "turno de noche"
  ],
  ...contractContent.es,
};
