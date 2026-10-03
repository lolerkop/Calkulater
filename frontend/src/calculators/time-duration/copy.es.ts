import { dateTimeWave15ContractContent } from '../../data/dateTimeWave15ContractContent';
// Испанский копирайт калькулятора.
// Владение копирайтом объявляет доступность калькулятора в локали: без этого
// файла испанской страницы не существует. Подробный текст живёт в
// `src/data/esCalculatorContent.ts`.

import type { CalculatorSeoCopy } from '../../lib/platform/types';

export const timeDurationCopyEs: CalculatorSeoCopy = {
  name: "Calculadora de duración de tiempo",
  slug: "duracion-de-tiempo",
  shortDescription: "Duración entre dos horas, o una hora desplazada por una duración.",
  seoTitle: "Calculadora de duración — horas y minutos entre dos horas",
  seoDescription: "Calcula minutos entre dos horas o añade y resta duraciones enteras; la hora resultante se muestra dentro del día, sin reglas de cambio de horario.",
  h1: "Calculadora de duración de tiempo",
  keywords: ["duración de tiempo", "horas entre dos horas", "sumar tiempo"],

    ...dateTimeWave15ContractContent.es['time-duration'],
  };
