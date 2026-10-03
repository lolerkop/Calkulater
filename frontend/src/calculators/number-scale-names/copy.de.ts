import { contractContent } from './contractContent';
// Немецкий копирайт калькулятора.
// Владение копирайтом объявляет доступность калькулятора в локали: без этого
// файла немецкой страницы не существует. Подробный текст живёт в
// `src/data/deContent/`.

import type { CalculatorCopy } from '../../lib/platform/types';

export const numberScaleNamesCopyDe: CalculatorCopy = {
  name: 'Umrechner für Lakh und Crore',
  slug: 'lakh-crore-umrechner',
  shortDescription: 'Zwischen Lakh, Crore und den vertrauten Tausendern und Millionen umrechnen.',
  seoTitle: 'Lakh und Crore in Millionen — Umrechner für Zahlenskalen',
  seoDescription: 'Rechne Lakh und Crore in Tausender, Millionen und Milliarden um und zurück, mit dem Wert in drei Skalen zugleich.',
  h1: 'Umrechner für Lakh und Crore',
  keywords: ['Lakh in Millionen', 'Crore umrechnen', 'indisches Zahlensystem', 'Lakh Crore Rechner'],
  ...contractContent.de
};
