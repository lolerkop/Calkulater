// Подробный испанский текст калькуляторов.
//
// Устроено так же, как немецкий слой: общая оболочка достраивает страницу, а
// здесь лежит то, что у каждого калькулятора своё — объяснение механики, разбор
// примера и вопросы по этому конкретному инструменту. Без этого файла испанская
// страница не собирается вовсе: доступность локали требует и копирайта, и
// подробного текста, потому что сотня одинаковых абзацев «La calculadora aplica
// la fórmula» — это не локализация, а её имитация.
//
// Источник смысла — сам compute калькулятора и английский слой; русский,
// украинский и немецкий тексты служат сверкой. Числа в примерах пересчитаны по
// формуле, а не перенесены из другой локали.

import type { CalculatorDef } from '../lib/types';
import { esCanaryContent } from './esContent/canary';
import { esSportContent } from './esContent/sport';
import { esDateTimeContent } from './esContent/date-time';
import { esEducationContent } from './esContent/education';
import { esComputersContent } from './esContent/computers';
import { esElectronicsContent } from './esContent/electronics';
import { esChemistryContent } from './esContent/chemistry';
import { esPhysicsContent } from './esContent/physics';
import { esMathContent } from './esContent/math';
import { esGeometryContent } from './esContent/geometry';
import { esConvertersContent } from './esContent/converters';

type DetailedContent = Pick<
  CalculatorDef,
  'longDescription' | 'howToUse' | 'howItWorks' | 'example' | 'faq'
>;

export const esCalculatorContent: Partial<Record<string, DetailedContent>> = {
  ...esCanaryContent,
  ...esSportContent,
  ...esDateTimeContent,
  ...esEducationContent,
  ...esComputersContent,
  ...esElectronicsContent,
  ...esChemistryContent,
  ...esPhysicsContent,
  ...esMathContent,
  ...esGeometryContent,
  ...esConvertersContent,
};
