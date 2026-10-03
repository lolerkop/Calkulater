import { dateTimeWave15ContractContent } from '../../data/dateTimeWave15ContractContent';
// Испанский копирайт калькулятора.
// Владение копирайтом объявляет доступность калькулятора в локали: без этого
// файла испанской страницы не существует. Подробный текст живёт в
// `src/data/esCalculatorContent.ts`.

import type { CalculatorSeoCopy } from '../../lib/platform/types';

export const sleepTimeCopyEs: CalculatorSeoCopy = {
  name: "Calculadora de horas de sueño",
  slug: "horas-de-sueno",
  shortDescription: "Hora de despertar o acostarse con bloques supuestos de 90 minutos.",
  seoTitle: "Calculadora de horas de sueño — ciclos de 90 minutos",
  seoDescription: "Compara horas de despertar y acostarte con bloques fijos de 90 minutos y tiempo para dormirte; la fórmula no identifica fases reales del sueño.",
  h1: "Calculadora de horas de sueño",
  keywords: ["calculadora tiempo de sueño", "hora de acostarse", "hora de despertar", "bloques 90 minutos"],

    ...dateTimeWave15ContractContent.es['sleep-time'],
  };
