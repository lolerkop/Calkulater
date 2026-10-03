import { dateTimeWave15ContractContent } from '../../data/dateTimeWave15ContractContent';
// Немецкий копирайт калькулятора.
// Владение копирайтом объявляет доступность калькулятора в локали: без этого
// файла немецкой страницы не существует. Подробный текст живёт в
// `src/data/deContent/`.

import type { CalculatorSeoCopy } from '../../lib/platform/types';

export const sleepTimeCopyDe: CalculatorSeoCopy = {
  name: 'Schlafrechner',
  slug: 'schlafrechner',
  shortDescription: "Aufstehzeit oder Bettzeit mit angenommenen 90-Minuten-Blöcken.",
  seoTitle: 'Schlafrechner — Zyklen zu 90 Minuten',
  seoDescription: "Vergleiche Aufsteh- und Bettzeiten mit festen 90-Minuten-Blöcken und Einschlafzeit; die Formel erkennt keine tatsächlichen Schlafphasen.",
  h1: 'Schlafrechner',
  keywords: ["Schlafzeit Rechner", "Bettzeit planen", "Aufstehzeit", "90 Minuten Blöcke"],

    ...dateTimeWave15ContractContent.de['sleep-time'],
  };
